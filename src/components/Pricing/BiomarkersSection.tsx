'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import membershipdata from '@/constant/data/membership';
import clsxm from '@/helpers/clsxm';

import BiomarkersList from '../BiomarkersList';
import { ChevronDown, Filter } from '../Icons';

type TabProps = {
  selected: boolean;
  title: string;
  onClick?: () => void;
  layoutId?: string;
};

export const Tab: React.FC<TabProps> = ({
	selected,
	title,
	onClick,
	layoutId,
}) => {
	return (
		<div className='relative'>
			<button
				onClick={ onClick }
				className='relative z-0 py-1.5 border-b-2 border-transparent hover:border-blue-primary/50'
			>
				<span
					className={ clsxm(
						'text-lg !leading-normal transition-colors',
						selected ? 'text-primary font-medium' : 'text-grey-300'
					) }
				>
					{ title }
				</span>
			</button>
			{ selected && (
				<motion.span
					layoutId={ layoutId }
					className='absolute bottom-0 left-0 right-0 z-10 h-0.5 bg-blue-primary'
				/>
			) }
		</div>
	);
};

const biomarkersData = membershipdata.biomarkers;
const tabs: { title: string; key: { [key: string]: string } }[] =
  biomarkersData.tabs;
const genderOptions = biomarkersData.genderOptions;

// type GenderOptions = {
// 	genderOptions : {
// 		title: string;
// 		shortLabel: string;
// 		// eslint-disable-next-line no-unused-vars
// 		icon?: (props?: React.SVGProps<SVGSVGElement> | undefined) => React.JSX.Element;
// 		value: string;
// 		}[];
// 	}

type BiomarkersSectionProps = {
  wrapperClassName?: string;
  tabLayoutId?: string;
  btnSwithLayoutId?: string;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  toggleAccordion: (idx: number) => void;
  index: number;
  // biomarkersData?: Omit<typeof membershipdata.biomarkers, 'genderOptions'> & GenderOptions;
};

