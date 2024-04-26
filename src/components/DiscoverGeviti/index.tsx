'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { homeData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { Product } from '@/payload/payload-types';

import { ArrowNarrowRight } from '../Icons';

type DiscoverGevitiProps = {
	title?: string;
	description?: string;
	viewAll?: {
		text: string;
		href: string;
	};
	viewAllMobileClassName?: string;
	productsWrapperClassName?: string;
	withBg?: boolean;
	products: Product[];
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

const DiscoverGeviti: React.FC<DiscoverGevitiProps> = ({
	title = homeData.products.title,
	description = homeData.products.description,
	productsWrapperClassName = 'mt-[18px]',
	withBg = false,
	products,
}) => {
	const itemsRef = React.useRef<Array<HTMLDivElement | null>>([]);
	const wrapperItemsRef = React.useRef<HTMLDivElement>(null);
	const [selectedCategory, setSelectedCategory] = useState<number>(0);

	const productsByCategory = products.filter(product => product.category.slug === homeData.products.categories[selectedCategory].slug);

	React.useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, productsByCategory.length);
	}, [productsByCategory, selectedCategory]);

	React.useEffect(() => {
		productsByCategory.forEach((_, index) => {
			handleIsElementScrolledIntoHorizontalView(itemsRef.current[index], wrapperItemsRef.current);
		});
	}, [itemsRef.current]);

	const renderProductList = () => {
		return (
			<div
				id='discover-products-scroll'
				className={ clsxm(
					'no-scrollbar overflow-y-hidden transition-all select-none transform flex flex-nowrap overflow-x-auto scrolling-touch scroll-smooth gap-x-6 py-6',
					'snap-x snap-mandatory ml-4 lg:ml-10 xl:ml-20 last:pr-4 lg:last:pr-10 xl:last:pr-20'
				) }
				ref={ wrapperItemsRef }
			>
				<AnimatePresence mode='wait'>
					{ products.map((product, productIdx) => {
						return product.category.slug === homeData.products.categories[selectedCategory].slug
							? (
								<motion.div
									initial={ { opacity: 0, y: 10 } }
									animate={ { opacity: 1, y: 0 } }
									exit={ { opacity: 0, y: 10 } }
									transition={ { ease: 'easeInOut', duration: .375 } }
									key={ productIdx }
									className='group snap-start hover:shadow-[0px_4px_24px_rgba(0,0,0,0.15)] transition-shadow duration-200 ease-in cursor-pointer relative flex flex-col overflow-hidden bg-grey-secondary flex-none w-[287px] h-[470px] xl:h-[454px] px-3 pt-3 pb-[21px] rounded-19px'
									ref={ el => itemsRef.current[productIdx] = el }
									id={ `discover-product-card-${ product.id }` }
								>
									<Link
										href={ `/${ product?.category?.slug }/${ product.slug }` }
										key={ product.id }
										className='flex flex-col w-full h-full'
									>
										<div className='relative overflow-hidden rounded-2xl bg-[#EAEAEA] w-full h-[221px]'>
											<Image
												loading='lazy'
												src={
													product.images.length > 0
														? product.images[0].image.url ?? ''
														: ''
												}
												alt={
													product.images.length > 0
														? product.images[0].image.alt ?? ''
														: ''
												}
												className='object-cover object-center'
												sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
												fill
											/>
										</div>
										<div className='flex flex-1 flex-col space-y-1 pt-[23px] px-[13px]'>
											<h3 className='text-lg font-medium text-primary leading-[141%] -tracking-0.04em whitespace-normal'>
												{ product.name }
											</h3>
											<p className='text-sm text-grey-primary whitespace-normal mt-5px'>
												{ product.sort_description }
											</p>
											<div className='flex flex-1 flex-col justify-end text-primary pt-5'>
												<div className='flex items-center gap-9px'>
													{ /* { product.price && (
										<p className='text-xs lg:text-sm leading-[130%] lg:leading-[131%]'>
											${ product.price }
										</p>
									) } */ }
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

															<p>${ product.price }</p>
														</div>
													) }
												</div>
											</div>
										</div>
										<div className='absolute right-[11px] bottom-[21px]'>
											<div className='w-[46px] h-[46px] border border-grey-100 max-lg:border-primary group-hover:border-primary max-lg:bg-primary group-hover:bg-primary relative rounded-full transition-all duration-200 ease-in'>
												<ArrowNarrowRight className='text-gray-100 max-lg:text-blue-primary group-hover:text-blue-primary w-6 h-6 absolute-center flex-shrink-0 -rotate-45 transition-all duration-200 ease-in' />
											</div>
										</div>
									</Link>
								</motion.div>
							) : undefined;
					}) }
				</AnimatePresence>
			</div>
		);
	};

	const renderButtonSwitchProducts = () => {
		const categories = homeData.products.categories;

		return (
			<div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-white'>
				<div className='relative flex items-center h-full'>
					{ categories.map((category, categoryIdx) => (
						<button
							key={ category.title }
							aria-label={ category.title }
							onClick={ () => setSelectedCategory(categoryIdx) }
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
						selectedCategory === 0
							? 'left-1.5 w-[calc(40%-6px)] px-3.5'
							: 'left-[40%] w-[calc(60%-6px)] px-6'
					) }
				>
					{ categories[selectedCategory].title }
				</motion.span>
			</div>
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
					<div className='flex max-lg:gap-y-[42px] max-lg:flex-col lg:items-center lg:justify-between'>
						<div>
							<h2 className='text-primary text-2xl md:text-3xl lg:text-4xl leading-[179%] sm:leading-[128%] lg:leading-[119%] -tracking-0.04em'>
								{ title }
							</h2>

							<p className='text-grey-primary mt-5px text-xs sm:text-sm !leading-5'>
								{ description }
							</p>
						</div>
						<div>{ renderButtonSwitchProducts() }</div>
					</div>
				</div>

				<div className={ clsxm('relative wrapper-products-list', productsWrapperClassName) }>
					{ renderProductList() }
				</div>
			</div>
		</div>
	);
};

export default DiscoverGeviti;
