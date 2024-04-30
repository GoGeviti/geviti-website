'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion, wrap } from 'framer-motion';
import Image from 'next/image';

import { solutionData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import { CheckBlue, ChevronRight } from '../Icons';
import ShiftSection from '../ShiftSection';

const imageVariants = {
	incoming: (direction: number) => ({
		x: direction > 0 ? '100%' : '-100%'
	}),
	active: { x: 0 },
	exit: (direction: number) => ({
		x: direction > 0 ? '-100%' : '100%'
	})
};

type TreatmentOptionsProps = {
	type: 'men' | 'women';
};

const TreatmentOptions: React.FC<TreatmentOptionsProps> = ({ type = 'men' }) => {
	const treatmentData = solutionData.treatmentOptions[type];

	const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
	const filterOptions = treatmentData.tabs;
	const productsByCategory = treatmentData.products.filter(product => {
		return product.category.id === filterOptions[selectedTabIdx].id;
	});
	const [[imageCount, direction], setImageCount] = useState<[number, number]>([0, 0]);
	const activeIdx = wrap(0, productsByCategory.length, imageCount);

	const currentProduct = productsByCategory[activeIdx];
	const shiftSectionAnimationProps = { transition: { duration: .75, ease: 'easeIn' }, initial: 'initial' };

	const swipeToImage = (swipeDirection: number) => {
		setImageCount([imageCount + swipeDirection, swipeDirection]);
	};

	const skipToImage = (imageIdx: number) => {
		let changeDirection = 0;
		if (imageIdx > activeIdx) {
			changeDirection = 1;
		} else if (imageIdx < activeIdx) {
			changeDirection = -1;
		}
		setImageCount([imageIdx, changeDirection]);
	};

	const handleNext = () => {
		swipeToImage(1);
	};

	const handlePrevious = () => {
		swipeToImage(-1);
	};

	const handleSelectTab = (tabIdx: number) => {
		setSelectedTabIdx(tabIdx);
		setImageCount([0, 1]);
	};

	const renderButtonSwitchFilter = () => {
		return (
			<div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-grey-50'>
				<div className='relative flex items-center w-full h-full gap-3.5'>
					{ filterOptions.map((opt, optIdx) => {
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
							</button>
						);
					}) }
				</div>
			</div>
		);
	};

	const renderButtonSlider = (dir: 'prev' | 'next', disabled?: boolean) => {
		return (
			<button
				disabled={ disabled }
				onClick={ dir === 'prev' ? handlePrevious : handleNext }
				className={ clsxm(
					'absolute z-20 top-1/2 -translate-y-1/2 flex-shrink-0 max-lg:bg-black/20 max-lg:border max-lg:border-white/15 max-lg:text-white focus:ring-0 focus:outline-none w-[46px] h-[46px] text-blue-primary disabled:text-primary bg-primary disabled:bg-grey-50 rounded-full flex items-center justify-center',
					dir === 'prev' ? 'left-0' : 'right-0'
				) }>
				<ChevronRight className={ clsxm('w-[17px] h-[17px] flex-shrink-0', dir === 'prev' && 'rotate-180') } />
			</button>
		);
	};

	const renderFilterMobile = () => {
		return (
			<div className='-mr-4 last:pr-4 no-scrollbar select-none transform flex flex-nowrap overflow-x-auto overflow-y-hidden scrolling-touch scroll-smooth gap-x-6'>
				{ filterOptions.map((opt, optIdx) => {
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

	return (
		<div className='lg:px-3 py-6 overflow-hidden font-Poppins'>
			<div className='bg-white rounded-19px py-6 lg:pt-[42px] lg:pb-[50px] w-full'>
				<div className='container-center'>
					<div className='flex flex-col items-center text-center'>
						<p className='mb-3 lg:mb-3.5 text-pretitle lg:text-base lg:!leading-6 text-grey-primary'>
							{ treatmentData.preTitle }
						</p>
						<h2 className='max-sm:max-w-[343px] mx-auto text-[6.4vw] xxs2:text-2xl md:text-3xl lg:text-[42px] !leading-normal -tracking-0.04em text-primary'>
							{ treatmentData.title }
						</h2>

						<div className='hidden lg:flex w-fit mx-auto mt-14'>
							{ renderButtonSwitchFilter() }
						</div>

						<div className='lg:hidden w-full mt-[42px]'>
							{ renderFilterMobile() }
						</div>
					</div>
				</div>

				<div className='w-full container-center'>
					<div className='pt-[42px] lg:pt-[106px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[22px]'>
						<div className='w-full relative'>
							<p className='text-pretitle text-grey-primary max-lg:mb-2 max-lg:text-center'>
								{ filterOptions[selectedTabIdx].preTitle }
							</p>
							<ShiftSection
								id={ `title-${ currentProduct.id }` }
								isMobile
								wrapperClassName='w-full'
								animationProps={ shiftSectionAnimationProps }
							>
								{ renderProductTitle(currentProduct.name) }
							</ShiftSection>

							<div className='py-6 lg:hidden w-full flex flex-col gap-18px'>
								<div className='h-[223px] w-full bg-grey-50 border border-grey-100 relative overflow-hidden rounded-[20px] shadow-slider-solution-1'>
									<span className='absolute z-10 left-[17%] top-[37px] rounded-[7.35px] bg-grey-secondary py-2 px-3 text-xs !leading-none font-medium text-primary -tracking-0.04em shadow-[0px_2.10101px_12.6061px_rgba(0,0,0,0.15)]'>
										As low as ${ currentProduct.price }/m*
									</span>
									<div className='relative overflow-hidden w-full h-[235px] top-[13px]'>
										<Image
											src={ currentProduct.image }
											alt=''
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
											quality={ 100 }
											fill
											className='object-contain w-full h-full pointer-events-none'
										/>
									</div>
								</div>

								<div className='-mr-4 last:pr-4 no-scrollbar select-none transform flex flex-nowrap overflow-x-auto overflow-y-hidden scrolling-touch scroll-smooth gap-x-3.5'>
									{ productsByCategory.map((product, productIdx) => {
										return (
											<div
												key={ `slider-productmobile-${ productIdx }` }
												onClick={ () => skipToImage(productIdx) }
												className={ clsxm(
													'flex-none transition-opacity transform duration-200 ease-in-out relative overflow-hidden w-[100px] h-[100px] rounded-[8.97px] border-[0.64px] border-grey-100',
													productIdx === activeIdx ? 'shadow-slider-solution-2 bg-grey-50 opacity-100' : 'opacity-50'
												) }
											>
												<div className='relative overflow-hidden w-full h-[105.38px] top-[5.83px]'>
													<Image
														src={ product.image }
														alt=''
														sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
														quality={ 100 }
														fill
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
									<p className='text-xs !leading-5 lg:text-lg lg:!leading-normal text-grey-400 max-lg:order-1 mt-4 lg:mt-3.5'>
										{ currentProduct.description }
									</p>

									<div className='lg:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-6'>
										{ currentProduct.list.map((item, itemIdx) => {
											return (
												<div
													key={ `item-${ itemIdx }` }
													className='flex items-center gap-2'>
													<CheckBlue className='flex-shrink-0 w-3.5 h-3.5' />
													<span className='text-sm lg:text-xs !leading-normal text-primary lg:max-w-[112px]'>
														{ item }
													</span>
												</div>
											);
										}) }
									</div>
								</div>
							</ShiftSection>

							<div className='absolute bottom-0 xl:bottom-[50px] 2xl:bottom-[69px] max-lg:hidden'>
								<ButtonCta
									href={ treatmentData.btnCta.href }
									text={ treatmentData.btnCta.text }
								/>
							</div>
						</div>
						<div className='w-full h-full max-lg:hidden'>
							<div className='w-full h-full lg:h-[575px] flex justify-center relative'>
								<div>
									{ renderButtonSlider('prev', activeIdx === 0) }
								</div>
								<div className='lg:py-6 w-full h-full flex justify-center relative'>
									<div className='relative max-w-[476.8px] w-full h-full z-10 overflow-hidden'>
										<AnimatePresence
											initial={ false }
											custom={ direction }>
											<motion.div
												key={ `imageslider-${ imageCount }` }
												custom={ direction }
												variants={ imageVariants }
												initial='incoming'
												animate='active'
												exit='exit'
												transition={ { ease: 'easeInOut', duration: .75 } }
												className='absolute inset-0 w-full h-full'
											>
												<div className='relative overflow-hidden w-full h-[474.79px] lg:h-[527px]'>
													<Image
														src={ currentProduct.image }
														alt=''
														sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
														quality={ 100 }
														fill
														className='object-contain w-full h-full pointer-events-none'
													/>

													<div className='absolute top-[27px] lg:top-4 left-0 lg:left-[27px] z-20 py-3 px-6 bg-grey-secondary rounded-[14px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)]'>
														<span className='text-lg !leading-[26px] font-medium -tracking-0.04em'>
															As low as ${ currentProduct.price }/m*
														</span>
													</div>
												</div>
											</motion.div>
										</AnimatePresence>
									</div>
								</div>
								{ renderButtonSlider('next', productsByCategory.length <= 1) }

								<div className='absolute-center w-[471px] lg:w-full h-full'>
									<Image
										src='/images/solution_media/compressed/powder-blue.webp'
										alt=''
										width={ 471 }
										height={ 525 }
										className='w-[471px] lg:w-full h-full object-contain'
									/>
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
		</div >
	);
};

export default TreatmentOptions;