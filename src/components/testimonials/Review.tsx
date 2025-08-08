'use client'
import React, { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { testimonials } from '@/constant/data/review';

import { TestimonialCard } from '../Landing/TestimonialCard';
import ArrowButtons from '../Marketing/ArrowButtons';

import 'swiper/css';

const Review = () => {

	const swiperRef = useRef<SwiperType>(undefined);
	// const [activeIndex, setActiveIndex] = useState<number>(0);

	const [disabledPrev, setDisabledPrev] = useState(true);
	const [disabledNext, setDisabledNext] = useState(false);

	const handleSlideChange = (swiper: SwiperType) => {
		setDisabledPrev(swiper.isBeginning);
		setDisabledNext(swiper.isEnd);
		// setActiveIndex(swiper.activeIndex);
	};

	return (
		<div className='px-4 my-12 lg:my-[146px]'>
			<div className='max-w-screen-lg mx-auto'>
				<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
          We are trusted by
					<br />
					<span className='text-grey-primary'>some amazing people</span>
				</h3>
				<div className='flex flex-col max-lg:hidden gap-16 mt-10'>
					<div className='max-w-[847px] w-full'>
						<TestimonialCard
							contentClassName='max-w-[386px] ml-auto'
							{ ...testimonials[1] } />
					</div>
					<div className='max-w-[847px] w-full self-end'>
						<TestimonialCard
							imageClassName='order-2 ml-auto'
							contentClassName='order-1 max-w-[420px] pt-10'
							quoteClassName='left-5'
							{ ...testimonials[4] } />
					</div>
				</div>
				<div className='lg:hidden w-full'>
					<Swiper
						pagination={ {
							clickable: true,
						} }
						onBeforeInit={ swiper => {
							swiperRef.current = swiper;
						} }
						spaceBetween={ 12 }
						onSlideChange={ handleSlideChange }
						modules={ [Thumbs] }
							
					>
						<SwiperSlide>
							<TestimonialCard
								imageClassName='max-lg:h-[204px]'
								{ ...testimonials[1] } />
						</SwiperSlide>
						<SwiperSlide>
							<TestimonialCard
								imageClassName='max-lg:h-[204px]'
								{ ...testimonials[4] } />
						</SwiperSlide>
					</Swiper>
					<ArrowButtons
						className='lg:hidden max-sm:flex mt-7 justify-between'
						disabledPrev={ disabledPrev }
						disabledNext={ disabledNext }
						onClickPrev={ () => swiperRef.current?.slidePrev() }
						onClickNext={ () => swiperRef.current?.slideNext() }
					/>
				</div>
			</div>
		</div>
	);
};

export default Review;
