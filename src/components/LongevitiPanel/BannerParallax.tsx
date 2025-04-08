'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import longevitiPanelData from '@/constant/data/longevitiPanel';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';

const bannerDataDefault = longevitiPanelData.banner;

type BannerParallaxProps = {
	containerClassName?: string;
	className?: string;
	bannerData?: typeof bannerDataDefault;
	showButton?: boolean;
};

const BannerParallax: React.FC<BannerParallaxProps> = ({ containerClassName, className, bannerData = bannerDataDefault, showButton = true }) => {
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

	return (
		<div className={ clsxm(
			'overflow-hidden rounded-[20px] px-4 lg:px-3 pt-3.5 lg:pt-0 pb-[76px] lg:pb-[164px]',
			containerClassName
		) }>
			<div className={ clsxm(
				'relative overflow-hidden rounded-[20px] w-full h-[447px] sm:h-[497px]',
				className
			) }>
				<div className='relative z-10 max-lg:px-3.5 max-w-[682px] mx-auto w-full h-full flex flex-col items-center justify-center text-center text-white'>
					<h2 className='text-2xl sm:text-3xl lg:text-[46px] sm:font-medium !leading-normal -tracking-0.04em'>
						{ bannerData.title }
					</h2>
					<p className='mt-3.5 text-xs max-lg:!leading-5 lg:text-lg'>
						{ bannerData.description }
					</p>
					{ showButton && (
						<div className='mt-[42px] max-sm:w-full flex justify-center'>
							<ButtonCta
								text={ bannerData.cta.text }
								href={ bannerData.cta.href }
								theme='secondary'
								className='max-sm:w-full'
							/>
						</div>
					) }
				</div>
				<div
					ref={ container }
					className='absolute overflow-hidden inset-0 w-full h-full'
				>
					<motion.div
						style={ { translateY: translateY } }
						className='relative w-full h-full'
					>
						<Image
							src={ bannerData.image }
							alt=''
							className='object-cover max-lg:hidden scale-[1.3]'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
							fill
						/>
						<Image
							src={ bannerData.imageMobile }
							alt=''
							className='object-cover lg:hidden scale-[1.3]'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
							fill
						/>
					</motion.div>
				</div>
				<div className='absolute inset-0 z-[5] bg-black/[0.68]' />
			</div>
		</div>
	);
};

export default BannerParallax;
