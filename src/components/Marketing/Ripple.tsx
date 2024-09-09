import React, { CSSProperties } from 'react';

type RippleProps = {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  multiplierSize?: number;
};

const Ripple = React.memo(function Ripple({
	mainCircleSize = 127,
	mainCircleOpacity = 0.25,
	numCircles = 3,
	multiplierSize = 70,
}: RippleProps) {
	return (
		<div className='absolute inset-0 flex items-center justify-center'>
			{ Array.from({ length: numCircles }, (_, i) => {
				const size = mainCircleSize + i * multiplierSize;
				const opacity = mainCircleOpacity - i * 0.03;
				const animationDelay = `${i * 0.06}s`;
				const borderStyle = 'solid';
				const borderWidth = i === 0 ? '1.25' : 1.5 + (i - 1) * 0.5;
				const boxShadow =
          i % 2 === 1
          	? '6.378px 6.378px 12.757px 12.757px rgba(255, 255, 255, 0.25) inset, 0px 74.946px 20.73px 20.73px rgba(0, 95, 163, 0.00), 0px 47.838px 19.135px 19.135px rgba(0, 95, 163, 0.01), 0px 27.108px 15.946px 15.946px rgba(0, 95, 163, 0.05), 0px 11.162px 11.162px 11.162px rgba(0, 95, 163, 0.09), 0px 3.189px 6.378px 6.378px rgba(0, 95, 163, 0.10)'
          	: '8.357px 8.357px 16.715px 16.715px rgba(255, 255, 255, 0.25), 0px 98.198px 27.161px 27.161px rgba(0, 95, 163, 0.00), 0px 62.679px 25.072px 25.072px rgba(0, 95, 163, 0.01), 0px 35.518px 20.893px 20.893px rgba(0, 95, 163, 0.05), 0px 14.625px 14.625px 14.625px rgba(0, 95, 163, 0.09), 0px 4.179px 8.357px 8.357px rgba(0, 95, 163, 0.10)';

				return (
					<div
						key={ i }
						className={ `absolute animate-ripple rounded-full border [--i:${i}]` }
						style={
              {
              	width: `${size}px`,
              	height: `${size}px`,
              	opacity,
              	animationDelay,
              	borderStyle,
              	borderWidth: `${borderWidth}px`,
              	borderColor: 'white',
              	boxShadow,
              	top: '50%',
              	left: '50%',
              	transform: 'translate(-50%, -50%) scale(1)',
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
