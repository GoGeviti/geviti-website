'use client';

import React from 'react';
import { motion } from 'framer-motion';

type CircleMaskTransitionProps = {
	style?: React.CSSProperties;
};

const CircleMaskTransition: React.FC<CircleMaskTransitionProps> = ({ style }) => {
	return (
		<motion.div
			className='absolute z-[99] bg-primary rounded-full w-5 h-5'
			style={ style }
			initial={ {
				scale: 1,
			} }
			whileInView={ {
				scale: 200,
				transition: {
					type: 'tween',
					ease: [.15, 1.14, .88, .98],
					duration: 1
				}
			} }
			exit={ {
				opacity: 0,
				visibility: 'hidden'
			} }
		/>
	);
};

export default CircleMaskTransition;