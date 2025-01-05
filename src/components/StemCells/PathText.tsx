'use client';

import React from 'react';
import { motion } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

import SectionAnimate from './SectionAnimate';

type PathTextProps = {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
  delay?: number;
};

const PathText: React.FC<PathTextProps> = ({
	title,
	description,
	titleClassName,
	descriptionClassName,
	delay,
}) => {
	return (
		<motion.div
			initial='hidden'
			whileInView='show'
			viewport={ { amount: 0.5, once: true } }
			exit='exit'
			variants={ {
				show: {
					transition: { staggerChildren: 0.25, delayChildren: delay },
				},
				exit: {
					transition: { staggerChildren: 0.15 },
				},
			} }
			className='space-y-2 text-white'
		>
			<SectionAnimate
				className={ clsxm(
					'text-sm/6 font-semibold tracking-0.11em uppercase xl:whitespace-nowrap',
					titleClassName
				) }
				animation='blurInUp'
				by='section'
			>
				{ title }
			</SectionAnimate>
			<SectionAnimate
				animation='blurInUp'
				by='section'
				className={ clsxm('text-xs/5 lg:max-w-[245px]', descriptionClassName) }
			>
				{ description }
			</SectionAnimate>
		</motion.div>
	);
};

export default PathText;
