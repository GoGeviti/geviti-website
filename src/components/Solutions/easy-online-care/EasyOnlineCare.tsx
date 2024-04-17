'use client';
import React, { useState } from 'react';

import Antiaging from './Antiaging';
import EasyCareProductCard from './EasyCareProductCard';
import EasyCareTab from './EasyCareTab';
import MedicalWeightLoss from './MedicalWeightLoss';
import SexualHealth from './SexualHealth';
import TestosteroneTherapy from './TestosteroneTherapy';
import Thyroid from './Thyroid';

interface EasyOnlineCareProps {
  treatmentmens: any;
}

const EasyOnlineCare: React.FC<EasyOnlineCareProps> = ({ treatmentmens }) => {
	const [activeContent, setActiveContent] = useState('Testosterone Therapy');

	return (
		<>
			<section className='md:px-4'>
				<div className=' md:bg-white rounded-[19px] py-11 my-6 '>
					<div className='w-full mx-auto  bg-white py-6 md:py-0'>
						<div className='flex flex-col items-center justify-center'>
							<h2 className='lg:text-base md:text-sm sm:text-xs text-[10px] leading-[150%] tracking-[1.76px] font-Poppins text-grey-primary font-semibold uppercase'>
								{ treatmentmens.sectionsubheading }
							</h2>
							<p className='mt-[14px] text-center text-2xl md:text-4xl lg:text-[42px] text-primary -tracking-[1.68px] font-Poppins'>
								{ treatmentmens.sectionmainheading }
							</p>
						</div>
						<div className=' w-full md:mt-[56px] mt-6 flex flex-col items-center md:pb-0 pb-10'>
							<EasyCareTab
								setActiveContent={ setActiveContent }
								activeContent={ activeContent }
							/>
							{ activeContent === 'Testosterone Therapy' && (
								<TestosteroneTherapy treatmentmens={ treatmentmens } />
							) }
							{ activeContent === 'Anti-aging Peptides' && (
								<Antiaging treatmentmens={ treatmentmens } />
							) }
							{ activeContent === 'Medical Weight Loss' && (
								<MedicalWeightLoss treatmentmens={ treatmentmens } />
							) }
							{ activeContent === 'Sexual Health' && (
								<SexualHealth treatmentmens={ treatmentmens } />
							) }
							{ activeContent === 'Thyroid' && (
								<Thyroid treatmentmens={ treatmentmens } />
							) }
						</div>
					</div>
					<EasyCareProductCard products={ treatmentmens.products } />
				</div>
			</section>
		</>
	);
};

export default EasyOnlineCare;
