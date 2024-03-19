'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

import landingData from '@/constant/data/landing';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';
import Navbar from '../Navbar/Landing';

import ButtonCta from './ButtonCta';
import { slideUpTransition } from './transition';

const heroData = landingData.hero;

const Hero: React.FC = () => {
	const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
	const [startAutoRunProgress, setStartAutoRunProgress] = useState<boolean>(false);
	const stepControls = useAnimationControls();
	const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	useEffect(() => {
		const timer = setTimeout(() => {
			stepControls.start({
				width: '20%',
				transition: {
					delay: 1,
					duration: 1,
					ease: 'easeOut'
				}
			});
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (activeStepIdx >= 4) {
			clearInterval(intervalRef.current);
			setStartAutoRunProgress(false);
		}
	}, [activeStepIdx]);

	useEffect(() => {
		if (startAutoRunProgress) {
			intervalRef.current = setInterval(() => {
				setActiveStepIdx(prev => prev + 1);
			}, 750);
		}

		return () => clearInterval(intervalRef.current);
	}, [startAutoRunProgress]);

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

	return (
		<div className='lg:px-3 lg:pt-3 pb-[27px] lg:pb-[83px] overflow-hidden font-Poppins'>
			<Navbar
				animationProps={ {
					onAnimationComplete: () => {
						if (!isMobile) {
							stepControls.start({
								width: '100%',
								transition: {
									duration: 3,
									ease: 'easeOut'
								}
							});
							setStartAutoRunProgress(true);
							setActiveStepIdx(prev => prev + 1);
						}
					}
				} } />
			<div className='bg-primary h-[calc(100svh+14px)] lg:h-[calc(100vh-12px)] w-full overflow-hidden max-lg:rounded-t-none rounded-19px relative pt-11px lg:pt-5'>
				<div className='absolute inset-0 w-full h-full'>
					<div className='relative overflow-hidden w-full h-full'>
						<Image
							src={ heroData.image }
							alt='hero'
							priority
							className='object-cover md:block hidden object-right pointer-events-none'
							fill
							quality={ 100 }
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
						/>
						<Image
							src={ heroData.imageMobile }
							alt='hero mobile'
							priority
							className='object-cover md:hidden object-center pointer-events-none'
							fill
							quality={ 90 }
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
						/>
					</div>
				</div>
				<div className='absolute bottom-0 inset-x-0 w-full h-[60%] backdrop-hero-landing-bottom -z-0' />
				<div className='h-full'>
					<div className='relative w-full h-full rounded-b-19px'>
						<div className='container-center pb-18px lg:pb-[47px] h-full w-full flex flex-col justify-end'>
							<div className='text-left flex flex-col'>
								<div>
									<span className='overflow-hidden inline-block'>
										<motion.h2
											variants={ {
												visible: {
													y: 0,
													transition: {
														...slideUpTransition,
														delay: .3
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
												staggerChildren: .3,
											}
										}
									} }
									className='sm:max-w-[738px] flex flex-col mt-5px lg:mt-0'
								>
									<span className='sm:hidden flex flex-col'>
										{ renderTitles(heroData.titlesMobile) }
									</span>
									<span className='max-sm:hidden flex flex-col'>
										{ renderTitles(heroData.titles) }
									</span>
								</motion.h1>

								<div className='flex mt-[5vh] xs:mt-[42px] lg:mt-[5.435vh] xl:mt-50px'>
									<div className='grid grid-cols-1 auto-rows-fr sm:grid-cols-2 gap-4 sm:gap-6 items-center max-sm:w-full'>
										<motion.div
											variants={ {
												visible: {
													opacity: 1,
													y: 0,
													transition: {
														delay: 1,
														opacity: {
															duration: 2,
															ease: 'easeInOut'
														},
														y: {
															duration: 1,
															ease: [0.455, 0.03, 0.515, 0.955]
														}
													}
												},
												hidden: { opacity: 0, y: 5 },
											} }
											initial='hidden'
											animate='visible'
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
										<motion.div
											variants={ {
												visible: {
													opacity: 1,
													y: 0,
													backdropFilter: 'blur(25px)',
													borderRadius: '9999px',
													transition: {
														delay: 1,
														opacity: {
															duration: 2,
															ease: 'easeInOut'
														},
														y: {
															duration: 1,
															ease: [0.455, 0.03, 0.515, 0.955]
														}
													}
												},
												hidden: { opacity: 0, y: 5 },
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
							<motion.div
								variants={ {
									visible: {
										opacity: 1,
										y: 0,
										transition: {
											delay: 1,
											opacity: {
												duration: 2,
												ease: 'easeInOut'
											},
											y: {
												duration: 1,
												ease: [0.455, 0.03, 0.515, 0.955]
											}
										}
									},
									hidden: { opacity: 0, y: 5 },
								} }
								initial='hidden'
								animate='visible'
								className='mt-[5.2vh] xs:mt-[46px] lg:mt-[9.13vh] xl:mt-[84px]'
								aria-hidden='true'
							>
								<div className='overflow-hidden rounded-full bg-white/10 relative z-20'>
									<motion.div
										className='h-px rounded-full bg-blue-primary'
										initial={ { width: '0%' } }
										animate={ stepControls }
									/>
								</div>
								<div
									onScroll={ handleScrollCarousel }
									className='pt-18px lg:pt-6 no-scrollbar w-full text-sm !leading-[21px] font-medium text-grey-400 flex flex-nowrap overflow-x-scroll lg:overflow-hidden snap-x snap-mandatory scroll-smooth lg:justify-between'>
									{ heroData.mainKeys.map((item, itemIdx) => {
										const isItemActive = itemIdx <= activeStepIdx;

										return (
											<div
												key={ itemIdx }
												className={ clsxm(
													'flex max-lg:w-full max-lg:justify-center snap-start max-lg:flex-none',
													isItemActive && 'text-grey-50'
												) }
												onClick={ () => setActiveStepIdx(itemIdx) }
											>
												<div className='flex flex-col gap-3 max-lg:items-center'>
													<item.icon className={ clsxm('flex-shrink-0', isItemActive ? 'text-blue-primary' : 'text-grey-400') } />
													<h4 className='text-center lg:text-left'>
														<span dangerouslySetInnerHTML={ { __html: item.text } } />
													</h4>
												</div>
											</div>
										);
									}) }
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
