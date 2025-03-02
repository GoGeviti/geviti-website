'use client';

import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const missionData = landingData.banner;

const Mission: React.FC = () => {
	return (
		<div className='lg:px-3 lg:pb-15px overflow-hidden'>
			<div className='bg-primary h-[812px] lg:h-[483px] w-full lg:rounded-19px relative overflow-hidden'>
				<div className='max-lg:hidden absolute inset-0 w-full h-full'>
					{ missionData.image && (
						<div className='relative overflow-hidden w-full h-full lg:rounded-19px'>
							<Image
								src={ missionData.image }
								alt='mission'
								loading='lazy'
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
								alt='mission'
								loading='lazy'
								className='object-cover'
								fill
							/>
						</div>
					) }
				</div>

				<div className='absolute inset-0 bg-banner-mobile-landing lg:bg-banner-landing lg:rounded-19px h-full' />

				<div className='container-center max-lg:pb-[65px] h-full w-full flex flex-col items-center lg:items-start justify-end lg:justify-center relative z-10'>
					<div className='text-center lg:text-left'>
						{ missionData.title && (
							<h2 className='h-[52px] lg:justify-start flex justify-center items-center mb-5px sm:mb-3.5 font-Poppins text-[28px] md:text-[32px] lg:text-[40px] leading-[96.429%] sm:leading-[132.5%] -tracking-[1.12px] md:-tracking-0.04em text-grey-secondary'>
								<span dangerouslySetInnerHTML={ { __html: missionData.title } } />
							</h2>
						) }

						{ missionData.description && (
							<p className='text-grey-primary text-xs sm:text-sm leading-5 font-Poppins max-w-[330px] max-sm:mx-auto sm:max-w-[532px]'>
								<span
									dangerouslySetInnerHTML={ { __html: missionData.description } }
								/>
							</p>
						) }

						<div className='flex max-lg:justify-center mt-11 sm:mt-[47px]'>
							<CustomLink
								href={ missionData.btnCta.href }
								externalLink={ missionData.btnCta.externalLink }
								className='btn-cta-landing btn-secondary group'
								aria-label={ missionData.btnCta.text }
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
