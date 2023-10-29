'use client';

import React from 'react';

import { marketplaceData } from '@/constant/data';

const categoriesData = marketplaceData.categories;

const Categories: React.FC = () => {
	return (
		<div className='container-center relative overflow-hidden'>
			<div className='mx-auto py-[106px] overflow-hidden'>
				<div className=' w-full grid md:grid-cols-3 gap-7 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300'>
					{ categoriesData.list.map((categories, id) => {
						return (
							<div
								key={ id }
								className='cursor-pointer md:hover:transform md:hover:translate-y-[-10px] md:hover:transition-transform md:hover:duration-300 md:hover:ease-linear hover:md:bg-blue-1 hover:text-white hover:md:text-grey-dark bg-white text-white rounded-lg py-15px md:py-[33px] px-[13px] lg:px-[33px] flex md:flex-col items-center md:items-start text-left gap-[5.16px] md:gap-1'
							>
								<p className='text-xs md:text-[32px] text-black font-Poppins font-medium leading-[103.077%] sm:leading-[25.37px] -tracking-[1.32px]'>
									{ categories.title }
								</p>
								<p className='font-Poppins text-base leading-[25.37px] -tracking-[0.64px] text-black mt-1'>	{ categories.desc }</p>
							</div>
						);
					}) }
				</div>
			</div>
		</div>
	);
};

export default Categories;