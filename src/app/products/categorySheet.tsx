'use client';
import React from 'react';

import { Sheet, SheetContent } from '@/components/Sheet';
import { useProductStore } from '@/store/productStore';

import ProductFilter, { ProductFilterProps } from './filter';

const CategorySheet:React.FC<ProductFilterProps> = ({
	benefits,
	categories

}) => {

	const { filterValues, openSheet, setTempFilterValues, toogleOpenSheet, setFilterValues, tempFilterValues } = useProductStore();
	const onCloseSheet = () => {
		setTempFilterValues(filterValues);
		toogleOpenSheet(false);
	};

	return (
		<Sheet
			open={ openSheet }
			onOpenChange={ (open: boolean) => {
				if (!open) onCloseSheet();
				else toogleOpenSheet(open);
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
					<ProductFilter
						benefits={ benefits }
						categories={ categories } />
				</div>

				<div className='flex flex-col gap-y-7px text-xs leading-5 font-Poppins'>
					<button
						className='btn btn-primary w-full !py-11px'
						onClick={ () => {
							setFilterValues(tempFilterValues);
							toogleOpenSheet(false);
						} }>Save</button>
					<button
						className='btn bg-primary bg-opacity-10 w-full text-primary font-medium !py-11px'
						onClick={ onCloseSheet }
						aria-label='Cancel'>Cancel</button>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default CategorySheet;