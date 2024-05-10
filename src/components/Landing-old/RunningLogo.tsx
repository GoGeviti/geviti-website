import React from 'react';

import { ArrowUpRight, GevitiLogoIcon } from '../Icons';

const RunningLogo: React.FC = () => {
	const keywordsData = Array.from(Array(4).keys());

	const renderKeyword = (keywordIdx: number, section: number) => {
		return (
			<span
				key={ `keyword-${ section }-${ keywordIdx }` }
				className='pl-30px sm:pl-[42px] inline-flex items-center gap-x-30px sm:gap-x-[42px]'
			>
				<span className='flex items-center justify-center'>
					<ArrowUpRight className='w-50px h-50px sm:w-[70px] sm:h-[70px]' />
				</span>

				<span>
					<GevitiLogoIcon className='w-[155px] h-[38px] sm:w-[217px] sm:h-[52px]' />
				</span>
			</span>
		);
	};

	return (
		<div className='relative flex justify-center overflow-x-hidden select-none'>
			<div className='h-[156px] sm:h-[188px] animate-marquee whitespace-nowrap flex justify-center'>
				{ keywordsData.map((idx: number) => renderKeyword(idx, 1)) }
			</div>

			<div className='absolute top-0 h-[156px] sm:h-[188px] animate-marquee2 whitespace-nowrap flex justify-center'>
				{ keywordsData.map((idx: number) => renderKeyword(idx, 2)) }
			</div>
		</div>
	);
};

export default RunningLogo;
