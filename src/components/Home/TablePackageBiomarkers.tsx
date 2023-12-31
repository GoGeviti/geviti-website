import React from 'react';

import { homeData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '../Accordion';
import { CheckBlue, ChevronDown, HelpIcons, Minus } from '../Icons';

import QuestionTooltip from './QuestionTooltip';

type TablePackageBiomarkersItem = {
	classname?: string;
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
	count: string;
};

const columns: Column[] = [
	{
		title: 'Essential Health Check',
		selector: 'essential',
		count: '(39+)'
	},
	{
		title: 'Comprehensive Health Dive',
		selector: 'comprehensive',
		count: '(50+)'
	},
	{
		title: 'Ultimate Mens Health Assessment',
		selector: 'ultimateMale',
		count: '(58+)'
	},
	{
		title: 'Ultimate Womens Health Assessment',
		selector: 'ultimateFemale',
		count: '(58+)'
	}
];

const TablePackageBiomarkers: React.FC<TablePackageBiomarkersItem> = ({ classname }) => {
	const tablePackage = homeData.biomarkersTable as BiomarkerTable[];

	return (
		<>
			<div className={ clsxm(
				'relative overflow-x-auto max-lg:hidden',
				classname
			) }>
				<table className='w-full text-sm text-left text-gray-500 table-fixed'>
					<tbody>
						<tr
							className='font-Poppins text-sm font-medium text-primary'>
							<th
								scope='row'
								className='p-4 font-medium whitespace-nowrap'>
								<div className='flex items-center gap-2' />
							</th>
							<td className='p-5'>
								<div className='flex justify-center text-center'>
									Essential Health Check
								</div>
							</td>
							<td className='p-5'>
								<div className='flex justify-center text-center'>
									Comprehensive <br />Health Dive
								</div>
							</td>
							<td className='p-5'>
								<div className='flex justify-center text-center'>
									Ultimate Health<br /> Assessment (male)
								</div>
							</td>
							<td className='p-5'>
								<div className='flex justify-center text-center'>
									Ultimate Health<br /> Assessment (female)
								</div>
							</td>
						</tr>
						{ tablePackage.map(items => (
							<tr
								key={ items.title }
								className='odd:bg-grey-background even:bg-table-light bg-grey-background border-b font-Poppins text-sm font-medium text-primary'>
								<th
									scope='row'
									className='p-4 font-medium whitespace-nowrap'>
									<div className='flex items-center gap-2'>
										<p>{ items.title }</p>
										{ !!items.description && <QuestionTooltip text={ items.description } /> }
									</div>
								</th>
								<td className='p-5'>
									<div className='flex justify-center'>
										{ items.essential === true ? <CheckBlue /> : items.essential === false ? <Minus /> : <div className='flex items-center gap-2'><p>{ items.essential }</p><HelpIcons /></div> }
									</div>
								</td>
								<td className='p-5'>
									<div className='flex justify-center'>
										{ items.comprehensive === true ? <CheckBlue /> : items.comprehensive === false ? <Minus /> : <div className='flex items-center gap-2'><p>{ items.comprehensive }</p><HelpIcons /></div> }
									</div>
								</td>
								<td className='p-5'>
									<div className='flex justify-center'>
										{ items.ultimateMale === true ? <CheckBlue /> : items.ultimateMale === false ? <Minus /> : <div className='flex items-center gap-2'><p>{ items.ultimateMale }</p><HelpIcons /></div> }
									</div>
								</td>
								<td className='p-5'>
									<div className='flex justify-center'>
										{ items.ultimateFemale === true ? <CheckBlue /> : items.ultimateFemale === false ? <Minus /> : <div className='flex items-center gap-2'><p>{ items.ultimateFemale }</p><HelpIcons /></div> }
									</div>
								</td>
							</tr>
						)) }
					</tbody>
				</table>
			</div>

			<div className={ clsxm('lg:hidden', classname) }>
				<Accordion
					type='single'
					collapsible
					className='w-full flex flex-col gap-y-[11px]'>
					{ columns.map((column, columnIdx) => {
						return (
							<AccordionItem
								key={ columnIdx }
								value={ column.selector }
								className='!border-0'>
								<AccordionTrigger className='px-7 py-[23px] flex justify-between gap-1 bg-white data-[state=open]:rounded-t-lg data-[state=closed]:rounded-lg [&[data-state=open]>svg]:rotate-180'>
									<span className='text-left text-sm font-medium leading-5 font-Poppins text-primary'>
										{ column.title } <span className='inline-block text-grey-primary'>{ column.count }</span>
									</span>

									<ChevronDown className='transition-transform duration-200 ease-out text-primary w-[19px] h-[19px] flex-shrink-0' />
								</AccordionTrigger>
								<AccordionContent>
									{ tablePackage.map((data, dataIdx) => {
										const value = data[column.selector];
										return (
											<div
												key={ dataIdx }
												className={ clsxm('flex justify-between gap-1 py-4 px-7', dataIdx % 2 === 0 ? 'bg-grey-secondary' : 'bg-white') }>
												<span className='text-sm font-Poppins font-medium leading-[96.114%] text-primary'>
													<span className='pr-[3px]'>{ data.title }</span>
													<span className='inline-block'>
														{ !!data.description &&
															<QuestionTooltip
																text={ data.description }
																className='!max-w-[240px] text-left max-sm:p-2'
																icon={ (
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		width='14'
																		height='13'
																		viewBox='0 0 14 13'
																		fill='none'>
																		<g clipPath='url(#clip0_2793_1423)'>
																			<path
																				d='M5.46182 5.21053C5.5819 4.86918 5.81891 4.58134 6.13088 4.39799C6.44285 4.21464 6.80965 4.14762 7.1663 4.20879C7.52294 4.26997 7.84644 4.45539 8.07947 4.73222C8.31251 5.00905 8.44005 5.35943 8.43951 5.72128C8.43951 6.74279 6.90725 7.25354 6.90725 7.25354M6.94811 9.29656H6.95322M12.0556 6.74279C12.0556 9.56361 9.76893 11.8503 6.94811 11.8503C4.1273 11.8503 1.84058 9.56361 1.84058 6.74279C1.84058 3.92198 4.1273 1.63525 6.94811 1.63525C9.76893 1.63525 12.0556 3.92198 12.0556 6.74279Z'
																				stroke='#919B9F'
																				strokeWidth='1.02151'
																				strokeLinecap='round'
																				strokeLinejoin='round' />
																		</g>
																		<defs>
																			<clipPath id='clip0_2793_1423'>
																				<rect
																					width='12.2581'
																					height='12.2581'
																					fill='white'
																					transform='translate(0.819092 0.613647)' />
																			</clipPath>
																		</defs>
																	</svg>
																) }
															/> }
													</span>
												</span>
												<div className='flex-shrink-0 w-6 flex justify-center'>
													{ value === true ? <CheckBlue className='!w-6 !h-6' /> : <Minus className='!w-[19px] !h-[2]' /> }
												</div>
											</div>
										);
									}) }
								</AccordionContent>
							</AccordionItem>
						);
					}) }
				</Accordion>
			</div>
		</>
	);
};

export default TablePackageBiomarkers;
