'use client';

import React from 'react';
import Image from 'next/image';

import landingData from '@/constant/data/landing';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';

const featuresCarouselData = landingData.features;

const FeaturesCarousel: React.FC = () => {
	return (
		<div className='lg:px-3'>
			<div className='flex flex-col gap-5'>
				{ featuresCarouselData.map((feature, featureIdx) => (
					<div
						key={ featureIdx }
						className={ clsxm(
							'bg-primary sticky rounded-19px py-6 lg:py-[73px]',
							'transition-all duration-300 top-20',
						) }
					>
						<div className='container-center flex flex-col gap-11 w-full'>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-[33px]'>
								<div
									className={ clsxm(
										'lg:max-w-[460px] w-full',
										featureIdx % 2 !== 0 ? 'lg:order-2' : 'lg:ml-[18%]'
									) }
								>
									<p className='max-lg:mb-2.5 text-pretitle text-[#5F6D7B] sm:text-grey-300'>
										{ feature.preTitle }
									</p>
									<h2 className='text-white !leading-[133%] text-[6.857vw] xxs:text-[6.154vw] xs2:text-2xl lg:text-[3.853vw] xl:text-[42px] sm:!leading-normal -tracking-0.04em'>
										<span
											dangerouslySetInnerHTML={ {
												__html: feature.title,
											} }
										/>
									</h2>
									<p className='mt-2.5 lg:mt-3.5 text-grey-400 sm:text-grey-300 text-xs sm:text-sm !leading-5'>
										{ feature.description }
									</p>
									{ feature.btnCta && (
										<div className='flex mt-[33px] lg:mt-[42px] max-lg:justify-center max-sm:w-full'>
											<ButtonCta
												href={ feature.btnCta.href }
												text={ feature.btnCta.text }
												theme='secondary'
												className='max-sm:w-full'
											/>
										</div>
									) }
								</div>
								<div
									className={ clsxm(
										'flex relative',
										featureIdx % 2 !== 0
											? 'lg:order-1'
											: 'justify-center lg:justify-end'
									) }
								>
									<div className='w-full sm:w-[448px] relative h-[358px] sm:h-[390px]'>
										<span className='text-primary font-Poppins p-3.5 rounded-19px bg-white absolute inset-0 w-full h-full'>
											<div className='h-full w-full bg-blue-alice rounded-2xl relative overflow-hidden'>
												<Image
													alt='card'
													src={ feature.card.image }
													width={ 448 }
													height={ 390 }
												/>
											</div>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				)) }
			</div>
		</div>
	);
};

export default FeaturesCarousel;
