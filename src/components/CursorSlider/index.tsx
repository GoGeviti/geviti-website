'use client';

import React from 'react';
import { motion, MotionProps, useMotionValue, useSpring } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

import { ArrowNarrowRight } from '../Icons';

type CursorSliderProps = {
	className?: string;
	animationProps?: MotionProps;
	cursorSize?: number;
	onClick?: () => void;
};

const CursorSlider: React.FC<CursorSliderProps> = ({
	className,
	animationProps,
	cursorSize = 156,
	onClick
}) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const animatedHoverX = useSpring(mouseX, {
		damping: 20,
		stiffness: 400,
		mass: 0.1,
	});
	const animatedHoverY = useSpring(mouseY, {
		damping: 20,
		stiffness: 400,
		mass: 0.1,
	});

	return (
		<motion.div
			className='max-lg:hidden absolute z-50 inset-0 w-full h-full'
			onMouseMove={ ({ currentTarget, clientX, clientY }) => {
				const parent = currentTarget.offsetParent;
				if (!parent) return;
				const { left, top } = parent.getBoundingClientRect();
				mouseX.set(clientX - left - cursorSize / 2);
				mouseY.set(clientY - top - cursorSize / 2);
			} }
			onClick={ onClick }
		>
			<motion.div
				className={ clsxm('pointer-events-none absolute z-20', className) }
				style={ {
					width: cursorSize,
					height: cursorSize,
					x: animatedHoverX,
					y: animatedHoverY,
				} }
				{ ...animationProps }
			>
				<motion.div
					layout
					className='grid justify-center items-center h-full place-items-center rounded-full bg-primary'
				>
					<motion.span
						layout='position'
						className='w-full inline-flex items-center gap-2 select-none text-center text-blue-primary text-sm !leading-6 font-medium'
					>
						Click To Slide
						<ArrowNarrowRight className='text-blue-primary flex-shrink-0 w-18px h-18px' />
					</motion.span>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default CursorSlider;