import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const applicationData = landingData.application;

const Application: React.FC = () => {
	return (
		<div className='lg:px-3 overflow-hidden'>
			<div className='bg-grey-secondary container-center h-full w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='py-24 flex lg:flex-row items-center sm:max-w-5xl mx-auto'>
					<div className='w-full'>
						<div className='relative overflow-hidden h-[800px] w-full aspect-[1/2]'>
							<Image
								src={ applicationData.image }
								alt=''
								fill
								className='object-cover'
							/>
						</div>
					</div>
					<div className='w-full text-center lg:text-left'>
						<p className='mb-11px sm:mb-7px text-pretitle text-grey-primary'>{ applicationData.preTitle }</p>

						<h2 className='mb-3.5 text-heading-2 text-primary lg:max-w-[433px]'>
							{ applicationData.title }
						</h2>

						<p className='text-grey-primary text-xs sm:text-sm leading-5 font-BRSonoma lg:max-w-[338px]'>
							{ applicationData.description }
						</p>

						<div className='mt-11 flex max-lg:flex-col lg:grid lg:grid-cols-2 gap-y-[33px] lg:gap-y-[57px] lg:gap-x-5'>
							{ applicationData.list.map((detailItem, detailIdx) => {
								const Icon = detailItem.icon;

								return (
									<div
										key={ detailIdx }
										className='border border-black flex lg:flex-col items-center justify-start gap-[21px] lg:gap-[17px]'>
										<div className='rounded-full flex items-center justify-center bg-[#F5F5F5] w-[52px] h-[52px]'>
											<Icon className='w-5 h-5' />
										</div>

										<h4 className='text-xs leading-6 uppercase font-BRSonoma font-semibold text-center tracking-0.11em'>
											{ detailItem.text }
										</h4>
									</div>
								);
							}) }
						</div>

						<div className='flex max-lg:justify-center mt-[42px] sm:mt-20'>
							<CustomLink
								href={ applicationData.btnCta.href }
								externalLink={ applicationData.btnCta.externalLink }
								className='btn-cta-landing btn-primary group'
							>
								<span className='text-btn-cta-landing'>
									{ applicationData.btnCta.text }
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

export default Application;
