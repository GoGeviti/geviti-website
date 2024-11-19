'use client';

import React, {  useEffect, useRef, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Swiper as SwiperType } from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Dialog, DialogContent } from '@/components/Dialog';
import { FadeText } from '@/components/FadeText';
import { ArrowNarrowLeft, ArrowNarrowRight, CheckBlue } from '@/components/Icons';
import clsxm from '@/helpers/clsxm';
import { Product } from '@/payload/payload-types';

import 'swiper/css/thumbs';

import 'swiper/css';

const ProductsSlider:React.FC<{products : Product[]} > = ({ products }) => {

	const swiperRef = useRef<SwiperType>(undefined);
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const pathname = usePathname();
	const [isViewAll, setisViewAll] = useState(false)

	useEffect(() => {
		if (isViewAll) {
			document.body.style.overflow = 'hidden'; // standard no-scroll implementation
			document.body.setAttribute('data-lenis-prevent', 'true'); // Make sure you pass true as string
		} else {
			document.body.removeAttribute('data-lenis-prevent');
			document.body.style.overflow = 'auto';
		}
	}, [isViewAll]);

	const enableLenis = () => {
		document.body.removeAttribute('data-lenis-prevent');
		document.body.style.overflow = 'auto';
	}

	return (
		<div className='lg:px-3 font-Poppins text-white max-lg:mt-10'>
			<div className='bg-primary rounded-[40px] transition-all duration-300 ease-in-out overflow-hidden'>
				<div className='flex flex-col lg:flex-row gap-3 items-start lg:gap-[239px] justify-between pt-[42px] px-5 lg:px-[42px]'>
					<div className='flex flex-col gap-[6px] w-[536px] overflow-hidden'>
						<FadeText
							key={ `category-title-${activeIndex}` }
							text={ products[activeIndex].name }
							direction='up'
							className='font-medium text-3xl lg:text-4xl'/>
						<FadeText
							key={ `category-subtitle-${activeIndex}` }
							text={ products[activeIndex].price }
							framerProps={ {
								show: { transition: { delay: 0.2 } },
							} }
							direction='up'
							className='text-2xl'/>
					</div>
					<div className='flex-1'>
						<FadeText
							key={ `category-desc-${activeIndex}` }
							framerProps={ {
								show: { transition: { delay: 0.3 } },
							} }
							className='text-sm lg:leading-6'
							direction='up'
							text={ products[activeIndex].description }
						/>
					</div>
				</div>
				<div className='mt-16 flex-col lg:flex-row flex relative items-start justify-between max-lg:px-5 lg:gap-[239px] lg:pl-[42px] pb-[42px]'>
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
						className='rounded-xl lg:rounded-[36px] w-full lg:min-w-[536px] lg:w-[536px] aspect-square lg:h-[472px] bg-gradient-blue-products flex items-center justify-center'
					>
						{ products.map((product, productIdx) => {
							return (
								<SwiperSlide key={ productIdx }>
									<div className='w-full h-full flex items-center justify-center'>
										<Image
											src={ product.image.url ?? '' }
											alt='slider'
											// priority={ true }
											quality={ 100 }
											width={ 396 }
											height={ 396 }
											className='object-cover'
										/>
									</div>
								</SwiperSlide>
							);
						}) }
					</Swiper>
					<div className='min-w-0 max-lg:w-full'>
						<div className={ clsxm(
							'flex items-center max-lg:hidden',
							products.length > 2 ? 'justify-between' : 'justify-end'
						) }>
							{
								products.length > 2 && (
									<button
										onClick={ () => setisViewAll(true) }
										className='text-xs text-white underline'>View all</button>
								)
							}
							<div className='flex items-center order-1 gap-[14px] justify-end pr-[42px]'>
								<button
									onClick={ () => swiperRef.current?.slidePrev() }
									className={
										clsxm(
											'w-[34px] h-[34px] rounded-full border flex items-center justify-center',
											activeIndex === 0 ? 'text-grey-primary border-grey-primary' : 'opacity-100 border-white text-white'
										)
									}>
									<ArrowNarrowLeft/>
								</button>
								<button
									onClick={ () => swiperRef.current?.slideNext() }
									className={
										clsxm(
											'w-[34px] h-[34px] rounded-full border flex items-center justify-center',
											activeIndex === products.length - 1 ? 'text-grey-primary border-grey-primary' : 'opacity-100 border-white text-white'
										)
									}>
									<ArrowNarrowRight/>
								</button>
							</div>
						</div>
						<div className='mt-11'>
							<Swiper
								onSwiper={ setThumbsSwiper }
								spaceBetween={ 24 }
								slidesPerView={ 2.3 }
								breakpoints={ {
									0: {
										slidesPerView: 4,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2.3,
										spaceBetween: 24,
									},
								} }
								slidesOffsetAfter={ 42 }
								modules={ [Thumbs] }
								className=''
							>
								{ products.map((product, productIdx) => {
									return (
										<SwiperSlide
											key={ productIdx } >
											<div
												className={ clsxm(
													'w-full h-full lg:h-[270px] max-lg:aspect-square flex items-center py-[22px] justify-center border rounded-lg lg:rounded-[30px] cursor-pointer border-grey-primary overflow-hidden',
													productIdx === activeIndex ? 'opacity-100 bg-grey-950' : ' bg-noneopacity-25',
												) }
											>
												<Image
													src={ product.image.url ?? '' }
													alt='slider'
													className='w-40 max-lg:aspect-square  lg:w-[226px] lg:h-[226px] object-contain'
													// priority={ true }
													quality={ 100 }
													width={ 226 }
													height={ 226 }
												/>
											</div>
										</SwiperSlide>
									);
								}) }
							</Swiper>
							<div className='grid pr-5 lg:pr-[42px]  grid-cols-2 lg:grid-cols-3 gap-y-[42px] gap-x-[24px] mt-[42px]'>
								{
									products[activeIndex]?.treatmentOptions?.map((biomaker, biomakerIdx) => {
										return (
											<motion.div
												initial={ { y: 10, opacity: 0 } }
												animate={ { y: 0, opacity: 1 } }
												exit={ { y: -10, opacity: 0 } }
												transition={ { duration: 0.375, ease: 'easeInOut', delay: 0.05 * biomakerIdx, } }
												key={ `category-biomakerIdx-${activeIndex}-${biomakerIdx}` }
												className='flex items-center gap-2'
											>
												<CheckBlue className='flex-shrink-0 w-3.5 h-3.5' />
												<span className='text-xs text-white'>
													{ biomaker.name }
												</span>
											</motion.div>
										)
									})
								}
							</div>
							<div className='flex pr-5 lg:pr-[42px]  flex-col lg:flex-row items-center gap-3 lg:gap-[42px] mt-[42px]'>
								<Link
									prefetch={ true }
									href={ pathname + '/' + products[activeIndex].slug }
									className='bg-white text-primary rounded-full w-full h-[58px] flex items-center justify-center py-3 px-[42px] text-lg font-medium !leading-6'
								>
										View Product
								</Link>
								<Link
									prefetch={ true }
									href={ '/pricing#' }
									scroll={ true }
									className=' text-white border border-white w-full rounded-full h-[58px] flex items-center justify-center py-3 px-[42px] text-lg font-medium !leading-6'
								>
										Join Geviti
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Dialog
				open={ isViewAll }
				modal={ true }
				onOpenChange={ setisViewAll }
			>
				<DialogContent
					overlayClassName='bg-primary bg-opacity-50'
					position='default'
					className='w-full bg-primary p-10 max-w-[calc(100vw-32px)] block rounded-[20px]'
					showClose={ false }
				>
					<div
						className='flex text-center flex-col font-Poppins max-h-[75vh] overflow-y-auto no-scrollbar'>
						<button
							onClick={ () => setisViewAll(prev => !prev) }
							className='self-end text-[34px] text-white cursor-pointer'>
							<AiOutlineCloseCircle/>
						</button>
						<div className='grid grid-cols-5 gap-10 mt-11'>
							{ products.map((product, productIdx) => {
								return (
									<Link
										onClick={ enableLenis }
										prefetch={ true }
										key={ productIdx }
										href={ pathname + '/' + product.slug } >
										<div
											className={ clsxm(
												'w-full h-full lg:h-[270px] max-lg:aspect-square flex opacity-100 bg-grey-950 items-center py-[22px] justify-center border rounded-lg lg:rounded-[30px] cursor-pointer border-grey-primary overflow-hidden'
											) }>
											<Image
												src={ product.image.url ?? '' }
												alt='slider'
												className='w-40 max-lg:aspect-square  lg:w-[226px] lg:h-[226px] object-contain'
												priority={ true }
												width={ 226 }
												height={ 226 }
											/>
										</div>
										<p className='text-lg mt-3 text-left text-white'>{ product.name }</p>
										<p className='text-xs mt-2 text-left text-white'>{ product.price }</p>
									</Link>
								);
							}) }
						</div>
						<div className='w-fit mt-11 mx-auto'>
							<Link
								prefetch={ true }
								href={ '/pricing' }
								className=' text-white border border-white w-full rounded-full h-[58px] flex items-center justify-center py-3 px-[42px] text-lg font-medium !leading-6'
							>
												Get Started
							</Link>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ProductsSlider;
