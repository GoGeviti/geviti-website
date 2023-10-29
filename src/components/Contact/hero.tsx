import React from 'react';

import { IHero } from '@/interfaces';

import Navbar from '../Navbar';

type HeroProps = {
	hero: IHero.Hero;
};

const Hero: React.FC<HeroProps> = ({ hero }) => {
	return (
		<div className='overflow-hidden'>
			<Navbar theme='light'/>
			<div className='w-full relative overflow-hidden '>
				<div className='container-center text-center sm:mx-auto flex flex-col items-center justify-center mb-[13px] md:mb-[56px] mt-[86px] md:mt-[154px] max-md:!max-w-sm'>
					<p className='font-Poppins text-xs md:text-base font-semibold text-primary md:text-grey-primary leading-[1.54px] md:leading-[15px] tracking-[1.76px] uppercase'>{ hero.preTitle }</p>
					<div className='font-Poppins text-primary !font-medium text-[32px] md:!text-[40px] !leading-[32px] md:!leading-[45px] my-3 md:my-[10px]'>
						<span
							className='hidden md:block'
							dangerouslySetInnerHTML={ { __html: hero.title } } />
						<span
							className='md:hidden block'
							dangerouslySetInnerHTML={ { __html: hero.titleMobile } } />
					</div>
					{
						hero.desc &&
						<div className='text-[#717171] font-Poppins text-xs md:text-base'><span
							className='hidden md:block'
							dangerouslySetInnerHTML={ { __html: hero.desc } } />
						<span
							className='md:hidden block'
							dangerouslySetInnerHTML={ { __html: hero.descMobile } } /></div>
					}
					
				</div>
			</div>
		</div>
	);
};

export default Hero;