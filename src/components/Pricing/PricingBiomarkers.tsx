'use client';

import React, { useState } from 'react';

import BiomarkersSection from './BiomarkersSection';
import PricingComparison from './PricingComparison';

type PricingBiomarkersProps = {
	isFromHomePage?: boolean;
}
const PricingBiomarkers: React.FC<PricingBiomarkersProps> = ({ isFromHomePage }) => {
	const [openIdx, setOpenIdx] = useState<number>(-1);

	const toggleAccordion = (idx: number) => {
		if (openIdx === idx) setOpenIdx(-1);
		else setOpenIdx(idx);
	};

	return (
		<div className='max-lg:container-center w-full'>
			<div className='lg:rounded-b-19px lg:bg-[#F5FBFF] lg:max-w-[1061px] mx-auto w-full'>
				{
					!isFromHomePage && (
						<>
							<PricingComparison
								index={ 0 }
								isOpen={ openIdx === 0 }
								toggleAccordion={ toggleAccordion }
							/>
							<BiomarkersSection
								index={ 1 }
								isOpen={ openIdx === 1 }
								toggleAccordion={ toggleAccordion }
							/>
						</>
					)
				}
			</div>
		</div>
	);
};

export default PricingBiomarkers;
