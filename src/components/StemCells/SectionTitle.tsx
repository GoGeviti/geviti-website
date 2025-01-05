'use client';

import React, { PropsWithChildren } from 'react';

import SectionAnimate from './SectionAnimate';

const SectionTitle: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<SectionAnimate
			animation='blurInUp'
			by='section'
			segmentClassName='overflow-hidden text-[8vw]/normal xs3:text-[32px]/normal font-medium -tracking-0.04em sm:text-5xl/normal font-PlayFairDisplay'
			segmentStyle={ {
				opacity: 0.81,
				background:
          'radial-gradient(163.02% 224.49% at 50.02% 50%, #DFDFFF 0%, #D8D9FF 18%, #161645 43%, #080819 66%, #020206 86%, #000 100%)',
				backgroundClip: 'text',
				WebkitBackgroundClip: 'text',
				mixBlendMode: 'screen',
				WebkitTextFillColor: 'transparent',
			} }
		>
			{ children }
		</SectionAnimate>
	);
};

export default SectionTitle;
