'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FormikProps, useFormik } from 'formik';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

import { onboardingData, statesData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { IPrecheckout } from '@/interfaces';
import { createNotionDatabase } from '@/services/precheckout';
import { MergedFormSchema } from '@/validator/onboarding';

import Button from './Button';
import Checkbox from './Checkbox';
import InputLabel, { ErrorMessage } from './InputLabel';
import Select from './InputSelect';
import TextField from './TextField';
import { slideInVariants, slideInVariantsDelay } from './transitions';

type FormWaitlistDetailProps = {
	onSubmit?: (data: IPrecheckout.UserData) => void; // eslint-disable-line no-unused-vars
	userData: IPrecheckout.UserData;
};

const states = statesData.states.options;
const gender = statesData.gender.options;

const FormWaitlistDetail: React.FC<FormWaitlistDetailProps> = ({ onSubmit, userData }) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [enableValidation, setEnableValidation] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const formik: FormikProps<IPrecheckout.UserData> = useFormik<IPrecheckout.UserData>({
		validateOnBlur: enableValidation,
		validateOnChange: enableValidation,
		validationSchema: MergedFormSchema,
		initialValues: {
			name: userData.name,
			email: userData.email,
			state: userData.state,
			gender: userData.gender,
			birthdate: userData.birthdate
		},
		onSubmit: async(form: IPrecheckout.UserData) => {
			setLoading(true);
			const { status, message: messageResponse } = await createNotionDatabase({
				...form,
				isAlreadyOnHRT: false,
				isWaitingList: true
			});
			if (status === 'OK') {
				setLoading(false);
				if (onSubmit) onSubmit(form);
			} else {
				toast.error(messageResponse, {
					icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
				});
			}
			setLoading(false);
		},
	});

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEnableValidation(true);

		formik.handleSubmit();
	};

	const onChangeInput = (name: string, value: string | Date | null) => {
		formik.setFieldValue(name, value);
	};

	const renderDatePicker = () => {
		return (
			<div className='flex flex-col mt-2'>
				<InputLabel>Birthday (MM/DD/YYYY)</InputLabel>
				<div>
					<DatePicker
						onChange={ val => onChangeInput('birthdate', val as Date) }
						selected={ formik.values.birthdate }
						placeholderText='MM/DD/YYYY'
						className={ clsxm(
							'w-full justify-start text-left text-xs font-medium font-Poppins leading-normal rounded-[10px]',
							!formik.values.birthdate ? 'text-grey-primary' : 'text-primary',
							formik.errors.birthdate ? 'bg-red-primary-background ring-[1.5px] ring-red-primary' : 'bg-white'
						) }
						calendarClassName='!font-Poppins'
						open={ false }
					/>
				</div>
				{ formik.errors.birthdate && <ErrorMessage>{ formik.errors.birthdate }</ErrorMessage> }
			</div>
		);
	};

	return (
		<motion.div
			variants={ slideInVariants }
			initial='initial'
			animate='visible'
			exit='exit'
			className='w-full h-full lg:rounded-[20px] text-center relative'
		>
			<div className='flex overflow-hidden lg:absolute max-lg:py-[30px] lg:top-[5%] 2xl:top-[10%] lg:left-1/2 lg:-translate-x-1/2 w-full px-4 xs2:px-6 lg:px-0'>
				<div className='max-w-[430px] mx-auto w-full'>
					<motion.h1
						variants={ slideInVariants }
						initial='initial'
						animate='visible'
						className='text-2xl 2xl:text-[36px] leading-normal -tracking-[0.04em] max-lg:font-medium text-left'>
						{ onboardingData.formWaitlistDetail.title }
					</motion.h1>
					<motion.h2
						variants={ slideInVariants }
						initial='initial'
						animate='visible'
						className='mt-1 text-sm font-BRSonoma leading-normal text-grey-primary font-normal text-left'>
						{ onboardingData.formWaitlistDetail.subtitle }
					</motion.h2>
					<form
						onSubmit={ onSubmitForm }
						className='flex flex-col gap-y-6 lg:gap-y-[2.2vh] mt-6 lg:mt-[2.2vh]'
					>
						<div>
							<motion.div
								variants={ slideInVariantsDelay() }
								initial='initial'
								animate='visible'
							>
								<TextField
									label='Full Name'
									id='name'
									name='name'
									placeholder='Full Name'
									value={ formik.values.name }
									onChange={ formik.handleChange }
									isError={ !!formik.errors.name }
									errorMessage={ formik.errors.name }
								/>
							</motion.div>
							<motion.div
								variants={ slideInVariantsDelay(2) }
								initial='initial'
								animate='visible'
							>
								<TextField
									label='Email Address'
									id='email'
									name='email'
									type='email'
									placeholder='Email Address'
									value={ formik.values.email }
									onChange={ formik.handleChange }
									isError={ !!formik.errors.email }
									errorMessage={ formik.errors.email }
									wrapperClassName='mt-2'
								/>
							</motion.div>
							<motion.div
								initial='initial'
								animate='visible'
								variants={ slideInVariantsDelay(3) }
								className='grid grid-cols-2 gap-2 mt-2'>
								<Select
									label='State'
									placeholder='State'
									options={ states }
									value={ formik.values.state }
									onChange={ val => onChangeInput('state', val) }
									isError={ !!formik.errors.state }
									errorMessage={ formik.errors.state }
								/>

								<Select
									label='Biological Sex'
									placeholder='Biological Sex'
									options={ gender }
									value={ formik.values.gender }
									onChange={ val => onChangeInput('gender', val) }
									isError={ !!formik.errors.gender }
									errorMessage={ formik.errors.gender }
								/>
							</motion.div>
							<motion.div
								initial='initial'
								animate='visible'
								variants={ slideInVariantsDelay(4) }>
								{ renderDatePicker() }
							</motion.div>
							<motion.div
								initial='initial'
								animate='visible'
								variants={ slideInVariantsDelay(5) }
							>
								<div className='mt-6 lg:mt-[1.1vh] flex flex-col gap-y-6 lg:gap-y-[1.1vh]'>
									<Checkbox
										id='agreement-statement'
										checked={ isChecked }
										onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked) }
										label={ onboardingData.formWaitlistDetail.agreementStatement }
									/>
								</div>
							</motion.div>
						</div>

						<motion.div
							initial='initial'
							animate='visible'
							variants={ slideInVariantsDelay(6) }
						>
							<Button
								type='submit'
								disabled={ !isChecked || loading }
							>
								{ loading ? 'Loading...' : onboardingData.formWaitlistDetail.submitLabel }
							</Button>
						</motion.div>
					</form>
				</div>
			</div>
		</motion.div>
	);
};

export default FormWaitlistDetail;