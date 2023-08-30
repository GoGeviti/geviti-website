'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';

import { HomeComponent, Navbar, ProductsComponent } from '@/components';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import { AlertSquareIcon, ChevronDown } from '@/components/Icons';
import { productsData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

type ProductDetailPageProps = { params: { id: string; }; };

const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ params }) => {
	const router = useRouter();

	const id = params.id;
	const product = productsData.find(e => e.id.toString() === id.toString());

	if (!product) {
		notFound();
	}

	const pages = [
		{ name: 'Products', href: '/products', current: false },
		{ name: product?.name, href: `/products/${ product?.id }`, current: true },
	];

	const renderBreadcrumb = () => {
		return (
			<ol
				role='list'
				className='flex items-center gap-x-3.5 sm:gap-x-4'>
				{ pages.map((page, pageIdx) => (
					<li key={ pageIdx }>
						<div className='flex items-center'>
							{ pageIdx > 0 && pageIdx < pages.length && (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									className='w-[17px] h-[17px] sm:w-5 sm:h-5'
								>
									<path
										d='M5.83333 18.3333L14.1667 1.66663'
										stroke='#919B9F'
										strokeLinecap='round'
										strokeLinejoin='round' />
								</svg>
							) }
							<Link
								href={ page.href }
								className={ clsxm(
									'text-xs sm:text-sm font-Poppins font-medium sm:leading-5',
									pageIdx > 0 ? 'ml-3.5 sm:ml-4' : '',
									page.current ? 'text-primary' : 'text-grey-primary'
								) }
								aria-current={ page.current ? 'page' : undefined }
							>
								{ page.name }
							</Link>
						</div>
					</li>
				)) }
			</ol>
		);
	};

	const renderProductDetailAccordion = () => {
		if (product?.details && product?.details?.length) {
			return (
				<Accordion
					type='multiple'
					className='w-full border-t border-[#B8C6CC]'
				>
					{ product?.details?.map((detail, detailIdx) => (
						<AccordionItem
							key={ detailIdx }
							value={ `item-${ detailIdx + 1 }` }
							className='py-[13px] sm:py-4 border-[#B8C6CC]'
						>
							<AccordionTrigger className='flex items-start justify-between w-full'>
								<p className='text-xs sm:text-sm -tracking-0.04em leading-[27px] sm:leading-8 font-Poppins text-primary'>{ detail.question }</p>
								<ChevronDown className='w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180' />
							</AccordionTrigger>

							<AccordionContent className='pt-11px sm:pt-[13px] text-grey-primary font-BRSonoma text-[10px] sm:text-xs leading-[17px] sm:leading-5'>
								{ Array.isArray(detail.answer) && detail.answer?.length
									? (
										<ul className='flex flex-col gap-y-1'>
											{ detail.answer?.map((answerItem: string, answerItemIdx: number) => (
												<li key={ answerItemIdx }>{ answerItem }</li>
											)) }
										</ul>
									) : <span>{ detail.answer && <p dangerouslySetInnerHTML={ { __html: detail.answer } } /> }</span> }
							</AccordionContent>
						</AccordionItem>
					)) }
				</Accordion>
			);
		}

		return null;
	};

	const renderButtonPurchase = () => {
		return (
			<button
				className='btn btn-primary w-full text-xs sm:text-sm font-medium font-Poppins leading-[21px] sm:leading-[26px] py-2.5 sm:py-[13px]'
				onClick={ () => router.push(`/orders?selectedProduct=${ id }`) }
			>
				Purchase
			</button>
		);
	};

	return (
		<>
			<div className='relative overflow-hidden bg-[#CFD8DB]'>
				<Navbar theme='light' />
				<div className='pb-[42px] lg:pb-[116px] pt-24 lg:pt-[172px] container-center flex flex-col max-lg:items-center'>
					{ renderBreadcrumb() }

					<div className='flex max-lg:flex-col lg:grid lg:grid-cols-2 gap-10 pt-[27px] lg:pt-12 w-full'>
						<div className='w-full max-lg:pb-1'>
							<ProductsComponent.SliderProducts images={ product?.images ?? [] } />
						</div>
						<div className='flex flex-col w-full lg:max-w-md lg:mx-auto'>
							{ product?.category &&
								<p className='uppercase text-grey-primary font-BRSonoma font-semibold text-[10px] sm:text-sm leading-[21px] sm:leading-6 tracking-0.11em'>{ product?.category }</p> }
							<div className='flex flex-col gap-y-[26px] lg:gap-y-[42px] mt-[7px] lg:mt-[17px]'>
								<div className='flex items-center justify-between text-primary'>
									<h1 className='text-3xl lg:text-4xl -tracking-0.04em font-Poppins leading-[124%] lg:leading-[121%]'>{ product?.name }</h1>
									<p className='text-xl lg:text-2xl leading-[77%] lg:leading-[75%] font-BRSonoma'>${ product?.price }</p>
								</div>

								<div className='flex flex-col gap-1.5 sm:gap-2.5'>
									{ product?.bloodTest === 'yes' && (
										<div className='flex gap-5px text-primary'>
											<AlertSquareIcon className='w-15px h-15px sm:w-18px sm:h-18px flex-shrink-0' />

											<p className='text-[10px] sm:text-xs font-BRSonoma leading-5 sm:leading-[18px] font-medium'>Products available based on blood test results</p>
										</div>
									) }

									{ product?.description && (
										<p className='text-[10px] sm:text-xs font-BRSonoma text-grey-primary leading-[17px] sm:leading-5'>{ product?.description }</p>
									) }
								</div>

								<div className='flex flex-col-reverse lg:flex-col gap-y-[26px] lg:gap-y-[42px]'>
									{ renderProductDetailAccordion() }

									{ renderButtonPurchase() }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='pt-9 lg:pt-[121px] pb-[32px] lg:pb-[51px]'>
				<HomeComponent.Products />
			</div>
		</>
	);
};

export default ProductDetailPage;
