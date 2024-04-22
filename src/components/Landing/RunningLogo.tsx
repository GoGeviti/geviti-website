'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

import { ArrowUpRight, GevitiLogoIcon } from '../Icons';

const keywordsData = Array.from(Array(4).keys());

const RunningLogo: React.FC = () => {
	const renderKeyword = (keywordIdx: number, section: number) => (
		<span
			key={ `keyword-${ section }-${ keywordIdx }` }
			className='pl-[25.21px] lg:pl-[37.62px] inline-flex items-center gap-x-[25.22px] lg:gap-x-[37.62px]'
		>
			<span className='flex items-center justify-center'>
				<ArrowUpRight className='w-[42.01px] h-[42.01px] lg:w-[62.7px] lg:h-[62.7px]' />
			</span>
			<span>
				<GevitiLogoIcon className='w-[130.26px] h-[31.21px] lg:w-[194.37px] lg:h-[46.58px]' />
			</span>
		</span>
	);

	return (
		<div className='relative flex justify-center overflow-x-hidden select-none'>
			<Marquee autoFill>
				{ keywordsData.map((idx, index) => renderKeyword(idx, index)) }
			</Marquee>
		</div>
	);
};

export default RunningLogo;
