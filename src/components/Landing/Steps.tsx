'use client';

import React, { useState } from 'react';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const stepsData = landingData.steps;

const StepsSection: React.FC = () => {
	const [selectedIdx, setSelectedIdx] = useState<number>(0);

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const onSelectStep = (stepIdx: number) => setSelectedIdx(stepIdx);

	const onMouseEnter = (stepIdx: number) => {
		if (!isMobile) onSelectStep(stepIdx);
	};

	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<div className='h-full w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='container-center py-[62px] flex flex-col gap-y-[62px] items-center justify-center text-center'>
					<div className='text-center sm:mx-auto'>
						<p className='mb-[15px] md:mb-7px text-pretitle text-grey-primary leading-[15px] md:leading-[24px]'>{ stepsData.preTitle }</p>

						{ stepsData.title && (
							<h2 className='text-heading-2 text-primary !text-2xl md:text-[32px] lg:text-4xl leading-[102.083%] md:leading-[125%] max-md:max-w-[243px]'>
								<span dangerouslySetInnerHTML={ { __html: stepsData.title } } />
							</h2>
						) }

						<div className='flex justify-center mt-6 md:mt-30px'>
							<CustomLink
								href={ stepsData.btnCta.href }
								externalLink={ stepsData.btnCta.externalLink }
								className='btn-cta-landing btn-primary group'
								aria-label={ stepsData.btnCta.text }
							>
								<span className='text-btn-cta-landing'>
									{ stepsData.btnCta.text }
								</span>

								<ChevronRight className='arrow-btn-cta-landing' />
							</CustomLink>
						</div>
					</div>

					<div className='md:max-w-6xl md:mx-auto w-full max-md:flex max-md:justify-center'>
						<div className=''>
							<div className='md:pt-[54px] flex md:flex-row flex-col items-start w-full no-scrollbar overflow-y-hidden transition-all select-none transform flex-nowrap overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth max-md:space-y-10  gap-x-18px lg:gap-x-5 py-1'>
								{ stepsData.list.map((step, stepIdx) => {
									const isSelected = stepIdx === selectedIdx;

									return (
										(
											<div
												key={ `step-${ step.id }` }
												className={ clsxm('w-full flex md:flex-col max-md:space-x-5 items-center md:transform md:transition-all md:duration-100 md:ease-in', isSelected ? 'md:-translate-y-5' : 'translate-y-0') }
											>
												<div
													onClick={ () => onSelectStep(stepIdx) }
													onMouseEnter={ () => onMouseEnter(stepIdx) }
													className={ clsxm(
														'cursor-pointer rounded-full flex items-center justify-center flex-shrink-0',
														'font-Poppins text-center text-primary',
														isSelected
															? 'text-[13px] md:text-base md:font-bold font-medium leading-6 sm:leading-[29px] bg-white md:bg-blue-1 w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] md:shadow-[0px_-8px_24px_0px_rgba(251,251,251,0.35)]'
															: 'text-[13px] md:text-sm font-medium leading-[18px] sm:leading-6 bg-white w-[40px] h-[40px] lg:w-[46px] lg:h-[46px]'
													) }
												>
													{ stepIdx + 1 }
												</div>

												<p
													onClick={ () => onSelectStep(stepIdx) }
													onMouseEnter={ () => onMouseEnter(stepIdx) }
													className={ clsxm(
														'cursor-pointer text-center font-Poppins text-primary leading-[134%] text-sm',
														isSelected
															? 'md:pt-[22px] text-sm md:text-[19px] lg:w-[180px] font-medium'
															: 'font-medium md:pt-18px text-[14.042px] md:text-base lg:w-[150px]'
													) }
												>
													{ step.title }
												</p>
											</div>
										)
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
				</div>
			</div>
		</div>
	);
};

export default StepsSection;
