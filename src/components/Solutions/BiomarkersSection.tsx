'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { solutionData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import BiomarkersList from '../BiomarkersList';
import { ChevronDown, Filter } from '../Icons';
import { Tab } from '../MemberShip/BiomarkersSection';

type BiomarkersSectionProps = {
  list?: {
    key: string;
    list: {
      title: string;
      description?: string;
    }[];
  }[];
  type?: 'men' | 'women';
};

const biomarkersData = solutionData.biomarkers;

const BiomarkersSection: React.FC<BiomarkersSectionProps> = ({
	type = 'men',
}) => {
	const [isOpenSection, setIsOpenSection] = useState<boolean>(false);
	const [selectedOptIdx, setSelectedOptIdx] = useState<number>(0);
	const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
	const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

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
								key={ `opt-${optIdx}` }
								onClick={ () => setSelectedOptIdx(optIdx) }
								className={ clsxm(
									selected
										? 'text-white font-medium'
										: 'text-grey-400 font-normal',
									'transition-colors px-3 sm:px-6 h-[34px] sm:h-[37px] rounded-[100px] relative inline-flex items-center justify-center'
								) }
							>
								<span className='relative z-10 text-xs sm:text-sm !leading-normal'>
									{ opt.title }
								</span>

								{ selected && (
									<motion.span
										layoutId={ `pill-tab-biomarkers-treatmentOptions-${type}` }
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
		const filteredBiomarkersData = biomarkersData.options[
			selectedOptIdx
		].tabs.filter(e => e.gender === type)[selectedTabIdx].list;

		return (
			<BiomarkersList
				list={ filteredBiomarkersData }
				dataKey={ `${selectedOptIdx}-${selectedTabIdx}` }
			/>
		);
	};

	const renderTabs = () => {
		return (
			<div className='flex gap-[67px] max-lg:hidden'>
				{ biomarkersData.options[selectedOptIdx].tabs
					.filter(e => e.gender === type)
					.map((tab, index) => {
						return (
							<Tab
								key={ index }
								onClick={ () => setSelectedTabIdx(index) }
								selected={ selectedTabIdx === index }
								title={ tab.label }
								layoutId={ 'tabs-biomakers-underline' }
							/>
						);
					}) }
			</div>
		);
	};

	const renderFilter = () => {
		const selectedOpt = biomarkersData.options[selectedOptIdx].title;
		const selectedTabs =
      biomarkersData.options[selectedOptIdx].tabs[selectedTabIdx].label;

		return (
			<motion.div
				initial={ false }
				animate={ {
					height: isOpenFilter ? '273px' : '46px',
				} }
				transition={ { ease: 'easeInOut', duration: 0.5 } }
				className='lg:hidden w-full rounded-[20px] p-1.5 border border-grey-50'
			>
				<div className='flex items-center justify-between gap-2 w-full relative z-10'>
					<span className='text-xs !leading-normal text-primary w-full px-3'>
						{ selectedOpt }/{ selectedTabs }
					</span>

					<button
						onClick={ () => setIsOpenFilter(prev => !prev) }
						className='focus:ring-0 focus:outline-none bg-primary py-2 px-3 rounded-full text-white flex items-center justify-center gap-1.5 text-xs !leading-normal'
					>
						<Filter className='flex-shrink-0' />
            Filter
					</button>
				</div>

				<motion.div
					initial={ false }
					animate={ {
						opacity: isOpenFilter ? 1 : 0,
						height: isOpenFilter ? 'fit-content' : 0,
						y: isOpenFilter ? 0 : -20,
					} }
					transition={ { ease: 'easeInOut', duration: 0.3 } }
					className='pt-[31px] pb-1 px-3 divide-y divide-grey-50'
				>
					<div className='pb-3.5 flex flex-col gap-y-3.5'>
						{ biomarkersData.options.map((option, optionIdx) => {
							return (
								<div key={ `gender-${optionIdx}` }>
									<input
										id={ option.value }
										name='gender'
										type='radio'
										onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
											setSelectedOptIdx(+ e.target.value);
										} }
										value={ optionIdx }
										checked={ optionIdx === selectedOptIdx }
									/>
									<label
										htmlFor={ option.value }
										className={ clsxm(
											'text-sm !leading-normal',
											selectedOptIdx === optionIdx
												? 'text-primary'
												: 'text-grey-400'
										) }
									>
										{ option.title }
									</label>
								</div>
							);
						}) }
					</div>
					<div className='pt-3.5 flex flex-col gap-y-3.5'>
						{ biomarkersData.options[selectedOptIdx].tabs
							.filter(e => e.gender === type)
							.map((option, optionIdx) => {
								return (
									<div key={ `cat-${optionIdx}` }>
										<input
											id={ `cat-${optionIdx}` }
											name='category'
											type='radio'
											onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
												setSelectedTabIdx(+ e.target.value);
											} }
											value={ optionIdx }
											checked={ optionIdx === selectedTabIdx }
										/>
										<label
											htmlFor={ `cat-${optionIdx}` }
											className={ clsxm(
												'text-sm !leading-normal',
												selectedTabIdx === optionIdx
													? 'text-primary'
													: 'text-grey-400'
											) }
										>
											{ option.label }
										</label>
									</div>
								);
							}) }
					</div>
				</motion.div>
			</motion.div>
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

					<ChevronDown
						className={ clsxm(
							'w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 text-primary ease-out transform duration-200',
							isOpenSection && 'rotate-180'
						) }
					/>
				</button>
				<p
					className={ clsxm(
						'transform transition-opacity ease-in-out mt-5px lg:mt-1 text-grey-300 text-xs lg:text-lg !leading-normal',
						isOpenSection
							? 'opacity-0 duration-50'
							: 'opacity-100 delay-500 duration-500'
					) }
				>
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
							{ /* <div className='flex flex-col'>
								<div className='w-fit flex max-sm:justify-center mb-[42px]'>
									{ renderButtonSwitch() }
								</div>
								{ renderBiomarkersList() }
							</div> */ }
							<div className='flex flex-col'>
								<div className='hidden lg:flex w-fit mb-[39px]'>
									{ renderButtonSwitch() }
								</div>
								{ renderTabs() }
								{ renderFilter() }
								<div className='w-full pt-[42px] lg:pt-[63px]'>
									{ renderBiomarkersList() }
								</div>
							</div>
						</motion.div>
					) }
				</AnimatePresence>
			</div>
		</div>
	);
};

export default BiomarkersSection;
