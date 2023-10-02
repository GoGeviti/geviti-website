'use client';

import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const investmentData = landingData.investment;

const Investment: React.FC = () => {
	return (
		<div className='lg:px-3 overflow-hidden'>
			<div className='bg-primary h-[812px] lg:h-[616px] w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='max-lg:hidden absolute inset-0 w-full h-full'>
					{ investmentData.image && (
						<div className='relative overflow-hidden w-full h-full lg:rounded-[19px]'>
							<Image
								src={ investmentData.image }
								alt='investment'
								loading='lazy'
								className='object-cover'
								fill
							/>
						</div>
					) }
				</div>
				<div className='lg:hidden absolute inset-0 w-full h-full'>
					{ investmentData.imageMobile && (
						<div className='relative overflow-hidden w-full h-full'>
							<Image
								src={ investmentData.imageMobile }
								alt='investment mobile'
								loading='lazy'
								className='object-cover'
								fill
							/>
						</div>
					) }
				</div>

				<div className='absolute inset-x-0 h-[662px] -bottom-[119px] bg-investment-landing-bottom lg:hidden' />
				<div className='absolute h-[843px] -top-[100px] -left-full -right-full lg:-left-1/4 lg:-right-1/4 inset-0 lg:-top-[200px] lg:-bottom-[200px] bg-investment-landing lg:rounded-[19px]' />

				<div className='container-center max-lg:pb-[65px] h-full w-full flex flex-col items-center lg:items-start justify-end lg:justify-center relative z-10'>
					<div className='text-center lg:text-left sm:max-w-xl'>
						<p className='mb-11px sm:mb-7px text-pretitle text-grey-primary'>{ investmentData.preTitle }</p>

						{ investmentData.title && (
							<h2 className='mb-11px sm:mb-30px max-sm:max-w-[331px] max-sm:mx-auto text-heading-2 text-grey-secondary'>
								<span dangerouslySetInnerHTML={ { __html: investmentData.title } } />
							</h2>
						) }

						{ investmentData.description && (
							<p className='text-grey-primary max-sm:max-w-[330px] max-sm:mx-auto text-xs sm:text-sm leading-5 font-BRSonoma'>
								<span dangerouslySetInnerHTML={ { __html: investmentData.description } } />
							</p>
						) }

						<div className='flex max-lg:justify-center mt-8 sm:mt-[70px]'>
							<CustomLink
								href={ investmentData.btnCta.href }
								externalLink={ investmentData.btnCta.externalLink }
								className='btn-cta-landing btn-secondary group'
								aria-label={ investmentData.btnCta.text }
							>
								<span className='text-btn-cta-landing'>
									{ investmentData.btnCta.text }
								</span>

								<ChevronRight className='arrow-btn-cta-landing' />
							</CustomLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Investment;