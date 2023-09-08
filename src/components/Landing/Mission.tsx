'use client';

import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const missionData = landingData.mission;

const Mission: React.FC = () => {
	return (
		<div className='lg:px-3 lg:pb-15px overflow-hidden'>
			<div className='bg-primary h-[812px] lg:h-[483px] w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='max-lg:hidden absolute inset-0 w-full h-full'>
					{ missionData.image && (
						<div className='relative overflow-hidden w-full h-full lg:rounded-[19px]'>
							<Image
								src={ missionData.image }
								alt=''
								className='object-cover'
								fill
							/>
						</div>
					) }
				</div>
				<div className='lg:hidden absolute inset-0 w-full h-full'>
					{ missionData.imageMobile && (
						<div className='relative overflow-hidden w-full h-full'>
							<Image
								src={ missionData.imageMobile }
								alt=''
								className='object-cover'
								fill
							/>
						</div>
					) }
				</div>

				<div className='absolute inset-0 top-[205px] lg:-top-[182px] bg-mission-landing lg:rounded-[19px]' />

				<div className='container-center max-lg:pb-[65px] h-full w-full flex flex-col items-center lg:items-start justify-end lg:justify-center relative z-10'>
					<div className='text-center lg:text-left'>
						{ missionData.title && (
							<h2 className='mb-5px sm:mb-3.5 font-Poppins text-[21px] sm:text-2xl md:text-[32px] lg:text-[40px] leading-[129%] sm:leading-[132.5%] -tracking-0.04em text-grey-secondary'>
								<span dangerouslySetInnerHTML={ { __html: missionData.title } } />
							</h2>
						) }

						{ missionData.description && (
							<p className='text-grey-primary text-xs sm:text-sm leading-5 font-BRSonoma sm:max-w-[532px]'>
								<span dangerouslySetInnerHTML={ { __html: missionData.description } } />
							</p>
						) }

						<div className='flex max-lg:justify-center mt-11 sm:mt-[47px]'>
							<CustomLink
								href={ missionData.btnCta.href }
								externalLink={ missionData.btnCta.externalLink }
								className='btn-cta-landing btn-secondary group'
							>
								<span className='text-btn-cta-landing'>
									{ missionData.btnCta.text }
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

export default Mission;