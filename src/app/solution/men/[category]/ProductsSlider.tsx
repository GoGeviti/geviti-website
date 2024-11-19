'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Product } from '@/payload/payload-types';

const Card = (product:Product) => {
	const pathName = usePathname();
	return (
		<div className='w-[319px] flex-shrink-0 lg:w-1/4 max-lg:pb-3'> { /* Added padding wrapper */ }
			<div className='h-full flex flex-col bg-white shadow-[0px_1px_15.2px_0px_rgba(0,0,0,0.10)] rounded-2xl p-3.5'>
				<Link
					href={ pathName + '/' + product.slug }
					className='flex flex-col h-full'>
					<div className='flex items-center justify-center bg-blue-primary rounded-[14px] overflow-hidden'>
						<Image
							src={ product.image.url ?? '' }
							alt={ product.name }
							width={ 226 }
							height={ 226 }
							className='object-contain'
						/>
					</div>
					<div className='flex flex-col flex-grow gap-2 mt-3.5'>
						<h5 className='h5'>{ product.name }</h5>
						<p className='body-extra-small text-primary'>{ product.description }</p>
						<p className='body-small text-primary mt-auto'>
							{ typeof product?.price === 'string'
								? product?.price
								: (
									<>
										<span className='body-small'>As low as</span>
										<span className='h6 text-primary'>${ product.price }/m</span>
									</>
								) }
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

const ProductsSlider:React.FC<{products : Product[]}> = ({ products }) => {
	return (
		<div className='lg:px-3 max-lg:mt-16'>
			<div className='container-center'>
				<div className='lg:pb-[89px] pt-16'>
					<div className='flex flex-col lg:flex-row items-start justify-between'>
						<div className='w-full'>
							<h3 className='text-2xl lg:text-4xl font-medium text-primary'>
                Hormone optimization options
							</h3>
						</div>
						<div className='flex flex-col gap-8 max-w-[533px] lg:gap-16 max-lg:mt-3'>
							<p className='text-primary text-sm'>The FDA&apos;s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.</p>
						</div>
					</div>
					<div className='mt-16 flex no-scrollbar lg:justify-center items-stretch lg:flex-wrap max-lg:overflow-x-auto gap-5 lg:gap-16'>
						{ products.map((product, index) => (
							<Card
								key={ index }
								{ ...product }
							/>
						)) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsSlider;