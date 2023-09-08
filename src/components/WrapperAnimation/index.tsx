import React from 'react';

import clsxm from '@/helpers/clsxm';

type WrapperAnimationProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	className?: string;
	disableMobile?: boolean;
};

const WrapperAnimation: React.FC<WrapperAnimationProps> = ({
	children,
	className,
	disableMobile = true,
	...props
}) => {
	if (disableMobile) {
		return (
			<>
				<div
					className={ clsxm('max-sm:hidden', className) }
					{ ...props }>
					{ children }
				</div>

				<div className={ clsxm('sm:hidden', className) }>
					{ children }
				</div>
			</>
		);
	}

	return (
		<div
			className={ className }
			{ ...props }>
			{ children }
		</div>
	);
};

export default WrapperAnimation;