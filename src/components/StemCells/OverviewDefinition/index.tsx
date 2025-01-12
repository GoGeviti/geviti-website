'use client';

import { useRef, useState } from 'react';
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion';
import dynamic from 'next/dynamic';

const WhyStemCell = dynamic(() => import('./WhyStemCell'));
const WhyChoose = dynamic(() => import('./WhyChoose'));
const WhatMsc = dynamic(() => import('./WhatMsc'));

const slides = [
	{
		id: 1,
		name: 'What are MSCs?',
		content: () => <WhatMsc />,
	},
	{
		id: 2,
		name: 'Why choose Geviti?',
		content: ({ pointProgress }: { pointProgress?: number }) => (
			<WhyChoose pointProgress={ pointProgress } />
		),
	},
	{
		id: 3,
		name: 'Why Stem Cell Therapy?',
		content: () => <WhyStemCell />,
	},
];

const slidesLength = slides.length;

const OverviewDefinition = () => {
	const [activeCard, setActiveCard] = useState(0);
	const [pointProgress, setPointProgress] = useState(0);

	const ref = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end 1'],
	});

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		const cardsBreakpoints = slides.map((_, index) => index / slidesLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce(
			(acc, breakpoint, index) => {
				const distance = Math.abs(latest - breakpoint);
				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
					return index;
				}
				return acc;
			},
			0
		);
		setActiveCard(closestBreakpointIndex);

		if (closestBreakpointIndex === 1) {
			const progress = (latest - cardsBreakpoints[1]) / (1 / slidesLength);
			setPointProgress(Math.min(Math.max(progress, 0), 1));
		}
	});

	return (
		<div
			ref={ ref }
			className='w-full block my-auto mx-0 max-sm:pt-[13px] max-sm:pb-[49px]'
		>
			<div className='relative h-[400svh]'>
				<div className='sticky top-0 left-0 flex h-[100svh] items-center justify-center'>
					<div className='relative lg:container-center flex items-center justify-center h-full w-full'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={ `overview-definition-${activeCard}` }
								initial={ { opacity: 0 } }
								animate={ { opacity: 1 } }
								exit={ { opacity: 0 } }
								transition={ { duration: 0.5 } }
								className='w-full h-full'
							>
								{ slides?.[activeCard]?.content({ pointProgress }) }
							</motion.div>
						</AnimatePresence>

						<div className='max-lg:hidden absolute left-0 top-1/2 -translate-y-1/2'>
							{ slides.map((slide, index) => (
								<div
									key={ slide.id }
									className='flex items-center gap-3 h-[23px]'
								>
									<motion.div
										initial={ { background: '#00A0EA', width: 36 } }
										animate={
											activeCard === index
												? { background: '#FFFFFF', width: 58 }
												: { background: '#00A0EA', width: 36 }
										}
										exit={ { background: '#00A0EA', width: 36 } }
										transition={ { duration: 0.65 } }
										className='bg-[#00A0EA] !h-[3px] w-9 flex-shrink-0'
									/>
									<motion.p
										initial={ { opacity: 0 } }
										animate={ { opacity: activeCard === index ? 1 : 0 } }
										exit={ { opacity: 0 } }
										transition={ { duration: 0.65 } }
										className='font-Poppins text-blue-alice text-xs/5 overflow-hidden'
									>
										{ slide.name }
									</motion.p>
								</div>
							)) }
						</div>

						<div className='lg:hidden absolute bottom-0 inset-x-0 pb-[49px] flex justify-center'>
							<div className='flex items-center justify-center gap-[7px]'>
								{ slides.map((_, index) => (
									<div
										key={ index }
										className='flex items-center'>
										{ index === activeCard ? (
											<motion.span
												initial={ { opacity: 0 } }
												animate={ { opacity: 1 } }
												exit={ { opacity: 0 } }
												transition={ { duration: 0.65 } }
												className='text-blue-alice text-xs/5 font-Poppins'
											>
												{ slides[activeCard].name }
											</motion.span>
										) : (
											<motion.button
												initial={ { width: 0 } }
												animate={ { width: index === activeCard ? 0 : 23 } }
												exit={ { width: 0 } }
												onClick={ () => setActiveCard(index) }
												className='bg-[#00A0EA] h-0.5'
												transition={ { duration: 0.65 } }
											/>
										) }
									</div>
								)) }
							</div>
						</div>
					</div>
					<div className='absolute top-1/3 left-0 h-[10%] w-full' />
				</div>
			</div>
		</div>
	);
};

export default OverviewDefinition;
