'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { howItWorksData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { ChevronRight } from '../Icons';

const product = howItWorksData.product;

const Product:  React.FC = () => {
	const [hoveredItem, setHoveredItem] = useState(1);
	const handleMouseEnter = (id:number) => {
		setHoveredItem(id);
	};
	return (
		<div className='overflow-hidden'>
			<div className='h-full w-full lg:rounded-[19px] relative overflow-hidden mt-[70px] lg:mt-[143px]'>
				<div className='container-center mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-2 lg:gap-5 '>
						{ product.map((items, id) => {
							return (
								(
									<div
										key={ id }
										onMouseEnter={ () => handleMouseEnter(id) }
										className={ clsxm('bg-product-2 bg-product-1 bg-product-3 bg-product-4 p-[22px] lg:p-[30px] relative rounded-lg flex flex-col max-lg:space-x-5 items-center lg:transform lg:transition-all lg:duration-100 lg:ease-in', items.className, hoveredItem === id ? 'h-[181px] lg:h-[402px] w-full xl:w-[300px]' : 'h-[181px] lg:h-[386px] w-full xl:w-[288px]') }
									>
										<div className='w-full h-full flex flex-col justify-between'>
											<Image
												src={ items.image }
												alt={ items.title }
												className='absolute bottom-0 right-0 h-full lg:h-[70%] w-auto rounded-b-lg z-0'
												width={ 225 }
												height={ 293 }
											/>
											<div>
												<h4 className='text-base lg:text-xl font-Poppins text-primary leading-7 font-medium'>
													<span
														className='lg:block hidden'
														dangerouslySetInnerHTML={ { __html: items.title } } />
													<span
														className='lg:hidden'
														dangerouslySetInnerHTML={ { __html: items.titleMobile } } />
												</h4>
												<p className='text-xs leading-5 text-primary/[0.51] font-Poppins w-[70%] lg:w-[90%] mt-2'> { items.desc }</p></div>
											<div className='flex space-x-2 justify-start items-center z-10'>
												<p className='text-primary font-Poppins text-xs font-semibold leading-5'>{ items.btn }</p>
												<ChevronRight/>
											</div>
										</div>
									
									</div>
								)
							);
						}) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
