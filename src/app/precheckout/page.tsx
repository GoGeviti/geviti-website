'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import PreCheckoutNav from '@/components/precheckout/PreCheckoutNav';
import PreCheckoutProgressBar from '@/components/precheckout/PreCheckoutProgressBar';
import QuestionLethargic from '@/components/precheckout/QuestionLethargic';
import WelcomeTransition from '@/components/precheckout/WelcomeTransition';

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

export enum ViewState {
  COMPLETED,
  IN_PROGRESS,
  NEXT_UP,
  HIDDEN,
}

const currentViewState = (
	formStep: FormStep,
	currentFormStep: FormStep,
): ViewState => {
	if (formStep === currentFormStep + 1) return ViewState.NEXT_UP;
	if (formStep === currentFormStep) return ViewState.IN_PROGRESS;
	if (formStep < currentFormStep) return ViewState.COMPLETED;

	return ViewState.HIDDEN;
};

const formStepToPercentage = (formStep: FormStep): number => {
	return formStep / Object.keys(FormStep).length;
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
						viewState={ currentViewState(FormStep.QUESTION_HOW_OFTEN_LETHARGIC, formStep) }
						onContinue={ () => setFormStep(prev => prev + 1) }
					/>
				) }
			</StepContainer>
		</Column>
	);
};

export default PreCheckoutFlowPage;
