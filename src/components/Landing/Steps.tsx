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
			<div className='h-full w-full lg:rounded-19px relative overflow-hidden'>
				<div className='container-center pt-[52px] pb-[31px] lg:pt-[76px] lg:pb-[78.16px] flex flex-col gap-y-[52px] md:gap-y-[75px] items-center justify-center text-center'>
					<div className='text-center sm:mx-auto'>
						<p className='mb-5px md:mb-3.5 uppercase lg:text-base text-grey-primary text-pretitle leading-[15px] lg:leading-[24px]'>
							{ stepsData.preTitle }
						</p>

						{ stepsData.title && (
							<h2 className='font-Poppins text-primary leading-[116%] lg:leading-[107%] text-[6.1vw] xs2:text-[25px] sm:text-2xl md:text-[32px] lg:text-[42px] -tracking-0.04em'>
								<span dangerouslySetInnerHTML={ { __html: stepsData.title } } />
							</h2>
						) }

						<div className='hidden md:flex justify-center mt-[42px]'>
							{ renderButtonCta() }
						</div>
					</div>

					<div className='md:max-w-6xl md:mx-auto w-full max-md:flex max-md:justify-center'>
						<div>
							<div className='md:pt-[54px] flex md:flex-row max-w-[1015px] mx-auto flex-col items-start w-full no-scrollbar overflow-y-hidden transition-all select-none transform flex-nowrap overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth max-md:space-y-10  gap-x-18px lg:gap-x-[108px] py-1'>
								{ stepsData.list.map((step, stepIdx) => {
									const isSelected = stepIdx === selectedIdx;
									const Icon = step.icon;
									const IconMobile = step.iconMobile;

									return (
										<div
											key={ `step-${ step.id }` }
											className={ clsxm('w-full flex md:flex-col max-md:space-x-5 items-center md:transform md:transition-all md:duration-100 md:ease-in', isSelected ? 'md:-translate-y-5' : 'translate-y-0') }
										>
											<button
												onClick={ () => onSelectStep(stepIdx) }
												onMouseEnter={ () => onMouseEnter(stepIdx) }
												className={ clsxm(
													'cursor-pointer rounded-full flex items-center justify-center flex-shrink-0',
													isSelected
														? 'bg-white md:bg-blue-1 w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] md:shadow-[0px_-8px_24px_0px_rgba(251,251,251,0.35)]'
														: 'bg-white w-[40px] h-[40px] lg:w-[46px] lg:h-[46px]'
												) }
											>
												{ IconMobile
													? (
														<>
															<span className='max-md:hidden'>{ <Icon className={ isSelected ? 'text-primary' : 'text-blue-1' } /> }</span>
															<span className='md:hidden'>{ <IconMobile className='text-blue-1' /> }</span>
														</>
													)
													: <Icon className={ isSelected ? 'text-blue-1 md:text-primary' : 'text-blue-1' } /> }
											</button>

											<p
												onClick={ () => onSelectStep(stepIdx) }
												onMouseEnter={ () => onMouseEnter(stepIdx) }
												className={ clsxm(
													'cursor-pointer text-center font-Poppins max-md:text-left text-primary leading-[134%]',
													isSelected
														? 'md:pt-[22px] text-[15.033px] md:text-[19px] font-medium'
														: 'font-medium md:pt-18px text-[15.042px] md:text-base'
												) }
											>
												<span
													className='max-md:text-left whitespace-nowrap'
													dangerouslySetInnerHTML={ { __html: step.title } } />
											</p>
										</div>
									);
								}) }
							</div>
						</div>

						<div className='md:flex justify-center mt-[46px] sm:mt-20 hidden'>
							<div className='flex items-center gap-x-2.5 xxs:gap-x-18px'>
								{ stepsData.list.map((step, stepIdx) => (
									<div
										key={ `indicator-step-${ step.id }` }
										className={ clsxm(
											'h-1 rounded-full cursor-pointer transform transition-all duration-300 ease-linear',
											stepIdx === selectedIdx ? 'w-[110px] xxs:w-[122px] bg-blue-1 shadow-[0px_-8px_24px_0px_rgba(251,251,251,0.35)]' : 'w-8 xxs:w-[38px] bg-grey-shadow'
										) }
										onClick={ () => onSelectStep(stepIdx) }
										onMouseEnter={ () => onMouseEnter(stepIdx) }
									/>
								)) }
							</div>
						</div>
					</div>

					<div className='md:hidden flex justify-center'>
						{ renderButtonCta() }
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepsSection;
