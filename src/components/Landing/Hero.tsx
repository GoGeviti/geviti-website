'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimationControls } from 'framer-motion';

// import dynamic from 'next/dynamic';
// import Image from 'next/image';
// import heroImage from '@/assets/landing/hero.webp';
// import heroImageLanding from '@/assets/landing/hero-landing.webp';
// import heroImageLandingMobile from '@/assets/landing/hero-landing-mobile.webp';
// import heroImageMobile from '@/assets/landing/hero-mobile.webp';
import { navbarDefaultTransition } from '@/constant/data/navbar';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import landingData from '../../constant/data/landing';
import ButtonCta from '../ButtonCta';
import Navbar from '../Navbar/Landing';
import PopupReview from '../PopupReview';

import { slideUpTransition } from './transition';

const heroData = landingData.hero;

type HeroProps = {
	showBanner?: boolean;
	showIntro?: string;
	isLanding?: boolean;
	isScheduleCall?: boolean;
};

const HeroVideo = ({ type }: { type: 'desktop' | 'mobile' }) => {
	const videoMobile = type === 'mobile';

	return (
		<video
			src='/videos/hero-site-header-optimized.mp4'
			autoPlay
			muted
			loop
			playsInline
			className={ clsxm(
				'object-cover pointer-events-none w-full h-full',
				videoMobile ? 'lg:hidden object-center' : 'lg:block hidden object-right'
			) }
		/>
	);
};

// const HeroImage = ({ type, isLanding }: { type: 'desktop' | 'mobile', isLanding:boolean }) => {
// 	const imageMobile = type === 'mobile';
// 	const imageSrc = isLanding
// 		? imageMobile
// 			? heroImageLandingMobile
// 			: heroImageLanding
// 		: imageMobile
// 			? heroImageMobile
// 			: heroImage;
//
// 	return (
// 		<Image
// 			src={ imageSrc }
// 			alt='hero'
// 			priority={ true }
// 			className={ clsxm(
// 				'object-cover pointer-events-none',
// 				imageMobile ? 'md:hidden object-center' : 'md:block hidden object-right'
// 			) }
// 			fill
// 			quality={ 90 }
// 			placeholder='blur'
// 			loading={ 'eager' }
// 			sizes='100vw'
// 		/>
// 	);
// };

