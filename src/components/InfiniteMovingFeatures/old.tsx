'use client';

import React, { useEffect, useState } from 'react';
import { AnimationControls, motion, useAnimationControls } from 'framer-motion';

import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

type FeatureItem = {
	title: string;
	description: string;
};

type FeatureList = {
	id: string;
	reverse?: boolean;
	list: FeatureItem[];
};

type InfiniteMovingFeaturesProps = {
	list: FeatureList[];
	duration?: number;
};

type PopoverPillsProps = {
	item: FeatureItem;
	isMobile?: boolean;
	onOpenChange: (isOpen: boolean) => void; // eslint-disable-line no-unused-vars
};

const PopoverPills: React.FC<PopoverPillsProps> = ({
	item,
	isMobile,
	onOpenChange
}) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleClick = () => {
		onOpenChange(!open);
		setOpen(!open);
	};

	const handleMouseEnter = () => {
		onOpenChange(true);
		setOpen(true);
	};

	const handleMouseLeave = () => {
		onOpenChange(false);
		setOpen(false);
	};

	return (
		<Popover
			open={ open }
			onOpenChange={ setOpen }>
			<PopoverTrigger
				onClick={ e => e.preventDefault() }
				className='focus:ring-0 focus:outline-none focus:border-0'>
				<span
					{ ...isMobile
						? {
							onClick: handleClick
						}
						: {
							onMouseEnter: handleMouseEnter,
							onMouseLeave: handleMouseLeave
						}
					}
					className={ clsxm(
						'transition-all font-Poppins ease-in-out duration-200 cursor-pointer flex whitespace-nowrap items-center justify-center text-center overflow-hidden relative !rounded-19px text-[28px] leading-6 py-5 px-6',
						open ? 'bg-primary text-white rounded-19px shadow-feature' : 'bg-[#F2FAFF] text-blue-primary'
					) }>
					{ item.title }
				</span>
			</PopoverTrigger>
			<PopoverContent
				{ ...isMobile
					? {
						side: 'top',
						align: 'center',
						sideOffset: 30,
					}
					: {
						side: 'top',
						align: 'start',
						sideOffset: 12,
						alignOffset: 17
					} }
				className='w-full max-w-[90vw] sm:max-w-[387px] py-3.5 px-3 lg:px-6 backdrop-blur-[22.2px] bg-white/40 border border-white/15 rounded-xl !shadow-[0px_4px_15.8px_0px_rgba(2,23,27,0.1)]'>
				<span className='text-grey-800 text-lg font-Poppins text-center lg:text-left'>
					{ item.description || item.title }
				</span>
			</PopoverContent>
		</Popover>
	);
};

const InfiniteMovingFeatures: React.FC<InfiniteMovingFeaturesProps> = ({
	list,
	duration = 50
}) => {
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;
	const [activeIdx, setActiveIdx] = useState<number>(-1);

	const controls1 = useAnimationControls();
	const controls2 = useAnimationControls();
	const controls3 = useAnimationControls();
	const animationControls = [controls1, controls2, controls3];

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		if (activeIdx > -1) {
			animationControls[activeIdx].stop();

			const restControls = animationControls.filter((_, idx) => idx !== activeIdx);
			timeoutId = setTimeout(() => {
				restControls.forEach((_, idx) => {
					restControls[idx].stop();
				});
			}, 400);
		} else {
			animationControls.forEach(controls => {
				controls.start('visible');
			});
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [activeIdx]);

	const renderMovingLine = (
		parentIdx: number,
		featureList: FeatureList,
		controls: AnimationControls
	) => {
		const { list: features, reverse } = featureList;

		return (
			<motion.div
				variants={ {
					initial: { translateX: reverse ? '-100%' : '0%' },
					visible: { translateX: reverse ? '0%' : '-100%' }
				} }
				initial='initial'
				animate={ controls }
				transition={ {
					duration,
					repeat: Infinity,
					ease: 'linear'
				} }
				className='flex gap-[42px] px-[21px]'
			>
				{ features.map((item, idx) => {
					return (
						<PopoverPills
							key={ idx }
							item={ item }
							isMobile={ isMobile }
							onOpenChange={ (open: boolean) => {
								if (open && activeIdx !== parentIdx) setActiveIdx(parentIdx);
								else if (!open) setActiveIdx(-1);
							} }
						/>
					);
				}) }
			</motion.div>
		);
	};

	const resetActiveIdx = () => setActiveIdx(-1);

	const render = () => {
		return (
			<div className='flex flex-col gap-[30px]'>
				{ list.map((features, featuresIdx) => {
					return (
						<div
							key={ featuresIdx }
							className='flex items-center'
							onMouseLeave={ resetActiveIdx }>
							{ renderMovingLine(featuresIdx, features, animationControls[featuresIdx]) }
							{ renderMovingLine(featuresIdx, features, animationControls[featuresIdx]) }
						</div>
					);
				}) }
			</div>
		);
	};

	return render();
};

export default InfiniteMovingFeatures;