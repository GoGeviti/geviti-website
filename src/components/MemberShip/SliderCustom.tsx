'use client';

import React, { useRef, useState } from 'react';
import SlickSlider from 'react-slick';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { membershipData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import ButtonCta from '../ButtonCta';
import CursorSlider from '../CursorSlider';
import { ChevronRight } from '../Icons';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const sliderVariants = {
	incoming: (direction: number) => ({
		x: direction > 0 ? '100%' : '-100%',
		scale: 1.2,
		opacity: 1
	}),
	active: { x: 0, scale: 1, opacity: 1 },
	exit: (direction: number) => ({
		x: direction > 0 ? '-100%' : '100%',
		scale: 1,
		opacity: 1
	})
};
const scaleVariants = {
	initial: { scale: 0, opacity: 0 },
	enter: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
	closed: { scale: 0, opacity: 0, transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
};

const sliderTransition = {
	duration: 1,
	ease: 'easeInOut'
};

export const wrap = (min: number, max: number, v: number) => {
	const rangeSize = max - min;
	return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const sliderData = membershipData.slider.list;

const SliderCustom: React.FC = () => {
	const sliderRef = useRef<SlickSlider>(null);

	const [[imageCount, direction], setImageCount] = useState<[number, number]>([0, 0]);
	const [cursorActive, setCursorActive] = useState<boolean>(false);

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;
	const activeIdx = wrap(0, sliderData.length, imageCount);
	const currentData = sliderData[activeIdx];

	const swipeToImage = (swipeDirection: number) => {
		setImageCount([imageCount + swipeDirection, swipeDirection]);
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		beforeChange: (currentSlide: number, nextSlide: number) => {
			setImageCount([nextSlide, nextSlide > currentSlide ? 1 : -1]);
		}
	};

	const handleNext = () => {
		if (isMobile) {
			if (sliderRef.current) {
				sliderRef.current.slickNext();
			}
		} else {
			swipeToImage(1);
		}
	};

	const handlePrevious = () => {
		if (isMobile) {
			if (sliderRef.current) {
				sliderRef.current.slickPrev();
			}
		} else {
			swipeToImage(-1);
		}
	};

	const renderButtonArrowSlider = () => {
		const buttonClassName =
			'focus:ring-0 focus:outline-none relative bg-white text-primary disabled:text-white disabled:backdrop-blur-[12.7px] disabled:bg-white/20 rounded-full w-[46px] h-[46px]';

		return (
			<div className='flex items-center max-lg:justify-between lg:gap-[42px]'>
				<button
					onClick={ handlePrevious }
					className={ buttonClassName }
					disabled={ activeIdx === 0 }
					aria-label='prev-slider-membership'
				>
					<ChevronRight className='w-[17px] h-[17px] flex-shrink-0 absolute-center rotate-180' />
				</button>

				<button
					onClick={ handleNext }
					className={ buttonClassName }
					aria-label='next-slider-membership'
				>
					<ChevronRight className='w-[17px] h-[17px] flex-shrink-0 absolute-center' />
				</button>
			</div>
		);
	};

	const renderButtonCta = () => {
		if (currentData.btnCta) {
			return (
				<ButtonCta
					href={ currentData.btnCta.href }
					text={ currentData.btnCta.text }
					className='max-sm:w-full'
					theme='secondary'
				/>
			);
		}

		return null;
	};

	return (
		<div className='overflow-hidden lg:px-3 py-6'>
			<div className='bg-primary h-full w-full rounded-19px relative overflow-hidden font-Poppins'>
				<div className='lg:container-center grid-cols-1 grid lg:grid-cols-2 lg:gap-x-8'>
					<div className='max-lg:order-1 h-[740px] lg:h-[858px]'>
						<div className='max-lg:px-4 pt-6 lg:pt-[84px] pb-[42px] h-full flex flex-col justify-between relative lg:z-10 max-lg:w-full lg:max-w-[592px] mx-auto lg:mx-0'>
							<AnimatePresence initial={ false }>
								<div className='inline-block overflow-hidden h-full'>
									<motion.div
										className='flex flex-col max-sm:justify-between h-full'
										initial='initial'
										animate='animate'
										exit='exit'
										key={ `contentslider-${ activeIdx }` }
										variants={ {
											initial: {
												y: 20,
												opacity: 0,
											},
											animate: { y: 0, opacity: 1 },
											exit: {
												y: 20,
												opacity: 0,
											},
										} }
										transition={ {
											duration: 1,
											ease: 'easeInOut'
										} }
									>
										<div>
											<p className='mb-2 text-pretitle text-grey-primary'>
												{ currentData.preTitle }
											</p>

											<h2 className='mb-6 -tracking-0.04em font-medium text-white text-[6.4vw] xxs2:text-2xl lg:text-4xl !leading-normal'>
												<span dangerouslySetInnerHTML={ { __html: currentData.title } } />
											</h2>

											<p className='text-grey-primary max-sm:max-w-[343px] lg:max-w-[446px] text-xs lg:text-sm !leading-5'>
												{ currentData.description }
											</p>

											{ currentData.list.length
												? (
													<div className='mt-6 lg:mt-[42px]'>
														<ul className='list-disc list-inside text-white text-sm lg:text-lg !leading-8 text-left'>
															{ currentData.list.map(item => (
																<li key={ item }>
																	{ item }
																</li>
															)) }
														</ul>
													</div>
												)
												: null }
										</div>

										{ currentData.btnCta && (
											<div className='py-[42px] sm:py-16 flex max-sm:justify-center max-sm:w-full'>
												{ renderButtonCta() }
											</div>
										) }
									</motion.div>
								</div>
							</AnimatePresence>

							<div className='flex flex-col'>
								{ renderButtonArrowSlider() }
							</div>
						</div>
					</div>
					<div
						className='max-lg:hidden lg:absolute lg:inset-0 lg:right-0 lg:left-1/2 group lg:cursor-none'
						onMouseEnter={ () => setCursorActive(true) }
						onMouseLeave={ () => setCursorActive(false) }
					>
						<CursorSlider
							animationProps={ {
								variants: scaleVariants,
								initial: 'initial',
								animate: cursorActive ? 'enter' : 'closed'
							} }
							onClick={ () => swipeToImage(1) }
						/>
						<div className='w-full lg:absolute lg:inset-0 lg:h-full'>
							<div className='relative w-full h-full overflow-hidden'>
								<AnimatePresence
									initial={ false }
									custom={ direction }>
									<motion.div
										key={ `imageslider-${ imageCount }` }
										custom={ direction }
										variants={ sliderVariants }
										initial='incoming'
										animate='active'
										exit='exit'
										transition={ sliderTransition }
										className='absolute inset-0 w-full h-full'
									>
										<Image
											src={ currentData.image }
											alt=''
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
											quality={ 100 }
											fill
											className='w-full h-full object-cover pointer-events-none'
										/>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</div>

					<div className='lg:hidden order-0'>
						<SlickSlider
							ref={ sliderRef }
							{ ...settings }
							className='!h-[429px] relative overflow-hidden'
						>
							{ sliderData.map((item, index) => (
								<div
									key={ `slidermobile-${ index }` }
									className='relative overflow-hidden w-full h-[429px]'>
									<Image
										src={ item.image }
										alt='slider mobile'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
										quality={ 100 }
										fill
										className='object-cover w-full h-full pointer-events-none'
									/>
								</div>
							)) }
						</SlickSlider>

						<div className='overflow-hidden bg-white/20 relative w-full'>
							<motion.div
								className={ clsxm(
									activeIdx < sliderData.length - 1 && 'rounded-r-full',
									'h-1 bg-blue-primary'
								) }
								initial={ { width: '0%' } }
								animate={ { width: ((activeIdx + 1) * (100 / sliderData.length)) + '%' } }
								transition={ {
									duration: 1,
									ease: 'easeInOut'
								} }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SliderCustom;