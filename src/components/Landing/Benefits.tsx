'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { ArrowNarrowRight, ChevronRight } from '../Icons';

const benefitsData = landingData.benefits;

const Benefits: React.FC = () => {
	const renderButtonViewAll = () => {
		const viewAll = benefitsData.viewAll;

		return (
			<CustomLink
				href={ viewAll.href }
				aria-label={ viewAll.text }
				className='btn btn-primary flex items-center gap-7px sm:gap-2 !translate-y-0 group'
			>
				<span className='text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-Poppins'>
					{ viewAll.text }
				</span>

				<ChevronRight className='stroke-grey-secondary w-4 h-4 sm:w-18px sm:h-18px group-hover:translate-x-1 transform transition-all duration-100' />
			</CustomLink>
		);
	};

	const renderImage = (item: any, isMobile?: boolean) => { // eslint-disable-line @typescript-eslint/no-explicit-any
		return (
			<Image
				src={ isMobile ? item.imageMobile : item.image }
				alt={ item.title }
				className={ clsxm(
					'absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none',
					isMobile ? 'lg:hidden' : 'max-lg:hidden'
				) }
				sizes='100vw'
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
		<div className='lg:px-3 mt-3.5 lg:mt-11 font-Poppins'>
			<div className='bg-white relative overflow-hidden rounded-19px py-[46px] lg:pt-[79px] lg:pb-[49px]'>
				<div className='container-center'>
					<div className='flex justify-center lg:items-end lg:justify-between'>
						<div className='text-center lg:text-left flex flex-col max-lg:justify-center'>
							<p className='text-pretitle text-grey-primary'>
								{ benefitsData.preTitle }
							</p>

							<h2 className='my-2.5 lg:my-6 text-primary text-[6.107vw] max-md:leading-[133%] md:text-3xl lg:text-[4.444vw] xl:text-[64px] lg:leading-[68%] -tracking-0.04em'>
								{ benefitsData.title }
							</h2>

							<p className='text-grey-400 text-xs sm:text-sm !leading-5 max-w-[342px] max-lg:mx-auto lg:max-w-[412px]'>
								{ benefitsData.description }
							</p>
						</div>

						<div className='max-lg:hidden'>{ renderButtonViewAll() }</div>
					</div>
					<div className='mx-auto mt-[42px] grid max-w-2xl grid-cols-1 gap-[42px] lg:gap-[23px] lg:mt-[58px] lg:mx-0 lg:max-w-none lg:grid-cols-2'>
						{ benefitsData.list.map(item => (
							<article
								key={ item.title }
								className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-3 pb-3 h-[542px]'>
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
									className='rounded-2xl p-px bg-border-gradient-white backdrop-blur-[50px] group'
								>
									<div className='rounded-[calc(1rem-1px)] bg-[#042A4980] pt-6 sm:pt-[17px] pb-[21px] sm:pb-[15px] px-6 sm:px-18px text-white relative overflow-hidden'>
										<div className='absolute inset-0 w-full h-full'>
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
										</div>

										<div className='flex justify-between items-center w-full'>
											<h3 className='text-2xl !leading-9 sm:text-3xl lg:text-4xl lg:!leading-[54px] -tracking-0.04em'>
												{ item.title }
											</h3>
											<div className='relative w-8 h-8 max-lg:hidden lg:group-hover:hidden'>{ renderArrowNarrowRight() }</div>
										</div>

										<div className='max-lg:flex lg:group-hover:block lg:hidden'>
											<ul className='list-inside list-disc mt-2.5 sm:mt-5px text-xs sm:text-sm !leading-7'>
												{ item.details.map(detail => (
													<li key={ detail }>
														{ detail }
													</li>
												)) }
											</ul>
											<div className='absolute right-18px bottom-15px max-lg:hidden'>
												<div className='relative w-[62px] h-[62px] rounded-full bg-white/20 border-2 border-white/5'>
													{ renderArrowNarrowRight() }
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							</article>
						)) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;