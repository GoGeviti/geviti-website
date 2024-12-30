import React from 'react';

import clsxm from '@/helpers/clsxm';

type PointCircleProps = {
  desktopClassName?: string;
  mobileClassName?: string;
};

const PointCircle: React.FC<PointCircleProps> = ({
	desktopClassName = 'max-sm:hidden sm:w-[22.133vw] lg:w-[164.74px]',
	mobileClassName = 'sm:hidden',
}) => {
	return (
		<>
			<svg
				width='167'
				height='167'
				viewBox='0 0 167 167'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={ clsxm('aspect-square', desktopClassName) }
			>
				<circle
					cx='83.3694'
					cy='83.3694'
					r='5.55296'
					fill='white' />
				<circle
					cx='83.3697'
					cy='83.3697'
					r='67.0611'
					stroke='white' />
				<circle
					cx='83.369'
					cy='83.369'
					r='82.369'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeDasharray='2 8'
				/>
			</svg>

			<svg
				width='85'
				height='85'
				viewBox='0 0 85 85'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={ clsxm('aspect-square', mobileClassName) }
			>
				<circle
					cx='42.5'
					cy='42.5048'
					r='2.79775'
					fill='white' />
				<circle
					cx='42.5'
					cy='42.5042'
					r='33.5393'
					stroke='white' />
				<circle
					cx='42.5'
					cy='42.5039'
					r='41.5'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeDasharray='2 8'
				/>
			</svg>
		</>
	);
};

export default PointCircle;
