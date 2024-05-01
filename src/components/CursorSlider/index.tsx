'use client';

import React, { useRef, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';
import gsap from 'gsap';

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
	const [cursorActive, setCursorActive] = useState<boolean>(false);
	const cursor = useRef<HTMLDivElement>(null);

	const handleMouseEvent = ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
		const parent = currentTarget.offsetParent;
		if (!parent) return;
		const xMoveCursor = gsap.quickTo(cursor.current, 'left', { duration: 0.3, ease: 'power3' });
		const yMoveCursor = gsap.quickTo(cursor.current, 'top', { duration: 0.3, ease: 'power3' });
		const { left, top } = parent.getBoundingClientRect();
		xMoveCursor(clientX - left);
		yMoveCursor(clientY - top);
	};

	return (
		<motion.div
			className='max-lg:hidden absolute z-50 inset-0 w-full h-full lg:cursor-none'
			onMouseMove={ handleMouseEvent }
			onMouseEnter={ e => {
				handleMouseEvent(e);
				setCursorActive(true);
			} }
			onMouseLeave={ () => setCursorActive(false) }
			onClick={ onClick }
		>
			<motion.div
				ref={ cursor }
				className={ clsxm('pointer-events-none absolute z-[100] grid justify-center items-center place-items-center rounded-full bg-primary', className) }
				style={ {
					width: cursorSize,
					height: cursorSize,
					x: '-50%',
					y: '-50%'
				} }
				variants={ {
					initial: { opacity: 0 },
					enter: { opacity: 1, transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] } },
					closed: { opacity: 0, transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] } }
				} }
				initial='initial'
				animate={ cursorActive ? 'enter' : 'closed' }
				{ ...animationProps }
			>
				<span
					className='w-full inline-flex items-center gap-2 select-none text-center text-blue-primary text-sm !leading-6 font-medium'
				>
					Click To Slide
					<ArrowNarrowRight className='text-blue-primary flex-shrink-0 w-18px h-18px' />
				</span>
			</motion.div>
		</motion.div>
	);
};

export default CursorSlider;