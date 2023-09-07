import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const therapyData = landingData.therapy;

const Therapy: React.FC = () => {
	return (
		<div className='lg:px-3 lg:pb-15px overflow-hidden'>
			<div className='bg-grey-secondary h-full w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='container-center pt-[46px] lg:pt-[193px] lg:pb-[194px] relative overflow-hidden'>
					<div className='text-center lg:text-left relative z-[11]'>
						<p className='text-pretitle text-grey-primary'>
							{ therapyData.preTitle }
						</p>
						{ therapyData.title && (
							<div className='max-lg:mx-auto max-w-[278px] sm:max-w-[575px] mt-11px sm:mt-3'>
								<h2 className='text-heading-2'>
									{ therapyData.title }
								</h2>
							</div>
						) }
						<div className='max-lg:mx-auto max-w-[408px] mt-11px lg:mt-5'>
							<p className='text-grey-primary text-sm leading-5 font-BRSonoma'>
								{ therapyData.description }
							</p>
						</div>
						<div className='flex max-lg:justify-center mt-[27px] lg:mt-[70px]'>
							<CustomLink
								href={ therapyData.btnCta.href }
								externalLink={ therapyData.btnCta.externalLink }
								className='btn-cta-landing group btn-primary'
							>
								<span className='text-btn-cta-landing'>
									{ therapyData.btnCta.text }
								</span>

								<ChevronRight className='arrow-btn-cta-landing' />
							</CustomLink>
						</div>
					</div>
				</div>

				<div className='relative flex justify-end -ml-[150px] lg:absolute right-0 -bottom-[120px] sm:bottom-0 sm:ml-auto sm:max-w-lg md:max-w-2xl z-10'>
					<Image
						src='/images/landing/clinician.png'
						alt=''
						width={ 683.492 }
						height={ 1704 }
						className='w-full'
					/>
				</div>

				<div className='sm:hidden'>
					<div className='absolute left-0 bottom-[155px] z-[9]'>
						<Image
							src='/images/landing/graphic_1_mobile.png'
							alt=''
							width={ 156 }
							height={ 124 }
							className='w-[256px]'
						/>
					</div>

					<div className='absolute -right-4 bottom-[125px] z-[9]'>
						<Image
							src='/images/landing/graphic_2_mobile.png'
							alt=''
							width={ 103.796 }
							height={ 82.474 }
							className='w-[153px]'
						/>
					</div>

					<div className='absolute bottom-0 inset-x-0 z-[8]'>
						<svg
							width='375'
							height='270'
							viewBox='0 0 375 270'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<circle
								cx='199.174'
								cy='310.991'
								r='310.174'
								fill='white' />
						</svg>
					</div>
				</div>

				<div className='max-sm:hidden'>
					<div className='absolute bottom-0 right-[250px] md:right-[340px] z-[9]'>
						<Image
							src='/images/landing/graphic_1.png'
							alt=''
							width={ 309.6 }
							height={ 246 }
							className='w-[359.6px] md:w-[450.6px]'
						/>
					</div>

					<div className='absolute bottom-[180px] md:bottom-[300px] right-0 z-[9]'>
						<Image
							src='/images/landing/graphic_2.png'
							alt=''
							width={ 194 }
							height={ 154 }
							className='w-[194px]'
						/>
					</div>

					<div className='absolute right-0 bottom-0'>
						<svg
							width='667'
							height='596'
							viewBox='0 0 667 596'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<circle
								cx='463.629'
								cy='463.629'
								r='463.629'
								fill='white' />
						</svg>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Therapy;
