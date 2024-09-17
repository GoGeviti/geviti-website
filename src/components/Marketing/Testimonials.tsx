'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { motion, useMotionValue } from 'framer-motion';

import { marketingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';
import { useCarousel } from '@/hooks/embla/use-carousel';

import DotButton from '../CarouselDotButton';

import ArrowButtons from './ArrowButtons';
import { SectionTitle } from './SectionHeading';

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max);

const TWEEN_FACTOR_BASE = 0.84;
const testimonialsData = marketingData.testimonials;
const list = testimonialsData.list;
type SlideItem = (typeof list)[0];

const Testimonials: React.FC = () => {
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.sm;

	const tweenFactor = useRef(0);
	const carousel = useCarousel({
		loop: true,
		duration: 25,
	});
	const { mainRef, mainApi } = carousel;
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [direction, setDirection] = useState<string>('');
	const [slides, setSlides] = useState<SlideItem[]>(list);

	useEffect(() => {
		const duplicateSlides = Array(6)
			.fill([...testimonialsData.list])
			.flat();

		if (!isMobile) {
			setSlides(duplicateSlides);
		} else {
			setSlides(list);
		}
	}, [isMobile]);

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);

	const tweenOpacity = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			if (!isMobile) {
				const engine = emblaApi.internalEngine();
				const scrollProgress = emblaApi.scrollProgress();
				const slidesInView = emblaApi.slidesInView();
				const isScrollEvent = eventName === 'scroll';

				emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
					let diffToTarget = scrollSnap - scrollProgress;
					const slidesInSnap = engine.slideRegistry[snapIndex];

					slidesInSnap.forEach(slideIndex => {
						if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

						if (engine.options.loop) {
							engine.slideLooper.loopPoints.forEach(loopItem => {
								const target = loopItem.target();

								if (slideIndex === loopItem.index && target !== 0) {
									const sign = Math.sign(target);

									if (sign === -1) {
										diffToTarget = scrollSnap - (1 + scrollProgress);
									}
									if (sign === 1) {
										diffToTarget = scrollSnap + (1 - scrollProgress);
									}
								}
							});
						}

						const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
						const opacity = numberWithinRange(tweenValue, 0.4, 1).toString();
						emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
					});
				});
			}
		},
		[isMobile]
	);

	const selectedCallback = useCallback(() => {
		setIsScrolled(true);
		setTimeout(() => {
			setIsScrolled(false);
			setDirection('');
		}, 320);
	}, []);

	useEffect(() => {
		if (!mainApi) return;

		setTweenFactor(mainApi);
		tweenOpacity(mainApi);
		mainApi
			.on('reInit', setTweenFactor)
			.on('reInit', tweenOpacity)
			.on('scroll', tweenOpacity)
			.on('slideFocus', tweenOpacity)
			.on('select', selectedCallback);

		return () => {
			mainApi
				.off('reInit', setTweenFactor)
				.off('reInit', tweenOpacity)
				.off('scroll', tweenOpacity)
				.off('slideFocus', tweenOpacity)
				.off('select', selectedCallback);
		};
	}, [mainApi, tweenOpacity, selectedCallback, isMobile]);

	const renderDots = () => {
		return (
			<div className='flex flex-wrap gap-2'>
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
		<div className='w-full pt-[33.52px] lg:pt-16'>
			<div className='w-full container-center flex flex-col gap-[42px]'>
				<SectionTitle title={ testimonialsData.title } />

				<ArrowButtons
					{ ...carousel.arrows }
					onClickPrev={ () => {
						carousel.arrows.onClickPrev();
						setDirection('prev');
						setIsScrolled(true);
					} }
					onClickNext={ () => {
						carousel.arrows.onClickNext();
						setDirection('next');
						setIsScrolled(true);
					} }
				/>
			</div>
			<div
				style={
          {
          	'--slide-height': '383.4px',
          	'--slide-spacing': '22px',
          } as React.CSSProperties
				}
				className='w-full relative max-w-[2200px] mx-auto'
			>
				<div
					className='overflow-hidden'
					ref={ mainRef }>
					<div className='flex touch-pan-y touch-pinch-zoom scrolling-touch scroll-smooth [margin-left:calc(var(--slide-spacing)*-1)]'>
						{ slides.map((slide, index) => (
							<CardTestimonial
								key={ index }
								index={ index }
								selectedIndex={ carousel.dots.selectedIndex }
								slide={ slide }
								isScrolled={ isScrolled }
								rotate={ direction === 'next' ? 10 : -10 }
								isMobile={ isMobile }
								totalData={ slides.length }
							/>
						)) }
					</div>
				</div>
				<div className='absolute bottom-[42px] sm:hidden flex w-full justify-center'>
					{ renderDots() }
				</div>
			</div>
		</div>
	);
};

