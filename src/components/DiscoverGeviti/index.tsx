'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { landingData, productsData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';

import { ArrowNarrowLeft, ArrowNarrowRight } from '../Icons';

type DiscoverGevitiProps = {
	title?: string;
	description?: string;
	productsWrapperClassName?: string;
	withBg?: boolean;
};

export const handleIsElementScrolledIntoHorizontalView = (elm: HTMLElement | null, container: HTMLDivElement | null) => {
	if (elm && container && window.innerWidth >= screens.lg) {
		const checkIsVisible = () => {
			const visible = container.scrollLeft + container.clientWidth,
				isStartVisible = visible >= elm.offsetLeft + (elm.clientWidth / 2),
				isEndVisible = visible <= elm.offsetLeft + container.clientWidth + (elm.clientWidth / 2);
			// if both are true, item is visible relative to scroll position
			// this does not mean, it is visible in the viewport
			// return isStartVisible && isEndVisible;
			if (isStartVisible && isEndVisible) {
				elm.removeAttribute('style');
			} else {
				elm.setAttribute('style', 'opacity: 0.25;');
			}
		};

		checkIsVisible();

		elm.parentNode?.addEventListener('scroll', checkIsVisible);
	}
};

const CARD_PRODUCT_WIDTH = 287;
const SPACING_BETWEEN_CARD = 24;

