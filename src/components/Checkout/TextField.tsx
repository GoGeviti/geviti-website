/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react';

import clsxm from '@/helpers/clsxm';

type TextFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	wrapperClassName?: string;
	isError?: boolean;
	errorMessage?: string;
	isLight?: boolean;
	type?: 'text' | 'password' | string;
};

const TextField: React.FC<TextFieldProps> = ({
	className,
	wrapperClassName,
	isError,
	errorMessage,
	isLight = false,
	type = 'text',
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className={ clsxm('relative flex flex-col', wrapperClassName) }>
			<div className='relative'>
				<input
					type={ type === 'password' ? (showPassword ? 'text' : 'password') : type }
					className={ clsxm(
						'block w-full h-[54px] lg:h-[63px] border-0 outline-none transform transition-colors duration-300 rounded-[10px]',
						'text-white bg-grey-950 text-xs lg:text-lg font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px',
						isError ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary',
						isLight && 'h-auto lg:h-auto py-4 pl-4 border focus:border-[#E6E7E7] pr-[10px] bg-white placeholder:text-[#AEB1B2] text-primary text-xs lg:text-xs w-full border-[#E6E7E7]',
						type === 'password' && 'pr-12',
						(isLight && props.disabled) && 'bg-grey-50 text-grey-primary',
						className
					) }
					autoComplete='off'
					{ ...props }
				/>
				{ type === 'password' && (
					<button
						type='button'
						onClick={ () => setShowPassword(!showPassword) }
						className='absolute right-4 top-1/2 -translate-y-1/2 text-grey-500 hover:text-grey-400 focus:outline-none'
					>
						{ showPassword ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={ 1.5 }
								stroke='currentColor'
								className='w-5 h-5'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z' />
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={ 1.5 }
								stroke='currentColor'
								className='w-5 h-5'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88' />
							</svg>
						) }
					</button>
				) }
			</div>
			{ isError && errorMessage && (
				<p className='text-red-primary text-[10px] mt-1 text-left'>{ errorMessage }</p>
			) }
		</div>
	);
};

export default TextField;