'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
// Use direct import to reduce bundle size
import debounce from 'lodash/debounce';
import Image from 'next/image';
import Link from 'next/link';

import landingData from '@/constant/data/landing';
import productsData from '@/constant/data/products';
import clsxm from '@/helpers/clsxm';
import { Product } from '@/payload/payload-types';

import { ArrowNarrowLeft, ArrowNarrowRight } from '../Icons';

interface DiscoverGevitiProps {
  title?: string;
  description?: string;
  productsWrapperClassName?: string;
  withBg?: boolean;
  products?: Product[];
}

interface ProductCardProps {
  product: Product;
  selectedCategoryIdx: string;
  isPrescription: boolean;
}

const CARD_PRODUCT_WIDTH = 287;
const SPACING_BETWEEN_CARD = 24;

const DiscoverGeviti: React.FC<DiscoverGevitiProps> = ({
	title = landingData.products.title,
	description = landingData.products.description,
	productsWrapperClassName = 'mt-[18px]',
	withBg = false,
	products,
}) => {
	const scrollbarWidth = useMotionValue('0%');

	const [container, setContainer] = useState<HTMLDivElement | null>(null);
	const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<string>('male');
	const [selectedSubCategoryIdx, setSelectedSubCategoryIdx] = useState<number>(0);
	const [disabledArrowScroll, setDisabledArrowScroll] = useState<string>('prev');
	const [productsPlaceholderCount, setProductsPlaceholderCount] = useState<number>(0);

	const productsByCategory = useMemo(() => {
		const currentCategory = selectedCategoryIdx === 'male' ? 'men' : 'women';
		const filterCategoryOptions = productsData[currentCategory].tabs;
		return productsData[currentCategory].products.filter(
			product => product.category.id === filterCategoryOptions[selectedSubCategoryIdx]?.id
		);
	}, [selectedCategoryIdx, selectedSubCategoryIdx]);

	const handleProductsPlaceholder = useCallback(() => {
		if (container) {
			const containerWidth = container.clientWidth;
			const totalProducts = productsByCategory.length;
			const totalProductsIdeal = Math.floor(containerWidth / CARD_PRODUCT_WIDTH);
			setProductsPlaceholderCount(totalProductsIdeal - totalProducts);
		}
	}, [container, productsByCategory.length]);

	useEffect(() => {
		const handleResize = debounce(handleProductsPlaceholder, 800);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleProductsPlaceholder]);

	const handleProductListScroll = useCallback(() => {
		if (container) {
			const scroll = container.scrollLeft;
			const total = container.scrollWidth - container.clientWidth;
			const isNotOverflowScroll = scroll === 0 && total === 0;
			const progress = isNotOverflowScroll ? 100 : (scroll / total) * 100;
			scrollbarWidth.set(`${progress}%`);

			if (isNotOverflowScroll) setDisabledArrowScroll('all');
			else if (progress === 0) setDisabledArrowScroll('prev');
			else if (progress >= 100) setDisabledArrowScroll('next');
			else setDisabledArrowScroll('');
		}
	}, [container, scrollbarWidth]);

	useEffect(() => {
		handleProductListScroll();
		handleProductsPlaceholder();
	}, [container, handleProductListScroll, handleProductsPlaceholder]);

	const handleArrowScroll = (direction: 'prev' | 'next') => {
		if (container) {
			container.scrollLeft +=
        (direction === 'next' ? 1 : -1) * (CARD_PRODUCT_WIDTH + SPACING_BETWEEN_CARD);
		}
	};

	const resetScrollbarWidth = () => scrollbarWidth.set('0%');

	const renderProductList = () => (
		<div
			id='discover-products-scroll'
			className={ clsxm(
				'no-scrollbar overflow-y-hidden transition-all select-none transform flex flex-nowrap overflow-x-auto scrolling-touch scroll-smooth gap-x-6 py-6',
				'snap-x snap-mandatory last:pr-4 lg:last:pr-10 xl:last:pr-20'
			) }
			ref={ setContainer }
			onScroll={ handleProductListScroll }
		>
			{ selectedSubCategoryIdx !== 0
				? productsByCategory.map((product:any, index) => (
					<ProductCard
						key={ index }
						product={ {
							...product,
							image: {
								...product.image,
								url: product.image ?? '',
							},
						} }
						selectedCategoryIdx={ selectedCategoryIdx }
						isPrescription={ false } />
				))
				: products
					?.filter(product => product.category.type === selectedCategoryIdx || product.category.type === 'both')
					.map((product, index) => (
						<ProductCard
							key={ index }
							product={ product }
							selectedCategoryIdx={ selectedCategoryIdx }
							isPrescription={ true } />
					)) }
			{ renderPlaceholderProductList() }
		</div>
	);

	const renderButtonSwitchProducts = () => (
		<div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-white'>
			<div className='relative flex items-center h-full'>
				{ ['male', 'female'].map((category, index) => (
					<button
						key={ category }
						aria-label={ category === 'male' ? 'Mens Products' : 'Womens Products' }
						onClick={ () => {
							setSelectedCategoryIdx(category);
							resetScrollbarWidth();
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

	const renderProgressBar = () => (
		<div className='overflow-hidden rounded-full bg-grey-100 relative w-full'>
			<motion.div
				key={ `progress-bar-${selectedCategoryIdx}-${selectedSubCategoryIdx}` }
				className='h-1 rounded-full bg-blue-primary'
				style={ { width: scrollbarWidth } }
				transition={ { duration: 0.9, ease: 'easeInOut' } }
			/>
		</div>
	);

	const renderButtonArrowSlider = () => (
		<div className='flex items-center gap-[15px]'>
			<button
				className='focus:ring-0 focus:outline-none relative text-primary disabled:text-grey-200'
				onClick={ () => handleArrowScroll('prev') }
				aria-label='prev-products-scroll'
				disabled={ disabledArrowScroll === 'prev' || disabledArrowScroll === 'all' }
			>
				<ArrowNarrowLeft className='w-6 h-6 flex-shrink-0' />
			</button>
			<button
				className='focus:ring-0 focus:outline-none relative text-primary disabled:text-grey-200'
				onClick={ () => handleArrowScroll('next') }
				aria-label='next-products-scroll'
				disabled={ disabledArrowScroll === 'next' || disabledArrowScroll === 'all' }
			>
				<ArrowNarrowRight className='w-6 h-6 flex-shrink-0' />
			</button>
		</div>
	);

	const renderPlaceholderProductList = () => (
		Array.from({ length: productsPlaceholderCount }).map((_, index) => (
			<div
				key={ `new-product-${index}` }
				className='relative flex flex-col overflow-hidden bg-grey-secondary flex-none w-[287px] h-[375px] xl:h-[412px] px-3 pt-3 pb-[15px] rounded-19px'
			>
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
		))
	);

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
								{ landingData.products.subCategories.map((subCategory, index) => (
									<button
										aria-label={ subCategory.title }
										key={ `subCategory-${subCategory.id}` }
										className={ clsxm(
											'focus:ring-0 focus:outline-none hover:bg-grey-primary-light transition-colors ease-in-out duration-200 border py-1 sm:py-2 px-2 sm:px-3.5 rounded-[100px] text-xs !leading-normal font-medium',
											index === selectedSubCategoryIdx
												? 'border-primary text-primary'
												: 'border-grey-300 text-grey-300'
										) }
										onClick={ () => {
											setSelectedSubCategoryIdx(index);
											resetScrollbarWidth();
										} }
									>
										{ subCategory.title }
									</button>
								)) }
							</div>
						</div>
					</div>
				</div>
				<AnimatePresence mode='wait'>
					<motion.div
						key={ `products-DiscoverGeviti-${selectedCategoryIdx}-${selectedSubCategoryIdx}` }
						initial={ { y: 10, opacity: 0 } }
						animate={ { y: 0, opacity: 1 } }
						exit={ { y: -10, opacity: 0 } }
						transition={ { duration: 0.375, ease: 'easeInOut' } }
					>
						<div
							className={ clsxm(
								'relative wrapper-products-list ml-4 lg:ml-10 xl:ml-20',
								productsWrapperClassName
							) }
						>
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

const ProductCard: React.FC<ProductCardProps> = ({ product, selectedCategoryIdx, isPrescription }) => {
	let href = '/pricing';

	if (isPrescription) {
		href = `/solution/${selectedCategoryIdx === 'male' ? 'men' : 'women'}/${product.category.slug}/${product.slug}`;
	}

	if (product.name === 'Longeviti Panel') {
		href = '/longeviti-panel';
	}

	return (
		<div
			key={ product.id }
			className='group snap-start hover:shadow-[0px_4px_24px_rgba(0,0,0,0.15)] transition-shadow duration-200 ease-in cursor-pointer relative flex flex-col overflow-hidden bg-grey-secondary flex-none w-[287px] h-[375px] xl:h-[412px] px-3 pt-3 pb-[21px] rounded-19px'
			id={ `discover-product-card-${product.id}` }
		>
			<Link
				href={ href }
				className='flex flex-col w-full h-full'>
				<div className='relative overflow-hidden rounded-2xl bg-[#EAEAEA] w-full h-[221px]'>
					<div className='relative overflow-hidden w-full h-[221px] top-6'>
						<Image
							src={ product.image.url ?? '' }
							alt={ product.name }
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							width={ 221 }
							height={ 221 }
							loading='lazy'
							placeholder='blur'
							blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHiQrJyEyPTA+Pjs7OjM6RkpMPENBRjlKOk4/REdRV1pZW0xQTlFcYV1RWFD/2wBDAR4eHh4eHiQeHiRQOjA6UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
							className='object-contain object-center w-full h-full pointer-events-none'
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
											fill='#181A1C' />
										<path
											d='M6.58204 7.12628V8.40728H7.77054L7.64171 8.53443C7.01408 9.15109 6.15 9.06288 5.98347 9.03904C4.86646 8.87931 4.22626 8.12041 4.22626 6.95622C4.22626 5.62912 5.05106 4.83763 6.43436 4.83763C6.92767 4.83763 7.46026 4.89962 7.88287 5.17775C8.0604 5.29457 8.21593 5.45112 8.31333 5.64343C8.41781 5.84845 8.4453 6.09957 8.4453 6.32764H9.93072C9.93072 6.14009 9.92758 5.94937 9.89695 5.76422C9.81368 5.25801 9.52697 4.79154 9.16798 4.43633C8.82785 4.09939 8.40995 3.84748 7.96613 3.67821C7.47832 3.49147 6.95595 3.40326 6.43436 3.40326C4.28517 3.40326 2.83981 4.83048 2.83981 6.95622C2.83981 7.51805 2.93329 8.03299 3.11632 8.48595C3.28756 8.90872 3.54914 9.29254 3.87278 9.59213C4.18698 9.88616 4.56561 10.1142 4.99686 10.27C5.53337 10.4639 6.10994 10.5346 6.66059 10.4758C7.27173 10.4106 7.83338 10.204 8.28191 9.87662C8.36518 9.81623 8.44766 9.75106 8.52307 9.68113L8.64482 9.57147V10.502H9.93858V7.12628H6.58126H6.58204Z'
											fill='#A3E0FF'
										/>
									</svg>
									<span>
										{ typeof product.price === 'string'
											? product.price
											: `As low as $${product.price}/m*` }
									</span>
								</div>
							) }
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default DiscoverGeviti;
