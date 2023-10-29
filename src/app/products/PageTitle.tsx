import React from 'react';

import { productListData } from '@/constant/data';

const PageTitle = () => {
	return (
		<div className='flex flex-col gap-y-11px sm:gap-y-3.5 text-primary'>
			<p className='text-pretitle'>{ productListData.preTitle }</p>
			<h1 className='font-Poppins text-[32px] md:text-4xl lg:text-[40px] leading-[84%] md:leading-[98.75%] -tracking-0.04em'>
				{ productListData.title }
			</h1>
		</div>
	);
};

export default PageTitle;
