'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

type PointCircleProps = {
  desktopClassName?: string;
  mobileClassName?: string;
  delay?: number;
};

const PointCircle: React.FC<PointCircleProps> = ({
	desktopClassName = 'max-sm:hidden sm:w-[22.133vw] lg:w-[164.74px]',
	mobileClassName = 'sm:hidden',
	delay,
}) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	return (
		<div ref={ ref }>
			<motion.svg
				width='167'
				height='167'
				viewBox='0 0 167 167'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={ clsxm('aspect-square', desktopClassName) }
			>
				{ /* Point center animation */ }
				<motion.circle
					cx='83.3694'
					cy='83.3694'
					r='5.55296'
					fill='white'
					initial={ { r: 10 } }
					animate={
						inView
							? {
								r: 5.55296,
								transition: { duration: 0.5, ease: 'easeOut', delay },
							}
							: {}
					}
					exit={ { r: 10, transition: { duration: 0.5, ease: 'easeOut' } } }
				/>

				<motion.circle
					cx='83.3697'
					cy='83.3697'
					r='82.369'
					stroke='white'
					initial={ { r: 82.369, pathLength: 0, rotate: 0 } }
					animate={
						inView
							? {
								r: 67.0611,
								pathLength: 1,
								rotate: 360,
								transition: { duration: 0.75, ease: 'easeOut', delay },
							}
							: {}
					}
					exit={ {
						rotate: -360,
						r: 82.369,
						transition: { duration: 0.75, ease: 'easeInOut' },
					} }
				/>

				<motion.circle
					cx='83.369'
					cy='83.369'
					r='82.369'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeDasharray='2 8'
					initial={ { rotate: 180 } }
					animate={
						inView
							? {
								rotate: 360,
								transition: { duration: 1, ease: 'easeInOut', delay },
							}
							: {}
					}
					exit={ {
						rotate: -180,
						transition: { duration: 0.75, ease: 'easeInOut' },
					} }
				/>
			</motion.svg>

			<motion.svg
				width='85'
				height='85'
				viewBox='0 0 85 85'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={ clsxm('aspect-square', mobileClassName) }
			>
				<motion.circle
					cx='42.5'
					cy='42.5048'
					r='2.79775'
					fill='white'
					initial={ { r: 5 } }
					animate={
						inView
							? {
								r: 2.79775,
								transition: { duration: 0.5, ease: 'easeOut', delay },
							}
							: {}
					}
					exit={ { r: 5, transition: { duration: 0.5, ease: 'easeOut' } } }
				/>

				<motion.circle
					cx='42.5'
					cy='42.5042'
					r='41.5'
					stroke='white'
					initial={ { r: 41.5, pathLength: 0, rotate: 0 } }
					animate={
						inView
							? {
								r: 33.5393,
								pathLength: 1,
								rotate: 360,
								transition: { duration: 0.75, ease: 'easeOut', delay },
							}
							: {}
					}
					exit={ {
						r: 41.5,
						rotate: -360,
						transition: { duration: 0.75, ease: 'easeInOut' },
					} }
				/>

				<motion.circle
					cx='42.5'
					cy='42.5039'
					r='41.5'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeDasharray='2 8'
					initial={ { rotate: 180 } }
					animate={
						inView
							? {
								rotate: 360,
								transition: { duration: 1, ease: 'easeInOut', delay },
							}
							: {}
					}
					exit={ {
						rotate: -180,
						transition: { duration: 0.75, ease: 'easeInOut' },
					} }
				/>
			</motion.svg>
		</div>
	);
};

export default PointCircle;
