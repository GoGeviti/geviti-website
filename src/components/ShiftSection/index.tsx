'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, AnimationProps, motion } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

const shiftVariants = {
	initial: { y: '0%' },
	animate: { y: '-50%' },
	exit: { y: '0%' },
};

const shiftVariantsMobile = {
	initial: {
		y: 20,
		opacity: 0,
	},
	animate: { y: 0, opacity: 1 },
	exit: {
		y: 20,
		opacity: 0,
	},
};

type ShiftSectionProps = {
  children: React.ReactNode;
  prevElement?: React.ReactNode;
  id: string;
  isMobile?: boolean;
  wrapperClassName?: string;
  prevElementClassName?: string;
  animationProps?: AnimationProps;
};

const ShiftSection: React.FC<ShiftSectionProps> = ({
	children,
	prevElement,
	id,
	isMobile,
	wrapperClassName,
	prevElementClassName = 'max-lg:hidden',
	animationProps,
}) => {
	const container = useRef<HTMLSpanElement>(null);
	const [contentHeight, setContentHeight] = useState<number>(0);

	useEffect(() => {
		if (!isMobile) {
			const clientHeight = container?.current?.clientHeight;
			if (clientHeight) {
				setContentHeight(clientHeight);
			}
		}
	}, [id, isMobile]);

	return (
		<AnimatePresence initial={ false }>
			<div
				className={ clsxm('inline-block overflow-hidden', wrapperClassName) }
				style={ !isMobile ? { height: contentHeight } : {} }
			>
				<motion.span
					className='flex flex-col'
					initial={ contentHeight === 0 && !isMobile ? { y: '-50%' } : 'initial' }
					animate='animate'
					exit='exit'
					key={ id }
					variants={ isMobile ? shiftVariantsMobile : shiftVariants }
					transition={ {
						duration: 0.9,
						ease: 'easeIn',
					} }
					{ ...animationProps }
				>
					{ contentHeight !== 0 && (
						<span className={ prevElementClassName }>{ prevElement }</span>
					) }
					<span ref={ container }>{ children }</span>
				</motion.span>
			</div>
		</AnimatePresence>
	);
};

export default ShiftSection;
