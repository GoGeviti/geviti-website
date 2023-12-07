'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import HormonesTransition from '@/components/precheckout/HormonesTransition';
import NotAloneTransition from '@/components/precheckout/NotAloneTransition';
import PreCheckoutFullForm from '@/components/precheckout/PreCheckoutFullForm';
import PreCheckoutNameCollection from '@/components/precheckout/PreCheckoutNameCollection';
import PreCheckoutNav from '@/components/precheckout/PreCheckoutNav';
import PreCheckoutPricingTable from '@/components/precheckout/PreCheckoutPricingTable';
import PreCheckoutProgressBar from '@/components/precheckout/PreCheckoutProgressBar';
import PreCheckoutSummary from '@/components/precheckout/PreCheckoutSummary';
import PreCheckoutSwitchPricingTable from '@/components/precheckout/PreCheckoutSwitchPricingTable';
import PreCheckoutWaitlist from '@/components/precheckout/PreCheckoutWaitlist';
import QuestionGoals from '@/components/precheckout/QuestionGoals';
import QuestionLethargic from '@/components/precheckout/QuestionLethargic';
import QuestionLibido from '@/components/precheckout/QuestionLibido';
import QuestionOnHRT from '@/components/precheckout/QuestionOnHRT';
import QuestionWeight from '@/components/precheckout/QuestionWeight';
import SuccessTransition from '@/components/precheckout/SuccessTransition';
import WelcomeTransition, { ViewState, } from '@/components/precheckout/WelcomeTransition';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100dvh;
  max-width: 100vw;
  overflow: hidden;
`;

enum FormStep {
  EMPTY,
  TRANSITION_WELCOME,
  QUESTION_ALREADY_ON_HRT, // If no, continue. If yes, FORM_NAME_EMAIL
  QUESTION_HOW_OFTEN_LETHARGIC,
  TRANSITION_NOT_ALONE,
  QUESTION_DIFFICULTY_WEIGHT,
  TRANSITION_HORMONES,
  QUESTION_LIBIDO,
  QUESTION_GOALS,
  FORM_NAME_EMAIL,
  FORM_MORE_INFO,
  TRANSITION_ELIGIBLE,
  PRICING_TABLE,
  SWITCH_PRICING_TABLE,
  CHECKOUT_SUMMARY,
  CONFIRM_WAITLIST_EMAIL,
}

const currentViewState = (
	formStep: FormStep,
	currentFormStep: FormStep,
): ViewState => {
	if (formStep === currentFormStep + 1) return ViewState.NEXT_UP;
	if (formStep === currentFormStep) return ViewState.IN_PROGRESS;
	if (formStep === currentFormStep - 1) return ViewState.COMPLETED;

	return ViewState.HIDDEN;
};

const formStepToPercentage = (formStep: FormStep): number => {
	return (formStep / 12) * 100;
};

const formStepToBackground = (formStep: FormStep): string => {
	if (formStep === FormStep.TRANSITION_WELCOME)
		return 'rgba(163, 224, 255, 0.25)';
	if (formStep === FormStep.TRANSITION_NOT_ALONE)
		return 'rgba(163, 224, 255, 0.25)';
	if (formStep === FormStep.TRANSITION_HORMONES)
		return 'rgba(163, 224, 255, 0.25)';
	if (formStep === FormStep.TRANSITION_ELIGIBLE)
		return 'rgba(96, 197, 124, 0.1)';

	return '#F2F2F2';
};

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  flex: 1;
  border-radius: 20px;
  position: relative;
  transition: 0.5s background ease-out;
  
  @media (max-width: 1200px) {
	margin: 0;
	border-radius: 0;
  }
`;

const mensVariantIDs = {
	comprehensive: '47242217521442',
	essentials: '47242220634402',
	ultimate: '47242224140578',
	switch: '46553678643490',
};

const womensVariantIDs = {
	comprehensive: '47242217554210',
	essentials: '47242220667170',
	ultimate: '47242224173346',
	switch: '46553678643490',
};

