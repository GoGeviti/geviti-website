'use client';

import React, { useState } from 'react';

import clsxm from '@/helpers/clsxm';

import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

type FeatureItem = {
	title: string;
	description: string;
};

type PopoverPillsProps = {
	item: FeatureItem;
	isMobile?: boolean;
	onToggleAnimation?: (state: string) => void; // eslint-disable-line no-unused-vars
};

const PopoverPills: React.FC<PopoverPillsProps> = ({
	item,
	onToggleAnimation
}) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleToggleAnim = (nextState: boolean) => {
		if (onToggleAnimation) {
			if (nextState) onToggleAnimation('paused');
			else onToggleAnimation('running');
		}
	};

	const handleClick = () => {
		handleToggleAnim(!open);
		setOpen(!open);
	};

	const handleMouseEnter = () => {
		handleToggleAnim(true);
		setOpen(true);
	};

	const handleMouseLeave = () => {
		handleToggleAnim(false);
		setOpen(false);
	};

	const triggerClassName = clsxm(
		'font-Poppins cursor-pointer inline-block text-center overflow-hidden relative !rounded-19px text-[28px] leading-6 py-5 px-6',
		open ? 'bg-primary text-white rounded-19px shadow-feature' : 'bg-[#F2FAFF] text-blue-primary'
	);

	return (
		<Popover
			open={ open }
			onOpenChange={ setOpen }>
			<PopoverTrigger
				onClick={ e => e.preventDefault() }
				className='focus:ring-0 focus:outline-none focus:border-0'>
				<span
					className={ clsxm(triggerClassName, 'lg:hidden') }
					onClick={ handleClick }>
					{ item.title }
				</span>
				<span
					className={ clsxm(triggerClassName, 'max-lg:hidden') }
					onMouseEnter={ handleMouseEnter }
					onMouseLeave={ handleMouseLeave }>
					{ item.title }
				</span>
			</PopoverTrigger>
			<PopoverContent
				side='top'
				align='center'
				sideOffset={ 24 }
				className='w-full max-w-[90vw] sm:max-w-[387px] py-3.5 px-3 lg:px-6 backdrop-blur-[22.2px] bg-white/40 border border-white/15 rounded-xl !shadow-[0px_4px_15.8px_0px_rgba(2,23,27,0.1)]'>
				<span className='text-grey-800 text-lg font-Poppins text-center lg:text-left'>
					{ item.description || item.title }
				</span>
			</PopoverContent>
		</Popover>
	);
};

export default PopoverPills;