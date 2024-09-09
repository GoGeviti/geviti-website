'use client';

import React, { useMemo, useRef, useState } from 'react';
import SlickSlider from 'react-slick';
import { AnimatePresence, motion, wrap } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { solutionData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import { CheckBlue, ChevronRight } from '../Icons';
import ShiftSection from '../ShiftSection';

import VerticalThumbs from './VerticalThumbs';

const BiomarkersSection = dynamic(() => import('./BiomarkersSection'), { ssr: false });

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
const opacityVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

type TreatmentOptionsProps = {
	type: 'men' | 'women';
};

const TreatmentOptions: React.FC<TreatmentOptionsProps> = ({ type = 'men' }) => {
	const treatmentData = solutionData.treatmentOptions[type];

	const sliderRef = useRef<SlickSlider>(null);
	const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
	const [selectedSubCategoryIdx, setSelectedSubCategoryIdx] = useState<number>(0);
	const filterCategoryOptions = treatmentData.tabs;
	const filterSubCategoryOptions = filterCategoryOptions[selectedTabIdx].subCategories ?? [];
	const selectedSubCategory = filterSubCategoryOptions[selectedSubCategoryIdx];
	const productsByCategory = useMemo(() => {
		return treatmentData.products.filter(product => {
			const filteredByCategory = product.category.id === filterCategoryOptions[selectedTabIdx]?.id;

			return filterSubCategoryOptions?.length
				? filteredByCategory && product.subCategory.id.includes(selectedSubCategory?.id)
				: filteredByCategory;
		});
	}, [selectedTabIdx, selectedSubCategoryIdx]);

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

	const swipeToNextImage = () => {
		setImageCount([imageCount + 1, 1]);
		if (sliderRef?.current) {
			sliderRef?.current?.slickNext();
		}
	};

	const handleSelectTab = (tabIdx: number) => {
		setSelectedTabIdx(tabIdx);
		setSelectedSubCategoryIdx(0);
		setImageCount([0, 1]);
	};

	const handleSelectSubCategory = (subCategoryIdx: number) => {
		setSelectedSubCategoryIdx(subCategoryIdx);
		setImageCount([0, 1]);
	};

	const renderSubCategoryFilter = () => {
		return (
			<div className='max-md:-mr-4 max-md:last:pr-4 no-scrollbar select-none transform flex md:justify-center h-10 flex-nowrap overflow-x-auto overflow-y-hidden scrolling-touch scroll-smooth gap-x-3 lg:gap-x-6 relative'>
				{ filterSubCategoryOptions.map((subCategory, subCategoryIdx) => {
					return (
						<button
							key={ `subCategory-${ subCategory.id }` }
							aria-label='subcategory-product'
							className={ clsxm(
								'py-2 px-2 sm:px-3.5 transition-colors whitespace-nowrap ease-in-out duration-200 text-[3.1vw] xxs2:text-xs !leading-normal font-medium border rounded-[100px] cursor-pointer',
								subCategoryIdx === selectedSubCategoryIdx ? 'border-primary text-primary' : 'border-grey-300 text-grey-300'
							) }
							onClick={ () => handleSelectSubCategory(subCategoryIdx) }
						>
							{ subCategory.title }
						</button>
					);
				}) }
			</div>
		);
	};

	const renderButtonSwitchCategoryFilter = () => {
		return (
			<div className='relative w-full rounded-[100px] h-[46px] sm:h-[49px] px-1.5 bg-grey-50'>
				<div className='relative grid grid-cols-3 items-center justify-center w-full h-full sm:gap-3.5'>
					{ filterCategoryOptions.map((opt, optIdx) => {
						const selected = selectedTabIdx === optIdx;

						return (
							<button
								key={ `opt-${ optIdx }` }
								onClick={ () => handleSelectTab(optIdx) }
								className={ clsxm(
									selected
										? 'text-white font-medium'
										: 'text-grey-400 font-normal',
									'transition-colors px-2 sm:px-3.5 h-[34px] sm:h-[37px] rounded-[100px] relative inline-flex items-center justify-center'
								) }
							>
								<span className='relative z-10 text-[3.1vw] xxs2:text-xs sm:text-sm !leading-normal'>{ opt.title }</span>

								{ selected && (
									<motion.span
										layoutId='pill-tab-treatmentOptions'
										transition={ { type: 'spring', duration: 0.75 } }
										className='absolute inset-0 z-0 bg-primary rounded-[100px]'
									/>
								) }
							</button>
						);
					}) }
				</div>
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
				<div className='container-center w-full'>
					<div className='flex flex-col text-center w-full'>
						<p className='mb-3 lg:mb-3.5 text-pretitle lg:text-base lg:!leading-6 text-grey-primary'>
							{ treatmentData.preTitle }
						</p>
						<h2 className='max-sm:max-w-[343px] mx-auto text-[6.4vw] xxs2:text-2xl md:text-3xl lg:text-[42px] !leading-normal -tracking-0.04em text-primary'>
							{ treatmentData.title }
						</h2>

						<div className='w-full sm:w-fit mx-auto mb-6 mt-6 sm:mt-[42px] relative'>
							{ renderButtonSwitchCategoryFilter() }
						</div>
					</div>
					<AnimatePresence mode='wait'>
						<motion.div
							key={ `subcategory-treatmentOptions-${ selectedTabIdx }` }
							initial={ { y: -10, opacity: 0 } }
							animate={ { y: 0, opacity: 1 } }
							exit={ { y: -10, opacity: 0 } }
							transition={ { duration: 0.375, ease: 'easeInOut' } }
							className='w-full'
						>
							{ renderSubCategoryFilter() }
						</motion.div>
					</AnimatePresence>
				</div>

				<div className='w-full flex container-center'>
					<div className='lg:pt-14 flex flex-col max-lg:hidden'>
						<AnimatePresence initial={ false }>
							<div className='overflow-hidden inline-flex w-full h-full'>
								<motion.div
									key={ `VerticalThumbs-desktop-${ selectedSubCategoryIdx }-${ selectedTabIdx }` }
									variants={ opacityVariants }
									initial='initial'
									animate='animate'
									exit='exit'
									transition={ { duration: .75, ease: 'easeIn' } }>
									<VerticalThumbs
										sliderRef={ sliderRef }
										list={ productsByCategory }
										activeIdx={ activeIdx }
										onClick={ (idx: number) => skipToImage(idx) } />
								</motion.div>
							</div>
						</AnimatePresence>
					</div>
					<div className='pt-[25px] lg:pt-[59px] grid grid-cols-1 lg:grid-cols-11 max-lg:gap-[42px]'>
						<div className='w-full h-full lg:h-[507px] mx-auto max-lg:hidden relative lg:col-span-5'>
							<AnimatePresence initial={ false }>
								<div className='inline-flex overflow-hidden w-full h-full'>
									<motion.div
										key={ `image-desktop-${ selectedSubCategoryIdx }-${ selectedTabIdx }` }
										variants={ opacityVariants }
										initial='initial'
										animate='animate'
										exit='exit'
										transition={ { duration: .75, ease: 'easeIn' } }
										className='w-full h-full'>
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
															{ currentProduct?.image && (
																<Image
																	src={ currentProduct?.image }
																	alt=''
																	sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
																	quality={ 100 }
																	fill
																	priority
																	className='object-contain w-full h-full pointer-events-none'
																/>
															) }
														</div>
													</motion.div>
												</AnimatePresence>
											</div>
										</div>
									</motion.div>
								</div>
							</AnimatePresence>
						</div>
						<div className='w-full h-full flex flex-col justify-between relative lg:col-span-6'>
							<div>
								<ShiftSection
									id={ `title-${ currentProduct?.id }` }
									isMobile
									wrapperClassName='w-full'
									animationProps={ shiftSectionAnimationProps }
								>
									<p className='text-pretitle text-grey-primary max-lg:mb-2 max-lg:text-center'>
										{ filterSubCategoryOptions[selectedSubCategoryIdx]?.preTitle || filterCategoryOptions[selectedTabIdx].preTitle }
									</p>
									{ renderProductTitle(currentProduct?.name) }
								</ShiftSection>

								<div className='py-6 lg:hidden w-full flex flex-col gap-3.5'>
									<AnimatePresence initial={ false }>
										<div className='inline-flex w-full h-full'>
											<motion.div
												key={ `image-mobile-${ selectedSubCategoryIdx }-${ selectedTabIdx }` }
												variants={ opacityVariants }
												initial='initial'
												animate='animate'
												exit='exit'
												transition={ { duration: .75, ease: 'easeIn' } }
												className='w-full h-full flex flex-col gap-3.5'>
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
																{ currentProduct?.image && (
																	<Image
																		src={ currentProduct?.image }
																		alt=''
																		sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
																		quality={ 100 }
																		fill
																		className='object-contain w-full h-full pointer-events-none'
																	/>
																) }
															</motion.div>
														</AnimatePresence>
													</div>
												</div>
												{ productsByCategory.length > 1 && (
													<>
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
																			'flex-none transition-shadow transform duration-200 ease-in-out relative overflow-hidden w-[100px] h-[100px] rounded-xl',
																			productIdx === activeIdx ? 'shadow-slider-solution-2 border-[0.39px] border-grey-primary' : 'border-[0.64px] border-grey-100'
																		) }
																	>
																		<div className={ clsxm(
																			'relative overflow-hidden transition-opacity transform duration-200 ease-in-out w-full h-[105.38px] top-[5.83px] opacity-50',
																			productIdx === activeIdx ? 'opacity-100' : 'opacity-50'
																		) }>
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
													</>
												) }
											</motion.div>
										</div>
									</AnimatePresence>
								</div>

								<ShiftSection
									id={ `content-${ currentProduct?.id }` }
									animationProps={ shiftSectionAnimationProps }
									isMobile>
									<div className='grid'>
										<div className='flex flex-col gap-y-4 lg:gap-y-3.5 lg:mt-3.5'>
											<p className='text-lg !leading-[25px] font-medium text-primary -tracking-0.04em'>
												{ typeof currentProduct?.price === 'string' ? currentProduct?.price : `As low as $${ currentProduct?.price }/m*` }
											</p>
											<p className='text-xs lg:text-sm !leading-5 text-grey-400'>
												{ currentProduct?.description }
											</p>
										</div>

										<div className='mt-4 lg:mt-[42px] grid grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-x-[42px] lg:gap-y-6'>
											{ currentProduct?.list.map((item, itemIdx) => {
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

							<div className='flex max-lg:hidden pb-[70px] mt-5'>
								<div className='flex items-center gap-6'>
									<Link
										href={ treatmentData.btnCta.href }
										className='bg-primary text-white rounded-full h-[58px] flex items-center justify-center py-3 px-[42px] text-lg font-medium !leading-6'>
										{ treatmentData.btnCta.text }
									</Link>

									{ /* { productsByCategory.length > 1 && ( */ }
									<a
										href='/files/Geviti Rx Pricing Sheet.pdf'
										target='_blank'
										className='group max-md:w-full border border-primary hover:opacity-70 rounded-full h-[58px] py-1.5 pl-[42px] pr-1.5 relative grid place-items-center grid-cols-[auto_46px] overflow-hidden'
										aria-label='next product'
										onClick={ swipeToNextImage }
									>
										<span className='text-lg leading-[133%] font-medium text-primary inline-block z-[2]'>
											See Pricing
										</span>
										<span className='w-[46px] relative flex items-center justify-center'>
											<ChevronRight className='w-18px h-18px text-primary flex-shrink-0' />
										</span>
									</a>
									{ /* ) } */ }
								</div>
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

			{ selectedSubCategory?.biomarkers && (
				<BiomarkersSection
					key={ `${ selectedTabIdx }-${ selectedSubCategoryIdx }` }
					list={ selectedSubCategory?.biomarkers }
					type={ type } />
			) }
		</div>
	);
};

export default TreatmentOptions;