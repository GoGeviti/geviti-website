'use client';

import React from 'react';
import Image from 'next/image';

import { faqData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const completelyCustomData = faqData.completelyCustom;

const CompletelyCustom: React.FC = () => {

	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden hidden md:block'>
			<div className='h-full w-full bg-primary lg:rounded-[19px] relative overflow-hidden'>
				<div className='container-center flex flex-col items-center justify-center text-center py-[97px]'>
					<div className='text-center sm:mx-auto'>
						<p className='mb-[15px] md:mb-7px text-pretitle text-grey-primary leading-[15px] md:leading-[24px]'>{ completelyCustomData.preTitle }</p>
						<h2 className='font-Poppins text-grey-secondary !text-2xl md:!text-4xl leading-[102.083%] md:leading-[125%] max-w-[607px] -tracking-[1.44px]'>
							<span dangerouslySetInnerHTML={ { __html: completelyCustomData.title } } />
						</h2>
					</div>

					<div className='md:max-w-5xl md:mx-auto w-full max-md:flex max-md:justify-center pb-[43px] md:pt-[77px]'>
						<div className='flex md:flex-row flex-col items-start w-full no-scrollbar overflow-y-hidden transition-all select-none transform flex-nowrap overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth max-md:space-y-10  gap-x-18px lg:gap-x-5 py-1'>
							{ completelyCustomData.list.map((step, id) => {
								return (
									(
										<div
											key={ id }
											className='w-full flex md:flex-col max-md:space-x-5 items-center md:transform md:transition-all md:duration-100 md:ease-in'
										>
											<div
												className='cursor-pointer rounded-full flex items-center justify-center bg-[#353738] font-Poppins text-center text-grey-secondary text-sm font-medium leading-6 w-[46px] h-[46px]'
											>
												{ id + 1 }
											</div>
											<div className='cursor-pointer text-center font-Poppins text-white text-base font-medium leading-[129.403%] mt-[18px]'>
												<span
													dangerouslySetInnerHTML={ { __html: step.text } } />
											</div>
											<div className='relative overflow-hidden w-5 h-5 sm:w-[26px] sm:h-[26px] mt-11px'>
												<Image
													src={ step.image }
													alt={ step.text }
													sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
													fill
													loading='lazy'
												/>
											</div>
										</div>
									)
								);
							}) }
						</div>
					</div>

					<div className='flex justify-center'>
						<CustomLink
							href={ completelyCustomData.btnCta.href }
							className='btn-cta-landing btn-secondary '
							aria-label={ completelyCustomData.btnCta.title }
						>
							<span className='text-btn-cta-landing !px-5 max-w-[233px]'>
								{ completelyCustomData.btnCta.title }
							</span>

							<ChevronRight className='arrow-btn-cta-landing' />
						</CustomLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompletelyCustom;
