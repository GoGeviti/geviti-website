'use client';

import React from 'react';

import clsxm from '@/helpers/clsxm';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectSeparator,
	SelectTrigger
} from '../Select';

type SelectProps = {
	options: { value: string; label: string; }[];
	value: string;
	onChange: (value: string) => void; // eslint-disable-line no-unused-vars
	placeholder?: string;
	isError?: boolean;
	errorMessage?: string;
	disabled?: boolean;
};

const CustomSelect: React.FC<SelectProps> = ({
	options = [],
	value,
	onChange,
	placeholder = 'Select',
	isError,
	errorMessage,
	disabled
}) => {
	const renderSelect = () => {
		return (
			<div className='flex flex-col'>
				<Select
					value={ value }
					onValueChange={ onChange }
					required
					disabled={ disabled }
				>
					<SelectTrigger
						aria-label={ value }
						className={
							clsxm(
								'w-full h-[54px] lg:h-[63px] text-xs lg:text-lg !leading-normal font-Poppins font-normal bg-grey-950 rounded-[10px] flex justify-between items-center py-18px px-6',
								value !== '' ? 'text-white' : 'text-grey-500',
								isError ? 'ring-1 ring-red-primary data-[state=open]:ring-red-primary focus:ring-1 focus:ring-red-primary' : 'data-[state=open]:ring-1 data-[state=open]:ring-grey-primary focus:ring-grey-primary'
							)
						}>
						<span className='w-full truncate overflow-hidden whitespace-nowrap text-left'>{ options.find(e => e.value === value)?.label ?? placeholder }</span>
					</SelectTrigger>
					<SelectContent className=' bg-grey-950 text-xs lg:text-lg !leading-normal font-Poppins text-white z-10 rounded-[10px] max-h-[200px]'>
						<SelectGroup className='overflow-x-hidden text-start'>
							{ options.map((option, optionIdx) => (
								<div
									key={ optionIdx }>
									<SelectItem
										key={ optionIdx }
										value={ option.value }
										className='data-[state=unchecked]:font-normal cursor-pointer data-[state=checked]:font-medium text-white data-[highlighted]:bg-primary py-2.5 px-6 text-xs lg:text-lg !leading-normal'
									>{ option.label }</SelectItem>
									{ optionIdx < options.length - 1 && (
										<SelectSeparator className='bg-primary' />
									) }
								</div>
							)) }
						</SelectGroup>
					</SelectContent>
				</Select>

				{ isError && errorMessage && (
					<p className='text-red-primary text-[10px] mt-1 text-left'>{ errorMessage }</p>
				) }
			</div>
		);
	};

	return renderSelect();
};

export default CustomSelect;