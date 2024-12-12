'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

// import { features } from 'process';
import landingData from '@/constant/data/landing';
import clsxm from '@/helpers/clsxm';

// import { screens } from '@/helpers/style';
// import { useWindowDimensions } from '@/hooks';
import ButtonCta from '../ButtonCta';
import { ArrowNarrowLeft, ArrowNarrowRight, ChevronRight } from '../Icons';

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
		opacity: 0,
	}),
};

const featuresCarouselData = landingData.features;
// const cards = featuresCarouselData;

const FeaturesCarousel: React.FC = () => {

	// const windowDimensions = useWindowDimensions();
	// const isMobile = windowDimensions.width < screens.md;

	const { ref } = useInView();

	const [idx, setIdx] = useState<number>(0);
	const [trend, setTrend] = useState<number>(1);

	// const vidRef = useRef<HTMLVideoElement | null>(null);

	const activeIdx = Math.abs(idx % featuresCarouselData.length);

	// useEffect(() => {
	// 	if (inView) {
	// 		setTimeout(() => {
	// 			if (vidRef.current) {
	// 				vidRef.current.play();
	// 			}
	// 		}, 750);
	// 	}
	// }, [inView, activeIdx, vidRef?.current]);

	const handleNext = () => {
		setIdx(prevIndex => (prevIndex + 1 === featuresCarouselData.length ? 0 : prevIndex + 1));
		setTrend(1);
	};

	const handlePrevious = () => {
		setIdx(prevIndex =>
			prevIndex - 1 < 0 ? featuresCarouselData.length - 1 : prevIndex - 1
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
					aria-label={ `prev-slider-${idx}` }
				>
					<ChevronRight className='w-[17px] h-[17px] flex-shrink-0 absolute-center rotate-180 lg:hidden' />
					<ArrowNarrowLeft className='w-6 h-6 flex-shrink-0 max-lg:hidden' />
				</button>

				<button
					onClick={ handleNext }
					className={ buttonClassName }
					disabled={ idx === featuresCarouselData.length - 1 }
					aria-label={ `next-slider-${idx}` }
				>
					<ChevronRight className='w-[17px] h-[17px] flex-shrink-0 absolute-center lg:hidden' />
					<ArrowNarrowRight className='w-6 h-6 flex-shrink-0 max-lg:hidden' />
				</button>
			</div>
		);
	};

	const getVideoSource = (id: string) => {
		if (id === 'doctor') return '/images/landing/feature-01.webp';
		if (id === 'coaching') return '/images/landing/feature-03.webp';
		if (id === 'protocols') return '/images/landing/feature-02.webp';
		if (id === 'education') return '/images/landing/feature-04.webp';
	};

	const renderAnimatedContentCard = (id: string) => {
		const src = getVideoSource(id);

		if (src) {
			return (
				<Image
					alt='card'
					src={ src }
					width={ 448 }
					height={ 390 }
				/>
				// <video
				// 	id={ `video-${activeIdx}` }
				// 	// ref={ vidRef }
				// 	autoPlay={ true }
				// 	muted
				// 	playsInline
				// 	className='w-full h-full object-cover absolute inset-0'
				// >
				// 	<source
				// 		src={ src }
				// 		type='video/mp4' />
			//   Your browser does not support the video tag.
				// </video>
			);
		}

		return null;
	};

	const renderMobile = () => {
		return (
			<>
				<div className='lg:hidden'>
					<div
						className='grid grid-cols-1 lg:grid-cols-2 gap-[33px]'>
						<div className='lg:max-w-[460px] w-full'>
							<p className='max-lg:mb-2.5 text-pretitle text-[#5F6D7B] sm:text-grey-300'>
								{ featuresCarouselData![activeIdx]?.preTitle }
							</p>
							<h2 className='text-white !leading-[133%] text-[6.857vw] xxs:text-[6.154vw] xs2:text-2xl lg:text-[3.853vw] xl:text-[42px] sm:!leading-normal -tracking-0.04em'>
								<span
									dangerouslySetInnerHTML={ {
										__html: featuresCarouselData![activeIdx]?.title,
									} }
								/>
							</h2>
							<p className='mt-2.5 lg:mt-3.5 text-grey-400 sm:text-grey-300 text-xs sm:text-sm !leading-5'>
								{ featuresCarouselData![activeIdx]?.description }
							</p>
							{
									featuresCarouselData![activeIdx]?.btnCta && (
									<div className='flex mt-[33px] lg:mt-[42px] max-lg:justify-center max-sm:w-full'>
										<ButtonCta
											href={ featuresCarouselData![activeIdx]?.btnCta?.href }
											text={ featuresCarouselData![activeIdx]?.btnCta?.text }
											theme='secondary'
											className='max-sm:w-full'
										/>
									</div>
								)
							}
						</div>
						<div className='flex justify-center lg:justify-end relative'>
							<div className='w-full sm:w-[448px] relative h-[358px] sm:h-[390px]'>
								<AnimatePresence
									initial={ false }
									custom={ trend }
								>
									<motion.span
										custom={ trend }
										variants={ cardVariants }
										initial='initial'
										animate='animate'
										exit='exit'
										key={ featuresCarouselData![activeIdx]?.card.id }
										transition={ { duration: 1, ease: 'easeInOut' } }
										className='text-primary font-Poppins p-4 lg:p-6 rounded-19px bg-white absolute inset-0 w-full h-full'
									>
										<span className='flex flex-col gap-3'>
											<span className='h-full aspect-[400/174] max-h-[174px] w-full bg-blue-alice rounded-2xl relative overflow-hidden'>
												{ renderAnimatedContentCard(featuresCarouselData![activeIdx]?.card.id) }
											</span>
											<p className='text-2xl !leading-normal'>
												{ featuresCarouselData![activeIdx]?.card.title }
											</p>
											<p className='text-[3.5vw] xs2:text-sm sm:text-lg !leading-normal'>
												<span
													dangerouslySetInnerHTML={ {
														__html: featuresCarouselData![activeIdx]?.card.description,
													} }
												/>
											</p>
										</span>
									</motion.span>
								</AnimatePresence>
							</div>
						</div>
					</div>

				</div>
				<div className='lg:hidden'>{ renderButtonArrowSlider() }</div>
			</>
		)
	}

	const renderDesktopFeature = (feature: any, featureIdx: number) => {
		
		return (
		  <div
				key={ featureIdx }
				className={ clsxm(
					'bg-primary sticky rounded-19px py-6 lg:py-[73px] max-lg:hidden',
					'transition-all duration-300 top-20',
				  ) }
		  >
				<div
			  className='container-center flex flex-col gap-11 w-full'
			 
				>
			  <div
						className='grid grid-cols-1 lg:grid-cols-2 gap-[33px]'>
						<div className={ clsxm(
							'lg:max-w-[460px] w-full',
							featureIdx % 2 !== 0 ? 'lg:order-2' : 'lg:ml-[18%]'
						) }>
							<p className='max-lg:mb-2.5 text-pretitle text-[#5F6D7B] sm:text-grey-300'>
								{ feature.preTitle }
							</p>
							<h2 className='text-white !leading-[133%] text-[6.857vw] xxs:text-[6.154vw] xs2:text-2xl lg:text-[3.853vw] xl:text-[42px] sm:!leading-normal -tracking-0.04em'>
								<span
									dangerouslySetInnerHTML={ {
										__html: feature.title,
									} }
								/>
							</h2>
							<p className='mt-2.5 lg:mt-3.5 text-grey-400 sm:text-grey-300 text-xs sm:text-sm !leading-5'>
								{ feature.description }
							</p>
							{
								feature.btnCta && (
									<div className='flex mt-[33px] lg:mt-[42px] max-lg:justify-center max-sm:w-full'>
										<ButtonCta
											href={ feature.btnCta.href }
											text={ feature.btnCta.text }
											theme='secondary'
											className='max-sm:w-full'
										/>
									</div>
								)
							}
						</div>
						<div className={ clsxm(
							'flex relative',
							featureIdx % 2 !== 0 ? 'lg:order-1' : 'justify-center lg:justify-end'
						) }>
							<div className='w-full sm:w-[448px] relative h-[358px] sm:h-[390px]'>
								<span className='text-primary font-Poppins p-3.5 rounded-19px bg-white absolute inset-0 w-full h-full'>
									<div className='h-full w-full bg-blue-alice rounded-2xl relative overflow-hidden'>
										{ renderAnimatedContentCard(feature.card.id) }
									</div>
								</span>
							</div>
						</div>
					</div>
				</div>
		  </div>
		);
	  };

	return (
		<div className='lg:px-3'>

			<div className='max-lg:hidden flex flex-col gap-5' >
				{
					featuresCarouselData.map((feature, featureIdx) =>
						renderDesktopFeature(feature, featureIdx)
					)
				}
			</div>

			<div
				ref={ ref }
				className='bg-primary lg:hidden rounded-19px py-6 lg:py-[73px]'
			>
				<div className='container-center flex flex-col gap-11 w-full'>
					{ /* <div className='max-lg:hidden flex flex-col gap-[110px]'>
						{
							featuresCarouselData.map((feature, featureIdx) => {
								return (
									<div
										key={ featureIdx }
										className='grid grid-cols-1 lg:grid-cols-2 gap-[33px]'>
										<div className={ clsxm(
											'lg:max-w-[460px] w-full',
											featureIdx % 2 !== 0 ? 'lg:order-2' : 'lg:ml-[18%]'
										) }>
											<p className='max-lg:mb-2.5 text-pretitle text-[#5F6D7B] sm:text-grey-300'>
												{ feature.preTitle }
											</p>
											<h2 className='text-white !leading-[133%] text-[6.857vw] xxs:text-[6.154vw] xs2:text-2xl lg:text-[3.853vw] xl:text-[42px] sm:!leading-normal -tracking-0.04em'>
												<span
													dangerouslySetInnerHTML={ {
														__html: feature.title,
													} }
												/>
											</h2>
											<p className='mt-2.5 lg:mt-3.5 text-grey-400 sm:text-grey-300 text-xs sm:text-sm !leading-5'>
												{ feature.description }
											</p>
											{
												feature.btnCta && (
													<div className='flex mt-[33px] lg:mt-[42px] max-lg:justify-center max-sm:w-full'>
														<ButtonCta
															href={ feature.btnCta.href }
															text={ feature.btnCta.text }
															theme='secondary'
															className='max-sm:w-full'
														/>
													</div>
												)
											}
										</div>
										<div className={ clsxm(
											'flex relative',
											featureIdx % 2 !== 0 ? 'lg:order-1' : 'justify-center lg:justify-end'
										) }>
											<div className='w-full sm:w-[448px] relative h-[358px] sm:h-[390px]'>
												<span className='text-primary font-Poppins p-3.5 rounded-19px bg-white absolute inset-0 w-full h-full'>
													<div className='h-full w-full bg-blue-alice rounded-2xl relative overflow-hidden'>
														{ renderAnimatedContentCard(feature.card.id) }
													</div>
												</span>
											</div>
										</div>
									</div>
								)
							})
						}
					</div> */ }
					{ renderMobile() }
				</div>
			</div>
		</div>
	);
};

export default FeaturesCarousel;
