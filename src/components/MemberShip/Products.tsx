import React from 'react';

import { membershipData } from '@/constant/data';

import DiscoverGeviti from '../DiscoverGeviti';

const ProductsSection: React.FC = async() => {
	return (
		<div className='pb-16 lg:pb-[65px]'>
			<DiscoverGeviti
				title={ membershipData.products.title }
				description={ membershipData.products.description }
			/>
		</div>
	);
};

export default ProductsSection;
