import React from 'react';

import { landingData } from '@/constant/data';

import DiscoverGeviti from '../DiscoverGeviti';

const ProductsSection: React.FC = () => {
	return (
		<div className='py-10 sm:py-20'>
			<DiscoverGeviti
				title={ landingData.products.title }
				description={ landingData.products.description }
				titleMobile={ landingData.products.titleMobile }
				viewAll={ landingData.products.viewAll }
				viewAllMobile={ false }
			/>
		</div>
	);
};

export default ProductsSection;