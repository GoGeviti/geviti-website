'use client';

import React from 'react';
import { AnimatePresence, m } from 'framer-motion';

import { useCarousel } from '@/hooks/embla/use-carousel';

type OverviewDefinitionCarouselProps = {
  slides: {
    id: number;
    name: string;
    content?: React.ReactNode;
  }[];
};
const OverviewDefinitionCarousel: React.FC<OverviewDefinitionCarouselProps> = ({
	slides,
}) => {
	const carousel = useCarousel({
		loop: true,
	});
	const { mainRef: emblaRef } = carousel;
	const { selectedIndex, scrollSnaps, onClickDot } = carousel.dots;

	return (
		<section className='w-full h-full flex flex-col justify-between'>
			<div
				className='overflow-hidden h-full'
				ref={ emblaRef }>
				<div className='flex h-full touch-pan-y touch-pinch-zoom px-4 -ml-4'>
					{ slides.map((slide, index) => (
						<div
							className='min-w-0 pl-4 flex-[0_0_100%]'
							key={ index }
							style={ { transform: 'translate3d(0, 0, 0)' } }
						>
							<div className='flex items-center justify-center w-full h-full border border-white text-white'>
								{ slide.content ?? null }
							</div>
						</div>
					)) }
				</div>
			</div>

			<div className='mt-20'>
				<div className='flex items-center justify-center gap-[7px]'>
					{ scrollSnaps.map((_, index) => (
						<div
							key={ index }
							className='flex items-center'>
							<AnimatePresence mode='wait'>
								{ index === selectedIndex ? (
									<m.span
										initial={ { opacity: 0 } }
										animate={ { opacity: 1 } }
										exit={ { opacity: 0 } }
										transition={ { duration: 0.5 } }
										className='text-blue-alice text-xs/5 font-Poppins'
									>
										{ slides[selectedIndex].name }
									</m.span>
								) : (
									<m.button
										initial={ { width: 0 } }
										animate={ { width: index === selectedIndex ? 0 : 23 } }
										exit={ { width: 0 } }
										onClick={ () => onClickDot(index) }
										className='bg-[#00A0EA] h-0.5'
										transition={ { duration: 0.5 } }
									/>
								) }
							</AnimatePresence>
						</div>
					)) }
				</div>
			</div>
		</section>
	);
};

export default OverviewDefinitionCarousel;
