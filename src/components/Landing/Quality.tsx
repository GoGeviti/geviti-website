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
				<div className='container-center flex flex-col lg:flex-row items-center justify-between relative'>
					<div className='pt-[60px] lg:pt-[106px] lg:pb-[58px] max-lg:mx-auto w-full max-w-lg relative z-10'>
						<div className='text-center lg:text-left flex flex-col'>
							<p className='text-pretitle text-blue-2 order-1 hidden lg:block'>
								{ qualityData.preTitle }
							</p>
							<p className='text-pretitle text-blue-2 order-1 lg:hidden'>
								{ qualityData.preTitleMobile }
							</p>
							<div className='max-lg:mx-auto sm:max-w-[443px] order-2'>
								<h2 className='text-[6.1vw] xs2:text-[25px] font-Poppins !leading-[125%] -tracking-[0.88px] md:text-heading-2 text-primary mt-7px'>
									{ qualityData.title }
								</h2>
							</div>
							<div
								id='main-quality-list'
								className='mt-[39px] lg:mt-12 w-full grid gap-5px sm:gap-2.5 order-4 lg:order-3 lg:max-w-[455px]'
							>
								{ qualityData.list.map((functionItem, functionItemIdx) => {
									return (
										<div
											key={ functionItemIdx }
											className='rounded-lg bg-[#C3EBFF] px-[13px] sm:px-5 py-15px sm:py-4 flex items-center gap-[11px] hover:outline hover:outline-2 hover:outline-[#C3EBFF]'
										// data-aos='fade-up'
										// data-aos-delay={ `${functionItemIdx * 100}` }
										// data-aos-anchor='#main-quality-list'
										>
											<CheckCircleIcon className='text-primary w-3 h-3 flex-shrink-0 scale-125' />
											<p
												className='text-left text-xs md:text-sm font-BRSonoma leading-[12.369px] sm:leading-[17.5px] -tracking-[0.48px] md:-tracking-0.04em'
												dangerouslySetInnerHTML={ { __html: functionItem } }
											/>
										</div>
									);
								}) }
							</div>
							<div className='flex max-lg:justify-center mt-7 lg:mt-[48px] order-3 lg:order-4'>
								<div className='flex max-sm:flex-wrap justify-center items-center gap-2.5 lg:gap-[11px]'>
									{ qualityData.btnCtaList.map((btnCta, btnCtaIdx) => {
										return (
											<div key={ btnCtaIdx }>
												<CustomLink
													href={ btnCta.href }
													externalLink={ btnCta.externalLink }
													className={ clsxm(
														'btn-cta-landing group px-5 py-[10px]',
														btnCtaIdx === 0
															? 'btn-secondary lg:btn-primary'
															: ''
													) }
													aria-label={ btnCta.text }
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
						<div className='mt-[58px] hidden md:block'>
							<p className='font-BRSonoma font-medium text-[10px] text-[#537586] max-w-[285px]'>
								{ qualityData.notes }
							</p>
						</div>
					</div>
					<div className='relative w-[318px] md:w-[494px] h-[435px] max-md:-mb-20 md:h-[663px] max-md:hidden'>
						<Image
							src='/images/landing/compressed/quality_products.png'
							alt='quality'
							loading='lazy'
							fill
							className='object-cover object-center'
						/>
					</div>
					<div className='pt-[22px] md:hidden relative'>
						<Image
							src='/images/landing/quality_products_mobile.png'
							alt='quality'
							loading='lazy'
							width={ 318.38 }
							height={ 435.984 }
							className='relative z-10'
						/>

						<div className='absolute -bottom-[233px] left-1/2 -translate-x-1/2 bg-radial-gradient-quality-landing w-[411.339px] h-[411.339px]' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quality;
