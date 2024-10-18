'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Swiper as SwiperType } from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FadeText } from '@/components/FadeText';
import { ArrowNarrowLeft, ArrowNarrowRight, CheckBlue } from '@/components/Icons';
import clsxm from '@/helpers/clsxm';
import { Product } from '@/payload/payload-types';

import 'swiper/css/thumbs';

import 'swiper/css';

// const products = [
// 	{
// 		image: '/images/marketing/products/semaglutide.webp',
// 		title: 'Kyzatrex™',
// 		subtitle: 'As low as $95/m*',
// 		description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
// 		biomakers: [
// 			'FDA Approved',
// 			'Bioidentical',
// 			'96% Efficacy',
// 			'Oral Capsule',
// 			'Twice Daily',
// 			'Flexible Dosing'
// 		]
// 	},
// 	{
// 		image: '/images/marketing/products/sermorelin-injection.webp',
// 		title: 'Tadalafil',
// 		subtitle: 'As low as $70/m*',
// 		description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
// 		biomakers: [
// 			'FDA Approved',
// 			'Bioidentical',
// 			'96% Efficacy',
// 			'96% Efficacy',
// 		]
// 	},
// 	{
// 		image: '/images/marketing/products/sermorelin-troche.webp',
// 		title: 'Testosterone cream',
// 		subtitle: 'As low as $35/m*',
// 		description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
// 		biomakers: [
// 			'FDA Approved',
// 			'Bioidentical',
// 			'96% Efficacy',
// 			'Oral Capsule',
// 			'Twice Daily',
// 		]
// 	},
// 	{
// 		image: '/images/marketing/products/testosterone-booster.webp',
// 		title: 'Semaglutide',
// 		subtitle: 'As low as $50/m*',
// 		description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
// 		biomakers: [
// 			'FDA Approved',
// 			'Bioidentical',
// 			'96% Efficacy',
// 			'Oral Capsule',
// 		]
// 	},
// 	{
// 		image: '/images/marketing/products/testosterone-cypionate.webp',
// 		title: 'Anastrozole',
// 		subtitle: 'As low as $53/m*',
// 		description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
// 		biomakers: [
// 			'FDA Approved',
// 			'Bioidentical',
// 			'96% Efficacy',
// 			'Oral Capsule',
// 			'Twice Daily',
// 			'Flexible Dosing'
// 		]
// 	},
// ];

const ProductsSlider:React.FC<{products : Product[]} > = ({ products }) => {

	const swiperRef = useRef<SwiperType>();
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

	const [activeIndex, setActiveIndex] = useState<number>(0);

	const pathname = usePathname();

	return (
		<div className='lg:px-3 font-Poppins text-white max-lg:mt-10'>
			<div className='bg-primary rounded-[40px] transition-all duration-300 ease-in-out'>
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
					<div className='flex-1 overflow-hidden'>
						 <FadeText
							key={ `category-desc-${activeIndex}` }
							framerProps={ {
								show: { transition: { delay: 0.3 } },
							} }
							className='text-sm lg:leading-6'
							direction='up'
							text={ products[activeIndex].description }/>
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
						className='rounded-xl lg:rounded-[36px] w-full lg:w-[536px] aspect-square lg:h-[472px] bg-gradient-blue-products flex items-center justify-center'
					>
						{ products.map((product, productIdx) => {
							return (
								<SwiperSlide key={ productIdx }>
									<div className='w-full h-full flex items-center justify-center'>
										<Image
											src={ product.image.url ?? '' }
											alt='slider'
											priority={ true }
											width={ 396 }
											height={ 396 }
											className='object-cover'
										/>
									</div>
								</SwiperSlide>
							);
						}) }
					</Swiper>
					<div className='absolute top-0 right-0'>
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
						modules={ [Thumbs] }
						className='flex items-center w-full flex-1 lg:!pr-[42px] mt-5 lg:mt-[76px]'
					>
						{ products.map((product, productIdx) => {
							return (
								<SwiperSlide
									key={ productIdx }
								>
									<div
										className={ clsxm(
											'w-full h-full max-lg:aspect-square flex items-center py-[22px] justify-center border rounded-lg lg:rounded-[30px] cursor-pointer border-grey-primary overflow-hidden',
											productIdx === activeIndex ? 'opacity-100 bg-grey-950' : ' bg-noneopacity-25',
										) }
									>
										<Image
											src={ product.image.url ?? '' }
											alt='slider'
											className='w-40 max-lg:aspect-square  lg:w-[226px] lg:h-[226px] object-contain'
											priority={ true }
											width={ 226 }
											height={ 226 }
										/>
									</div>
								</SwiperSlide>
							);
						}) }
						<div className='grid grid-cols-2 lg:grid-cols-3 gap-y-[42px] gap-x-[24px] mt-[42px]'>
							{
								products[activeIndex]?.treatmentOptions?.map((biomaker, biomakerIdx) => {
									return (
										<motion.div
											initial={ { y: 10, opacity: 0 } }
											animate={ { y: 0, opacity: 1 } }
											exit={ { y: -10, opacity: 0 } }
											transition={ { duration: 0.375, ease: 'easeInOut', delay: 0.05 * biomakerIdx, } }
											key={ `category-biomakerIdx-${activeIndex}-${biomakerIdx}` }
											className='flex items-center gap-2'>
											<CheckBlue className='flex-shrink-0 w-3.5 h-3.5' />
											<span className='text-xs text-white'>
												{ biomaker.name }
											</span>
										</motion.div>
									)
								})
							}
						</div>
						<div className='flex flex-col lg:flex-row items-center gap-3 lg:gap-[42px] mt-[42px]'>
							<Link
								href={ pathname + '/' + products[activeIndex].slug }
								className='bg-white text-primary rounded-full w-full h-[58px] flex items-center justify-center py-3 px-[42px] text-lg font-medium !leading-6'
							>
								View Product
							</Link>
							<Link
								href={ '/pricing' }
								className=' text-white border border-white w-full rounded-full h-[58px] flex items-center justify-center py-3 px-[42px] text-lg font-medium !leading-6'
							>
								Join geviti
							</Link>
						</div>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default ProductsSlider;
