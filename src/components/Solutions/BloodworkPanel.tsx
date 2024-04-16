'use client';

import React, { Fragment, useState } from 'react';

import solution from '@/constant/data/solution';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

const stepsData = solution.steps;

const StepsSection: React.FC = () => {
	const [selectedIdx, setSelectedIdx] = useState<number>(0);

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const onSelectStep = (stepIdx: number) => setSelectedIdx(stepIdx);

	const onMouseEnter = (stepIdx: number) => {
		if (!isMobile) onSelectStep(stepIdx);
	};

	return (
		<div className='overflow-hidden bg-[#181A1C] lg:mx-3 lg:mt-3   rounded-[19px]'>
			<div className='h-full  w-full relative overflow-hidden'>
				<div className='px-4 pt-[52px] pb-[31px] lg:pt-[120px] lg:pb-[138px] flex flex-col lg:gap-y-0 items-center justify-center text-center'>
					<div className='text-center sm:mx-auto'>
						<p className='mb-5px lg:mb-3.5 uppercase tracking-[1.54px] text-grey-primary text-Poppins text-[10px] font-semibold sm:text-[14px] leading-[171%]'>
							{ stepsData.preTitle }
						</p>

						{ stepsData.title && (
							<h2 className='font-Poppins text-white leading-[116%] lg:leading-[107%] text-[6.1vw] xs2:text-[25px] sm:text-2xl md:text-[32px] lg:text-[42px] sm:tracking-[-1.68px]'>
								<span dangerouslySetInnerHTML={ { __html: stepsData.title } } />
							</h2>
						) }
						{ stepsData.subTittle && (
							<h2 className='font-Poppins leading-[142.857%] font-normal mt-[14px] text-[#919B9F]  text-xs md:text-sm text-center'>
								<span
									dangerouslySetInnerHTML={ { __html: stepsData.subTittle } }
								/>
							</h2>
						) }
					</div>

					<div className='lg:max-w-7xl lg:mx-auto w-full max-lg:flex max-lg:justify-center '>
						<div className='lg:flex justify-center mt-20 hidden'>
							<div className='flex items-center w-full px-6'>
								{ stepsData.list.map((step, stepIdx) => (
									<div
										key={ `indicator-step-${step.id}` }
										className={ clsxm(
											'h-1   cursor-pointer transform transition-all duration-300 ease-linear',
											stepIdx === selectedIdx
												? 'w-full bg-blue-1 shadow-[0px_-8px_24px_0px_rgba(251,251,251,0.35)]'
												: 'w-full bg-grey-shadow'
										) }
										onClick={ () => onSelectStep(stepIdx) }
										onMouseEnter={ () => onMouseEnter(stepIdx) }
									/>
								)) }
							</div>
						</div>
						<div className='w-full '>
							<div className='lg:pt-[92px] flex lg:flex-row lg:max-w-full justify-between max-w-[307px]  mx-auto flex-col items-center w-full no-scrollbar overflow-y-hidden transition-all select-none transform flex-nowrap overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth max-lg:space-y-[42px] gap-x-18px '>
								{ stepsData.list.map((step, stepIdx) => {
									const isSelected = stepIdx === selectedIdx;
									const Icon = step.icon;
									const IconMobile = step.iconMobile;

									return (
										<Fragment key={ stepIdx }>
											<div
												key={ `step-${step.id}` }
												className={ clsxm(
													'hidden lg:flex lg:flex-col max-lg:space-x-4 items-start lg:transform lg:transition-all lg:duration-100 lg:ease-in-out px-6  w-fit',
													isSelected
														? 'lg:-translate-y-[17px]'
														: 'translate-y-0'
												) }
											>
												<button
													onClick={ () => onSelectStep(stepIdx) }
													onMouseEnter={ () => onMouseEnter(stepIdx) }
													className={ clsxm(
														'cursor-pointer rounded-19px flex items-center justify-center flex-shrink-0 ',
														isSelected
															? 'bg-blue-primary w-10 h-10 lg:w-[62px] lg:h-[62px] shadow-c1'
															: 'bg-grey-50 w-10 h-10 lg:w-[55px] lg:h-[55px]'
													) }
													aria-label={ `step-${step.id}` }
												>
													{ IconMobile ? (
														<>
															<span className='max-lg:hidden'>
																{
																	<Icon
																		className={ clsxm(
																			isSelected
																				? 'text-white'
																				: 'text-grey-primary ',
																			'flex-shrink-0 w-6 h-6'
																		) }
																	/>
																}
															</span>
															<span className='lg:hidden'>
																{
																	<IconMobile className='text-blue-1 flex-shrink-0 w-18px h-18px' />
																}
															</span>
														</>
													) : (
														<Icon
															className={ clsxm(
																isSelected
																	? 'text-blue-1 lg:text-white'
																	: ' text-grey-primary',
																'flex-shrink-0 w-18px h-18px lg:w-6 lg:h-6'
															) }
														/>
													) }
												</button>

												<p
													onClick={ () => onSelectStep(stepIdx) }
													onMouseEnter={ () => onMouseEnter(stepIdx) }
													className={ clsxm(
														'cursor-pointer  font-Poppins text-left  text-sm leading-[134%]',
														isSelected
															? 'lg:pt-[24.84px] text-white text-sm !leading-normal font-medium'
															: 'font-medium text-grey-400 lg:pt-[22.76px] text-sm !leading-normal '
													) }
												>
													<span
														className='max-lg:text-left whitespace-nowrap'
														dangerouslySetInnerHTML={ { __html: step.title } }
													/>
												</p>
											</div>
											<div className=' lg:hidden flex w-full space-y-[18px] justify-center items-center flex-col'>
												<button
													className={ clsxm(
														'cursor-pointer rounded-19px flex items-center justify-center flex-shrink-0 bg-blue-primary w-[62px] h-[62px] shadow-c1'
													) }
													aria-label={ `step-${step.id}` }
												>
													<Icon className={ clsxm('lg:text-white') } />
												</button>
												<p
													className={ clsxm(
														'cursor-pointer w-full mx-auto text-center font-Poppins  text-sm leading-[134%] lg:pt-[24.84px] text-white font-medium'
													) }
												>
													<span
														className='max-lg:text-left whitespace-nowrap text-white'
														dangerouslySetInnerHTML={ { __html: step.title } }
													/>
												</p>
											</div>
										</Fragment>
									);
								}) }
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepsSection;
