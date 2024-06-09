/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FormikProps, useFormik } from 'formik';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { checkoutData, statesData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { IPrecheckout } from '@/interfaces';
import { FormCheckoutSchema } from '@/validator/checkout';

import { addTempUser, validateAddress } from './api/onboarding';
import DatePicker from './DatePicker';
import { CheckoutStep } from './Main';
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
	birthdate: null,
};

const Form: React.FC<{
  onNextStep: (data: IPrecheckout.UserDetailData, step: CheckoutStep) => void; // eslint-disable-line no-unused-vars
  initialState?: IPrecheckout.UserDetailData;
}> = ({ onNextStep, initialState = initialValues }) => {
	const router = useRouter();
	// TODO: join_waitlist cannot be implemented because of flow in the BE flow. Need to fix the join_waitlist flow
	const [enableValidation, setEnableValidation] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState(false)

	const formik: FormikProps<IPrecheckout.UserDetailData> = useFormik<IPrecheckout.UserDetailData>({
		validateOnBlur: enableValidation,
		validateOnChange: enableValidation,
		validationSchema: FormCheckoutSchema,
		initialValues: initialState,
		enableReinitialize: true,
		onSubmit: async(form: IPrecheckout.UserDetailData) => {
			const {
				first_name,
				last_name,
				email,
				state,
				phone_number,
				city,
				address_1,
				address_2,
				zip_code,
				birthdate,
			} = form;
			try {
				setIsLoading(true);
				const checkAddress = await handleValidateAddress();
				if (!checkAddress) {
					setIsLoading(false);
					return;
				}
				const tempUser = await addTempUser({
					firstName: first_name,
					lastName: last_name,
					email: email,
					state: state,
					gender: form.gender.toLowerCase(),
					phoneNumber: phone_number,
					city: city,
					addressLine1: address_1,
					addressLine2: address_2,
					zipCode: zip_code,
					dob: `${birthdate?.toISOString()}`,
				});
				setIsLoading(false);
				sessionStorage.setItem('temp_user', JSON.stringify(tempUser.user));
				if (!tempUser.stateExists) {
					return onNextStep({ ...form, id: tempUser.user.id }, CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE);
				}
				return onNextStep({ ...form, id: tempUser.user.id }, CheckoutStep.PRICING_PRODUCT_PLAN);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error:any) {
				setIsLoading(false);
				if (error.toLowerCase().includes('phone number')) {
					formik.setFieldError('phone_number', error);
				} else if (error.toLowerCase().includes('email')) {
					formik.setFieldError('email', error);
				} else {
					toast.error(error as string, {
						icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
					});
				}
			}
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

	const onPlaceSelected = (place: any) => {
		const address = place.formatted_address;
		const addressComponents = place.address_components;
		const city = addressComponents.find((item:any) => item.types.includes('locality'))?.long_name;
		const state = addressComponents.find((item:any) => item.types.includes('administrative_area_level_1'))?.short_name;
		const zipCode = addressComponents.find((item:any) => item.types.includes('postal_code'))?.long_name;
		// const address1 = addressComponents.find((item:any) => item.types.includes('street_number'))?.long_name;
		const address2 = addressComponents.find((item:any) => item.types.includes('route'))?.long_name;

		formik.setFieldValue('city', city ?? '');
		formik.setFieldValue('state', state ?? '');
		formik.setFieldValue('zip_code', zipCode ?? '');
		formik.setFieldValue('address_1', address ?? '');
		formik.setFieldValue('address_2', address2 ?? '');
	}

	const handleValidateAddress = async() => {
		const res = await validateAddress({
			address: {
				addressLines: [formik.values.address_1, formik.values.address_2],
				locality: formik.values.city,
				administrativeArea: formik.values.state,
				postalCode: formik.values.zip_code,
				regionCode: 'US'
			}
		})
		const unconfirmedComponents = res?.result?.address?.unconfirmedComponentTypes;
		unconfirmedComponents?.map(e => {
			if (e === 'postal_code') {
				formik.setFieldError('zip_code', 'Invalid Zip Code')
			}
			if (e === 'locality') {
				formik.setFieldError('city', 'Invalid City')
			}
			if (e === 'administrative_area') {
				formik.setFieldError('state', 'Invalid State')
			}
		})
		return !unconfirmedComponents?.some(type => ['postal_code', 'locality', 'administrative_area'].includes(type));
	}
	
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
					className='flex max-lg:flex-col lg:grid lg:grid-cols-2 gap-[35px] lg:gap-10 2xl:gap-[145px] h-full w-full'
				>
					<div className='flex flex-col'>
						<div className='relative overflow-hidden w-[145px] h-[34.12px] max-lg:hidden'>
							<Image
								src={ formSectionData.image }
								alt='geviti'
								fill
								className='w-full h-full' />
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
								
								{ /* <TextField
									id='address_1'
									name='address_1'
									type='text'
									placeholder='Address 1'
									value={ formik.values.address_1 }
									onChange={ formik.handleChange }
									isError={ !!formik.errors.address_1 }
									errorMessage={ formik.errors.address_1 }
								/> */ }
								<div className='flex flex-col'>
									<Autocomplete
										apiKey={ process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }
										onPlaceSelected={ onPlaceSelected }
										options={ {
											types: ['address'],
											componentRestrictions: { country: 'us' }
										} }
										placeholder='Address 1'
										className={ clsxm(
											'block w-full h-[54px] lg:h-[63px] border-0 outline-red-600 transform focus:outline-none transition-colors duration-300 rounded-[10px]',
											'text-white bg-grey-950 text-xs lg:text-lg font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px',
											!!formik.errors.address_1 ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary',
										) }
										onChange={ e => formik.setFieldValue('address_1', (e.target as HTMLInputElement).value) }
										value={ formik.values.address_1 }
									/>
									{ !!formik.errors.address_1 && formik.errors.address_1 && (
										<p className='text-red-primary text-[10px] mt-1 text-left'>{ formik.errors.address_1 }</p>
									) }
								</div>
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
									disabled={ isLoading }
									className='max-sm:w-full bg-blue-primary text-primary py-[17px] px-[42px] rounded-full hover:brightness-105 transform transition duration-200 focus:ring-0 focus:outline-none disabled:bg-opacity-30 disabled:text-white/50'
								>
									{ isLoading ? 'Loading...' : formSectionData.submitLabel }
								</button>
								<button
									type='button'
									onClick={ () => router.replace('/') }
									className='max-sm:w-full text-grey-primary border border-grey-primary transition duration-200 hover:brightness-105 py-[17px] px-[42px] rounded-full focus:ring-0 focus:outline-none'
								>
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
