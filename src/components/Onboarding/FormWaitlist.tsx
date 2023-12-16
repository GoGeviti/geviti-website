'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { onboardingData } from '@/constant/data';

import Button from './Button';
import SuccessNotif from './SuccessNotif';
import TextField from './TextField';
import { slideInVariants, slideInVariantsDelay } from './transitions';

type FormWaitlistProps = {
	onSubmit?: (email: string) => void; // eslint-disable-line no-unused-vars
};

const FormWaitlist: React.FC<FormWaitlistProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState<string>('');

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (onSubmit) onSubmit(email);
	};

	return (
		<motion.div
			variants={ slideInVariants }
			initial='initial'
			animate='visible'
			exit='exit'
			className='w-full h-full lg:rounded-[20px] text-center relative'
		>
			<div className='absolute top-[30px] lg:top-[5%] 2xl:top-[10%] left-1/2 -translate-x-1/2 w-full max-lg:px-4'>
				<div className='max-w-[430px] mx-auto w-full'>
					<SuccessNotif
						title={ onboardingData.formWaitlist.notif.title }
						subtitle={ onboardingData.formWaitlist.notif.subtitle }
					/>
					<motion.h1
						variants={ slideInVariants }
						className='text-2xl 2xl:text-[36px] leading-normal -tracking-[0.04em] max-lg:font-medium text-center lg:text-left'>
						{ onboardingData.formWaitlist.title }
					</motion.h1>
					<motion.h2
						variants={ slideInVariants }
						className='mt-[5px] mb-6 font-BRSonoma font-normal text-sm leading-normal text-grey-primary text-left'>
						{ onboardingData.formWaitlist.subtitle }
					</motion.h2>
					<form
						onSubmit={ onSubmitForm }
						className='flex flex-col gap-y-6'
					>
						<motion.div
							variants={ slideInVariantsDelay() }
							initial='initial'
							animate='visible'
						>
							<TextField
								label='Email'
								id='email'
								name='email'
								type='email'
								placeholder='Email'
								value={ email }
								onChange={ onChangeInput }
							/>
						</motion.div>

						<motion.div
							variants={ slideInVariantsDelay(2) }
							initial='initial'
							animate='visible'
						>
							<Button type='submit'>
								{ onboardingData.formWaitlist.submitLabel }
							</Button>
						</motion.div>
					</form>
				</div>
			</div>
		</motion.div>
	);
};

export default FormWaitlist;