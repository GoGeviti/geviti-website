'use client'
import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper as SwiperType } from 'swiper';

import clsxm from '@/helpers/clsxm';
import { Category } from '@/payload/payload-types';

import { ArrowNarrowLeft, ArrowNarrowRight } from '../Icons';
import { ViewOtherCategories } from '../Solutions';

type ProductSectionProps = {
	data : Category[];
}

const NavigationButtons = ({ isBeginning, isEnd, swiperRef }: {
  isBeginning: boolean,
  isEnd: boolean,
  swiperRef: React.MutableRefObject<SwiperType | undefined>
}) => (
	<div className='flex items-center gap-[14px] justify-center'>
		<button
			onClick={ () => swiperRef.current?.slidePrev() }
			className={ clsxm(
				'w-[34px] h-[34px] rounded-full border flex items-center justify-center',
				!isBeginning ? 'border-primary' : 'border-grey-primary'
			) }>
			<ArrowNarrowLeft className={ !isBeginning ? 'text-primary' : 'text-grey-primary' }/>
		</button>
		<button
			onClick={ () => swiperRef.current?.slideNext() }
			className={ clsxm(
				'w-[34px] h-[34px] rounded-full border flex items-center justify-center',
				!isEnd ? 'border-primary' : 'border-grey-primary'
			) }>
			<ArrowNarrowRight className={ !isEnd ? 'text-primary' : 'text-grey-primary' }/>
		</button>
	</div>
);

const ProductsSection: React.FC<ProductSectionProps> = ({ data }) => {

	const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<string>('male');
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const swiperRef = useRef<SwiperType>(undefined);

	const handleSlideChange = (swiper: SwiperType) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	const renderButtonSwitchProducts = () => (
		<div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-white'>
			<div className='relative flex items-center h-full'>
				{ ['male', 'female'].map((category, index) => (
					<button
						key={ category }
						aria-label={ category === 'male' ? 'Mens Products' : 'Womens Products' }
						onClick={ () => {
							setSelectedCategoryIdx(category);
						} }
						className={ clsxm(
							'text-sm !leading-[21px] h-full flex items-center justify-center text-grey-400 cursor-pointer whitespace-nowrap',
							index === 0 ? 'px-3.5 w-2/5' : 'px-6 w-3/5'
						) }
					>
						{ category === 'male' ? 'Mens Products' : 'Womens Products' }
					</button>
				)) }
			</div>

			<motion.span
				layoutId='pill-tab'
				transition={ { type: 'spring', duration: 0.75 } }
				className={ clsxm(
					'bg-primary cursor-pointer rounded-[100px] font-medium text-white whitespace-nowrap shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] text-sm !leading-[21px] flex items-center justify-center h-[37px] top-1.5 absolute',
					selectedCategoryIdx === 'male'
						? 'left-1.5 w-[calc(40%-6px)] px-3.5'
						: 'left-[40%] w-[calc(60%-6px)] px-6'
				) }
			>
				{ selectedCategoryIdx === 'male' ? 'Mens Products' : 'Womens Products' }
			</motion.span>
		</div>
	);

	return (
		<div
			id='landing-discover-geviti'
			className='pt-6 lg:pt-[81px]'
		>
			<div
				className={ clsxm(
					'relative overflow-hidden font-Poppins',
				) }
			>
				<div className='w-full relative'>
					<div className='px-4 lg:px-10 xl:px-20'>
						<div className='flex flex-col gap-y-[42px] lg:gap-y-6'>
							<div>
								<h2 className='text-primary text-2xl md:text-3xl lg:text-4xl leading-[179%] sm:leading-[128%] lg:leading-[119%] -tracking-0.04em font-VictorSerif italic font-medium'>
							Discover Geviti
								</h2>
								<p className='text-grey-primary mt-5px text-xs sm:text-sm !leading-5'>
							Browse our wide range of products!
								</p>
							</div>
							<div className='flex max-lg:flex-col lg:items-center justify-between gap-6 lg:gap-[42px]'>
								<div className='sm:w-fit'>{ renderButtonSwitchProducts() }</div>
								<div className='hidden lg:block'>
									<NavigationButtons
										isBeginning={ isBeginning }
										isEnd={ isEnd }
										swiperRef={ swiperRef } />
								</div>
							</div>
						</div>
					</div>
					<AnimatePresence mode='wait'>
						<motion.div
							key={ `products-DiscoverGeviti-${selectedCategoryIdx}` }
							initial={ { y: 10, opacity: 0 } }
							animate={ { y: 0, opacity: 1 } }
							exit={ { y: -10, opacity: 0 } }
							transition={ { duration: 0.375, ease: 'easeInOut' } }
						>
							<ViewOtherCategories
								swiperRef={ swiperRef }
								baseUrl={ `/${selectedCategoryIdx === 'male' ? 'men' : 'women'}` }
								hideHeader={ true }
								onSlideChange={ handleSlideChange }
								data={ data.filter(e => ['both', selectedCategoryIdx].includes(e.type)) } />
							{ /* <div className='lg:hidden mb-6 -mt-10'>
								<NavigationButtons
									isBeginning={ isBeginning }
									isEnd={ isEnd }
									swiperRef={ swiperRef } />
							</div> */ }
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default ProductsSection;
