'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import membershipdata from '@/constant/data/membership';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import QuestionTooltip from '../Home/QuestionTooltip';
import { ChevronDown, Filter, InfoBlue } from '../Icons';

type TabProps = {
	selected: boolean;
	title: string;
	onClick?: () => void;
};

const Tab: React.FC<TabProps> = ({ selected, title, onClick }) => {
	return (
		<div className='relative'>
			<button
				onClick={ onClick }
				className='relative z-0 py-1.5 border-b-2 border-transparent hover:border-blue-primary/50'
			>
				<span
					className={ clsxm('text-lg !leading-normal transition-colors', selected ? 'text-primary font-medium' : 'text-grey-300') }
				>
					{ title }
				</span>
			</button>
			{ selected && (
				<motion.span
					layoutId='tabs-biomakers-underline'
					className='absolute bottom-0 left-0 right-0 z-10 h-0.5 bg-blue-primary'
				/>
			) }
		</div>
	);
};

const biomarkersData = membershipdata.biomarkers;
const tabs: { title: string; key: { [key: string]: string; }; }[] = biomarkersData.tabs;
const genderOptions = biomarkersData.genderOptions;

const BioMakersSection: React.FC = () => {
	const [isOpenSection, setIsOpenSection] = useState<boolean>(true);
	const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);
	const [selectedGenderIdx, setSelectedGenderIdx] = useState<number>(0);
	const [limit, setLimit] = useState<number>(13);
	const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const toggleDropdown = () => {
		setIsOpenSection(!isOpenSection);
		setLimit(13);
	};

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
									categoryIdx === 0 ? 'pl-7 pr-6 w-[190px]' : 'pl-7 pr-6 w-[206px]'
								) }>
								<Icon className='flex-shrink-0' />
								{ category.title }
							</button>
						);
					}) }
				</div>

				<motion.span
					layoutId='pill-tab-biomakers'
					transition={ { type: 'spring', duration: 0.75 } }
					className={ clsxm(
						'bg-primary cursor-pointer rounded-[100px] font-medium text-white whitespace-nowrap shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] text-sm !leading-normal flex items-center justify-center gap-[9px] h-[37px] top-1.5 absolute',
						selectedGenderIdx === 0
							? 'left-1.5 w-[190px] pl-7 pr-6'
							: 'left-[198px] w-[206px] pl-7 pr-6'
					) }
				>
					<SelectedIcon className='text-blue-primary flex-shrink-0' />
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
				transition={ { ease: 'easeInOut', duration: .5 } }
				className='lg:hidden w-full rounded-[20px] p-1.5 border border-grey-50'
			>
				<div className='flex items-center justify-between gap-2 w-full relative z-10'>
					<span className='text-xs !leading-normal text-primary w-full px-3'>{ selectedGender }/{ selectedCategory }</span>

					<button
						onClick={ () => setIsOpenFilter(prev => !prev) }
						className='focus:ring-0 focus:outline-none bg-primary py-2 px-3 rounded-full text-white flex items-center justify-center gap-1.5 text-xs !leading-normal'>
						<Filter className='flex-shrink-0' />
						Filter
					</button>
				</div>

				<motion.div
					initial={ false }
					animate={ {
						opacity: isOpenFilter ? 1 : 0,
						height: isOpenFilter ? 'fit-content' : 0,
						y: isOpenFilter ? 0 : -20
					} }
					transition={ { ease: 'easeInOut', duration: .3 } }
					className='pt-[31px] pb-1 px-3 divide-y divide-grey-50'>
					<div className='pb-3.5 flex flex-col gap-y-3.5'>
						{ genderOptions.map((option, optionIdx) => {
							return (
								<div key={ `gender-${ optionIdx }` }>
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
											selectedGenderIdx === optionIdx ? 'text-primary' : 'text-grey-400'
										) }>
										{ option.title }
									</label>
								</div>
							);
						}) }
					</div>
					<div className='pt-3.5 flex flex-col gap-y-3.5'>
						{ tabs.map((option, optionIdx) => {
							return (
								<div key={ `cat-${ optionIdx }` }>
									<input
										id={ `cat-${ optionIdx }` }
										name='category'
										type='radio'
										onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
											setSelectedTabIdx(+ e.target.value);
										} }
										value={ optionIdx }
										checked={ optionIdx === selectedTabIdx }
									/>
									<label
										htmlFor={ `cat-${ optionIdx }` }
										className={ clsxm(
											'text-sm !leading-normal',
											selectedTabIdx === optionIdx ? 'text-primary' : 'text-grey-400'
										) }>
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

	return (
		<div className='lg:px-3 font-Poppins'>
			<div className='bg-white rounded-19px'>
				<div className='container-center pt-6 pb-[42px] lg:py-[62px] flex flex-col'>
					<button
						onClick={ toggleDropdown }
						className='focus:ring-0 focus:outline-none flex w-full lg:w-auto text-primary justify-between lg:justify-start font-medium items-center text-sm lg:text-[28px] !leading-normal gap-3'
					>
						<span>{ biomarkersData.title }</span>

						<motion.span
							variants={ {
								open: {
									rotate: '180deg',
								},
								closed: {
									rotate: '0deg',
								},
							} }
							animate={ isOpenSection ? 'open' : 'closed' }
							transition={ { ease: 'easeOut', duration: .2 } }
						>
							<ChevronDown className='w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 text-primary' />
						</motion.span>
					</button>
					<p className='mt-5px lg:mt-1 text-grey-300 text-xs lg:text-lg !leading-normal'>{ biomarkersData.expandText }</p>

					<AnimatePresence mode='wait'>
						{ isOpenSection && (
							<motion.div
								initial={ { opacity: 0, y: -30, height: 0 } }
								animate={ { opacity: 1, y: 0, height: 'fit-content' } }
								exit={ { opacity: 0, y: -30, height: 0 } }
								transition={ { duration: 0.5, ease: 'easeInOut' } }
							>
								<div className='flex flex-col mt-6 lg:mt-[30px]'>
									<div className='hidden lg:flex w-fit mb-[39px]'>
										{ renderButtonSwitchGender() }
									</div>
									{ renderTabs() }
									{ renderFilter() }

									<AnimatePresence mode='wait'>
										{ biomarkersData.data.map((option, index) => {
											const genderVal = genderOptions[selectedGenderIdx].value;
											const selected = tabs[selectedTabIdx].key[genderVal];

											if (selected === option.key) {
												const list = isMobile
													? option.list.slice(0, limit)
													: option.list;

												return (
													<motion.div
														initial={ { opacity: 0, y: 10 } }
														animate={ { opacity: 1, y: 0 } }
														exit={ { opacity: 0, y: 10 } }
														transition={ { ease: 'easeInOut', duration: .25 } }
														key={ index }
													>
														<ul className='pt-[42px] lg:pt-[63px] flex flex-wrap gap-y-[27px] gap-x-[27px] lg:gap-x-6 lg:gap-y-[29px]'>
															{ list.map((item, itemIdx) => {
																return (
																	<li
																		key={ itemIdx }
																		className='text-primary flex gap-2 text-sm !leading-6 border bg-[#F2FAFF] py-2 px-3.5 rounded-full border-[#C8EAFF] items-center cursor-pointer'
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

														{ list.length < option.list.length && (
															<button
																className='lg:hidden mt-[42px] focus:ring-0 focus:outline-none relative w-full p-1.5 border border-grey-50 flex items-center justify-center gap-2 hover:bg-grey-50 rounded-[20px]'
																onClick={ () => setLimit(prevLimit => prevLimit + 10) }
															>
																<svg
																	width='24'
																	height='24'
																	viewBox='0 0 24 24'
																	fill='none'
																	xmlns='http://www.w3.org/2000/svg'
																	className='flex-shrink-0'>
																	<path
																		d='M12 6V3M16.25 7.75L18.4 5.6M18 12H21M16.25 16.25L18.4 18.4M12 18V21M7.75 16.25L5.6 18.4M6 12H3M7.75 7.75L5.6 5.6'
																		stroke='#99D4FF'
																		strokeWidth='2'
																		strokeLinecap='round'
																		strokeLinejoin='round' />
																</svg>
																<span className='text-grey-400 text-sm !leading-normal -tracking-0.04em'>Loading More</span>
															</button>
														) }
													</motion.div>
												);
											}
											return undefined;
										}) }
									</AnimatePresence>
								</div>
							</motion.div>
						) }
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default BioMakersSection;
