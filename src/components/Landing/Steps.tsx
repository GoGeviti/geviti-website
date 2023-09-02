'use client';

import React, { useState } from 'react';
import Image from 'next/image';

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

	const resolveImageClassName = (id?: string) => {
		if (id === 'package') return 'bg-[#EAEDF4]';
		if (id === 'testing') return 'bg-[#272b2e6b]';

		return '';
	};

	const renderImageStep = (id?: string, src?: string) => {
		return (
			<div className='relative overflow-hidden lg:w-full h-[218px] sm:h-[255px] lg:h-full lg:max-h-[255px] aspect-[1.1/1] rounded-[30px]'>
				{ src && (
					<Image
						src={ src }
						alt=''
						className={ clsxm(
							'object-cover',
							resolveImageClassName(id)
						) }
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						fill
					/>
				) }
			</div>
		);
	};

	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<div className='bg-primary container-center h-full w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='py-[79px] sm:py-[106px] flex flex-col-reverse lg:flex-col gap-y-[109px] lg:gap-y-[62px] items-center justify-center text-center'>
					<div className='text-center sm:max-w-xl sm:mx-auto'>
						<p className='mb-11px sm:mb-7px text-pretitle text-grey-primary'>{ stepsData.preTitle }</p>

						{ stepsData.title && (
							<h2 className='text-heading-2 text-grey-secondary'>
								<span dangerouslySetInnerHTML={ { __html: stepsData.title } } />
							</h2>
						) }

						<div className='flex justify-center mt-6 sm:mt-30px'>
							<CustomLink
								href={ stepsData.btnCta.href }
								externalLink={ stepsData.btnCta.externalLink }
								className='btn-cta-landing group'
							>
								<span className='text-btn-cta-landing'>
									<span className='max-sm:hidden'>{ stepsData.btnCta.text }</span>
									<span className='sm:hidden'>{ stepsData.btnCta.textMobile }</span>
								</span>

								<ChevronRight className='arrow-btn-cta-landing' />
							</CustomLink>
						</div>
					</div>

					<div className='sm:max-w-6xl sm:mx-auto w-full'>
						<div className='hidden lg:flex items-start w-full gap-x-5 mb-50px'>
							{ stepsData.list.map((step, stepIdx) => (
								<div
									key={ `image-step-${ step.id }` }
									className='w-full'>
									<div className={ clsxm(
										stepIdx === selectedIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
										'transition duration-300 ease-in-out'
									) }>
										{ renderImageStep(step.id, step.image) }
									</div>
								</div>
							)) }
						</div>

						<div className='lg:hidden flex justify-center w-full px-5 xxs:px-12 mb-[43px] transition duration-300 ease-in-out'>
							{ renderImageStep(stepsData.list[selectedIdx]?.id, stepsData.list[selectedIdx]?.imageMobile) }
						</div>

						<div className='flex items-start w-full no-scrollbar overflow-y-hidden transition-all select-none transform flex-nowrap overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth gap-x-18px lg:gap-x-5 py-1 -mr-4 lg:-mr-0 last:pr-[17px] lg:last:pr-0'>
							{ stepsData.list.map((step, stepIdx) => {
								const isSelected = stepIdx === selectedIdx;

								return (
									(
										<div
											key={ `step-${ step.id }` }
											className='w-full flex flex-col items-center'
										>
											<div
												onClick={ () => onSelectStep(stepIdx) }
												onMouseEnter={ () => onMouseEnter(stepIdx) }
												className={ clsxm(
													'cursor-pointer transition-all duration-300 ease-in w-[46px] h-[46px] rounded-full flex items-center justify-center flex-shrink-0',
													'text-[11px] sm:text-sm leading-[18px] sm:leading-6 font-medium font-Poppins text-center',
													isSelected ? 'bg-grey-secondary text-black-landing' : 'bg-black-landing text-grey-secondary'
												) }
											>
												{ stepIdx + 1 }
											</div>

											<p
												onClick={ () => onSelectStep(stepIdx) }
												onMouseEnter={ () => onMouseEnter(stepIdx) }
												className='pt-3.5 sm:pt-18px cursor-pointer text-center text-xs sm:text-sm md:text-base font-Poppins text-grey-secondary font-medium leading-[134%] w-[105px] sm:w-[139px]'
											>
												{ step.title }
											</p>
										</div>
									)
								);
							}) }
						</div>

						<div className='flex justify-center mt-[46px] sm:mt-20'>
							<div className='flex items-center gap-x-2.5 xxs:gap-x-18px'>
								{ stepsData.list.map((step, stepIdx) => (
									<div
										key={ `indicator-step-${ step.id }` }
										className={ clsxm(
											'h-1 rounded-full cursor-pointer transform transition-all duration-300 ease-linear',
											stepIdx === selectedIdx ? 'w-[110px] xxs:w-[122px] bg-grey-secondary shadow-[0px_-8px_24px_0px_rgba(251,251,251,0.35)]' : 'w-8 xxs:w-[38px] bg-black-landing'
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
