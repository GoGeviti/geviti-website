'use client';

import React, { useEffect, useRef, useState } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import { AnimatePresence, motion, wrap } from 'framer-motion';
import Image from 'next/image';

import { solutionData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import { CheckBlue, ChevronRight } from '../Icons';
import ShiftSection from '../ShiftSection';

const horizontalSliderVariants = {
	incoming: (direction: number) => ({
		x: direction > 0 ? '100%' : '-100%'
	}),
	active: { x: 0 },
	exit: (direction: number) => ({
		x: direction > 0 ? '-100%' : '100%'
	})
};

const verticalSliderVariants = {
	incoming: (direction: number) => ({
		y: direction > 0 ? '100%' : '-100%'
	}),
	active: { y: 0 },
	exit: (direction: number) => ({
		y: direction > 0 ? '-100%' : '100%'
	})
};
const shiftSectionAnimationProps = { transition: { duration: .75, ease: 'easeIn' }, initial: 'initial' };

type TreatmentOptionsProps = {
	type: 'men' | 'women';
};

type VerticalThumbsProps = {
	sliderRef: React.RefObject<SlickSlider>;
	list: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
	activeIdx: number;
	onClick: (idx: number) => void; // eslint-disable-line no-unused-vars
};

const VerticalThumbs: React.FC<VerticalThumbsProps> = ({ sliderRef, list, onClick, activeIdx }) => {
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
		swipeToSlide: true
	};

	const handleNextSlickSlider = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	return (
		<div className='lg:pt-[100px] flex flex-col max-lg:hidden'>
			<p className='text-sm !leading-5 text-grey-primary mb-3.5'>
				More Products
			</p>
			<div
				className='w-[127px]'
				style={ { height: 141 * (list.length >= 3 ? 3 : list.length) } }>
				{ list.length > 0 && isMounted && (
					<SlickSlider
						ref={ sliderRef }
						{ ...settings }
						className='relative overflow-hidden'>
						{ list.map((product, productIdx) => {
							return (
								<div
									key={ `slider-${ productIdx }` }
									className='w-full h-[143px] py-px'>
									<div
										className={ clsxm(
											'transition-opacity transform duration-200 ease-in-out relative overflow-hidden rounded-[20px] w-full h-[127px] cursor-pointer',
											productIdx === activeIdx ? 'border-[0.39px] border-grey-primary shadow-slider-solution-2' : 'border border-grey-50 opacity-50'
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
						onClick={ handleNextSlickSlider }
						className='focus:ring-0 focus:outline-none group w-[30.22px] h-[30.22px] relative rounded-[10.42px] border-[1.56px] border-[#F6F6F6] shadow-[0px_2.08403px_10.4202px_rgba(0,0,0,0.1)]'>
						<ChevronRight className='rotate-90 text-grey-200 group-hover:text-grey-primary absolute-center flex-shrink-0' />
					</button>
				</div>
			) }
		</div>
	);
};

const TreatmentOptions: React.FC<TreatmentOptionsProps> = ({ type = 'men' }) => {
	const treatmentData = solutionData.treatmentOptions[type];

	const sliderRef = useRef<SlickSlider>(null);
	const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
	const [selectedSubCategoryIdx, setSelectedSubCategoryIdx] = useState<number>(0);
	const filterCategoryOptions = treatmentData.tabs;
	const filterSubCategoryOptions = treatmentData.subCategories;
	const productsByCategory = treatmentData.products.filter(product => {
		return product.category.id === filterCategoryOptions[selectedTabIdx].id && product.subCategory.id.includes(filterSubCategoryOptions[selectedSubCategoryIdx].id);
	});
	const [[imageCount, direction], setImageCount] = useState<[number, number]>([0, 0]);
	const activeIdx = wrap(0, productsByCategory.length, imageCount);

	const currentProduct = productsByCategory[activeIdx];

	const skipToImage = (imageIdx: number) => {
		let changeDirection = 0;
		if (imageIdx === productsByCategory.length - 1 && activeIdx === 0) {
			changeDirection = -1;
		} else if (imageIdx === 0 && activeIdx === productsByCategory.length - 1) {
			changeDirection = 1;
		} else if (imageIdx > activeIdx) {
			changeDirection = 1;
		} else {
			changeDirection = -1;
		}
		setImageCount([imageIdx, changeDirection]);
	};

	const handleSelectTab = (tabIdx: number) => {
		setSelectedTabIdx(tabIdx);
		setImageCount([0, 1]);
	};

	const renderSubCategoryFilter = () => {
		return (
			<div className='w-full flex max-sm:justify-between max-lg:justify-center max-lg:mt-6 lg:flex-nowrap lg:whitespace-nowrap gap-x-1 sm:gap-x-6 relative'>
				{ filterSubCategoryOptions.map((subCategory, subCategoryIdx) => {
					return (
						<span
							key={ `subCategory-${ subCategory.id }` }
							className={ clsxm(
								'py-1 sm:py-2 px-2 sm:px-3.5 transition-colors ease-in-out duration-200 text-xs !leading-normal font-medium border rounded-[100px] cursor-pointer',
								subCategoryIdx === selectedSubCategoryIdx ? 'border-primary text-primary' : 'border-grey-300 text-grey-300'
							) }
							onClick={ () => setSelectedSubCategoryIdx(subCategoryIdx) }
						>
							{ subCategory.title }
						</span>
					);
				}) }
			</div>
		);
	};

	const renderButtonSwitchCategoryFilter = () => {
		return (
			<div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-grey-50'>
				<div className='relative flex items-center w-full h-full gap-3.5'>
					{ filterCategoryOptions.map((opt, optIdx) => {
						const Icon = opt.icon;
						const selected = selectedTabIdx === optIdx;

						return (
							<button
								key={ `opt-${ optIdx }` }
								onClick={ () => handleSelectTab(optIdx) }
								className={ clsxm(
									selected
										? 'text-white font-medium'
										: 'text-grey-400 font-normal',
									'transition-colors px-3.5 h-[37px] rounded-[100px] relative inline-flex items-center gap-1.5'
								) }
							>
								<Icon className='relative z-10 flex-shrink-0' />
								<span className='relative z-10 text-sm !leading-normal'>{ opt.title }</span>

								{ selected && (
									<motion.span
										layoutId='pill-treatmentOptions'
										transition={ { type: 'spring', duration: 0.75 } }
										className='absolute inset-0 z-0 bg-primary rounded-[100px]'
									/>
								) }

								{ selected && (
									<motion.span
										layoutId='subCategory-tab-treatmentOptions'
										transition={ { type: 'spring', duration: 0.75 } }
										className={ clsxm(
											'absolute top-[73px]',
											selectedTabIdx >= filterCategoryOptions.length - 2 ? 'right-0' : 'left-0'
										) }
									>
										{ renderSubCategoryFilter() }
									</motion.span>
								) }
							</button>
						);
					}) }
				</div>
			</div>
		);
	};

	const renderCategoryFilterMobile = () => {
		return (
			<div className='-mr-4 last:pr-4 no-scrollbar select-none transform flex flex-nowrap overflow-x-auto overflow-y-hidden scrolling-touch scroll-smooth gap-x-6'>
				{ filterCategoryOptions.map((opt, optIdx) => {
					const Icon = opt.icon;
					const selected = selectedTabIdx === optIdx;

					return (
						<div
							key={ `filtermobile-${ optIdx }` }
							className='relative w-full'>
							<button
								onClick={ () => handleSelectTab(optIdx) }
								className={ clsxm('relative z-0 flex w-full flex-row items-center justify-center gap-1.5 pb-1 transition-colors', selected ? 'text-primary font-medium' : 'text-grey-300 font-normal') }
							>
								<Icon className='flex-shrink-0' />
								<span className='whitespace-nowrap text-start text-xs !leading-normal'>
									{ opt.title }
								</span>
							</button>
							{ selected && (
								<motion.span
									layoutId='tabs-filtermobile-treatmentOptions'
									className='absolute bottom-0 left-0 right-0 z-10 h-px bg-primary rounded-[10px]'
								/>
							) }
						</div>
					);
				}) }
			</div>
		);
	};

	const renderProductTitle = (text: string) => {
		return (
			<h3 className='text-2xl md:text-3xl lg:text-5xl !leading-normal text-primary max-lg:text-center'>
				{ text }
			</h3>
		);
	};

	// const dragEndHandler = (dragInfo: PanInfo, direction: 'x' | 'y') => {
	// 	const draggedDistance = dragInfo.offset[direction];
	// 	const swipeThreshold = 25;
	// 	const spaceToScroll = 114;
	// 	const thumbsMobileEl = document.getElementById('thumbs-products-slider');

	// 	if (draggedDistance > swipeThreshold && (direction === 'x' ? activeIdx > 0 : true)) {
	// 		swipeToImage(-1);
	// 		if (sliderRef.current) {
	// 			sliderRef.current.slickPrev();
	// 		}
	// 		if (thumbsMobileEl) thumbsMobileEl.scrollLeft -= spaceToScroll;
	// 	} else if (draggedDistance < -swipeThreshold && (direction === 'x' ? activeIdx < productsByCategory.length - 1 : true)) {
	// 		swipeToImage(1);
	// 		if (sliderRef.current) {
	// 			sliderRef.current.slickNext();
	// 		}
	// 		if (thumbsMobileEl) thumbsMobileEl.scrollLeft += spaceToScroll;
	// 	}
	// };

	return (
		<div className='lg:px-3 py-6 overflow-hidden font-Poppins'>
			<div className='bg-white rounded-19px py-6 lg:pt-[42px] lg:pb-[103px] w-full'>
				<div className='container-center'>
					<div className='flex flex-col items-center text-center'>
						<p className='mb-3 lg:mb-3.5 text-pretitle lg:text-base lg:!leading-6 text-grey-primary'>
							{ treatmentData.preTitle }
						</p>
						<h2 className='max-sm:max-w-[343px] mx-auto text-[6.4vw] xxs2:text-2xl md:text-3xl lg:text-[42px] !leading-normal -tracking-0.04em text-primary'>
							{ treatmentData.title }
						</h2>

						<div className='hidden lg:flex flex-col w-fit mx-auto mt-14 relative'>
							{ renderButtonSwitchCategoryFilter() }
						</div>

						<div className='lg:hidden w-full mt-[42px]'>
							{ renderCategoryFilterMobile() }

							{ renderSubCategoryFilter() }
						</div>
					</div>
				</div>

				<div className='w-full flex container-center'>
					<VerticalThumbs
						sliderRef={ sliderRef }
						list={ productsByCategory }
						activeIdx={ activeIdx }
						onClick={ (idx: number) => skipToImage(idx) } />
					<div className='pt-10 lg:pt-[103px] grid grid-cols-1 lg:grid-cols-11 max-lg:gap-[42px]'>
						<div className='w-full h-full lg:h-[507px] mx-auto max-lg:hidden relative lg:col-span-5'>
							<div className='lg:pt-6 w-full h-full flex justify-center relative'>
								<div className='relative max-w-[476.8px] w-full h-full z-10 overflow-hidden'>
									<AnimatePresence
										initial={ false }
										custom={ direction }>
										<motion.div
											key={ `imageslider-desktop-${ imageCount }` }
											custom={ direction }
											variants={ verticalSliderVariants }
											initial='incoming'
											animate='active'
											exit='exit'
											transition={ { ease: 'easeInOut', duration: .75 } }
											className='absolute inset-0 w-full h-full'
										// drag="y"
										// dragConstraints={ { left: 0, right: 0 } }
										// dragElastic={ 1 }
										// onDragEnd={ (_, dragInfo) => dragEndHandler(dragInfo, 'y') }
										>
											<div className='relative overflow-hidden w-full h-[474.79px] lg:h-[459px] lg:pb-6'>
												<Image
													src={ currentProduct.image }
													alt=''
													sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
													quality={ 100 }
													fill
													priority
													className='object-contain w-full h-full pointer-events-none'
												/>
											</div>
										</motion.div>
									</AnimatePresence>
								</div>
							</div>
						</div>
						<div className='w-full h-full flex flex-col justify-between relative lg:col-span-6'>
							<div>
								<p className='text-pretitle text-grey-primary max-lg:mb-2 max-lg:text-center'>
									{ filterCategoryOptions[selectedTabIdx].preTitle }
								</p>
								<ShiftSection
									id={ `title-${ currentProduct.id }` }
									isMobile
									wrapperClassName='w-full'
									animationProps={ shiftSectionAnimationProps }
								>
									{ renderProductTitle(currentProduct.name) }
								</ShiftSection>

								<div className='py-6 lg:hidden w-full flex flex-col gap-3.5'>
									<div className='h-[223px] w-full border border-grey-100 relative overflow-hidden rounded-[20px] shadow-slider-solution-1'>
										<div className='relative overflow-hidden w-full h-[235px] top-[13px]'>
											<AnimatePresence
												initial={ false }
												custom={ direction }>
												<motion.div
													key={ `imageslider-${ imageCount }` }
													custom={ direction }
													variants={ horizontalSliderVariants }
													initial='incoming'
													animate='active'
													exit='exit'
													transition={ { ease: 'easeInOut', duration: .75 } }
													className='absolute inset-0 w-full h-full'
												// drag="x"
												// dragConstraints={ { left: 0, right: 0 } }
												// dragElastic={ 1 }
												// onDragEnd={ (_, dragInfo) => dragEndHandler(dragInfo, 'x') }
												>
													<Image
														src={ currentProduct.image }
														alt=''
														sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
														quality={ 100 }
														fill
														className='object-contain w-full h-full pointer-events-none'
													/>
												</motion.div>
											</AnimatePresence>
										</div>
									</div>
									<p className='text-left text-sm !leading-5 text-grey-primary'>More products</p>
									<div
										id='thumbs-products-slider'
										className='-mr-4 last:pr-4 no-scrollbar select-none transform flex flex-nowrap overflow-x-auto overflow-y-hidden scrolling-touch scroll-smooth gap-x-3.5'>
										{ productsByCategory.map((product, productIdx) => {
											return (
												<div
													id='thumbs-product-item'
													key={ `slider-productmobile-${ productIdx }` }
													onClick={ () => skipToImage(productIdx) }
													className={ clsxm(
														'flex-none transition-opacity transform duration-200 ease-in-out relative overflow-hidden w-[100px] h-[100px] rounded-xl',
														productIdx === activeIdx ? 'shadow-slider-solution-2 border-[0.39px] border-grey-primary opacity-100' : 'border-[0.64px] border-grey-100 opacity-50'
													) }
												>
													<div className='relative overflow-hidden w-full h-[105.38px] top-[5.83px]'>
														<Image
															src={ product.image }
															alt=''
															sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
															quality={ 100 }
															fill
															priority
															className='object-contain w-full h-full pointer-events-none'
														/>
													</div>
												</div>
											);
										}) }
									</div>
								</div>

								<ShiftSection
									id={ `content-${ currentProduct.id }` }
									animationProps={ shiftSectionAnimationProps }
									isMobile>
									<div className='grid'>
										<div className='flex flex-col gap-y-4 lg:gap-y-3.5 lg:mt-3.5'>
											<p className='text-lg !leading-[25px] font-medium text-primary -tracking-0.04em'>
												As low as ${ currentProduct.price }/m*
											</p>
											<p className='text-xs lg:text-sm !leading-5 text-grey-400'>
												{ currentProduct.description }
											</p>
										</div>

										<div className='mt-4 lg:mt-[42px] grid grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-x-[42px] lg:gap-y-6'>
											{ currentProduct.list.map((item, itemIdx) => {
												return (
													<div
														key={ `item-${ itemIdx }` }
														className='flex items-center gap-2'>
														<CheckBlue className='flex-shrink-0 w-3.5 h-3.5' />
														<span className='text-sm lg:text-xs !leading-normal text-primary'>
															{ item }
														</span>
													</div>
												);
											}) }
										</div>
									</div>
								</ShiftSection>
							</div>

							<div className='flex max-lg:hidden pb-10'>
								<ButtonCta
									href={ treatmentData.btnCta.href }
									text={ treatmentData.btnCta.text }
								/>
							</div>
						</div>

						<div className='flex max-sm:w-full justify-center lg:hidden'>
							<ButtonCta
								href={ treatmentData.btnCta.href }
								text={ treatmentData.btnCta.text }
								className='max-sm:w-full'
							/>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default TreatmentOptions;