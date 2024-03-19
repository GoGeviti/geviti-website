'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { ChevronRight } from '../Icons';

import ButtonCta from './ButtonCta';

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0
		};
	}
};

const missionData = landingData.mission;
const imagesData = missionData.images;
const images = missionData.images.map(img => img.src);

const Mission: React.FC = () => {
	const [currentIdx, setCurrentIdx] = useState<number>(0);
	const [direction, setDirection] = useState<number>(1);

	const currentImageTheme = imagesData[currentIdx]?.theme;

	const handleNext = () => {
		setDirection(1);
		setCurrentIdx(prevIndex =>
			prevIndex + 1 === images.length ? 0 : prevIndex + 1
		);
	};

	const handlePrevious = () => {
		setDirection(-1);

		setCurrentIdx(prevIndex =>
			prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const renderButtonArrowSlider = () => {
		const buttonClassName = 'focus:ring-0 focus:outline-none bg-white text-primary disabled:text-white disabled:backdrop-blur-[12.7px] disabled:bg-white/20 rounded-full w-[46px] h-[46px] relative';

		return (
			<div className='flex items-center gap-6'>
				<button
					onClick={ handlePrevious }
					className={ buttonClassName }
					disabled={ currentIdx === 0 }
					aria-label={ `prev-slider-${ currentIdx }` }
				>
					<ChevronRight className='rotate-180 flex-shrink-0 absolute-center' />
				</button>

				<button
					onClick={ handleNext }
					className={ buttonClassName }
					disabled={ currentIdx === images.length - 1 }
					aria-label={ `next-slider-${ currentIdx }` }
				>
					<ChevronRight className='flex-shrink-0 absolute-center' />
				</button>
			</div>
		);
	};

	return (
		<div className='lg:px-3 overflow-hidden'>
			<div className='bg-grey-secondary h-full w-full rounded-19px relative overflow-hidden'>
				<div className='container-center max-lg:pb-[54px] grid-cols-1 grid lg:grid-cols-2 max-lg:gap-y-7 lg:gap-x-8 lg:relative'>
					<div className='h-[811px] lg:py-[100px] xl:h-[39.514vw] w-full'>
						<div className='h-full flex flex-col justify-end lg:justify-center relative z-10 max-lg:w-full lg:max-w-2xl mx-auto lg:mx-0'>
							<div className={ clsxm('text-center lg:text-left lg:max-w-2xl max-lg:mx-auto', currentImageTheme === 'light' ? 'bg-black/40 py-[42px] px-[27px] rounded-19px' : '') }>
								<p className='mb-3.5 sm:mb-7px text-pretitle text-grey-primary lg:text-white'>{ missionData.preTitle }</p>

								{ missionData.title && (
									<h2 className='md:max-w-[494px] max-lg:mx-auto mb-2.5 sm:mb-5 font-Poppins font-normal text-[6.1vw] xs2:text-2xl md:text-[32px] lg:text-4xl !leading-[133%] sm:!leading-[125%] -tracking-0.04em text-grey-secondary'>
										<span dangerouslySetInnerHTML={ { __html: missionData.title } } />
									</h2>
								) }

								{ missionData.description && (
									<p className='text-grey-primary lg:text-white max-sm:max-w-[330px] max-lg:mx-auto md:max-w-[415px] font-normal text-xs sm:text-sm !leading-5 font-BRSonoma'>
										<span dangerouslySetInnerHTML={ { __html: missionData.description } } />
									</p>
								) }

								<div className='flex max-sm:w-full max-lg:justify-center mt-[52px] sm:mt-[60px]'>
									<ButtonCta
										href={ missionData.btnCta.href }
										externalLink={ missionData.btnCta.externalLink }
										aria-label={ missionData.btnCta.text }
										text={ missionData.btnCta.text }
										theme='secondary'
										className='max-sm:w-full'
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='absolute bottom-20 right-4 lg:right-10 z-10 max-lg:hidden'>
						{ renderButtonArrowSlider() }
					</div>
				</div>
				<div className='max-lg:hidden absolute inset-0 w-full h-full'>
					{ missionData.image && (
						<AnimatePresence
							initial={ false }
							custom={ direction }>
							<motion.img
								key={ currentIdx }
								alt=''
								src={ images[currentIdx] }
								custom={ direction }
								variants={ variants }
								initial='enter'
								animate='center'
								exit='exit'
								transition={ {
									x: { type: 'spring', stiffness: 300, damping: 30 },
									opacity: { duration: 0.2 }
								} }
								loading='lazy'
								className='absolute inset-0 w-full h-full object-cover'
							/>
						</AnimatePresence>
					) }
				</div>
				{ currentImageTheme === 'dark' && (
					<div className='absolute inset-0 bg-mission-mobile-landing lg:bg-mission-landing lg:rounded-19px h-full z-[5]' />
				) }

				<div className='lg:hidden absolute inset-0 w-full h-full'>
					{ missionData.imageMobile && (
						<div className='relative overflow-hidden w-full h-full'>
							<Image
								src={ missionData.imageMobile }
								alt='mission'
								loading='lazy'
								className='object-cover pointer-events-none'
								sizes='100vw'
								quality={ 100 }
								fill
							/>
						</div>
					) }
				</div>
			</div>
		</div>
	);
};

export default Mission;
