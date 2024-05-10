import React from 'react';

import { landingData } from '@/constant/data';
import { getProducts } from '@/services/products';

import DiscoverGeviti from '../DiscoverGeviti';

const ProductsSection: React.FC = async() => {
	const products = await getProducts();
	return (
		<div className='py-10 sm:py-20 products-page'>
			<DiscoverGeviti
				title={ landingData.products.title }
				description={ landingData.products.description }
				productsWrapperClassName='mt-[49px] lg:mt-[50px]'
				products={ products.docs }
			/>
		</div>
	);
};

export default ProductsSection;
