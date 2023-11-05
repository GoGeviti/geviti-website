import React from 'react';

import { homeData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { CheckBlue, HelpIcons, Minus } from '../Icons';

import QuestionTooltip from './QuestionTooltip';

type TablePackageItem = {
  classname?: string;
};
const TablePackage: React.FC<TablePackageItem> = ({ classname }) => {
	const tablePackage = homeData.tablePackage;
	return (
	
		<div className={ clsxm(
			'relative overflow-x-auto',
			classname
		) }>
			<table className='w-full text-sm text-left text-gray-500 table-fixed'>
				<tbody>
					{ tablePackage.map(items => (
						<tr
							key={ items.title }
							className='even:bg-grey-background odd:bg-table-light bg-table-light border-b font-Poppins text-sm font-medium text-primary'>
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
									{ items.ultimate === true ? <CheckBlue /> : items.ultimate === false ? <Minus/> : <div className='flex items-center gap-2'><p>{ items.ultimate }</p><HelpIcons /></div> }
								</div>
							</td>
						</tr>
					)) }
				</tbody>
			</table>
		</div>

	);
};

export default TablePackage;
