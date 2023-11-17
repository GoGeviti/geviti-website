'use client';

import { useState } from 'react';
import styled from 'styled-components';

import HormonesTransition from '@/components/precheckout/HormonesTransition';
import NotAloneTransition from '@/components/precheckout/NotAloneTransition';
import PreCheckoutNameCollection from '@/components/precheckout/PreCheckoutNameCollection';
import PreCheckoutNav from '@/components/precheckout/PreCheckoutNav';
import PreCheckoutProgressBar from '@/components/precheckout/PreCheckoutProgressBar';
import QuestionGoals from '@/components/precheckout/QuestionGoals';
import QuestionLethargic from '@/components/precheckout/QuestionLethargic';
import QuestionLibido from '@/components/precheckout/QuestionLibido';
import QuestionWeight from '@/components/precheckout/QuestionWeight';
import WelcomeTransition, { ViewState, } from '@/components/precheckout/WelcomeTransition';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100dvh;
`;

enum FormStep {
  EMPTY,
  TRANSITION_WELCOME,
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
		return 'rgba(163, 224, 255, 0.25)';

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
`;

const PreCheckoutFlowPage = () => {
	const [formStep, setFormStep] = useState<FormStep>(
		FormStep.TRANSITION_WELCOME,
	);

	return (
		<Column className='font-Poppins'>
			<PreCheckoutNav />
			<PreCheckoutProgressBar percentage={ formStepToPercentage(formStep) } />
			<StepContainer style={ { background: formStepToBackground(formStep) } }>
				{ currentViewState(FormStep.TRANSITION_WELCOME, formStep) !==
          ViewState.HIDDEN && (
					<WelcomeTransition
						viewState={ currentViewState(FormStep.TRANSITION_WELCOME, formStep) }
						onContinue={ () => setFormStep(prev => prev + 1) }
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
						onContinue={ () => setFormStep(prev => prev + 1) }
					/>
				) }
			</StepContainer>
		</Column>
	);
};

export default PreCheckoutFlowPage;
