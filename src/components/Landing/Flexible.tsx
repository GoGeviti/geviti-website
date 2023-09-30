import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const flexibleData = landingData.flexible;

const Flexible: React.FC = () => {
	return (
		<div className='lg:px-3 overflow-hidden'>
			<div className='bg-grey-secondary h-full w-full lg:rounded-[19px] relative overflow-hidden'>
				<div
					className='max-lg:p-5 container-center grid-cols-1 grid lg:grid-cols-2 h-fit lg:h-[700px]'>
					<div className='max-lg:order-1 h-full flex flex-col justify-center relative lg:z-10 max-lg:w-full lg:max-w-lg max-lg:py-5'>
						<div className='text-center lg:text-left lg:max-w-xl'>
							<p className='mb-11px sm:mb-7px text-pretitle text-grey-primary'>{ flexibleData.preTitle }</p>

							{ flexibleData.title && (
								<h2 className='mb-11px sm:mb-30px max-sm:max-w-[331px] max-sm:mx-auto text-heading-2 text-primary'>
									<span dangerouslySetInnerHTML={ { __html: flexibleData.title } } />
								</h2>
							) }

							{ flexibleData.description && (
								<p className='text-grey-primary max-sm:max-w-[330px] max-sm:mx-auto text-xs sm:text-sm leading-5 font-BRSonoma'>
									<span dangerouslySetInnerHTML={ { __html: flexibleData.description } } />
								</p>
							) }

							<div className='flex max-lg:justify-center mt-8 sm:mt-[70px]'>
								<CustomLink
									href={ flexibleData.btnCta.href }
									externalLink={ flexibleData.btnCta.externalLink }
									className='btn-cta-landing btn-primary group'
								>
									<span className='text-btn-cta-landing'>
										{ flexibleData.btnCta.text }
									</span>

									<ChevronRight className='arrow-btn-cta-landing' />
								</CustomLink>
							</div>
						</div>
					</div>
					<div />

					<div className='max-lg:order-0 lg:flex h-full lg:justify-end lg:absolute lg:right-0 lg:top-0 hidden'>
						<Image
							src={ flexibleData.image }
							alt='flexible'
							loading='lazy'
							width={ 1440 }
							height={ 801 }
							className='w-full'
						/>
					</div>
					<div className='lg:hidden order-0'>
						<Image
							src={ flexibleData.imageMobile }
							alt='flexible mobile'
							loading='lazy'
							className='object-contain w-full'
							width={ 337 }
							height={ 216 }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Flexible;