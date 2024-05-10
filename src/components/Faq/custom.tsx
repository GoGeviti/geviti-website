'use client';

import React from 'react';
import Image from 'next/image';

import { faqData } from '@/constant/data';

import CustomLink from '../CustomLink';

const completelyCustomData = faqData.completelyCustom;

const CompletelyCustom: React.FC = () => {
	return (
		<div className='pt-[50px] lg:pt-[70px] md:container-center md:mx-auto w-full overflow-hidden'>
			<div className='px-5 lg:px-3 h-full w-full bg-gradient-t from-black to-black-[0.75] bg-primary shadow-[#A7ACBC0D] lg:rounded-[19px] relative'>
				<div className='flex flex-col items-center justify-center text-center pt-[70px] md:pt-[38px] pb-[70px] md:pb-[46px]'>
					<h2 className='text-center font-Poppins text-white !text-[30px] md:!text-4xl -tracking-[1.28px] md:-tracking-[1.44px]'>
						<span
							dangerouslySetInnerHTML={ { __html: completelyCustomData.title } }
						/>
					</h2>

					<div className='max-w-5xl w-full md:block hidden pb-[45px] md:pt-[30px]'>
						<div className='flex md:flex-row flex-col items-start w-full no-scrollbar overflow-y-hidden transition-all select-none transform flex-nowrap overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth max-md:space-y-10  gap-x-18px lg:gap-x-5 py-1'>
							{ completelyCustomData.list.map((step, id) => {
								return (
									<div
										key={ id }
										className='w-full flex md:flex-col max-md:space-x-5 items-center md:transform md:transition-all md:duration-100 md:ease-in'
									>
										<div className='cursor-pointer rounded-full flex items-center justify-center bg-white/20 font-Poppins text-center text-white text-[26px] font-medium w-[60px] h-[60px] -tracking-[1.04px]'>
											{ id + 1 }
										</div>
										<div className='cursor-pointer text-center font-Poppins text-white text-base font-medium -tracking-[0.64px] mt-[9px]'>
											<span dangerouslySetInnerHTML={ { __html: step.text } } />
										</div>
										{ step.image && (
											<div className='relative overflow-hidden w-5 h-5 sm:w-[26px] sm:h-[26px] mt-11px'>
												<Image
													src={ step.image }
													alt={ step.text }
													sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
													fill
													loading='lazy'
												/>
											</div>
										) }
									</div>
								);
							}) }
						</div>
					</div>

					<div className='flex justify-center max-md:pt-[17px]'>
						<CustomLink
							href={ completelyCustomData.btnCta.href }
							className='btn-cta-landing btn-secondary '
							aria-label={ completelyCustomData.btnCta.title }
						>
							<span className='text-btn-cta-landing w-[200px]'>
								{ completelyCustomData.btnCta.title }
							</span>
						</CustomLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompletelyCustom;