const PreCheckoutFlowPage = () => {
	const router = useRouter();
	const [formStep, setFormStep] = useState<FormStep>(
		FormStep.TRANSITION_WELCOME,
	);
	const [selectedPlanID, setSelectedPlanID] = useState<
    'essentials' | 'ultimate' | 'comprehensive'
  >('essentials');
	const [selectedSex, setSelectedSex] = useState<'male' | 'female' | ''>('');
	const [isAlreadyOnHRT, setIsAlreadyOnHRT] = useState(false);
	const [email, setEmail] = useState('');

	return (
		<Column
			className='font-Poppins'
			style={ {
				background:
          formStep === FormStep.CHECKOUT_SUMMARY ? '#181A1C' : undefined,
			} }
		>
			<PreCheckoutNav
				shouldInvertColors={ formStep === FormStep.CHECKOUT_SUMMARY }
				onGoBack={ () => {
					if (formStep === FormStep.TRANSITION_WELCOME) {
						router.back();
					}

					if (
						formStep - 1 === FormStep.TRANSITION_NOT_ALONE ||
            formStep - 1 === FormStep.TRANSITION_HORMONES ||
            formStep - 1 === FormStep.TRANSITION_ELIGIBLE
					) {
						setFormStep(prev => prev - 2);
					} else {
						setFormStep(prev => prev - 1);
					}
				} }
			/>
			<PreCheckoutProgressBar percentage={ formStepToPercentage(formStep) } />
			<StepContainer style={ { background: formStepToBackground(formStep) } }>
				{ currentViewState(FormStep.TRANSITION_WELCOME, formStep) !==
          ViewState.HIDDEN && (
					<WelcomeTransition
						viewState={ currentViewState(FormStep.TRANSITION_WELCOME, formStep) }
						onContinue={ () => setFormStep(prev => prev + 1) }
					/>
				) }
				{ currentViewState(FormStep.QUESTION_ALREADY_ON_HRT, formStep) !==
          ViewState.HIDDEN && (
					<QuestionOnHRT
						viewState={ currentViewState(
							FormStep.QUESTION_ALREADY_ON_HRT,
							formStep,
						) }
						onSelectOption={ optionText => {
							if (optionText === 'Yes') {
								setIsAlreadyOnHRT(true);
								setFormStep(FormStep.FORM_NAME_EMAIL);
							} else {
								setFormStep(prev => prev + 1);
							}
						} }
					/>
				) }
				{ currentViewState(FormStep.QUESTION_HOW_OFTEN_LETHARGIC, formStep) !==
          ViewState.HIDDEN && (
					<QuestionLethargic
						viewState={ currentViewState(
							FormStep.QUESTION_HOW_OFTEN_LETHARGIC,
							formStep,
						) }
						onSelectOption={ () => setFormStep(prev => prev + 1) }
					/>
				) }
				{ currentViewState(FormStep.TRANSITION_NOT_ALONE, formStep) !==
          ViewState.HIDDEN && (
					<NotAloneTransition
						viewState={ currentViewState(
							FormStep.TRANSITION_NOT_ALONE,
							formStep,
						) }
						onContinue={ () => setFormStep(prev => prev + 1) }
					/>
				) }
				{ currentViewState(FormStep.QUESTION_DIFFICULTY_WEIGHT, formStep) !==
          ViewState.HIDDEN && (
					<QuestionWeight
						viewState={ currentViewState(
							FormStep.QUESTION_DIFFICULTY_WEIGHT,
							formStep,
						) }
						onSelectOption={ () => setFormStep(prev => prev + 1) }
					/>
				) }
				{ currentViewState(FormStep.TRANSITION_HORMONES, formStep) !==
          ViewState.HIDDEN && (
					<HormonesTransition
						viewState={ currentViewState(FormStep.TRANSITION_HORMONES, formStep) }
						onContinue={ () => setFormStep(prev => prev + 1) }
					/>
				) }
				{ currentViewState(FormStep.QUESTION_LIBIDO, formStep) !==
          ViewState.HIDDEN && (
					<QuestionLibido
						viewState={ currentViewState(FormStep.QUESTION_LIBIDO, formStep) }
						onSelectOption={ () => setFormStep(prev => prev + 1) }
					/>
				) }
				{ currentViewState(FormStep.QUESTION_GOALS, formStep) !==
          ViewState.HIDDEN && (
					<QuestionGoals
						viewState={ currentViewState(FormStep.QUESTION_GOALS, formStep) }
						onSelectOption={ () => setFormStep(prev => prev + 1) }
					/>
				) }
				{ currentViewState(FormStep.FORM_NAME_EMAIL, formStep) !==
          ViewState.HIDDEN && (
					<PreCheckoutNameCollection
						viewState={ currentViewState(FormStep.FORM_NAME_EMAIL, formStep) }
						onContinue={ (name, userEmail) => {
							setFormStep(prev => prev + 1);
							setEmail(userEmail);
							console.log(email); // TODO: remove
						} }
					/>
				) }
				{ currentViewState(FormStep.FORM_MORE_INFO, formStep) !==
          ViewState.HIDDEN && (
					<PreCheckoutFullForm
						viewState={ currentViewState(FormStep.FORM_MORE_INFO, formStep) }
						onContinue={ (usState, sex) => {
							setSelectedSex(sex as 'male' | 'female');
							if (usState !== 'AZ') {
								setFormStep(FormStep.CONFIRM_WAITLIST_EMAIL);
							} else {
								setFormStep(FormStep.TRANSITION_ELIGIBLE);
							}
						} }
					/>
				) }
				{ currentViewState(FormStep.CONFIRM_WAITLIST_EMAIL, formStep) !==
          ViewState.HIDDEN && (
					<PreCheckoutWaitlist
						viewState={ currentViewState(
							FormStep.CONFIRM_WAITLIST_EMAIL,
							formStep,
						) }
						onContinue={ () => setFormStep(prev => prev + 1) }
					/>
				) }
				{ currentViewState(FormStep.PRICING_TABLE, formStep) !==
          ViewState.HIDDEN && (
					<SuccessTransition
						viewState={ currentViewState(FormStep.TRANSITION_ELIGIBLE, formStep) }
						isAlreadyOnHRT={ isAlreadyOnHRT }
						onContinue={ () => {
							if (isAlreadyOnHRT) {
								setFormStep(FormStep.SWITCH_PRICING_TABLE);
							} else {
								setFormStep(FormStep.PRICING_TABLE);
							}
						} }
					/>
				) }
				{ currentViewState(FormStep.PRICING_TABLE, formStep) !==
          ViewState.HIDDEN && (
					<PreCheckoutPricingTable
						viewState={ currentViewState(FormStep.PRICING_TABLE, formStep) }
						onContinue={ planID => {
							setFormStep(prev => prev + 1);
							setSelectedPlanID(planID);
						} }
					/>
				) }
				{ currentViewState(FormStep.SWITCH_PRICING_TABLE, formStep) !==
          ViewState.HIDDEN && (
					<PreCheckoutSwitchPricingTable
						viewState={ currentViewState(
							FormStep.SWITCH_PRICING_TABLE,
							formStep,
						) }
						onContinue={ () => {
							setFormStep(FormStep.CHECKOUT_SUMMARY);
						} }
					/>
				) }
				{ currentViewState(FormStep.CHECKOUT_SUMMARY, formStep) !==
          ViewState.HIDDEN && (
					<PreCheckoutSummary
						viewState={ currentViewState(FormStep.CHECKOUT_SUMMARY, formStep) }
						selectedPlanID={ isAlreadyOnHRT ? 'switch' : selectedPlanID }
						onContinue={ planID => {
							router.push(
								`https://geviti.myshopify.com/cart/${
									selectedSex === 'male'
										? mensVariantIDs[planID]
										: womensVariantIDs[planID]
								}:1`,
							);
							setFormStep(prev => prev + 1);
						} }
					/>
				) }
			</StepContainer>
		</Column>
	);
};

export default PreCheckoutFlowPage;
