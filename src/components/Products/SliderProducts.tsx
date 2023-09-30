'use client';

import { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

type SliderProductsProps = {
	images: string[];
};

const SliderProducts: React.FC<SliderProductsProps> = ({ images }) => {
	const sliderRef = useRef<Slider | null>(null);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		swipeToSlide: true,
		beforeChange: (current: number, next: number) => setActiveIndex(next),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					vertical: false,
					verticalSwiping: false
				}
			},
		]
	};

	const renderDots = () => {
		return (
			<div className='mt-5 lg:-mt-5 flex max-lg:items-center lg:flex-col justify-center gap-9px sm:gap-3'>
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
		<div className='flex flex-col w-full'>
			<div className='w-full px-5 max-w-[289px] lg:max-w-[431px] mx-auto'>
				<Slider
					ref={ sliderRef }
					{ ...settings }>
					{ images?.map((image, imageIdx) => {
						return (
							<div
								key={ imageIdx }
								className='w-full h-full relative overflow-hidden aspect-square focus:ring-0 focus:outline-none focus:border-none'>
								<Image
									src={ image }
									alt='slider'
									loading='lazy'
									fill
									className='object-contain'
								/>
							</div>
						);
					}) }
				</Slider>
			</div>

			{ renderDots() }
		</div>
	);
};

export default SliderProducts;
