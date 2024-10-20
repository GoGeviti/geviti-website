'use client';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimationControls } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import landingData from '@/constant/data/landing';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import ButtonCta from '../ButtonCta';
import Navbar, { navbarDefaultTransition } from '../Navbar/Landing';

import { slideUpTransition } from './transition';

const PopupReview = dynamic(() => import('../PopupReview'), {
	ssr: false,
});
const HeroBanner = dynamic(() => import('./HeroBanner'), {
	ssr: false,
});

const heroData = landingData.hero;

type HeroProps = {
  showBanner?: boolean;
  showIntro?: string;
};

const Hero: React.FC<HeroProps> = ({
	showBanner = false,
	showIntro = 'true',
}) => {
	const { ref } = useInView();

	// const [activeStepIdx, setActiveStepIdx] = useState<number>(-1);
	// const [prevIdx, setPrevIdx] = useState<number>(activeStepIdx);
	// const [startTimer, setStartTimer] = useState<boolean>(false);
	const [isMounted, setIsMounted] = useState<boolean>(false);

	const stepControls = useAnimationControls();

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// useEffect(() => {
	// 	stepControls.start({
	// 		width: (activeStepIdx + 1) * 20 + '%',
	// 		transition: {
	// 			duration: 1,
	// 			ease: 'easeOut',
	// 		},
	// 	});
	// }, [activeStepIdx]);

	// useEffect(() => {
	// 	let timer: NodeJS.Timeout | undefined = undefined;

	// 	if (startTimer && inView) {
	// 		timer = setTimeout(() => {
	// 			setPrevIdx(activeStepIdx);
	// 			setActiveStepIdx(prev =>
	// 				prev + 1 === heroData.mainKeys.length ? 0 : prev + 1
	// 			);
	// 		}, 3000);
	// 	} else {
	// 		clearTimeout(timer);
	// 	}

	// 	return () => clearTimeout(timer);
	// }, [activeStepIdx, startTimer, inView]);

	// const handleScrollCarousel = useCallback(
	// 	(e: React.UIEvent<HTMLDivElement>) => {
	// 		const element = e.currentTarget;

	// 		const windowScroll = element.scrollLeft;
	// 		const totalWidth = element.scrollWidth - element.clientWidth;
	// 		let scrollProgress = 0;
	// 		if (windowScroll === 0) scrollProgress = 0;
	// 		if (windowScroll > totalWidth) scrollProgress = 100;
	// 		else scrollProgress = (windowScroll / totalWidth) * 100;

	// 		const activeItemIdx = Math.floor(
	// 			(scrollProgress * heroData.mainKeys.length) / 110
	// 		);
	// 		setActiveStepIdx(activeItemIdx);
	// 		stepControls.start({
	// 			width: (activeItemIdx + 1) * 20 + '%',
	// 			transition: {
	// 				duration: 1,
	// 				ease: 'easeOut',
	// 			},
	// 		});
	// 	},
	// 	[]
	// );

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
					className='inline-flex font-medium text-[6.667vw] xs:text-3xl md:text-4xl lg:text-[5vh] xl:text-[46px] !leading-normal -tracking-0.04em text-grey-secondary'
				>
					{ isMounted && <span dangerouslySetInnerHTML={ { __html: title } } /> }
				</motion.span>
			</span>
		));
	};

	const renderImage = (type: 'desktop' | 'mobile') => {
		const imageMobile = type === 'mobile';

		return (
			<Image
				src={ imageMobile ? heroData.imageMobile : heroData.image }
				alt='hero'
				priority={ true }
				className={ clsxm(
					'object-cover pointer-events-none',
					imageMobile
						? 'md:hidden object-center'
						: 'md:block hidden object-right'
				) }
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
			/>
		);
	};

	// const renderMainKeysItem = (
	// 	item: string,
	// ) => {
	// 	if (item) {
	// 		return (
	// 			<div className='flex flex-col gap-3 max-lg:w-full max-lg:items-center'>
	// 				{ /* <item.icon
	// 					className={ clsxm(
	// 						'flex-shrink-0',
	// 						isItemActive ? 'text-blue-primary' : 'text-grey-400'
	// 					) }
	// 				/> */ }
	// 				<p
	// 					className={ clsxm(
	// 						'text-center lg:text-left text-sm !leading-[21px] font-medium',
	// 					) }
	// 				>
	// 					<span dangerouslySetInnerHTML={ { __html: item } } />
	// 				</p>
	// 			</div>
	// 		);
	// 	}

	// 	return null;
	// };

	// const renderMainKeysMobile = () => {
	// 	const list = heroData.mainKeys;
	// 	const currentItem = activeStepIdx > -1 ? list[activeStepIdx] : list[0];
	// 	const prevItem = prevIdx > -1 ? list[prevIdx] : list[list.length - 1];

	// 	return (
	// 		<motion.div
	// 			className='lg:hidden'
	// 			variants={ {
	// 				hidden: { y: '100%', opacity: 0 },
	// 				visible: {
	// 					y: 0,
	// 					opacity: 1,
	// 					transition: {
	// 						ease: slideUpTransition.ease,
	// 						duration: 1,
	// 						delay: 2.1,
	// 					},
	// 				},
	// 			} }
	// 			initial='hidden'
	// 			animate='visible'
	// 		>
	// 			<AnimatePresence initial={ false }>
	// 				<div
	// 					className={ clsxm('inline-block overflow-hidden w-full') }
	// 					style={ { height: 100 } }
	// 				>
	// 					<motion.span
	// 						className='flex flex-col w-full'
	// 						initial='initial'
	// 						animate='animate'
	// 						exit='exit'
	// 						key={ `mobile-mainkeys-${activeStepIdx}` }
	// 						variants={ {
	// 							initial: { y: '0%' },
	// 							animate: { y: '-50%' },
	// 							exit: { y: '0%' },
	// 						} }
	// 						transition={ {
	// 							duration: 1,
	// 							ease: 'linear',
	// 						} }
	// 					>
	// 						<span className='flex justify-center w-full pt-18px'>
	// 							{ renderMainKeysItem(prevItem, false) }
	// 						</span>
	// 						<span className='flex justify-center w-full pt-18px'>
	// 							{ renderMainKeysItem(currentItem, true) }
	// 						</span>
	// 					</motion.span>
	// 				</div>
	// 			</AnimatePresence>
	// 		</motion.div>
	// 	);
	// };

	const renderMainKeys = () => {
		return (
			<motion.div
				initial='hidden'
				animate='visible'
				variants={ {
					visible: {
						transition: {
							staggerChildren: 0.3,
							delayChildren: showIntro === 'true' ? 2.7 : 1.7,
						},
					},
				} }
				className='lg:pt-11 w-full flex flex-wrap max-lg:px-4 lg:justify-center gap-4 max-lg:pb-6 pt-11 lg:gap-6 relative z-10'
			>
				{ heroData.mainKeys.map((item, itemIdx) => {
					// const isItemActive = itemIdx <= activeStepIdx;

					return (
						<motion.div
							key={ 'landing-hero-mainkeys-' + itemIdx }
							variants={ {
								hidden: { y: '500%' },
								visible: {
									y: 0,
									transition: {
										ease: slideUpTransition.ease,
										duration: 1.5,
									},
								},
							} }
							className={ clsxm(
								'flex items-center justify-center p-[10px] rounded-lg bg-white/20 text-grey-50  text-sm font-medium'
							) }
						>
							<span className='whitespace-nowrap'>{ item }</span>
						</motion.div>
					);
				}) }
			</motion.div>
		);
	};

	const renderPopupReview = () => {
		if (!isMobile) {
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
			className='lg:px-3 lg:pt-3 overflow-hidden font-Poppins'>
			<Navbar
				animationProps={ {
					transition: {
						...navbarDefaultTransition,
						delay: showIntro === 'true' ? 3.1 : 1.1,
					},
				} }
			/>
			<div className='bg-primary h-[calc(100svh+14px)] lg:h-[calc(100vh-24px)] w-full overflow-hidden max-lg:rounded-none rounded-19px relative pt-11px lg:pt-5'>
				<div className='absolute inset-0 w-full h-full'>
					<div className='relative overflow-hidden w-full h-full'>
						{ renderImage('desktop') }
						{ renderImage('mobile') }
					</div>
				</div>
				<div className='absolute left-0 inset-y-0 w-[54%] h-full max-lg:hidden bg-backdrop-hero-landing-left' />
				<div className='absolute bottom-0 inset-x-0 w-full h-[72%] lg:hidden bg-backdrop-hero-landing-bottom z-10' />
				<div className='absolute bottom-0 inset-x-0 w-full h-[28%] max-lg:bg-backdrop-hero-landing-bottom-desktop' />
				<div className='h-full container-center'>
					<div className='relative z-20 w-full h-full rounded-b-19px'>
						{ heroData.banner.show ? (
							<HeroBanner showBanner={ showBanner } />
						) : null }
						<div className='lg:pb-[47px] h-full w-full flex flex-col justify-end'>
							<div className='text-left flex flex-col'>
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
										className='text-grey-secondary font-Poppins inline-flex font-semibold text-[10px] sm:text-xs lg:text-sm !leading-6 uppercase tracking-0.11em'
									>
										{ heroData.preTitle }
									</motion.h2>
								</span>

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
									className='sm:max-w-[738px] flex flex-col max-sm:hidden'
								>
									{ renderTitles(heroData.titles) }
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
									className='sm:hidden flex flex-col mt-5px'
								>
									{ renderTitles(heroData.titlesMobile) }
								</motion.h1>

								<div className='flex w-full mt-[5vh] xs:mt-[42px] lg:mt-[5.435vh] xl:mt-50px relative'>
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
													<ButtonCta
														href={ heroData.btnCta.href }
														externalLink={ heroData.btnCta.externalLink }
														aria-label={ heroData.btnCta.text }
														text={ heroData.btnCta.text }
														theme='secondary'
														className='max-sm:w-full'
													/>
												</div>
											</motion.div>
										</div>
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
													text={ heroData.btnCta2.text }
													href={ heroData.btnCta2.href }
													theme='blur'
													className='max-sm:w-full lg:hidden'
												/>
											</motion.div>
										</div>
									</div>

									<div className='absolute right-0 bottom-0 max-lg:hidden'>
										{ renderPopupReview() }
									</div>
								</div>
							</div>

							<div className='mt-[5.2vh] relative xs:mt-[46px] lg:mt-[9.13vh] xl:mt-[84px]'>
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
