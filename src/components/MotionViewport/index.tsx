'use client';

import { forwardRef } from 'react';
import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

type VarContainerProps = {
  staggerIn?: number;
  delayIn?: number;
  staggerOut?: number;
};

export const varContainer = (props?: VarContainerProps) => {
	const staggerIn = props?.staggerIn || 0.05;
	const delayIn = props?.staggerIn || 0.05;
	const staggerOut = props?.staggerIn || 0.05;

	return {
		animate: {
			transition: { staggerChildren: staggerIn, delayChildren: delayIn },
		},
		exit: { transition: { staggerChildren: staggerOut, staggerDirection: -1 } },
	};
};

export type MotionViewportProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'ref'
> &
  MotionProps & {
    disableAnimate?: boolean;
  };

const MotionViewport = forwardRef<HTMLDivElement, MotionViewportProps>(
	({ children, disableAnimate = false, ...other }, ref) => {
		const props = disableAnimate
			? {}
			: {
				initial: 'initial',
				whileInView: 'animate',
				variants: varContainer(),
				viewport: { once: true },
			};

		return (
			<motion.div
				ref={ ref }
				{ ...props }
				{ ...other }>
				{ children }
			</motion.div>
		);
	}
);

MotionViewport.displayName = 'MotionViewport';

export default MotionViewport;
