'use client';

import React, { useState } from 'react';

import { statesData } from '@/constant/data';
import { IProducts } from '@/interfaces';

import AdditionalServices from './AdditionalServices';
import OrderSummary from './OrderSummary';

const Content: React.FC = () => {
	const [state, setState] = useState<string>(statesData.options[0].value);
	const [shoppingCarts, setShoppingCarts] = useState<IProducts.ProductItem[]>([
		{
			id: 1,
			name: 'Product Name',
			price: 256,
			description: 'Product Info',
			priceValue: 39.99,
			imageSrc: '/images/home/product_1.png',
			imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
		}
	]);

	return (
		<div className='flex flex-col-reverse lg:grid lg:grid-cols-11 lg:gap-20'>
			<div className='lg:col-span-7'>
				<AdditionalServices
					shoppingCarts={ shoppingCarts }
					onClickProduct={ (productToAdd: IProducts.ProductItem) => setShoppingCarts(prevCart => ([...prevCart, productToAdd])) }
					state={ state }
					setState={ setState }
				/>
			</div>
			<div className='lg:col-span-4 h-full w-full'>
				<OrderSummary shoppingCarts={ shoppingCarts } />
			</div>
		</div>
	);
};

export default Content;
