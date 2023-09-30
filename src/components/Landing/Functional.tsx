'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { CheckCircleIcon, ChevronRight } from '../Icons';

const functionalData = landingData.functional;

const Functional: React.FC = () => {
	const [openSheet, setOpenSheet] = useState<number>(1);
	return (
		<div className='lg:px-3 lg:pb-15px overflow-hidden'>
			<div className='h-full w-full lg:rounded-[19px] relative overflow-hidden bg-primary'>
				<div className='container-center relative overflow-hidden'>
					<div className='mx-auto max-w-5xl max-md:pb-[93px] pt-[52px] sm:pt-[113px] lg:relative isolate overflow-hidden'>
						<div className='text-center'>
							<p className='text-pretitle text-grey-primary'>
								{ functionalData.preTitle }
							</p>
							{ functionalData.title && (
								<h2 className='text-heading-2 mt-11px sm:mt-7px text-grey-secondary'>
									<span dangerouslySetInnerHTML={ { __html: functionalData.title } } />
								</h2>
							) }
							<div className='mt-[35px] sm:mt-12 w-full grid md:grid-cols-4 gap-5px md:gap-15px lg:gap-30px'>
								{ functionalData.list.map((functionItem, functionItemIdx) => {
									return (
										<div
											onClick={ () => setOpenSheet(functionItemIdx) }
											key={ functionItemIdx }
											className={ `${ openSheet === functionItemIdx ? 'md:bg-white bg-grey-dark text-white md:text-grey-dark ' : 'bg-grey-dark text-white'} rounded-lg py-15px md:py-5 px-[13px] lg:px-[23px] flex md:flex-col items-center md:items-start text-left gap-2.5 md:gap-1` }
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
									className='btn-cta-landing btn-secondary group'
								>
									<span className='text-btn-cta-landing '>
										{ functionalData.btnCta.text }
									</span>

									<ChevronRight className='arrow-btn-cta-landing' />
								</CustomLink>
							</div>
						</div>
					</div>

					<div className='-mx-[265px] lg:-mx-[150px] -mb-[128px] sm:-mb-[200px] lg:-mb-[210px] xl:-mb-[270px] -mt-[139px] sm:-mt-[110px] xl:-mt-[170px]'>
						<Image
							src='/images/landing/functional_products.png'
							alt=''
							width={ 1139 }
							height={ 778 }
							className='w-full'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Functional;