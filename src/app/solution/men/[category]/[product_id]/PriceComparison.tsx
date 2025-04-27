import React from 'react';
import Image from 'next/image';

import gevitiLogo from '@/assets/precheckout/geviti-logo.svg';
import { Product } from '@/payload/payload-types';

interface PriceComparisonProps {
  product: Product;
}

const PriceComparison: React.FC<PriceComparisonProps> = ({ product }) => {
	return (
		<div className='lg:px-3 my-16 lg:my-[124px]'>
			<div className='container-center'>
				<div>
					<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
            More, for less with Geviti
					</h3>
					<p className='body-small max-w-[600px]'>Lorem ipsum dolor sit amet consectetur. Sed posuere aliquet malesuada gravida velit massa nunc. Nunc at nunc nibh pretium</p>
				</div>
				<div className='mt-10 flex lg:flex-row flex-col items-center gap-5 justify-between'>
					<div>
						<h6 className='h6'>Compare price</h6>
						<h3 className='h3 leading-none max-w-[400px]'>{ product.name }</h3>
					</div>
					{ product.costComparison?.geviti?.price && (
						<div className='bg-white max-lg:w-full flex flex-col items-center justify-center p-9 text-center rounded-[20px] shadow-price-comparison'>
							<Image
								src={ gevitiLogo }
								width={ 85 }
								height={ 20 }
								alt=''
								unoptimized
							/>
							<h6 className='h6 text-green-alert mt-4'>{ product.costComparison?.geviti?.price }</h6>
						</div>
					) }
					<div className='flex flex-col items-center max-lg:shadow-price-comparison max-lg:w-full p-9 rounded-[20px] justify-center text-center'>
						<h5 className='h5 text-grey-primary'>{ product.costComparison?.competitor1?.name }</h5>
						<h6 className='h6 text-yellow-alert mt-2.5'>{ product.costComparison?.competitor1?.price }</h6>
					</div>
					<div className='flex flex-col items-center max-lg:shadow-price-comparison max-lg:w-full p-9 rounded-[20px] justify-center text-center'>
						<h5 className='h5 text-grey-primary'>{ product.costComparison?.competitor2?.name }</h5>
						<h6 className='h6 text-yellow-alert mt-2.5'>{ product.costComparison?.competitor2?.price }</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceComparison;