'use client';

import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowButtons from '../Marketing/ArrowButtons';
const topTierData = marketingData.topTier.list['men-hormone-therapy'];

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FreeMode, Mousewheel } from 'swiper/modules';

import { marketingData } from '@/constant/data';

import 'swiper/css/free-mode';

import 'swiper/css';

const ViewOtherCategories: React.FC = () => {
	const swiperRef = useRef<SwiperType>();

	const [disabledPrev, setDisabledPrev] = useState(true);
	const [disabledNext, setDisabledNext] = useState(false);

	const handleSlideChange = (swiper:SwiperType) => {
		setDisabledPrev(swiper.isBeginning);
		setDisabledNext(swiper.isEnd);
	};

	return (
		<div className='w-full pb-[56px]' >
			<div className='w-full relative mt-[42px] lg:mt-[124px]'>
				<div className='w-full flex items-center lg:justify-between container-center mb-10'>
					<div className='w-full flex'>
						<h3 className='font-medium text-primary md:text-[32px] lg:text-4xl'>View other product <br/><span className='text-grey-primary'>categories</span></h3>
					</div>
					<ArrowButtons
						disabledPrev={ disabledPrev }
						disabledNext={ disabledNext }
						onClickPrev={ () => swiperRef.current?.slidePrev() }
						onClickNext={ () => swiperRef.current?.slideNext() }
					/>
				</div>

				<div className='ml-[calc((100vw-1360px)/2)] pl-4 lg:pl-10'>
					<Swiper
						onBeforeInit={ swiper => {
							swiperRef.current = swiper;
						} }
						slidesPerView={ 3.7 }
						spaceBetween={ 14 }
						className='w-full !pr-[calc((100vw-1360px)/2+16px)] lg:!pr-[calc((100vw-1360px)/2+40px)]'
						modules={ [FreeMode, Mousewheel] }
						freeMode={ true }
						onSlideChange={ () => swiperRef.current && handleSlideChange(swiperRef.current) }
		  			onReachEnd={ () => swiperRef.current && handleSlideChange(swiperRef.current) }
					>
						{ topTierData.map((item, productIdx) => {
							return (
								<SwiperSlide key={ productIdx }>
									<div className='w-[338px] h-[496px] hover:bg-blue-primary bg-grey-primary-light transition-all ease-in-out duration-500 rounded-[14px] flex flex-col justify-between'>
										<div className='px-[14px] pt-[14px]'>
											<h4 className='text-lg'>{ item.title }</h4>
											<p className='text-xs !leading-5 mt-1'>
												{ item.description }
											</p>
										</div>
										<div className='w-full h-full flex items-center justify-center'>
											<Image
												src={ item.image }
												alt={ item.title }
												width={ 294 }
												height={ 294 }
												className='object-contain'
											/>
										</div>
										<div className='flex flex-1 flex-col justify-end px-4 w-full mb-6'>
											<Link
												href={ '/' }
												className='text-xs !leading-5 focus:ring-0 focus:outline-none w-full bg-white text-primary py-[7.73px] px-5 flex items-center justify-center rounded-[128px]'
											>
													View Category
											</Link>
										</div>
									</div>
								</SwiperSlide>
							);
						}) }
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default ViewOtherCategories;