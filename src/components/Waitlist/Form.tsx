'use client'
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { FormikProps, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { toast } from 'sonner';

import clsxm from '@/helpers/clsxm';
import { submitWaitlist, submitWaitlistWithPassword } from '@/services/checkout';
import { FormWaitlistSchema, WaitlistFormData } from '@/validator/waitlist';

import ButtonCta from '../ButtonCta';
import TextField from '../Checkout/TextField'
import Toggle from '../UI/Toggle';

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	havePassword: false,
	password: '',
};

type PageProps = {
	productId: string;
	priceId: string;
}

const Form = (props: PageProps) => {
	const router = useRouter();
	const { productId, priceId } = props;

	const [enableValidation, setEnableValidation] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState(false)

	const formik: FormikProps<WaitlistFormData> = useFormik<WaitlistFormData>({
		validateOnBlur: enableValidation,
		validateOnChange: enableValidation,
		validationSchema: FormWaitlistSchema,
		initialValues: initialValues,
		enableReinitialize: true,
		onSubmit: async form => {
			try {
				setIsLoading(true);
				if (form.havePassword) {
					const result = await submitWaitlistWithPassword({
						password: form.password ?? '',
					});
					if (result.status === 'OK') {
						toast.success(result.message);
						return router.push(`/onboarding/payment?product_id=${productId}&price_id=${priceId}`);
					} else {
						throw new Error(result.message || 'An unexpected error occurred');
					}
				}
				const result = await submitWaitlist({
					firstName: form.firstName ?? '',
					lastName: form.lastName ?? '',
					email: form.email ?? '',
				});
				setIsLoading(false);
				if (result.status === 'OK') {
					toast.success(
						'You have been added to the waitlist'
					);
				} else {
					throw new Error(result.message || 'An unexpected error occurred');
				}
			} catch (error: any) {
				setIsLoading(false);
				toast.error(error?.message as string, {
					icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
				});
			}
		},
	});

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEnableValidation(true);
		formik.handleSubmit();
	};

	return (
		<form
			onSubmit={ onSubmitForm }
			className='mt-10 max-w-[588px] mx-auto'
		>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
				<TextField
					isLight
					id='firstName'
					name='firstName'
					placeholder='First Name'
					value={ formik.values.firstName }
					onChange={ formik.handleChange }
					isError={ !!formik.errors.firstName }
					errorMessage={ formik.errors.firstName }
					disabled={ formik.values.havePassword }
				/>
				<TextField
					id='lastName'
					name='lastName'
					isLight
					placeholder='Last Name'
					value={ formik.values.lastName }
					onChange={ formik.handleChange }
					isError={ !!formik.errors.lastName }
					errorMessage={ formik.errors.lastName }
					disabled={ formik.values.havePassword }
				/>
				<div className='lg:col-span-2'>
					<TextField
						id='email'
						name='email'
						placeholder='Email'
						isLight
						value={ formik.values.email }
						onChange={ formik.handleChange }
						isError={ !!formik.errors.email }
						errorMessage={ formik.errors.email }
						disabled={ formik.values.havePassword }
					/>
				</div>
				<div className={ `lg:col-span-2 overflow-hidden transition-all duration-300 ${
					formik.values.havePassword
						? 'max-h-[80px] opacity-100'
						: 'max-h-0 opacity-0'
				}` }>
					<TextField
						id='password'
						name='password'
						placeholder='Password'
						type='password'
						isLight
						value={ formik.values.password }
						onChange={ formik.handleChange }
						isError={ !!formik.errors.password }
						errorMessage={ formik.errors.password }
						disabled={ !formik.values.havePassword }
					/>
				</div>
				<div className={ clsxm(
					'lg:col-span-2 flex items-center text-sm transition-all duration-300 text-yellow-alert gap-3.5',
					!formik.values.havePassword ? '-mt-6' : 'mt-0'
				) }>
					<svg
						width='24'
						height='25'
						viewBox='0 0 24 25'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M12 15.5156C11.59 15.5156 11.25 15.1756 11.25 14.7656V9.76562C11.25 9.35563 11.59 9.01562 12 9.01562C12.41 9.01562 12.75 9.35563 12.75 9.76562V14.7656C12.75 15.1756 12.41 15.5156 12 15.5156Z'
							fill='#F79009'/>
						<path
							d='M12 18.7662C11.94 18.7662 11.87 18.7562 11.8 18.7462C11.74 18.7362 11.68 18.7162 11.62 18.6862C11.56 18.6662 11.5 18.6362 11.44 18.5962C11.39 18.5562 11.34 18.5162 11.29 18.4762C11.11 18.2862 11 18.0262 11 17.7662C11 17.5062 11.11 17.2462 11.29 17.0562C11.34 17.0162 11.39 16.9762 11.44 16.9362C11.5 16.8962 11.56 16.8662 11.62 16.8462C11.68 16.8162 11.74 16.7962 11.8 16.7862C11.93 16.7562 12.07 16.7562 12.19 16.7862C12.26 16.7962 12.32 16.8162 12.38 16.8462C12.44 16.8662 12.5 16.8962 12.56 16.9362C12.61 16.9762 12.66 17.0162 12.71 17.0562C12.89 17.2462 13 17.5062 13 17.7662C13 18.0262 12.89 18.2862 12.71 18.4762C12.66 18.5162 12.61 18.5562 12.56 18.5962C12.5 18.6362 12.44 18.6662 12.38 18.6862C12.32 18.7162 12.26 18.7362 12.19 18.7462C12.13 18.7562 12.06 18.7662 12 18.7662Z'
							fill='#F79009'/>
						<path
							d='M18.0605 22.9255H5.94046C3.99046 22.9255 2.50046 22.2155 1.74046 20.9355C0.990464 19.6555 1.09046 18.0055 2.04046 16.2955L8.10046 5.39547C9.10046 3.59547 10.4805 2.60547 12.0005 2.60547C13.5205 2.60547 14.9005 3.59547 15.9005 5.39547L21.9605 16.3055C22.9105 18.0155 23.0205 19.6555 22.2605 20.9455C21.5005 22.2155 20.0105 22.9255 18.0605 22.9255ZM12.0005 4.10547C11.0605 4.10547 10.1405 4.82547 9.41046 6.12547L3.36046 17.0355C2.68046 18.2555 2.57046 19.3755 3.04046 20.1855C3.51046 20.9955 4.55046 21.4355 5.95046 21.4355H18.0705C19.4705 21.4355 20.5005 20.9955 20.9805 20.1855C21.4605 19.3755 21.3405 18.2655 20.6605 17.0355L14.5905 6.12547C13.8605 4.82547 12.9405 4.10547 12.0005 4.10547Z'
							fill='#F79009'/>
					</svg>
					<span className='mt-1'>There’s a <b>2000</b> people in the line, please enter the pass to skip the line.</span>
				</div>
				<div className='lg:col-span-2'>
					<Toggle
						name='havePassword'
						label='Have a password? Skip the waitlist!'
						initialState={ formik.values.havePassword }
						onChange={ isChecked => {
							formik.setFieldValue('havePassword', isChecked);
						} } />
				</div>
				<div className='lg:col-span-2 place-items-center '>
					<ButtonCta
						type='submit'
						isLoading={ isLoading }
						text={ isLoading
							? 'Loading...'
							: !formik.values.havePassword
								? 'Join the waitlist'
								: 'Join Geviti' }
					/>
				</div>
			</div>
		</form>
	)
}

export default Form