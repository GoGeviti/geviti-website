'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

type StatProps = {
	num: number;
	suffix?: string | null;
	suffixClassName?: string;
	decimals?: number;
};

const Stat: React.FC<StatProps> = ({ num, suffix, suffixClassName, decimals = 0 }) => {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;

		animate(0, num, {
			duration: num >= 40 ? 2 : 1,
			onUpdate(value) {
				if (!ref.current) return;

				ref.current.textContent = value.toFixed(decimals);
			},
		});
	}, [num, decimals, isInView]);

	return (
		<span className='text-[100px] leading-none -tracking-0.04em'>
			<span ref={ ref } />
			<span className={ suffixClassName }>{ suffix }</span>
		</span>
	);
};

export default Stat;