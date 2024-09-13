'use client';

import React, { useState } from 'react';

import { faqData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { CheckCircleIcon, ChevronDown } from '../Icons';

const categoriesData = faqData.categories;

const Categories: React.FC = () => {
	const [showAllCategories, setShowAllCategories] = useState(false);
	return (
		<div className='container-center relative overflow-hidden'>
			<div className='mx-auto pt-[56px] overflow-hidden max-w-5xl'>
				<div className=' w-full grid md:grid-cols-4 gap-[30px] ease-custom transition-transform duration-300'>
					{ categoriesData.list.map((categories, id) => {
						 if (!showAllCategories && id >= 4) {
							return null;
						}
						return (
							<div
								key={ id }
								className='cursor-pointer md:hover:transform md:hover:translate-y-[-10px] md:hover:transition-transform md:hover:duration-300 md:hover:ease-linear hover:md:bg-blue-1 hover:bg-grey-dark hover:text-white hover:md:text-grey-dark bg-grey-dark text-white rounded-lg py-15px md:py-5 px-[13px] lg:px-[23px] flex md:flex-col items-center md:items-start text-left gap-[5.16px] md:gap-1'
							>
								<CheckCircleIcon className='text-[#9CD6F4] w-[14.843px] h-[14.843px] sm:w-[21px] sm:h-[21px] flex-shrink-0' />
								<p className='text-xs sm:text-[15px] font-Poppins font-medium leading-[103.077%] sm:leading-[17.5px] -tracking-[0.6px]'>
									{ categories.title }
								</p>
							</div>
						);
					}) }
				</div>
				<div
					onClick={ () => setShowAllCategories(!showAllCategories) }
					className='flex items-center justify-center mt-[34px] gap-2 h-[37px] mb-[27px]'>
					<p className='font-Poppins text-[15px] font-semibold leading-5'>{ categoriesData.bottomBtn }</p>
					<ChevronDown className={ clsxm('w-6 h-6 ease-custom transition-transform duration-300 ', showAllCategories ? 'rotate-180' : 'rotate-0') }/>
				</div>
			</div>
		</div>
	);
};

export default Categories;