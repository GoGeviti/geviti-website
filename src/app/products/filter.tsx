'use client';
import React from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import { ChevronDown } from '@/components/Icons';
import { productListData } from '@/constant/data';
import { Benefit, Category } from '@/payload/payload-types';
import { FilterValue, useProductStore } from '@/store/productStore';

export type ProductFilterProps = {
	categories? : Category[];
	benefits? : Benefit[];
};

const ProductFilter:React.FC<ProductFilterProps> = ({
	// benefits,
	// categories
}) => {

	const { openSheet, tempFilterValues, filterValues } = useProductStore();

	return (
		<Accordion
			type='multiple'
			className='w-full'
		>
			{ /* <AccordionItem
				key='category'
				value={ 'category' }
				className='py-3 border-blue-3'
			>
				<AccordionTrigger className='flex items-center justify-between w-full'>
					<p className='text-sm -tracking-0.04em leading-8 font-Poppins text-primary'>Category</p>
					<ChevronDown className='w-3.5 h-3.5 text-primary ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180' />
				</AccordionTrigger>

				<AccordionContent className='pt-[13px]'>
					<div className='space-y-3'>
						{ categories.map((option, optionIdx) => {
							const data = openSheet ? tempFilterValues : filterValues;
							const isChecked = data.find(item => item.id === 'category')?.options?.find(opt => opt.value === option.title)?.checked;
							return (
								<FilterOptions
									idx={ optionIdx }
									isChecked={ !!isChecked }
									label={ option.title }
									value={ option.title }
									filterId={ 'category' }
									key={ optionIdx } />
							);
						}) }
					</div>
				</AccordionContent>
			</AccordionItem> */ }
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
									<FilterOptions
										idx={ optionIdx }
										isChecked={ !!isChecked }
										label={ option.label }
										value={ option.value }
										filterId={ filter.id }
										key={ optionIdx } />
								);
							}) }
						</div>
					</AccordionContent>
				</AccordionItem>
			)) }
			{ /* <AccordionItem
				key='benefits'
				value={ 'benefits' }
				className='py-3 border-blue-3'
			>
				<AccordionTrigger className='flex items-center justify-between w-full'>
					<p className='text-sm -tracking-0.04em leading-8 font-Poppins text-primary'>Benefits</p>
					<ChevronDown className='w-3.5 h-3.5 text-primary ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180' />
				</AccordionTrigger>

				<AccordionContent className='pt-[13px]'>
					<div className='space-y-3'>
						{ benefits.map((option, optionIdx) => {
							const data = openSheet ? tempFilterValues : filterValues;
							const isChecked = data.find(item => item.id === 'benefits')?.options?.find(opt => opt.value === option.title)?.checked;
							return (
								<FilterOptions
									idx={ optionIdx }
									isChecked={ !!isChecked }
									label={ option.title }
									value={ option.title }
									filterId={ 'benefits' }
									key={ optionIdx } />
							);
						}) }
					</div>
				</AccordionContent>
			</AccordionItem> */ }
		</Accordion>
	);
};

export default ProductFilter;

const FilterOptions = ({
	value, label, isChecked, filterId, idx
}:{
	value: string;
	label: string;
	isChecked: boolean;
	filterId: string;
	idx: number;
}) => {

	const { openSheet, tempFilterValues, filterValues, setFilterValues, setTempFilterValues } = useProductStore();

	const handleUpdateFilterValues = (prevFilters: FilterValue[], e: React.ChangeEvent<HTMLInputElement>, filterIdX: string) => {
		// console.log(prevFilters);
		return prevFilters.map(filterVal => {
			if (filterVal.id === filterIdX) {
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

	const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, filterIdX: string) => {
		// console.log(filterIdX);
		// console.log(e);
		if (!openSheet) {
			setFilterValues(handleUpdateFilterValues(filterValues, e, filterIdX));

			return;
		}

		setTempFilterValues(handleUpdateFilterValues(tempFilterValues, e, filterIdX));
	};
	return (
		<div
			key={ value }
			className='flex items-center pl-px'>
			<input
				id={ value }
				name={ `${ filterId }` }
				defaultValue={ value }
				type='checkbox'
				checked={ isChecked }
				onChange={ (e: React.ChangeEvent<HTMLInputElement>) => onChangeCheckbox(e, filterId) }
				className='h-4 w-4 appearance-none bg-transparent rounded border-blue-3 text-[#7ED4FF] focus:ring-0 focus:outline-none focus:ring-offset-0'
			/>
			<label
				htmlFor={ `filter-${ filterId }-${ idx }` }
				className='ml-9px text-xs text-primary font-Poppins leading-[125%] -tracking-0.04em'
			>
				{ label }
			</label>
		</div>
	);
};