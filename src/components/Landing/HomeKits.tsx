'use client';

import React, { useCallback, useRef, useState } from 'react';
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
} from 'framer-motion';
import Image from 'next/image';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import LogoBlueLayer from '../../../public/images/landing/compressed/blue-geviti.webp';
import CursorSlider from '../CursorSlider';
import CustomLink from '../CustomLink';
import { ArrowNarrowLeft, ArrowNarrowRight, ChevronRight } from '../Icons';
import ShiftSection from '../ShiftSection';

const imgVariants = {
	initial: (trend: number) => ({
		x: trend === 1 ? '200%' : '-200%',
	}),
	animate: { x: '-50%', opacity: 1 },
	exit: (trend: number) => ({
		x: trend === 1 ? '-200%' : '200%',
	}),
};

const homeKitsData = landingData.homeKits;
const list = homeKitsData.carousel;

const HomeKits: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
	const windowDimensions = useWindowDimensions();

	const [idx, setIdx] = useState<number>(0);
	const [prevIdx, setPrevIdx] = useState<number>(idx);
	const [trend, setTrend] = useState<number>(-1);

	const activeIdx = Math.abs(idx % list.length);
	const currentData = list[activeIdx];
	const isMobile = windowDimensions.width < screens.lg;

	const handleNext = () => {
		setPrevIdx(idx);
		setIdx(prevIndex => (prevIndex + 1 === list.length ? 0 : prevIndex + 1));
		setTrend(1);
	};

	const handlePrevious = () => {
		setPrevIdx(idx);
		setIdx(prevIndex =>
			prevIndex - 1 < 0 ? list.length - 1 : prevIndex - 1
		);
		setTrend(-1);
	};

	const renderButtonArrowSlider = () => {
		const buttonClassName =
      'focus:ring-0 focus:outline-none relative text-primary disabled:text-grey-200';

		return (
			<div className='flex items-center gap-[11px]'>
				<button
					onClick={ handlePrevious }
					className={ buttonClassName }
					disabled={ idx === 0 }
					aria-label={ `prev-slider-${idx}` }
				>
					<ArrowNarrowLeft className='w-6 h-6 flex-shrink-0' />
				</button>

				<button
					onClick={ handleNext }
					className={ buttonClassName }
					aria-label={ `next-slider-${idx}` }
				>
					<ArrowNarrowRight className='w-6 h-6 flex-shrink-0' />
				</button>
			</div>
		);
	};

	const onClickBtnCta = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement>) => {
			const href = homeKitsData.btnCta.href;
			if (href.startsWith('#')) {
				e.preventDefault();
				const destination = document.querySelector(href);
				if (destination) {
					destination.scrollIntoView({
						behavior: 'smooth',
					});
				}
			}
		},
		[homeKitsData.btnCta.href]
	);

	const renderButtonViewAll = () => {
		return (
			<CustomLink
				href={ homeKitsData.btnCta.href }
				aria-label={ homeKitsData.btnCta.text }
				onClick={ onClickBtnCta }
				className='btn btn-primary flex items-center gap-7px sm:gap-2 !translate-y-0 group flex-shrink-0'
			>
				<span className='text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-Poppins'>
					{ homeKitsData.btnCta.text }
				</span>

				<ChevronRight className='stroke-grey-secondary w-4 h-4 sm:w-18px sm:h-18px group-hover:translate-x-1 transform transition-all duration-100' />
			</CustomLink>
		);
	};

	const renderProgressBar = () => {
		return (
			<div className='overflow-hidden rounded-full bg-grey-100 relative w-full'>
				<motion.div
					className='h-1 rounded-full bg-blue-primary'
					initial={ { width: '0%' } }
					animate={ { width: (idx + 1) * (100 / list.length) + '%' } }
					transition={ {
						duration: 0.9,
						ease: 'easeInOut',
					} }
				/>
			</div>
		);
	};

	const renderDesktopImage = () => {
		const defaultImageDesktopClassName =
      'h-full object-contain pointer-events-none relative';

		if (currentData.id === 'homekits') {
			return (
				<Image
					src={ currentData.image }
					alt=''
					width={ 1400 }
					height={ 1400 }
					priority
					className={ clsxm(
						'w-[950px] left-[55%] -translate-x-[55%]',
						defaultImageDesktopClassName
					) }
				/>
			);
		}

		if (currentData.id === 'therapy') {
			return (
				<Image
					src={ currentData.image }
					alt=''
					width={ 1400 }
					height={ 1400 }
					priority
					className={ clsxm(
						'w-[1100px] -mt-[110px] left-[85%] -translate-x-[85%]',
						defaultImageDesktopClassName
					) }
				/>
			);
		}

		if (currentData.id === 'prescription') {
			return (
				<Image
					src={ currentData.image }
					alt=''
					width={ 1166 }
					height={ 657 }
					priority
					className={ clsxm(
						'w-[1155px] mt-[50px] left-[47%] -translate-x-[47%]',
						defaultImageDesktopClassName
					) }
				/>
			);
		}

		return null;
	};

	const renderTitle = (title: string) => {
		return (
			<h2 className='text-primary text-[5.581vw] xs:text-2xl md:text-3xl lg:text-[3.75vw] xl:text-5xl !leading-[133%] md:!leading-normal -tracking-0.04em'>
				{ title }
			</h2>
		);
	};

	const renderPreTitle = (preTitle: string) => {
		return <p className='text-pretitle text-grey-primary'>{ preTitle }</p>;
	};

	const renderDescription = (description: string) => {
		return (
			<p
				className='text-grey-400 text-[2.791vw] xs:text-xs max-sm:!leading-5 sm:text-base lg:text-lg !leading-normal text-center lg:text-left'
				dangerouslySetInnerHTML={ { __html: description } }
			/>
		);
	};

	const handleScrollCarousel = useCallback(
		(e: React.UIEvent<HTMLDivElement>) => {
			const element = e.currentTarget;

			const windowScroll = element.scrollLeft;
			const totalWidth = element.scrollWidth - element.clientWidth;
			let scrollProgress = 0;
			if (windowScroll === 0) scrollProgress = 0;
			if (windowScroll > totalWidth) scrollProgress = 100;
			else scrollProgress = (windowScroll / totalWidth) * 100;

			const activeItemIdx = Math.floor((scrollProgress * list.length) / 110);
			setIdx(activeItemIdx);
		},
		[]
	);

	const renderImages = () => {
		if (isMobile && windowDimensions.width > 0) {
			return (
				<div className='absolute-center w-full h-full'>
					<div
						onScroll={ handleScrollCarousel }
						className='z-2 relative no-scrollbar w-full flex flex-nowrap overflow-y-hidden overflow-x-scroll snap-x snap-mandatory scroll-smooth'
					>
						{ list.map(item => {
							return (
								<motion.div
									key={ `scroll-image-${item.id}` }
									style={ { y: backgroundY } }
									className={ clsxm(
										'flex relative z-2 snap-start',
										item.id === 'homekits' && 'pt-10',
										item.id === 'therapy' && 'pt-[50px]',
										item.id === 'prescription' && 'pt-[70px]'
									) }
								>
									<div
										className={ clsxm(
											'relative w-screen h-[380.13px] sm:h-[50vw]'
										) }
									>
										<Image
											src={ item.imageMobile }
											fill
											alt=''
											className={ clsxm(
												item.id !== 'prescription'
													? 'object-cover sm:object-contain'
													: 'object-contain',
												'w-full h-full'
											) }
										/>
									</div>
								</motion.div>
							);
						}) }
					</div>
				</div>
			);
		}

		return (
			<AnimatePresence
				initial={ false }
				custom={ trend }>
				<motion.div
					variants={ imgVariants }
					custom={ trend }
					initial='initial'
					animate='animate'
					exit='exit'
					key={ `image-${currentData.id}` }
					style={ { x: '-50%', y: '-50%' } }
					transition={ { duration: 0.9, ease: 'easeInOut' } }
					className='absolute-center w-full h-full'
				>
					<motion.div
						style={ { y: backgroundY } }
						className='relative flex z-2'>
						{ renderDesktopImage() }
					</motion.div>
				</motion.div>
			</AnimatePresence>
		);
	};

	return (
		<div
			ref={ containerRef }
			className='pt-[65px] pb-[84px] lg:pt-[74px] lg:pb-[140px] h-full relative overflow-hidden font-Poppins'
		>
			<div className='container-center'>
				<div className='flex items-center space-x-14 max-lg:hidden'>
					{ renderProgressBar() }
					{ renderButtonArrowSlider() }
				</div>
				<div>
					<div className='lg:flex lg:justify-between gap-4 mt-[42px]'>
						<div className='max-lg:text-center flex flex-col max-lg:justify-center max-lg:gap-2.5'>
							{ renderPreTitle(currentData.preTitle) }
							<ShiftSection
								id={ `title-${currentData.id}` }
								prevElement={ renderTitle(list[prevIdx].title) }
								isMobile={ isMobile }
								wrapperClassName='lg:min-h-[72px]'
							>
								{ renderTitle(currentData.title) }
							</ShiftSection>
						</div>
						<div className='flex mt-6 max-lg:hidden'>
							<div className='flex items-center'>{ renderButtonViewAll() }</div>
						</div>
					</div>
					<div className='mt-2.5 lg:mt-3.5 w-full sm:max-w-[600px] lg:max-w-none max-lg:mx-auto min-h-[135px]'>
						<ShiftSection
							id={ `description-${currentData.id}` }
							prevElement={ renderDescription(list[prevIdx].description) }
							isMobile={ isMobile }
							wrapperClassName='lg:min-h-[135px]'
						>
							{ renderDescription(currentData.description) }
						</ShiftSection>
					</div>
				</div>
			</div>
			<div className='group relative'>
				<CursorSlider onClick={ handleNext } />

				<div className='flex h-full justify-center relative pt-[294px] lg:pt-[451px] lg:max-w-[1360px] lg:mx-auto'>
					<motion.div
						style={ { y: 0 } }
						className='px-4 lg:px-10 flex flex-col z-1'
					>
						<Image
							src={ LogoBlueLayer }
							alt=''
							width={ 1227.73 }
							height={ 288.65 }
							className='w-full h-full object-contain pointer-events-none'
						/>
						<div className='flex flex-col justify-center gap-6 w-full mt-[59px] lg:hidden'>
							{ renderProgressBar() }
							<p className='text-xs !leading-5 text-center text-grey-400'>
                Slide for More
							</p>
						</div>
					</motion.div>
					{ renderImages() }
				</div>
			</div>
		</div>
	);
};

export default HomeKits;
