'use client';

import React, { FC, useState } from 'react';
import { isArray } from 'lodash';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import Skeleton from '@/components/Skeleton/Skeleton';
import clsxm from '@/helpers/clsxm';

import { ProductsResponse } from '../api/types';

import { monthlyOrQuarterly } from './StripeCheckout';

interface ICheckoutItem {
  name?: string;
  price?: number;
  plan?: string;
  metadata?: string;
  icon?: React.JSX.Element;
	loading: boolean;
	productPrices? : ProductsResponse['productPrices'];
	priceId: string
}
const CheckoutItem: FC<ICheckoutItem> = ({ name, priceId, price, plan, metadata, icon, loading, productPrices }) => {
	const [openPopover, setOpenPopover] = useState(false);

	const router = useRouter();
	const pathname = usePathname();
	const query = useSearchParams();

	const handleChangePriceId = (newPriceId:string) => {
		const params = new URLSearchParams(query);
		params.set('price_id', newPriceId);

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
						<h3 className='inline-block text-white text-lg lg:text-2xl'>{ name }</h3>
					</Skeleton>
					<Skeleton
						loading={ loading }
						className='h-5 w-[50%]'>
						<div className='relative'>
							{
								isArray(productPrices) && productPrices?.length > 1 ? (
									<Popover
										open={ openPopover }
										onOpenChange={ setOpenPopover }>
										<PopoverTrigger
											onClick={ e => e.preventDefault() }
											className='flex max-sm:w-full focus:ring-0 focus:outline-none focus:border-none'
										>
											<div
												onClick={ () => setOpenPopover(!openPopover) }
												className='flex items-center gap-2 text-grey-primary text-sm'>
												<span>{ plan } </span>
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
												productPrices?.map(e => {
													return (
														<div
															key={ e.priceId }
															className='flex items-center justify-between'>
															<div>
																<span className={ clsxm(
																	'font-Poppins text-sm text-[#ECF8FF]',
																	e.priceId !== priceId && 'text-grey-primary'
																) }>{ `Billed ${monthlyOrQuarterly(e.billingFrequency ?? '')}` }</span>
																<p className='font-Poppins text-xs text-grey-primary'>${ e.price }</p>
															</div>
															<button onClick={ () => handleChangePriceId(e.priceId) }>
																{
																	e.priceId === priceId ? (
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
									<div className='flex items-center gap-2 text-grey-primary text-sm'>
										<span>{ plan } </span>
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

						<p className='text-lg'>${ price?.toFixed(2) }</p>
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