const DiscoverGeviti: React.FC<DiscoverGevitiProps> = ({
	title = landingData.products.title,
	description = landingData.products.description,
	productsWrapperClassName = 'mt-[18px]',
	withBg = false,
	// products,
}) => {
	const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
	const wrapperItemsRef = useRef<HTMLDivElement>(null);
	const scrollbarWidth = useMotionValue('0%');

	const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);
	const [selectedSubCategoryIdx, setSelectedSubCategoryIdx] = useState<number>(0);
	const [disabledArrowScroll, setDisabledArrowScroll] = useState<string>('prev');
	const [productsPlaceholderCount, setProductsPlaceholderCount] = useState<number>(0);

	const selectedCategory = productsData.categories[selectedCategoryIdx].id as 'men' | 'women';

	const productsByCategory = useMemo(() => {
		const filterCategoryOptions = productsData[selectedCategory].tabs;
		return productsData[selectedCategory].products.filter(product => {
			const filteredByCategory = product.category.id === filterCategoryOptions[selectedSubCategoryIdx]?.id;
			return filteredByCategory;
		});
	}, [selectedCategoryIdx, selectedSubCategoryIdx]);

	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, productsByCategory.length);
	}, [productsByCategory, selectedCategoryIdx]);

	const handleProductsPlaceholder = () => {
		const container = wrapperItemsRef.current;
		if (container) {
			const containerWidth = container.clientWidth;
			const totalProducts = productsByCategory.length;
			const totalProductsIdeal = Math.floor(containerWidth / (CARD_PRODUCT_WIDTH));
			setProductsPlaceholderCount(totalProductsIdeal - totalProducts);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleProductsPlaceholder);

		return () => window.removeEventListener('resize', handleProductsPlaceholder);
	}, []);

	const handleProductListScroll = (init?: boolean) => {
		const container = wrapperItemsRef.current;
		if (container) {
			const scroll = container.scrollLeft;
			const total = container.scrollWidth - container.clientWidth;
			const isNotOverflowScroll = scroll === 0 && total === 0;
			const progress = isNotOverflowScroll
				? 100
				: ((scroll / total) * 100);
			if (!init) {
				scrollbarWidth.set(progress + '%');
			}

			if (isNotOverflowScroll) setDisabledArrowScroll('all');
			else if (progress === 0) setDisabledArrowScroll('prev');
			else if (progress === 100) setDisabledArrowScroll('next');
			else setDisabledArrowScroll('');
		}
	};

	useEffect(() => {
		handleProductListScroll(true);
		handleProductsPlaceholder();
	}, [wrapperItemsRef.current, selectedCategoryIdx, selectedSubCategoryIdx]);

	const handleArrowScroll = (dir: 'prev' | 'next') => {
		const container = wrapperItemsRef.current;
		if (container) {
			if (dir === 'next') {
				container.scrollLeft += (CARD_PRODUCT_WIDTH + SPACING_BETWEEN_CARD);
			} else {
				container.scrollLeft -= (CARD_PRODUCT_WIDTH + SPACING_BETWEEN_CARD);
			}
		}
	};

	const resetScrollbarWidth = () => {
		scrollbarWidth.set('0%');
	};

	const renderProductList = () => {
		return (
			<div
				id='discover-products-scroll'
				className={ clsxm(
					'no-scrollbar overflow-y-hidden transition-all select-none transform flex flex-nowrap overflow-x-auto scrolling-touch scroll-smooth gap-x-6 py-6',
					'snap-x snap-mandatory last:pr-4 lg:last:pr-10 xl:last:pr-20'
				) }
				ref={ wrapperItemsRef }
				onScroll={ () => handleProductListScroll(false) }
			>
				{ productsByCategory.map((product, productIdx) => {
					return (
						<div
							key={ productIdx }
							className='group snap-start hover:shadow-[0px_4px_24px_rgba(0,0,0,0.15)] transition-shadow duration-200 ease-in cursor-pointer relative flex flex-col overflow-hidden bg-grey-secondary flex-none w-[287px] h-[375px] xl:h-[412px] px-3 pt-3 pb-[21px] rounded-19px'
							ref={ el => itemsRef.current[productIdx] = el }
							id={ `discover-product-card-${ product.id }` }
						>
							<Link
								href={ `/solution/${ selectedCategory }` }
								key={ product.id }
								className='flex flex-col w-full h-full'
							>
								<div className='relative overflow-hidden rounded-2xl bg-[#EAEAEA] w-full h-[221px]'>
									<div className='relative overflow-hidden w-full h-[221px] top-6'>
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
								<div className='flex flex-1 flex-col space-y-1 pt-[23px] px-[13px]'>
									<h3 className='text-lg font-medium text-primary leading-[141%] -tracking-0.04em whitespace-normal'>
										{ product.name }
									</h3>
									<p className='text-sm text-grey-primary whitespace-normal mt-5px line-clamp-3'>
										{ product.description }
									</p>
									<div className='flex flex-1 flex-col justify-end text-primary pt-3.5'>
										<div className='flex'>
											{ product.price !== undefined && (
												<div className='text-xs !leading-normal bg-blue-1 rounded-full py-0.5 pl-1.5 pr-3 flex items-center justify-center gap-1 flex-shrink-0 text-primary'>
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

													<span>
														{ typeof product?.price === 'string' ? product?.price : `As low as $${ product?.price }/m*` }
													</span>
												</div>
											) }
										</div>
									</div>
								</div>
								{ /* <div className='absolute right-[11px] bottom-[21px]'>
									<div className='w-[46px] h-[46px] border border-grey-100 max-lg:border-primary group-hover:border-primary max-lg:bg-primary group-hover:bg-primary relative rounded-full transition-all duration-200 ease-in'>
										<ArrowNarrowRight className='text-gray-100 max-lg:text-blue-primary group-hover:text-blue-primary w-6 h-6 absolute-center flex-shrink-0 -rotate-45 transition-all duration-200 ease-in' />
									</div>
								</div> */ }
							</Link>
						</div>
					);
				}) }

				{ renderPlaceholderProductList() }
			</div>
		);
	};

	const renderButtonSwitchProducts = () => {
		const categories = productsData.categories;

		return (
			<div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-white'>
				<div className='relative flex items-center h-full'>
					{ categories.map((category, categoryIdx) => (
						<button
							key={ category.title }
							aria-label={ category.title }
							onClick={ () => {
								setSelectedCategoryIdx(categoryIdx);
								resetScrollbarWidth();
							} }
							className={ clsxm(
								'text-sm !leading-[21px] h-full flex items-center justify-center text-grey-400 cursor-pointer whitespace-nowrap',
								categoryIdx === 0 ? 'px-3.5 w-2/5' : 'px-6 w-3/5'
							) }>
							{ category.title }
						</button>
					)) }
				</div>

				<motion.span
					layoutId='pill-tab'
					transition={ { type: 'spring', duration: 0.75 } }
					className={ clsxm(
						'bg-primary cursor-pointer rounded-[100px] font-medium text-white whitespace-nowrap shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] text-sm !leading-[21px] flex items-center justify-center h-[37px] top-1.5 absolute',
						selectedCategoryIdx === 0
							? 'left-1.5 w-[calc(40%-6px)] px-3.5'
							: 'left-[40%] w-[calc(60%-6px)] px-6'
					) }
				>
					{ categories[selectedCategoryIdx].title }
				</motion.span>
			</div>
		);
	};

	const renderProgressBar = () => {
		return (
			<div className='overflow-hidden rounded-full bg-grey-100 relative w-full'>
				<motion.div
					key={ `progress-bar-${ selectedCategoryIdx }-${ selectedSubCategoryIdx }` }
					className='h-1 rounded-full bg-blue-primary'
					style={ { width: scrollbarWidth } }
					transition={ {
						duration: .9,
						ease: 'easeInOut'
					} }
				/>
			</div>
		);
	};

	const renderButtonArrowSlider = () => {
		const buttonClassName =
			'focus:ring-0 focus:outline-none relative text-primary disabled:text-grey-200';

		return (
			<div className='flex items-center gap-[15px]'>
				<button
					className={ buttonClassName }
					onClick={ () => handleArrowScroll('prev') }
					aria-label='prev-products-scroll'
					disabled={ disabledArrowScroll === 'prev' || disabledArrowScroll === 'all' }
				>
					<ArrowNarrowLeft className='w-6 h-6 flex-shrink-0' />
				</button>

				<button
					className={ buttonClassName }
					onClick={ () => handleArrowScroll('next') }
					aria-label='next-products-scroll'
					disabled={ disabledArrowScroll === 'next' || disabledArrowScroll === 'all' }
				>
					<ArrowNarrowRight className='w-6 h-6 flex-shrink-0' />
				</button>
			</div>
		);
	};

	const renderPlaceholderProductList = () => {
		if (productsPlaceholderCount <= 0) return null;

		return (
			<>
				{ Array.from(Array(productsPlaceholderCount).keys()).map(i => {
					return (
						<div
							key={ `new-product-${ i }` }
							className='relative flex flex-col overflow-hidden bg-grey-secondary flex-none w-[287px] h-[375px] xl:h-[412px] px-3 pt-3 pb-[15px] rounded-19px'>
							<div className='bg-[#EAEAEA] rounded-[14px] w-full h-full flex flex-col items-center justify-between pt-[19px] pb-[30px] text-grey-primary'>
								<Image
									src='/images/landing/compressed/new-product-placeholder.webp'
									alt='new-product'
									className='h-[246.16px] w-auto'
									width={ 120.8 }
									height={ 246.16 }
								/>
								<p className='text-lg !leading-[25px] font-medium -tracking-0.04em'>
									New Product
								</p>
								<p className='text-2xl !leading-normal -tracking-0.04em'>
									Coming Soon
								</p>
							</div>
						</div>
					);
				}) }
			</>
		);
	};

	return (
		<div
			className={ clsxm(
				'relative overflow-hidden font-Poppins',
				withBg && 'bg-[#EAEAEA] lg:rounded-[19px] lg:mx-3 py-10 sm:py-20'
			) }
		>
			<div className='w-full relative'>
				<div className='px-4 lg:px-10 xl:px-20'>
					<div className='flex flex-col gap-y-[42px] lg:gap-y-6'>
						<div>
							<h2 className='text-primary text-2xl md:text-3xl lg:text-4xl leading-[179%] sm:leading-[128%] lg:leading-[119%] -tracking-0.04em'>
								{ title }
							</h2>

							<p className='text-grey-primary mt-5px text-xs sm:text-sm !leading-5'>
								{ description }
							</p>
						</div>
						<div className='flex max-lg:flex-col lg:items-center gap-6 lg:gap-[42px]'>
							<div className='sm:w-fit'>{ renderButtonSwitchProducts() }</div>
							<div className='w-full flex max-sm:justify-between lg:flex-nowrap lg:whitespace-nowrap gap-1 sm:gap-6 relative'>
								{ landingData.products.subCategories.map((subCategory, subCategoryIdx) => {
									return (
										<button
											aria-label={ subCategory.title }
											key={ `subCategory-${ subCategory.id }` }
											className={ clsxm(
												'focus:ring-0 focus:outline-none transition-colors ease-in-out duration-200 border py-1 sm:py-2 px-2 sm:px-3.5 rounded-[100px] text-xs !leading-normal font-medium',
												subCategoryIdx === selectedSubCategoryIdx ? 'border-primary text-primary' : 'border-grey-300 text-grey-300'
											) }
											onClick={ () => {
												setSelectedSubCategoryIdx(subCategoryIdx);
												resetScrollbarWidth();
											} }
										>
											{ subCategory.title }
										</button>
									);
								}) }
							</div>
						</div>
					</div>
				</div>

				<AnimatePresence mode='wait'>
					<motion.div
						key={ `products-DiscoverGeviti-${ selectedCategoryIdx }-${ selectedSubCategoryIdx }` }
						initial={ { y: 10, opacity: 0 } }
						animate={ { y: 0, opacity: 1 } }
						exit={ { y: -10, opacity: 0 } }
						transition={ { duration: 0.375, ease: 'easeInOut' } }
					>
						<div className={ clsxm('relative wrapper-products-list ml-4 lg:ml-10 xl:ml-20', productsWrapperClassName) }>
							{ renderProductList() }
						</div>

						{ productsPlaceholderCount <= 0 && (
							<div className='flex items-center space-x-14 mt-[45px] px-4 lg:px-10 xl:px-20 max-lg:hidden'>
								{ renderProgressBar() }
								{ renderButtonArrowSlider() }
							</div>
						) }
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default DiscoverGeviti;
