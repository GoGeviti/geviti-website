'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// import { PageProps } from '@/app/onboarding/page';
import { IPrecheckout } from '@/interfaces';

import Form from './Form';
import MemberFrequencyPlan from './MemberFrequencyPlan';
import PricingProductPlan from './PricingProductPlan';
import State from './State';

{
	/* eslint-disable no-unused-vars */
}

export enum CheckoutStep {
  FORM_PERSONAL_INFO = 'FORM_PERSONAL_INFO',
  WAITLIST_STATE_AVAILABLE = 'WAITLIST_STATE_AVAILABLE',
  WAITLIST_STATE_NOT_AVAILABLE = 'WAITLIST_STATE_NOT_AVAILABLE',
  SUCCESS_JOIN_WAITLIST = 'SUCCESS_JOIN_WAITLIST',
  PRICING_PRODUCT_PLAN = 'PRICING_PRODUCT_PLAN',
  MEMBER_FREQUENCY_PLAN = 'MEMBER_FREQUENCY_PLAN',
  STRIPE_PAYMENT = 'STRIPE_PAYMENT',
  STRIPE_PAYMENT_SUCCESSFUL = 'STRIPE_PAYMENT_SUCCESSFUL',
  STRIPE_PAYMENT_FAIL = 'STRIPE_PAYMENT_FAIL',
}

type PageProps = {
	searchParams: { [key: string]: string | string[] | undefined; };
};

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
		gender: '',
	});

	const renderContent = () => {
		if (step === CheckoutStep.FORM_PERSONAL_INFO) {
			return (
				<Form
					key={ CheckoutStep.FORM_PERSONAL_INFO }
					initialState={ userData }
					onNextStep={ (user, nextStep) => {
						setUserData(user);
						return setStep(nextStep);
					} }
				/>
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
					step={ CheckoutStep.SUCCESS_JOIN_WAITLIST } />
			);
		}

		if (step === CheckoutStep.PRICING_PRODUCT_PLAN) {
			return (
				<PricingProductPlan
					key={ CheckoutStep.PRICING_PRODUCT_PLAN }
					setStep={ setStep }
				/>
			);
		}

		if (step === CheckoutStep.MEMBER_FREQUENCY_PLAN) {
			return (
				<MemberFrequencyPlan
					key={ CheckoutStep.MEMBER_FREQUENCY_PLAN }
					setStep={ setStep }
				/>
			);
		}

		if (step === CheckoutStep.STRIPE_PAYMENT_SUCCESSFUL) {
			return (
				<State
					key={ CheckoutStep.STRIPE_PAYMENT_SUCCESSFUL }
					iconType='success'
					step={ CheckoutStep.STRIPE_PAYMENT_SUCCESSFUL }
					userData={ userData }
				/>
			);
		}

		if (step === CheckoutStep.STRIPE_PAYMENT_FAIL) {
			return (
				<State
					key={ CheckoutStep.STRIPE_PAYMENT_FAIL }
					iconType='exclamation'
					step={ CheckoutStep.STRIPE_PAYMENT_FAIL }
					userData={ userData }
				/>
			);
		}

		return null;
	};

	return (
		<div className='w-full h-full font-Poppins'>
			<AnimatePresence mode='wait'>{ renderContent() }</AnimatePresence>
		</div>
	);
};

export default Main;
