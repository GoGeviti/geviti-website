'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Navbar } from '@/components';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import {
	AlertSquareIcon, ArrowNarrowDown, ChevronDown, SearchIcon, SettingsIcon
} from '@/components/Icons';
import { Sheet, SheetContent } from '@/components/Sheet';
import { productListData, productsData } from '@/constant/data';
import { IProducts } from '@/interfaces';

/* eslint-disable @typescript-eslint/no-explicit-any */

type FilterValue = {
	id: string;
	name: string;
	options: {
		value: string;
		label: string;
		checked: boolean;
	}[];
};

type GroupedProduct = { category: string, products: IProducts.ProductItem[]; };

const ProductsPage: NextPage = () => {
	const router = useRouter();

	const [filterValues, setFilterValues] = useState<FilterValue[]>(productListData.filters);
	const [tempFilterValues, setTempFilterValues] = useState<FilterValue[]>(productListData.filters);
	const [query, setQuery] = useState('');
	const [openSheet, setOpenSheet] = useState<boolean>(false);

	const handleUpdateFilterValues = (prevFilters: FilterValue[], e: React.ChangeEvent<HTMLInputElement>, filterId: string) => {
		return prevFilters.map(filterVal => {
			if (filterVal.id === filterId) {
				return {
					...filterVal,
					options: filterVal.options?.map(prevOption => {
						if (prevOption.value === e.target.id) {
							return {
								...prevOption,
								checked: e.target.checked
							};
						}

						return prevOption;
					})
				};
			}

			return filterVal;
		});
	};

	const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, filterId: string) => {
		if (!openSheet) {
			setFilterValues(prevFilters => handleUpdateFilterValues(prevFilters, e, filterId));

			return;
		}

		setTempFilterValues(prevTempFilters => handleUpdateFilterValues(prevTempFilters, e, filterId));
	};

	const groupByCategory = Object.entries(
		productsData.reduce((acc: { [key: string]: IProducts.ProductItem[]; }, curr) => {
			const category = curr.category;
			// Group initialization
			if (!acc[category]) {
				acc[category] = [];
			}

			acc[category].push(curr);

			return acc;
		}, {})
	).map(([category, products]) => ({ category, products }));

	const filterProductsByCategory = () => {
		let filterByCategories: GroupedProduct[] = groupByCategory;
		filterValues.forEach(filter => {
			const options = filter.options?.reduce((filtered: string[], option) => {
				if (option.checked) {
					filtered.push(option.value);
				}
				return filtered;
			}, []);

			if (filter.id === 'category' && options?.length) {
				filterByCategories = filterByCategories.filter(item => {
					return options?.some(category => category === item.category);
				});
			} else {
				filterByCategories = filterByCategories.map((item: any) => {
					if (options.length) {
						return {
							...item,
							products: item.products.filter((product: any) => !!options.find(opt => {
								const productVal = product[filter.id];
								if (Array.isArray(productVal)) {
									return productVal.includes(opt);
								}
								return product[filter.id] === opt;
							}))
						};
					}
					return item;
				});
			}
		});

		return query === ''
			? filterByCategories
			: filterByCategories.map(item => ({
				...item,
				products: item.products?.filter(product =>
					product.name.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))

				)
			}));
	};

	const renderFilters = () => {
		return (
			<Accordion
				type='multiple'
				className='w-full'
			>
				{ productListData.filters.map((filter, filterIdx) => (
					<AccordionItem
						key={ filter.id }
						value={ `item-${ filterIdx + 1 }` }
						className='py-3 border-blue-3'
					>
						<AccordionTrigger className='flex items-center justify-between w-full'>
							<p className='text-sm -tracking-0.04em leading-8 font-Poppins text-primary'>{ filter.name }</p>
							<ChevronDown className='w-3.5 h-3.5 text-primary ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180' />
						</AccordionTrigger>

						<AccordionContent className='pt-[13px]'>
							<div className='space-y-3'>
								{ filter.options.map((option, optionIdx) => {
									const data = openSheet ? tempFilterValues : filterValues;
									const isChecked = data.find(item => item.id === filter.id)?.options?.find(opt => opt.value === option.value)?.checked;

									return (
										<div
											key={ option.value }
											className='flex items-center pl-px'>
											<input
												id={ option.value }
												name={ `${ filter.id }` }
												defaultValue={ option.value }
												type='checkbox'
												checked={ isChecked }
												onChange={ (e: React.ChangeEvent<HTMLInputElement>) => onChangeCheckbox(e, filter.id) }
												className='h-4 w-4 appearance-none bg-transparent rounded border-blue-3 text-[#7ED4FF] focus:ring-0 focus:outline-none focus:ring-offset-0'
											/>
											<label
												htmlFor={ `filter-${ filter.id }-${ optionIdx }` }
												className='ml-9px text-xs text-primary font-Poppins leading-[125%] -tracking-0.04em'
											>
												{ option.label }
											</label>
										</div>
									);
								}) }
							</div>
						</AccordionContent>
					</AccordionItem>
				)) }
			</Accordion>
		);
	};

	const renderListProductsByCategory = () => {
		const productsByCategory = filterProductsByCategory();

		return (
			<div className='flex flex-col gap-y-[89px] lg:gap-y-36'>
				{ productsByCategory.map(item => (
					<div
						key={ item.category }
						className='text-center lg:text-left'>
						<h3 className='font-Poppins text-primary text-[21px] md:text-3xl lg:text-4xl -tracking-0.04em leading-[121%]'>{ item.category }</h3>

						<div className='mt-5px sm:mt-9px flex items-center max-lg:flex-col-reverse lg:items-end lg:justify-between gap-3'>
							<div className='sm:max-w-xl lg:max-w-md'>
								<p className='text-grey-primary font-BRSonoma text-xs leading-5 sm:leading-[18px]'>
									{ (productListData.categoriesDescription as { [key: string]: string; })[item.category] }
								</p>
							</div>

							<div className='flex lg:flex-col gap-5px text-primary lg:max-w-[172px]'>
								<AlertSquareIcon className='w-15px h-15px sm:w-18px sm:h-18px flex-shrink-0' />

								<p className='text-[10px] sm:text-xs font-BRSonoma leading-5 sm:leading-[18px] font-medium'>Products available based on blood test results</p>
							</div>
						</div>

						<div className='mt-[35px] sm:mt-10 grid grid-cols-2 md:grid-cols-3 gap-5'>
							{ item.products.map(product => (
								<div
									key={ product.id }
									className='group cursor-pointer relative flex flex-col overflow-hidden bg-grey-secondary w-full text-left'
									onClick={ () => router.push(`/products/${ product.id }`) }
								>
									<div className='relative overflow-hidden bg-[#E7E7E7] group-hover:opacity-75 w-full h-[117px] sm:h-[202px]'>
										{ product.imageSrc && (
											<Image
												src={ product.imageSrc }
												alt={ product.imageAlt ?? '' }
												className='object-cover object-center'
												sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
												fill
											/>
										) }

										{ product.bloodTest === 'yes' && (
											<div className='absolute bottom-0 right-0 p-1.5 sm:p-2'>
												<AlertSquareIcon className='w-15px h-15px sm:w-18px sm:h-18px flex-shrink-0' />
											</div>
										) }
									</div>
									<div className='flex flex-1 flex-col space-y-1 py-[13px] sm:py-18px px-[13px] sm:px-[21px]'>
										<h4 className='font-Poppins text-sm font-medium text-primary leading-[146%] -tracking-0.04em'>
											{ product.name }
										</h4>
										<p className='text-xs font-BRSonoma leading-[134%] text-grey-primary'>{ product.description }</p>
										<div className='flex flex-1 flex-col justify-end font-BRSonoma text-primary pt-18px'>
											{ product.price && (
												<p className='text-xs lg:text-[15px] leading-[130%] lg:leading-[100%] font-BRSonoma'>${ product.price }</p>
											) }
										</div>
									</div>
								</div>
							)) }
						</div>
					</div>
				)) }
			</div>
		);
	};

	const renderPageTitle = () => {
		return (
			<div className='flex flex-col gap-y-11px sm:gap-y-3.5 text-primary'>
				<p className='text-pretitle'>{ productListData.preTitle }</p>
				<h1 className='font-Poppins text-[32px] md:text-4xl lg:text-[40px] leading-[84%] md:leading-[98.75%] -tracking-0.04em'>
					{ productListData.title }
				</h1>
			</div>
		);
	};

	const renderInputSearch = () => {
		return (
			<div className='relative rounded-[10px] w-full'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
					<SearchIcon
						className='h-4 w-4 text-primary'
						aria-hidden='true' />
				</div>
				<input
					type='text'
					name='search'
					id='search'
					value={ query }
					autoComplete='off'
					onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value) }
					className='block w-full bg-grey-secondary rounded-[10px] border-0 py-1.5 pl-10 text-primary text-sm font-Poppins leading-8 -tracking-0.04em placeholder:text-primary focus:ring-0 focus:outline-none focus:border-0'
					placeholder='Search'
				/>

				<button
					className='absolute inset-y-0 right-0 flex items-center px-4 lg:hidden focus:ring-0 focus:outline-none focus:border-0'
					onClick={ () => setOpenSheet(prev => !prev) }
				>
					<SettingsIcon aria-hidden='true' />
				</button>
			</div>
		);
	};

	const onCloseSheet = () => {
		setTempFilterValues(filterValues);
		setOpenSheet(false);
	};

	const renderSheet = () => {
		return (
			<Sheet
				open={ openSheet }
				onOpenChange={ (open: boolean) => {
					if (!open) onCloseSheet();
					else setOpenSheet(open);
				} }
			>
				<SheetContent
					className='bg-grey-secondary rounded-t-[22px] !px-[22px] !py-6'
					side='bottom'
				>
					<div className='absolute left-0 pl-[22px] top-4 w-full pr-10'>
						<p className='text-primary text-xl -tracking-0.04em font-Poppins'>Filter Products</p>
					</div>
					<div className='max-h-[40vh] overflow-y-auto overflow-x-hidden my-7'>
						{ renderFilters() }
					</div>

					<div className='flex flex-col gap-y-7px text-xs leading-5 font-Poppins'>
						<button
							className='btn btn-primary w-full !py-11px'
							onClick={ () => {
								setFilterValues(tempFilterValues);
								setOpenSheet(false);
							} }>Save</button>
						<button
							className='btn bg-primary bg-opacity-10 w-full text-primary font-medium !py-11px'
							onClick={ onCloseSheet }>Cancel</button>
					</div>
				</SheetContent>
			</Sheet>
		);
	};

	return (
		<>
			<Navbar theme='light' />

			<div className='py-[88px] lg:py-[152px]'>
				<div className='container-center'>
					<div className='lg:hidden flex flex-col items-center text-center gap-y-[35px] mb-[49px] w-full max-w-md mx-auto'>
						{ renderPageTitle() }
						{ renderInputSearch() }
					</div>

					<div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
						<form className='hidden lg:block'>
							{ renderPageTitle() }

							<div className='mt-[46px] sticky top-10 max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden no-scrollbar'>
								<div className='mb-7'>
									{ renderInputSearch() }
								</div>
								<div className='border-b border-blue-3 pb-3 flex items-center gap-[7px]'>
									<p className='font-Poppins text-sm font-medium leading-8 -tracking-0.04em'>Filters</p>
									<ArrowNarrowDown className='w-[13px] h-[13px] text-primary' />
								</div>
								{ renderFilters() }
							</div>
						</form>

						<div className='lg:col-span-3'>
							{ renderListProductsByCategory() }
						</div>
					</div>
				</div>
			</div>

			{ renderSheet() }
		</>
	);
};

export default ProductsPage;
