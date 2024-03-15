'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { GevitiRotateIcon, ShadowBlueSvg } from '../Icons/Landing';

import ButtonCta from './ButtonCta';

const applicationData = landingData.application;

type BoxTooltipProps = {
	isExpanded: boolean;
	className?: string;
	text?: string;
	itemIdx?: number;
	handleChange?: () => void;
};

const BoxTooltip = ({
	isExpanded,
	className,
	text,
	itemIdx = 0,
	handleChange
}: BoxTooltipProps) => {
	const resolvePosition = () => {
		switch (itemIdx) {
			case 0:
				return 'top-[250px] right-[61.875vw] xl:right-[792px]';
			case 1:
				return 'top-[460px] right-[67.188vw] xl:right-[860px]';
			case 2:
				return 'top-[248px] left-[66.406vw] xl:left-[850px]';
			case 3:
				return 'top-[494px] left-[61.328vw] xl:left-[785px]';
			default:
				return '';
		}
	};

	const renderButton = () => {
		return (
			<span
				className={ clsxm(
					'rounded-full w-[52px] h-[52px] flex justify-center items-center focus:ring-0',
					isExpanded ? 'bg-primary' : 'bg-white/20 backdrop-blur-[7.25px]'
				) }
				onClick={ handleChange }
				onMouseEnter={ handleChange }
			>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='flex-shrink-0'>
					<path
						d='M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z'
						fill='white' />
					<path
						d='M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z'
						fill='white' />
					{ !isExpanded && (
						<path
							d='M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z'
							fill='white' />
					) }
				</svg>
			</span>
		);
	};

	return (
		<div>
			<div className={ clsxm(
				'absolute z-40',
				resolvePosition(),
				className
			) }>
				<div
					className={ clsxm(
						'max-xl:max-w-[437px] w-fit relative grid place-items-center overflow-hidden gap-6 p-[15px]',
						isExpanded
							? 'bg-white/15 text-primary border border-white/15 backdrop-blur-[22.2px] shadow-[0px_4px_15.8px_rgba(2,23,27,0.1)]'
							: 'bg-transparent border-none',
						itemIdx <= 1
							? 'rounded-l-xl rounded-r-[80px] grid-cols-[auto_46px]'
							: 'rounded-r-xl rounded-l-[80px] grid-cols-[46px_auto]'
					) }
				>
					<span className={ clsxm(
						'inline-block z-[2] font-medium text-xs !leading-5 font-Poppins',
						!isExpanded && 'invisible',
						itemIdx > 1 && 'order-1'
					) }>
						{ text }
					</span>

					{ renderButton() }
				</div>
			</div>
		</div>
	);
};

const Application: React.FC = () => {
	const [expandedIdx, setExpandedIdx] = useState<number>(0);
	const { ref, inView } = useInView({
		threshold: 0.75,
		triggerOnce: true
	});

	const renderTitleDesc = () => {
		return (
			<>
				<p className='mb-3.5 text-pretitle lg:text-base text-[#5F6D7B]'>
					{ applicationData.preTitle }
				</p>

				<h2 className='max-sm:font-medium text-[5.97vw] xs:text-2xl md:text-[32px] lg:text-[42px] leading-[133%] sm:leading-[107%] -tracking-[0.84px] md:-tracking-0.04em text-primary'>
					{ applicationData.title }
				</h2>
			</>
		);
	};

	const renderButtonCta = () => {
		return (
			<ButtonCta
				href={ applicationData.btnCta.href }
				externalLink={ applicationData.btnCta.externalLink }
				text={ applicationData.btnCta.text }
				aria-label={ applicationData.btnCta.text }
				className='max-sm:w-full'
			/>
		);
	};

	return (
		<div className='overflow-hidden font-Poppins'>
			<div className='bg-blue-primary w-full rounded-19px relative h-full lg:h-[43.125rem]'>
				<div className='container-center pt-[31px] lg:pt-[42px] relative isolate w-full h-full max-lg:grid max-lg:gap-y-7'>
					<div className='max-lg:order-1 mx-auto max-w-2xl text-center flex flex-col justify-center max-lg:pb-6'>
						{ renderTitleDesc() }
						<div className='mt-6 flex flex-col gap-y-3.5 lg:hidden'>
							{ applicationData.list.map((item, itemIdx) => {
								const isExpanded = expandedIdx === itemIdx;

								return (
									<button
										onClick={ () => setExpandedIdx(itemIdx) }
										key={ itemIdx }
										className='text-left focus:ring-0 rounded-xl py-2 px-[13px] bg-white/25 border border-white/15 shadow-[0px_4px_15.800000190734863px_0px_rgba(2,23,27,0.1)]'>
										<span className={ clsxm(!isExpanded && 'line-clamp-1') }>{ isExpanded ? '-' : '+' } { item }</span>
									</button>
								);
							}) }
						</div>
						<div className='max-sm:w-full lg:hidden mt-[27px] flex justify-center'>
							{ renderButtonCta() }
						</div>
					</div>

					<div
						ref={ ref }
						className='lg:pt-[100px] relative flex flex-col items-center w-full h-full'>
						<div className='lg:border-b-0 border-[3px] border-white bg-blue-1 relative h-[216px] lg:h-full w-[339px] lg:w-[370px] max-lg:rounded-xl lg:rounded-t-[80px] flex shadow-[0px_4px_24px_rgba(0,0,0,0.15)]'>
							<div className='pl-[19px] pt-[15px] lg:pt-10 lg:pl-8 flex'>
								<GevitiRotateIcon className='w-11 h-[187px] lg:w-[66px] lg:h-[280.5px]' />
							</div>
							<div className='bottom-0 right-0 lg:-right-[116px] h-[239px] w-[246px] lg:w-[704px] lg:h-[659px] absolute z-30'>
								<motion.div
									variants={ {
										visible: {
											opacity: 1,
											x: 0,
											transition: {
												duration: .86,
												ease: [0.21, 1, 0.38, 1.04]
											}
										},
										hidden: { opacity: 0, x: -100 },
									} }
									initial='hidden'
									animate={ inView ? 'visible' : 'hidden' }
								>
									<div className='relative overflow-hidden'>
										<div className='max-lg:hidden'>
											<Image
												src='/images/landing/compressed/athlete-female.webp'
												alt=''
												width={ 1408 }
												height={ 1502 }
												className='w-[704px] h-full pointer-events-none'
											/>
										</div>
										<div className='lg:hidden'>
											<Image
												src='/images/landing/compressed/athlete-female-mobile.webp'
												alt=''
												width={ 492 }
												height={ 478 }
												className='w-[246px] h-full pointer-events-none'
											/>
										</div>
										<div className='absolute -right-5 lg:right-[8%] inset-y-0 -z-10'>
											<ShadowBlueSvg />
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</div>

					<div className='max-lg:hidden'>
						{ applicationData.list.map((item, itemIdx) => (
							<BoxTooltip
								key={ itemIdx }
								isExpanded={ expandedIdx === itemIdx }
								itemIdx={ itemIdx }
								text={ item }
								handleChange={ () => setExpandedIdx(itemIdx) }
							/>
						)) }
					</div>
				</div>

				<div className='bottom-[38px] left-1/2 -translate-x-1/2 absolute z-40 max-lg:hidden'>
					{ renderButtonCta() }
				</div>
			</div>
		</div>
	);
};

export default Application;
