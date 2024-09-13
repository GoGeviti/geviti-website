import React from 'react';
import dynamic from 'next/dynamic';

import { ProductsResponse } from '../Checkout/api/types';

const Download = dynamic(() => import('../Pricing/Download'), {
	ssr: false,
});
const Hero = dynamic(() => import('../Pricing/Hero'), {
	ssr: false,
});
const PricingBiomarkers = dynamic(
	() => import('../Pricing/PricingBiomarkers'),
	{
		ssr: false,
	}
);

type PricingProps = {
  products?: ProductsResponse[];
};

const Pricing: React.FC<PricingProps> = ({ products }) => {
	if (products?.length) {
		return (
			<div
				id='pricing'
				className='lg:px-3 lg:py-6 overflow-hidden'>
				<div className='lg:bg-white lg:rounded-[19px]'>
					<Hero
						products={ products }
						isFromHomePage={ true }
						navbar={ false }
						className='!pt-[52px] lg:!pt-[164px]'
					/>
					<PricingBiomarkers />
					<div className='max-lg:overflow-hidden pb-[42px] lg:pb-[64px] lg:pt-[118px]'>
						<Download />
					</div>
				</div>
			</div>
		);
	}

	return null;
};

export default Pricing;
