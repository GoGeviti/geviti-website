'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { homeData, productsData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import CustomLink from '../CustomLink';
import { ArrowNarrowLeft, ArrowNarrowRight, ChevronRight } from '../Icons';

const ProductsSection: React.FC = () => {
	const router = useRouter();
	const windowDimensions = useWindowDimensions();

	const [disableArrowLeft, setDisableArrowLeft] = useState<boolean>(true);
	const [disableArrowRight, setDisableArrowRight] = useState<boolean>(false);

	const handleScrollProducts = useCallback(() => {
		const el = document.getElementById('discover-products-scroll');

		if (el) {
			const widthContainer = el?.clientWidth || 0;
			const scrollWidth = el?.scrollWidth || 0;
			const scrollLeft = el?.scrollLeft || 0;

			if (scrollLeft === 0) {
				setDisableArrowLeft(true);
			} else {
				setDisableArrowLeft(false);
			}

			if (Math.abs(scrollLeft) < (scrollWidth - widthContainer)) {
				setDisableArrowRight(false);
			} else {
				setDisableArrowRight(true);
			}
		}
	}, []);

	const moveCardProduct = (direction: 'left' | 'right') => {
		const el = document.getElementById('discover-products-scroll');
		const widthCard = document.getElementById('discover-product-card')?.clientWidth || 248;

		if (el) {
			if (direction === 'left') {
				el.scrollLeft -= (widthCard + 18);
			} else {
				el.scrollLeft += (widthCard + 18);
			}
		}
	};

	const renderArrowNarrow = (direction: 'left' | 'right') => {
		const ArrowNarrow = direction === 'left' ? ArrowNarrowLeft : ArrowNarrowRight;
		const disabled = direction === 'left' ? disableArrowLeft : disableArrowRight;

		return (
			<div onClick={ () => moveCardProduct(direction) }>
				<ArrowNarrow className={ clsxm(
					'stroke-primary',
					disabled ? 'opacity-25' : 'opacity-100'
				) }
				/>
			</div>
		);
	};

	const renderProductList = () => {
		const isMobile = windowDimensions.width < screens.lg;
		const productList = isMobile ? productsData : productsData?.slice(0, 4);

		return (
			<div
				id='discover-products-scroll'
				onScroll={ handleScrollProducts }
				className='no-scrollbar overflow-y-hidden transition-all select-none transform flex flex-nowrap overflow-x-auto scrolling-touch scroll-smooth gap-x-18px lg:gap-x-5 py-1 -mr-4 lg:-mr-0 last:pr-[17px] lg:last:pr-0 lg:grid lg:overflow-hidden lg:gap-y-4 lg:grid-cols-4'
			>
				{ productList.map((product, productIdx) => (
					<div
						key={ product.id }
						id='discover-product-card'
						data-aos='zoom-in-down'
						data-aos-delay={ `${ productIdx * 100 }` }
						className='group cursor-pointer relative flex flex-col overflow-hidden bg-grey-secondary max-lg:flex-none w-[248px] lg:w-full'
						onClick={ () => router.push(`/products/${ product.id }`) }
					>
						<div className='relative overflow-hidden bg-[#E5E5E5] group-hover:opacity-75 w-full h-[225px] lg:h-[260px]'>
							{ product.imageSrc && (
								<Image
									src={ product.imageSrc }
									alt={ product.name ?? '' }
									className='object-cover object-center'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									fill
								/>
							) }
						</div>
						<div className='flex flex-1 flex-col space-y-1 py-5 px-[22px] lg:px-25px lg:py-[23px]'>
							<h3 className='font-Poppins text-sm lg:text-base font-medium text-primary leading-[158%] lg:leading-[156%] -tracking-0.04em whitespace-normal'>
								{ product.name }
							</h3>
							<p className='font-BRSonoma leading-[143%] lg:leading-[144%] text-xs lg:text-sm text-grey-primary whitespace-normal'>{ product.description }</p>
							<div className='flex flex-1 flex-col justify-end font-BRSonoma text-primary pt-[17px]'>
								<div className='flex items-center gap-9px'>
									{ product.value && (
										<p className='text-xs lg:text-sm leading-[130%] lg:leading-[131%]'>{ product.value }</p>
									) }
									{ product.price !== undefined && (
										<div className='text-xs leading-[158%] bg-blue-1 rounded-full py-1 px-1.5 flex items-center gap-1 flex-shrink-0'>
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
													fill='#A3E0FF' />
											</svg>

											<p>${ product.price }</p>
										</div>
									) }
								</div>
							</div>
						</div>
					</div>
				)) }
			</div>
		);
	};

	const renderButtonViewAll = () => {
		return (
			<CustomLink
				href={ homeData.products.viewAll.href }
				className='btn btn-primary flex items-center gap-7px sm:gap-2 !translate-y-0 group'>
				<span className='text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-Poppins'>
					{ homeData.products.viewAll.text }
				</span>

				<ChevronRight className='stroke-grey-secondary w-4 h-4 sm:w-18px sm:h-18px group-hover:translate-x-1 transform transition-all duration-100' />
			</CustomLink>
		);
	};

	return (
		<div className='container-center w-full overflow-hidden'>
			<div className='flex items-center justify-between'>
				<div data-aos='zoom-in-right'>
					<h2 className='text-primary font-Poppins text-[21px] md:text-3xl lg:text-4xl leading-[128%] lg:leading-[119%] -tracking-0.04em'>
						{ homeData.products.title }
					</h2>

					<p className='text-grey-primary mt-5px text-xs sm:text-sm leading-5 font-BRSonoma'>
						{ homeData.products.description }
					</p>
				</div>

				<div
					data-aos='zoom-in-left'
					className='lg:hidden flex items-center gap-6'
				>
					{ renderArrowNarrow('left') }
					{ renderArrowNarrow('right') }
				</div>

				<div
					data-aos='zoom-in-left'
					className='max-lg:hidden'
				>
					{ renderButtonViewAll() }
				</div>
			</div>

			<div className='relative mt-9'>
				{ renderProductList() }
			</div>

			<div className='mt-10 lg:hidden flex justify-center'>
				{ renderButtonViewAll() }
			</div>
		</div>
	);
};

export default ProductsSection;
