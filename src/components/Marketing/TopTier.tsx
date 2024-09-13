'use client';

import React, {
	CSSProperties,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { debounce } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';

import { marketingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useCarousel } from '@/hooks/embla/use-carousel';
import { Slug } from '@/interfaces/marketing';

import ShiftSection from '../ShiftSection';

import ArrowButtons from './ArrowButtons';
import SectionHeading from './SectionHeading';

const topTierData = marketingData.topTier;

const CARD_PRODUCT_WIDTH = 338.826;
const SPACING_BETWEEN_CARD = 14;

type SlugPick =
  | Slug.MEN_HORMONE_THERAPY
  | Slug.MEN_WEIGHT_LOSS
  | Slug.WOMEN_WEIGHT_LOSS
  | Slug.MENOPAUSE;
type TopTierProps = {
  slug: SlugPick;
};

type ProductItem = {
  id: number;
  category: {
    id: number;
  };
  title: string;
  description: string;
  image: string;
};

const TopTier: React.FC<TopTierProps> = ({ slug = 'men-weight-loss' }) => {
	const carousel = useCarousel({
		loop: false,
		duration: 25,
		align: 'start',
	});
	const { mainRef: emblaRef } = carousel;

	const [wrapperItems, setWrapperItems] = useState<HTMLDivElement | null>(null);
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
		// setActiveCardIdx(0);
	}, [wrapperItems, isMounted]);

	useEffect(() => {
		const getContainerOffsetLeft = () => {
			const containerCenterEl = document.getElementById('container-center');
			if (containerCenterEl) {
				setContainerOffsetLeft(containerCenterEl.offsetLeft);
				setTimeout(() => {
					setIsMounted(true);
				}, 250);
			}

			setIsMobile(window.innerWidth < screens.sm);
		};

		getContainerOffsetLeft();

		const handleResize = debounce(getContainerOffsetLeft, 800);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// useEffect(() => {
	//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
	//   const container: any = wrapperItems;
	//   // Timer, used to detect whether horizontal scrolling is over
	//   let timer: NodeJS.Timeout | null = null;
	//   // Scrolling event start
	//   if (container) {
	//     container.addEventListener('scroll', function () {
	//       if (timer) {
	//         clearTimeout(timer);
	//       }
	//       // Renew timer
	//       timer = setTimeout(function () {
	//         // No scrolling event triggered. It is considered that
	//         // scrolling has stopped do what you want to do, such
	//         // as callback processing
	//         [].slice
	//           .call(container.children)
	//           .forEach((ele: HTMLElement, index) => {
	//             if (
	//               Math.abs(
	//                 ele.getBoundingClientRect().left -
	//                   container.getBoundingClientRect().left
	//               ) < 37.32 &&
	//               isMobile
	//             ) {
	//               // The 'ele' element at this moment is the element currently positioned.
	//               setActiveCardIdx(index);
	//             }
	//           });
	//       }, 100);
	//     });
	//   }
	// }, [wrapperItems, isMobile]);

	const tabs = topTierData.tabs[slug as SlugPick];
	const productsData = topTierData.list[slug as SlugPick] ?? [];

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
				{ tabs.map((tab, tabIdx) => {
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
		const defaultDisabled = disabledArrowScroll === 'all';

		return (
			<ArrowButtons
				disabledPrev={ disabledArrowScroll === 'prev' || defaultDisabled }
				disabledNext={ disabledArrowScroll === 'next' || defaultDisabled }
				onClickPrev={ () => handleArrowScroll('prev') }
				onClickNext={ () => handleArrowScroll('next') }
			/>
		);
	};

	const renderProductListMobile = () => {
		return (
			<div className='w-full relative'>
				<div
					className='overflow-hidden'
					ref={ emblaRef }>
					<div className='flex touch-pan-y touch-pinch-zoom scrolling-touch scroll-smooth [margin-left:var(--spacing-between-card-product)*-1] first:pl-0.5 last:mr-4'>
						<ProductList
							products={ productsByCategory }
							activeCardIdx={ carousel.dots.selectedIndex }
						/>
					</div>
				</div>
			</div>
		);
	};

	const renderProductListDesktop = () => {
		return (
			<div className='relative ml-4 lg:ml-10 xl:[margin-left:var(--container-offset-left)]'>
				<div
					id={ `TopTier-products-${selectedTabIdx}` }
					ref={ wrapperItemsRef }
					className={ clsxm(
						'no-scrollbar overflow-y-hidden transition-all select-none transform flex flex-nowrap overflow-x-auto scrolling-touch scroll-smooth [margin-left:calc(var(--spacing-between-card-product)*-1)]',
						'snap-x snap-mandatory py-0.5 last:pr-4 lg:last:pr-10 xl:last:[padding-right:var(--container-offset-left)]'
					) }
					onScroll={ handleProductListScroll }
				>
					<ProductList
						products={ productsByCategory }
						animationProps={ {
							variants: {
								default: { background: '#fcfcfc' },
								active: { background: '#6EC2FF' },
							},
							initial: 'default',
							whileHover: 'active',
						} }
					/>
				</div>
			</div>
		);
	};

	const renderProductList = () => {
		if (isMobile) return renderProductListMobile();
		return renderProductListDesktop();
	};

	return (
		<div
			style={
        {
        	'--container-offset-left': `${containerOffsetLeft}px`,
        	'--card-product-width': `${CARD_PRODUCT_WIDTH}px`,
        	'--spacing-between-card-product': `${SPACING_BETWEEN_CARD}px`,
        } as CSSProperties
			}
			className='w-full pb-[62px] lg:pb-[222px]'
		>
			<div className='w-full container-center'>
				<div
					id='container-center'
					className='w-full'>
					<SectionHeading
						title={
							slug === Slug.MENOPAUSE ? (
								<span className='flex flex-col'>
									{ tabs[selectedTabIdx].pageTitle }
									<span className='text-grey-primary'>
										{ topTierData.secondaryTitle[slug] }
									</span>
								</span>
							) : (
								<span className='flex flex-col'>
									<ShiftSection
										id={ `title-${tabs[selectedTabIdx].id}` }
										prevElement={ tabs[prevSelectedTabIdx].pageTitle }
										prevElementClassName='' // to remove default prevElementClassName
										// wrapperClassName='min-h-[36px] lg:min-h-[54px]'
										animationProps={ {
											transition: {
												duration: 0.75,
												ease: 'easeIn',
											},
										} }
									>
										{ tabs[selectedTabIdx].pageTitle }
									</ShiftSection>
									<span className='text-grey-primary'>
										{ topTierData.secondaryTitle[slug as SlugPick] }
									</span>
								</span>
							)
						}
						description={
							tabs[selectedTabIdx]?.description ||
              topTierData.description[slug as SlugPick]
						}
						cta={ topTierData.cta }
					/>
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
						{ renderProductList() }
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default TopTier;

type ProductListProps = {
  products: ProductItem[];
  animationProps?: MotionProps;
  activeCardIdx?: number;
};

const ProductList: React.FC<ProductListProps> = ({
	products,
	animationProps,
	activeCardIdx = -1,
}) => {
	return (
		<>
			{ products.map((item, itemIdx) => (
				<div
					key={ item.id }
					className='min-w-0 [padding-left:var(--spacing-between-card-product)] flex flex-none sm:snap-start sm:overflow-hidden'
					style={ {
						transform: 'translate3d(0, 0, 0)',
					} }
				>
					<motion.div
						transition={ { duration: 0.2, ease: 'easeInOut' } }
						{ ...animationProps }
						className={ clsxm(
							activeCardIdx !== itemIdx
								? 'max-sm:border-grey-100 max-sm:bg-grey-primary-light'
								: 'max-sm:border-black/0 max-sm:bg-blue-primary',
							'max-sm:border rounded-[14px] h-[468px] lg:h-[496px] w-[calc(100vw-53.32px)] sm:[width:var(--card-product-width)] flex flex-col flex-none',
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
				</div>
			)) }
		</>
	);
};
