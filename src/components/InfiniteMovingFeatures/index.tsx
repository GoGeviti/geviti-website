'use client';

import React, { useEffect, useRef, useState } from 'react';

import { landingData } from '@/constant/data';
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
	onToggleAnimation?: (state: string) => void; // eslint-disable-line no-unused-vars
};

type InfiniteMovingCardsProps = {
	items: {
		description: string;
		title: string;
	}[];
	className?: string;
	containerRefAll: React.MutableRefObject<(HTMLDivElement | null)[]>;
	scrollerRefAll: React.MutableRefObject<(HTMLUListElement | null)[]>;
	listIndex: number;
	onToggleAnimation?: (state: string) => void; // eslint-disable-line no-unused-vars
	start: boolean;
	isMobile?: boolean;
};

const PopoverPills: React.FC<PopoverPillsProps> = ({
	item,
	isMobile,
	onToggleAnimation
}) => {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		if (onToggleAnimation) {
			if (open) onToggleAnimation('paused');
			else onToggleAnimation('running');
		}
	}, [open]);

	const handleClick = () => {
		setOpen(!open);
	};

	const handleMouseEnter = () => {
		setOpen(true);
	};

	const handleMouseLeave = () => {
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
						'font-Poppins cursor-pointer flex whitespace-nowrap items-center justify-center text-center overflow-hidden relative !rounded-19px text-[28px] leading-6 py-5 px-6',
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

const cards = landingData.membership.priceSection.list;

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
	items,
	className,
	listIndex,
	containerRefAll,
	scrollerRefAll,
	onToggleAnimation,
	start,
	isMobile
}) => {
	return (
		<div
			ref={ el => containerRefAll.current[listIndex] = el }
			className={ clsxm(
				'scroller relative z-20 overflow-hidden',
				className
			) }
			onMouseLeave={ () => {
				if (onToggleAnimation) onToggleAnimation('running');
			} }
		>
			<ul
				ref={ el => scrollerRefAll.current[listIndex] = el }
				className={ clsxm(
					'flex gap-[46px] flex-nowrap w-max shrink-0 min-w-full',
					start && 'animate-scroll',
				) }
			>
				{ [...items, ...items].map((item, idx) => (
					<li key={ `infinitemoving-${ idx }` }>
						<PopoverPills
							item={ item }
							onToggleAnimation={ onToggleAnimation }
							isMobile={ isMobile }
						/>
					</li>
				)) }
			</ul>
		</div>
	);
};

const InfiniteMovingFeatures: React.FC<InfiniteMovingFeaturesProps> = ({
	list,
	duration = 40
}) => {
	const containerRefs = useRef<Array<HTMLDivElement | null>>([]);
	const scrollerRefs = useRef<Array<HTMLUListElement | null>>([]);
	const [start, setStart] = useState<boolean>(false);
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	useEffect(() => {
		list.forEach((_, idx) => {
			const containerRef = containerRefs.current[idx];
			const scrollerRef = scrollerRefs.current[idx];
			addAnimation(containerRef, scrollerRef, idx);
		});
	}, [list]);

	const addAnimation = (containerRef: HTMLDivElement | null, scrollerRef: HTMLUListElement | null, index: number) => {
		if (containerRef && scrollerRef) {
			// const scrollerContent = Array.from(scrollerRef.children);
			// scrollerContent.forEach(item => {
			// 	let duplicatedItem = item.cloneNode(true);
			// 	if (scrollerRef) {
			// 		scrollerRef.appendChild(duplicatedItem);
			// 	}
			// });

			getDirection(containerRef, index);
			getSpeed(containerRef);
			if (index === cards.length - 1) setStart(true);
		}
	};
	const getDirection = (containerRef: HTMLDivElement | null, index: number) => {
		const direction = index % 2 === 0 ? 'right' : 'left';

		if (containerRef) {
			if (direction === 'left') {
				containerRef.style.setProperty(
					'--animation-direction',
					'forwards'
				);
			} else {
				containerRef.style.setProperty(
					'--animation-direction',
					'reverse'
				);
			}
		}
	};
	const getSpeed = (containerRef: HTMLDivElement | null) => {
		if (containerRef) {
			containerRef.style.setProperty('--animation-duration', duration + 's');
		}
	};

	const changePlayState = (ref: HTMLUListElement | null, state: string) => {
		if (ref) {
			ref.style.setProperty('animation-play-state', state);
		}
	};

	const onToggleAnimation = (state: string) => {
		list.forEach((_, idx) => {
			const ref = scrollerRefs.current[idx];
			changePlayState(ref, state);
		});
	};

	return (
		<div className='flex flex-col gap-[30px]'>
			{
				list.map((item, index) => {
					return (
						<InfiniteMovingCards
							key={ item.id }
							items={ item.list }
							listIndex={ index }
							containerRefAll={ containerRefs }
							scrollerRefAll={ scrollerRefs }
							onToggleAnimation={ onToggleAnimation }
							start={ start }
							isMobile={ isMobile }
						/>
					);
				})
			}
		</div>
	);
};

export default InfiniteMovingFeatures;