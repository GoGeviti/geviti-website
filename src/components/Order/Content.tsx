'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { packagesData } from '@/constant/data';
import { IProducts } from '@/interfaces';

import AdditionalServices from './AdditionalServices';
import OrderSummary from './OrderSummary';

const Content: React.FC = () => {
	const searchParams = useSearchParams();
	const [shoppingCarts, setShoppingCarts] = useState<IProducts.ProductItem[]>([
		{
			id: 1,
			name: 'Clinical Consultation ',
			price: 139.99,
			description: 'Product Info',
			value: '$300+',
			imageSrc: '/images/home/product_1.png',
			imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
		}
	]);

	useEffect(() => {
		const selectedProduct = searchParams.get('selectedProduct');
		if (selectedProduct) {
			const select = packagesData.find(e => e.id.toString() === selectedProduct) as IProducts.ProductItem;
			if (selectedProduct === '5') {
				setShoppingCarts([select]);
			} else {
				setShoppingCarts(prev => {
					return [
						...prev,
						select
					];
				});
			}
		}
	}, [searchParams.get('selectedProduct')]);

	return (
		<div className='flex flex-col-reverse lg:grid lg:grid-cols-11 lg:gap-20'>
			<div className='lg:col-span-7'>
				<AdditionalServices
					selectedProduct={ searchParams.get('selectedProduct') ?? '' }
					shoppingCarts={ shoppingCarts }
					onClickProduct={ (productToAdd: IProducts.ProductItem) => setShoppingCarts(prevCart => ([...prevCart, productToAdd])) }
					onClickRemoveProduct={ (productToRemove: IProducts.ProductItem) => setShoppingCarts(prevCart => (prevCart.filter(e => e.id !== productToRemove.id))) }
				/>
			</div>
			<div className='lg:col-span-4 h-full w-full'>
				<OrderSummary
					shoppingCarts={ shoppingCarts }
				/>
			</div>
		</div>
	);
};

export default Content;
