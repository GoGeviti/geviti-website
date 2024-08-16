'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import pricingData from '@/constant/data/pricing';
import clsxm from '@/helpers/clsxm';

import { ChevronDown } from '../Icons';

const pricingComparisonData = pricingData.pricingComparison;

type HeaderID = 'free' | 'basic' | 'premium';
// type HeaderData = {
// 	id: string;
// 	title: string;
// 	subtitle: string;
// 	geviti: boolean;
// };

// const PricingAccordion: React.FC<{
// 	title: string;
// 	subtitle?: string;
// 	children: React.ReactNode;
// 	isLastIdx?: boolean;
// }> = ({
// 	title,
// 	children,
// 	isLastIdx
// }) => {
// 	const [open, setOpen] = useState<boolean>(false);

// 	return (
// 		<motion.div
// 			animate={ open ? 'open' : 'closed' }
// 			className={ clsxm(!isLastIdx && 'border-b border-grey-100', 'font-Poppins') }
// 		>
// 			<div
// 				onClick={ () => setOpen(pv => !pv) }
// 				className='py-3 w-full flex justify-between gap-2'
// 			>
// 				<span className='text-sm !leading-normal font-medium text-left text-primary'>
// 					{ title }{ ' ' }
// 					{ /* <span className='text-grey-primary font-medium text-[10px] !leading-[15px]'>{ subtitle }</span> */ }
// 				</span>
// 				<motion.span
// 					variants={ {
// 						open: {
// 							rotate: '180deg',
// 						},
// 						closed: {
// 							rotate: '0deg',
// 						},
// 					} }
// 					transition={ { ease: 'easeInOut', duration: .3 } }
// 					className='w-5'
// 				>
// 					<ChevronDown className='w-5 h-5 text-primary' />
// 				</motion.span>
// 			</div>
// 			<motion.div
// 				initial={ false }
// 				animate={ { height: open ? 'fit-content' : '0px' } }
// 				className='overflow-hidden w-full'
// 			>
// 				{ children }
// 			</motion.div>
// 		</motion.div>
// 	);
// };

const PricingComparison: React.FC = () => {

	const renderHeading = (text: string) => {
		return (
			<h5 className='text-[21.505px] !leading-normal text-[#272833] -tracking-0.04em !font-semibold whitespace-nowrap'>{ text }</h5>
		);
	};

	const headerTitle = (id: HeaderID) => {
		const headers = pricingComparisonData.headers;
		return headers.find(header => header.id === id)?.title ?? 'Plan'
	}

	const renderListMobile = () => {
		return (
			<div className={ clsxm(
				'flex flex-col gap-y-[42px]'
			) }>
				{ pricingComparisonData.list.map((el, elIdx) => {
					return (
						<div
							key={ `list-${ elIdx }` }
							className='w-full flex flex-col gap-y-1 text-primary'>
							<span className='text-base !leading-6 font-semibold'>
								{ el.name }
							</span>
							<div className='text-lg !leading-7 flex justify-between gap-1'>
								<h5>{ headerTitle('free') }</h5>
								<span className='text-right'>{ el.free }</span>
							</div>
							<div className='text-lg !leading-7 flex justify-between gap-1'>
								<h5>{ headerTitle('premium') }</h5>
								<span className='text-right'>{ el.premium }</span>
							</div>
						</div>
					);
				}) }
			</div>
		);
	};

	const renderContentMobile = () => {
		return (
			<div className='lg:hidden mt-6 w-full border border-blue-primary bg-blue-alice rounded-20px py-6 px-3'>
				{ renderListMobile() }
			</div>
		);
	};

	const [isOpen, setIsOpen] = useState(true)

	return (
		<div className='lg:px-3'>
			<div className='container-center'>
				<AnimatePresence mode='wait' >
					<motion.div
						animate={ isOpen ? 'open' : 'closed' }
						className='border mt-[42px] border-grey-100 rounded-[19px] w-full px-4 py-[18px] lg:p-[42px]'>
						<div className='flex items-center justify-between'>
							<h2 className='text-primary text-2xl lg:text-[28px] !leading-normal lg:!leading-[43px] lg:-tracking-0.04em'>
								{ /* { pricingComparisonData.title } */ }
								<span className='max-lg:hidden'>Member product price comparisons</span>
								<span className='lg:hidden'>Price comparisons</span>
							</h2>
							<motion.button
								variants={ {
									open: {
										rotate: '180deg',
									},
									closed: {
										rotate: '0deg',
									},
								} }
								transition={ { ease: 'easeInOut', duration: .3 } }
								className='w-5'
								onClick={ () => setIsOpen(pv => !pv) }
							>
								<ChevronDown className='w-5 h-5 text-primary' />
							</motion.button>
						</div>
						<motion.div
							initial={ false }
							animate={ { height: isOpen ? 'fit-content' : '0px' } }
							className='w-full overflow-hidden flow-root'>
							<div className='inline-block min-w-full align-middle mt-4 max-lg:hidden'>
								<table className='min-w-full'>
									<thead>
										<tr>
											<th
												scope='col'
												className='pt-[38px] pb-[33px] pr-4 text-left text-primary sm:pl-0 w-2/6'>
												{ renderHeading('Products') }
												<span className='text-lg !leading-[25px] -tracking-0.04em font-medium'>
															&nbsp;
												</span>
											</th>
											{ pricingComparisonData.headers.map(header => {
												return (
													<th
														key={ header.id }
														scope='col'
														className={ clsxm(
															'py-[26px] px-[23px] text-center',
															header.geviti ? ' bg-blue-alice rounded-t-20px' : ''
														) }>
														<span className='w-full flex flex-col items-center gap-y-2.5'>
															{ renderHeading(header.title) }
														</span>
													</th>
												);
											}) }
										</tr>
									</thead>
									<tbody>
										{ pricingComparisonData.list.map((el, elIdx) => {
											const paddingVertical = elIdx === pricingComparisonData.list.length - 1 ? 'pb-9 pt-18px' : 'py-18px';

											return (
												<tr key={ `table-${ elIdx }` }>
													<td className={ clsxm('pr-4 text-left text-sm !leading-6 font-medium text-primary w-2/6', paddingVertical) }>
														{ el.name }
													</td>
														
													<td className={ clsxm('px-4 w-1/6', paddingVertical) }>
														<span className='w-full flex justify-center whitespace-nowrap'>
															{ el.free }
														</span>
													</td>
													<td className={ clsxm('px-4 w-1/6', paddingVertical) }>
														<span className='w-full flex justify-center whitespace-nowrap'>
															{ el.basic }
														</span>
													</td>
													<td className={ clsxm('px-4 w-1/6 bg-blue-alice', elIdx === pricingComparisonData.list.length - 1 && 'rounded-b-20px', paddingVertical) }>
														<span className='w-full flex justify-center whitespace-nowrap'>
															{ el.premium }
														</span>
													</td>
												</tr>
											);
										}) }
									</tbody>
								</table>
							</div>

							{ renderContentMobile() }
						</motion.div>

					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default PricingComparison;