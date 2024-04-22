'use client';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import membershipdata from '@/constant/data/membership';

import { ChevronRight } from '../Icons';

import SliderCard from './SliderCard';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const sliderdata = membershipdata.slider;

const SliderCustom = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const sliderRef = useRef<Slider>(null);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		afterChange: (index: number) => setCurrentSlide(index),
	};

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const prevSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	return (
		<div className='relative w-full lg:px-3 pt-6 rounded-19px'>
			<div className='overflow-hidden rounded-19px relative'>
				<Slider
					ref={ sliderRef }
					{ ...settings }
					className='bg-primary'>
					{ sliderdata.data.map((obj, index) => (
						<SliderCard
							obj={ obj }
							key={ index }
							index={ index }
							nextSlide={ nextSlide }
							currentSlide={ currentSlide }
						/>
					)) }
				</Slider>
				<div className=' absolute max-lg:w-full justify-between bottom-9 px-7 lg:left-16 flex lg:gap-10'>
					<button
						type='button'
						className='bg-white h-[46px] w-[46px] flex cursor-pointer justify-center items-center rounded-full'
						onClick={ prevSlide }
					>
						<span className=' rotate-180'>
							<ChevronRight />
						</span>
					</button>
					<button
						type='button'
						className=' bg-white h-[46px] w-[46px] flex cursor-pointer justify-center items-center rounded-full'
						onClick={ nextSlide }
					>
						<ChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SliderCustom;
