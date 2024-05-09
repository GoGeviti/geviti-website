'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import clsxm from '@/helpers/clsxm';

import 'swiper/css/thumbs';

import 'swiper/css';

type SliderProductsProps = {
	images: string[];
};

const SliderProducts: React.FC<SliderProductsProps> = ({ images }) => {
	const swiperRef = useRef<SwiperType>();
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<React.Fragment>
			<div className='w-full bg-white h-full overflow-hidden max-h-[462px] aspect-square rounded-lg flex flex-col items-center justify-center relative'>
				<div className='w-full mx-auto'>
					<Swiper
						pagination={ {
							clickable: true,
						} }
						onBeforeInit={ swiper => {
							swiperRef.current = swiper;
						} }
						thumbs={ { swiper: thumbsSwiper } }
						onSlideChange={ swiper => setActiveIndex(swiper.activeIndex) }
						modules={ [Thumbs] }
					>
						{ images?.map((image, imageIdx) => {
							return (
								<SwiperSlide key={ imageIdx }>
									<div className='w-full h-full max-h-[462px] relative overflow-hidden aspect-square focus:ring-0 focus:outline-none focus:border-none'>
										<Image
											src={ image }
											alt='slider'
											priority={ true }
											fill
											className='object-cover'
											unoptimized
										/>
									</div>
								</SwiperSlide>
							);
						}) }
					</Swiper>
				</div>
				<div className='flex items-center z-10 absolute left-1/2 -translate-x-1/2 bottom-3 lg:bottom-6 justify-center gap-3'>
					{ Array.from(Array(images.length).keys()).map(i => {
						return (
							<div
								key={ i }
								className={ clsxm(
									'rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary cursor-pointer',
									i === activeIndex ? 'bg-opacity-100' : 'bg-opacity-[0.13]'
								) }
								onClick={ () => swiperRef?.current?.slideTo(i) }
							/>
						);
					}) }
				</div>
			</div>
			<Swiper
				onSwiper={ setThumbsSwiper }
				spaceBetween={ 14 }
				slidesPerView={ 5 }
				modules={ [Thumbs] }
				className='mt-6'
				breakpoints={ {
					0: {
						slidesPerView: 4,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 14,
					},
				} }
			>
				{ images?.map((image, imageIdx) => {
					return (
						<SwiperSlide key={ imageIdx }>
							<div
								className={ clsxm(
									'w-full h-full max-h-[84px] relative bg-white cursor-pointer rounded-lg overflow-hidden aspect-square',
									imageIdx === activeIndex ? 'opacity-100' : 'opacity-25'
								) }
							>
								<Image
									src={ image }
									alt='slider'
									priority={ true }
									fill
									className='object-cover'
									unoptimized
								/>
							</div>
						</SwiperSlide>
					);
				}) }
			</Swiper>
		</React.Fragment>
	);
};

export default SliderProducts;
