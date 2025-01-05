'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type AnimatedLineProps = {
  svgProps?: React.ComponentPropsWithoutRef<typeof motion.svg>;
  pathProps?: React.ComponentPropsWithoutRef<typeof motion.path>;
  delay?: number;
};

const AnimatedLine: React.FC<AnimatedLineProps> = ({
	svgProps,
	pathProps,
	delay,
}) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	return (
		<div ref={ ref }>
			<motion.svg
				width='398'
				height='45'
				viewBox='0 0 398 45'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				{ ...svgProps }
			>
				<motion.path
					d='M0.918472 44.7386L40.5566 5.10051C43.1821 2.475 46.743 1 50.4561 1H398'
					stroke='white'
					strokeWidth='0.717026'
					initial={ { pathLength: 0 } }
					animate={ {
						pathLength: inView ? 1 : 0,
						transition: {
							duration: 0.75,
							ease: 'easeInOut',
							delay,
						},
					} }
					exit={ {
						pathLength: 0,
						transition: {
							duration: 0.75,
							ease: 'easeInOut',
						},
					} }
					{ ...pathProps }
				/>
			</motion.svg>
		</div>
	);
};

export default AnimatedLine;
