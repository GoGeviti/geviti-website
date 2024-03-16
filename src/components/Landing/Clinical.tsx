import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import ButtonCta from './ButtonCta';

const clinicalData = landingData.clinical;

const Clinical: React.FC = () => {
	return (
		<div className='overflow-hidden lg:px-3 font-Poppins'>
			<div className='bg-grey-secondary h-full w-full rounded-[19px] relative overflow-hidden'>
				<div className='max-lg:pt-[29px] max-lg:pb-[137px] container-center max-xxl:max-w-none grid-cols-1 grid lg:grid-cols-2 max-lg:gap-y-7 lg:gap-x-8'>
					<div className='max-lg:order-1 lg:h-[570px] xl2:h-[43.125rem] lg:col-start-2 lg:col-end-3'>
						<div className='h-full flex flex-col justify-center relative lg:z-10 max-lg:w-full lg:max-w-lg mx-auto'>
							<div className='text-center lg:text-left lg:max-w-xl'>
								<p className='mb-[10px] md:mb-3 text-pretitle text-grey-primary'>
									<span className='max-md:hidden'>{ clinicalData.preTitle }</span>
									<span className='md:hidden'>{ clinicalData.preTitleMobile }</span>
								</p>

								{ clinicalData.title && (
									<h2 className='mb-[10px] md:mb-6 md:leading-[121%] -tracking-[0.04em] leading-[133%] font-normal font-Poppins text-primary md:text-4xl text-[5.8vw] xs:text-2xl'>
										{ clinicalData.title }
									</h2>
								) }

								{ clinicalData.description && (
									<p className='text-grey-400 max-sm:max-w-[331px] md:max-w-[500px] max-lg:mx-auto text-xs md:text-sm !leading-5'>
										<span
											className='max-md:hidden'
											dangerouslySetInnerHTML={ { __html: clinicalData.description } } />
										<span
											className='md:hidden'
											dangerouslySetInnerHTML={ { __html: clinicalData.descriptionMobile || clinicalData.description } } />
									</p>
								) }

								<div className='mt-[42px] flex max-lg:justify-center max-sm:w-full'>
									<ButtonCta
										href={ clinicalData.btnCta.href }
										externalLink={ clinicalData.btnCta.externalLink }
										aria-label={ clinicalData.btnCta.text }
										text={ clinicalData.btnCta.text }
										className='max-sm:w-full'
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='max-lg:hidden lg:absolute lg:inset-0 lg:right-1/2 lg:ml-0'>
						<div className='w-full bg-gray-50 lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'>
							<Image
								src={ clinicalData.image }
								alt='Clinical'
								loading='lazy'
								sizes='100vw'
								quality={ 100 }
								fill
								className='object-cover pointer-events-none'
							/>
						</div>
					</div>

					<div className='lg:hidden order-0'>
						<Image
							src={ clinicalData.imageMobile }
							alt='Clinical mobile'
							loading='lazy'
							className='object-cover w-full max-sm:h-[216px] rounded-xl object-top pointer-events-none'
							width={ 339 }
							height={ 216 }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clinical;