'use client';

// const topTierData = marketingData.topTier.list['men-hormone-therapy'];
import { useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import clsxm from '@/helpers/clsxm';
import { Category, Product } from '@/payload/payload-types';

// import { marketingData } from '@/constant/data';
import 'swiper/css/free-mode';

import CustomLink from '../CustomLink';
import ArrowButtons from '../Marketing/ArrowButtons';

import 'swiper/css';

const ViewOtherCategories: React.FC<{
	data: Category[] | Product[],
	isProduct?: boolean,
	hideHeader?: boolean,
	baseUrl?: string,
	swiperRef?: React.MutableRefObject<SwiperType | undefined>,
	onSlideChange?: (swiper: SwiperType) => void,
	headerText?: { main: string; sub: string } // New prop for header text as an object
}> = ({ data, isProduct, hideHeader = false, baseUrl, swiperRef, onSlideChange, headerText }) => {
	const localSwiperRef = useRef<SwiperType>(undefined);
	const activeRef = swiperRef || localSwiperRef;

	const [disabledPrev, setDisabledPrev] = useState(true);
	const [disabledNext, setDisabledNext] = useState(false);
	const pathname = usePathname();
	const basePath = baseUrl ? baseUrl : pathname.split('/').slice(0, 2)
		.join('/');

	const handleSlideChange = (swiper:SwiperType) => {
		setDisabledPrev(swiper.isBeginning);
		setDisabledNext(swiper.isEnd);
		onSlideChange?.(swiper);
	};

	return (
		<div className='w-full pb-6 lg:pb-[56px]' >
			<div className={ clsxm(
				'w-full relative mt-[42px] lg:mt-[124px]',
				hideHeader && 'mt-[30px] lg:mt-[30px]'
			) }>
				{
					!hideHeader && (
						<div className='w-full flex-col lg:flex-row flex items-center lg:justify-between container-center mb-10'>
							{ /* <div className='w-full flex'>
								<h3 className='font-medium text-primary text-2xl md:text-[32px] lg:text-4xl'>View other { isProduct ? 'popular' : 'product' }<br/><span className='text-grey-primary'>{ isProduct ? 'products' : 'categories' }</span></h3>
							</div> */ }
							<div className='w-full flex'>
								{ headerText ? (
									<h3 className='font-medium text-primary text-2xl md:text-[32px] lg:text-4xl'>
										{ headerText.main }<br />
										<span className='text-grey-primary'>{ headerText.sub }</span>
									</h3>
								) : (
									<h3 className='font-medium text-primary text-2xl md:text-[32px] lg:text-4xl'>View other { isProduct ? 'popular' : 'product' }<br /><span className='text-grey-primary'>{ isProduct ? 'products' : 'categories' }</span></h3>
								) }
							</div>
							<ArrowButtons
								disabledPrev={ disabledPrev }
								disabledNext={ disabledNext }
								onClickPrev={ () => activeRef.current?.slidePrev() }
								onClickNext={ () => activeRef.current?.slideNext() }
							/>
						</div>
					)
				}

				<div className='lg:ml-[calc((100vw-1360px)/2)] pl-4 lg:pl-10'>
					<Swiper
						onBeforeInit={ swiper => {
							activeRef.current = swiper;
						} }
						slidesPerView={ 3.7 }
						breakpoints={ {
							0: {
								slidesPerView: 1.2,
								spaceBetween: 10,
								freeMode: false,
							},
							768: {
								slidesPerView: 3.7,
								spaceBetween: 14,
							},
						} }
						spaceBetween={ 14 }
						slidesOffsetAfter={ 80 }
						// className='lg:w-full lg:!pr-[calc((100vw-1360px)/2+40px)]'
						modules={ [FreeMode] }
						freeMode={ true }
						onSlideChange={ () => activeRef.current && handleSlideChange(activeRef.current) }
		  			onReachEnd={ () => activeRef.current && handleSlideChange(activeRef.current) }
					>
						{ data.map((item, productIdx) => {
							return (
								<SwiperSlide key={ productIdx }>
									<div className='h-[496px] hover:bg-blue-primary w-full bg-grey-primary-light transition-all ease-in-out duration-500 rounded-[14px] flex flex-col justify-between'>
										<div className='px-[14px] pt-[14px]'>

											<span className='text-lg'>
												{ isProduct ? (item as Product).name : (item as Category).categoryName }
											</span>
											{ /* <p className='text-xs !leading-5 mt-1'>
												{ item.description }
											</p> */ }
										</div>
										<div className='w-full h-full flex items-center justify-center'>
											<Image
												src={ item.image.url ?? '' }
												alt={ item.image.alt ?? '' }
												width={ 294 }
												height={ 294 }
												// quality={ 75 }
												className='object-contain'
											/>
										</div>
										<div className='flex flex-1 flex-col justify-end px-4 w-full mb-6'>
											<CustomLink
												href={ basePath + '/' + (item.slug ?? '') }
												className='text-xs !leading-5 focus:ring-0 focus:outline-none w-full bg-white text-primary py-[7.73px] px-5 flex items-center justify-center rounded-[128px]'
											>
												{ isProduct ? 'View Product' : 'View Category' }
											</CustomLink>
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