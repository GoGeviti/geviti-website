'use client';
import React from 'react';
import Image from 'next/image';

import landingData from '@/constant/data/landing';

import { ChevronRight } from '../Icons';
import Navbar from '../Navbar';
import WrapperAnimation from '../WrapperAnimation';
import { CustomLink } from '..';

const heroData = landingData.hero;
const Hero = () => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<Navbar
				iconsMenu={ landingData.navbar.iconsMenu }
				actionsMenu={ landingData.navbar.actionsMenu }
			/>
			<div className='bg-primary h-screen lg:h-[calc(100vh-30px)] w-full lg:rounded-[19px] relative pt-11px lg:pt-5'>
				<div className='absolute inset-0 w-full h-full'>
					{ heroData.image && (
						<div className='relative overflow-hidden w-full h-full lg:rounded-[19px]'>
							<Image
								src={ heroData.image }
								alt='hero'
								priority
								className='object-cover md:block hidden'
								fill
								objectPosition='right center'
							/>
							<Image
								src={ heroData.imageMobile }
								alt='hero mobile'
								priority={ true }
								className='object-contain md:hidden'
								fill
								objectPosition='top'
							/>
						</div>
					) }
				</div>

				<div className='sm:hidden absolute top-0 inset-x-0 w-full h-[270px] bg-gradient-to-b from-primary to-[#181a1c00]' />

				<div className='max-sm:hidden absolute top-0 inset-x-0 w-full h-[193px] bg-hero-landing-top lg:rounded-t-[19px] opacity-50' />

				<div className='h-full'>
					<div className='relative w-full h-full bg-hero-landing-bottom lg:rounded-b-[19px]'>
						<div className='container-center pb-[38px] lg:pb-[112px] h-full w-full flex flex-col items-center justify-end'>
							<div className='text-center'>
								<h2 className='text-grey-secondary font-Poppins font-semibold text-[10px] sm:text-xs lg:text-sm leading-[240%] lg:leading-6 uppercase tracking-[1.1px] md:tracking-0.11em'>
									{ heroData.preTitle }
								</h2>
								{ heroData.title && (
									<h1 className='mt-11px lg:mt-7px font-Poppins text-[25px] md:text-[32px] lg:text-[40px] leading-[120%] sm:leading-[42.5px] tracking-[-1px] md:-tracking-0.04em text-grey-secondary'>
										<span dangerouslySetInnerHTML={ { __html: heroData.title } } />
									</h1>
								) }

								<div
									id='main-keys-landing'
									className='flex justify-center mt-9 space-x-5'>
									<CustomLink
										href={ heroData.btnCta.href }
										externalLink={ heroData.btnCta.externalLink }
										className='btn-cta-landing btn-secondary group'
										aria-label={ heroData.btnCta.text }
									>
										<span className='text-btn-cta-landing'>
											{ heroData.btnCta.text }
										</span>

										<ChevronRight className='arrow-btn-cta-landing' />
									</CustomLink>
									<CustomLink
										href={ heroData.btnCta2.href }
										externalLink={ heroData.btnCta2.externalLink }
										className='btn-cta-landing  group '
										aria-label={ heroData.btnCta2.text }
									>
										<span className='text-btn-cta-landing text-grey-secondary'>
											{ heroData.btnCta2.text }
										</span>

										<ChevronRight className='arrow-btn-cta-landing text-grey-secondary' />
									</CustomLink>
								</div>
							</div>

							<div className='flex items-center justify-center gap-5 lg:gap-12 mt-[54px] sm:mt-20'>
								{ heroData.mainKeys.map((feature, featureIdx) => (
									<WrapperAnimation
										key={ feature.text }
										data-aos='zoom-in-up'
										data-aos-delay={ `${ featureIdx * 100 }` }
										data-aos-anchor='#main-keys-landing'
										className='flex flex-col text-center items-center'
									>
										{ feature.image && (
											<div className='relative overflow-hidden w-[21px] h-[21px] sm:w-[26px] sm:h-[26px]'>
												<Image
													src={ feature.image }
													alt={ feature.text }
													sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
													fill
													loading='lazy'
												/>
											</div>
										) }
										<p className='font-Poppins mt-5px -tracking-[0.634px] md:-tracking-0.04em text-grey-secondary text-[15.861px] md:text-lg lg:text-xl leading-[108.362%]'>{ feature.text }</p>
										<p className='text-grey-primary font-medium font-Poppins text-[11px] md:text-sm mt-[3px]'>{ feature.subtext }</p>
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