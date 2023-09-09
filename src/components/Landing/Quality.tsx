import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { CheckCircleIcon, ChevronRight } from '../Icons';

const qualityData = landingData.quality;

const Quality: React.FC = () => {
	return (
		<div className='lg:px-3 overflow-hidden'>
			<div className='bg-blue-1 h-full w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='container-center relative'>
					<div className='pt-[60px] lg:pt-[106px] lg:pb-[105px] relative z-10'>
						<div className='max-lg:mx-auto max-w-lg'>
							<div className='text-center lg:text-left flex flex-col'>
								<p className='text-pretitle text-blue-2 order-1'>
									{ qualityData.preTitle }
								</p>
								{ qualityData.title && (
									<div className='max-lg:mx-auto max-w-[278px] sm:max-w-[433px] order-2'>
										<h2 className='text-heading-2 text-primary mt-11px sm:mt-7px'>
											{ qualityData.title }
										</h2>
									</div>
								) }
								<div
									id='main-quality-list'
									className='mt-[45px] lg:mt-12 w-full grid gap-5px sm:gap-2.5 order-4 lg:order-3 lg:max-w-[405px]'>
									{ qualityData.list.map((functionItem, functionItemIdx) => {
										return (
											<div
												key={ functionItemIdx }
												className='rounded-lg bg-[#C3EBFF] px-[13px] sm:px-5 py-15px sm:py-4 flex items-center gap-[11px] hover:outline hover:outline-2 hover:outline-[#C3EBFF]'
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
									<div className='flex max-sm:flex-wrap justify-center items-center gap-2.5 lg:gap-[11px]'>
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

					<div className='max-sm:-ml-[83px] max-sm:-mr-[58px] max-sm:-mb-[120px] max-sm:-mt-[17px] relative lg:flex lg:justify-end lg:absolute lg:right-0 bottom-0 lg:-mt-[50px] sm:bottom-0 mx-auto lg:ml-auto sm:max-w-lg md:max-w-2xl xl:max-w-3xl'>
						<Image
							src='/images/landing/quality_products.png'
							alt=''
							width={ 1440 }
							height={ 801 }
							className='w-full'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quality;