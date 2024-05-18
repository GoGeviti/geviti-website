'use client';

import React from 'react';
import { motion } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

export const BAND_DURATION = 1;

type BandProps = {
	delay?: number;
	className?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
};

const Band: React.FC<BandProps> = ({ delay, className, children, style }) => {
	return (
		<motion.div
			variants={ {
				initial: { scale: 0.25, opacity: 0 },
				visible: { scale: 1, opacity: 1 }
			} }
			initial='initial'
			animate='visible'
			transition={ { ease: 'easeInOut', duration: BAND_DURATION, delay } }
			style={ {
				translateX: '-50%',
				translateY: '-50%',
				...style
			} }
			className={ clsxm(
				'absolute top-1/2 left-1/2 rounded-full', className) }>
			{ children }
		</motion.div>
	);
};

export default Band;