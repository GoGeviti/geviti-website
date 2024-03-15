'use client';

import { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

import ApplicationCard from './Application';
import ClinicalCard from './Clinical';
import FlexibleCard from './Flexible';

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

const CardWrapper: React.FC<CardWrapperProps> = ({ i, progress, range, targetScale, renderChildren }) => {
	const container = useRef<HTMLDivElement>(null);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={ container }
			className='sticky top-0 flex items-center justify-center'>
			<motion.div
				style={ { scale, top: `calc(-5vh + ${ i * 25 }px)` } }
				className='relative w-full h-full origin-top'
			>
				{ renderChildren() }
			</motion.div>
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
			className='relative lg:px-3 w-full'>
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