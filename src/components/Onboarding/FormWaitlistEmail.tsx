'use client';

import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

import { onboardingData } from '@/constant/data';
import { IPrecheckout } from '@/interfaces';
import { createNotionDatabase } from '@/services/precheckout';

import Button from './Button';
import SuccessNotif from './SuccessNotif';
import TextField from './TextField';
import { slideInVariants, slideInVariantsDelay } from './transitions';

type FormWaitlistEmailProps = {
	onSubmit?: (email: string) => void; // eslint-disable-line no-unused-vars
	userData: IPrecheckout.UserData;
	isAlreadyOnHRT: boolean;
};

const FormWaitlistEmail: React.FC<FormWaitlistEmailProps> = ({ onSubmit, userData, isAlreadyOnHRT }) => {
	const [email, setEmail] = useState<string>(userData.email);
	const [loading, setLoading] = useState(false);

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const onSubmitForm = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const { status, message: messageResponse } = await createNotionDatabase({
			birthdate: userData.birthdate,
			email: email,
			name: userData.name,
			gender: userData.gender,
			state: userData.state,
			isAlreadyOnHRT: isAlreadyOnHRT,
			isWaitingList: true
		});
		if (status === 'OK') {
			setLoading(false);
			if (onSubmit) onSubmit(email);
		} else {
			toast.error(messageResponse, {
				icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
			});
		}
		setLoading(false);
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
					<SuccessNotif
						title={ onboardingData.formWaitlistEmail.notif.title }
						subtitle={ onboardingData.formWaitlistEmail.notif.subtitle }
					/>
					<motion.h1
						variants={ slideInVariants }
						initial='initial'
						animate='visible'
						className='text-2xl 2xl:text-[36px] leading-normal -tracking-[0.04em] max-lg:font-medium text-left'>
						{ onboardingData.formWaitlistEmail.title }
					</motion.h1>
					<motion.h2
						variants={ slideInVariants }
						initial='initial'
						animate='visible'
						className='mt-[5px] mb-6 font-BRSonoma font-normal text-sm leading-normal text-grey-primary text-left'>
						{ onboardingData.formWaitlistEmail.subtitle }
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
							<Button
								disabled={ loading }
								type='submit'>
								{ loading ? 'Loading...' : onboardingData.formWaitlistEmail.submitLabel }
							</Button>
						</motion.div>
					</form>
				</div>
			</div>
		</motion.div>
	);
};

export default FormWaitlistEmail;