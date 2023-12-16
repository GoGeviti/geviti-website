'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { PageProps } from '@/app/onboarding/page';
import { onboardingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import type { FormDetailState } from './FormDetail';
import type { FormNameEmailState } from './FormNameEmail';
import * as OnboardingComponent from './index';
import type { Tier } from './PricingPlans';
import type { TipProps } from './Tip';

{ /* eslint-disable no-unused-vars */ }

enum FormStep {
	TRANSITION_WELCOME = 'TRANSITION_WELCOME',
	QUESTION_ALREADY_ON_HRT = 'QUESTION_ALREADY_ON_HRT',
	QUESTION_INTERESTED_TO_BE_DELIVERED = 'QUESTION_INTERESTED_TO_BE_DELIVERED',
	QUESTION_SWITH_TO_GEVITI = 'QUESTION_SWITH_TO_GEVITI',
	QUESTION_BLOODWORK_DONE = 'QUESTION_BLOODWORK_DONE',
	QUESTION_HOW_OFTEN_LETHARGIC = 'QUESTION_HOW_OFTEN_LETHARGIC',
	QUESTION_DIFFICULTY_WEIGHT = 'QUESTION_DIFFICULTY_WEIGHT',
	QUESTION_LIBIDO = 'QUESTION_LIBIDO',
	QUESTION_GOALS = 'QUESTION_GOALS',
	FORM_NAME_EMAIL = 'FORM_NAME_EMAIL',
	FORM_DETAIL = 'FORM_DETAIL',
	CONFIRM_WAITLIST_EMAIL = 'CONFIRM_WAITLIST_EMAIL',
	PRICING_PLANS = 'PRICING_PLANS',
	ORDER_SUMMARY = 'ORDER_SUMMARY',
	TRANSITION = 'TRANSITION',
	TRANSITION_ELIGIBLE_SWITCH = 'TRANSITION_ELIGIBLE_SWITCH',
	TRANSITION_ELIGIBLE_BLOODWORK = 'TRANSITION_ELIGIBLE_BLOODWORK',
}

type NextStepAction = {
	transition?: {
		title: string;
		desc: string;
		type?: string;
	},
	stepID: string;
	eligibleID?: string;
};

export type FormOption = {
	label: string;
	nextStep: NextStepAction;
};

type ListQuestionnaire = {
	stepID: string;
	question: string;
	answer: string;
};

const overflowAutoStepOnMobile = [FormStep.FORM_DETAIL, FormStep.PRICING_PLANS, FormStep.ORDER_SUMMARY] as string[];

const OrderJourneyPage: React.FC<PageProps> = ({ searchParams }) => {
	const router = useRouter();

	const [formStep, setFormStep] = useState<string>(
		FormStep.TRANSITION_WELCOME,
	);
	const [isAlreadyOnHRT, setIsAlreadyOnHRT] = useState<boolean>(false);
	const [selectedPlan, setSelectedPlan] = useState<Tier | null>(null);
	const [userData, setUserData] = useState<FormNameEmailState & FormDetailState>({
		name: '',
		email: '',
		gender: '',
		birthdate: null,
		state: ''
	});
	const [showPageTransitionOrderSummary, setShowPageTransitionOrderSummary] = useState<boolean>(false);
	const [startCircleMaskPosition, setStartCircleMaskPosition] = useState<{ x: number; y: number; }>({
		x: 0,
		y: 0
	});
	const [transitionData, setTransitionData] = useState<TipProps | null>(null);
	const [flowFormSteps, setFlowFormSteps] = useState<string[]>([
		FormStep.TRANSITION_WELCOME,
	]);
	const [eligibleID, setEligibleID] = useState<string>(FormStep.TRANSITION_ELIGIBLE_BLOODWORK);
	const [listQuestionnaire, setListQuestionnaire] = useState<ListQuestionnaire[]>([]);
	const [isOverflowAutoOnMobile, setIsOverflowAutoOnMobile] = useState<boolean>(false);

	const theme = formStep === FormStep.ORDER_SUMMARY ? 'dark' : 'light';

	const isBloodworkDoneMoreThanSixMonths = () => {
		const findAnswerBloodwork = listQuestionnaire?.find(questionnaire => questionnaire.stepID === FormStep.QUESTION_BLOODWORK_DONE)?.answer;
		return findAnswerBloodwork?.includes('6+');
	};

	const maxStep = () => {
		const allSteps = 10;

		if (isBloodworkDoneMoreThanSixMonths()) {
			return allSteps - 2;
		}
		if (isAlreadyOnHRT) return allSteps - 1;
		return allSteps;
	};

	const formStepToPercentage = () => {
		return ((flowFormSteps.length) / maxStep()) * 100;
	};

	const onAddFlowFormSteps = (nextStepID: string) => {
		setFlowFormSteps(prevFlow => ([...prevFlow, nextStepID]));
	};

	const onAddQuestionnaireAnswer = (stepID: string, question?: string, answer?: string) => {
		if (question && answer) {
			setListQuestionnaire(prevList => ([...prevList, {
				stepID,
				question,
				answer
			}]));
		}
	};

	const onAddTransitionData = (nextStep: NextStepAction) => {
		if (nextStep?.transition) {
			setFormStep(FormStep.TRANSITION);
			setTransitionData({
				title: nextStep?.transition?.title,
				desc: nextStep?.transition?.desc,
				type: nextStep?.transition?.type ?? 'info',
				onContinue: () => {
					setFormStep(nextStep?.stepID);
				}
			});
		}
	};

	const onStepNext = (nextStep: NextStepAction) => {
		if (nextStep?.stepID === FormStep.QUESTION_SWITH_TO_GEVITI && isBloodworkDoneMoreThanSixMonths()) {
			// if QUESTION_BLOODWORK_DONE => 6+ months, go to FORM_NAME_EMAIL after transition if any
			onAddFlowFormSteps(FormStep.FORM_NAME_EMAIL);

			if (nextStep?.transition) {
				onAddTransitionData({
					transition: {
						title: nextStep?.transition?.title,
						desc: nextStep?.transition?.desc,
						type: nextStep?.transition?.type,
					},
					stepID: FormStep.FORM_NAME_EMAIL
				});
			} else {
				setFormStep(FormStep.FORM_NAME_EMAIL);
			}
		} else {
			onAddFlowFormSteps(nextStep.stepID);

			if (nextStep?.transition) {
				onAddTransitionData(nextStep);
			} else {
				setFormStep(nextStep?.stepID);
				setTransitionData(null);
			}
		}

		if (nextStep?.eligibleID) {
			setEligibleID(nextStep?.eligibleID);
		}
	};

	useEffect(() => {
		if (showPageTransitionOrderSummary) {
			onAddFlowFormSteps(FormStep.ORDER_SUMMARY);

			setTimeout(() => {
				router.replace(`/onboarding?variant=${ selectedPlan?.variantID }`);
				setFormStep(FormStep.ORDER_SUMMARY);
			}, 500);
		}
	}, [showPageTransitionOrderSummary]);

	useEffect(() => {
		if (overflowAutoStepOnMobile.includes(formStep)) {
			setTimeout(() => {
				setIsOverflowAutoOnMobile(true);
			}, 500);
		} else {
			setIsOverflowAutoOnMobile(false);
		}
	}, [formStep]);

	useEffect(() => {
		if (searchParams?.variant && !flowFormSteps?.includes(FormStep.ORDER_SUMMARY)) {
			router.replace('/onboarding');
		}
	}, [searchParams?.variant, flowFormSteps]);

	const onMouseEnterBtnSelectPricingPlans = (e: React.MouseEvent<HTMLButtonElement>) => {
		setStartCircleMaskPosition({
			x: e.pageX,
			y: e.pageY
		});
	};

	const renderContent = () => {
		switch (formStep) {
			case FormStep.TRANSITION_WELCOME:
				return (
					<OnboardingComponent.Tip
						key={ onboardingData.transitionWelcome.id }
						title={ onboardingData.transitionWelcome.title }
						desc={ onboardingData.transitionWelcome.desc }
						onContinue={ () => {
							setFormStep(FormStep.QUESTION_ALREADY_ON_HRT);
							onAddFlowFormSteps(FormStep.QUESTION_ALREADY_ON_HRT);
						} }
					/>
				);
			case FormStep.TRANSITION:
				return (
					<OnboardingComponent.Tip
						key={ `TRANSITION_${ transitionData?.title?.toUpperCase()?.replaceAll(' ', '_') }` }
						title={ transitionData?.title ?? '' }
						desc={ transitionData?.desc ?? '' }
						type={ transitionData?.type ?? 'info' }
						onContinue={ transitionData?.onContinue }
					/>
				);
			case FormStep.QUESTION_ALREADY_ON_HRT:
				return (
					<OnboardingComponent.Questionnaire
						key={ onboardingData.questionOnHRT.id }
						title={ onboardingData.questionOnHRT.title }
						options={ onboardingData.questionOnHRT.options }
						onSelect={ (selected: FormOption) => {
							setIsAlreadyOnHRT(selected.label.toLowerCase() === 'yes');
							onStepNext(selected.nextStep);
							onAddQuestionnaireAnswer(onboardingData.questionOnHRT.id, onboardingData.questionOnHRT.title, selected.label);
						} }
					/>
				);
			case FormStep.QUESTION_HOW_OFTEN_LETHARGIC:
				return (
					<OnboardingComponent.Questionnaire
						key={ onboardingData.questionLethargic.id }
						title={ onboardingData.questionLethargic.title }
						options={ onboardingData.questionLethargic.options }
						onSelect={ (selected: FormOption) => {
							onStepNext(selected.nextStep);
							onAddQuestionnaireAnswer(onboardingData.questionLethargic.id, onboardingData.questionLethargic.title, selected.label);
						} }
					/>
				);
			case FormStep.QUESTION_DIFFICULTY_WEIGHT:
				return (
					<OnboardingComponent.Questionnaire
						key={ onboardingData.questionWeight.id }
						title={ onboardingData.questionWeight.title }
						options={ onboardingData.questionWeight.options }
						onSelect={ (selected: FormOption) => {
							onStepNext(selected.nextStep);
							onAddQuestionnaireAnswer(onboardingData.questionWeight.id, onboardingData.questionWeight.title, selected.label);
						} }
					/>
				);
			case FormStep.QUESTION_LIBIDO:
				return (
					<OnboardingComponent.Questionnaire
						key={ onboardingData.questionLibido.id }
						title={ onboardingData.questionLibido.title }
						options={ onboardingData.questionLibido.options }
						onSelect={ (selected: FormOption) => {
							onStepNext(selected.nextStep);
							onAddQuestionnaireAnswer(onboardingData.questionLibido.id, onboardingData.questionLibido.title, selected.label);
						} }
					/>
				);
			case FormStep.QUESTION_GOALS:
				return (
					<OnboardingComponent.Questionnaire
						key={ onboardingData.questionGoals.id }
						title={ onboardingData.questionGoals.title }
						options={ onboardingData.questionGoals.options }
						onSelect={ (selected: FormOption) => {
							onStepNext(selected.nextStep);
							onAddQuestionnaireAnswer(onboardingData.questionGoals.id, onboardingData.questionGoals.title, selected.label);
						} }
					/>
				);
			case FormStep.QUESTION_INTERESTED_TO_BE_DELIVERED:
				return (
					<OnboardingComponent.Questionnaire
						key={ onboardingData.questionInterestedToBeDelivered.id }
						title={ onboardingData.questionInterestedToBeDelivered.title }
						options={ onboardingData.questionInterestedToBeDelivered.options }
						onSelect={ (selected: FormOption) => {
							onStepNext(selected.nextStep);
							onAddQuestionnaireAnswer(onboardingData.questionInterestedToBeDelivered.id, onboardingData.questionInterestedToBeDelivered.title, selected.label);
						} }
					/>
				);
			case FormStep.QUESTION_BLOODWORK_DONE:
				return (
					<OnboardingComponent.Questionnaire
						key={ onboardingData.questionBloodworkDone.id }
						title={ onboardingData.questionBloodworkDone.title }
						options={ onboardingData.questionBloodworkDone.options }
						onSelect={ (selected: FormOption) => {
							onStepNext(selected.nextStep);
							onAddQuestionnaireAnswer(onboardingData.questionBloodworkDone.id, onboardingData.questionBloodworkDone.title, selected.label);
						} }
					/>
				);
			case FormStep.QUESTION_SWITH_TO_GEVITI:
				return (
					<OnboardingComponent.Questionnaire
						key={ onboardingData.questionSwitchToGeviti.id }
						title={ onboardingData.questionSwitchToGeviti.title }
						options={ onboardingData.questionSwitchToGeviti.options }
						onSelect={ (selected: FormOption) => {
							onStepNext(selected.nextStep);
							onAddQuestionnaireAnswer(onboardingData.questionSwitchToGeviti.id, onboardingData.questionSwitchToGeviti.title, selected.label);
						} }
					/>
				); ;
			case FormStep.FORM_NAME_EMAIL:
				return (
					<OnboardingComponent.FormNameEmail
						key={ onboardingData.formNameEmail.id }
						onSubmit={ (data: FormNameEmailState) => {
							setUserData(prevData => ({
								...prevData,
								name: data.name,
								email: data.email
							}));
							onStepNext(onboardingData.formNameEmail.nextStep);
						} }
					/>
				);
			case FormStep.FORM_DETAIL:
				return (
					<OnboardingComponent.FormDetail
						key={ onboardingData.formDetail.id }
						onSubmit={ data => {
							if (data.state === 'AZ') {
								setUserData(prevData => ({
									...prevData,
									...data
								}));
								setFormStep(eligibleID);
							}
						} }
					/>
				);
			case FormStep.CONFIRM_WAITLIST_EMAIL:
				return (
					<OnboardingComponent.FormWaitlist
						key={ onboardingData.formDetail.id }
					// onSubmit={ onStepNext }
					/>
				);
			case FormStep.TRANSITION_ELIGIBLE_BLOODWORK:
			case FormStep.TRANSITION_ELIGIBLE_SWITCH:
				const props = eligibleID === FormStep.TRANSITION_ELIGIBLE_SWITCH
					? onboardingData.transitionEligibleSwitch
					: onboardingData.transitionEligibleBloodwork;

				return (
					<OnboardingComponent.Tip
						key={ props.id }
						title={ props.title }
						desc={ props.desc }
						type='success'
						onContinue={ () => {
							onAddFlowFormSteps(FormStep.PRICING_PLANS);
							setFormStep(FormStep.PRICING_PLANS);
						} }
					/>
				);
			case FormStep.PRICING_PLANS:
				return (
					<OnboardingComponent.PricingPlans
						key={ onboardingData.pricingPlans.id }
						isAlreadyOnHRT={ isAlreadyOnHRT && eligibleID === FormStep.TRANSITION_ELIGIBLE_SWITCH }
						gender={ userData?.gender }
						onSelect={ selected => {
							setShowPageTransitionOrderSummary(true);
							setSelectedPlan(selected);
						} }
						onMouseEnterButtonSelect={ onMouseEnterBtnSelectPricingPlans }
					/>
				);
			case FormStep.ORDER_SUMMARY:
			default: return null;
		}
	};

	const onStepBack = () => {
		const currentStepIndex = flowFormSteps.findIndex(flow => flow === formStep);

		if (currentStepIndex > -1) {
			if (currentStepIndex === 0) {
				router.back();
			} else {
				if (formStep === FormStep.ORDER_SUMMARY) {
					router.replace('/onboarding');
					setShowPageTransitionOrderSummary(false);
				}

				setFormStep(flowFormSteps[currentStepIndex - 1]);
				setFlowFormSteps(prev => prev.slice(0, -1));
			}
		}
	};

	const renderNavbar = (navbarTheme: 'dark' | 'light') => {
		return (
			<OnboardingComponent.Navbar
				theme={ navbarTheme }
				onStepBack={ onStepBack }
				progress={ formStepToPercentage() }
			/>
		);
	};

	const renderTransitionOrderSummary = () => {
		return (
			<div
				key='CIRCLE_MASK_TRANSITION'
				className={ clsxm(
					formStep === FormStep.ORDER_SUMMARY
						? 'w-full h-full flex flex-col'
						: 'absolute inset-0 w-full h-full z-[100]'
				) }
			>
				<motion.div
					key='CIRCLE_MASK_TRANSITION'
					initial={ {
						clipPath: `circle(80px at ${ startCircleMaskPosition.x }px ${ startCircleMaskPosition.y }px)`
					} }
					animate={ {
						clipPath: 'circle(100% at 50% 50%)',
						transition: {
							duration: .5,
							ease: 'easeOut'
						}
					} }
					className='relative bg-primary bg-cover w-full h-full flex flex-col'
				>
					{ renderNavbar('dark') }
					<div className='lg:px-5 lg:pb-[1.5vh] lg:pt-[1.9vh] flex flex-col h-full w-full'>
						<div className='w-full h-full lg:rounded-[20px] text-center relative'>
							<div className='absolute inset-0 w-full h-full max-lg:hidden'>
								<div className='relative overflow-hidden w-full h-full lg:rounded-[20px]'>
									<Image
										src='/images/onboarding/background_order_summary.png'
										alt=''
										loading='lazy'
										className='object-cover object-top'
										fill
									/>
								</div>
							</div>
							<AnimatePresence mode='wait'>
								{ formStep === FormStep.ORDER_SUMMARY && (
									<OnboardingComponent.OrderSummary
										key={ onboardingData.orderSummary.id }
										isAlreadyOnHRT={ isAlreadyOnHRT && eligibleID === FormStep.TRANSITION_ELIGIBLE_SWITCH }
										selectedPlan={ selectedPlan }
									/>
								) }
							</AnimatePresence>
						</div>
					</div>
				</motion.div>
			</div>
		);
	};

	return (
		<div
			className={ clsxm(
				'flex flex-col w-full font-Poppins relative',
				isOverflowAutoOnMobile
					? 'min-h-[calc(100svh)] lg:h-screen lg:overflow-hidden'
					: 'h-[calc(100svh)] overflow-hidden',
				theme === 'light' ? 'bg-grey-background lg:bg-white' : 'bg-primary'
			) }
		>
			<motion.div
				className='w-full h-full flex flex-col'
				initial={ { y: '100%' } }
				animate={ { y: 0 } }
				transition={ { duration: 0.3, ease: [.15, 1.14, .88, .98] } }
				layout
			>
				{ formStep !== FormStep.ORDER_SUMMARY && (
					<>
						{ renderNavbar('light') }
						<div className='lg:px-5 lg:pb-[1.5vh] lg:pt-[1.9vh] flex flex-col h-full w-full'>
							<div className='w-full h-full lg:rounded-[20px] text-center relative bg-grey-background'>
								<AnimatePresence mode='wait'>
									{ renderContent() }
								</AnimatePresence>
							</div>
						</div>
					</>
				) }
				{ showPageTransitionOrderSummary
					&& renderTransitionOrderSummary() }
			</motion.div>
		</div>
	);
};

export default OrderJourneyPage;
