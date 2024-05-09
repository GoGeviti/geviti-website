'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import solutionData from '@/constant/data/solution';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import Navbar, { navbarDefaultTransition } from '../Navbar/Landing';

const slideUpTransition = {
	ease: 'easeInOut',
	duration: 0.75,
};

const Hero: React.FC<{ type: 'men' | 'women'; }> = ({ type }) => {
	const heroData = solutionData.hero[type];

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
					className='inline-block font-medium text-[6.667vw] xs:text-3xl md:text-4xl lg:text-[5vh] xl:text-[46px] !leading-normal -tracking-0.04em text-grey-secondary'
				>
					<span
						dangerouslySetInnerHTML={ { __html: title } }
						className='hero-solutions' />
				</motion.span>
			</span>
		));
	};

	const renderImage = (imageType: 'desktop' | 'mobile') => {
		const imageMobile = imageType === 'mobile';

		return (
			<Image
				src={ imageMobile ? heroData.imageMobile : heroData.image }
				alt='hero'
				priority={ true }
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

	return (
		<div className='lg:px-3 lg:pt-3 overflow-hidden font-Poppins'>
			<Navbar animationProps={ {
				transition: {
					...navbarDefaultTransition,
					delay: 1.75
				}
			} } />
			<div className='bg-primary h-[calc(100svh+14px)] lg:h-[calc(100vh-202px)] w-full overflow-hidden max-lg:rounded-t-none rounded-19px relative pt-11px lg:pt-5'>
				<div className='absolute inset-0 w-full h-full'>
					<div className='relative overflow-hidden w-full h-full'>
						{ renderImage('desktop') }
						{ renderImage('mobile') }
					</div>
				</div>
				{ type === 'men'
					? <div className='max-lg:hidden absolute bottom-0 inset-x-0 w-full h-[80%] bg-backdrop-hero-membership-bottom -z-0' />
					: <div
						className='lg:hidden absolute bottom-0 inset-x-0 w-full h-[62%] -z-0'
						style={ {
							background: 'linear-gradient(0deg, #181A1C 20.46%, rgba(24, 26, 28, 0.72) 61.5%, rgba(24, 26, 28, 0) 100%)'
						} } /> }

				<div className='h-full'>
					<div className='relative w-full h-full rounded-b-19px'>
						<div className='h-full w-full flex flex-col justify-end'>
							<div className={ clsxm(
								'pb-[42px] lg:pb-[10.267vh] xl:pb-[73px] text-left flex flex-col',
								type === 'men' && 'max-lg:pt-[39px] max-lg:bg-backdrop-hero-membership-bottom-mobile'
							) }>
								<div className='container-center w-full'>
									<span className='overflow-hidden inline-block'>
										<motion.h2
											variants={ {
												visible: {
													y: 0,
													transition: slideUpTransition
												},
												hidden: { y: '100%' },
											} }
											initial='hidden'
											animate='visible'
											className='text-grey-secondary font-Poppins inline-block font-semibold text-[10px] sm:text-xs lg:text-sm !leading-6 uppercase tracking-0.11em'>
											{ heroData.preTitle }
										</motion.h2>
									</span>

									<motion.h1
										initial='hidden'
										animate='visible'
										className='flex flex-col max-sm:hidden'
									>
										{ renderTitles(heroData.titles) }
									</motion.h1>

									<motion.h1
										initial='hidden'
										animate='visible'
										variants={ {
											visible: {
												transition: {
													staggerChildren: .25
												}
											}
										} }
										className='flex flex-col sm:hidden max-lg:mt-5px'
									>
										{ renderTitles(heroData.titlesMobile) }
									</motion.h1>

									<div className='mt-5px lg:mt-6 sm:max-w-[504px]'>
										<span className='overflow-hidden inline-block'>
											<motion.p
												variants={ {
													visible: {
														y: 0,
														transition: {
															...slideUpTransition,
															delay: .5,
														}
													},
													hidden: { y: '100%' },
												} }
												initial='hidden'
												animate='visible'
												className='text-grey-50 font-Poppins inline-block text-[2.9vw] xs2:text-xs sm:text-sm !leading-5'>
												<span dangerouslySetInnerHTML={ { __html: heroData.description } } />
											</motion.p>
										</span>
									</div>

									<div className='flex w-full mt-[5vh] xs:mt-[42px] lg:mt-[5.435vh] xl:mt-[42px]'>
										<div className='overflow-hidden inline-block w-full'>
											<motion.div
												variants={ {
													visible: {
														y: 0,
														transition: {
															...slideUpTransition,
															delay: .75,
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
														theme={ type === 'women' ? 'tertiary' : 'secondary' }
														className='max-sm:w-full'
													/>
												</div>
											</motion.div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
