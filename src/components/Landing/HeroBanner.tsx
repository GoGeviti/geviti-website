'use client';

import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { motion, useAnimationControls } from 'framer-motion';

import landingData from '@/constant/data/landing';
import { setCookie } from '@/services/cookies';

type HeroBannerProps = {
  showBanner: boolean;
};

const heroData = landingData.hero;

const HeroBanner: React.FC<HeroBannerProps> = ({ showBanner }) => {
	const controlsBanner = useAnimationControls();

	useEffect(() => {
		if (showBanner) {
			controlsBanner.start(
				{ scale: 1 },
				{ ease: 'easeInOut', duration: 0.85, delay: 6 }
			);
		}
	}, [showBanner]);

	const onCloseBanner = () => {
		setCookie({ key: 'close_hero_banner', value: 'true' });
		controlsBanner.start(
			{ opacity: 0, scale: 0 },
			{ ease: 'easeInOut', duration: 0.75 }
		);
	};

	return (
		<motion.div
			animate={ controlsBanner }
			initial={ { scale: 0 } }
			className='absolute max-lg:left-0 right-0 top-[calc(60px+14px)] lg:-top-4'
		>
			<div className='bg-black/15 backdrop-blur-[25px] border border-white/15 relative pl-18px pr-[35px] lg:pr-[42px] py-3 rounded-xl lg:rounded-[18px] flex items-center gap-3 lg:gap-6 w-full lg:max-w-[471px]'>
				<div className='absolute top-0 lg:top-2 right-1.5 lg:right-2'>
					<button
						onClick={ onCloseBanner }
						aria-label='btn-banner'
						className='focus:ring-0 focus:outline-none border border-white/10 bg-white/20 hover:bg-white/30 w-18px h-18px lg:w-[22px] lg:h-[22px] rounded-full relative'
					>
						<IoClose className='text-white w-3.5 h-3.5 absolute-center flex-shrink-0' />
					</button>
				</div>
				<div className='w-[47px] h-[47px] lg:w-16 lg:h-16 flex-shrink-0 rounded-[14px] lg:rounded-19px bg-black relative'>
					<heroData.banner.icon className='w-5 h-5 lg:w-7 lg:h-7 flex-shrink-0 absolute-center' />
				</div>
				<p
					dangerouslySetInnerHTML={ { __html: heroData.banner.text } }
					className='text-[10px] leading-4 lg:text-sm lg:leading-6 font-Poppins text-white'
				/>
			</div>
		</motion.div>
	);
};

export default HeroBanner;
