'use client';

import { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

import ApplicationCard from './Application';
import ClinicalCard from './Clinical';
import FlexibleCard from './Flexible';
import RunningLogo from './RunningLogo';

const listComponents = [
	FlexibleCard,
	ClinicalCard,
	ApplicationCard
];

type CardWrapperProps = {
	progress: MotionValue<number>;
	range: number[];
	targetScale: number;
	i: number;
	renderChildren: () => React.ReactNode;
};

const CardWrapper: React.FC<CardWrapperProps> = ({
	i, progress, range, targetScale, renderChildren
}) => {
	const container = useRef<HTMLDivElement>(null);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={ container }
			className={ clsxm(
				'sticky top-0 w-full flex items-center justify-center',
				i > 0 && 'lg:top-[120px] xl2:top-[12.875rem] lg:pt-4 xl2:pt-6'
			) }
		>
			{ i === 0
				? (
					<div className='relative w-full h-full origin-top'>
						<RunningLogo />
						<motion.div
							style={ { scale } }
							className='w-full h-full'>
							{ renderChildren() }
						</motion.div>
					</div>
				)
				: (
					<motion.div
						style={ { scale, top: (i - 1) * 16 } }
						className='relative w-full h-full origin-top'>
						{ renderChildren() }
					</motion.div>
				) }
		</div>
	);
};

const SectionCardsParallax: React.FC = () => {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end']
	});

	return (
		<div
			ref={ container }
			className='relative w-full'>
			{ listComponents.map((component, i) => {
				const ComponentItem = component;
				const targetScale = 1 - ((listComponents.length - 1 - i) * 0.05);

				return (
					<CardWrapper
						key={ `p_${ i }` }
						i={ i }
						progress={ scrollYProgress }
						range={ [i * .25, 1] }
						targetScale={ targetScale }
						renderChildren={ () => <ComponentItem /> }
					/>
				);
			}) }
		</div>
	);
};

export default SectionCardsParallax;