import React from 'react';
import Image from 'next/image';

import { IHero } from '@/interfaces';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';
import Navbar from '../Navbar';

type HeroProps = {
	hero: IHero.Hero;
};

const Hero: React.FC<HeroProps> = ({ hero }) => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<Navbar
				withBgWhite
				className='max-md:!pt-0'/>
			<div className='bg-primary h-[372px] max-md:mt-[60px] lg:h-[calc(100vh-30px)] w-full lg:rounded-[19px] relative pt-11px lg:pt-5 '>
				<div className='absolute inset-0 w-full h-full z-0'>
					{ hero.image  && (
						<div className='relative overflow-hidden w-full h-full lg:rounded-[19px]'>
							<Image
								src={ hero.image }
								alt='hero'
								priority
								className='object-cover md:block hidden'
								fill
								objectPosition='top'
							/>
							<Image
								src={ hero.image }
								alt='hero mobile'
								priority={ true }
								className='object-cover md:hidden'
								fill
								objectPosition='top'
							/>
						</div>
					) }
				</div>
				<div className='absolute top-0 inset-x-0 w-full h-full bg-[#0000007D] lg:rounded-[19px]' />

				<div className='relative w-full h-full lg:rounded-b-[19px]'>
					<div className='container-center text-center sm:mx-auto flex flex-col items-center justify-center w-full h-full z-100'>
						<p className='font-BRSonoma text-sm font-semibold text-white leading-[1.54px] uppercase'>{ hero.preTitle }</p>
						<div className='font-Poppins text-white text-[30px] md:!text-[40px] md:mt-5 mt-[10px] md:mb-3 mb-[14px]'>
							<span
								className='hidden md:block'
								dangerouslySetInnerHTML={ { __html: hero.title } } />
							<span
								className='md:hidden block'
								dangerouslySetInnerHTML={ { __html: hero.titleMobile } } />
						</div>
						{
							hero.btn &&
							<CustomLink
								href='/'
								aria-label=	{ hero.btn }
								className='btn btn-secondary flex items-center justify-center gap-7px sm:gap-2 !translate-y-0 group !w-[172px]'
							>
								<span className='text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-Poppins'>
									{ hero.btn }
								</span>

								<ChevronRight className='stroke-grey-secondary w-4 h-4 sm:w-18px sm:h-18px group-hover:translate-x-1 transform transition-all duration-100' />
							</CustomLink>
						}
						
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Hero;