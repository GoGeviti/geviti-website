'use client';

import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';
import Navbar from '../Navbar';
import WrapperAnimation from '../WrapperAnimation';

const heroData = landingData.hero;

const Hero: React.FC = () => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<Navbar
				iconsMenu={ landingData.navbar.iconsMenu }
				actionsMenu={ landingData.navbar.actionsMenu }
			/>
			<div className='bg-primary h-screen lg:h-full w-full lg:rounded-[19px] relative pt-11px lg:pt-5'>
				<div className='absolute inset-0 w-full h-full'>
					{ heroData.image && (
						<div className='relative overflow-hidden w-full h-full lg:rounded-[19px]'>
							<Image
								src={ heroData.image }
								alt=''
								className='object-cover'
								fill
							/>
						</div>
					) }
				</div>

				<div className='sm:hidden absolute top-0 inset-x-0 w-full h-[270px] bg-gradient-to-b from-primary to-[#181a1c00]' />

				<div className='max-sm:hidden absolute top-0 inset-x-0 w-full h-[193px] bg-hero-landing-top lg:rounded-t-[19px] opacity-50' />

				<div className='pt-[193px] lg:pt-[329px] h-full'>
					<div className='relative w-full h-full bg-hero-landing-bottom lg:rounded-b-[19px]'>
						<div className='container-center pt-[193px] lg:pt-[186px] pb-11 lg:pb-[113px] h-full w-full flex flex-col items-center justify-end'>
							<div className='text-center'>
								<h2 className='text-grey-secondary font-BRSonoma font-semibold text-[10px] sm:text-xs lg:text-sm leading-[150%] lg:leading-6 uppercase tracking-0.11em'>
									{ heroData.preTitle }
								</h2>
								{ heroData.title && (
									<h1 className='mt-3 lg:mt-7px font-Poppins text-[21px] sm:text-2xl md:text-[32px] lg:text-[40px] leading-[100%] sm:leading-[98%] -tracking-0.04em text-grey-secondary'>
										<span dangerouslySetInnerHTML={ { __html: heroData.title } } />
									</h1>
								) }

								<div
									id='main-keys-landing'
									className='flex justify-center mt-7 sm:mt-9'>
									<CustomLink
										href={ heroData.btnCta.href }
										externalLink={ heroData.btnCta.externalLink }
										className='btn-cta-landing group'
									>
										<span className='text-btn-cta-landing'>
											<span className='max-sm:hidden'>{ heroData.btnCta.text }</span>
											<span className='sm:hidden'>{ heroData.btnCta.textMobile }</span>
										</span>

										<ChevronRight className='arrow-btn-cta-landing' />
									</CustomLink>
								</div>
							</div>

							<div className='grid grid-cols-3 sm:max-w-xl w-full mt-[53px] sm:mt-20'>
								{ heroData.mainKeys.map((feature, featureIdx) => (
									<WrapperAnimation
										key={ feature.text }
										data-aos='zoom-in-up'
										data-aos-delay={ `${ featureIdx * 100 }` }
										data-aos-anchor='#main-keys-landing'
										className='flex flex-col text-center items-center gap-y-1 md:gap-y-5px'
									>
										{ feature.image && (
											<div className='relative overflow-hidden w-5 h-5 sm:w-[26px] sm:h-[26px]'>
												<Image
													src={ feature.image }
													alt={ feature.text }
													sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
													fill
												/>
											</div>
										) }
										<p className='font-Poppins leading-[225%] -tracking-0.04em text-grey-secondary text-base sm:text-lg lg:text-xl'>{ feature.text }</p>
										<span className='inline-flex items-center gap-5px'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='12'
												viewBox='0 0 12 12'
												fill='none'
												className='w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0'>
												<g clipPath='url(#clip0_1355_260)'>
													<path
														d='M3.75 6L5.25 7.5L8.25 4.5M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z'
														stroke='#95A2AE'
														strokeLinecap='round'
														strokeLinejoin='round' />
												</g>
												<defs>
													<clipPath id='clip0_1355_260'>
														<rect
															width='12'
															height='12'
															fill='white' />
													</clipPath>
												</defs>
											</svg>

											<p className='text-grey-primary font-medium font-BRSonoma text-[11px] sm:text-sm'>{ feature.subtext }</p>
										</span>
									</WrapperAnimation>
								)) }
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;