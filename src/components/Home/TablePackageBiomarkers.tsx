import React from 'react';

import { homeData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { CheckBlue, HelpIcons, Minus } from '../Icons';

import QuestionTooltip from './QuestionTooltip';

type TablePackageBiomarkersItem = {
  classname?: string;
};
const TablePackageBiomarkers: React.FC<TablePackageBiomarkersItem> = ({ classname }) => {
	const tablePackage = homeData.biomarkersTable;

	return (
		<div className={ clsxm(
			'relative overflow-x-auto',
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
									{ items.essential === true ? <CheckBlue /> : items.essential === false ? <Minus/> : <div className='flex items-center gap-2'><p>{ items.essential }</p><HelpIcons /></div> }
								</div>
							</td>
							<td className='p-5'>
								<div className='flex justify-center'>
									{ items.comprehensive === true ? <CheckBlue /> : items.comprehensive === false ? <Minus/> : <div className='flex items-center gap-2'><p>{ items.comprehensive }</p><HelpIcons /></div> }
								</div>
							</td>
							<td className='p-5'>
								<div className='flex justify-center'>
									{ items.ultimateMale === true ? <CheckBlue /> : items.ultimateMale === false ? <Minus/> : <div className='flex items-center gap-2'><p>{ items.ultimateMale }</p><HelpIcons /></div> }
								</div>
							</td>
							<td className='p-5'>
								<div className='flex justify-center'>
									{ items.ultimateFemale === true ? <CheckBlue /> : items.ultimateFemale === false ? <Minus/> : <div className='flex items-center gap-2'><p>{ items.ultimateFemale }</p><HelpIcons /></div> }
								</div>
							</td>
						</tr>
					)) }
				</tbody>
			</table>
		</div>

	);
};

export default TablePackageBiomarkers;
