/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import clsxm from '@/helpers/clsxm';

type TextFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	wrapperClassName?: string;
	isError?: boolean;
	errorMessage?: string;
	isLight?: boolean;
};

const TextField: React.FC<TextFieldProps> = ({
	className,
	wrapperClassName,
	isError,
	errorMessage,
	isLight = false,
	...props
}) => {
	return (
		<div className={ clsxm('relative flex flex-col', wrapperClassName) }>
			<div className='relative'>
				<input
					className={ clsxm(
						'block w-full h-[54px] lg:h-[63px] border-0 outline-none transform transition-colors duration-300 rounded-[10px]',
						'text-white bg-grey-950 text-xs lg:text-lg font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px',
						isError ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary',
						isLight && 'h-auto lg:h-auto py-4 pl-4 border focus:border-[#E6E7E7] pr-[10px] bg-white placeholder:text-[#AEB1B2] text-primary text-xs lg:text-xs w-full border-[#E6E7E7]',
						className
					) }
					autoComplete='off'
					{ ...props }
				/>
			</div>
			{ isError && errorMessage && (
				<p className='text-red-primary text-[10px] mt-1 text-left'>{ errorMessage }</p>
			) }
		</div>
	);
};

export default TextField;