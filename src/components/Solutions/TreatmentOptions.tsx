'use client';

import React, { useRef, useState } from 'react';
import SlickSlider from 'react-slick';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { solutionData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import { ArrowNarrowRight, CheckBlue, ChevronRight, Filter } from '../Icons';

type TreatmentOptionsProps = {
	type: 'men' | 'women';
};

const TreatmentOptions: React.FC<TreatmentOptionsProps> = ({ type = 'men' }) => {
	const treatmentData = solutionData.treatmentOptions[type];
	const wrapperItemsRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<SlickSlider>(null);

	const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
	const [selectedProductIdx, setSelectedProductIdx] = useState<number>(0);
	const [activeSlide, setActiveSlide] = useState<number>(0);
	const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

	const filterOptions = treatmentData.tabs;
	const products = treatmentData.products;

	const settings = {
		dots: true,
		infinite: true,
		speed: 750,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		afterChange: (currentSlide: number) => setActiveSlide(currentSlide)
	};

	const handleNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const handlePrevious = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	const handleSelectTab = (tabIdx: number, tabId: number) => {
		if (wrapperItemsRef.current) {
			wrapperItemsRef.current.scrollLeft = 0;
		}
		setSelectedTabIdx(tabIdx);
		setSelectedProductIdx(products.findIndex(product => product.category.id === tabId));
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
								onClick={ () => handleSelectTab(optIdx, opt.id) }
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

	const renderProductList = () => {
		return (
			<div
				id='treatmentoptions-products-scroll'
				className={ clsxm(
					'no-scrollbar overflow-y-hidden transition-all select-none transform flex flex-nowrap overflow-x-auto scrolling-touch scroll-smooth gap-x-6 py-6',
					'snap-x snap-mandatory pl-4 lg:pl-10 xl:pl-[calc((100vw-1320px)/2)] last:pr-4 lg:last:pr-10 xl:last:pr-[calc((100vw-1320px)/2)]'
				) }
				ref={ wrapperItemsRef }
			>
				<AnimatePresence mode='wait'>
					{ products.map((product, productIdx) => {
						return product.category.id === treatmentData.tabs[selectedTabIdx].id
							? (
								<motion.div
									initial={ { opacity: 0, y: 10 } }
									animate={ { opacity: 1, y: 0 } }
									exit={ { opacity: 0, y: 10 } }
									transition={ { ease: 'easeInOut', duration: .25 } }
									key={ productIdx }
									className={ clsxm(
										selectedProductIdx === productIdx && 'shadow-[0px_4px_24px_rgba(0,0,0,0.15)]',
										'group hover:shadow-[0px_4px_24px_rgba(0,0,0,0.15)] transition-shadow duration-200 ease-in cursor-pointer relative flex flex-col overflow-hidden bg-grey-secondary flex-none w-[287px] h-[405px] px-3 pt-3 pb-[21px] rounded-19px'
									) }
									id={ `treatmentoptions-card-${ product.id }` }
								>
									<div
										className='flex flex-col w-full h-full'
										onClick={ () => setSelectedProductIdx(productIdx) }>
										<div className='relative overflow-hidden rounded-2xl bg-[#EAEAEA] w-full h-[221px]'>
											<Image
												src={ product.image }
												alt={ product.name }
												className='object-cover object-center'
												sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
												fill
											/>
										</div>
										<div className='flex flex-1 flex-col space-y-1 pt-[23px] px-[13px]'>
											<h4 className='text-lg font-medium text-primary leading-[141%] -tracking-0.04em whitespace-normal'>
												{ product.name }
											</h4>
											<p className='text-sm text-grey-primary whitespace-normal mt-5px'>
												{ product.sort_description }
											</p>
											<div className='flex flex-1 flex-col justify-end text-primary pt-5'>
												<div className='flex items-center gap-5px'>
													<span className='text-sm'>As low as</span>
													{ product.price !== undefined && (
														<div className='text-xs leading-[152%] bg-blue-1 rounded-full py-1 px-1.5 flex items-center gap-1 flex-shrink-0'>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='13'
																height='14'
																viewBox='0 0 13 14'
																fill='none'
																className='flex-shrink-0'
															>
																<circle
																	cx='6.38889'
																	cy='6.95243'
																	r='6.38889'
																	fill='#181A1C'
																/>
																<path
																	d='M6.58204 7.12628V8.40728H7.77054L7.64171 8.53443C7.01408 9.15109 6.15 9.06288 5.98347 9.03904C4.86646 8.87931 4.22626 8.12041 4.22626 6.95622C4.22626 5.62912 5.05106 4.83763 6.43436 4.83763C6.92767 4.83763 7.46026 4.89962 7.88287 5.17775C8.0604 5.29457 8.21593 5.45112 8.31333 5.64343C8.41781 5.84845 8.4453 6.09957 8.4453 6.32764H9.93072C9.93072 6.14009 9.92758 5.94937 9.89695 5.76422C9.81368 5.25801 9.52697 4.79154 9.16798 4.43633C8.82785 4.09939 8.40995 3.84748 7.96613 3.67821C7.47832 3.49147 6.95595 3.40326 6.43436 3.40326C4.28517 3.40326 2.83981 4.83048 2.83981 6.95622C2.83981 7.51805 2.93329 8.03299 3.11632 8.48595C3.28756 8.90872 3.54914 9.29254 3.87278 9.59213C4.18698 9.88616 4.56561 10.1142 4.99686 10.27C5.53337 10.4639 6.10994 10.5346 6.66059 10.4758C7.27173 10.4106 7.83338 10.204 8.28191 9.87662C8.36518 9.81623 8.44766 9.75106 8.52307 9.68113L8.64482 9.57147V10.502H9.93858V7.12628H6.58126H6.58204Z'
																	fill='#A3E0FF'
																/>
															</svg>

															<p>${ product.price }/m*</p>
														</div>
													) }
												</div>
											</div>
										</div>
										<div className='absolute right-[11px] bottom-[21px]'>
											<div className={ 'w-[46px] h-[46px] border border-grey-100 max-lg:border-primary group-hover:border-primary max-lg:bg-primary group-hover:bg-primary relative rounded-full transition-all duration-200 ease-in' }>
												<ArrowNarrowRight className='text-gray-100 max-lg:text-blue-primary group-hover:text-blue-primary w-6 h-6 absolute-center flex-shrink-0 -rotate-45 transition-all duration-200 ease-in' />
											</div>
										</div>
									</div>
								</motion.div>
							) : undefined;
					}) }
				</AnimatePresence>
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
		const selectedCategory = filterOptions[selectedTabIdx].title;
		const Icon = filterOptions[selectedTabIdx].icon;

		return (
			<motion.div
				initial={ false }
				animate={ {
					height: isOpenFilter ? '244px' : '46px',
				} }
				transition={ { ease: 'easeInOut', duration: .5 } }
				className='w-full rounded-[20px] p-1.5 border border-grey-50'
			>
				<div className='flex items-center justify-between gap-2 w-full relative z-10 text-left'>
					<span className='inline-flex items-center gap-1.5 px-3'>
						<Icon className='flex-shrink-0 w-3 h-3' />

						<span className='text-xs !leading-normal text-primary w-full'>{ selectedCategory }</span>
					</span>

					<button
						onClick={ () => setIsOpenFilter(prev => !prev) }
						className='focus:ring-0 focus:outline-none bg-primary py-2 px-3 rounded-full text-white flex items-center justify-center gap-1.5 text-xs !leading-normal'>
						<Filter className='flex-shrink-0' />
						Filter
					</button>
				</div>

				<motion.div
					initial={ false }
					animate={ {
						opacity: isOpenFilter ? 1 : 0,
						height: isOpenFilter ? 'fit-content' : 0,
						y: isOpenFilter ? 0 : -20
					} }
					transition={ { ease: 'easeInOut', duration: .3 } }
					className='pt-6 pb-1 px-3'>
					<div className='flex flex-col items-start gap-y-3'>
						{ filterOptions.map((option, optionIdx) => {
							return (
								<div key={ `cat-${ optionIdx }` }>
									<input
										id={ `cat-${ optionIdx }` }
										name='category'
										type='radio'
										onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
											const tabIdx = + e.target.value;
											handleSelectTab(tabIdx, filterOptions[tabIdx].id);
										} }
										value={ optionIdx }
										checked={ optionIdx === selectedTabIdx }
									/>
									<label
										htmlFor={ `cat-${ optionIdx }` }
										className={ clsxm(
											'text-sm !leading-normal',
											selectedTabIdx === optionIdx ? 'text-primary' : 'text-grey-400'
										) }>
										{ option.title }
									</label>
								</div>
							);
						}) }
					</div>
				</motion.div>
			</motion.div>
		);
	};

	return (
		<div className='lg:px-3 max-lg:pb-0 py-6 overflow-hidden font-Poppins'>
			<div className='bg-white rounded-19px py-[42px] w-full'>
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

						<div className='lg:hidden w-full mt-6'>
							{ renderFilterMobile() }
						</div>
					</div>
				</div>

				<div className='w-full container-center'>
					<AnimatePresence mode='wait'>
						{ products.map((product, productIdx) => {
							if (product.category.id === filterOptions[selectedTabIdx].id && productIdx === selectedProductIdx) {
								return (
									<motion.div
										initial={ { opacity: 0, y: 10 } }
										animate={ { opacity: 1, y: 0 } }
										exit={ { opacity: 0, y: 10 } }
										transition={ { ease: 'easeInOut', duration: .25 } }
										key={ `productdetail-${ productIdx }` }
										className='pt-[57px] lg:pt-[106px] grid grid-cols-1 lg:grid-cols-2 gap-[42px] lg:gap-[22px]'
									>
										<div className='w-full'>
											<p className='text-pretitle text-grey-primary max-lg:mb-3'>
												{ filterOptions[selectedTabIdx].preTitle }
											</p>
											<h3 className='text-2xl md:text-3xl lg:text-5xl !leading-normal text-primary'>{ product.name }</h3>
											<p className='mt-4 lg:mt-3.5 text-xs !leading-5 lg:text-lg lg:!leading-normal text-grey-400'>{ product.description }</p>

											<div className='mt-6 lg:mt-16 max-lg:justify-between grid grid-cols-2 lg:grid-cols-3 gap-y-6'>
												{ product.list.map((item, itemIdx) => {
													return (
														<div
															key={ `item-${ itemIdx }` }
															className='flex items-center gap-2'>
															<CheckBlue className='flex-shrink-0 w-3.5 h-3.5' />
															<span className='text-xs !leading-normal'>
																{ item }
															</span>
														</div>
													);
												}) }
											</div>

											<div className='flex mt-16 max-lg:hidden'>
												<ButtonCta
													href={ treatmentData.btnCta.href }
													text={ treatmentData.btnCta.text }
												/>
											</div>
										</div>
										<div className='w-full h-full'>
											<div className='w-full h-full lg:h-[575px] flex justify-center relative'>
												<div className='max-lg:hidden'>
													{ renderButtonSlider('prev', activeSlide === 0) }
												</div>
												<div className='lg:hidden'>
													{ renderButtonSlider('prev') }
												</div>
												<div className='lg:py-6 w-full h-full flex justify-center relative'>
													<div className='relative max-w-[476.8px] w-full h-full z-10'>
														<div className='absolute top-[27px] lg:top-4 left-0 lg:left-[27px] z-20 py-3 px-6 bg-grey-secondary rounded-[14px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)]'>
															<span className='text-lg !leading-[26px] font-medium -tracking-0.04em'>
																As low as ${ product.price }/m*
															</span>
														</div>
														<SlickSlider
															ref={ sliderRef }
															{ ...settings }
															className='h-[474.79px] lg:h-[527px] relative overflow-hidden'
														>
															{ product.images.map((image, index) => (
																<div
																	key={ `slidermobile-${ index }` }
																	className='relative overflow-hidden w-full h-[474.79px] lg:h-[527px]'
																>
																	<Image
																		src={ image }
																		alt=''
																		sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
																		quality={ 100 }
																		fill
																		className='object-contain w-full h-full pointer-events-none'
																	/>
																</div>
															)) }
														</SlickSlider>
													</div>
												</div>
												{ renderButtonSlider('next') }

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
									</motion.div>
								);
							}

							return undefined;
						}) }
					</AnimatePresence>
				</div>

				<div className='relative pt-[65px] max-lg:hidden'>
					{ renderProductList() }
				</div>
			</div>

			<div className='lg:hidden'>
				{ renderProductList() }
			</div>
		</div>
	);
};

export default TreatmentOptions;