const BiomarkersSection: React.FC<BiomarkersSectionProps> = ({
	wrapperClassName,
	tabLayoutId = 'tabs-biomakers-underline',
	btnSwithLayoutId = 'pill-tab-biomakers',
	isOpen: isOpenSection,
	toggleAccordion,
	index: sectionIndex,
	// biomarkersData = membershipdata.biomarkers,
}) => {
	const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
	const [selectedGenderIdx, setSelectedGenderIdx] = useState<number>(0);
	const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
	// const tabs: { title: string; key: { [key: string]: string; }; }[] = biomarkersData.tabs;
	// const genderOptions = biomarkersData.genderOptions;

	const renderButtonSwitchGender = () => {
		const SelectedIcon = genderOptions[selectedGenderIdx].icon;

		return (
			<div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-grey-50'>
				<div className='relative flex items-center h-full'>
					{ genderOptions.map((category, categoryIdx) => {
						const Icon = category.icon;

						return (
							<button
								key={ category.title }
								aria-label={ category.title }
								onClick={ () => setSelectedGenderIdx(categoryIdx) }
								className={ clsxm(
									'text-sm !leading-normal h-full flex items-center justify-center gap-[9px] text-grey-400 cursor-pointer whitespace-nowrap',
									categoryIdx === 0
										? 'pl-7 pr-6 w-[190px]'
										: 'pl-7 pr-6 w-[206px]'
								) }
							>
								{ Icon ? (
									<Icon className='text-blue-primary flex-shrink-0' />
								) : null }
								{ category.title }
							</button>
						);
					}) }
				</div>

				<motion.span
					layoutId={ btnSwithLayoutId }
					transition={ { type: 'spring', duration: 0.75 } }
					className={ clsxm(
						'bg-primary cursor-pointer rounded-[100px] font-medium text-white whitespace-nowrap shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] text-sm !leading-normal flex items-center justify-center gap-[9px] h-[37px] top-1.5 absolute',
						selectedGenderIdx === 0
							? 'left-1.5 w-[190px] pl-7 pr-6'
							: 'left-[198px] w-[206px] pl-7 pr-6'
					) }
				>
					{ SelectedIcon ? (
						<SelectedIcon className='text-white flex-shrink-0' />
					) : null }
					{ genderOptions[selectedGenderIdx].title }
				</motion.span>
			</div>
		);
	};

	const renderTabs = () => {
		return (
			<div className='flex gap-[67px] max-lg:hidden'>
				{ tabs.map((tab, index) => {
					return (
						<Tab
							key={ index }
							onClick={ () => setSelectedTabIdx(index) }
							selected={ selectedTabIdx === index }
							title={ tab.title }
							layoutId={ tabLayoutId }
						/>
					);
				}) }
			</div>
		);
	};

	const renderFilter = () => {
		const selectedGender = genderOptions[selectedGenderIdx].shortLabel;
		const selectedCategory = tabs[selectedTabIdx].title;

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
						{ selectedGender }/{ selectedCategory }
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
						{ genderOptions.map((option, optionIdx) => {
							return (
								<div key={ `gender-${optionIdx}` }>
									<input
										id={ option.value }
										name='gender'
										type='radio'
										onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
											setSelectedGenderIdx(+ e.target.value);
										} }
										value={ optionIdx }
										checked={ optionIdx === selectedGenderIdx }
									/>
									<label
										htmlFor={ option.value }
										className={ clsxm(
											'text-sm !leading-normal',
											selectedGenderIdx === optionIdx
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
						{ tabs.map((option, optionIdx) => {
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
										{ option.title }
									</label>
								</div>
							);
						}) }
					</div>
				</motion.div>
			</motion.div>
		);
	};

	const renderBiomarkersList = () => {
		const genderVal = genderOptions[selectedGenderIdx].value;
		const selectedGenderKey = tabs[selectedTabIdx].key[genderVal];
		const filteredBiomarkersData =
      biomarkersData.data.find(el => el.key === selectedGenderKey)?.list ??
      [];

		return (
			<BiomarkersList
				list={ filteredBiomarkersData }
				dataKey={ `${selectedGenderIdx}-${selectedTabIdx}` }
			/>
		);
	};

	return (
		<div className={ clsxm('rounded-19px mt-6 lg:-mt-[19px]', wrapperClassName) }>
			<div className='w-full flex flex-col '>
				<div className='bg-[#F5FBFF] lg:border lg:border-t-0 border-[#D6EDFA] max-lg:rounded-t-[19px] rounded-b-[19px] px-3.5 lg:px-[42px] py-3.5 lg:pb-[19px] lg:pt-[38px]'>
					<button
						onClick={ () => toggleAccordion(sectionIndex) }
						className='focus:ring-0 w-full flex flex-col focus:outline-none'
					>
						<span className='flex w-full text-primary justify-between items-center text-sm sm:text-2xl lg:text-[28px] text-left font-medium sm:!leading-normal gap-3'>
							<span className='max-lg:hidden'>
                View “Longeviti Panel” Biomarkers
							</span>
							<span className='lg:hidden'>Compare Tested Biomarkers</span>
							<ChevronDown
								className={ clsxm(
									'w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 text-primary ease-out transform duration-200',
									isOpenSection && 'rotate-180'
								) }
							/>
						</span>
						<p
							className={ clsxm(
								'transform transition-opacity ease-in-out mt-5px lg:mt-1 text-grey-300 text-xs lg:text-lg !leading-normal',
								isOpenSection
									? 'opacity-0 duration-[50ms]'
									: 'opacity-100 delay-500 duration-500'
							) }
						>
							{ biomarkersData.expandText }
						</p>
					</button>
					<AnimatePresence mode='wait'>
						{ isOpenSection && (
							<motion.div
								initial={ { opacity: 0, y: -30, height: 0 } }
								animate={ { opacity: 1, y: 0, height: 'fit-content' } }
								exit={ { opacity: 0, y: -30, height: 0 } }
								transition={ { duration: 0.5, ease: 'easeInOut' } }
							>
								<div className='flex flex-col'>
									<div className='hidden lg:flex w-fit mb-[39px]'>
										{ renderButtonSwitchGender() }
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
		</div>
	);
};

export default BiomarkersSection;
