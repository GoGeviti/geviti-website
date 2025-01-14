'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useCarousel } from '@/hooks/embla/use-carousel';

import AnimatedLine from './AnimatedLine';
import PathText from './PathText';
import PointCircle from './PointCircle';

const content1 = {
	title: 'Hematopoietic Stem Cells',
	description:
    'Primarily responsible for forming blood and immune cells, contributing to immune system regulation.',
};

const content2 = {
	title: 'Mobile Stem Cell Therapy',
	description:
    ' The worlds most powerful tool to boost regeneration, reduce inflammation, improve energy, and support anti-aging',
};

const slides = [content1, content2];

const MobileTherapy = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const carousel = useCarousel({
		loop: true,
		duration: 25,
		align: 'start',
	});
	const { mainRef: emblaRef } = carousel;

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const renderCardList = () => {
		return (
			<div
				className='overflow-hidden'
				ref={ emblaRef }>
				<div className='lg:container-center flex flex-nowrap touch-pan-y touch-pinch-zoom scrolling-touch scroll-smooth'>
					{ isMounted
						? slides.map((slide, index) => (
							<div
								key={ slide.title }
								className='w-full min-w-0 flex flex-none px-4'
							>
								<div
									className='p-[3px] rounded-[20px] bg-blend-screen'
									style={ {
										background:
                        'linear-gradient(0deg, #212261, #212261), radial-gradient(47.54% 47.54% at 50.14% 0%, #743DF2 0%, rgba(18, 18, 53, 0) 100%)',
									} }
								>
									<div
										className='p-6 rounded-[19px] bg-blend-screen mix-blend-normal'
										style={ {
											background:
                          'radial-gradient(117.12% 161.33% at 50% 23.87%, #2D2E83 0%, #212261 18%, #131337 43%, #0B0F26 66%, #0B0F26 86%, #0B0F26 100%)',
										} }
									>
										<p className='text-sm/6 font-semibold text-white tracking-0.11em uppercase'>
											{ slides[index]?.title }
										</p>
										<p className='mt-2 text-xs/5 text-white'>
											{ slides[index]?.description }
										</p>
									</div>
								</div>
							</div>
						))
						: null }
				</div>
			</div>
		);
	};

	return (
		<div className='mb-[95px] lg:mb-[149px] xxxl:container-center relative isolate flex flex-col font-Poppins'>
			<Image
				src='/images/stem-cells/mobile-therapy/apps.webp'
				alt='apps'
				width={ 14400 }
				height={ 9590 }
				className='w-[672px] h-[448px] max-sm:object-cover sm:w-screen sm:h-auto'
				quality={ 100 }
			/>
			<div className='lg:hidden w-full'>{ renderCardList() }</div>

			<div className='absolute top-[10%] lg:top-[13%] left-[48.5%]'>
				<div className='relative'>
					<PointCircle />

					<div className='max-lg:hidden absolute left-[138.92px] bottom-[172px]'>
						<div className='relative'>
							<AnimatedLine
								svgProps={ {
									width: '323',
									height: '45',
									viewBox: '0 0 323 45',
								} }
								pathProps={ {
									d: 'M0.918472 44.7386L40.5566 5.10051C43.1821 2.475 46.743 1 50.4561 1H322.541',
								} }
							/>
							<div className='absolute max-w-[317px] top-[23.15px] left-[76.62px]'>
								<PathText { ...content1 } />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='absolute top-[40%] lg:top-[58%] left-[22%] lg:left-[35%]'>
				<div className='max-lg:hidden relative'>
					<PointCircle />

					<div className='max-lg:hidden absolute right-[138.92px] -bottom-[51px]'>
						<div className='relative'>
							<AnimatedLine
								svgProps={ {
									width: '322',
									height: '46',
									viewBox: '0 0 322 46',
								} }
								pathProps={ {
									d: 'M321.623 0.999672L281.984 40.6378C279.359 43.2633 275.798 44.7383 272.085 44.7383H-1.52588e-05',
								} }
							/>

							<div className='max-lg:hidden absolute bottom-[23.15px] right-[76.62px]'>
								<PathText { ...content2 } />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileTherapy;
