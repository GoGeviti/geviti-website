'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

import landingData from '@/constant/data/landing';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';
import { setCookie } from '@/services/cookies';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';
import Navbar from '../Navbar/Landing';

import ButtonCta from './ButtonCta';
import { slideUpTransition } from './transition';

const heroData = landingData.hero;

type HeroProps = {
	showBanner?: boolean;
};

const Hero: React.FC<HeroProps> = ({ showBanner }) => {
	const { ref, inView } = useInView();

	const [activeStepIdx, setActiveStepIdx] = useState<number>(-1);
	const [prevIdx, setPrevIdx] = useState<number>(activeStepIdx);
	const [startTimer, setStartTimer] = useState<boolean>(false);

	const stepControls = useAnimationControls();

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	// const [scopeBanner, animateBanner] = useAnimate();
	const controlsBanner = useAnimationControls();

	useEffect(() => {
		if (showBanner) {
			controlsBanner.start({ scale: 1 }, { ease: 'easeInOut', duration: .85, delay: 6 });
		}
	}, [showBanner]);

	useEffect(() => {
		stepControls.start({
			width: ((activeStepIdx + 1) * 20) + '%',
			transition: {
				duration: 1,
				ease: 'easeOut'
			}
		});
	}, [activeStepIdx]);

	useEffect(() => {
		let timer: NodeJS.Timeout | undefined = undefined;

		if (startTimer && inView) {
			timer = setTimeout(() => {
				setPrevIdx(activeStepIdx);
				setActiveStepIdx(prev => prev + 1 === heroData.mainKeys.length ? 0 : prev + 1);
			}, 3000);
		} else {
			clearTimeout(timer);
		}

		return () => clearTimeout(timer);
	}, [activeStepIdx, startTimer, inView]);

	const handleScrollCarousel = useCallback((e: React.UIEvent<HTMLDivElement>) => {
		const element = e.currentTarget;

		const windowScroll = element.scrollLeft;
		const totalWidth = element.scrollWidth - element.clientWidth;
		let scrollProgress = 0;
		if (windowScroll === 0) scrollProgress = 0;
		if (windowScroll > totalWidth) scrollProgress = 100;
		else scrollProgress = (windowScroll / totalWidth) * 100;

		const activeItemIdx = Math.floor((scrollProgress * heroData.mainKeys.length) / 110);
		setActiveStepIdx(activeItemIdx);
		stepControls.start({
			width: ((activeItemIdx + 1) * 20) + '%',
			transition: {
				duration: 1,
				ease: 'easeOut'
			}
		});
	}, []);

	const renderTitles = (titles: string[]) => {
		return titles.map((title: string, titleIdx: number) => (
			<span
				key={ `title-${ titleIdx }` }
				className='overflow-hidden inline-block'>
				<motion.span
					variants={ {
						visible: {
							y: 0,
							transition: slideUpTransition
						},
						hidden: { y: '100%' }
					} }
					className='inline-block font-medium text-[7.6vw] xs:text-3xl md:text-4xl lg:text-[5vh] xl:text-[46px] !leading-normal -tracking-0.04em text-grey-secondary'
				>{ title }</motion.span>
			</span>
		));
	};

	const renderImage = (type: 'desktop' | 'mobile') => {
		const imageMobile = type === 'mobile';

		return (
			<Image
				src={ imageMobile ? heroData.imageMobile : heroData.image }
				alt='hero'
				priority={ type === 'desktop' }
				className={ clsxm(
					'object-cover pointer-events-none',
					imageMobile ? 'md:hidden object-center' : 'md:block hidden object-right'
				) }
				fill
				quality={ 100 }
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
			/>
		);
	};

	const renderMainKeysItem = (item: {
		icon: (props?: React.SVGProps<SVGSVGElement> | undefined) => React.JSX.Element; // eslint-disable-line no-unused-vars
		text: string;
	}, isItemActive: boolean) => {
		if (item) {
			return (
				<div className='flex flex-col gap-3 max-lg:w-full max-lg:items-center'>
					<item.icon className={ clsxm('flex-shrink-0', isItemActive ? 'text-blue-primary' : 'text-grey-400') } />
					<p className={ clsxm('text-center lg:text-left text-sm !leading-[21px] font-medium', isItemActive ? 'text-grey-50' : 'text-grey-400') }>
						<span dangerouslySetInnerHTML={ { __html: item.text } } />
					</p>
				</div>
			);
		}

		return null;
	};

	const renderMainKeysMobile = () => {
		const list = heroData.mainKeys;
		const currentItem = activeStepIdx > -1 ? list[activeStepIdx] : list[0];
		const prevItem = prevIdx > -1 ? list[prevIdx] : list[list.length - 1];

		return (
			<motion.div
				className='lg:hidden'
				variants={ {
					hidden: { y: '100%', opacity: 0 },
					visible: {
						y: 0,
						opacity: 1,
						transition: {
							ease: slideUpTransition.ease,
							duration: 1,
							delay: 5.1
						},
					},
				} }
				initial='hidden'
				animate='visible'
			>
				<AnimatePresence initial={ false }>
					<div
						className={ clsxm('inline-block overflow-hidden w-full') }
						style={ { height: 100 } }>
						<motion.span
							className='flex flex-col w-full'
							initial='initial'
							animate='animate'
							exit='exit'
							key={ `mobile-mainkeys-${ activeStepIdx }` }
							variants={ {
								initial: { y: '0%' },
								animate: { y: '-50%' },
								exit: { y: '0%' }
							} }
							transition={ {
								duration: 1,
								ease: 'linear'
							} }
						>
							{ }
							<span className='flex justify-center w-full pt-18px'>
								{ renderMainKeysItem(prevItem, false) }
							</span>
							<span className='flex justify-center w-full pt-18px'>
								{ renderMainKeysItem(currentItem, true) }
							</span>
						</motion.span>
					</div>
				</AnimatePresence>
			</motion.div>
		);
	};

	const renderMainKeysDesktop = () => {
		if (!isMobile) {
			return (
				<motion.div
					initial='hidden'
					animate='visible'
					variants={ {
						visible: {
							transition: {
								staggerChildren: .3,
								delayChildren: 2.7
							}
						}
					} }
					onScroll={ handleScrollCarousel }
					className='lg:pt-6 max-lg:hidden no-scrollbar w-full flex flex-nowrap overflow-y-hidden overflow-x-scroll lg:overflow-hidden snap-x snap-mandatory scroll-smooth lg:justify-between'
				>
					{ heroData.mainKeys.map((item, itemIdx) => {
						const isItemActive = itemIdx <= activeStepIdx;

						return (
							<span
								key={ itemIdx }
								className={ clsxm(
									'flex lg:overflow-hidden lg:inline-block max-lg:w-full max-lg:justify-center snap-start max-lg:flex-none cursor-pointer',
									// isItemActive && 'text-grey-50'
								) }
								onMouseEnter={ () => setActiveStepIdx(itemIdx) }
							>
								<motion.div
									variants={ {
										hidden: { y: '200%' },
										visible: {
											y: 0,
											transition: { ease: slideUpTransition.ease, duration: 1.5 },
										},
									} }
								>
									{ renderMainKeysItem(item, isItemActive) }
								</motion.div>
							</span>
						);
					}
					) }
				</motion.div>
			);
		}

		return null;
	};

	const onCloseBanner = () => {
		setCookie({ key: 'close_hero_banner', value: 'true' });
		controlsBanner.start({ opacity: 0, scale: 0 }, { ease: 'easeInOut', duration: .75 });
	};

	return (
		<div
			ref={ ref }
			className='lg:px-3 lg:pt-3 overflow-hidden font-Poppins'>
			<Navbar />
			<div className='bg-primary h-[calc(100svh+14px)] lg:h-[calc(100vh-12px)] w-full overflow-hidden max-lg:rounded-t-none rounded-19px relative pt-11px lg:pt-5'>
				<div className='absolute inset-0 w-full h-full'>
					<div className='relative overflow-hidden w-full h-full'>
						{ renderImage('desktop') }
						{ renderImage('mobile') }
					</div>
				</div>
				<div className='absolute bottom-0 inset-x-0 w-full h-[60%] backdrop-hero-landing-bottom -z-0' />
				<div className='h-full container-center'>
					<div className='relative w-full h-full rounded-b-19px'>
						{ heroData.banner.show
							? (
								<motion.div
									animate={ controlsBanner }
									initial={ { scale: 0 } }
									className='absolute max-lg:left-0 right-0 top-[calc(60px+14px)] lg:top-[calc(69px+3.203vh)] xl:top-[calc(69px+41px)]'
								>
									<div className='bg-black/15 backdrop-blur-[25px] border border-white/15 relative pl-18px pr-[35px] lg:pr-[42px] py-3 rounded-xl lg:rounded-[18px] flex items-center gap-3 lg:gap-6 w-full lg:max-w-[471px]'>
										<div className='absolute top-0 lg:top-0.5 right-1.5 lg:right-2'>
											<button
												onClick={ onCloseBanner }
												aria-label='btn-banner'
												className='focus:ring-0 focus:outline-none border border-white/10 bg-white/20 hover:bg-white/30 w-18px h-18px lg:w-[22px] lg:h-[22px] rounded-full relative'>
												<IoClose className='text-white w-3.5 h-3.5 absolute-center flex-shrink-0' />
											</button>
										</div>
										<div className='w-[47px] h-[47px] lg:w-16 lg:h-16 flex-shrink-0 rounded-[14px] lg:rounded-19px bg-primary relative'>
											<heroData.banner.icon className='w-5 h-5 lg:w-7 lg:h-7 flex-shrink-0 absolute-center' />
										</div>
										<p className='text-[10px] leading-4 lg:text-sm lg:leading-6 font-Poppins text-white'>{ heroData.banner.text }</p>
									</div>
								</motion.div>
							) : null }
						<div className='pb-18px lg:pb-[47px] h-full w-full flex flex-col justify-end'>
							<div className='text-left flex flex-col'>
								<div>
									<span className='overflow-hidden inline-block'>
										<motion.h2
											variants={ {
												visible: {
													y: 0,
													transition: {
														...slideUpTransition,
														delay: 2.1
													}
												},
												hidden: { y: '100%' },
											} }
											initial='hidden'
											animate='visible'
											className='text-grey-secondary font-Poppins inline-block font-semibold text-[10px] sm:text-xs lg:text-sm !leading-6 uppercase tracking-0.11em'>
											{ heroData.preTitle }
										</motion.h2>
									</span>
								</div>

								<motion.h1
									initial='hidden'
									animate='visible'
									variants={ {
										visible: {
											transition: {
												staggerChildren: .5,
												delayChildren: 2.1
											}
										}
									} }
									className='sm:max-w-[738px] flex flex-col mt-5px lg:mt-0 max-sm:hidden'
								>
									{ renderTitles(heroData.titles) }
								</motion.h1>
								<motion.h1
									initial='hidden'
									animate='visible'
									variants={ {
										visible: {
											transition: {
												staggerChildren: .25,
												delayChildren: 2.1
											}
										}
									} }
									className='sm:hidden flex flex-col'
								>
									{ renderTitles(heroData.titlesMobile) }
								</motion.h1>

								<div className='flex w-full mt-[5vh] xs:mt-[42px] lg:mt-[5.435vh] xl:mt-50px'>
									<div className='grid grid-cols-1 auto-rows-fr sm:grid-cols-2 gap-4 sm:gap-6 items-center max-sm:w-full'>
										<div className='overflow-hidden inline-block'>
											<motion.div
												variants={ {
													visible: {
														y: 0,
														transition: {
															...slideUpTransition,
															delay: 2.35,
															duration: 1
														}
													},
													hidden: { y: '100%' }
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
										<div className='overflow-hidden inline-block w-full h-full'>
											<motion.div
												variants={ {
													visible: {
														y: 0,
														transition: {
															...slideUpTransition,
															delay: 2.35,
															duration: 1
														}
													},
													hidden: { y: '100%' }
												} }
												initial='hidden'
												animate='visible'
												className='flex w-full h-full'
											>
												<CustomLink
													href={ heroData.btnCta2.href }
													externalLink={ heroData.btnCta2.externalLink }
													className='bg-white/10 hover:bg-white/20 group max-md:w-full border border-white/5 backdrop-blur-[25px] rounded-full py-1.5 pl-[42px] pr-1.5 h-full relative grid place-items-center grid-cols-[auto_46px] overflow-hidden gap-6'
													aria-label={ heroData.btnCta2.text }
												>
													<span className='text-lg leading-[133%] font-medium text-grey-secondary inline-block z-[2]'>
														{ heroData.btnCta2.text }
													</span>
													<span className='w-[46px] relative flex items-center justify-center'>
														<ChevronRight className='w-18px h-18px text-grey-secondary flex-shrink-0' />
													</span>
												</CustomLink>
											</motion.div>
										</div>
									</div>
								</div>
							</div>

							<div className='mt-[5.2vh] xs:mt-[46px] lg:mt-[9.13vh] xl:mt-[84px]'>
								<motion.div
									variants={ {
										visible: {
											opacity: 1,
											y: 0,
											transition: {
												delay: 3.1,
												duration: 1,
												ease: 'easeInOut'
											}
										},
										hidden: { opacity: 0, y: 5 },
									} }
									initial='hidden'
									animate='visible'
									onAnimationComplete={ () => {
										if (isMobile) {
											setActiveStepIdx(0);
											setStartTimer(true);
										}
									} }
								>
									<div className='overflow-hidden rounded-full bg-white/10 relative z-20'>
										<motion.div
											className='h-px rounded-full bg-blue-primary'
											initial={ { width: '0%' } }
											animate={ stepControls }
										/>
									</div>
								</motion.div>

								{ renderMainKeysDesktop() }
								{ renderMainKeysMobile() }
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
