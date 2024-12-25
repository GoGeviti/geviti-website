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
	size?: 'default' | 'small';
	isLight?: boolean;
};

const CustomSelect: React.FC<SelectProps> = ({
	options = [],
	value,
	onChange,
	placeholder = 'Select',
	isError,
	errorMessage,
	disabled,
	size = 'default',
	isLight = false
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
								isError ? 'ring-1 ring-red-primary data-[state=open]:ring-red-primary focus:ring-1 focus:ring-red-primary' : 'data-[state=open]:ring-1 data-[state=open]:ring-grey-primary focus:ring-grey-primary',
								size === 'small' && 'h-auto lg:h-auto py-4 pl-4 border focus:border-[#E6E7E7] pr-[10px] bg-white placeholder:text-[#AEB1B2] text-primary text-xs lg:text-xs w-full border-[#E6E7E7]',
								isLight && 'border focus:border-[#E6E7E7] bg-white placeholder:text-[#AEB1B2] text-primary border-[#E6E7E7]',
							)
						}>
						<span className={ clsxm(
							'w-full truncate overflow-hidden whitespace-nowrap text-left',
							(size === 'small' && !value) ? 'text-[#AEB1B2]' : 'text-primary',
							(size !== 'small' && !value) ? 'text-[#AEB1B2]' : 'text-primary',
						) }>{ options.find(e => e.value === value)?.label ?? placeholder }</span>
					</SelectTrigger>
					<SelectContent className=' bg-grey-950 text-xs lg:text-lg !leading-normal font-Poppins text-white z-[53] rounded-[10px] max-h-[200px]'>
						<SelectGroup className='overflow-x-hidden text-start'>
							{ options.map((option, optionIdx) => (
								<div
									key={ optionIdx }>
									<SelectItem
										key={ optionIdx }
										value={ option.value }
										className={ clsxm(
											'data-[state=unchecked]:font-normal cursor-pointer data-[state=checked]:font-medium text-white data-[highlighted]:bg-primary py-2.5 px-6 text-xs lg:text-lg !leading-normal',
											size === 'small' && 'text-xs lg:text-xs text-primary bg-white rounded-none data-[highlighted]:bg-[#AEB1B2]',
										) }
									>{ option.label }</SelectItem>
									{ optionIdx < options.length - 1 && (
										<SelectSeparator className={ clsxm(
											size === 'small' ? 'bg-[#AEB1B2]' : 'bg-primary',
										) } />
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