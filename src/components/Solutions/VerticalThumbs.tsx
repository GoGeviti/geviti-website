'use client';

import React, { useEffect, useState } from 'react';
import { Settings } from 'react-slick';
import SlickSliderComponent from 'react-slick';
const SlickSlider = SlickSliderComponent as any;

import debounce from 'lodash/debounce';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import { ChevronRight } from '../Icons';

type VerticalThumbsProps = {
  sliderRef: React.RefObject<SlickSliderComponent | null>;
  list: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  activeIdx: number;
  onClick: (idx: number) => void; // eslint-disable-line no-unused-vars
};

const VerticalThumbs: React.FC<VerticalThumbsProps> = ({
	sliderRef,
	list,
	onClick,
	activeIdx,
}) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const settings: Settings = {
		dots: false,
		infinite: true,
		slidesToShow: list.length < 3 ? list.length : 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		swipeToSlide: true,
	};

	const handleNextSlickSlider = () => {
		if (sliderRef.current) {
			onClick(activeIdx + 1);
			sliderRef.current.slickNext();
		}
	};

	const debounceHandleNextSlickSlider = debounce(handleNextSlickSlider, 250);

	return (
		<div className='flex flex-col'>
			{ list.length > 1 && (
				<p className='text-sm !leading-5 text-grey-primary mb-3.5'>
          More Products
				</p>
			) }
			<div
				className='w-[127px]'
				style={ { height: 141 * (list.length >= 3 ? 3 : list.length) } }
			>
				{ list.length > 0 && isMounted && (
					<SlickSlider
						ref={ sliderRef }
						{ ...settings }
						className='relative overflow-hidden'
					>
						{ list.map((product, productIdx) => {
							return (
								<div
									key={ `slider-${productIdx}` }
									className='w-full h-[143px] py-px'
								>
									<div
										className={ clsxm(
											'transition-opacity transform duration-200 ease-in-out relative overflow-hidden rounded-[20px] w-full h-[127px] cursor-pointer',
											productIdx === activeIdx
												? 'border-[0.39px] border-grey-primary shadow-slider-solution-2'
												: 'border border-grey-50 opacity-50'
										) }
										onClick={ () => onClick(productIdx) }
									>
										<div className='absolute-center w-full h-[100px]'>
											<Image
												src={ product.image }
												alt={ product.name }
												fill
												sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
												className='w-full h-full object-contain'
											/>
										</div>
									</div>
								</div>
							);
						}) }
					</SlickSlider>
				) }
			</div>
			{ list.length >= 3 && (
				<div className='mt-3 flex justify-center'>
					<button
						onClick={ debounceHandleNextSlickSlider }
						className='focus:ring-0 focus:outline-none group w-[30.22px] h-[30.22px] relative rounded-[10.42px] border-[1.56px] border-[#F6F6F6] shadow-[0px_2.08403px_10.4202px_rgba(0,0,0,0.1)]'
					>
						<ChevronRight className='rotate-90 text-grey-200 group-hover:text-grey-primary absolute-center flex-shrink-0' />
					</button>
				</div>
			) }
		</div>
	);
};

export default VerticalThumbs;
