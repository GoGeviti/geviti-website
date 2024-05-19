'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { solutionData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import BiomarkersList from '../BiomarkersList';
import { ChevronDown } from '../Icons';

type BiomarkersSectionProps = {
	list: {
		key: string;
		list: {
			title: string;
			description?: string;
		}[];
	}[];
	type?: 'men' | 'women';
};

const biomarkersData = solutionData.biomarkers;

const BiomarkersSection: React.FC<BiomarkersSectionProps> = ({ list, type = 'men' }) => {
	const [isOpenSection, setIsOpenSection] = useState<boolean>(false);
	const [selectedOptIdx, setSelectedOptIdx] = useState<number>(0);

	const toggleDropdown = () => {
		setIsOpenSection(!isOpenSection);
	};

	const renderButtonSwitch = () => {
		return (
			<div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-grey-50'>
				<div className='relative flex items-center justify-center w-full h-full gap-3.5'>
					{ biomarkersData.options.map((opt, optIdx) => {
						const selected = selectedOptIdx === optIdx;

						return (
							<button
								key={ `opt-${ optIdx }` }
								onClick={ () => setSelectedOptIdx(optIdx) }
								className={ clsxm(
									selected
										? 'text-white font-medium'
										: 'text-grey-400 font-normal',
									'transition-colors px-3 sm:px-6 h-[34px] sm:h-[37px] rounded-[100px] relative inline-flex items-center justify-center'
								) }
							>
								<span className='relative z-10 text-xs sm:text-sm !leading-normal'>{ opt.title }</span>

								{ selected && (
									<motion.span
										layoutId={ `pill-tab-biomarkers-treatmentOptions-${ type }` }
										transition={ { type: 'spring', duration: 0.75 } }
										className='absolute inset-0 z-0 bg-primary rounded-[100px]'
									/>
								) }
							</button>
						);
					}) }
				</div>
			</div>
		);
	};

	const renderBiomarkersList = () => {
		const selectedKey = biomarkersData.options[selectedOptIdx].value;
		const filteredBiomarkersData = list.find(el => el.key === selectedKey)?.list ?? [];

		return (
			<BiomarkersList
				list={ filteredBiomarkersData }
				dataKey={ `treatmentOptions-${ selectedOptIdx }` }
			/>
		);
	};

	return (
		<div className='rounded-19px bg-white mt-6 pt-6 pb-[42px] lg:py-[62px]'>
			<div className='container-center flex flex-col'>
				<button
					onClick={ toggleDropdown }
					className='focus:ring-0 focus:outline-none flex w-full lg:w-auto text-primary justify-between lg:justify-start font-medium items-center text-sm lg:text-[28px] !leading-normal gap-3'
				>
					<span>{ biomarkersData.title }</span>

					<ChevronDown className={ clsxm(
						'w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 text-primary ease-out transform duration-200',
						isOpenSection && 'rotate-180'
					) } />
				</button>
				<p className={ clsxm('transform transition-opacity ease-in-out mt-5px lg:mt-1 text-grey-300 text-xs lg:text-lg !leading-normal', isOpenSection ? 'opacity-0 duration-[50ms]' : 'opacity-100 delay-500 duration-500') }>
					{ biomarkersData.expandText }
				</p>

				<AnimatePresence mode='wait'>
					{ isOpenSection && (
						<motion.div
							initial={ { opacity: 0, y: -30, height: 0 } }
							animate={ { opacity: 1, y: 0, height: 'fit-content' } }
							exit={ { opacity: 0, y: -30, height: 0 } }
							transition={ { duration: 0.5, ease: 'easeInOut' } }
						>
							<div className='flex flex-col'>
								<div className='w-fit flex max-sm:justify-center mb-[42px]'>
									{ renderButtonSwitch() }
								</div>
								{ renderBiomarkersList() }
							</div>
						</motion.div>
					) }
				</AnimatePresence>
			</div>
		</div>
	);
};

export default BiomarkersSection;