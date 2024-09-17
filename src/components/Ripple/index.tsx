import React, { CSSProperties } from 'react';

import clsxm from '@/helpers/clsxm';

type RippleProps = {
  numCircles?: number;
  // eslint-disable-next-line no-unused-vars
  circleStyle?: (i: number) => React.CSSProperties;
  // eslint-disable-next-line no-unused-vars
  circleClassName?: (i: number) => string;
};

const Ripple = React.memo(function Ripple({
	numCircles = 3,
	circleStyle,
	circleClassName,
}: RippleProps) {
	return (
		<div className='absolute inset-0 flex items-center justify-center'>
			{ Array.from({ length: numCircles }, (_, i) => {
				const animationDelay = `${i * 0.06}s`;

				return (
					<div
						key={ i }
						className={ clsxm(
							`absolute aspect-square animate-ripple rounded-full border [--i:${i}]`,
							circleClassName ? circleClassName(i) : ''
						) }
						style={
              {
              	animationDelay,
              	top: '50%',
              	left: '50%',
              	transform: 'translate(-50%, -50%) scale(1)',
              	...(circleStyle ? circleStyle(i) : {}),
              } as CSSProperties
						}
					/>
				);
			}) }
		</div>
	);
});

Ripple.displayName = 'Ripple';

export default Ripple;
