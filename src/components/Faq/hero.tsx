import React from 'react';

import { faqData } from '@/constant/data';

import { SearchIcon2 } from '../Icons';
import Navbar from '../Navbar';

const hero = faqData.hero;

const Hero: React.FC = () => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<Navbar theme='light'/>
			<div className='bg-white w-full h-full lg:rounded-[19px] py-[123px] md:py-[152px] relative overflow-hidden'>
				<div className='container-center text-center sm:mx-auto flex flex-col items-center justify-center '>
					<p className='font-Poppins text-xs md:text-base font-semibold text-grey-primary leading-[1.54px] md:leading-[18px] tracking-[1.76px] uppercase'>{ hero.preTitle }</p>
					<h2 className='font-Poppins text-neutral-800 !font-medium !text-4xl !leading-[50px] md:!leading-[62px] md:-tracking-[0.4px] mt-3 md:mt-[18px] mb-3 md:mb-5'>
						<span dangerouslySetInnerHTML={ { __html: hero.title } } />
					</h2>
					{
						hero.description &&
						<p className='text-neutral-600 font-Poppins text-base leading-[30px] max-w-[621px] md:block hidden'>{ hero.description }</p>
					}
					<div className='flex gap-x-2 md:gap-x-[13px] items-center bg-white border border-neutral-300 rounded-[76px] max-w-[600px] px-[25px] py-4 md:py-[28px] w-full mt-[25px] shadow-md'>
						<SearchIcon2 className='w-3 h-3 md:h-5 md:w-5'/>
						<p className='font-Poppins text-neutral-600 text-xs md:text-lg leading-5'>{ hero.search }</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;