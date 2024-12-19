'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import clsxm from '@/helpers/clsxm';
import { Post } from '@/payload/payload-types';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Navbar from '../Navbar/Landing';

// Import Swiper styles
import 'swiper/css';

type HeroProps = {
  hero: Post[];
  classname: string;
};

const Hero: React.FC<HeroProps> = ({ hero, classname }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const swiperRef = useRef<any>(null);

	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<Navbar animationProps={ { variants: { hidden: { y: 0, opacity: 1 }, visible: { y: 0, opacity: 1 } } } } />

			<div className={ clsxm(
				'bg-primary h-[calc(100vh-30px)] lg:max-h-[636px] w-full rounded-b-[19px] lg:rounded-[19px] overflow-hidden relative',
				classname
			) }>
				<Swiper
					onBeforeInit={ swiper => {
						swiperRef.current = swiper;
					} }
					centeredSlides={ true }
					loop={ true }
					modules={ [Autoplay, Navigation] }
					onSlideChange={ swiper => setSelectedIndex(swiper.activeIndex) }
					className='absolute inset-0 w-full h-full z-0'
				>
					{ hero.map((item, index) => (
						<SwiperSlide key={ index }>
							<div className='relative w-full h-full lg:rounded-[19px]'>
								<Image
									src={ item.hero?.media?.url ?? '' }
									alt={ `hero-${index}` }
									priority
									className='object-cover object-center'
									fill
								/>
							</div>
							<div className='absolute top-0 inset-x-0 w-full h-full bg-[#0000007D] lg:rounded-[19px]' />
						</SwiperSlide>
					)) }
				</Swiper>

				<div className='absolute top-0 z-10 w-full h-full container-center lg:rounded-b-[19px]'>
					<div className='max-w-[660px] flex flex-col justify-end pb-16 w-full h-full z-100'>
						<p className='font-Poppins text-sm font-semibold text-white leading-[1.54px] uppercase'>
							{ hero[selectedIndex]?.hero.categories?.title }
						</p>
						<div className='lg:h2 text-[29px] line-clamp-2 lg:text-grey-secondary text-grey-secondary md:mt-5 mt-[10px] md:mb-3 mb-[14px]'>
							<span dangerouslySetInnerHTML={ { __html: hero[selectedIndex]?.title } } />
						</div>
						<p className='body-extra-small lg:body-small lg:text-grey-secondary text-grey-secondary max-w-[447px]'>
              Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas nibh massa diam sapien fusce. Nisl tortor turpis maecenas scelerisque aenean sem amet et
						</p>
						<div className='mt-6 flex items-center gap-3.5'>
							{ hero.map((_, index) => (
								<div
									key={ index }
									onClick={ () => swiperRef.current?.slideTo(index) }
									className={ clsxm(
										'w-[10px] h-[10px] rounded-full border cursor-pointer border-white transition-colors duration-200',
										index === selectedIndex ? 'bg-white' : 'bg-transparent'
									) }
								/>
							)) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
