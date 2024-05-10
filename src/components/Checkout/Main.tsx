'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { checkoutData } from '@/constant/data';
import { IPrecheckout } from '@/interfaces';

import Form from './Form';
import Navbar from './Navbar';
import State from './State';

{ /* eslint-disable no-unused-vars */ }

export enum CheckoutStep {
	FORM_PERSONAL_INFO = 'FORM_PERSONAL_INFO',
	WAITLIST_STATE_AVAILABLE = 'WAITLIST_STATE_AVAILABLE',
	WAITLIST_STATE_NOT_AVAILABLE = 'WAITLIST_STATE_NOT_AVAILABLE',
	SUCCESS_JOIN_WAITLIST = 'SUCCESS_JOIN_WAITLIST'
}

const Main: React.FC = () => {
	const [step, setStep] = useState<CheckoutStep>(CheckoutStep.FORM_PERSONAL_INFO);
	const [userData, setUserData] = useState<IPrecheckout.UserDetailData>({
		name: '',
		email: '',
		phone_number: '',
		address_1: '',
		address_2: '',
		city: '',
		zip_code: '',
		state: '',
		birthdate: null,
		gender: ''
	});

	const renderContent = () => {
		if (step === CheckoutStep.FORM_PERSONAL_INFO) {
			return (
				<Form
					key={ CheckoutStep.FORM_PERSONAL_INFO }
					onNextStep={ (user: IPrecheckout.UserDetailData) => {
						setUserData(user);

						if (checkoutData.form.statesAvailable.includes(user.state)) {
							setStep(CheckoutStep.WAITLIST_STATE_AVAILABLE);
						} else {
							setStep(CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE);
						}
					} } />
			);
		} else if (step === CheckoutStep.WAITLIST_STATE_AVAILABLE) {
			return (
				<State
					key={ CheckoutStep.WAITLIST_STATE_AVAILABLE }
					iconType='clock'
					step={ CheckoutStep.WAITLIST_STATE_AVAILABLE }
					userData={ userData }
					onNextStep={ () => setStep(CheckoutStep.SUCCESS_JOIN_WAITLIST) }
				/>
			);
		} else if (step === CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE) {
			return (
				<State
					key={ CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE }
					iconType='exclamation'
					step={ CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE }
					userData={ userData }
					onNextStep={ () => setStep(CheckoutStep.SUCCESS_JOIN_WAITLIST) }
				/>
			);
		} else if (step === CheckoutStep.SUCCESS_JOIN_WAITLIST) {
			return (
				<State
					key={ CheckoutStep.SUCCESS_JOIN_WAITLIST }
					iconType='success'
					step={ CheckoutStep.SUCCESS_JOIN_WAITLIST }
				/>
			);
		}

		return null;
	};

	return (
		<div className='flex min-h-screen flex-col items-center lg:justify-center h-full w-full bg-primary font-Poppins lg:px-3 xl:px-10 2xl:px-20 lg:py-3 xl:py-10'>
			<Navbar className='lg:hidden' />
			<AnimatePresence mode='wait'>
				{ renderContent() }
			</AnimatePresence>
		</div>
	);
};

export default Main;