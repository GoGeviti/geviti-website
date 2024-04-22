'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

import { ArrowUpRight, GevitiLogoIcon } from '../Icons';

const RunningLogo: React.FC = () => {
	const keywordsData = Array.from(Array(4).keys());

	const renderKeyword = (keywordIdx: number, section: number) => (
		<span
			key={ `keyword-${ section }-${ keywordIdx }` }
			className='pl-[25.21px] lg:pl-[37.62px] flex items-center gap-x-[25.22px] lg:gap-x-[37.62px]'
		>
			<span className='flex items-center justify-center'>
				<ArrowUpRight className='w-[42.01px] h-[42.01px] lg:w-[62.7px] lg:h-[62.7px]' />
			</span>
			<span>
				<GevitiLogoIcon className='w-[155px] h-[38px] sm:w-[217px] sm:h-[52px]' />
			</span>
		</span>
	);

	return (
		<div className='relative flex justify-center overflow-hidden select-none'>
			<Marquee autoFill>
				{ keywordsData.map((idx, index) => renderKeyword(idx, index)) }
			</Marquee>
		</div>
	);
};

export default RunningLogo;
