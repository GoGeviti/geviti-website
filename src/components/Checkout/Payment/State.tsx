'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import ButtonCta from '@/components/ButtonCta';
import { checkoutData } from '@/constant/data';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import { getResetPasswordToken } from '../api/onboarding';
import Band, { BAND_DURATION } from '../Band';
import NavbarCheckout from '../Navbar';
import { ButtonWrapper } from '../State';

type StateProps = {
	type: 'success' | 'error';
	searchParams: { [key: string]: string | string[] | undefined; };
};
type ButtonDataType = {
	type: string;
	href?: string;
	externalLink?: boolean;
	text: string;
} | null;

const slideUpVariants = {
	visible: { y: 0 },
	initial: { y: '100%' },
};

export const ExclamationIcon = () => {
	return (
		<div className='relative w-[200px] h-[200px] lg:w-[268px] lg:h-[268px]'>
			<Band
				className='w-[200px] h-[200px] lg:w-[268px] lg:h-[268px] bg-[#FFAF51]/5'
				delay={ 0 } />
			<Band
				className='w-[129.85px] h-[129.85px] lg:w-[155.383px] lg:h-[155.383px] bg-[#FFA551]/5'
				delay={ 0.25 * BAND_DURATION } />
			<Band
				className='flex items-center justify-center'
				delay={ 0.5 * BAND_DURATION }>
				<svg
					width='90'
					height='90'
					viewBox='0 0 90 90'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='w-[66.76px] h-[66.76px] lg:w-[89.463px] lg:h-[100px]'>
					<circle
						cx='45'
						cy='44.9971'
						r='44.7315'
						fill='url(#paint0_linear_4385_26957)' />
					<circle
						cx='45'
						cy='44.9971'
						r='42.3772'
						stroke='white'
						strokeOpacity='0.5'
						strokeWidth='4.70858' />
					<path
						d='M49.1888 31C49.1888 28.693 47.3186 26.8229 45.0116 26.8229C42.7047 26.8229 40.8345 28.693 40.8345 31V48.7767C40.8345 51.0836 42.7047 52.9538 45.0116 52.9538C47.3186 52.9538 49.1888 51.0836 49.1888 48.7767V31ZM44.999 55.2674C42.6921 55.2674 40.8219 57.1376 40.8219 59.4445C40.8219 61.7515 42.692 63.6217 44.999 63.6217H45.031C47.3379 63.6217 49.2081 61.7515 49.2081 59.4445C49.2081 57.1376 47.3379 55.2674 45.031 55.2674H44.999Z'
						fill='#C35424'
						stroke='url(#paint1_linear_4385_26957)'
						strokeWidth='2.35429' />
					<defs>
						<linearGradient
							id='paint0_linear_4385_26957'
							x1='45'
							y1='0.265625'
							x2='45'
							y2='89.7285'
							gradientUnits='userSpaceOnUse'>
							<stop stopColor='#FE9D74' />
							<stop
								offset='1'
								stopColor='white' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_4385_26957'
							x1='45.015'
							y1='28'
							x2='45.015'
							y2='62.4445'
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

export const SuccessIcon = () => {
	const boxShadow = '0px -6.749px 6.749px 1.687px rgba(255, 255, 255, 0.25) inset';

	return (
		<div className='relative w-[200px] h-[200px] lg:w-[268px] lg:h-[268px]'>
			<Band
				className='w-[200px] h-[200px] lg:w-[268px] lg:h-[268px] bg-[#89FE8D]/10'
				delay={ 0 }
				style={ { boxShadow } } />
			<Band
				className='w-[129.85px] h-[129.85px] lg:w-[155.383px] lg:h-[155.383px] bg-[#91FE95]/20'
				delay={ 0.25 * BAND_DURATION }
				style={ { boxShadow } } />
			<Band
				className='flex items-center justify-center'
				delay={ 0.5 * BAND_DURATION }>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='90'
					height='90'
					viewBox='0 0 90 90'
					fill='none'
					className='w-[66.76px] h-[66.76px] lg:w-[89.463px] lg:h-[89.463px]'>
					<circle
						cx='45'
						cy='44.9971'
						r='44.7315'
						fill='url(#paint0_linear_5509_36863)' />
					<circle
						cx='45'
						cy='44.9971'
						r='42.3772'
						stroke='white'
						strokeOpacity='0.5'
						strokeWidth='4.70858' />
					<path
						d='M36.528 57.9199C37.2941 58.6861 38.3362 59.1258 39.4347 59.1258C40.5332 59.1258 41.5753 58.6861 42.3415 57.9199L64.5334 35.7279C66.1282 34.1332 66.1282 31.5092 64.5334 29.9144C62.9387 28.3197 60.3147 28.3197 58.7199 29.9144L39.4347 49.1997L31.265 41.03C29.6703 39.4352 27.0463 39.4352 25.4515 41.03C23.8568 42.6247 23.8568 45.2487 25.4515 46.8435L36.528 57.9199Z'
						fill='#3CC324'
						stroke='url(#paint1_linear_5509_36863)'
						strokeWidth='2.35429' />
					<defs>
						<linearGradient
							id='paint0_linear_5509_36863'
							x1='45'
							y1='0.265625'
							x2='45'
							y2='89.7285'
							gradientUnits='userSpaceOnUse'>
							<stop stopColor='#74FE7A' />
							<stop
								offset='1'
								stopColor='white' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_5509_36863'
							x1='44.9925'
							y1='29.8955'
							x2='44.9925'
							y2='57.9486'
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

const State: React.FC<StateProps> = ({ type, searchParams }) => {
	const [externalHref, setExternalHref] = useState('');
	const router = useRouter();
	const email = searchParams?.email
	const tokenParam = searchParams?.token
	const price = searchParams?.price
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const stateData = checkoutData.paymentState[type];

	const titleRows = isMobile
		? stateData.titleMobile.split('#')
		: stateData.title.split('#');
	const descriptionRows = isMobile
		? stateData.descriptionMobile.split('#')
		: stateData.description.split('#');
	const btnPrimaryData = stateData.btnPrimary as ButtonDataType;
	const btnSecondaryData = stateData.btnSecondary as ButtonDataType;

	const renderIcon = () => {
		if (type === 'success') return <SuccessIcon />;
		return <ExclamationIcon />;
	};
		
	useEffect(() => {
		const getToken = async() => {
			const token = await getResetPasswordToken(email?.toString() ?? '', tokenParam?.toString() ?? '');
			if (!token) {
				setExternalHref(process.env.NEXT_PUBLIC_APP_URL ?? '')
			} else {
				if (typeof window !== 'undefined' && window.rewardful) {
					window.rewardful('convert', {
						email: email,
					});
				}

				// Trigger Google conversion tracking
				if (typeof window !== 'undefined' && window.gtag) {
					window.gtag('event', 'conversion', {
						'send_to': 'AW-11455487187/6DMzCOi2tNkZENO5s9Yq',
						'value': price, // You can dynamically assign the value here based on the purchase
						'currency': 'USD', // Dynamically assign the currency
						'transaction_id': tokenParam || '' // Dynamically assign transaction ID
					});
				}
				const dashboardHref = `${process.env.NEXT_PUBLIC_APP_URL}/create-password?reset_token=${token.restKey}`
				setExternalHref(dashboardHref);
			}
		}
		getToken();
	}, [email])

	return (
		<div className='flex flex-col w-full h-full min-h-screen bg-white'>
			<NavbarCheckout theme='light' />

			<div className='h-full w-full flex items-center justify-center pt-[87px] lg:pt-[9.537vh] 2xl:pt-[103px] lg:min-h-screen font-Poppins'>
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
					<div className='mb-[4.959vh] xs:mb-[42px] lg:mb-[5.926vh] xl:mb-16 flex flex-col items-center'>
						{ renderIcon() }
						{ stateData.title && (
							<div className='max-lg:max-w-[331px] mx-auto w-full mt-[8.973vh] xs:mt-[76px] lg:mt-[5.926vh] xl:mt-16'>
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
													className='inline-block text-primary lg:-tracking-0.04em text-[6.4vw] xxs2:text-2xl lg:text-4xl !leading-normal lg:font-medium'
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
					{ (btnPrimaryData || btnSecondaryData) && (
						<div className='max-sm:w-full lg:w-full grid grid-cols-1 auto-rows-fr lg:flex max-lg:flex-col items-center justify-center gap-6'>
							{ btnPrimaryData && (
								<div className='overflow-hidden inline-block h-full'>
									<motion.span
										variants={ slideUpVariants }
										initial='initial'
										animate='visible'
										transition={ { ease: 'easeInOut', duration: .75, delay: (titleRows.length * 0.25) + 0.85 + (descriptionRows.length * 0.25) } }
										className='inline-block w-full'
									>
										<ButtonCta
											href={ externalHref }
											externalLink={ btnPrimaryData?.externalLink }
											arrowPosition={ type === 'error' ? 'left' : 'right' }
											onClick={ () => {
												router.replace('/');
											} }
											className='max-sm:w-full'>
											<span dangerouslySetInnerHTML={ { __html: btnPrimaryData.text } } />
										</ButtonCta>
									</motion.span>
								</div>
							) }
							{ btnSecondaryData && (
								<div className='overflow-hidden inline-block h-full'>
									<motion.span
										variants={ slideUpVariants }
										initial='initial'
										animate='visible'
										transition={ { ease: 'easeInOut', duration: .75, delay: (titleRows.length * 0.25) + 0.85 + (descriptionRows.length * 0.25) } }
										className='flex w-full h-full'
									>
										<ButtonWrapper
											type={ btnSecondaryData.type }
											href={ btnSecondaryData.href }
											externalLink={ btnSecondaryData?.externalLink }
											className='h-full flex items-center justify-center lg:min-h-[58px] focus:ring-0 focus:outline-none border border-grey-primary rounded-full w-full font-medium text-lg !leading-6 py-3 px-[42px] text-grey-primary hover:opacity-75 transform transition duration-200'>
											{ btnSecondaryData.text }
										</ButtonWrapper>
									</motion.span>
								</div>
							) }
						</div>
					) }
				</motion.div>
			</div>
		</div>
	);
};

export default State;