'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { PageProps } from '@/app/onboarding/page';
import { checkoutData } from '@/constant/data';
import { IPrecheckout } from '@/interfaces';

import Form from './Form';
import MemberFrequencyPlan from './MemberFrequencyPlan';
import PricingProductPlan from './PricingProductPlan';
import State from './State';

{ /* eslint-disable no-unused-vars */ }

export enum CheckoutStep {
	FORM_PERSONAL_INFO = 'FORM_PERSONAL_INFO',
	WAITLIST_STATE_AVAILABLE = 'WAITLIST_STATE_AVAILABLE',
	WAITLIST_STATE_NOT_AVAILABLE = 'WAITLIST_STATE_NOT_AVAILABLE',
	SUCCESS_JOIN_WAITLIST = 'SUCCESS_JOIN_WAITLIST',
	PRICING_PRODUCT_PLAN = 'PRICING_PRODUCT_PLAN',
	MEMBER_FREQUENCY_PLAN = 'MEMBER_FREQUENCY_PLAN'
}

const Main: React.FC<PageProps> = ({ searchParams }) => {
	const setInitialStep = () => {
		if (searchParams?.product) return CheckoutStep.MEMBER_FREQUENCY_PLAN;
		if (searchParams?.email) return CheckoutStep.PRICING_PRODUCT_PLAN;
		return CheckoutStep.FORM_PERSONAL_INFO;
	};

	const [step, setStep] = useState<CheckoutStep>(setInitialStep());
	const [userData, setUserData] = useState<IPrecheckout.UserDetailData>({
		first_name: '',
		last_name: '',
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
					initialState={ userData }
					onNextStep={ (user: IPrecheckout.UserDetailData) => {
						setUserData(user);

						if (checkoutData.form.statesAvailable.includes(user.state)) {
							setStep(CheckoutStep.WAITLIST_STATE_AVAILABLE);
						} else {
							setStep(CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE);
						}
						// setUserData(user);

						// if (checkoutData.form.statesAvailable.includes(user.state)) {
						// 	const params = new URLSearchParams();
						// 	params.set('email', user.email);
						// 	if (window) {
						// 		window.history.pushState(null, '', `?${ params.toString() }`);
						// 		window.scrollTo({ top: 0 });
						// 	}
						// 	setStep(CheckoutStep.PRICING_PRODUCT_PLAN);
						// } else {
						// 	setStep(CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE);
						// }
					} } />
			);
		}

		if (step === CheckoutStep.WAITLIST_STATE_AVAILABLE) {
			return (
				<State
					key={ CheckoutStep.WAITLIST_STATE_AVAILABLE }
					iconType='clock'
					step={ CheckoutStep.WAITLIST_STATE_AVAILABLE }
					userData={ userData }
					onNextStep={ () => setStep(CheckoutStep.SUCCESS_JOIN_WAITLIST) }
				/>
			);
		}

		if (step === CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE) {
			return (
				<State
					key={ CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE }
					iconType='exclamation'
					step={ CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE }
					userData={ userData }
					onNextStep={ () => setStep(CheckoutStep.SUCCESS_JOIN_WAITLIST) }
				/>
			);
		}

		if (step === CheckoutStep.SUCCESS_JOIN_WAITLIST) {
			return (
				<State
					key={ CheckoutStep.SUCCESS_JOIN_WAITLIST }
					iconType='success'
					step={ CheckoutStep.SUCCESS_JOIN_WAITLIST }
				/>
			);
		}

		if (step === CheckoutStep.PRICING_PRODUCT_PLAN) {
			return (
				<PricingProductPlan
					key={ CheckoutStep.PRICING_PRODUCT_PLAN }
					setStep={ setStep } />
			);
		}

		if (step === CheckoutStep.MEMBER_FREQUENCY_PLAN) {
			return (
				<MemberFrequencyPlan
					key={ CheckoutStep.MEMBER_FREQUENCY_PLAN }
					setStep={ setStep } />
			);
		}

		return null;
	};

	return (
		<div className='w-full h-full font-Poppins'>
			<AnimatePresence mode='wait'>
				{ renderContent() }
			</AnimatePresence>
		</div>
	);
};

export default Main;