const Hero: React.FC<HeroProps> = ({
	// showBanner = false,
	isLanding = false,
	showIntro = 'true',
	isScheduleCall = false
}) => {
	const { ref } = useInView();

	const [isMounted, setIsMounted] = useState<boolean>(false);

	const stepControls = useAnimationControls();

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const renderTitles = (titles: string[]) => {
		return titles.map((title: string, titleIdx: number) => (
			<span
				key={ `title-${titleIdx}` }
				className='overflow-hidden inline-flex'>
				<motion.span
					variants={ {
						visible: {
							y: 0,
							transition: slideUpTransition,
						},
						hidden: { y: '100%' },
					} }
					className='inline-flex font-medium text-4xl md:text-5xl lg:text-[5vh] xl:text-[64px] !leading-normal -tracking-0.04em text-grey-secondary'
				>
					{ isMounted && <span dangerouslySetInnerHTML={ { __html: title } } /> }
				</motion.span>
			</span>
		));
	};

	const renderMainKeys = () => {
		return (
			<div className={ clsxm(
				'lg:pt-11 w-full flex flex-wrap max-lg:px-4 lg:justify-center gap-4 max-lg:pb-6 pt-11 lg:gap-6 relative z-10',
				isLanding && 'lg:pt-8',
				isScheduleCall && 'hidden'
			) }>
				{ heroData.mainKeys.map((item, itemIdx) => {
					return (
						<motion.div
							key={ `landing-hero-mainkeys-${itemIdx}` }
							initial={ { opacity: 0, y: 20 } }
							animate={ { opacity: 1, y: 0 } }
							transition={ {
								duration: 0.5,
								delay: showIntro === 'true' ? 3.5 + itemIdx * 0.2 : 1.5 + itemIdx * 0.2,
							} }
							className={ clsxm('flex items-center justify-center p-[10px] rounded-lg bg-white/20 backdrop-blur-md text-grey-50 text-sm font-medium') }
						>
							<span className='whitespace-nowrap'>{ item }</span>
						</motion.div>
					);
				}) }
			</div>
		);
	};

	const renderPopupReview = () => {
		if (!isMobile && !isScheduleCall) {
			return (
				<PopupReview
					motionProps={ {
						variants: {
							initial: { scale: 0, opacity: 0 },
							animate: {
								scale: 1,
								opacity: 1,
							},
							exit: {
								scale: 0,
								opacity: 0,
							},
						},
						transition: {
							duration: 0.64,
							delay: showIntro === 'true' ? 5 : 4,
							ease: 'easeInOut',
						},
						initial: 'initial',
						whileInView: 'animate',
						exit: 'exit',
						viewport: { once: true },
					} }
					wrapperClassName='lg:w-auto pl-[18px] py-3 pr-[42px] !bg-black/[0.15] !text-white !border !border-white/[0.15] !rounded-[18px]'
				/>
			);
		}

		return null;
	};

	return (
		<div
			ref={ ref }
			className={ clsxm(
				'px-2 sm:px-3 lg:px-3 pt-2 sm:pt-3 lg:pt-3 overflow-hidden font-Poppins'
			) }>
			<Navbar
				animationProps={ {
					transition: {
						...navbarDefaultTransition,
						delay: showIntro === 'true' ? 3.1 : 1.1,
					},
				} }
			/>
			<div className='bg-primary h-[calc(100svh+14px)] sm:h-[calc(100svh+10px)] md:h-[calc(100svh+6px)] lg:min-h-[700px] lg:h-[calc(100vh)] w-full overflow-hidden max-lg:rounded-19px max-lg:rounded-b-none rounded-19px relative pt-2 sm:pt-3 md:pt-4 lg:pt-5'>
				<div className='absolute inset-0 w-full h-full'>
					<div className='relative overflow-hidden w-full h-full'>
						{
							isLanding ? (
								isMobile ? (
									<HeroVideo
										type='mobile' />
								) : (
									<HeroVideo type='desktop' />
								)
							) : (
								isMobile ? (
									<HeroVideo
										type='mobile'/>
								) : (
									<HeroVideo type='desktop' />
								)
							)
						}
					</div>
				</div>
				<div className='absolute left-0 inset-y-0 w-[54%] h-full max-lg:hidden bg-backdrop-hero-landing-left' />
				<div className='absolute bottom-0 inset-x-0 w-full h-[72%] lg:hidden bg-backdrop-hero-landing-bottom z-10' />
				<div className='absolute bottom-0 inset-x-0 w-full h-[28%] max-lg:bg-backdrop-hero-landing-bottom-desktop' />
				<div className='h-full container-center'>
					<div className='relative z-20 w-full h-full rounded-b-19px'>
						{ /* <Suspense fallback={ null }>
							<div className='lg:absolute lg:top-[15%] lg:right-0 w-full'>
								{ heroData.banner.show && <HeroBanner showBanner={ showBanner } /> }
							</div>
						</Suspense> */ }
						<div className={ clsxm(
							'pb-12 sm:pb-14 md:pb-16 lg:pb-[60px] min-h-[100vh] lg:min-h-[100vh] w-full flex flex-col justify-end pt-16 sm:pt-18 md:pt-20 lg:pt-24',
							isScheduleCall && 'lg:pb-[75px] pb-[75px]'
						) }>
							<div className='text-left flex gap-y-6 flex-col'>
								<motion.h1
									initial='hidden'
									animate='visible'
									variants={ {
										visible: {
											transition: {
												staggerChildren: 0.5,
												delayChildren: showIntro === 'true' ? 2.1 : 0.1,
											},
										},
									} }
									className='sm:max-w-[738px] flex flex-col max-sm:hidden italic font-VictorSerif font-bold'
								>
									{ renderTitles(isScheduleCall ? heroData.titlesScheduleCall : heroData.titles) }
									{ /* <span className='overflow-hidden inline-flex italic victor-serif-medium sm:max-w-[738px] max-sm:hidden'> */ }
									{ /* 	<motion.span */ }
									{ /* 		variants={ { */ }
									{ /* 			visible: { */ }
									{ /* 				y: 0, */ }
									{ /* 				transition: slideUpTransition, */ }
									{ /* 			}, */ }
									{ /* 			hidden: { y: '100%' }, */ }
									{ /* 		} } */ }
									{ /* 		className='inline-flex font-medium text-[#8CD6FE] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[6vh] xl:text-[56px] !leading-normal -tracking-0.04em italic victor-serif-medium' */ }
									{ /* 	> */ }
									{ /*         Personalized Longevity */ }
									{ /* 	</motion.span> */ }
									{ /* </span> */ }
								</motion.h1>
								<motion.h1
									initial='hidden'
									animate='visible'
									variants={ {
										visible: {
											transition: {
												staggerChildren: 0.25,
											},
										},
									} }
									className='sm:hidden flex italic font-VictorSerif flex-col'
								>
									{ renderTitles(isScheduleCall ? heroData.titlesScheduleCallMobile : heroData.titlesMobile) }
								</motion.h1>
								<span className='overflow-hidden inline-flex'>
									<motion.h2
										variants={ {
											visible: {
												y: 0,
												transition: {
													...slideUpTransition,
													delay: showIntro === 'true' ? 2.1 : 0.1,
												},
											},
											hidden: { y: '100%' },
										} }
										initial='hidden'
										animate='visible'
										className='text-grey-secondary font-Poppins font-normal inline-flex text-xs sm:text-xs lg:text-base !leading-6 tracking-0.11em'
									>
										{ heroData.preTitle }
									</motion.h2>
								</span>

								<div className={ clsxm(
									'flex w-full mt-6 xs:mt-8 sm:mt-10 md:mt-[5vh] lg:mt-[5.435vh] xl:mt-50px relative',
									isLanding && 'sm:mt-6 md:mt-7 lg:mt-8 xl:mt-8'
								) }>
									<div className='grid grid-cols-1 auto-rows-fr sm:flex gap-4 xxs:gap-6 lg:gap-[42px] items-center w-full'>
										<div className='overflow-hidden inline-block h-full'>
											<motion.div
												variants={ {
													visible: {
														y: 0,
														transition: {
															...slideUpTransition,
															delay: showIntro === 'true' ? 2.35 : 1.35,
															duration: 1,
														},
													},
													hidden: { y: '115%' },
												} }
												initial='hidden'
												animate='visible'
												className='inline-block w-full'
											>
												<div className='flex max-sm:w-full max-sm:justify-center'>
													{
														isScheduleCall ? (
															<ButtonCta
																href='https://calendly.com/naomitabot-gogeviti/geviti-discovery-call'
																externalLink={ true }
																aria-label={ 'Schedule a call' }
																text={ 'Schedule a call' }
																theme='secondary'
																className='max-sm:w-full'
															/>
														) : (
															<ButtonCta
																href={ heroData.btnCta.href }
																externalLink={ heroData.btnCta.externalLink }
																aria-label={ heroData.btnCta.text }
																text={ heroData.btnCta.text }
																theme='secondary'
																className='max-sm:w-full'
															/>
														)
													}
												</div>
											</motion.div>
										</div>
										{
											!isScheduleCall && (
												<div className='overflow-hidden inline-block h-full'>
													<motion.div
														variants={ {
															visible: {
																y: 0,
																transition: {
																	...slideUpTransition,
																	delay: showIntro === 'true' ? 2.35 : 1.8,
																	duration: 1,
																},
															},
															hidden: { y: '100%' },
														} }
														initial='hidden'
														animate='visible'
														className='flex flex-col gap-4 w-full h-full'
													>
														<span className='text-sm text-grey-secondary max-lg:hidden'>Questions about our membership?</span>
														<a
															href={ heroData.btnCta2.href }
															target='_blank'
															rel='noopener noreferrer'
															className='underline font-medium text-lg max-lg:hidden text-grey-secondary'>
															{ heroData.btnCta2.text }
														</a>
														<ButtonCta
															externalLink={ heroData.btnCta2.externalLink }
															aria-label={ heroData.btnCta2.text }
															text={ heroData.btnCta2.textMobile }
															href={ heroData.btnCta2.href }
															theme='blur'
															className='max-sm:w-full lg:hidden'
														/>
													</motion.div>
												</div>
											)
										}
									</div>

									<Suspense fallback={ null }>
										<div className='absolute right-0 bottom-0 max-lg:hidden'>
											{ renderPopupReview() }
										</div>
										{ /* <div className='max-lg:hidden'>
											{ heroData.banner.show && <HeroBanner showBanner={ showBanner } /> }
										</div> */ }
									</Suspense>
								</div>
							</div>

							<div className={ clsxm(
								'mt-8 sm:mt-10 md:mt-12 relative xs:mt-[46px] lg:mt-[9.13vh] xl:mt-[84px]',
								isLanding && 'sm:mt-6 md:mt-7 lg:mt-8 xl:mt-8',
								isScheduleCall && 'hidden'
							) }>
								<motion.div
									variants={ {
										visible: {
											opacity: 1,
											y: 0,
											transition: {
												delay: showIntro === 'true' ? 3.1 : 0.1,
												duration: 1,
												ease: 'easeInOut',
											},
										},
										hidden: { opacity: 0, y: 5 },
									} }
									initial='hidden'
									animate='visible'
								>
									<div className='overflow-hidden rounded-full bg-white/10 relative z-20'>
										<motion.div
											className='h-px rounded-full bg-blue-primary'
											initial={ { width: '0%' } }
											animate={ stepControls }
										/>
									</div>
								</motion.div>
								{ /* <div className='absolute h-full w-full bg-red-500 inset-0'>
										Gradient
									</div> */ }
								<div className='max-lg:hidden'>
									{ renderMainKeys() }
								</div>
								{ /* { renderMainKeysMobile() } */ }
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:hidden bg-primary rounded-b-[19px]'>
				{ renderMainKeys() }
			</div>
		</div>
	);
};

export default Hero;
