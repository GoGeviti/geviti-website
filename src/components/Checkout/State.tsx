'use client';

import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { toast } from 'sonner';

import { checkoutData } from '@/constant/data';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';
import { IPrecheckout } from '@/interfaces';
import { createNotionDatabase } from '@/services/checkout';

import CustomLink from '../CustomLink';

import Band, { BAND_DURATION as DURATION } from './Band';
import { CheckoutStep } from './Main';
import Navbar from './Navbar';

type StateProps = {
	iconType?: 'success' | 'exclamation' | 'clock';
	step?: CheckoutStep;
	userData?: IPrecheckout.UserDetailData;
	onNextStep?: () => void;
};

const slideUpVariants = {
	visible: { y: 0 },
	initial: { y: '100%' },
};

const ExclamationIcon = () => {
	return (
		<div className='relative w-[200px] h-[200px] lg:w-[268px] lg:h-[268px]'>
			<Band
				className='w-[200px] h-[200px] lg:w-[268px] lg:h-[268px] bg-[#FFAF51]/5'
				delay={ 0 } />
			<Band
				className='w-[129.85px] h-[129.85px] lg:w-[174px] lg:h-[174px] bg-[#FFA551]/5'
				delay={ 0.25 * DURATION } />
			<Band
				className='w-[66.76px] h-[66.76px] lg:w-[89.46px] lg:h-[89.46px] bg-gradient-to-b from-[#FEB674] to-white border-white border-[3.55px] lg:border-[4.71px] flex items-center justify-center'
				delay={ 0.5 * DURATION }>
				<svg
					width='13'
					height='42'
					viewBox='0 0 13 42'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='w-[9px] h-8 lg:w-[13px] flex-shrink-0'>
					<path
						d='M2.69786 24C2.69786 26.0851 4.41488 27.8021 6.5 27.8021C8.58512 27.8021 10.3021 26.0851 10.3021 24V5.625C10.3021 3.53988 8.58512 1.82286 6.5 1.82286C4.41488 1.82286 2.69786 3.53988 2.69786 5.625V24Z'
						fill='#E8983A'
						stroke='url(#paint0_linear_5458_13153)'
						strokeWidth='2.35429' />
					<path
						d='M3.13996 38.6488L3.16067 38.6718L3.18256 38.6937C4.0765 39.5876 5.25457 40.0534 6.5 40.0534C7.74543 40.0534 8.9235 39.5876 9.81744 38.6937L9.83933 38.6718L9.86004 38.6488C10.261 38.2033 10.5787 37.7058 10.8065 37.159C11.0317 36.6187 11.1771 36.0099 11.1771 35.3762C11.1771 34.1453 10.6628 32.9505 9.83963 32.0816L9.82869 32.0701L9.81744 32.0588C8.9154 31.1568 7.67971 30.7428 6.5 30.7428C5.32029 30.7428 4.0846 31.1568 3.18256 32.0588L3.17131 32.0701L3.16037 32.0816C2.33724 32.9505 1.82286 34.1453 1.82286 35.3762C1.82286 35.9483 1.91048 36.5639 2.15843 37.159L2.17402 37.1964L2.19216 37.2327C2.43776 37.7239 2.7386 38.2028 3.13996 38.6488Z'
						fill='#E8983A'
						stroke='url(#paint1_linear_5458_13153)'
						strokeWidth='2.35429' />
					<defs>
						<linearGradient
							id='paint0_linear_5458_13153'
							x1='6.5'
							y1='3'
							x2='6.5'
							y2='26.625'
							gradientUnits='userSpaceOnUse'>
							<stop
								stopColor='white'
								stopOpacity='0.5' />
							<stop
								offset='1'
								stopColor='white'
								stopOpacity='0' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_5458_13153'
							x1='6.5'
							y1='31.9199'
							x2='6.5'
							y2='38.8762'
							gradientUnits='userSpaceOnUse'>
							<stop
								stopColor='white'
								stopOpacity='0.5' />
							<stop
								offset='1'
								stopColor='white'
								stopOpacity='0' />
						</linearGradient>
					</defs>
				</svg>
			</Band>
		</div>
	);
};

