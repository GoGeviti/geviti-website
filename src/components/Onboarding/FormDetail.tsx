'use client';

import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { FormikProps, useFormik } from 'formik';
import { motion, Variants } from 'framer-motion';

import { onboardingData, statesData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { FormDetailSchema } from '@/validator/onboarding';

import Button from './Button';
import Checkbox from './Checkbox';
import InputLabel, { ErrorMessage } from './InputLabel';
import Select from './InputSelect';
import SuccessNotif from './SuccessNotif';
import { notifTransitionProps, slideInVariants, slideInVariantsDelay } from './transitions';

export type FormDetailState = {
	state: string;
	gender: string;
	birthdate: Date | null;
};

type NotifErrorMessageState = {
	title: string;
	subtitle: string;
	form_id?: string;
};

type FormDetailProps = {
	onSubmit?: (data: FormDetailState) => void; // eslint-disable-line no-unused-vars
};

const errorNotifVariants: Variants = {
	initial: {
		opacity: 0,
		scale: 0.8
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: notifTransitionProps
	}
};

const states = statesData.states.options;
const gender = statesData.gender.options;

const FormDetail: React.FC<FormDetailProps> = ({ onSubmit }) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [notifErrorMessage, setNotifErrorMessage] = useState<NotifErrorMessageState>({
		title: '',
		subtitle: '',
		form_id: ''
	});
	const [enableValidation, setEnableValidation] = useState<boolean>(false);
	const formik: FormikProps<FormDetailState> = useFormik<FormDetailState>({
		validateOnBlur: enableValidation,
		validateOnChange: enableValidation,
		validationSchema: FormDetailSchema,
		initialValues: {
			state: '',
			gender: '',
			birthdate: null
		},
		onSubmit: (form: FormDetailState) => {
			if (form.state !== 'AZ' && form.state) {
				setNotifErrorMessage({
					title: 'We do not currently offer services in your state.',
					subtitle: 'Please check back again soon for updates.',
					form_id: 'state'
				});
			} else {
				if (onSubmit) onSubmit(form);
			}
		},
	});

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEnableValidation(true);

		formik.handleSubmit();
	};

	const onChangeInput = (name: string, value: string | Date | null) => {
		formik.setFieldValue(name, value);

		if (notifErrorMessage.form_id === name) {
			setNotifErrorMessage({
				title: '',
				subtitle: '',
				form_id: ''
			});
		}
	};

	const renderDatePicker = () => {
		return (
			<div className='flex flex-col mt-2'>
				<InputLabel>Birthday (DD/MM/YYYY)</InputLabel>
				<div>
					<DatePicker
						onChange={ val => onChangeInput('birthdate', val as Date) }
						value={ formik.values.birthdate }
						calendarIcon={ null }
						clearIcon={ null }
						dayPlaceholder='DD'
						monthPlaceholder='MM'
						yearPlaceholder='YYYY'
						className={ clsxm(
							'w-full justify-start text-left text-xs font-medium font-Poppins leading-normal rounded-[10px]',
							!formik.values.birthdate ? 'text-grey-primary' : 'text-primary',
							formik.errors.birthdate ? 'bg-red-primary-background ring-[1.5px] ring-red-primary' : 'bg-white'
						) }
						calendarClassName='font-Poppins !border-0 shadow-[0px_32px_105px_0px_rgba(16,24,40,0.13)] rounded-[10px] bg-grey-secondary text-primary !z-[99]'
						format='d/M/y'
						disableCalendar
					/>
				</div>
				{ formik.errors.birthdate && <ErrorMessage>{ formik.errors.birthdate }</ErrorMessage> }
			</div>
		);
	};

	const renderErrorNotif = () => {
		if (notifErrorMessage.title) {
			return (
				<motion.div
					variants={ errorNotifVariants }
					className='w-full relative border-[1.5px] border-red-primary rounded-[10px] py-2 px-[9px] bg-red-primary-background flex items-center gap-x-[9px] text-left'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='22'
						height='22'
						viewBox='0 0 22 22'
						fill='none'>
						<path
							d='M10.25 12C10.25 12.4142 10.5858 12.75 11 12.75C11.4142 12.75 11.75 12.4142 11.75 12H10.25ZM11.75 6C11.75 5.58579 11.4142 5.25 11 5.25C10.5858 5.25 10.25 5.58579 10.25 6H11.75ZM12.25 15.5C12.25 15.0858 11.9142 14.75 11.5 14.75C11.0858 14.75 10.75 15.0858 10.75 15.5H12.25ZM11.25 15.5C11.25 15.0858 10.9142 14.75 10.5 14.75C10.0858 14.75 9.75 15.0858 9.75 15.5H11.25ZM10.75 15.5C10.75 15.9142 11.0858 16.25 11.5 16.25C11.9142 16.25 12.25 15.9142 12.25 15.5H10.75ZM9.75 15.5C9.75 15.9142 10.0858 16.25 10.5 16.25C10.9142 16.25 11.25 15.9142 11.25 15.5H9.75ZM11.5 16.25C11.9142 16.25 12.25 15.9142 12.25 15.5C12.25 15.0858 11.9142 14.75 11.5 14.75V16.25ZM10.5 14.75C10.0858 14.75 9.75 15.0858 9.75 15.5C9.75 15.9142 10.0858 16.25 10.5 16.25V14.75ZM11.75 12V6H10.25V12H11.75ZM10.75 15.5C10.75 15.3619 10.8619 15.25 11 15.25V16.75C11.6903 16.75 12.25 16.1903 12.25 15.5H10.75ZM11 15.25C11.1381 15.25 11.25 15.3619 11.25 15.5H9.75C9.75 16.1903 10.3097 16.75 11 16.75V15.25ZM12.25 15.5C12.25 14.8097 11.6903 14.25 11 14.25V15.75C10.8619 15.75 10.75 15.6381 10.75 15.5H12.25ZM11 14.25C10.3097 14.25 9.75 14.8097 9.75 15.5H11.25C11.25 15.6381 11.1381 15.75 11 15.75V14.25ZM11.5 14.75H10.5V16.25H11.5V14.75ZM20.25 11C20.25 16.1086 16.1086 20.25 11 20.25V21.75C16.937 21.75 21.75 16.937 21.75 11H20.25ZM11 20.25C5.89137 20.25 1.75 16.1086 1.75 11H0.25C0.25 16.937 5.06293 21.75 11 21.75V20.25ZM1.75 11C1.75 5.89136 5.89136 1.75 11 1.75V0.25C5.06294 0.25 0.25 5.06294 0.25 11H1.75ZM11 1.75C16.1086 1.75 20.25 5.89137 20.25 11H21.75C21.75 5.06293 16.937 0.25 11 0.25V1.75Z'
							fill='#EA3F62' />
					</svg>
					<div className='font-BRSonoma flex flex-col'>
						<h6 className='text-sm font-bold text-primary leading-normal'>
							{ notifErrorMessage.title }
						</h6>
						<p className='text-[10.5px] lg:text-xs leading-normal text-grey-primary font-normal'>
							{ notifErrorMessage.subtitle }
						</p>
					</div>
				</motion.div>
			);
		}

		return null;
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
					<SuccessNotif
						title={ onboardingData.formDetail.notifFreeTelehealth.title }
						subtitle={ onboardingData.formDetail.notifFreeTelehealth.subtitle }
					/>
					<motion.h1
						variants={ slideInVariants }
						initial='initial'
						animate='visible'
						className='text-2xl 2xl:text-[36px] leading-normal -tracking-[0.04em] max-lg:font-medium text-left'>
						{ onboardingData.formDetail.title }
					</motion.h1>
					<motion.h2
						variants={ slideInVariants }
						initial='initial'
						animate='visible'
						className='mt-1 text-sm font-BRSonoma leading-normal text-grey-primary font-normal text-left'>
						{ onboardingData.formDetail.subtitle }
					</motion.h2>
					<form
						onSubmit={ onSubmitForm }
						className='flex flex-col gap-y-6 lg:gap-y-[2.2vh] mt-6 lg:mt-[2.2vh]'
					>
						<div>
							<motion.div
								initial='initial'
								animate='visible'
								// exit='exit'
								variants={ slideInVariantsDelay() }
								className='grid grid-cols-2 gap-2'>
								<Select
									label='State'
									placeholder='State'
									options={ states }
									value={ formik.values.state }
									onChange={ val => onChangeInput('state', val) }
									isError={ notifErrorMessage.form_id === 'state' || !!formik.errors.state }
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
								// exit='exit'
								variants={ slideInVariantsDelay(2) }>
								{ renderDatePicker() }
							</motion.div>
							<motion.div
								initial='initial'
								animate='visible'
								// exit='exit'
								variants={ slideInVariantsDelay(3) }
							>
								<div className='mt-6 lg:mt-[1.1vh] flex flex-col gap-y-6 lg:gap-y-[1.1vh]'>
									<Checkbox
										id='agreement-statement'
										checked={ isChecked }
										onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked) }
										label={ onboardingData.formDetail.agreementStatement }
									/>
									{ renderErrorNotif() }
								</div>
							</motion.div>
						</div>

						<motion.div
							initial='initial'
							animate='visible'
							// exit='exit'
							variants={ slideInVariantsDelay(4) }
						>
							<Button
								type='submit'
								disabled={ notifErrorMessage.form_id === 'state' || !isChecked }
							>
								{ onboardingData.formDetail.submitLabel }
							</Button>
						</motion.div>
					</form>
				</div>
			</div>
		</motion.div>
	);
};

export default FormDetail;