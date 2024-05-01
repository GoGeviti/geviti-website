'use client';

import React from 'react';
import Image from 'next/image';

import solutionData from '@/constant/data/solution';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import Navbar from '../Navbar/Landing';

const Hero: React.FC<{ type: 'men' | 'women'; }> = ({ type }) => {
	const heroData = solutionData.hero[type];

	const renderImage = (imageType: 'desktop' | 'mobile') => {
		const imageMobile = imageType === 'mobile';

		return (
			<Image
				src={ imageMobile ? heroData.imageMobile : heroData.image }
				alt='hero'
				priority={ true }
				className={ clsxm(
					'object-cover pointer-events-none',
					imageMobile ? 'md:hidden object-center' : 'md:block hidden object-right'
				) }
				fill
				quality={ 100 }
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
			/>
		);
	};

	return (
		<div className='lg:px-3 lg:pt-3 overflow-hidden font-Poppins'>
			<Navbar animationProps={ { variants: { hidden: { y: 0, opacity: 1 }, visible: { y: 0, opacity: 1 } } } } />
			<div className='bg-primary h-[calc(100svh+14px)] lg:h-[calc(100vh-202px)] w-full overflow-hidden max-lg:rounded-t-none rounded-19px relative pt-11px lg:pt-5'>
				<div className='absolute inset-0 w-full h-full'>
					<div className='relative overflow-hidden w-full h-full'>
						{ renderImage('desktop') }
						{ renderImage('mobile') }
					</div>
				</div>
				{ type === 'men'
					? <div className='max-lg:hidden absolute bottom-0 inset-x-0 w-full h-[80%] bg-backdrop-hero-membership-bottom -z-0' />
					: <div
						className='lg:hidden absolute bottom-0 inset-x-0 w-full h-[62%] -z-0'
						style={ {
							background: 'linear-gradient(0deg, #181A1C 20.46%, rgba(24, 26, 28, 0.72) 61.5%, rgba(24, 26, 28, 0) 100%)'
						} } /> }

				<div className='h-full'>
					<div className='relative w-full h-full rounded-b-19px'>
						<div className='h-full w-full flex flex-col justify-end'>
							<div className={ clsxm(
								'pb-[42px] lg:pb-[10.267vh] xl:pb-[73px] text-left flex flex-col',
								type === 'men' && 'max-lg:pt-[39px] max-lg:bg-backdrop-hero-membership-bottom-mobile'
							) }>
								<div className='container-center w-full'>
									<span className='overflow-hidden inline-block'>
										<h2 className='text-grey-secondary font-Poppins inline-block font-semibold text-[10px] sm:text-xs lg:text-sm !leading-6 uppercase tracking-0.11em'>
											{ heroData.preTitle }
										</h2>
									</span>

									<h1 className='max-lg:mt-5px font-medium text-[7.5vw] xs:text-3xl md:text-4xl lg:text-[5vh] xl:text-[46px] !leading-normal -tracking-0.04em text-grey-secondary'>
										<span
											dangerouslySetInnerHTML={ { __html: heroData.title } }
											className='hero-solutions' />
									</h1>

									<div className='mt-5px lg:mt-6 sm:max-w-[504px]'>
										<p
											className='text-grey-50 font-Poppins inline-block text-[2.9vw] xs2:text-xs sm:text-sm !leading-5'
											dangerouslySetInnerHTML={ { __html: heroData.description } }
										/>
									</div>

									<div className='flex w-full mt-[5vh] xs:mt-[42px] lg:mt-[5.435vh] xl:mt-[42px]'>
										<div className='flex max-sm:w-full max-sm:justify-center'>
											<ButtonCta
												href={ heroData.btnCta.href }
												externalLink={ heroData.btnCta.externalLink }
												aria-label={ heroData.btnCta.text }
												text={ heroData.btnCta.text }
												theme={ type === 'women' ? 'tertiary' : 'secondary' }
												className='max-sm:w-full'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
