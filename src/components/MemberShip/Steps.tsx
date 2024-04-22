'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import membershipdata from '@/constant/data/membership';
import clsxm from '@/helpers/clsxm';

const stepsData = membershipdata.steps;

const StepsSection: React.FC = () => {
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

	return (
		<div className='lg:px-3 font-Poppins'>
			<div
				ref={ container }
				className='bg-white rounded-19px w-full h-full'>
				<div className='container-center py-[42px] lg:py-0'>
					<div className='relative lg:h-[188vh] w-full'>
						<div className='lg:sticky top-0 left-0 w-full flex flex-col lg:h-1/2 items-center justify-center'>
							<div className='text-center'>
								<p className='mb-3 lg:mb-0 uppercase text-pretitle text-grey-primary'>
									{ stepsData.preTitle }
								</p>

								{ stepsData.title && (
									<h2 className='text-primary !leading-normal lg:!leading-[150%] text-[6.4vw] xxs2:text-2xl md:text-[32px] lg:text-[42px] lg:-tracking-0.04em'>
										<span dangerouslySetInnerHTML={ { __html: stepsData.title } } />
									</h2>
								) }

								{ stepsData.description && (
									<p className='max-w-[331px] lg:max-w-[461px] mx-auto text-grey-400 text-[3vw] xs3:text-xs lg:text-sm !leading-5 mt-4 lg:mt-3.5'>
										<span dangerouslySetInnerHTML={ { __html: stepsData.description } } />
									</p>
								) }
							</div>

							<div className='mt-[42px] lg:mt-[62px] w-full'>
								<div className='overflow-hidden rounded-full bg-grey-50 relative max-lg:hidden'>
									<motion.div
										className='h-1 rounded-full bg-blue-primary transform origin-[0%]'
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
														isSelected
															? 'bg-blue-1 shadow-[0px_4px_21.1px_0px_rgba(153,212,255,0.75)]'
															: 'bg-grey-50'
													) }
												>
													<Icon className={ clsxm(isSelected ? 'text-primary' : 'text-grey-300', 'flex-shrink-0 w-6 h-6') } />
												</div>

												<span
													className={ clsxm(
														'font-Poppins text-center lg:text-left text-sm !leading-normal font-medium',
														isSelected
															? 'text-primary'
															: 'text-grey-400'
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
