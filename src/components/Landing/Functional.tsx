import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { CheckCircleIcon, ChevronRight } from '../Icons';

const functionalData = landingData.functional;

const Functional: React.FC = () => {
	return (
		<div className='lg:px-3 lg:pb-15px overflow-hidden'>
			<div className='bg-grey-secondary h-full w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='container-center'>
					<div className='mx-auto max-w-5xl max-md:pb-[93px] pt-[41px] sm:pt-[113px] lg:relative isolate overflow-hidden'>
						<div className='text-center'>
							<p className='text-pretitle text-grey-primary'>
								{ functionalData.preTitle }
							</p>
							{ functionalData.title && (
								<h2 className='text-heading-2 mt-11px sm:mt-7px'>
									<span dangerouslySetInnerHTML={ { __html: functionalData.title } } />
								</h2>
							) }
							<div className='mt-[35px] sm:mt-12 w-full grid md:grid-cols-4 gap-1.5 md:gap-15px lg:gap-30px'>
								{ functionalData.list.map((functionItem, functionItemIdx) => {
									return (
										<div
											key={ functionItemIdx }
											className='rounded-lg bg-white py-15px md:py-5 px-[13px] lg:px-[23px] flex md:flex-col items-center md:items-start text-left gap-2.5 md:gap-1'
										>
											<CheckCircleIcon className='text-[#9CD6F4] w-[15px] h-[15px] sm:w-[21px] sm:h-[21px] flex-shrink-0' />
											<p className='text-xs sm:text-[15px] font-Poppins font-medium leading-[12px] sm:leading-[17.5px] -tracking-0.04em'>
												{ functionItem }
											</p>
										</div>
									);
								}) }
							</div>
							<div className='flex justify-center mt-7 sm:mt-12'>
								<CustomLink
									href={ functionalData.btnCta.href }
									externalLink={ functionalData.btnCta.externalLink }
									className='btn-cta-landing btn-primary group'
								>
									<span className='text-btn-cta-landing'>
										{ functionalData.btnCta.text }
									</span>

									<ChevronRight className='arrow-btn-cta-landing' />
								</CustomLink>
							</div>
						</div>

						<div className='min-h-[250px] md:min-h-[397px]'>
							<div className='absolute top-[60%] md:top-[50%] lg:top-auto sm:-bottom-[642px] -inset-x-[72px] sm:inset-x-[14px] z-[9]'>
								<Image
									src='/images/landing/effect_blue_full.png'
									alt=''
									width={ 911 }
									height={ 1122 }
									className='w-full lg:w-[911px]'
								/>
							</div>
							<div className='absolute bottom-0 md:-bottom-[160px] left-1/2 -translate-x-1/2 z-10'>
								<Image
									src='/images/landing/pill_bottle.png'
									alt=''
									width={ 306 }
									height={ 602 }
									className='w-[189px] md:w-[306px]'
								/>
							</div>
							<div className='absolute bottom-20 md:bottom-0 -right-[85px] sm:right-0 lg:right-[73px] z-[8]'>
								<Image
									src='/images/landing/metformin_bottle.png'
									alt=''
									width={ 890 }
									height={ 1514 }
									className='w-[205px] md:w-[333px]'
								/>
							</div>

							<div className='absolute bottom-[137px] md:bottom-[95px] -left-[60px] sm:left-0 md:left-[90px] z-[8]'>
								<Image
									src='/images/landing/vaccine_bottle.png'
									alt=''
									width={ 864 }
									height={ 1184 }
									className='w-[133px] md:w-[216px]'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Functional;