export default Testimonials;

const QuoteIcon = (props?: React.SVGAttributes<SVGSVGElement>) => (
	<svg
		width='37'
		height='39'
		viewBox='0 0 37 39'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{ ...props }
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M7.23507 12.6457C7.81292 12.5061 8.40359 12.4358 8.99609 12.4361C13.6881 12.4361 17.4907 16.7818 17.4907 22.1402C17.4907 27.5003 13.6881 31.8459 8.99609 31.8459C4.30404 31.8459 0.5 27.5019 0.5 22.1402C0.5 21.9834 0.503 21.825 0.5105 21.6682H0.5C0.5 13.5801 6.26006 6.99927 13.3401 6.99927V10.2569C11.0436 10.2569 8.92559 11.1497 7.23507 12.6457ZM26.2463 12.6457C26.8133 12.5081 27.4013 12.4361 28.0043 12.4361C32.6963 12.4361 36.5004 16.7818 36.5004 22.1402C36.5004 27.5003 32.6963 31.8459 28.0043 31.8459C23.3122 31.8459 19.5097 27.5019 19.5097 22.1402C19.5097 21.9834 19.5127 21.825 19.5202 21.6682H19.5097C19.5097 13.5801 25.2698 6.99927 32.3498 6.99927V10.2569C30.0518 10.2569 27.9368 11.1497 26.2463 12.6457Z'
			fill='currentColor'
		/>
	</svg>
);

type CardTestimonialProps = {
  selectedIndex: number;
  index: number;
  slide: {
    body: string;
    author: {
      name: string;
      company: string;
    };
  };
  isScrolled?: boolean;
  isMobile?: boolean;
  rotate?: number;
  totalData: number;
};

const CardTestimonial: React.FC<CardTestimonialProps> = ({
	selectedIndex,
	index,
	slide,
	isScrolled,
	isMobile,
	rotate,
	totalData,
}) => {
	const selected = selectedIndex === index;

	const yPos = useMotionValue<number>(14);

	useEffect(() => {
		const isRightSelected =
      index === (selectedIndex === totalData - 1 ? 0 : selectedIndex + 1);
		const isLeftSelected =
      index === (selectedIndex === 0 ? totalData - 1 : selectedIndex - 1);
		if (selected) yPos.set(42);
		else if (isRightSelected || isLeftSelected) yPos.set(28);
		else yPos.set(14);
	}, [index, selectedIndex]);

	return (
		<div
			className='pt-[42px] pb-[92.6px] min-w-0 [padding-left:var(--slide-spacing)] sm:pb-[188px] flex-[0_0_91.46%] sm:flex sm:flex-none'
			style={ {
				transform: 'translate3d(0, 0, 0)',
			} }
		>
			<motion.div
				className='select-none w-full sm:max-w-[374px] h-full [min-height:var(--slide-height)] rounded-2xl py-[25px] px-7 flex flex-col'
				animate={ {
					...(!isMobile && {
						rotate: isScrolled ? rotate : 0,
					}),
				} }
				style={ {
					...(!isMobile && { y: yPos }),
					background: selected
						? 'linear-gradient(160deg, #A7DAFF 4.78%, #75C5FF 92.54%)'
						: '#F5F6F6',
					boxShadow: selected
						? '0px 182px 51px 0px rgba(110, 173, 221, 0.00), 0px 116px 46px 0px rgba(110, 173, 221, 0.01), 0px 65px 39px 0px rgba(110, 173, 221, 0.05), 0px 29px 29px 0px rgba(110, 173, 221, 0.09), 0px 7px 16px 0px rgba(110, 173, 221, 0.10)'
						: 'none',
				} }
				transition={ { duration: 0.2, ease: 'easeInOut' } }
			>
				<QuoteIcon
					className={ clsxm(
						'flex-shrink-0 transform transition duration-200 ease-in-out',
						selected ? 'text-white' : 'text-blue-primary'
					) }
				/>
				<div className='mt-[41px] mb-[46px]'>
					<p className='text-primary text-2xl -tracking-0.04em !leading-normal'>
						{ slide.body }
					</p>
				</div>
				<div className='flex flex-col flex-1 justify-end'>
					<p
						className={ clsxm(
							'text-xs font-medium !leading-[135%] -tracking-0.04em transform transition duration-200 ease-in-out',
							selected ? 'text-white' : 'text-grey-primary'
						) }
					>
						{ slide.author.name }
					</p>
					<p className='text-primary text-xs !leading-[120%] font-medium -tracking-0.04em'>
						{ slide.author.company }
					</p>
				</div>
			</motion.div>
		</div>
	);
};
