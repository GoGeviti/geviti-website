'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import landingData from '@/constant/data/landing';

import LogoBlueLayer from '../../../public/images/landing/compressed/blue-geviti.webp';
import SupplementsLayer from '../../../public/images/landing/compressed/supplements-shadows.webp';

const supplementsData = landingData.supplements;

const Supplements: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -250]);
	const backgroundYMobile = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<div
			ref={ containerRef }
			className='mt-16 lg:pt-[72px] relative overflow-hidden font-Poppins'
		>
			<div className='container-center flex flex-col items-center text-center'>
				<p className='max-lg:mb-2.5 text-pretitle text-grey-primary'>
					{ supplementsData.preTitle }
				</p>
				<h3 className='text-2xl sm:text-4xl md:text-5xl lg:text-[62px] lg:!leading-normal -tracking-0.04em text-primary'>
					<span dangerouslySetInnerHTML={ { __html: supplementsData.title } } />
				</h3>
				<div className='max-w-[342px] sm:max-w-[714px] mx-auto mt-2.5 lg:mt-4'>
					<p className='text-grey-400 text-xs max-sm:!leading-5 sm:text-base lg:text-lg !leading-normal'>
						<span
							dangerouslySetInnerHTML={ { __html: supplementsData.description } }
						/>
					</p>
				</div>
			</div>
			<div className='flex justify-center relative w-full h-full max-lg:mt-3.5'>
				<motion.div
					style={ { y: 0 } }
					className='max-lg:pb-16 mt-[294px] sm:mt-[52vh] lg:mt-0 container-center lg:absolute lg:bottom-[29%] z-1 flex justify-center w-full'
				>
					<Image
						src={ LogoBlueLayer }
						alt=''
						width={ 1227.73 }
						height={ 288.65 }
						className='w-[139.198vh] h-full object-contain pointer-events-none'
						// className='w-full sm:w-[82vw] 2xl:w-[1227px] h-full object-contain z-1 pointer-events-none'
					/>
				</motion.div>
				<div className='relative z-2 max-lg:hidden lg:mt-[5vh] xl:mt-0 -bottom-[160px]'>
					<motion.div style={ { y: backgroundY } }>
						<Image
							src={ SupplementsLayer }
							alt=''
							width={ 1440 }
							height={ 1065 }
							className='w-screen 2xl:w-[1440px] h-full object-contain pointer-events-none scale-[1.15]'
						/>
					</motion.div>
				</div>
				<motion.div
					style={ { y: backgroundYMobile } }
					className='absolute bottom-[65px] z-2 lg:hidden -right-2'
				>
					<Image
						src={ SupplementsLayer }
						alt=''
						width={ 522 }
						height={ 392 }
						className='w-screen h-full lg:hidden pointer-events-none scale-[1.4]'
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Supplements;