const SuccessIcon = () => {
	return (
		<div className='relative w-[200px] h-[200px] lg:w-[268px] lg:h-[268px]'>
			<Band className='w-[200px] h-[200px] lg:w-[268px] lg:h-[268px] bg-[#89FE8D]/5' />
			<Band
				className='w-[129.85px] h-[129.85px] lg:w-[174px] lg:h-[174px] bg-[#91FE95]/10'
				delay={ 0.25 * DURATION } />
			<Band
				className='w-[66.76px] h-[66.76px] lg:w-[89.46px] lg:h-[89.46px] bg-gradient-to-b from-[#74FE7A] to-white border-white border-[3.55px] lg:border-[4.71px] flex items-center justify-center'
				delay={ 0.5 * DURATION }>
				<svg
					width='44'
					height='34'
					viewBox='0 0 44 34'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='w-[34px] h-[26px] lg:w-11 lg:h-[34px] flex-shrink-0'>
					<path
						d='M13.528 30.9199C14.2941 31.6861 15.3362 32.1258 16.4347 32.1258C17.5332 32.1258 18.5753 31.6861 19.3415 30.9199L41.5334 8.72792C43.1282 7.13318 43.1282 4.50916 41.5334 2.91442C39.9387 1.31968 37.3147 1.31968 35.7199 2.91442L16.4347 22.1997L8.26503 14.03C6.67029 12.4352 4.04627 12.4352 2.45153 14.03C0.856788 15.6247 0.856787 18.2487 2.45153 19.8435L13.528 30.9199Z'
						fill='#3CC324'
						stroke='url(#paint0_linear_6598_6628)'
						strokeWidth='2.35429' />
					<defs>
						<linearGradient
							id='paint0_linear_6598_6628'
							x1='21.9925'
							y1='2.89551'
							x2='21.9925'
							y2='30.9486'
							gradientUnits='userSpaceOnUse'>
							<stop
								stopColor='white'
								stopOpacity='0.5' />
							<stop
								offset='1'
								stopColor='white'
								stopOpacity='0' />
						</linearGradient>
					</defs>
				</svg>
			</Band>
		</div>
	);
};

const ClockIcon = () => {
	return (
		<div className='relative w-[200px] h-[200px] lg:w-[268px] lg:h-[268px]'>
			<Band className='w-[200px] h-[200px] lg:w-[268px] lg:h-[268px] bg-[#37C1FD]/5' />
			<Band
				className='w-[129.85px] h-[129.85px] lg:w-[174px] lg:h-[174px] bg-[#24B0FF]/10'
				delay={ 0.25 * DURATION } />
			<Band
				className='w-[66.76px] h-[66.76px] lg:w-[89.46px] lg:h-[89.46px] bg-gradient-to-b from-[#5BB2F2] to-white border-white border-[3.55px] lg:border-[4.71px] flex items-center justify-center'
				delay={ 0.5 * DURATION }>
				<svg
					width='42'
					height='43'
					viewBox='0 0 42 43'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-shrink-0 w-[30px] h-[31px] lg:w-[42px] lg:h-[43px]'>
					<path
						d='M1.1875 21.9004C1.1875 32.8302 10.0702 41.7129 21 41.7129C31.9298 41.7129 40.8125 32.8302 40.8125 21.9004C40.8125 10.9706 31.9298 2.08789 21 2.08789C10.0702 2.08789 1.1875 10.9706 1.1875 21.9004ZM5.8125 21.9004C5.8125 13.5277 12.6273 6.71289 21 6.71289C29.3727 6.71289 36.1875 13.5277 36.1875 21.9004C36.1875 30.2731 29.3727 37.0879 21 37.0879C12.6273 37.0879 5.8125 30.2731 5.8125 21.9004Z'
						fill='#45B6EE'
						stroke='url(#paint0_linear_6735_18299)'
						strokeWidth='2' />
					<path
						d='M28.6848 25.467L23.2636 22.2318L23.2636 22.2317L23.2532 22.2257C23.1929 22.1907 23.0352 22.0454 22.8832 21.778C22.7318 21.5118 22.6836 21.2962 22.6836 21.218V14.043C22.6836 12.7732 21.6409 11.7305 20.3711 11.7305C19.1013 11.7305 18.0586 12.7732 18.0586 14.043V21.218C18.0586 23.1266 19.2404 25.2205 20.8907 26.2064L20.8911 26.2067L26.298 29.4333C26.6942 29.6899 27.1143 29.778 27.4936 29.778C28.2774 29.778 29.0347 29.3716 29.4791 28.6605L29.4872 28.6475L29.4949 28.6343C30.1264 27.5517 29.8104 26.1271 28.6848 25.467Z'
						fill='#45B6EE'
						stroke='url(#paint1_linear_6735_18299)'
						strokeWidth='2' />
					<defs>
						<linearGradient
							id='paint0_linear_6735_18299'
							x1='21'
							y1='3.08789'
							x2='21'
							y2='40.7129'
							gradientUnits='userSpaceOnUse'>
							<stop
								stopColor='white'
								stopOpacity='0.5' />
							<stop
								offset='1'
								stopColor='white'
								stopOpacity='0' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_6735_18299'
							x1='23.9376'
							y1='12.7305'
							x2='23.9376'
							y2='28.778'
							gradientUnits='userSpaceOnUse'>
							<stop
								stopColor='white'
								stopOpacity='0.5' />
							<stop
								offset='1'
								stopColor='white'
								stopOpacity='0' />
						</linearGradient>
					</defs>
				</svg>

			</Band>
		</div>
	);
};

