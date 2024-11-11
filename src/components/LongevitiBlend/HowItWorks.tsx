'use client';
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import longevitiBlendData from '@/constant/data/longevitiBlend';
import clsxm from '@/helpers/clsxm';

import { TickCircle } from '../Icons';

import 'swiper/css';

const data = longevitiBlendData.howItWorks

const HowItWorks = () => {

	const swiperRef = useRef<SwiperType>(undefined);
	const [activeSlide, setActiveSlide] = useState(0)

	return (
		<div className='lg:px-3'>
			<div className='container-center'>
				<div className='max-w-[525px] text-center mx-auto'>
					<h2 className='lg:h3 h5'>How It Works</h2>
					<p className='body-small'>Your bloodwork data is used to craft a personalized, nutriceutical-grade ingredient mix specifically tailored to your needs.</p>
				</div>
				<div className='mt-16'>
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
						{ data.map((item, productIdx) => {
							return (
								<SwiperSlide key={ productIdx }>
									<div className='flex flex-col bg-grey-primary-light h-[425px] self-stretch flex-1 border border-grey-50 overflow-hidden gap-4 lg:gap-6 p-3.5 rounded-[18px]'>
										<div className='w-full h-[233px] overflow-hidden'>
											<Image
												src={ item.image ?? '' }
												alt={ 'doctor' }
												width={ 300 }
												height={ 300 }
												className='object-cover w-full h-full'
											/>
										</div>
										<div className='flex items-start gap-4'>
											<TickCircle className='flex-shrink-0 h-[18px] w-[18px] text-[#4AADF6]' />
											<div>
												<p className='h6'>{ item.title }</p>
												<p className='body-small mt-1'>{ item.desc }</p>
											</div>
										</div>
									</div>
								</SwiperSlide>
							);
						}) }
					</Swiper>
					<div className='flex items-center lg:hidden justify-center gap-1 mt-7'>
						{ data.map((_, idx) => (
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
	)
}

export default HowItWorks