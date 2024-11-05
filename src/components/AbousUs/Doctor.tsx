'use client';

// const topTierData = marketingData.topTier.list['men-hormone-therapy'];
import { useRef } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import { Category, Product } from '@/payload/payload-types';
// import { marketingData } from '@/constant/data';
import 'swiper/css/free-mode';

// import ArrowButtons from '../Marketing/ArrowButtons';
import 'swiper/css';

const data = [
	{
		image: '/images/about_us/dr-01.png',
		name: 'Joy Kong, MD'
	},
	{
		image: '/images/about_us/dr-02.png',
		name: 'Jeremy London MD'
	},
	{
		image: '/images/about_us/dr-03.png',
		name: 'Rahul Mehan MD'
	},
	{
		image: '/images/about_us/dr-04.png',
		name: 'Brian Popiel NMD'
	},
]

const Doctor: React.FC = () => {
	const swiperRef = useRef<SwiperType>();

	// const [disabledPrev, setDisabledPrev] = useState(true);
	// const [disabledNext, setDisabledNext] = useState(false);

	// const handleSlideChange = (swiper:SwiperType) => {
	// 	setDisabledPrev(swiper.isBeginning);
	// 	setDisabledNext(swiper.isEnd);
	// };

	return (
		<div className='w-full max-lg:py-[75px] lg:pb-[193px]'>
			<div className='lg:px-3'>
				<div className='container-center'>
					<h3 className='font-medium text-primary text-2xl md:text-[32px] lg:text-4xl'>Driven by our top<br/><span className='text-grey-primary'>medical advisors</span></h3>
				</div>
			</div>
			<div className='lg:mx-[calc((100vw-1360px)/2)] pl-4 lg:px-10'>
				<div className='lg:mt-20 mt-10'>
					<Swiper
						onBeforeInit={ swiper => {
							swiperRef.current = swiper;
						} }
						slidesPerView={ 4 }
						breakpoints={ {
							0: {
								slidesPerView: 1.6,
								spaceBetween: 10,
								freeMode: false,
								slidesOffsetAfter: 16
							},
							768: {
								slidesPerView: 4,
								// spaceBetween: 14,
							},
						} }
						spaceBetween={ 14 }
						// slidesOffsetAfter={ 42 }
						modules={ [FreeMode] }
						freeMode={ true }
					>
						{ data.map((item, productIdx) => {
							return (
								<SwiperSlide key={ productIdx }>
									<div className='flex flex-col gap-4 lg:gap-6'>
										<div className='w-full h-[224px] lg:h-[336px] rounded-2xl overflow-hidden'>
											<Image
												src={ item.image ?? '' }
												alt={ 'doctor' }
												width={ 309 }
												height={ 400 }
												className='object-cover w-full h-[224px] lg:h-[336px] rounded-2xl overflow-hidden'
											/>
										</div>
										<p className='font-medium text-primary text-lg lg:text-2xl'>{ item.name }</p>
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

export default Doctor;