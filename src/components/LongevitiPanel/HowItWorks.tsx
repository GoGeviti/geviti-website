'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

import longevitiPanelData from '@/constant/data/longevitiPanel';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';
import { useCarousel } from '@/hooks/embla/use-carousel';

const DotButton = dynamic(() => import('../CarouselDotButton'), {
	ssr: false,
});
const HowItWorksCards = dynamic(() => import('./HowItWorksCards'), {
	ssr: false,
});

const howItWorksData = longevitiPanelData.howItWorks;

const HowItWorks: React.FC = () => {
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});
	const carousel = useCarousel({
		loop: true,
		duration: 25,
		align: 'start',
	});
	const { mainRef: emblaRef } = carousel;

	const renderCardList = () => {
		return (
			<div
				className='overflow-hidden'
				ref={ emblaRef }>
				<div className='lg:container-center min-h-[561.52px] lg:min-h-[744.33px] flex lg:grid lg:grid-cols-3 lg:justify-center h-full flex-nowrap lg:gap-x-6 max-lg:touch-pan-y max-lg:touch-pinch-zoom scrolling-touch scroll-smooth max-lg:-ml-[7px]'>
					{ windowDimensions.width > 0 ? (
						<HowItWorksCards
							selectedIndex={ carousel.dots.selectedIndex }
							inView={ inView }
							isMobile={ isMobile }
						/>
					) : null }
				</div>
			</div>
		);
	};

	const renderDots = () => {
		return (
			<div className='flex flex-wrap gap-1'>
				{ carousel.dots.scrollSnaps.map((_, index) => (
					<DotButton
						key={ index }
						onClick={ () => carousel.dots.onClickDot(index) }
						selected={ carousel.dots.selectedIndex === index }
					/>
				)) }
			</div>
		);
	};

	return (
		<div className='w-full pt-[92px] lg:pt-[164px]'>
			<div className='w-full container-center'>
				<div className='max-w-[648px] mx-auto flex flex-col items-center text-center gap-y-3.5'>
					<h2 className='text-2xl sm:text-3xl lg:text-4xl sm:font-medium text-primary -tracking-0.04em font-VictorSerif italic font-medium'>
						{ howItWorksData.title }
					</h2>
					<p className='text-grey-primary text-xs sm:text-sm !leading-5'>
						{ howItWorksData.description }
					</p>
				</div>
			</div>
			<div
				ref={ ref }
				className='relative w-full'>
				{ renderCardList() }
				<div className='absolute bottom-[42px] lg:hidden flex w-full justify-center'>
					{ renderDots() }
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
