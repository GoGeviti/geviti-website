'use client';

import React, { useState } from 'react';

import { IProducts } from '@/interfaces';

type OrderSummaryProps = {
	state: string;
	shoppingCarts: IProducts.ProductItem[];
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ state, shoppingCarts }) => {
	const [checkedPrivacy, setCheckedPrivacy] = useState<boolean>(false);

	const renderSubtotal = () => {
		const subtotalPrice = shoppingCarts.reduce((acc, curr) => acc + (curr.price || 0), 0);

		return (
			<div className='text-grey-secondary'>
				<p className='mb-3 font-BRSonoma text-sm leading-5'>Subtotal</p>
				<p className='font-Poppins text-xl font-medium'>${ subtotalPrice.toFixed(2) }</p>
			</div>
		);

	};
	return (
		<div>
			<div className='flex flex-col gap-y-8'>
				<p className='text-grey-secondary text-sm leading-5 font-BRSonoma'>Order Summary</p>

				<ul
					role='list'
					className='flex flex-col gap-y-8 border-b border-black-secondary pb-[26px]'
				>
					{ shoppingCarts.map((product, productIdx) => (
						<li
							key={ productIdx }
							className='flex items-center text-grey-secondary'
						>
							<div className='w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-[6px] bg-black-secondary'>
								<span className='font-Poppins text-sm font-medium text-center'>x1</span>
							</div>
							<div className='ml-[17px] flex-auto'>
								<h4 className='font-medium text-sm font-Poppins line-clamp-1'>
									{ product.name }
								</h4>
								<p className='text-xl font-medium font-Poppins'>${ product.price }</p>
							</div>
						</li>
					)) }
				</ul>
			</div>

			<div className='pt-[17px]'>
				{ renderSubtotal() }
			</div>

			<div className='mt-[26px]'>
				<button
					disabled={ !state || !checkedPrivacy }
					className='btn btn-secondary w-full disabled:bg-black-secondary disabled:text-[#383B3F] text-xs font-medium leading-[159%] font-Poppins text-black-secondary'>
					Proceed to checkout
				</button>
			</div>

			<div className='relative flex items-start mt-[26px]'>
				<div className='flex h-6 items-center'>
					<input
						id='policy'
						name='policy'
						type='checkbox'
						checked={ checkedPrivacy }
						onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setCheckedPrivacy(e.target.checked) }
						className='h-4 w-4 bg-transparent rounded border border-blue-1 text-blue-1/25 focus:outline-0 focus:ring-0 focus:ring-offset-0'
					/>
				</div>
				<div className='ml-3 text-grey-secondary text-xs leading-5 font-BRSonoma'>
					<label htmlFor='policy'>
						I have read and agree to the <span className='font-semibold'>Terms and Conditions</span> and <span className='font-semibold'>Privacy Policy</span>.
					</label>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
