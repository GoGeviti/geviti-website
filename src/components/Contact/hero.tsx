import React from 'react';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';
import { IHero } from '@/interfaces';

import Navbar from '../Navbar';

type HeroProps = {
	hero: IHero.Hero;
	isPartner?: boolean | null;
};

const Hero: React.FC<HeroProps> = ({ hero, isPartner = false }) => {
	return (
		<div className='lg:px-3 lg:pt-15px overflow-hidden'>
			<Navbar
				theme={ isPartner ? 'light' : 'dark' }
				withBgWhite
				className='max-lg:!pt-0' />
			<div className='w-full h-[250px] md:h-[400px] max-md:mt-[60px] relative overflow-hidden'>
				<div className='absolute inset-0 w-full h-full z-0'>
					{ hero.image && (
						<div className='relative overflow-hidden w-full h-full lg:rounded-[19px]'>
							<Image
								src={ hero.image }
								alt='hero'
								priority
								className='object-cover object-center'
								fill
							/>
						</div>
					) }
				</div>
				{ hero.image ?
					<div className='absolute top-0 inset-x-0 w-full h-full bg-gradient-to-b from-primary via-[#0000007D] to-[#0000007D] lg:rounded-[19px]' /> :
					<div className='absolute inset-0 overflow-hidden w-full h-full lg:rounded-[19px] z-0 bg-[#D8D8D8]' /> }
				<div className='relative w-full h-full lg:rounded-b-[19px]'>
					<div className='container-center w-full h-full text-center sm:mx-auto flex flex-col items-center justify-center max-md:!max-w-sm'>
						<p className={ clsxm('font-BRSonoma text-sm font-semibold tracking-[1.54px] uppercase', isPartner ? 'text-primary' : 'text-grey-secondary') }>{ hero.preTitle }</p>
						<div className={ clsxm('font-Poppins !text-[30px] md:!text-[40px] mt-[10px] md:mt-5 mb-2 md:mb-4', isPartner ? 'text-primary' : 'text-white') }>
							<span
								dangerouslySetInnerHTML={ { __html: hero.title } } />
						</div>
						{
							hero.desc &&
							<div className={ clsxm('font-BRSonoma !text-sm', isPartner ? 'text-primary' : 'text-grey-secondary') }><span
								dangerouslySetInnerHTML={ { __html: hero.desc } } /></div>
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;