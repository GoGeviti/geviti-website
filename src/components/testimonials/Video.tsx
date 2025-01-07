'use client'
import React, { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import clsxm from '@/helpers/clsxm';

import 'swiper/css/thumbs';

import { Dialog, DialogContent } from '../Dialog';
import { StarIcon } from '../Icons';
import ArrowButtons from '../Marketing/ArrowButtons';

import 'swiper/css';

const videoData = [
	{
		image: 'https://i.ytimg.com/vi/43uaBvS-gfM/maxresdefault.jpg',
		video: 'https://www.youtube.com/embed/43uaBvS-gfM',
		description: 'I\'ve had a phenomenal experience so far and am really looking forward to seeing where this goes. I\'m excited to see my next test results and how my biomarkers have changed. I highly recommend it.',
		author: 'Meet Chris',
		rating: 5,
	},
	{
		image: 'https://i.ytimg.com/vi/LDPoReqyvKI/maxresdefault.jpg',
		video: 'https://www.youtube.com/embed/LDPoReqyvKI',
		description: 'As someone who used to struggle with constant fatigue, low energy, and poor sleep, I can honestly say that Geviti has been a life-changing experience. Within a few weeks, I noticed a significant boost in my energy levels, and my sleep habits improved dramatically. Instead of waking up tired, I now feel rested and more focused throughout the day. Geviti\'s approach to health is unlike anything I\'ve experienced before.  If you\'re looking to improve your health, energy, maintain an active lifestyle, and quality of life as you get older, I can\'t recommend Geviti enough.',
		author: 'Meet Mark',
		rating: 5,
	},
	{
		image: 'https://i.ytimg.com/vi/F3zsuSiNUw8/maxresdefault.jpg',
		video: 'https://www.youtube.com/embed/F3zsuSiNUw8',
		description: 'I started seeing an integrative health specialist in my mid-30s due to symptoms of adrenal fatigue, after numerous doctors couldn\'t find anything wrong. Despite normal lab results, I knew something was off—constant exhaustion, hair loss, and feeling cold. I decided to seek a holistic approach, which led to a diagnosis of hypothyroidism and gut issues from chronic stress. Now, I get labs twice a year through Geviti to stay on top of my health. I highly recommend Geviti!',
		author: 'Meet Melissa',
		rating: 5,
	},
	{
		image: 'https://i.ytimg.com/vi/fFSwlwSOX8o/maxresdefault.jpg',
		video: 'https://www.youtube.com/embed/fFSwlwSOX8o',
		description: 'Just turned 50 years old and I feel amazing. I\'ve really leaned on Geviti to stay optimized in my health and wellness.',
		author: 'Meet Ernie',
		rating: 5,
	},
	{
		image: 'https://i.ytimg.com/vi/LsNk5Rr88BE/sddefault.jpg',
		video: 'https://www.youtube.com/embed/LsNk5Rr88BE',
		description: 'For the first time, I didn\'t feel like just a patient. The team took the time to thoroughly explain everything and make sure all my questions were answered. The best part is that everything is done from the comfort of my home. As a flight attendant, the daily supplements have been incredibly convenient, making it easy to stay on top of my health while traveling.',
		author: 'Meet Christa',
		rating: 5,
	},
];

type VideoProps = {
	className?: string;
}

const Video: React.FC<VideoProps> = ({ className }) => {

	const swiperRef = useRef<SwiperType>(undefined);
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const [disabledPrev, setDisabledPrev] = useState(true);
	const [disabledNext, setDisabledNext] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const handleSlideChange = (swiper: SwiperType) => {
		setDisabledPrev(swiper.isBeginning);
		setDisabledNext(swiper.isEnd);
		setActiveIndex(swiper.activeIndex);
	};

	return (
		<div className={ clsxm(
			'lg:px-3 mt-[177px] lg:mt-[133px]',
			className
		) }>
			<div className='container-center'>
				<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
					Hear what
					<br />
					<span className='text-grey-primary'>our members say</span>
				</h3>
				<div className='mt-6 lg:mt-[60px] flex flex-col lg:flex-row items-start gap-6 lg:gap-[89px]'>
					<div className='relative w-full lg:flex-1 rounded-[10px] overflow-hidden'>
						<button
							onClick={ () => setIsOpen(true) }
							className='absolute lg:w-20 w-16 h-16 lg:h-20 flex items-center cursor-pointer justify-center rounded-full bg-white/30 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm border border-grey-50/50 z-10'>
							<FaPlay className='text-white lg:text-2xl' />
						</button>
						<Swiper
							pagination={ {
								clickable: true,
							} }
							onBeforeInit={ swiper => {
								swiperRef.current = swiper;
							} }
							spaceBetween={ 12 }
							thumbs={ { swiper: thumbsSwiper } }
							onSlideChange={ handleSlideChange }
							modules={ [Thumbs] }
							
						>
							{ videoData.map((video, videoIdx) => {
								return (
									<SwiperSlide key={ videoIdx }>
										<div className='w-full h-full flex items-center justify-center'>
											<Image
												src={ video.image ?? '' }
												alt='slider'
												// priority={ true }
												quality={ 100 }
												width={ 669 }
												height={ 376 }
												className='object-cover max-h-[192px] lg:max-h-[376px] w-full rounded-[10px] overflow-hidden'
											/>
										</div>
									</SwiperSlide>
								);
							}) }
						</Swiper>
					</div>
					<div className='lg:w-[41%] max-lg:min-h-[486px] self-stretch flex flex-col justify-between'>
						<div>
							<div className='flex items-start justify-between gap-2'>
								<h4 className='h4 capitalize'>{ videoData[activeIndex].author }</h4>
								<div>
									<ArrowButtons
										className='max-lg:hidden'
										disabledPrev={ disabledPrev }
										disabledNext={ disabledNext }
										onClickPrev={ () => swiperRef.current?.slidePrev() }
										onClickNext={ () => swiperRef.current?.slideNext() }
									/>
								</div>
							</div>
							<div className='flex gap-1 mt-1.5'>
								{ [...Array(5)].map((_, i) => (
									<StarIcon
										key={ i }
										filled={ i < videoData[activeIndex].rating } />
								)) }
							</div>
							<p className='body-extra-small mt-2'>{ videoData[activeIndex].description }</p>
						</div>
						<div className='mt-6'>
							<Swiper
								onSwiper={ setThumbsSwiper }
								spaceBetween={ 14 }
								slidesPerView={ 3 }
								modules={ [Thumbs] }
								grabCursor
								breakpoints={ {
									0: {
										slidesPerView: 1.8,
									},
									768: {
										slidesPerView: 3,
									},
								} }
								onSlideChange={ () => swiperRef.current && handleSlideChange(swiperRef.current) }
							>
								{ videoData?.map((image, imageIdx) => {
									return (
										<SwiperSlide key={ imageIdx }
										>
											<div
												className={ clsxm(
													'h-[132px] lg:h-[112px] relative cursor-pointer',
													imageIdx === activeIndex ? 'opacity-100' : 'opacity-50'
												) }
											>
												<div
													className='absolute w-[37px] h-[37px] flex items-center justify-center rounded-full bg-black/10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-sm z-10'>
													<FaPlay className='text-white' />
												</div>
												<Image
													src={ image.image }
													alt='slider'
													width={ 164 }
													height={ 112 }
													className='object-cover h-full w-full rounded-[10px] overflow-hidden'
												/>
											</div>
										</SwiperSlide>
									);
								}) }
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
			</div>

			<Dialog
				open={ isOpen }
				modal={ true }
				onOpenChange={ setIsOpen }  // Changed this line - now it will properly handle open/close
			>
				<DialogContent
					position='default'
					className='max-w-[800px] rounded-[20px] overflow-hidden p-0 bg-black'
					showClose={ true }
				>
					<div className='aspect-video w-full'>
						<iframe
							width='100%'
							height='100%'
							src={ videoData[activeIndex].video }
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Video;
