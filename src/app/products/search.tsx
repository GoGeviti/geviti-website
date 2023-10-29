'use client';
import React from 'react';

import { SearchIcon, SettingsIcon } from '@/components/Icons';
import { useProductStore } from '@/store/productStore';

const ProductSearchInput = () => {

	const { query, setQuery, openSheet, toogleOpenSheet } = useProductStore();

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
				onClick={ () => toogleOpenSheet(!openSheet) }
				aria-label='button open sheet'
			>
				<SettingsIcon aria-hidden='true' />
			</button>
		</div>
	);
};

export default ProductSearchInput;