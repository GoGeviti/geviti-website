'use client';

import React from 'react';
import Image from 'next/image';

import { homeData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

const learnMore = homeData.learnMore;

type LearnMoreProps = {
	withBg?: boolean;
};

const LearnMore: React.FC<LearnMoreProps> = ({ withBg = false }) => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<div className={ clsxm('h-full w-full lg:rounded-[19px] relative overflow-hidden', withBg && 'bg-[#EAEAEA]') }>
				<div className='container-center items-center md:items-start flex flex-col py-[102px]'>
					<div className='sm:mx-auto lg:w-full max-lg:text-center'>
						<p className='mb-11px sm:mb-7px text-pretitle text-grey-primary'>{ learnMore.preTitle }</p>

						{ learnMore.title && (
							<h2 className='text-heading-2 text-primary'>
								<span dangerouslySetInnerHTML={ { __html: learnMore.title } } />
							</h2>
						) }
					</div>

					<div className='md:max-w-6xl md:mx-auto w-full max-md:flex max-md:justify-center'>
						<div className=''>
							<div className='pt-10 md:pt-16 flex md:flex-row flex-col items-start w-full no-scrollbar overflow-y-hidden transition-all select-none transform flex-nowrap overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth max-md:space-y-10  gap-x-18px lg:gap-x-[33px] py-1'>
								{ learnMore.list.map(items => {
									return (
										(
											<div
												key={ `step-${ items.id }` }
												className={ clsxm('w-full flex flex-col max-md:space-x-5 items-center md:transform md:transition-all md:duration-100 md:ease-in') }
											>
												<div>
													<Image
														src={ items.image }
														alt={ items.title ?? '' }
														className='object-cover object-center w-full md:w-[382px] h-[189px] md:h-[233px] rounded-[13px]'
														width={ 100 }
														height={ 100 }
													/>
													<p className='mt-[5px] md:mt-[32px] text-pretitle text-grey-date tracking-[1.54px] leading-6'> { items.date }</p>
													<p className='text-xl md:text-2xl font-Poppins text-primary leading-[43.5px] -tracking-[0.96px]'> { items.title }</p>
													<p className='text-xs md:text-sm text-grey-date font-Poppins'> { items.subtitle }</p>
												</div>
											</div>
										)
									);
								}) }
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LearnMore;