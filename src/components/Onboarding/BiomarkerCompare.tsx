'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { homeData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import QuestionTooltip from '../Home/QuestionTooltip';
import {
	Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger, SelectValue
} from '../Select';

import { CheckIcon, FeatureIcon } from './PricingPlans';

type BiomarkerCompareProps = {
	open: boolean;
	compareLabel?: React.ReactNode;
	footer?: React.ReactNode;
};

type BiomarkerTable = {
	title: string;
	description?: string;
	essential?: boolean;
	comprehensive?: boolean;
	ultimateMale?: boolean;
	ultimateFemale?: boolean;
};

type Column = {
	title: string;
	selector: keyof BiomarkerTable;
};

const biomarkersTable = homeData.biomarkersTable.slice(1) as BiomarkerTable[];
const columns: Column[] = [
	{
		title: 'Biomarker',
		selector: 'title'
	},
	{
		title: 'Essentials Panel',
		selector: 'essential'
	},
	{
		title: 'Comprehensive Panel',
		selector: 'comprehensive'
	},
	{
		title: 'Ultimate Men’s Panel',
		selector: 'ultimateMale'
	},
	{
		title: 'Ultimate Women’s Panel',
		selector: 'ultimateFemale'
	}
];

const BiomarkerCompare: React.FC<BiomarkerCompareProps> = ({ open, compareLabel, footer }) => {
	const [activeDropdown, setActiveDropdown] = useState<Column>(columns[1]);

	const renderTableDataItem = (row: BiomarkerTable, column: Column) => {
		const text = row[column.selector];

		if (column.selector === 'title') {
			return (
				<span className='items-center gap-x-1.5 border-r border-[#E9EBEC] flex'>
					{ !!row.description &&
						<QuestionTooltip
							text={ row.description }
							className='!max-w-[240px] text-left max-sm:p-2'
							icon={ <FeatureIcon className='inline-block flex-shrink-0 w-[15px] h-[15px]' /> }
						/> }
					{ text }
				</span>
			);
		}

		if (text === true) {
			return (
				<span className='flex justify-end lg:justify-center'>
					<CheckIcon className='w-6 h-6' />
				</span>
			);
		}

		return (
			<span className='flex justify-end lg:justify-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z'
						fill='#181A1C'
						fillOpacity='0.1' />
					<rect
						x='6'
						y='11'
						width='12'
						height='2'
						rx='1'
						fill='#181A1C'
						fillOpacity='0.4' />
				</svg>
			</span>
		);
	};

	const getBiomarkersTableFiltered = () => {
		const biomarkersTableFiltered = biomarkersTable.map(item => {
			let arrItem: BiomarkerTable = { title: item.title };

			for (const key in item) {
				if (key === activeDropdown.selector) {
					arrItem = {
						...arrItem,
						description: item.description,
						[key]: item[key]
					};
				}
			}

			return arrItem;
		});

		return biomarkersTableFiltered;
	};

	const getColumnsFiltered = () => {
		return columns.filter(column => column.selector === activeDropdown.selector || column.selector === 'title');
	};

	const renderTableRowList = (data: BiomarkerTable[], dataColumns: Column[]) => {
		return (
			<>
				{ data.map((row, rowIdx) => {
					return (
						<tr
							key={ rowIdx }
							className='even:bg-blue-1/10'>
							{ dataColumns.map((column, columnIdx) => {
								return (
									<td
										key={ `${ rowIdx }-${ columnIdx }` }
										className='lg:whitespace-nowrap px-4 py-3 text-sm text-primary text-left font-semibold -tracking-[0.036em]'>
										{ renderTableDataItem(row, column) }
									</td>
								);
							}) }
						</tr>
					);
				}) }
			</>
		);
	};

	const renderDropdownSelectColumn = () => {
		const options = columns.slice(1);

		return (
			<Select
				value={ activeDropdown.selector }
				onValueChange={ (value: string) => {
					const activeDropdownChanged = columns.find(col => col.selector === value);
					if (activeDropdownChanged) {
						setActiveDropdown(activeDropdownChanged);
					}
				} }
			>
				<SelectTrigger
					aria-label={ activeDropdown.selector }
					className='w-full font-Poppins leading-normal text-primary rounded-[10px] flex justify-between items-center py-2.5 px-4 bg-primary/5'>
					<SelectValue>
						<div className='flex flex-col text-left'>
							<p className='text-sm font-semibold'>
								{ activeDropdown?.title }
							</p>
							<p className='text-[10px] font-medium'>
								{ activeDropdown?.title }
							</p>
						</div>
					</SelectValue>
				</SelectTrigger>
				<SelectContent className=' bg-grey-secondary text-sm font-BRSonoma text-primary z-10 rounded-[10px] max-h-[200px]'>
					<SelectGroup className='overflow-x-hidden text-start'>
						{ options.map((option, optionIdx) => (
							<div
								key={ optionIdx }>
								<SelectItem
									key={ optionIdx }
									value={ option.selector }
									className='data-[state=unchecked]:font-medium cursor-pointer data-[state=checked]:font-semibold text-primary data-[highlighted]:bg-white py-2.5 px-4 text-xs'
								>{ option.title }</SelectItem>
								{ optionIdx < options.length - 1 && (
									<SelectSeparator />
								) }
							</div>
						)) }
					</SelectGroup>
				</SelectContent>
			</Select>
		);
	};

	return (
		<>
			{ open && (
				<div className='sticky lg:hidden top-[52px] inset-x-0 w-full bg-white p-2.5 z-[99]'>
					{ renderDropdownSelectColumn() }
				</div>
			) }

			<AnimatePresence>
				{ open
					? (
						<motion.div
							variants={ {
								initial: {
									opacity: 0
								},
								visible: {
									opacity: 1,
									transition: {
										duration: .25,
										ease: [.15, 1.14, .88, .98]
									}
								},
								exit: {
									opacity: 0,
									transition: {
										duration: .25,
										ease: [.15, 1.14, .88, .98]
									}
								}
							} }
							initial='initial'
							animate='visible'
							exit='exit'
							className='lg:absolute w-full h-full lg:inset-0 lg:z-[90] flex flex-col bg-grey-background lg:rounded-[20px]'
						>
							<div className='flex-1 h-full flex flex-col items-center w-full text-center max-w-6xl mx-auto'>
								<div className='lg:py-[2.2vh] max-lg:hidden'>
									{ compareLabel }
								</div>
								<motion.div
									variants={ {
										initial: {
											opacity: 0,
											y: 30
										},
										visible: {
											opacity: 1,
											y: 0,
											transition: {
												delay: .25,
												opacity: {
													duration: .25,
													ease: [.15, 1.14, .88, .98]
												},
												y: {
													duration: .5,
													ease: [.15, 1.14, .88, .98]
												}
											}
										},
										exit: {
											opacity: 0,
											y: 30,
											transition: {
												opacity: {
													duration: .25,
													ease: [.15, 1.14, .88, .98]
												},
												y: {
													duration: .5,
													ease: [.15, 1.14, .88, .98]
												}
											}
										}
									} }
									initial='initial'
									animate='visible'
									exit='exit'
									className='flex flex-col items-center w-full h-full lg:overflow-y-auto no-scrollbar'>
									<div className='flow-root w-full'>
										<div className='overflow-x-hidden'>
											<div className='inline-block w-full align-middle rounded-lg overflow-hidden'>
												<table className='w-full divide-y divide-[#E9EBEC]'>
													<thead className='bg-white font-BRSonoma max-lg:hidden'>
														<tr>
															{ columns.map((column, columnIdx) => {
																return (
																	<th
																		key={ columnIdx }
																		scope='col'
																		className='px-4 py-2.5 text-left text-base font-bold text-primary -tracking-[0.025em]'>
																		<span className={ clsxm('w-full flex', columnIdx === 0 ? 'border-r border-[#E9EBEC]' : 'justify-center') }>
																			{ column.title }
																		</span>
																	</th>
																);
															}) }
														</tr>
													</thead>
													<tbody className='bg-white/50 divide-y divide-[#E9EBEC] font-Poppins max-lg:hidden'>
														{ renderTableRowList(biomarkersTable, columns) }
													</tbody>
													<tbody className='bg-white/50 font-Poppins lg:hidden'>
														{ renderTableRowList(getBiomarkersTableFiltered(), getColumnsFiltered()) }
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</motion.div>
								{ footer }
							</div>
						</motion.div>
					)
					: null }
			</AnimatePresence>
		</>
	);
};

export default BiomarkerCompare;