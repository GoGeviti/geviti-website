import React from 'react';

import { membershipData } from '@/constant/data';
import { getProducts } from '@/services/products';

import DiscoverGeviti from '../DiscoverGeviti';

const ProductsSection: React.FC = async() => {
	const products = await getProducts();

	return (
		<div className='pb-16 lg:pb-[65px]'>
			<DiscoverGeviti
				title={ membershipData.products.title }
				description={ membershipData.products.description }
				products={ products.docs }
			/>
		</div>
	);
};

export default ProductsSection;
