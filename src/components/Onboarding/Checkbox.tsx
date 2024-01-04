import React from 'react';

import clsxm from '@/helpers/clsxm';

type CheckboxProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
	labelClassName?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
	label,
	checked,
	onChange,
	id,
	labelClassName,
	className,
	...props
}) => {
	return (
		<div className='flex items-center gap-x-[10px]'>
			<input
				id={ id }
				type='checkbox'
				checked={ checked }
				onChange={ onChange }
				className={ clsxm(
					'flex-shrink-0 h-[14px] w-[14px] checked:bg-none appearance-none bg-transparent rounded-[1px] text-primary outline outline-offset-2 outline-2 focus:outline-2 focus:outline-primary ring-0 focus:ring-0 ring-transparent focus:ring-transparent ring-offset-transparent focus:ring-offset-transparent border-none focus:border-none ml-1',
					className
				) }
				{ ...props }
			/>
			<label
				htmlFor={ id }
				className={ clsxm(
					'text-xs text-primary font-BRSonoma leading-normal select-none text-left',
					labelClassName
				) }
			>
				<span dangerouslySetInnerHTML={ { __html: label } } />
			</label>
		</div>
	);
};

export default Checkbox;
