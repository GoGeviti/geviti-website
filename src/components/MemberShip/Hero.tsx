'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import membershipData from '@/constant/data/membership';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';
import Navbar from '../Navbar/Landing';

export const slideUpTransition = {
	ease: 'easeInOut',
	duration: 0.75,
};

const heroData = membershipData.hero;

const Hero: React.FC = () => {
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

	return (
		<div className='lg:px-3 lg:pt-3 overflow-hidden font-Poppins'>
			<Navbar />
			<div className='bg-primary h-[calc(100svh+14px)] lg:h-[calc(100vh-12px)] w-full overflow-hidden max-lg:rounded-t-none rounded-19px relative pt-11px lg:pt-5'>
				<div className='absolute inset-0 w-full h-full'>
					<div className='relative overflow-hidden w-full h-full'>
						{ renderImage('desktop') }
						{ renderImage('mobile') }
					</div>
				</div>
				<div className='max-lg:hidden absolute bottom-0 inset-x-0 w-full h-[80%] bg-backdrop-hero-membership-bottom -z-0' />

				<div className='h-full'>
					<div className='relative w-full h-full rounded-b-19px'>
						<div className='h-full w-full flex flex-col justify-end'>
							<div className='pb-[39px] lg:pb-[73px] text-left flex flex-col max-lg:bg-backdrop-hero-membership-bottom-mobile'>
								<div className='container-center w-full'>
									<div>
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
									</div>

									<motion.h1
										initial='hidden'
										animate='visible'
										variants={ {
											visible: {
												transition: {
													staggerChildren: .5
												}
											}
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
													staggerChildren: .25
												}
											}
										} }
										className='sm:hidden flex flex-col mt-5px'
									>
										{ renderTitles(heroData.titlesMobile) }
									</motion.h1>

									<div className='mt-6 max-lg:hidden max-w-[496px]'>
										<span className='overflow-hidden inline-block'>
											<motion.p
												variants={ {
													visible: {
														y: 0,
														transition: {
															...slideUpTransition,
															delay: 1,
														}
													},
													hidden: { y: '100%' },
												} }
												initial='hidden'
												animate='visible'
												className='text-grey-50 font-Poppins inline-block text-sm !leading-[143%]'>
												{ heroData.description }
											</motion.p>
										</span>
									</div>

									<div className='flex w-full mt-[5vh] xs:mt-[42px] lg:mt-[5.435vh] xl:mt-[42px]'>
										<div className='grid grid-cols-1 auto-rows-fr sm:flex gap-4 xxs:gap-6 lg:gap-[42px] items-center w-full'>
											<div className='overflow-hidden inline-block h-full'>
												<motion.div
													variants={ {
														visible: {
															y: 0,
															transition: {
																...slideUpTransition,
																delay: 1,
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
											<div className='overflow-hidden inline-block h-full'>
												<motion.div
													variants={ {
														visible: {
															y: 0,
															transition: {
																...slideUpTransition,
																delay: 1,
																duration: 1
															},
															backdropFilter: '25px'
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
														aria-label='view products'
													>
														<span
															className='text-lg leading-[133%] font-medium text-grey-secondary inline-block z-[2]'
															dangerouslySetInnerHTML={ { __html: heroData.btnCta2.text } } />
														<span className='w-[46px] relative flex items-center justify-center'>
															<ChevronRight className='w-18px h-18px text-grey-secondary flex-shrink-0' />
														</span>
													</CustomLink>
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
		</div>
	);
};

export default Hero;
