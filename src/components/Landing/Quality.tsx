import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { CheckCircleIcon, ChevronRight } from '../Icons';

const qualityData = landingData.quality;

const Quality: React.FC = () => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<div className='bg-blue-1 h-full w-full lg:rounded-[19px] lg:grid lg:grid-cols-2 lg:gap-[54px] overflow-hidden'>
				<div className='container-center pt-[60px] lg:pt-[106px] lg:pb-[105px]'>
					<div className='mx-auto max-w-lg max-sm:w-full'>
						<div className='text-center lg:text-left flex flex-col'>
							<p className='text-pretitle text-blue-2 order-1'>
								{ qualityData.preTitle }
							</p>
							{ qualityData.title && (
								<div className='max-lg:mx-auto max-w-[278px] sm:max-w-[433px] order-2'>
									<h2 className='text-heading-2 mt-11px sm:mt-7px'>
										{ qualityData.title }
									</h2>
								</div>
							) }
							<div
								id='main-quality-list'
								className='mt-[45px] lg:mt-12 w-full grid gap-2.5 order-4 lg:order-3 lg:max-w-[405px]'>
								{ qualityData.list.map((functionItem, functionItemIdx) => {
									return (
										<div
											key={ functionItemIdx }
											className='rounded-lg bg-[#C3EBFF] px-5 py-4 flex items-center gap-[11px]'
											data-aos='fade-up'
											data-aos-delay={ `${ functionItemIdx * 100 }` }
											data-aos-anchor='#main-quality-list'
										>
											<CheckCircleIcon className='text-primary w-3 h-3 flex-shrink-0' />
											<p className='text-xs sm:text-sm font-BRSonoma font-medium leading-[12px] sm:leading-[17.5px] -tracking-0.04em'>
												{ functionItem }
											</p>
										</div>
									);
								}) }
							</div>
							<div className='flex max-lg:justify-center mt-7 lg:mt-[108px] order-3 lg:order-4'>
								<div className='flex flex-wrap justify-center items-center gap-2.5 lg:gap-[11px]'>
									{ qualityData.btnCtaList.map((btnCta, btnCtaIdx) => {
										return (
											<div key={ btnCtaIdx }>
												<CustomLink
													href={ btnCta.href }
													externalLink={ btnCta.externalLink }
													className={ clsxm(
														'btn-cta-landing group',
														btnCtaIdx === 0 ? 'btn-secondary lg:btn-primary' : ''
													) }
												>
													<span className='text-btn-cta-landing'>
														{ btnCta.text }
													</span>

													<ChevronRight className='arrow-btn-cta-landing' />
												</CustomLink>
											</div>
										);
									}) }
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-10 sm:mt-20 lg:mt-0 relative min-h-[293px] sm:min-h-[500px] lg:min-h-0 h-full w-full flex-auto'>
					<div className='absolute inset-y-0 -left-10 right-0 lg:-left-[200px] lg:-right-[20px]'>
						<div className='lg:pl-20 lg:-mr-20 z-10 w-full flex items-end justify-end flex-auto h-full relative'>
							<Image
								src='/images/landing/metformin_shadow.png'
								alt=''
								width={ 771 }
								height={ 1316 }
								className='max-lg:hidden lg:w-[409px] xl:w-[500px]'
							/>

							<Image
								src='/images/landing/metformin_shadow_mobile.png'
								alt=''
								width={ 771 }
								height={ 1316 }
								className='w-[289px] sm:w-[463px] lg:hidden'
							/>
						</div>

						<div className='absolute bottom-[27px] xl:bottom-[136px] right-[220px] sm:right-[330px] lg:right-[240px] xl:right-[330px] -z-0'>
							<Image
								src='/images/landing/pill_bottle_mockup.png'
								alt=''
								width={ 459 }
								height={ 903 }
								className='w-[200px] sm:w-[360px] lg:w-[380px] xl:w-[459px]'
							/>
						</div>

						<div className='absolute bottom-[130px] sm:bottom-[210px] lg:bottom-[286px] xl:bottom-[342px] right-[14px] sm:right-[40px] lg:-right-[45px] xl:-right-[70px] rotate-[50.761deg] -z-0'>
							<Image
								src='/images/landing/vaccine_bottle.png'
								alt=''
								width={ 864 }
								height={ 1184 }
								className='w-[137px] sm:w-[200px] xl:w-[286px]'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quality;