import React from 'react';

import clsxm from '@/helpers/clsxm';

type ProgressStepProps = {
	count?: number;
	currentIdx: number;
	theme?: 'light' | 'dark';
};

const ProgressStep: React.FC<ProgressStepProps> = ({ count = 4, currentIdx, theme = 'dark' }) => {
	const list = Array.from(Array(count).keys());

	return (
		<div className='px-7 flex justify-between items-center lg:hidden'>
			{ list.map((idx: number) => {
				return (
					<div
						key={ `progress-checkout-${ idx }` }
						className={ clsxm(
							'text-xs !leading-normal font-semibold rounded-full',
							currentIdx === idx ? 'px-3.5 py-2' : 'w-18px h-18px',
							theme === 'dark' && 'bg-grey-950 text-grey-primary',
							theme === 'light' && 'bg-grey-50 text-grey-500'
						) }>
						{ currentIdx === idx && `STEP ${ idx + 1 }` }
					</div>
				);
			}) }
		</div>
	);
};

export default ProgressStep;