/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import Image from 'next/image';
// import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { AlertSquareIcon } from '@/components/Icons';
// import { productListData } from '@/constant/data';
import { Product } from '@/payload/payload-types';
import { useProductStore } from '@/store/productStore';
type GroupedProduct = { category: string; products: Product[] };

type ProductType = {
	products: Product[];
};

const ProductList: React.FC<ProductType> = ({ products: productsData }) => {
	const router = useRouter();

	const { filterValues, query } = useProductStore();

	const groupByCategory = Object.entries(
		productsData.reduce((acc: { [key: string]: Product[] }, curr) => {
			const category = curr?.category?.title;
			// Group initialization
			if (!acc[category]) {
				acc[category] = [];
			}

			acc[category].push(curr);

			return acc;
		}, {})
	).map(([category, products]) => ({ category, products }));

	const filterProductsByCategory = () => {
		let filterByCategories: GroupedProduct[] = groupByCategory;
		filterValues.forEach(filter => {
			const options = filter.options?.reduce((filtered: string[], option) => {
				if (option.checked) {
					filtered.push(option.value.toString());
				}
				return filtered;
			}, []);

			if (filter.id === 'ingredients' && options?.length) {
				filterByCategories = filterByCategories.filter(item => {
					return options?.some(category => category === item.category);
				});
			} else {
				filterByCategories = filterByCategories.map((item: any) => {
					if (options.length) {
						return {
							...item,
							products: item.products.filter(
								(product: any) =>
									!!options.find(opt => {
										const productVal = product[filter.id];
										if (
											Array.isArray(productVal) &&
											typeof productVal[0] === 'object'
										) {
											return productVal.some((val: any) => val.title === opt);
										}
										if (Array.isArray(productVal)) {
											return productVal.includes(opt);
										}
										if (typeof productVal === 'boolean') {
											return productVal.toString() === opt.toString();
										}
										if (typeof productVal === 'object') {
											return Object.values(productVal).includes(opt);
										}
										return product[filter.id] === opt;
									})
							),
						};
					}
					return item;
				});
			}
		});

		return query === ''
			? filterByCategories
			: filterByCategories.map(item => ({
				...item,
				products: item.products?.filter(product =>
					product.name
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
				),
			  }));
	};
	const productsByCategory = filterProductsByCategory();
	return (
		<div className='flex flex-col gap-y-[89px] lg:gap-y-36'>
			{ productsByCategory.map(item => (
				<div
					key={ item.category }
					className='text-center lg:text-left'>
					<h3 className='font-Poppins text-primary text-[21px] md:text-3xl lg:text-4xl -tracking-0.04em leading-[121%]'>
						{ item.category }
					</h3>

					<div className='mt-5px sm:mt-9px flex items-center max-lg:flex-col-reverse lg:items-end lg:justify-between gap-3'>
						<div className='sm:max-w-xl lg:max-w-md'>
							<p className='text-grey-primary font-BRSonoma text-xs leading-5 sm:leading-[18px]'>
								{ item.products.find(product => product?.category?.title === item.category)?.category?.description ?? '' }
							</p>
						</div>

						<div className='flex lg:flex-col gap-5px text-primary lg:max-w-[172px]'>
							<AlertSquareIcon className='w-15px h-15px sm:w-18px sm:h-18px flex-shrink-0' />

							<p className='text-[10px] sm:text-xs font-BRSonoma leading-5 sm:leading-[18px] font-medium'>
								Available based on blood test results
							</p>
						</div>
					</div>

					<div className='mt-[35px] sm:mt-10 grid grid-cols-2 md:grid-cols-3 gap-5'>
						{ item.products.map(product => (
							<div
								key={ product.id }
								className='group cursor-pointer relative flex flex-col overflow-hidden bg-grey-secondary w-full text-left'
								onClick={ () => router.push(`/products/${product.id}`) }
							>
								<div className='relative overflow-hidden bg-[#E7E7E7] group-hover:opacity-75 w-full h-[202px]'>
									{ product.images.length > 0 && (
										<Image
											priority={ true }
											src={
												product.images.length > 0
													? product.images[0].image.url ?? ''
													: ''
											}
											alt={
												product.images.length > 0
													? product.images[0].image.alt ?? ''
													: ''
											}
											className='object-cover object-center'
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											fill
										/>
									) }

									{ product.bloodTest && (
										<div className='absolute bottom-0 right-0 p-1.5 sm:p-2'>
											<AlertSquareIcon className='w-15px h-15px sm:w-18px sm:h-18px flex-shrink-0' />
										</div>
									) }
								</div>
								<div className='flex flex-1 flex-col space-y-1 py-[13px] sm:py-18px px-[13px] sm:px-[21px]'>
									<h4 className='font-Poppins text-sm font-medium text-primary leading-[146%] -tracking-0.04em'>
										{ product.name }
									</h4>
									<p className='text-xs font-BRSonoma leading-[134%] text-grey-primary'>
										{ product.description }
									</p>
									<div className='flex flex-1 flex-col justify-end font-BRSonoma text-primary pt-18px'>
										{ product.price && (
											<p className='text-xs lg:text-[15px] leading-[130%] lg:leading-[100%] font-BRSonoma'>
												${ product.price } <span className='text-grey-primary max-lg:text-[10px] lg:text-sm'>per month</span>
											</p>
										) }
									</div>
								</div>
							</div>
						)) }
					</div>
				</div>
			)) }
		</div>
	);
};

export default ProductList;
