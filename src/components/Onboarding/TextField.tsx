import React from 'react';

import clsxm from '@/helpers/clsxm';

import InputLabel, { ErrorMessage } from './InputLabel';

type TextFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
	wrapperClassName?: string;
	isError?: boolean;
	errorMessage?: string;
};

const TextField: React.FC<TextFieldProps> = ({
	label,
	id,
	className,
	wrapperClassName,
	isError,
	errorMessage,
	...props
}) => {
	return (
		<div className={ clsxm('relative', wrapperClassName) }>
			<label htmlFor={ id }>
				<InputLabel>{ label }</InputLabel>
			</label>
			<div className='relative'>
				<input
					className={ clsxm(
						'block w-full border-0 outline-none transform transition-colors duration-300 rounded-[10px]',
						'text-primary text-xs font-medium leading-normal font-Poppins placeholder:text-grey-primary px-4 py-3',
						isError ? 'bg-red-primary-background ring-[1.5px] ring-red-primary focus:ring-[1.5px] focus:ring-red-primary' : 'bg-white ring-0 focus:ring-0',
						className
					) }
					autoComplete='off'
					{ ...props }
				/>
			</div>
			{ isError && errorMessage && (
				<ErrorMessage>{ errorMessage }</ErrorMessage>
			) }
		</div>
	);
};

export default TextField;