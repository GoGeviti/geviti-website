'use client';

import React, { useState } from 'react';
import { FormikProps, useFormik } from 'formik';
import { motion } from 'framer-motion';

import { onboardingData } from '@/constant/data';
import { FormNameEmailSchema } from '@/validator/onboarding';

import Button from './Button';
import TextField from './TextField';
import { slideInVariants, slideInVariantsDelay } from './transitions';

export type FormNameEmailState = {
	name: string;
	email: string;
};

type FormNameEmailProps = {
	onSubmit: (data: FormNameEmailState) => void; // eslint-disable-line no-unused-vars
};

const FormNameEmail: React.FC<FormNameEmailProps> = ({ onSubmit }) => {
	const [enableValidation, setEnableValidation] = useState<boolean>(false);
	const formik: FormikProps<FormNameEmailState> = useFormik<FormNameEmailState>({
		validateOnBlur: enableValidation,
		validateOnChange: enableValidation,
		validationSchema: FormNameEmailSchema,
		initialValues: {
			name: '',
			email: ''
		},
		onSubmit: (form: FormNameEmailState) => {
			onSubmit(form);
		},
	});

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEnableValidation(true);
		formik.handleSubmit();
	};

	return (
		<motion.div
			variants={ slideInVariants }
			initial='initial'
			animate='visible'
			exit='exit'
			className='w-full h-full lg:rounded-[20px] text-center relative'
		>
			<div className='absolute top-[30px] lg:top-[5%] 2xl:top-[10%] left-1/2 -translate-x-1/2 w-full px-4 xs2:px-6 lg:px-0'>
				<div className='max-w-[430px] mx-auto w-full'>
					<motion.h1
						variants={ slideInVariants }
						className='text-2xl 2xl:text-[36px] leading-normal -tracking-[0.04em] max-lg:font-medium text-left'>
						{ onboardingData.formNameEmail.title }
					</motion.h1>
					<motion.h2
						variants={ slideInVariants }
						className='mt-[5px] mb-6 font-BRSonoma font-normal text-sm leading-normal text-grey-primary text-left'>
						{ onboardingData.formNameEmail.subtitle }
					</motion.h2>
					<form
						onSubmit={ onSubmitForm }
						className='flex flex-col text-left'>
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
							variants={ slideInVariantsDelay(3) }
							initial='initial'
							animate='visible'
						>
							<Button
								type='submit'
								className='mt-6'>
								{ onboardingData.formNameEmail.submitLabel }
							</Button>
						</motion.div>
					</form>
				</div>
			</div>
		</motion.div>
	);
};

export default FormNameEmail;