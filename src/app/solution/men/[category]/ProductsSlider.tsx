'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import clsxm from '@/helpers/clsxm';
import { Product } from '@/payload/payload-types';

import 'swiper/css';

const Card = (product:Product) => {
	const pathName = usePathname();
	return (
		<div className='w-full flex-shrink-0 lg:w-1/4 max-lg:p-4'> { /* Added padding wrapper */ }
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
							loading='eager'
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

type ProductsSliderType = {
	products : Product[]
	hormoneTreatment?: {
    title?: string | null;
    description?: string | null;
  };
}

const ProductsSlider:React.FC<ProductsSliderType> = ({ products, hormoneTreatment }) => {
	const swiperRef = useRef<SwiperType>(undefined);
	const [activeSlide, setActiveSlide] = useState(0)
	return (
		<div className='lg:px-3'>
			<div className='container-center'>
				<div className='lg:pb-[89px] pt-16'>
					<div className='flex flex-col lg:flex-row items-start justify-between'>
						<div className='w-full'>
							<h3 className='text-2xl lg:text-4xl font-medium text-primary'>
								{ hormoneTreatment?.title }
							</h3>
						</div>
						<div className='flex flex-col gap-8 max-w-[533px] lg:gap-16 max-lg:mt-3'>
							<p className='text-primary text-sm'>{ hormoneTreatment?.description }</p>
						</div>
					</div>
					<div className='mt-16 max-lg:hidden flex no-scrollbar lg:justify-center items-stretch lg:flex-wrap max-lg:overflow-x-auto gap-5 lg:gap-16'>
						{ products.map((product, index) => (
							<Card
								key={ index }
								{ ...product }
							/>
						)) }
					</div>
					<div className='lg:hidden mt-11'>
						<Swiper
							onBeforeInit={ swiper => {
								swiperRef.current = swiper;
							} }
							onSlideChange={ swiper => {
								setActiveSlide(swiper.activeIndex)
							} }
							slidesPerView={ 4 }
							breakpoints={ {
								0: {
									slidesPerView: 1,
									spaceBetween: 24,
									slidesOffsetAfter: 16,
									allowTouchMove: true,
								},
								768: {
									slidesPerView: 4,
									spaceBetween: 24,
									allowTouchMove: false,
								},
							} }
							spaceBetween={ 24 }
							slidesOffsetAfter={ 16 }
						>
							{ products.map((product, index) => (
								<SwiperSlide key={ index }>
									<Card
										key={ index }
										{ ...product }
									/>
								</SwiperSlide>
							)) }
						</Swiper>
						<div className='flex items-center lg:hidden justify-center gap-1'>
							{ products.map((_, idx) => (
								<div
									key={ idx }
									className='relative w-2 h-2'
									onClick={ () => {
										swiperRef.current?.slideTo(idx);
									} }
								>
									<div className={ clsxm(
										'w-2 h-2 rounded-full bg-grey-100'
									) } />
									{ idx === activeSlide && (
										<motion.div
											layoutId='activeBullet'
											className='absolute inset-0 rounded-full bg-blue-primary'
											transition={ {
												type: 'spring',
												stiffness: 350,
												damping: 30
											} }
										/>
									) }
								</div>
							)) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsSlider;