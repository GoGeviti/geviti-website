'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { packagesData } from '@/constant/data';
import { IProducts } from '@/interfaces';

import AdditionalServices from './AdditionalServices';
import OrderSummary from './OrderSummary';

type ContentProps = {
	product?: IProducts.ProductItem | null;
};

const Content: React.FC<ContentProps> = ({ product }) => {
	const searchParams = useSearchParams();
	const [shoppingCarts, setShoppingCarts] = useState<IProducts.ProductItem[]>(product ? [product] : []);

	useEffect(() => {
		const selectedPackage = searchParams?.get('package');
		if (selectedPackage) {
			const select = packagesData.find(
				e => e.id.toString() === selectedPackage
			) as IProducts.ProductItem;
			if (selectedPackage === '5') {
				setShoppingCarts([select]);
			} else {
				setShoppingCarts(prev => {
					return [...prev, select];
				});
			}
		}
	}, [searchParams?.get('package')]);

	return (
		<div className='flex flex-col-reverse lg:grid lg:grid-cols-11 lg:gap-20'>
			<div className='lg:col-span-7'>
				<AdditionalServices
					selectedProduct={ searchParams?.get('selectedProduct') ?? '' }
					shoppingCarts={ shoppingCarts }
					onClickProduct={ (productToAdd: IProducts.ProductItem) =>
						setShoppingCarts(prevCart => [...prevCart, productToAdd]) }
					onClickRemoveProduct={ (productToRemove: IProducts.ProductItem) =>
						setShoppingCarts(prevCart =>
							prevCart.filter(e => e.id !== productToRemove.id)
						) }
				/>
			</div>
			<div className='lg:col-span-4 h-full w-full'>
				<OrderSummary shoppingCarts={ shoppingCarts } />
			</div>
		</div>
	);
};

export default Content;
