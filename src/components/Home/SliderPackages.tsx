'use client';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import { homeData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { ChevronRight } from '../Icons';

const images = homeData.sliderPackageImages;

const SliderPackages: React.FC = () => {
	const sliderRef = useRef<Slider | null>(null);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const settings = {
		dots: false,
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		beforeChange: (current: number, next: number) => setActiveIndex(next)
	};

	const renderDots = () => {
		return (
			<div className='flex items-center justify-center gap-9px sm:gap-3'>
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

	const renderNextArrow = () => {
		return (
			<div className='absolute top-1/2 -translate-y-1/2 right-0 pr-6'>
				<ChevronRight
					className={ clsxm('w-6 h-6 cursor-pointer', activeIndex === images.length - 1 ? 'text-[#CACACB]' : 'text-primary') }
					onClick={ () => sliderRef?.current?.slickNext() }
				/>
			</div>
		);
	};

	const renderPrevArrow = () => {
		return (
			<div className='absolute top-1/2 -translate-y-1/2 left-0 pl-6 z-10'>
				<ChevronRight
					className={ clsxm('rotate-180 w-6 h-6 cursor-pointer', activeIndex === 0 ? 'text-[#CACACB]' : 'text-primary') }
					onClick={ () => sliderRef?.current?.slickPrev() }
				/>
			</div>
		);
	};

	return (
		<div className='w-full sm:max-w-[333px] mx-auto lg:max-w-none lg:mx-0'>
			<div className='relative overflow-hidden w-full h-full aspect-square rounded-[28px] bg-[#E5E5E5] focus:outline-none focus:ring-0'>
				{ renderPrevArrow() }
				<Slider
					{ ...settings }
					ref={ sliderRef }
				>
					{ images.map((image: string, imageIdx: number) => (
						<div key={ imageIdx }>

							<div className='w-full h-full aspect-square rounded-[28px] relative overflow-hidden'>
								<Image
									src={ image }
									alt=''
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-contain'
									fill
								/>
							</div>
						</div>
					)) }
				</Slider>
				{ renderNextArrow() }

				<div className='absolute bottom-7 w-full z-10'>
					{ renderDots() }
				</div>
			</div>
		</div>
	);
};

export default SliderPackages;
