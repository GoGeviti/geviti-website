'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import solutionData from '@/constant/data/solution';
import clsxm from '@/helpers/clsxm';

const stepsData = solutionData.steps;

const StepsSection: React.FC<{ theme?: 'black' | 'blue'; }> = ({ theme = 'black' }) => {
	const [selectedIdx, setSelectedIdx] = useState<number>(0);

	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start 0.25', 'end 1']
	});

	useMotionValueEvent(scrollYProgress, 'change', (latest: number) => {
		if (latest === 0) setSelectedIdx(-1);
		else if (latest <= 0.25) setSelectedIdx(0);
		else if (latest <= 0.5) setSelectedIdx(1);
		else if (latest <= 0.75) setSelectedIdx(2);
		else if (latest <= 1) setSelectedIdx(3);
	});

	const onSelectStep = (stepIdx: number) => setSelectedIdx(stepIdx);

	const resolveTextStepClassName = (isSelected: boolean) => {
		if (isSelected) {
			if (theme === 'black') return 'text-white';
			if (theme === 'blue') return 'text-primary';
		}

		if (theme === 'black') return 'text-grey-400';
		if (theme === 'blue') return 'text-grey-500';
	};

	const resolveIconStepClassName = (isSelected: boolean) => {
		if (isSelected) {
			if (theme === 'black') return 'text-primary bg-blue-1 shadow-[0px_4px_21.1px_0px_rgba(0,147,255,0.25)]';
			if (theme === 'blue') return 'text-primary bg-white shadow-[0px_4px_21.1px_rgba(196,196,196,0.25)]';
		}

		if (theme === 'black') return 'text-grey-400 bg-grey-900';
		if (theme === 'blue') return 'text-grey-500 bg-white/20';
	};

	return (
		<div className='lg:px-3 font-Poppins'>
			<div
				ref={ container }
				className={ clsxm(
					'rounded-19px w-full h-full',
					theme === 'black' && 'bg-primary text-grey-primary',
					theme === 'blue' && 'bg-blue-primary text-grey-800'
				) }>
				<div className='container-center py-[42px] lg:py-0 lg:my-auto'>
					<div className='relative lg:h-[200vh] w-full'>
						<div className='lg:sticky top-0 left-0 w-full flex flex-col lg:h-1/2 items-center justify-center'>
							<div className='text-center'>
								<p className='mb-3 lg:mb-0 uppercase text-pretitle'>
									{ stepsData.preTitle }
								</p>

								{ stepsData.title && (
									<h2 className={ clsxm(
										'!leading-normal lg:!leading-[150%] text-[6.4vw] xxs2:text-2xl md:text-[32px] lg:text-[42px] lg:-tracking-0.04em',
										theme === 'black' && 'text-white',
										theme === 'blue' && 'text-primary'
									) }>
										<span dangerouslySetInnerHTML={ { __html: stepsData.title } } />
									</h2>
								) }

								{ stepsData.description && (
									<p className='max-w-[343px] lg:max-w-[461px] mx-auto text-[3vw] xs3:text-xs lg:text-sm !leading-5 mt-4 lg:mt-3.5'>
										<span dangerouslySetInnerHTML={ { __html: stepsData.description } } />
									</p>
								) }
							</div>

							<div className='mt-[42px] lg:mt-[62px] w-full'>
								<div className={ clsxm(
									'overflow-hidden rounded-full bg-grey-50 relative max-lg:hidden',
									theme === 'black' && 'bg-grey-950',
									theme === 'blue' && 'bg-white/20'
								) }>
									<motion.div
										className={ clsxm(
											'h-1 rounded-full transform origin-[0%]',
											theme === 'black' && 'bg-blue-primary',
											theme === 'blue' && 'bg-white'
										) }
										style={ { scaleX: scrollYProgress } }
									/>
								</div>
								<div className='lg:pt-[58px] flex max-lg:flex-col lg:grid lg:grid-cols-4 items-center lg:items-start w-full gap-y-[42px] lg:gap-x-5'>
									{ stepsData.list.map((step, stepIdx) => {
										const isSelected = stepIdx <= selectedIdx;
										const Icon = step.icon;

										return (
											<button
												key={ `step-${ step.id }` }
												className='flex flex-col max-lg:items-center gap-6 max-lg:max-w-[259px]'
												onClick={ () => onSelectStep(stepIdx) }
												aria-label={ `step-${ step.id }` }
											>
												<div
													className={ clsxm(
														'rounded-19px flex items-center justify-center flex-shrink-0 w-16 h-16',
														resolveIconStepClassName(isSelected)
													) }
												>
													<Icon className='flex-shrink-0 w-6 h-6' />
												</div>

												<span
													className={ clsxm(
														'font-Poppins text-center lg:text-left text-sm !leading-normal font-medium',
														resolveTextStepClassName(isSelected)
													) }
													dangerouslySetInnerHTML={ { __html: step.title } }
												/>
											</button>
										);
									}) }
								</div>
							</div>
						</div>

						<div className='max-lg:hidden lg:absolute top-1/4 left-0 h-3/4 w-full' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepsSection;
