import React from 'react';
import Image from 'next/image';

import { homeData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import Navbar from '../Navbar';
import WrapperAnimation from '../WrapperAnimation';

const heroData = homeData.hero;

const Hero: React.FC = () => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<Navbar />
			<div className='bg-primary w-full h-full lg:rounded-[19px] relative pt-11px lg:pt-5 overflow-hidden'>
				<div
					aria-hidden='true'
					className='max-lg:hidden lg:absolute lg:inset-y-0 lg:w-screen'
				>
					<div className='lg:flex-shrink-0 lg:flex-grow lg:absolute lg:left-0 lg:inset-y-0 w-full'>
						{ heroData.image && (
							<div className='h-full object-cover relative overflow-hidden max-lg:hidden'>
								<Image
									src={ heroData.image }
									alt='hero'
									sizes='(max-width: 768px) 33vw, (max-width: 1200px) 55vw, 50vw'
									fill
									className='object-cover'
									priority={ true }
								/>
							</div>
						) }
					</div>
				</div>

				<div className='pt-60px lg:pt-20 lg:min-h-[646.8px] relative overflow-hidden isolate lg:pl-5'>
					<div className='container-center w-full flex max-lg:flex-col items-center lg:gap-x-5 relative'>

						<div className='mx-auto sm:max-w-2xl lg:mx-0 lg:flex-auto text-center lg:text-left pt-[33px] lg:pt-[53px]'>
							<h2 className='text-grey-secondary font-BRSonoma font-semibold text-[10px] sm:text-sm leading-[150%] sm:leading-6 uppercase tracking-[0.092em] sm:tracking-0.11em'>
								{ heroData.preTitle }
							</h2>
							{ heroData.title && (
								<h1 className='mt-3 font-Poppins max-md:px-10 text-[40px] leading-[98.75%] sm:-tracking-[1.6px] text-grey-secondary'>
									<span dangerouslySetInnerHTML={ { __html: heroData.title } } />
								</h1>
							) }
							{ heroData.description && (
								<p className='mt-3.5 lg:pr-11 font-BRSonoma font-normal text-xs sm:text-sm leading-[142.857%] text-grey-primary'>
									<span
										dangerouslySetInnerHTML={ { __html: heroData.description } }
										className='lg:block hidden' />
									<span
										dangerouslySetInnerHTML={ { __html: heroData.descriptionMobile } }
										className='lg:hidden'/>
								</p>
							) }
						</div>

						<div className='max-lg:pb-60 w-full'>
							{ (heroData.image || heroData.imageMobile) && (
								<div className='mx-auto aspect-[43.5/53] sm:max-h-[430px] h-full w-full relative overflow-hidden lg:hidden'>
									<Image
										priority={ true }
										src={ heroData.imageMobile ?? heroData.image }
										alt='hero'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										className='object-contain'
										fill
									/>
								</div>
							) }
						</div>
						<div className='lg:hidden bg-gradient-to-t from-[#0F1011] via-[#0F1011] to-[rgba(15, 16, 17, 0.00)] h-[597px] absolute bottom-0 w-full' />
					</div>
				</div>

				<div className='absolute bottom-0 inset-x-0 max-lg:top-1/2 w-full bg-gradient-to-t from-primary to-[#181a1c00] lg:rounded-b-[19px]'>
					<div className='container-center pb-[52px] lg:pb-[70px] h-full flex items-end'>
						<div
							id='main-keys'
							className='grid grid-cols-2 md:grid-cols-4 gap-11 lg:gap-7 max-w-3xl w-full lg:px-5'
						>
							{ heroData.mainKeys.map((feature, featureIdx) => (
								<WrapperAnimation
									key={ feature.text }
									data-aos='zoom-in-up'
									data-aos-delay={ `${ featureIdx * 100 }` }
									data-aos-anchor='#main-keys'
									className='flex flex-col max-lg:text-center max-lg:items-center gap-y-1 md:gap-y-5px'
								>
									<div className=''>
										<div className={ clsxm(
											'font-Poppins bg-black-icons rounded-full p-1 w-6 h-6 font-medium text-white text-[11px] flex justify-center items-center mb-5',
											featureIdx + 1 !== heroData.mainKeys.length && 'lg:before:absolute lg:before:bg-black-icons lg:before:h-[1px] lg:before:w-full lg:before:top-3 lg:before:left-[25px] '
										) }
										>{ featureIdx + 1 }</div>
									</div>
									{ feature.image && (
										<div className='relative overflow-hidden w-5 h-5 sm:w-[26px] sm:h-[26px]'>
											<Image
												src={ feature.image }
												alt={ feature.text }
												sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
												fill
												loading='lazy'
											/>
										</div>
									) }
									<p className='font-Poppins font-medium leading-[129.403%] text-grey-secondary text-base'><span dangerouslySetInnerHTML={ { __html: feature.text } } /></p>
								</WrapperAnimation>
							)) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;