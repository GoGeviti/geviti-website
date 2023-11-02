'use client';

import { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import clsxm from '@/helpers/clsxm';

import 'swiper/css/pagination';

import 'swiper/css';

type SliderProductsProps = {
	images: string[];
};

const SliderProducts: React.FC<SliderProductsProps> = ({ images }) => {
	const sliderRef = useRef<Slider | null>(null);
	const sliderRef2 = useRef<Slider | null>(null);
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [activeIndex2, setActiveIndex2] = useState<number>(0);

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: false,
		verticalSwiping: false,
		swipeToSlide: true,
		beforeChange: (current: number, next: number) => setActiveIndex(next),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					vertical: false,
					verticalSwiping: false,
				},
			},
		],
	};
	const settings2: Slider['props'] = {
		dots: true,
		arrows: true,
		infinite: false,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: false,
		verticalSwiping: false,
		swipeToSlide: true,
		beforeChange: (current: number, next: number) => {
			console.log(current);
			console.log(next);
			sliderRef?.current?.slickGoTo(next);
			setActiveIndex2(next);
		},
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					vertical: false,
					verticalSwiping: false,
				},
			},
		],
	};

	const renderDots = () => {
		return (
			<div className='mt-5 lg:-mt-5 flex items-center justify-center gap-9px sm:gap-3'>
				{ Array.from(Array(images.length).keys()).map(i => {
					return (
						<div
							key={ i }
							className={ clsxm(
								'rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary cursor-pointer',
								i === activeIndex ? 'bg-opacity-100' : 'bg-opacity-[0.13]'
							) }
							onClick={ () => sliderRef?.current?.slickGoTo(i) }
						/>
					);
				}) }
			</div>
		);
	};

	return (
		<div>
			<div className='w-full bg-white h-[462px] rounded-lg flex flex-col items-center justify-center relative'>
				<div className='w-full px-5 max-w-[289px] lg:max-w-[431px] mx-auto'>
					<Swiper
						pagination={ {
							clickable: true,
						} }
						modules={ [Pagination] }
					>
						{ images?.map((image, imageIdx) => {
							return (
								<SwiperSlide key={ imageIdx }>
									<div className='w-full h-full relative overflow-hidden aspect-square focus:ring-0 focus:outline-none focus:border-none'>
										<Image
											src={ image }
											alt='slider'
											priority={ true }
											fill
											className='object-contain'
										/>
									</div>
								</SwiperSlide>
							);
						}) }
					</Swiper>
					{ /* <Slider
						ref={ sliderRef }
						{ ...settings }>
						{ images?.map((image, imageIdx) => {
							return (
								<div
									key={ imageIdx }
									className='w-full h-full relative overflow-hidden aspect-square focus:ring-0 focus:outline-none focus:border-none'
								>
									<Image
										src={ image }
										alt='slider'
										priority={ true }
										fill
										className='object-contain'
									/>
								</div>
							);
						}) }
					</Slider> */ }
				</div>
				{ /* <div className='absolute left-1/2 bottom-6'>{ renderDots() }</div> */ }
			</div>
			{ /* <div className='mt-6'>
				<Slider
					ref={ sliderRef2 }
					{ ...settings2 }
					centerPadding='24px'
					className=''
				>
					{ images?.map((image, imageIdx) => {
						return (
							<div
								key={ imageIdx }
								onClick={ () => sliderRef.current?.slickGoTo(imageIdx) }
								className={ clsxm(
									'w-full bg-white cursor-pointer rounded-lg h-[84px] relative overflow-hidden aspect-square focus:ring-0 focus:outline-none focus:border-none',
									activeIndex2 === imageIdx ? 'opacity-100' : 'opacity-25'
								) }
							>
								<Image
									src={ image }
									alt='slider'
									priority={ true }
									fill
									className='object-contain'
								/>
							</div>
						);
					}) }
				</Slider>
			</div> */ }
		</div>
	);
};

export default SliderProducts;
