'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'framer-motion';

import { landingData } from '@/constant/data';

import { ArrowNarrowLeft, ArrowNarrowRight, ChevronRight } from '../Icons';

import ButtonCta from './ButtonCta';

const cardVariants = {
	initial: (trend: number) => ({
		y: trend === 1 ? 100 : -60,
		scale: trend === 1 ? 1 : 0.5,
		opacity: 0,
	}),
	animate: { y: 0, opacity: 1, scale: 1 },
	exit: (trend: number) => ({
		y: trend === 1 ? -60 : 100,
		scale: trend === 1 ? 0.5 : 1,
		opacity: 0
	}),
};

const featuresCarouselData = landingData.features;
const cards = featuresCarouselData.cards;

const FeaturesCarousel: React.FC = () => {
	const { ref, inView } = useInView();

	const [idx, setIdx] = useState<number>(0);
	const [trend, setTrend] = useState<number>(1);

	const vidRef = useRef<HTMLVideoElement | null>(null);

	const activeIdx = Math.abs(idx % cards.length);

	useEffect(() => {
		if (inView) {
			setTimeout(() => {
				if (vidRef.current) {
					vidRef.current.play();
				}
			}, 750);
		}
	}, [inView, activeIdx, vidRef?.current]);

	const handleNext = () => {
		setIdx(prevIndex =>
			prevIndex + 1 === cards.length ? 0 : prevIndex + 1
		);
		setTrend(1);
	};

	const handlePrevious = () => {
		setIdx(prevIndex =>
			prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1
		);
		setTrend(-1);
	};

	const renderButtonArrowSlider = () => {
		const buttonClassName =
			'focus:ring-0 focus:outline-none relative max-lg:bg-white text-primary lg:text-blue-primary disabled:text-white lg:disabled:text-grey-200 max-lg:disabled:backdrop-blur-[12.7px] max-lg:disabled:bg-white/20 max-lg:rounded-full max-lg:w-[46px] max-lg:h-[46px]';

		return (
			<div className='flex items-center max-lg:justify-between lg:gap-[11px]'>
				<button
					onClick={ handlePrevious }
					className={ buttonClassName }
					disabled={ idx === 0 }
					aria-label={ `prev-slider-${ idx }` }
				>
					<ChevronRight className='w-[17px] h-[17px] flex-shrink-0 absolute-center rotate-180 lg:hidden' />
					<ArrowNarrowLeft className='w-6 h-6 flex-shrink-0 max-lg:hidden' />
				</button>

				<button
					onClick={ handleNext }
					className={ buttonClassName }
					aria-label={ `next-slider-${ idx }` }
				>
					<ChevronRight className='w-[17px] h-[17px] flex-shrink-0 absolute-center lg:hidden' />
					<ArrowNarrowRight className='w-6 h-6 flex-shrink-0 max-lg:hidden' />
				</button>
			</div>
		);
	};

	const getVideoSource = (id: string) => {
		if (id === 'doctor') return '/videos/doctor.mp4';
		if (id === 'coaching') return '/videos/coaching.mp4';
		if (id === 'protocols') return '/videos/protocols.mp4';
		if (id === 'education') return '/videos/education.mp4';
	};

	const renderAnimatedContentCard = (id: string) => {
		const src = getVideoSource(id);

		if (src) {
			return (
				<video
					id={ `video-${ activeIdx }` }
					ref={ vidRef }
					// autoPlay={ activeIdx === 0 }
					muted
					playsInline
					className='w-full h-full object-cover absolute inset-0'
				>
					<source
						src={ src }
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>
			);
		}

		return null;
	};

	return (
		<div className='lg:px-3'>
			<div
				ref={ ref }
				className='bg-primary rounded-19px py-6 lg:pt-50px lg:pb-[126px]'>
				<div className='container-center w-full'>
					<div className='flex items-center space-x-14 max-lg:hidden'>
						<div className='overflow-hidden rounded-full bg-grey-950 relative w-full'>
							<motion.div
								className='h-1 rounded-full bg-blue-primary'
								initial={ { width: '0%' } }
								animate={ { width: ((idx + 1) * (100 / cards.length)) + '%' } }
								transition={ {
									duration: 1,
									ease: 'easeInOut'
								} }
							/>
						</div>
						{ renderButtonArrowSlider() }
					</div>

					<div className='lg:mt-[124px]'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-[33px]'>
							<div className='lg:max-w-[460px] w-full'>
								<p className='max-lg:mb-2.5 text-pretitle text-[#5F6D7B] sm:text-grey-300'>{ featuresCarouselData.preTitle }</p>
								<h2 className='text-white !leading-[133%] text-[6.857vw] xxs:text-[6.154vw] xs2:text-2xl lg:text-[3.853vw] xl:text-[42px] sm:!leading-normal -tracking-0.04em'>
									<span dangerouslySetInnerHTML={ { __html: featuresCarouselData.title } } />
								</h2>
								<p className='mt-2.5 lg:mt-3.5 text-grey-400 sm:text-grey-300 text-xs sm:text-sm !leading-5'>{ featuresCarouselData.description }</p>
								<div className='flex mt-[33px] lg:mt-[42px] max-lg:justify-center max-sm:w-full'>
									<ButtonCta
										href={ featuresCarouselData.btnCta.href }
										text={ featuresCarouselData.btnCta.text }
										theme='secondary'
										className='max-sm:w-full'
									/>
								</div>
							</div>
							<div className='flex justify-center lg:justify-end relative'>
								<div className='w-full sm:w-[448px] relative h-[358px] sm:h-[390px]'>
									<AnimatePresence
										initial={ false }
										custom={ trend }>
										<motion.span
											custom={ trend }
											variants={ cardVariants }
											initial='initial'
											animate='animate'
											exit='exit'
											key={ cards[activeIdx].id }
											transition={ { duration: 1, ease: 'easeInOut' } }
											className='text-primary font-Poppins p-4 lg:p-6 rounded-19px bg-white absolute inset-0 w-full h-full'
										>
											<span className='flex flex-col gap-3'>
												<span className='h-full aspect-[400/174] max-h-[174px] w-full bg-blue-alice rounded-2xl relative overflow-hidden'>
													{ renderAnimatedContentCard(cards[activeIdx].id) }
												</span>
												<p className='text-2xl !leading-normal'>{ cards[activeIdx].title }</p>
												<p className='text-[3.5vw] xs2:text-sm sm:text-lg !leading-normal'>
													<span dangerouslySetInnerHTML={ { __html: cards[activeIdx].description } } />
												</p>
											</span>
										</motion.span>
									</AnimatePresence>
								</div>
							</div>
							<div className='lg:hidden'>
								{ renderButtonArrowSlider() }
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesCarousel;