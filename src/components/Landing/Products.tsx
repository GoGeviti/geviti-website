import React from 'react';

import { landingData } from '@/constant/data';

import DiscoverGeviti from '../DiscoverGeviti';

const ProductsSection: React.FC = async() => {
	return (
		<div
			id='landing-discover-geviti'
			className='pb-16 lg:pt-[81px] lg:pb-[105px]'
		>
			<DiscoverGeviti
				title={ landingData.products.title }
				description={ landingData.products.description }
			/>
		</div>
	);
};

export default ProductsSection;
