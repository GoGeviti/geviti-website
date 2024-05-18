'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import { ArrowNarrowRight } from '../Icons';

const benefitsData = landingData.benefits;

const Benefits: React.FC = () => {
	const [hoveredIdx, setHoveredIdx] = useState<number>(-1);
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const renderImage = (item: any, renderOnMobile?: boolean) => { // eslint-disable-line @typescript-eslint/no-explicit-any
		return (
			<Image
				src={ renderOnMobile ? item.imageMobile : item.image }
				alt={ item.title }
				className={ clsxm(
					'absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none',
					renderOnMobile ? 'lg:hidden' : 'max-lg:hidden'
				) }
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
				quality={ 100 }
				fill
			/>
		);
	};

	const renderArrowNarrowRight = () => {
		return (
			<ArrowNarrowRight className='w-8 h-8 text-white absolute-center flex-shrink-0 -rotate-45' />
		);
	};

	return (
		<div className='lg:px-3 mt-6 font-Poppins'>
			<div className='bg-white relative overflow-hidden rounded-19px py-[46px] lg:pt-[79px] lg:pb-[49px]'>
				<div className='container-center'>
					<div className='text-center flex flex-col justify-center'>
						<p className='text-pretitle text-grey-primary'>
							{ benefitsData.preTitle }
						</p>

						<h2 className='my-2.5 lg:mt-0 lg:mb-2 text-primary text-[6.107vw] max-md:leading-[133%] md:text-3xl lg:text-[4.444vw] xl:text-[64px] lg:!leading-normal -tracking-0.04em'>
							{ benefitsData.title }
						</h2>

						{ benefitsData.description && (
							<p className='text-grey-400 text-xs sm:text-sm !leading-5 max-w-[342px] mx-auto lg:max-w-[628px]'>
								<span dangerouslySetInnerHTML={ { __html: benefitsData.description } } />
							</p>
						) }
					</div>
					<div className='mx-auto mt-[42px] lg:mt-[68px] grid max-w-2xl grid-cols-1 gap-[42px] lg:gap-[23px] lg:mx-0 lg:max-w-none lg:grid-cols-2'>
						{ benefitsData.list.map((item, itemIdx) => {
							const hovered = itemIdx === hoveredIdx;

							return (
								<article
									key={ item.title }
									className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-3 pb-3 h-[542px]'
									{ ...!isMobile
										? {
											onMouseEnter: () => setHoveredIdx(itemIdx),
											onMouseLeave: () => setHoveredIdx(-1),
										}
										: {}
									}
								>
									{ renderImage(item) }
									{ renderImage(item, true) }
									<motion.div
										variants={ {
											visible: {
												opacity: 1,
												scale: 1,
												transition: {
													duration: .5,
													ease: 'easeInOut'
												}
											},
											hidden: { opacity: 0, scale: 0 },
										} }
										initial='hidden'
										whileInView='visible'
										viewport={ { once: true } }
										className='rounded-2xl p-px border border-white/50 backdrop-blur-[50px] group'
									>
										<motion.div
											{
												...!isMobile
													? {
														variants: {
															initial: { maxHeight: 91.4 },
															visible: { maxHeight: 264.4 }
														},
														initial: 'initial',
														animate: hovered ? 'visible' : 'initial',
														style: { maxHeight: 91.4 },
														transition: { duration: .6, ease: 'easeInOut' }
													}
													: {}
											}
											className='rounded-[calc(1rem-1px)] bg-[#042A4980] pt-6 sm:pt-[17px] pb-[21px] sm:pb-[15px] px-6 sm:px-18px text-white relative overflow-hidden group'
										>
										
											{ /* <div className='absolute inset-0 w-full h-full'>
												<div className='relative overflow-hidden w-full h-full'>
													<Image
														src='/images/landing/compressed/noise.png'
														alt=''
														fill
														sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
														quality={ 100 }
														className='object-cover pointer-events-none'
													/>
												</div>
											</div> */ }
											<Link href={ item.href }>
												<h3 className='text-2xl !leading-9 sm:text-3xl lg:text-4xl lg:!leading-[54px] -tracking-0.04em'>
													{ item.title }
												</h3>

												<div className='absolute z-10 right-18px bottom-15px max-lg:hidden group-hover:translate-y-1 transform transition-transform ease-in-out duration-500'>
													<Link
														href={ item.href }
														className='flex relative w-[62px] h-[62px] rounded-full bg-white/20 border-2 border-white/5 hover:bg-white/40'>
														{ renderArrowNarrowRight() }
													</Link>
												</div>

												<motion.div
													{ ...!isMobile
														? {
															variants: {
																initial: { height: 0, y: 20 },
																visible: { height: 'fit-content', y: 0 },
															},
															initial: 'initial',
															animate: hovered ? 'visible' : 'initial',
															transition: { duration: .6, ease: 'easeInOut' }
														}
														: {}
													}
													className='max-lg:flex block'
												>
													<ul className='list-inside list-disc mt-2.5 sm:mt-5px text-xs sm:text-sm !leading-7 text-grey-50'>
														{ item.details.map(detail => (
															<li key={ detail }>
																{ detail }
															</li>
														)) }
													</ul>
												</motion.div>
											</Link>
										</motion.div>
									</motion.div>
								</article>
							);
						}) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;