'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import { AccordionMinus, AccordionPlus } from '../Icons';

type QuestionProps = {
	title: string;
	children: React.ReactNode;
	defaultOpen?: boolean;
};

const Question: React.FC<QuestionProps> = ({
	title,
	children,
	defaultOpen = false
}) => {
	const [open, setOpen] = useState<boolean>(defaultOpen);
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	return (
		<motion.div
			animate={ open ? 'open' : 'closed' }
			className='border-b border-[#EAECF0] font-Poppins mt-[21px] lg:mt-6'
		>
			<button
				onClick={ () => setOpen(pv => !pv) }
				className='pb-2 w-full flex justify-between gap-[21px] lg:gap-6'
			>
				<span className='text-base lg:text-lg font-medium text-left'>
					{ title }
				</span>
				<motion.span
					variants={ {
						open: {
							rotate: '0deg',
						},
						closed: {
							rotate: '-90deg',
						},
					} }
					transition={ { ease: 'easeInOut', duration: .3 } }
					className='w-[21px] lg:w-6'
				>
					<AccordionMinus className={ clsxm(
						'w-[21px] h-[23px] lg:w-6 lg:h-[26px]',
						open ? 'block' : 'hidden'
					) } />
					<AccordionPlus className={ clsxm(
						'w-[21px] h-[23px] lg:w-6 lg:h-[26px]',
						open ? 'hidden' : 'block'
					) } />
				</motion.span>
			</button>
			<motion.div
				initial={ false }
				animate={ {
					height: open ? 'fit-content' : '0px',
					...isMobile
						? { marginBottom: open ? '14px' : '8px' }
						: { marginBottom: open ? '8px' : '24px' }
				} }
				className='overflow-hidden pr-[42px] lg:pr-12'
			>
				<p className='text-grey-primary text-sm max-lg:!leading-[150%] lg:text-base'>
					{ children }
				</p>
			</motion.div>
		</motion.div>
	);
};

export default Question;