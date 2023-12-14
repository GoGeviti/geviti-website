import React from 'react';

type ProgressBarProps = {
	progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
	progress,
}) => {
	return (
		<div className='flex relative h-0.5 w-full overflow-hidden bg-primary bg-opacity-10 shadow-[0px_5px_10px_rgba(167,172,188,0.05)]'>
			<div
				className='bg-blue-1 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]'
				style={ { transform: `translateX(-${ 100 - progress }%)` } }
			/>
		</div>
	);
};

export default ProgressBar;
