import React from 'react';

import { landingData } from '@/constant/data';

import DiscoverGeviti from '../DiscoverGeviti';

const ProductsSection: React.FC = () => {
	return (
		<div className='py-10 sm:py-20'>
			<DiscoverGeviti
				title={ landingData.products.title }
				description={ landingData.products.description }
				viewAll={ landingData.products.viewAll }
				viewAllMobileClassName='mt-[49px] flex'
				productsWrapperClassName='mt-[49px] lg:mt-[50px]'
			/>
		</div>
	);
};

export default ProductsSection;