import React from 'react';

import { ArrowUpRight, GevitiLogoIcon } from '../Icons';

const RunningLogo: React.FC = () => {
	const keywordsData = Array.from(Array(4).keys());

	const renderKeyword = (keywordIdx: number, section: number) => {
		return (
			<span
				key={ `keyword-${ section }-${ keywordIdx }` }
				className='pl-[25.21px] sm:pl-[37.62px] inline-flex items-center gap-x-[25.22px] sm:gap-x-[37.62px]'
			>
				<span className='flex items-center justify-center'>
					<ArrowUpRight className='w-[42.01px] h-[42.01px] sm:w-[62.7px] sm:h-[62.7px]' />
				</span>

				<span>
					<GevitiLogoIcon className='w-[130.26px] h-[31.21px] sm:w-[194.37px] sm:h-[46.58px]' />
				</span>
			</span>
		);
	};

	return (
		<div className='pt-7 pb-[42px] lg:pt-[49.3px] lg:pb-[94px]'>
			<div className='relative flex justify-center overflow-x-hidden select-none'>
				<div className='h-[42.01px] sm:h-[62.7px] animate-marquee whitespace-nowrap flex justify-center'>
					{ keywordsData.map((idx: number) => renderKeyword(idx, 1)) }
				</div>

				<div className='absolute top-0 h-[42.01px] sm:h-[62.7px] animate-marquee2 whitespace-nowrap flex justify-center'>
					{ keywordsData.map((idx: number) => renderKeyword(idx, 2)) }
				</div>
			</div>
		</div>
	);
};

export default RunningLogo;
