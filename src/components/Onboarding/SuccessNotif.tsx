'use client';

import React, { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, Variants } from 'framer-motion';

import { notifTransitionProps } from './transitions';

type SuccessNotifProps = {
	title: string;
	subtitle: string;
};

const variants: Variants = {
	initial: {
		opacity: 0,
		scale: 0.8
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			...notifTransitionProps,
			delay: 1.33
		}
	}
};

const SuccessNotif: React.FC<SuccessNotifProps> = ({ title, subtitle }) => {
	const lottieRef = useRef<Player>(null);

	useEffect(() => {
		if (lottieRef?.current) {
			setTimeout(() => {
				lottieRef?.current?.play();
			}, 1330);
		}
	}, []);

	return (
		<motion.div
			variants={ variants }
			initial='initial'
			animate='visible'
			className='mb-[19px] sm:mb-5 lg:mb-[1.75vh] w-full relative border-[1.5px] border-green-success rounded-[10px] py-2 px-[9px] bg-green-success-background flex gap-x-[9px]'
		>
			<div className='w-[21px]'>
				<Player
					src='https://lottie.host/f3372ff0-3570-431d-a529-7cc4fbd5481a/huZVbKVygH.json'
					keepLastFrame
					className='w-[70px] h-[70px] absolute top-1/2 -translate-y-1/2 -left-[16px]'
					ref={ lottieRef }
				/>
			</div>
			<div className='font-BRSonoma flex flex-col'>
				<h6 className='text-sm font-semibold text-primary leading-[17px] sm:leading-normal text-left'>
					{ title }
				</h6>
				<p className='text-[10.5px] lg:text-xs leading-[13px] sm:leading-normal text-grey-primary font-normal text-left'>
					{ subtitle }
				</p>
			</div>
		</motion.div>
	);
};

export default SuccessNotif;