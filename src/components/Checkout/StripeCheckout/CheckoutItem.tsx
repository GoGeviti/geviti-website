'use client';

import React, { FC, useState } from 'react';
// import { isArray } from 'lodash';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import Skeleton from '@/components/Skeleton/Skeleton';
import clsxm from '@/helpers/clsxm';
import { formatPrice } from '@/lib/formatPrice';
// import { monthlyOrQuarterly } from './StripeCheckout';
import { useCheckoutStore } from '@/store/checkoutStore';

// import { ProductsResponse } from '../api/types';

interface ICheckoutItem {
	// name?: string;
	// price?: number;
	// plan?: string;
	metadata?: string;
	icon?: React.JSX.Element;
	// loading: boolean;
	// productPrices? : ProductsResponse['productPrices'];
	// priceId: string
}
const CheckoutItem: FC<ICheckoutItem> = ({
	// name,
	// price,
	// plan,
	metadata,
	icon,
	// loading,
	// productPrices
}) => {
	const [openPopover, setOpenPopover] = useState(false);
	const [openPlanSelector, setOpenPlanSelector] = useState(false);

	const router = useRouter();
	const pathname = usePathname();
	const query = useSearchParams();

	const { selectedProductPrice, productMembership, loading, setSelectedProductPrice } = useCheckoutStore();

	const handleChangePriceId = (newPriceId:string) => {
		const params = new URLSearchParams(query);
		params.set('price_id', newPriceId);

		setSelectedProductPrice(productMembership?.productPrices?.find(e => e.priceId === newPriceId) ?? null);
		setOpenPopover(false);

		router.push(`${pathname}?${params.toString()}`);
	};

	// Check if we have price_id and product_id from search params
	const productId = query.get('product_id');
	const priceId = query.get('price_id');
	const showFallbackValues = !priceId && !productId;

	// Fallback values when no price_id and product_id
	const displayProductName = showFallbackValues ? 'Free' : productMembership?.productName;
	const displayBillingFrequency = showFallbackValues ? 'Pay-as-you-go flexibility' : selectedProductPrice?.billingFrequency;

	const handleSelectMembership = () => {
		if (productMembership && productMembership.productPrices.length > 0) {
			const params = new URLSearchParams(query);
			const defaultPrice = productMembership.productPrices.find(p => p.isDefault) || productMembership.productPrices[0];
			
			params.set('product_id', productMembership.productId.toString());
			params.set('price_id', defaultPrice.priceId);
			
			setSelectedProductPrice(defaultPrice);
			setOpenPlanSelector(false);
			
			router.push(`${pathname}?${params.toString()}`);
		}
	};

	const handleSelectFree = () => {
		const params = new URLSearchParams(query);
		params.delete('product_id');
		params.delete('price_id');
		
		setSelectedProductPrice(null);
		setOpenPlanSelector(false);
		
		router.push(`${pathname}?${params.toString()}`);
	};

	return (
		<div className='flex border-b-2 border-grey-950 lg:border-none'>
			<div className='flex items-center justify-center min-w-[53px] h-[53px] lg:min-w-[71px] lg:h-[71px] bg-blue-primary rounded-[10px]'>
				{ icon }
			</div>
			<div className='flex flex-col w-full lg:flex-row'>
				<div className='ml-6 flex flex-col justify-around'>
					<Skeleton
						loading={ loading }
						className='h-7 w-60'>
						<div className='flex items-center gap-2'>
							<h3 className='inline-block text-white text-lg lg:text-2xl'>{ displayProductName }</h3>
							{ /* Plan selector dropdown */ }
							<Popover
								open={ openPlanSelector }
								onOpenChange={ setOpenPlanSelector }>
								<PopoverTrigger
									onClick={ e => e.preventDefault() }
									className='flex focus:ring-0 focus:outline-none focus:border-none'
								>
									<div
										onClick={ () => setOpenPlanSelector(!openPlanSelector) }
										className='flex items-center gap-1 text-grey-primary text-sm hover:text-white transition-colors cursor-pointer'>
										<svg
											width='10'
											height='7'
											viewBox='0 0 10 7'
											fill='none'
											className={ clsxm(
												'transition-all ease-in-out',
												!openPlanSelector ? 'rotate-180' : 'rotate-0'
											) }
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M9 5.5L5 1.5L1 5.5'
												stroke='currentColor'
												strokeWidth='1.25'
												strokeLinecap='round'
												strokeLinejoin='round'/>
										</svg>
									</div>
								</PopoverTrigger>
								<PopoverContent
									side='top'
									align='start'
									className='border flex flex-col gap-3 rounded-[9px] w-[200px] border-[#3B3C3E] bg-[#252627] shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] p-3'
								>
									<button
										onClick={ handleSelectFree }
										className={ clsxm(
											'flex items-center justify-between p-2 rounded hover:bg-[#3B3C3E] transition-colors text-left',
											showFallbackValues && 'bg-[#3B3C3E]'
										) }>
										<span className={ clsxm(
											'font-Poppins text-sm',
											showFallbackValues ? 'text-[#ECF8FF]' : 'text-grey-primary'
										) }>Free</span>
										{ showFallbackValues && (
											<svg
												width='16'
												height='17'
												viewBox='0 0 16 17'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<rect
													x='4'
													y='4.5'
													width='8'
													height='8'
													rx='4'
													fill='#99D4FF'/>
												<rect
													x='0.5'
													y='1'
													width='15'
													height='15'
													rx='7.5'
													stroke='#99D4FF'/>
											</svg>
										) }
									</button>
									{ productMembership && (
										<button
											onClick={ handleSelectMembership }
											className={ clsxm(
												'flex items-center justify-between p-2 rounded hover:bg-[#3B3C3E] transition-colors text-left',
												!showFallbackValues && 'bg-[#3B3C3E]'
											) }>
											<span className={ clsxm(
												'font-Poppins text-sm',
												!showFallbackValues ? 'text-[#ECF8FF]' : 'text-grey-primary'
											) }>Membership</span>
											{ !showFallbackValues && (
												<svg
													width='16'
													height='17'
													viewBox='0 0 16 17'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<rect
														x='4'
														y='4.5'
														width='8'
														height='8'
														rx='4'
														fill='#99D4FF'/>
													<rect
														x='0.5'
														y='1'
														width='15'
														height='15'
														rx='7.5'
														stroke='#99D4FF'/>
												</svg>
											) }
										</button>
									) }
								</PopoverContent>
							</Popover>
						</div>
					</Skeleton>
					<Skeleton
						loading={ loading }
						className='h-5 w-[50%]'>
						<div className='relative'>
							{
								!showFallbackValues && (productMembership?.productPrices?.length ?? 0) > 1 ? (
									<Popover
										open={ openPopover }
										onOpenChange={ setOpenPopover }>
										<PopoverTrigger
											onClick={ e => e.preventDefault() }
											className='flex max-sm:w-full focus:ring-0 focus:outline-none focus:border-none'
										>
											<div
												onClick={ () => setOpenPopover(!openPopover) }
												className='flex items-center gap-2 text-grey-primary capitalize text-sm'>
												<span>{ `Billed ${displayBillingFrequency}` } </span>
												<svg
													width='10'
													height='7'
													viewBox='0 0 10 7'
													fill='none'
													className={ clsxm(
														'transition-all ease-in-out',
														!openPopover ? 'rotate-180' : 'rotate-0'
													) }
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M9 5.5L5 1.5L1 5.5'
														stroke='#919B9F'
														strokeWidth='1.25'
														strokeLinecap='round'
														strokeLinejoin='round'/>
												</svg>
											</div>

										</PopoverTrigger>
										<PopoverContent
											side='top'
											align='start'
											className='border flex flex-col gap-3 rounded-[9px] w-[302px] border-[#3B3C3E] bg-[#252627] shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)] p-3'
										>
											{
												productMembership?.productPrices?.map(e => {
													return (
														<div
															key={ e.priceId }
															className='flex items-center justify-between'>
															<div>
																<span className={ clsxm(
																	'font-Poppins text-sm text-[#ECF8FF] capitalize',
																	e.priceId !== selectedProductPrice?.priceId && 'text-grey-primary'
																) }>{ `Billed ${e?.billingFrequency}` }</span>
																<p className='font-Poppins text-xs text-grey-primary'>{ formatPrice(e.price.toString() ?? '0') }</p>
															</div>
															<button onClick={ () => handleChangePriceId(e.priceId) }>
																{
																	e.priceId === selectedProductPrice?.priceId ? (
																		<svg
																			width='16'
																			height='17'
																			viewBox='0 0 16 17'
																			fill='none'
																			xmlns='http://www.w3.org/2000/svg'>
																			<rect
																				x='4'
																				y='4.5'
																				width='8'
																				height='8'
																				rx='4'
																				fill='#99D4FF'/>
																			<rect
																				x='0.5'
																				y='1'
																				width='15'
																				height='15'
																				rx='7.5'
																				stroke='#99D4FF'/>
																		</svg>

																	) : (
																		<svg
																			width='16'
																			height='17'
																			viewBox='0 0 16 17'
																			fill='none'
																			xmlns='http://www.w3.org/2000/svg'>
																			<rect
																				x='0.5'
																				y='1'
																				width='15'
																				height='15'
																				rx='7.5'
																				stroke='#6A6E70'/>
																		</svg>

																	)
																}
															</button>
														</div>
													)
												})
											}
										</PopoverContent>
									</Popover>
								) : (
									<div className='flex items-center gap-2 text-grey-primary capitalize text-sm'>
										<span>{ showFallbackValues ? displayBillingFrequency : `Billed ${displayBillingFrequency}` }</span>
									</div>
								)
							}
							
						</div>
					</Skeleton>
				</div>
				<div className='ml-6 my-6 lg:my-0 lg:ml-auto flex flex-col justify-around text-grey-primary lg:text-right'>
					<Skeleton
						loading={ loading }
						className='h-5 w-28'>

						<p className='text-lg'>{ showFallbackValues ? '$0' : formatPrice(selectedProductPrice?.price.toString() ?? '0') }</p>
					</Skeleton>
					<Skeleton
						loading={ loading }
						className='h-4 w-[50%]'>
						<span className='text-xs whitespace-nowrap leading-7'>{ metadata }</span>
					</Skeleton>
				</div>
			</div>
		</div>
	);
};

export default CheckoutItem;
