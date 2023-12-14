'use client';

import React from 'react';

import clsxm from '@/helpers/clsxm';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue
} from '../Select';

import InputLabel, { ErrorMessage } from './InputLabel';

type SelectProps = {
	label?: string;
	options: { value: string; label: string; }[];
	value: string;
	onChange: (value: string) => void; // eslint-disable-line no-unused-vars
	placeholder?: string;
	isError?: boolean;
	errorMessage?: string;
};

const CustomSelect: React.FC<SelectProps> = ({
	label,
	options = [],
	value,
	onChange,
	placeholder = 'Select',
	isError,
	errorMessage
}) => {
	const renderSelect = () => {
		return (
			<div>
				{ label && <InputLabel>{ label }</InputLabel> }

				<Select
					value={ value }
					onValueChange={ onChange }
					required
				>
					<SelectTrigger
						aria-label={ value }
						className={
							clsxm(
								'w-full text-xs font-Poppins font-medium rounded-[10px] flex justify-between items-center py-3 px-4',
								value !== '' ? 'text-primary' : 'text-grey-primary',
								isError ? 'bg-red-primary-background border-[1.5px] border-red-primary' : 'bg-white'
							)
						}>
						<SelectValue>{ options.find(e => e.value === value)?.label ?? placeholder }</SelectValue>
					</SelectTrigger>
					<SelectContent className=' bg-grey-secondary text-xs font-BRSonoma text-primary z-10 rounded-[10px] max-h-[200px]'>
						<SelectGroup className='overflow-x-hidden text-start'>
							{ options.map((option, optionIdx) => (
								<div
									key={ optionIdx }>
									<SelectItem
										key={ optionIdx }
										value={ option.value }
										className='data-[state=unchecked]:font-normal cursor-pointer data-[state=checked]:font-medium text-primary data-[highlighted]:bg-white py-2.5 px-4 text-xs'
									>{ option.label }</SelectItem>
									{ optionIdx < options.length - 1 && (
										<SelectSeparator />
									) }
								</div>
							)) }
						</SelectGroup>
					</SelectContent>
				</Select>

				{ isError && errorMessage && (
					<ErrorMessage>{ errorMessage }</ErrorMessage>
				) }
			</div>
		);
	};

	return renderSelect();
};

export default CustomSelect;