import React from 'react';
import { motion } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

const NUMBERS = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
	6, 7, 8, 9,
];

const AnimatedNumber = ({
	className,
	animateToNumber,
	fontStyle,
	transitions,
	includeComma,
	locale,
	isInView
}: any) => {
	const keyCount = React.useRef(0);
	const animateTonumberString = includeComma
		? Math.abs(animateToNumber).toLocaleString(locale || 'en-US')
		: String(Math.abs(animateToNumber));
	const animateToNumbersArr = Array.from(animateTonumberString, Number).map(
		(x, idx) => (isNaN(x) ? animateTonumberString[idx] : x)
	);

	const [numberHeight, setNumberHeight] = React.useState(0);
	const [numberWidth, setNumberWidth] = React.useState(0);

	const numberDivRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const rect = numberDivRef?.current?.getClientRects()?.[0];
		if (rect) {
			setNumberHeight(rect.height);
			setNumberWidth(rect.width);
		}
	}, []);

	return (
		<span>
			{ numberHeight !== 0 && (
				<div
					className={ clsxm(
						'flex overflow-hidden',
						className
					) }
				>
					{ animateToNumbersArr.map((n, index) => {
						if (typeof n === 'string') {
							return (
								<motion.div
									key={ index }
									variants={ {
										hidden: { y: '100%', opacity: 0 },
										visible: {
											opacity: 1,
											y: 0,
											transition: {
												ease: 'easeOut',
												delay: 2,
												duration: 1
											}
										}
									} }
									initial='hidden'
									animate={ isInView ? 'visible' : 'hidden' }
									style={ { ...fontStyle, fontVariantNumeric: 'tabular-nums' } }
								>{ n }</motion.div>
							);
						}

						return (
							<div
								key={ index }
								style={ { height: numberHeight, width: numberWidth } }>
								{ NUMBERS.map(number => (
									<motion.div
										style={ { ...fontStyle, fontVariantNumeric: 'tabular-nums' } }
										key={ `${ keyCount.current++ }` }
										initial='hidden'
										variants={ {
											hidden: { y: 0 },
											visible: {
												y: -1 * (numberHeight * + (animateToNumbersArr[index])) - numberHeight * 20,
											},
										} }
										animate={ isInView ? 'visible' : 'hidden' }
										transition={ transitions?.(index) }
									>
										{ number === 0 ? <span className='invisible'>{ number }</span> : number }
									</motion.div>
								)) }
							</div>
						);
					}) }
				</div>
			) }

			<div
				ref={ numberDivRef }
				style={ { position: 'absolute', top: -9999, ...fontStyle } }
			>
				{ 0 }
			</div>
		</span>
	);
};

// const Enhanced = React.memo(AnimatedNumber, (prevProps, nextProps) => {
// 	return (
// 		prevProps.animateToNumber === nextProps.animateToNumber &&
// 		prevProps.fontStyle === nextProps.fontStyle &&
// 		prevProps.includeComma === nextProps.includeComma
// 	);
// });

export default AnimatedNumber;