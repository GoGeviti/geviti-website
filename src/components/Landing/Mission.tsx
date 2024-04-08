import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import ButtonCta from './ButtonCta';

const missionData = landingData.mission;

const Mission: React.FC = () => {
	return (
		<div className='lg:px-3 overflow-hidden'>
			<div className='bg-grey-secondary h-full w-full rounded-19px relative overflow-hidden'>
				<div className='container-center max-lg:pb-[54px] grid-cols-1 grid lg:grid-cols-2 max-lg:gap-y-7 lg:gap-x-8 lg:relative'>
					<div className='h-[811px] lg:py-[100px] xl:h-[39.514vw] w-full'>
						<div className='h-full flex flex-col justify-end lg:justify-center relative z-10 max-lg:w-full lg:max-w-2xl mx-auto lg:mx-0'>
							<div className='text-center lg:text-left lg:max-w-2xl max-lg:mx-auto'>
								<p className='mb-3.5 sm:mb-7px text-pretitle text-grey-primary lg:text-white'>{ missionData.preTitle }</p>

								{ missionData.title && (
									<h2 className='md:max-w-[494px] max-lg:mx-auto mb-2.5 sm:mb-5 font-Poppins font-normal text-[6.1vw] xs2:text-2xl md:text-[32px] lg:text-4xl !leading-[133%] sm:!leading-[125%] -tracking-0.04em text-grey-secondary'>
										<span dangerouslySetInnerHTML={ { __html: missionData.title } } />
									</h2>
								) }

								{ missionData.description && (
									<p className='text-grey-primary lg:text-white max-sm:max-w-[330px] max-lg:mx-auto md:max-w-[415px] font-normal text-xs sm:text-sm !leading-5 font-BRSonoma'>
										<span dangerouslySetInnerHTML={ { __html: missionData.description } } />
									</p>
								) }

								<div className='flex max-sm:w-full max-lg:justify-center mt-[52px] sm:mt-[60px]'>
									<ButtonCta
										href={ missionData.btnCta.href }
										externalLink={ missionData.btnCta.externalLink }
										aria-label={ missionData.btnCta.text }
										text={ missionData.btnCta.text }
										theme='secondary'
										className='max-sm:w-full'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='max-lg:hidden absolute inset-0 w-full h-full'>
					<div className='relative overflow-hidden w-full h-full lg:rounded-19px'>
						<Image
							src={ missionData.image }
							alt='mission'
							loading='lazy'
							className='object-cover pointer-events-none'
							quality={ 100 }
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
							fill
						/>
					</div>
				</div>
				<div className='absolute inset-0 bg-mission-mobile-landing lg:bg-mission-landing lg:rounded-19px h-full z-[5]' />

				<div className='lg:hidden absolute inset-0 w-full h-full'>
					{ missionData.imageMobile && (
						<div className='relative overflow-hidden w-full h-full'>
							<Image
								src={ missionData.imageMobile }
								alt='mission'
								loading='lazy'
								className='object-cover pointer-events-none'
								fill
							/>
						</div>
					) }
				</div>
			</div>
		</div>
	);
};

export default Mission;