const getData = (step?: CheckoutStep) => {
	if (step === CheckoutStep.WAITLIST_STATE_AVAILABLE) return checkoutData.state.waitlistAvailable;
	if (step === CheckoutStep.WAITLIST_STATE_NOT_AVAILABLE) return checkoutData.state.waitlistNotAvailable;
	return checkoutData.state.successJoinWaitlist;
};

type ButtonWrapperProps = {
	type: string;
	href?: string;
	className?: string;
	children?: React.ReactNode;
	externalLink?: boolean;
	onClick?: () => void;
};

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
	type,
	href,
	className,
	children,
	externalLink,
	onClick
}) => {
	if (type === 'link' && href) {
		return (
			<CustomLink
				href={ href }
				className={ className }
				externalLink={ externalLink }
				onClick={ onClick }
			>{ children }</CustomLink>
		);
	}

	return (
		<div
			className={ className }
			onClick={ onClick }>{ children }</div>
	);
};

type ButtonDataType = {
	type: string;
	href?: string;
	text: string;
} | null;

const State: React.FC<StateProps> = ({
	iconType,
	step,
	userData,
	onNextStep
}) => {
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;
	const [loading, setLoading] = useState<boolean>(false);

	const stateData = getData(step);
	const btnPrimaryData = stateData.btnPrimary as ButtonDataType;
	const btnSecondaryData = stateData.btnSecondary as ButtonDataType;
	const titleRows = isMobile
		? stateData.titleMobile.split('#')
		: stateData.title.split('#');
	const descriptionRows = isMobile
		? stateData.descriptionMobile.split('#')
		: stateData.description.split('#');

	const renderIcon = () => {
		if (iconType === 'success') return <SuccessIcon />;
		if (iconType === 'clock') return <ClockIcon />;
		return <ExclamationIcon />;
	};

	const onClickBtnPrimary = async() => {
		if (userData && btnPrimaryData?.type === 'join_waitlist') {
			setLoading(true);
			const { status, message: messageResponse } = await createNotionDatabase({
				...userData,
				isWaitingList: true
			});
			if (status === 'OK') {
				setLoading(false);
				if (onNextStep) onNextStep();
			} else {
				toast.error(messageResponse, {
					icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
				});
			}
			setLoading(false);
		}
	};

	return (
		<div className='flex min-h-screen flex-col items-center h-full w-full font-Poppins lg:px-3 xl:px-10 2xl:px-20 pt-[87px] bg-primary lg:justify-center lg:py-3 xl:py-10'>
			<Navbar
				className='lg:hidden'
				theme='dark' />
			<div className='bg-primary lg:bg-black-card h-full w-full lg:rounded-20px overflow-hidden flex items-center justify-center lg:py-10 xl:py-[4.63vh] xl:min-h-[calc(100svh-80px)]'>
				<motion.div
					variants={ {
						initial: { y: 0, opacity: 1 },
						visible: { y: 0, opacity: 1 },
						exit: { y: '-50%', opacity: 0 },
					} }
					initial='initial'
					animate='visible'
					exit='exit'
					transition={ { ease: 'easeInOut', duration: 1 } }
					className='max-w-[651px] mx-auto w-full text-center max-lg:px-4 py-[8.855vh] xs:py-[75px] lg:py-0 h-full flex flex-col justify-center items-center'>
					<div className='mb-[4.959vh] xs:mb-[42px] flex flex-col items-center'>
						{ renderIcon() }
						<div className='overflow-hidden inline-block max-lg:hidden'>
							<motion.div
								variants={ slideUpVariants }
								initial='initial'
								animate='visible'
								transition={ { ease: 'easeInOut', duration: .75, delay: .6 } }
								className='inline-block'
							>
								<div className='relative overflow-hidden w-[145px] h-[34.12px] mb-6 lg:mt-16'>
									<Image
										src='/images/logo/logo_light.webp'
										alt='geviti'
										fill
										className='w-full h-full'
									/>
								</div>
							</motion.div>
						</div>
						{ stateData.title && (
							<div className='max-lg:max-w-[331px] mx-auto w-full mt-[8.973vh] xs:mt-[76px] lg:mt-0'>
								<h1 className='flex flex-col'>
									{ titleRows.map((text, textIdx) => {
										return (
											<span
												key={ `title-${ textIdx }` }
												className='overflow-hidden inline-block'>
												<motion.span
													variants={ {
														visible: {
															y: 0,
															transition: {
																ease: 'easeInOut',
																duration: .75,
																delay: (textIdx * 0.25) + 0.85
															}
														},
														initial: { y: '100%' }
													} }
													initial='initial'
													animate='visible'
													className='inline-block text-white lg:-tracking-0.04em text-[6.4vw] xxs2:text-2xl lg:text-4xl !leading-normal lg:font-medium'
												>
													{ text }
												</motion.span>
											</span>
										);
									}) }
								</h1>
							</div>
						) }
						{ stateData.description && (
							<div className='overflow-hidden inline-block mt-4 lg:mt-3.5'>
								<div className='flex flex-col'>
									{ descriptionRows.map((text, textIdx) => {
										return (
											<span
												key={ `description-${ textIdx }` }
												className='overflow-hidden inline-block'>
												<motion.span
													variants={ {
														visible: {
															y: 0,
															transition: {
																ease: 'easeInOut',
																duration: .75,
																delay: (titleRows.length * 0.25) + 0.85 + (textIdx * 0.25)
															}
														},
														initial: { y: '100%' }
													} }
													initial='initial'
													animate='visible'
													className='inline-block text-grey-primary text-[3.2vw] xxs2:text-xs !leading-5 lg:text-sm lg:!leading-normal'
												>
													{ text }
												</motion.span>
											</span>
										);
									}) }
								</div>
							</div>
						) }
					</div>
					{ btnPrimaryData && (
						<ButtonWrapper
							type={ btnPrimaryData.type }
							href={ btnPrimaryData.href }
							className='overflow-hidden inline-block w-full'>
							<motion.span
								variants={ slideUpVariants }
								initial='initial'
								animate='visible'
								transition={ { ease: 'easeInOut', duration: .75, delay: (titleRows.length * 0.25) + 0.85 + (descriptionRows.length * 0.25) } }
								className='inline-block w-full'>
								<button
									onClick={ onClickBtnPrimary }
									disabled={ loading }
									className='focus:ring-0 focus:outline-none bg-blue-primary w-full rounded-full font-medium text-lg !leading-6 p-[17px] text-primary hover:brightness-105 transform transition duration-200'>
									{ loading ? 'Loading...' : btnPrimaryData.text }
								</button>
							</motion.span>
						</ButtonWrapper>
					) }
					{ btnSecondaryData && (
						<ButtonWrapper
							href={ btnSecondaryData.href }
							type={ btnSecondaryData.type }
							className='overflow-hidden inline-block w-full mt-6'>
							<motion.span
								variants={ slideUpVariants }
								initial='initial'
								animate='visible'
								transition={ { ease: 'easeInOut', duration: .75, delay: (titleRows.length * 0.25) + 1.1 + (descriptionRows.length * 0.25) } }
								className='inline-block w-full'>
								<span className='cursor-pointer focus:ring-0 focus:outline-none bg-transparent w-full font-medium text-lg !leading-6 p-[17px] text-grey-primary hover:text-white transform transition duration-200'>
									{ btnSecondaryData.text }
								</span>
							</motion.span>
						</ButtonWrapper>
					) }
				</motion.div>
			</div>
		</div>
	);
};

export default State;