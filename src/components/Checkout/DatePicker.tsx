'use client';

import * as React from 'react';
import DatePicker from 'react-datepicker';
import InputMask from '@mona-health/react-input-mask';

import clsxm from '@/helpers/clsxm';

type CustomDatePickerProps = {
	value: Date | null;
	onSelect: (date: Date) => void; // eslint-disable-line no-unused-vars
	isError?: boolean;
	errorMessage?: string;
	placeholder?: string;
	isLight?: boolean;
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
	value,
	onSelect,
	isError,
	errorMessage,
	placeholder = 'Pick a date',
	isLight = false
}) => {
	return (
		<div className='flex flex-col'>
			<DatePicker
				onChange={ onSelect }
				selected={ value }
				placeholderText={ placeholder }
				className={ clsxm(
					'w-full text-white placeholder:text-grey-500 border-0 outline-none h-[54px] lg:h-[63px] py-18px px-6 justify-start bg-grey-950 text-left text-xs lg:text-lg !leading-normal font-normal !font-Poppins rounded-[10px]',
					isError ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary',
					isLight && 'border focus:border-[#E6E7E7] bg-white placeholder:text-[#AEB1B2] text-primary border-[#E6E7E7]',
				) }
				calendarClassName='!font-Poppins'
				dateFormat='MM/dd/yyyy'
				open={ false }
				customInput={
					<InputMask
						mask='99/99/9999'
						maskPlaceholder={ null }
						placeholder={ placeholder } />
				}
			/>
			{ isError && errorMessage && (
				<p className='text-red-primary text-[10px] mt-1 text-left'>{ errorMessage }</p>
			) }
		</div>
	);
};

export default CustomDatePicker;