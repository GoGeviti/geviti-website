'use client';
import React, { useState } from 'react';
import { FormikProps, useFormik } from 'formik';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { checkoutData, statesData } from '@/constant/data';
import { IPrecheckout } from '@/interfaces';
import { FormCheckoutSchema } from '@/validator/checkout';

import DatePicker from './DatePicker';
import Navbar from './Navbar';
import PrivacyPolicyStatement from './PrivacyPolicyStatement';
import ProgressStep from './ProgressStep';
import Select from './Select';
import TextField from './TextField';

const formSectionData = checkoutData.form;
const states = statesData.states.options;
const gender = statesData.gender.options;

const initialValues = {
	first_name: '',
	last_name: '',
	email: '',
	state: '',
	gender: '',
	phone_number: '',
	city: '',
	address_1: '',
	address_2: '',
	zip_code: '',
	birthdate: null
};

const Form: React.FC<{
	onNextStep?: (data: IPrecheckout.UserDetailData) => void; // eslint-disable-line no-unused-vars
	initialState?: IPrecheckout.UserDetailData;
}> = ({ onNextStep, initialState = initialValues }) => {
	const router = useRouter();

	const [enableValidation, setEnableValidation] = useState<boolean>(false);
	const formik: FormikProps<IPrecheckout.UserDetailData> = useFormik<IPrecheckout.UserDetailData>({
		validateOnBlur: enableValidation,
		validateOnChange: enableValidation,
		validationSchema: FormCheckoutSchema,
		initialValues: initialState,
		enableReinitialize: true,
		onSubmit: (form: IPrecheckout.UserDetailData) => {
			if (onNextStep) onNextStep(form);
		},
	});

	const transitionExitBgColor = checkoutData.form.statesAvailable.includes(formik.values.state);

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEnableValidation(true);
		formik.handleSubmit();
	};

	const onChangeInputRestrictNumber = (key: string, val: string) => {
		const updatedVal = val.replace(/[^\d]/g, '');
		formik.setFieldValue(key, updatedVal);
	};

	return (
		<motion.div
			className='flex min-h-screen flex-col relative items-center h-full w-full font-Poppins lg:px-3 xl:px-10 2xl:px-20 pt-[87px] lg:justify-center lg:py-3 xl:py-10'
			initial={ { backgroundColor: '#181A1C' } }
			animate={ { backgroundColor: '#181A1C' } }
			exit={ { backgroundColor: transitionExitBgColor ? '#FFF' : '#181A1C' } }
			transition={ { ease: 'easeInOut', duration: 1 } }
		>
			<Navbar
				className='lg:hidden'
				theme='dark' />
			<div className='bg-primary lg:bg-black-card h-full w-full lg:rounded-20px relative overflow-hidden pt-6 pb-[220px] lg:py-10 xl:py-[4.63vh] px-4 lg:px-10 2xl:px-[123px] xl:min-h-[calc(100svh-80px)]'>
				<motion.div
					variants={ {
						initial: { y: 0, opacity: 1 },
						visible: { y: 0, opacity: 1 },
						exit: { y: '-50%', opacity: 0 },
					} }
					initial='initial'
					animate='visible'
					exit='exit'
					transition={ { ease: 'easeInOut', duration: 1 } }
					className='flex max-lg:flex-col lg:grid lg:grid-cols-2 gap-[35px] lg:gap-10 2xl:gap-[145px] h-full w-full'>
					<div className='flex flex-col'>
						<div className='relative overflow-hidden w-[145px] h-[34.12px] max-lg:hidden'>
							<Image
								src={ formSectionData.image }
								alt='geviti'
								fill
								className='w-full h-full'
							/>
						</div>
						<ProgressStep currentIdx={ 0 } />

						<div className='mt-[42px] lg:mt-6 lg:mb-3.5 xl:mt-[2.222vh] xl:mb-[1.296vh]'>
							<h1 className='text-[7.5vw] xs3:text-3xl lg:text-4xl !leading-normal font-medium !text-white -tracking-0.04em'>
								<span dangerouslySetInnerHTML={ { __html: formSectionData.title } } />
							</h1>
						</div>
						<p className='text-grey-primary text-sm !leading-[17px] max-lg:hidden max-w-[366px]'>
							{ formSectionData.description }
						</p>
					</div>
					<div className='flex flex-col'>
						<form
							onSubmit={ onSubmitForm }
							className='flex flex-col'>
							<h2 className='text-grey-50 text-lg !leading-normal max-lg:font-medium'>
								{ formSectionData.personalInfoSectionLabel }
							</h2>

							<div className='flex flex-col gap-3 lg:gap-6 xl:gap-[2.222vh] mt-6 xl:mt-[2.222vh] mb-[42px] lg:mb-10 xl:mb-[3.704vh]'>
								<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5'>
									<TextField
										id='first_name'
										name='first_name'
										placeholder='First Name'
										value={ formik.values.first_name }
										onChange={ formik.handleChange }
										isError={ !!formik.errors.first_name }
										errorMessage={ formik.errors.first_name }
									/>
									<TextField
										id='last_name'
										name='last_name'
										placeholder='Last Name'
										value={ formik.values.last_name }
										onChange={ formik.handleChange }
										isError={ !!formik.errors.last_name }
										errorMessage={ formik.errors.last_name }
									/>
								</div>

								<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5'>
									<DatePicker
										value={ formik.values.birthdate }
										onSelect={ (date: Date) => formik.setFieldValue('birthdate', date) }
										isError={ !!formik.errors.birthdate }
										errorMessage={ formik.errors.birthdate }
										placeholder='Date of birth MM/DD/YYYY'
									/>

									<Select
										placeholder='Sex'
										options={ gender }
										value={ formik.values.gender }
										onChange={ val => formik.setFieldValue('gender', val) }
										isError={ !!formik.errors.gender }
										errorMessage={ formik.errors.gender }
									/>
								</div>

								<TextField
									id='email'
									name='email'
									type='email'
									placeholder='Email'
									value={ formik.values.email }
									onChange={ formik.handleChange }
									isError={ !!formik.errors.email }
									errorMessage={ formik.errors.email }
								/>

								<TextField
									id='phone_number'
									name='phone_number'
									type='text'
									inputMode='numeric'
									placeholder='Phone Number'
									value={ formik.values.phone_number }
									onChange={ e => onChangeInputRestrictNumber('phone_number', e.target.value) }
									isError={ !!formik.errors.phone_number }
									errorMessage={ formik.errors.phone_number }
								/>
							</div>

							<h2 className='text-grey-50 text-lg !leading-normal max-lg:font-medium'>
								{ formSectionData.homeAddressSectionLabel }
							</h2>

							<div className='flex flex-col gap-3 lg:gap-6 xl:gap-[2.222vh] mt-6 lg:mt-[21px] xl:mt-[1.944vh]'>
								<TextField
									id='address_1'
									name='address_1'
									type='text'
									placeholder='Address 1'
									value={ formik.values.address_1 }
									onChange={ formik.handleChange }
									isError={ !!formik.errors.address_1 }
									errorMessage={ formik.errors.address_1 }
								/>
								<TextField
									id='address_2'
									name='address_2'
									type='text'
									placeholder='Address 2'
									value={ formik.values.address_2 }
									onChange={ formik.handleChange }
									isError={ !!formik.errors.address_2 }
									errorMessage={ formik.errors.address_2 }
								/>

								<div className='grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-5'>
									<div className='lg:col-span-2'>
										<TextField
											id='city'
											name='city'
											type='text'
											placeholder='City'
											value={ formik.values.city }
											onChange={ formik.handleChange }
											isError={ !!formik.errors.city }
											errorMessage={ formik.errors.city }
										/>
									</div>
									<div className='lg:col-span-1'>
										<Select
											placeholder='State'
											options={ states }
											value={ formik.values.state }
											onChange={ val => formik.setFieldValue('state', val) }
											isError={ !!formik.errors.state }
											errorMessage={ formik.errors.state }
										/>
									</div>
									<div className='lg:col-span-1'>
										<TextField
											id='zip_code'
											name='zip_code'
											type='text'
											inputMode='numeric'
											placeholder='Zip'
											value={ formik.values.zip_code }
											onChange={ e => onChangeInputRestrictNumber('zip_code', e.target.value) }
											isError={ !!formik.errors.zip_code }
											errorMessage={ formik.errors.zip_code }
										/>
									</div>
								</div>
							</div>

							<div className='mt-[42px] xl:mt-[3.889vh] flex flex-col sm:flex-row items-center gap-6 font-medium text-lg !leading-6'>
								<button
									type='submit'
									className='max-sm:w-full bg-blue-primary text-primary py-[17px] px-[42px] rounded-full hover:brightness-105 transform transition duration-200 focus:ring-0 focus:outline-none'>
									{ formSectionData.submitLabel }
								</button>
								<button
									type='button'
									onClick={ () => router.back() }
									className='max-sm:w-full text-grey-primary border border-grey-primary transition duration-200 hover:brightness-105 py-[17px] px-[42px] rounded-full focus:ring-0 focus:outline-none'>
									{ formSectionData.cancelLabel }
								</button>
							</div>
						</form>
						<div className='mt-50px xl:mt-[4.63vh]'>
							<PrivacyPolicyStatement
								highlightText='Next Step'
								theme='dark' />
						</div>
					</div>
				</motion.div>
			</div>
			{ transitionExitBgColor && (
				<motion.div
					className='w-full absolute bottom-0 inset-x-0 z-[60] h-10 bg-white max-lg:hidden'
					initial={ { opacity: 0, display: 'hidden', backgroundColor: '#FFF' } }
					animate={ { opacity: 0, display: 'hidden', backgroundColor: '#FFF' } }
					exit={ { backgroundColor: '#FFF', opacity: 1, height: '100%' } }
					transition={ { ease: 'easeInOut', duration: 1 } }
				/>
			) }
		</motion.div>
	);
};

export default Form;