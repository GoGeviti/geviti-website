import React from 'react';
import Image from 'next/image';

import { homeData } from '@/constant/data';

import Navbar from '../Navbar';

const heroData = homeData.hero;

const Hero: React.FC = () => {
	return (
		<div className='lg:px-3 lg:py-15px'>
			<div className='bg-primary w-full h-full lg:rounded-[19px] relative'>
				<div className='absolute top-0 inset-x-0 w-full h-[193px] bg-gradient-to-b from-primary to-[#181a1c00] lg:rounded-t-[19px]' />
				<Navbar />

				<div className='pt-60px lg:pt-20 lg:min-h-[646.8px] relative overflow-hidden isolate'>
					<div className='container-center flex max-lg:flex-col items-center lg:gap-x-5'>
						<div
							aria-hidden='true'
							className='max-lg:hidden lg:absolute lg:inset-y-0 lg:left-[48%] lg:w-screen'
						>
							<div className='lg:flex-shrink-0 lg:flex-grow lg:absolute lg:left-0 lg:inset-y-0 w-full'>
								{ heroData.image && (
									<div className='aspect-[53/47] h-full max-h-[646.8px] relative overflow-hidden max-lg:hidden'>
										<Image
											src={ heroData.image }
											alt=''
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											fill
										/>
									</div>
								) }
							</div>
						</div>

						<div className='mx-auto sm:max-w-2xl lg:mx-0 lg:flex-auto text-center lg:text-left pt-4 lg:pt-[53px]'>
							<h2 className='text-grey-secondary font-BRSonoma font-semibold text-xs sm:text-sm leading-[150%] sm:leading-6 uppercase tracking-[0.092em] sm:tracking-[0.11em]'>
								{ heroData.preTitle }
							</h2>
							{ heroData.title && (
								<h1 className='mt-3 font-Poppins sm:max-w-xl text-[32px] sm:text-[40px] leading-[98%] sm:-tracking-[0.04em] text-grey-secondary'>
									<span dangerouslySetInnerHTML={ { __html: heroData.title } } />
								</h1>
							) }
							{ heroData.description && (
								<p className='mt-3.5 sm:max-w-md lg:pr-10 font-BRSonoma font-normal text-xs sm:text-sm leading-5 text-grey-primary'>
									<span dangerouslySetInnerHTML={ { __html: heroData.description } } />
								</p>
							) }
						</div>

						<div className='max-lg:pb-20'>
							{ (heroData.image || heroData.imageMobile) && (
								<div className='mx-auto aspect-[47/53] h-[410px] w-full relative overflow-hidden lg:hidden'>
									<Image
										src={ heroData.imageMobile ?? heroData.image }
										alt=''
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										fill
									/>
								</div>
							) }
						</div>
					</div>
				</div>

				<div className='absolute bottom-0 inset-x-0 max-lg:top-1/2 w-full bg-gradient-to-t from-primary to-[#181a1c00] lg:rounded-b-[19px]'>
					<div className='container-center pb-[52px] lg:pb-[106px] h-full flex items-end'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-y-7 max-w-5xl w-full'>
							{ heroData.mainKeys.map(feature => (
								<div
									key={ feature.text }
									className='flex flex-col max-lg:text-center max-lg:items-center gap-y-1 md:gap-y-5px'
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
									<p className='font-Poppins leading-[225%] -tracking-[0.04em] text-grey-secondary text-base sm:text-lg lg:text-xl'>{ feature.text }</p>
								</div>

							)) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;