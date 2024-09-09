'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';

const stepsData = landingData.steps;

const StepsSection: React.FC = () => {
	const [selectedIdx, setSelectedIdx] = useState<number>(-1);

	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start 0.25', 'end 1'],
	});

	const onSelectStep = (stepIdx: number) => setSelectedIdx(stepIdx);

	useMotionValueEvent(scrollYProgress, 'change', (latest: number) => {
		if (latest === 0) setSelectedIdx(-1);
		else if (latest <= 0.25) setSelectedIdx(0);
		else if (latest <= 0.5) setSelectedIdx(1);
		else if (latest <= 0.75) setSelectedIdx(2);
		else if (latest <= 1) setSelectedIdx(3);
	});

	const renderButtonCta = () => {
		return (
			<ButtonCta
				href={ stepsData.btnCta.href }
				externalLink={ stepsData.btnCta.externalLink }
				aria-label={ stepsData.btnCta.text }
				text={ stepsData.btnCta.text }
			/>
		);
	};

	return (
		<div className='font-Poppins mb-9 mt-[27px] lg:my-[66px]'>
			<div className='h-full w-full relative'>
				<div
					ref={ container }
					className='container-center w-full py-[52px] lg:py-16 flex flex-col items-center justify-center text-center lg:my-auto'
				>
					<div className='relative lg:h-[200vh] w-full'>
						<div className='lg:sticky top-0 left-0 w-full flex flex-col lg:h-1/2 items-center justify-center'>
							<div className='text-center sm:mx-auto'>
								{ stepsData.preTitle && (
									<p className='mb-5px lg:mb-3.5 uppercase text-grey-primary text-pretitle lg:text-base lg:leading-6'>
										<span
											dangerouslySetInnerHTML={ { __html: stepsData.preTitle } }
										/>
									</p>
								) }

								{ stepsData.title && (
									<h2 className='font-Poppins text-primary !leading-[120.5%] lg:!leading-[107%] text-[7.251vw] xxs:text-2xl md:text-[32px] lg:text-[42px] -tracking-0.04em max-lg:max-w-[331px] max-lg:mx-auto'>
										<span
											dangerouslySetInnerHTML={ { __html: stepsData.title } }
										/>
									</h2>
								) }
							</div>

							<div className='w-full max-lg:flex max-lg:justify-center'>
								<div className='lg:max-w-[1084px] lg:mx-auto px-6 max-lg:hidden'>
									<div className='overflow-hidden rounded-full bg-grey-100 relative mt-16'>
										<motion.div
											className='h-1 rounded-full bg-blue-primary transform origin-[0%]'
											style={ { scaleX: scrollYProgress } }
										/>
									</div>
								</div>
								<div className='lg:max-w-[1084px] lg:mx-auto px-6 pb-[62px] lg:pb-[115px] pt-[46px] lg:pt-16 flex lg:flex-row flex-col items-start w-full no-scrollbar overflow-y-hidden transition-all select-none transform flex-nowrap overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth max-lg:space-y-[42px] gap-x-18px lg:gap-x-[108px]'>
									{ stepsData.list.map((step, stepIdx) => {
										const isSelected = stepIdx <= selectedIdx;

										const Icon = step.icon;

										return (
											<button
												key={ `step-${step.id}` }
												className='w-full flex flex-col max-lg:items-center gap-6'
												onClick={ () => onSelectStep(stepIdx) }
												aria-label={ `step-${step.id}` }
											>
												<div
													className={ clsxm(
														'cursor-pointer rounded-19px flex items-center justify-center flex-shrink-0 w-16 h-16',
														isSelected
															? 'bg-blue-1 shadow-[0px_4px_21.1px_0px_rgba(153,212,255,0.75)]'
															: 'bg-white'
													) }
												>
													<Icon
														className={ clsxm(
															isSelected ? 'text-primary' : 'text-grey-400',
															'flex-shrink-0 w-18px h-18px lg:w-6 lg:h-6'
														) }
													/>
												</div>

												<p
													className={ clsxm(
														'cursor-pointer font-Poppins text-center lg:text-left text-lg !leading-normal font-medium',
														isSelected ? 'text-primary' : 'text-grey-400'
													) }
												>
													<span
														dangerouslySetInnerHTML={ { __html: step.title } }
													/>
												</p>
											</button>
										);
									}) }
								</div>
							</div>

							<div className='flex justify-center'>{ renderButtonCta() }</div>
						</div>
						{ /* <div className='max-lg:hidden lg:absolute top-1/4 left-0 h-3/4 w-full' /> */ }
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepsSection;
