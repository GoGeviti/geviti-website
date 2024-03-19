'use client';

import React, { useState } from 'react';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import ButtonCta from './ButtonCta';

const stepsData = landingData.steps;

const StepsSection: React.FC = () => {
	const [selectedIdx, setSelectedIdx] = useState<number>(0);

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const onSelectStep = (stepIdx: number) => setSelectedIdx(stepIdx);

	const onMouseEnter = (stepIdx: number) => {
		if (!isMobile) onSelectStep(stepIdx);
	};

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
		<div className='overflow-hidden'>
			<div className='h-full w-full relative overflow-hidden'>
				<div className='container-center pt-[52px] pb-[31px] lg:pt-[76px] lg:pb-[78.16px] flex flex-col gap-y-[52px] lg:gap-y-0 items-center justify-center text-center'>
					<div className='text-center sm:mx-auto'>
						<p className='mb-5px lg:mb-3.5 uppercase text-grey-primary text-pretitle lg:text-base lg:leading-6'>
							{ stepsData.preTitle }
						</p>

						{ stepsData.title && (
							<h2 className='font-Poppins text-primary leading-[116%] lg:leading-[107%] text-[6.1vw] xs2:text-[25px] sm:text-2xl md:text-[32px] lg:text-[42px] -tracking-0.04em'>
								<span dangerouslySetInnerHTML={ { __html: stepsData.title } } />
							</h2>
						) }

						<div className='hidden lg:flex justify-center mt-[42px]'>
							{ renderButtonCta() }
						</div>
					</div>

					<div className='lg:max-w-6xl lg:mx-auto w-full max-lg:flex max-lg:justify-center'>
						<div>
							<div className='lg:pt-[92px] flex lg:flex-row max-w-[1014px] mx-auto flex-col items-start w-full no-scrollbar overflow-y-hidden transition-all select-none transform flex-nowrap overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth max-lg:space-y-[42px] gap-x-18px lg:gap-x-[108px]'>
								{ stepsData.list.map((step, stepIdx) => {
									const isSelected = stepIdx === selectedIdx;
									const Icon = step.icon;
									const IconMobile = step.iconMobile;

									return (
										<div
											key={ `step-${ step.id }` }
											className={ clsxm(
												'w-full flex lg:flex-col max-lg:space-x-4 items-center lg:transform lg:transition-all lg:duration-100 lg:ease-in-out',
												isSelected
													? 'lg:-translate-y-[17px]'
													: 'translate-y-0'
											) }
										>
											<button
												onClick={ () => onSelectStep(stepIdx) }
												onMouseEnter={ () => onMouseEnter(stepIdx) }
												className={ clsxm(
													'cursor-pointer rounded-full flex items-center justify-center flex-shrink-0 max-lg:shadow-[0px_27.2073px_35.1062px_rgba(0,0,0,0.05)]',
													isSelected
														? 'bg-white lg:bg-blue-1 w-10 h-10 lg:w-[62px] lg:h-[62px] lg:shadow-[0px_41.9842px_54.1731px_rgba(0,0,0,0.05))]'
														: 'bg-white w-10 h-10 lg:w-[55px] lg:h-[55px] lg:shadow-[0px_37.6636px_48.5981px_rgba(0,0,0,0.05)]'
												) }
												aria-label={ `step-${ step.id }` }
											>
												{ IconMobile
													? (
														<>
															<span className='max-lg:hidden'>{ <Icon className={ clsxm(isSelected ? 'text-primary' : 'text-blue-1', 'flex-shrink-0 w-6 h-6') } /> }</span>
															<span className='lg:hidden'>{ <IconMobile className='text-blue-1 flex-shrink-0 w-18px h-18px' /> }</span>
														</>
													)
													: <Icon className={ clsxm(isSelected ? 'text-blue-1 lg:text-primary' : 'text-blue-1', 'flex-shrink-0 w-18px h-18px lg:w-6 lg:h-6') } /> }
											</button>

											<p
												onClick={ () => onSelectStep(stepIdx) }
												onMouseEnter={ () => onMouseEnter(stepIdx) }
												className={ clsxm(
													'cursor-pointer text-center font-Poppins max-lg:text-left text-primary leading-[134%]',
													isSelected
														? 'lg:pt-[24.84px] text-[14.04px] lg:text-[22px] !leading-normal font-medium'
														: 'font-medium lg:pt-[22.76px] text-[14.03px] lg:text-[19.4px] !leading-normal'
												) }
											>
												<span
													className='max-lg:text-left whitespace-nowrap'
													dangerouslySetInnerHTML={ { __html: step.title } } />
											</p>
										</div>
									);
								}) }
							</div>
						</div>

						<div className='lg:flex justify-center mt-20 hidden'>
							<div className='flex items-center gap-x-18px'>
								{ stepsData.list.map((step, stepIdx) => (
									<div
										key={ `indicator-step-${ step.id }` }
										className={ clsxm(
											'h-1 rounded-full cursor-pointer transform transition-all duration-300 ease-linear',
											stepIdx === selectedIdx
												? 'w-[122px] bg-blue-1 shadow-[0px_-8px_24px_0px_rgba(251,251,251,0.35)]'
												: 'w-[38px] bg-grey-shadow',
										) }
										onClick={ () => onSelectStep(stepIdx) }
										onMouseEnter={ () => onMouseEnter(stepIdx) }
									/>
								)) }
							</div>
						</div>
					</div>

					<div className='lg:hidden flex justify-center'>
						{ renderButtonCta() }
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepsSection;
