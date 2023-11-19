'use client';

import { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';
import { Post } from '@/payload/payload-types';

import { ArrowEmail } from '../Icons';

type SliderArticlesProps = {
  data: Post[]
};

const SliderArticles: React.FC<SliderArticlesProps> = ({ data }) => {
	const sliderRef = useRef<Slider | null>(null);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		centerMode: true,
		centerPadding: '20px',
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
				{ Array.from(Array(data.length).keys()).map(i => {
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
		<div className='flex flex-col w-full mt-5'>
			<div className='w-full'>
				<Slider
					ref={ sliderRef }
					{ ...settings }>
					{ data.map((items, id) => {
						return (
							<div
								key={ id }
								className='w-full h-full relative focus:ring-0 focus:outline-none focus:border-none pl-[10px]'>
								<Image
									src={ items.hero.media.url ?? '' }
									width={ 1000 }
									height={ 1000 }
									className='object-cover !h-[500px] w-full rounded-[20px]'
									alt={ items.title }
								/>
								<div className='absolute z-10 left-0 bottom-0 flex flex-col text-start px-[30px] py-[26px]'>
									<p className='text-[#CDDCE2] font-BRSonoma text-sm'>{ items.hero.categories?.title }</p>
									<p className='text-white font-Poppins text-[22px] -tracking-[0.88px'>{ items.title }</p>
								</div>
								<ArrowEmail className='absolute top-0 right-0 w-[45px] h-[45px] m-5'/>
								<div className='z-0 bottom-0 absolute bg-gradient-to-t from-black/70 via-black/30 to-black/0 h-full w-[calc(100vw-50px)] rounded-[20px]'/>
							</div>
						);
					}) }
				</Slider>
			</div>

			{ renderDots() }
		</div>
	);
};

export default SliderArticles;
