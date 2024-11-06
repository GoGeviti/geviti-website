import React from 'react';
import dynamic from 'next/dynamic';

import { landingData } from '@/constant/data';
import { Product } from '@/payload/payload-types';
import { getProducts } from '@/services/products';

const DiscoverGeviti = dynamic(() => import('../DiscoverGeviti'), {
	// ssr: false,
});

const ProductsSection: React.FC = async() => {

	let productsData: Product[] = [];

	try {
		productsData = (await getProducts()).docs;
	} catch (error) {
		
	}

	return (
		<div
			id='landing-discover-geviti'
			className='pb-16 lg:pt-[81px] lg:pb-[105px]'
		>
			<DiscoverGeviti
				products={ productsData }
				title={ landingData.products.title }
				description={ landingData.products.description }
			/>
		</div>
	);
};

export default ProductsSection;
