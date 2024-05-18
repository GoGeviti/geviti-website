'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import QuestionTooltip from '../Home/QuestionTooltip';
import { InfoBlue } from '../Icons';

type BiomarkersListProps = {
	list: {
		title: string;
		description?: string;
	}[];
	dataKey?: string;
};

const BiomarkersList: React.FC<BiomarkersListProps> = ({
	list,
	dataKey
}) => {
	const renderBiomarkersList = () => {
		return (
			<ul className='flex flex-wrap gap-y-[27px] gap-x-[27px] lg:gap-x-6 lg:gap-y-[29px]'>
				{ list.map((item, itemIdx) => {
					return (
						<li
							key={ itemIdx }
							className='text-primary flex gap-2 text-sm !leading-6 border bg-[#F2FAFF] capitalize py-2 px-3.5 rounded-full border-[#C8EAFF] items-center cursor-pointer'
						>
							{ item.title }

							<QuestionTooltip
								icon={ <InfoBlue /> }
								text={ item.description || item.title }
							/>
						</li>
					);
				}) }
			</ul>
		);
	};

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={ `biomarkers-list-${ dataKey }` }
				initial={ { y: 10, opacity: 0 } }
				animate={ { y: 0, opacity: 1 } }
				exit={ { y: -10, opacity: 0 } }
				transition={ { duration: 0.375, ease: 'easeInOut' } }
			>
				{ renderBiomarkersList() }
			</motion.div>
		</AnimatePresence>
	);
};

export default BiomarkersList;