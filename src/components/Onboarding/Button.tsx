'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

export type ButtonProps = {
	children?: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // eslint-disable-line no-unused-vars
	type?: 'button' | 'reset' | 'submit';
	className?: string;
	disabled?: boolean;
	onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void; // eslint-disable-line no-unused-vars
};

export const buttonVariants: Variants = {
	hover: {
		scale: 1.03,
		transition: {
			duration: .25,
			ease: [.15, 1.14, .88, .98]
		}
	},
	tap: {
		scale: .97,
		transition: {
			duration: .25,
			ease: [.15, 1.14, .88, .98]
		}
	},
	release: {
		scale: 1,
		transition: {
			duration: .25,
			ease: [.74, .16, .88, .98]
		}
	}
};

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type = 'button',
	className,
	disabled,
	onMouseEnter
}) => {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<motion.button
			onClick={ e => {
				setClicked(true);
				setTimeout(() => {
					setClicked(false);
				}, 250);
				if (onClick) onClick(e);
			} }
			type={ type }
			className={ clsxm(
				'focus:ring-0 focus:outline-none bg-primary rounded-full w-full h-[45px] px-5 text-white disabled:bg-opacity-30 disabled:text-white/50 text-sm leading-normal font-medium',
				className
			) }
			disabled={ disabled }
			variants={ buttonVariants }
			whileHover={ !disabled
				? !clicked
					? 'hover'
					: 'release'
				: undefined }
			whileTap={ !disabled ? 'tap' : undefined }
			onMouseEnter={ onMouseEnter }
		>{ children }</motion.button>
	);
};

export default Button;
