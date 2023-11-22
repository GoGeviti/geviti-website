'use client';

import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { CheckCircleIcon, ChevronRight } from '../Icons';

const functionalData = landingData.functional;

const Functional: React.FC = () => {
	return (
		<div className='lg:px-3 lg:pb-15px overflow-hidden'>
			<div className='h-full w-full lg:rounded-[19px] relative overflow-hidden bg-primary'>
				<div className='relative overflow-hidden'>
					<div className='mx-auto container-center  max-w-5xl pt-[52px] sm:pt-[113px] lg:relative isolate overflow-hidden'>
						<div className='text-center'>
							<p className='hidden lg:block text-pretitle text-grey-primary'>
								{ functionalData.preTitle }
							</p>
							<p className='lg:hidden text-pretitle text-grey-primary'>
								{ functionalData.preTitleMobile }
							</p>
							{ functionalData.title && (
								<h2 className='font-Poppins text-[21px] md:text-[32px] lg:text-4xl leading-[27px] sm:leading-[125%] -tracking-[0.84px] md:-tracking-0.04em mt-11px sm:mt-7px text-grey-secondary'>
									<span dangerouslySetInnerHTML={ { __html: functionalData.title } } />
								</h2>
							) }
							<div className='mt-[35px] sm:mt-12 w-full grid md:grid-cols-4 gap-5px md:gap-15px lg:gap-30px'>
								{ functionalData.list.map((functionItem, functionItemIdx) => {
									return (
										<div
											key={ functionItemIdx }
											className='cursor-pointer md:hover:transform md:hover:translate-y-[-10px] md:hover:transition-transform md:hover:duration-300 md:hover:ease-linear hover:md:bg-white hover:bg-grey-dark hover:text-white hover:md:text-grey-dark bg-grey-dark text-white rounded-lg py-15px md:py-5 px-[13px] lg:px-[23px] flex md:flex-col items-center md:items-start text-left gap-[5.16px] md:gap-1'
										>
											<CheckCircleIcon className='text-[#9CD6F4] w-[14.843px] h-[14.843px] sm:w-[21px] sm:h-[21px] flex-shrink-0' />
											<p className='text-xs sm:text-[15px] font-Poppins font-medium leading-[103.077%] sm:leading-[17.5px] -tracking-[0.48px]'>
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
									className='btn-cta-landing btn-secondary group'
									aria-label={ functionalData.btnCta.text }
								>
									<span className='text-btn-cta-landing '>
										{ functionalData.btnCta.text }
									</span>

									<ChevronRight className='arrow-btn-cta-landing' />
								</CustomLink>
							</div>
						</div>
					</div>

					<div className='max-h-[349px] relative w-full h-full aspect-square max-w-[629px] mx-auto mt-6 flex items-center justify-center'>
						<Image
							src='/images/landing/compressed/functional_products.png'
							alt='product'
							loading='lazy'
							fill
							className='w-full object-center object-cover'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Functional;