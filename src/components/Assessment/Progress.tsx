import React from 'react';

import clsxm from '@/helpers/clsxm';

type Props = {
  progress: number; // 0-100
  className?: string;
};

const AssessmentProgress: React.FC<Props> = ({ progress, className }) => {
	const pct = Math.max(0, Math.min(100, Math.round(progress)));
	return (
		<div className={ clsxm('w-full h-[6px] bg-grey-100 rounded-[3px] overflow-hidden', className) }>
			<div
				className='h-full bg-blue-1 rounded-[3px] transition-[width] duration-400 ease-out'
				style={ { width: `${pct}%` } }
			/>
		</div>
	);
};

export default AssessmentProgress;
