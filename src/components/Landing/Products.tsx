import React from 'react';

import { landingData } from '@/constant/data';

import DiscoverGeviti from '../DiscoverGeviti';

const ProductsSection: React.FC = async() => {
	return (
		<div className='pt-16 pb-16 lg:pt-[72px] lg:pb-[60px]'>
			<DiscoverGeviti
				title={ landingData.products.title }
				description={ landingData.products.description }
			/>
		</div>
	);
};

export default ProductsSection;
