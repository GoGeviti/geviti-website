'use client';

import React, {
	CSSProperties,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { marketingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { SlugOpt } from '@/interfaces/marketing';

import { ArrowNarrowLeft, ArrowNarrowRight } from '../Icons';
import ShiftSection from '../ShiftSection';

const topTierData = marketingData.topTier;

const CARD_PRODUCT_WIDTH = 338.826;
const SPACING_BETWEEN_CARD = 14;

type TopTierProps = {
  slug: string;
};

const TopTier: React.FC<TopTierProps> = ({ slug = 'men-weight-loss' }) => {
	const [wrapperItems, setWrapperItems] = useState<HTMLDivElement | null>(null);
	const [activeCardIdx, setActiveCardIdx] = useState<number>(0);
	const [containerOffsetLeft, setContainerOffsetLeft] = useState<number>(16);
	const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
	const [prevSelectedTabIdx, setPrevSelectedTabIdx] =
    useState<number>(selectedTabIdx);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const [disabledArrowScroll, setDisabledArrowScroll] =
    useState<string>('prev');

	const handleProductListScroll = () => {
		if (wrapperItems) {
			const scroll = wrapperItems.scrollLeft;
			const total = wrapperItems.scrollWidth - wrapperItems.clientWidth;
			const isNotOverflowScroll = scroll === 0 && total === 0;

			const progress = isNotOverflowScroll ? 100 : (scroll / total) * 100;

			if (isNotOverflowScroll) setDisabledArrowScroll('all');
			else if (progress === 0) setDisabledArrowScroll('prev');
			else if (progress >= 100) setDisabledArrowScroll('next');
			else setDisabledArrowScroll('');
		}
	};

	const wrapperItemsRef = useCallback(
		(node: HTMLDivElement) => {
			setWrapperItems(node);
		},
		[selectedTabIdx]
	);

	useEffect(() => {
		handleProductListScroll();
		setActiveCardIdx(0);
	}, [wrapperItems, isMounted]);

	useEffect(() => {
		const handleResize = () => {
			const containerCenterEl = document.getElementById('container-center');
			if (containerCenterEl) {
				setContainerOffsetLeft(containerCenterEl.offsetLeft);
				setTimeout(() => {
					setIsMounted(true);
				}, 250);
			}

			setIsMobile(window.innerWidth < screens.sm);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const container: any = wrapperItems;
		// Timer, used to detect whether horizontal scrolling is over
		let timer: NodeJS.Timeout | null = null;
		// Scrolling event start
		if (container) {
			container.addEventListener('scroll', function() {
				if (timer) {
					clearTimeout(timer);
				}
				// Renew timer
				timer = setTimeout(function() {
					// No scrolling event triggered. It is considered that
					// scrolling has stopped do what you want to do, such
					// as callback processing
					[].slice
						.call(container.children)
						.forEach((ele: HTMLElement, index) => {
							if (
								Math.abs(
									ele.getBoundingClientRect().left -
                    container.getBoundingClientRect().left
								) < 37.32 &&
                isMobile
							) {
								// The 'ele' element at this moment is the element currently positioned.
								setActiveCardIdx(index);
							}
						});
				}, 100);
			});
		}
	}, [wrapperItems, isMobile]);

	const tabs = topTierData.tabs;
	const productsData = topTierData.list[slug as SlugOpt] ?? [];

	const productsByCategory = useMemo(() => {
		return productsData.filter(product => {
			const filteredByCategory =
        product.category.id === tabs[selectedTabIdx]?.id;
			return filteredByCategory;
		});
	}, [selectedTabIdx]);

	const handleArrowScroll = (dir: 'prev' | 'next') => {
		if (wrapperItems) {
			if (dir === 'next') {
				wrapperItems.scrollLeft += CARD_PRODUCT_WIDTH + SPACING_BETWEEN_CARD;
			} else {
				wrapperItems.scrollLeft -= CARD_PRODUCT_WIDTH + SPACING_BETWEEN_CARD;
			}
		}
	};

	const renderTabs = () => {
		return (
			<div className='w-full flex flex-nowrap whitespace-nowrap gap-6 relative overflow-x-auto'>
				{ topTierData.tabs.map((tab, tabIdx) => {
					return (
						<button
							aria-label={ tab.title }
							key={ `tab-${tab.id}` }
							className={ clsxm(
								'focus:ring-0 focus:outline-none hover:bg-grey-primary-light transition-colors ease-in-out duration-200 border py-1 xxs2:py-2 px-2 xxs2:px-3 sm:px-3.5 rounded-[100px] text-xs !leading-normal font-medium',
								tabIdx === selectedTabIdx
									? 'border-black text-primary'
									: 'border-grey-300 text-grey-300'
							) }
							onClick={ () => {
								setPrevSelectedTabIdx(selectedTabIdx);
								setSelectedTabIdx(tabIdx);
							} }
						>
							{ tab.title }
						</button>
					);
				}) }
			</div>
		);
	};

	const renderArrowButton = () => {
		const buttonClassName =
      'rounded-full w-[34px] h-[34px] border-[0.7px] hover:bg-grey-primary-light flex items-center justify-center text-primary border-primary disabled:text-grey-primary disabled:border-grey-primary';
		const defaultDisabled = disabledArrowScroll === 'all';

		return (
			<div className='flex items-center gap-3.5 max-sm:hidden'>
				<button
					className={ buttonClassName }
					onClick={ () => handleArrowScroll('prev') }
					disabled={ disabledArrowScroll === 'prev' || defaultDisabled }
				>
					<ArrowNarrowLeft className='flex-shrink-0' />
				</button>
				<button
					className={ buttonClassName }
					onClick={ () => handleArrowScroll('next') }
					disabled={ disabledArrowScroll === 'next' || defaultDisabled }
				>
					<ArrowNarrowRight className='flex-shrink-0' />
				</button>
			</div>
		);
	};

	const renderProductList = () => {
		return (
			<div
				id={ `TopTier-products-${selectedTabIdx}` }
				ref={ wrapperItemsRef }
				style={
          {
          	'--card-product-width': `${CARD_PRODUCT_WIDTH}px`,
          	'--spacing-between-card-product': `${SPACING_BETWEEN_CARD}px`,
          } as CSSProperties
				}
				className={ clsxm(
					'no-scrollbar overflow-y-hidden transition-all select-none transform flex flex-nowrap overflow-x-auto scrolling-touch scroll-smooth [column-gap:var(--spacing-between-card-product)]',
					'snap-x snap-mandatory py-0.5 last:pr-4 lg:last:pr-10 xl:last:[padding-right:var(--container-offset-left)]'
				) }
				onScroll={ handleProductListScroll }
			>
				{ productsByCategory.map((item, itemIdx) => (
					<motion.div
						key={ item.id }
						transition={ { duration: 0.2, ease: 'easeInOut' } }
						variants={ {
							default: { background: '#fcfcfc' },
							active: { background: '#6EC2FF' },
						} }
						initial='default'
						{ ...(isMobile
							? {
								animate: activeCardIdx === itemIdx ? 'active' : 'default',
							}
							: { whileHover: 'active' }) }
						className={ clsxm(
							activeCardIdx !== itemIdx
								? 'max-lg:border-grey-100'
								: 'max-lg:border-transparent',
							'max-lg:border rounded-[14px] h-[468px] lg:h-[496px] w-[calc(100vw-53.32px)] sm:[width:var(--card-product-width)] flex flex-col flex-none snap-start overflow-hidden',
							'px-[13.6px] lg:px-[14.42px] pt-[13.6px] lg:pt-[14.42px] pb-[21.75px] lg:pb-[23.19px]'
						) }
						id={ `TopTier-product-item-${item.id}` }
					>
						<div className='flex flex-1 flex-col space-y-2 text-primary'>
							<div>
								<h4 className='text-lg'>{ item.title }</h4>
							</div>
							<p className='text-xs !leading-5 mt-1.5 max-w-[252px]'>
								{ item.description }
							</p>
							<div className='relative overflow-hidden w-full h-full'>
								<Image
									src={ item.image }
									alt={ item.title }
									fill
									className='object-contain'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
									quality={ 100 }
								/>
							</div>
							<div className='flex flex-1 flex-col justify-end px-4 w-full'>
								<Link
									href={ topTierData.ctaList.href }
									className='text-xs !leading-5 focus:ring-0 focus:outline-none w-full bg-white text-primary py-[7.73px] px-5 flex items-center justify-center rounded-[128px]'
								>
									{ topTierData.ctaList.text }
								</Link>
							</div>
						</div>
					</motion.div>
				)) }
			</div>
		);
	};

	return (
		<div
			style={
        {
        	'--container-offset-left': `${containerOffsetLeft}px`,
        } as CSSProperties
			}
			className='w-full pb-[62px] lg:pb-[222px]'
		>
			<div className='flex max-lg:flex-col gap-y-6 lg:grid lg:grid-cols-12 w-full container-center'>
				<div
					id='container-center'
					className='lg:col-span-5'>
					<div className='flex flex-col text-primary text-2xl lg:text-4xl !leading-normal lg:font-medium -tracking-0.04em'>
						<ShiftSection
							id={ `title-${tabs[selectedTabIdx].id}` }
							prevElement={ tabs[prevSelectedTabIdx].pageTitle }
							prevElementClassName='' // to remove default prevElementClassName
							wrapperClassName='min-h-[36px] lg:min-h-[54px]'
							animationProps={ {
								transition: {
									duration: 0.75,
									ease: 'easeIn',
								},
							} }
						>
							{ tabs[selectedTabIdx].pageTitle }
						</ShiftSection>
						<span dangerouslySetInnerHTML={ { __html: topTierData.title } } />
					</div>
				</div>
				<div className='lg:col-span-7 lg:max-w-[519px] lg:ml-auto'>
					<div className='space-y-18px'>
						<p className='text-grey-primary text-sm font-medium !leading-6'>
							{ topTierData.description }
						</p>

						<div className='max-sm:w-full flex'>
							<Link
								href={ topTierData.cta.href }
								className='btn btn-primary flex items-center justify-center max-sm:w-full py-3 px-5 sm:px-16 text-sm font-medium !leading-6'
							>
								{ topTierData.cta.text }
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full relative mt-[42px] lg:mt-[124px]'>
				<div className='w-full flex items-center lg:justify-between container-center mb-10'>
					{ renderTabs() }
					{ renderArrowButton() }
				</div>

				<AnimatePresence mode='wait'>
					<motion.div
						key={ `TopTier-marketing-${selectedTabIdx}` }
						initial={ { y: 10, opacity: 0 } }
						animate={ { y: 0, opacity: 1 } }
						exit={ { y: -10, opacity: 0 } }
						transition={ { duration: 0.375, ease: 'easeInOut' } }
					>
						<div className='relative ml-4 lg:ml-10 xl:[margin-left:var(--container-offset-left)]'>
							{ renderProductList() }
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default TopTier;
