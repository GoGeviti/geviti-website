'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import blueCheckCircle from '@/assets/precheckout/blue-check-circle.svg';
import QuestionTooltip from '@/components/Home/QuestionTooltip';
import { homeData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 100px);
  background: #fff;
  overflow-y: auto;
  width: 1240px;
  max-width: 90%;
`;

const TableHeading = styled.span`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;

const RowHeading = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

import { HelpIcons, Minus } from '../Icons';

const PreCheckoutBiomarkersTable = () => {
	const tablePackage = homeData.biomarkersTable;
	return (
		<TableWrapper>
			<div className={ clsxm('relative overflow-x-auto') }>
				<table className='w-full text-sm text-left text-gray-500 table-fixed'>
					<tbody>
						<tr className='bg-white font-BRSonoma text-sm font-medium text-primary border-b sticky top-0'>
							<th
								scope='row'
								className='p-4 font-medium whitespace-nowrap'>
								<div className='flex items-center gap-2' />
							</th>
							<td className='p-5'>
								<TableHeading className='flex justify-center text-center'>
                  Essential Health Check
								</TableHeading>
							</td>
							<td className='p-5'>
								<TableHeading className='flex justify-center text-center'>
                  Comprehensive Panel
								</TableHeading>
							</td>
							<td className='p-5'>
								<TableHeading className='flex justify-center text-center'>
                  Ultimate Men&apos;s Panel
								</TableHeading>
							</td>
							<td className='p-5'>
								<TableHeading className='flex justify-center text-center'>
                  Ultimate Women&apos;s Panel
								</TableHeading>
							</td>
						</tr>
						{ tablePackage.slice(1).map(items => (
							<tr
								key={ items.title }
								className='odd:bg-[#F9F9F9] even:bg-[#F0F6FA] border-b font-Poppins text-sm font-medium text-primary'
							>
								<th
									scope='row'
									className='px-4 py-4 font-medium whitespace-nowrap'
								>
									<div className='flex items-center gap-2'>
										{ !!items.description && (
											<QuestionTooltip text={ items.description } />
										) }
										<RowHeading>{ items.title }</RowHeading>
									</div>
								</th>
								<td className='px-5'>
									<div className='flex justify-center'>
										{ items.essential === true ? (
											<Image
												src={ blueCheckCircle }
												width={ 23 }
												height={ 23 }
												alt='Blue check circle'
												unoptimized
											/>
										) : items.essential === false ? (
											<Minus />
										) : (
											<div className='flex items-center gap-2'>
												<p>{ items.essential }</p>
												<HelpIcons />
											</div>
										) }
									</div>
								</td>
								<td className='px-5'>
									<div className='flex justify-center'>
										{ items.comprehensive === true ? (
											<Image
												src={ blueCheckCircle }
												width={ 23 }
												height={ 23 }
												alt='Blue check circle'
												unoptimized
											/>
										) : items.comprehensive === false ? (
											<Minus />
										) : (
											<div className='flex items-center gap-2'>
												<p>{ items.comprehensive }</p>
												<HelpIcons />
											</div>
										) }
									</div>
								</td>
								<td className='px-5'>
									<div className='flex justify-center'>
										{ items.ultimateMale === true ? (
											<Image
												src={ blueCheckCircle }
												width={ 23 }
												height={ 23 }
												alt='Blue check circle'
												unoptimized
											/>
										) : items.ultimateMale === false ? (
											<Minus />
										) : (
											<div className='flex items-center gap-2'>
												<p>{ items.ultimateMale }</p>
												<HelpIcons />
											</div>
										) }
									</div>
								</td>
								<td className='px-5'>
									<div className='flex justify-center'>
										{ items.ultimateFemale === true ? (
											<Image
												src={ blueCheckCircle }
												width={ 23 }
												height={ 23 }
												alt='Blue check circle'
												unoptimized
											/>
										) : items.ultimateFemale === false ? (
											<Minus />
										) : (
											<div className='flex items-center gap-2'>
												<p>{ items.ultimateFemale }</p>
												<HelpIcons />
											</div>
										) }
									</div>
								</td>
							</tr>
						)) }
					</tbody>
				</table>
			</div>
		</TableWrapper>
	);
};

export default PreCheckoutBiomarkersTable;
