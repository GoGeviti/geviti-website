import { ComponentPropsWithRef } from 'react';

import clsxm from '@/helpers/clsxm';

type DotButtonProps = ComponentPropsWithRef<'button'> & {
  selected: boolean;
};

const DotButton: React.FC<DotButtonProps> = props => {
	const { children, selected, className, ...restProps } = props;

	return (
		<button
			type='button'
			className={ clsxm(
				'focus:ring-0 focus:outline-none flex-shrink-0 w-2 h-2 rounded-full',
				selected ? 'bg-blue-primary' : 'bg-grey-100',
				className
			) }
			{ ...restProps }
		>
			{ children }
		</button>
	);
};

export default DotButton;
