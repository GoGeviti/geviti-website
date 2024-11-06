'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/free-mode';

import 'swiper/css';

const images = [
	'/images/marketing/giveaway/ig-01.webp',
	'/images/marketing/giveaway/ig-02.webp',
	'/images/marketing/giveaway/ig-03.webp',
	'/images/marketing/giveaway/ig-04.webp',
	'/images/marketing/giveaway/ig-05.webp',
]

const Instagram = () => {
	const swiperRef = useRef<SwiperType>(undefined);

	return (
		<div className='w-full pb-[95px] lg:pb-[150px]' >
			<div className='w-full flex-col lg:flex-row flex items-center lg:justify-between container-center mb-10'>
				<div className='w-full flex'>
					<h3 className='font-medium text-primary text-2xl md:text-[32px] lg:text-4xl'>Follow us<br/><span className='text-grey-primary'>on <a
						className='underline'
						href='https://www.instagram.com/gogeviti/'
						target='_blank'
						rel='noopener noreferrer' >Instagram</a></span></h3>
				</div>
			</div>

			<div className='lg:ml-[calc((100vw-1360px)/2)] pl-4 lg:pl-10'>
				<Swiper
					onBeforeInit={ swiper => {
						swiperRef.current = swiper;
					} }
					slidesPerView={ 4.2 }
					breakpoints={ {
						0: {
							slidesPerView: 1.2,
							spaceBetween: 10,
							freeMode: false,
						},
						768: {
							slidesPerView: 4.1,
							spaceBetween: 20,
						},
					} }
					spaceBetween={ 14 }
					className='lg:w-full lg:!pr-[calc((100vw-1360px)/2+40px)]'
					modules={ [FreeMode] }
					freeMode={ true }
				>
					{ images.map((image, imageId) => {
						return (
							<SwiperSlide key={ imageId }>
								<div className='w-full max-lg:aspect-square lg:h-[306px] rounded-[20px] overflow-hidden'>
									<Image
										src={ image }
										alt={ 'instagram image' }
										width={ 306 }
										height={ 306 }
										className='object-cover w-full h-full'
									/>
								</div>
							</SwiperSlide>
						);
					}) }
				</Swiper>
			</div>
		</div>
	);
}

export default Instagram