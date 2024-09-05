'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import pricingData from '@/constant/data/pricing';
import clsxm from '@/helpers/clsxm';

import { ChevronDown } from '../Icons';

const pricingComparisonData = pricingData.pricingComparison;

// type HeaderID = 'free' | 'basic' | 'premium';
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

type PricingComparisonProps = {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  toggleAccordion: (idx: number) => void;
  index: number;
};

const PricingComparison: React.FC<PricingComparisonProps> = ({
	isOpen,
	toggleAccordion,
	index,
}) => {
	const renderHeading = (text: string) => {
		return (
			<h5 className='text-[21.51px] !leading-normal text-[#272833] !font-semibold whitespace-nowrap'>
				{ text }
			</h5>
		);
	};

	const renderListMobile = () => {
		return (
			<div className={ clsxm('flex flex-col gap-y-[42px]') }>
				{ pricingComparisonData.list.map((el, elIdx) => {
					return (
						<div
							key={ `list-${elIdx}` }
							className='w-full flex flex-col text-primary'
						>
							<span className='text-base font-semibold'>{ el.name }</span>
							{ /* <div className='text-lg !leading-7 flex justify-between gap-1'>
								<h5>{ headerTitle('free') }</h5>
								<span className='text-right'>{ el.free }</span>
							</div> */ }
							<p className='text-lg !leading-normal'>{ el.premium }</p>
						</div>
					);
				}) }
			</div>
		);
	};

	const renderContentMobile = () => {
		return (
			<div className='lg:hidden mt-6 w-full border border-blue-primary bg-blue-alice rounded-20px py-6 px-2.5'>
				{ renderListMobile() }
			</div>
		);
	};

	return (
		<div className='w-full mt-6 lg:-mt-[19px] relative z-[2]'>
			<div className='bg-white border lg:border-t-0 border-grey-100 max-lg:rounded-t-[19px] rounded-b-[19px] w-full px-4 pb-[42px] lg:pb-[19px] pt-[18px] lg:pt-[38px] lg:px-[42px]'>
				<button
					onClick={ () => toggleAccordion(index) }
					className='focus:ring-0 w-full flex flex-col focus:outline-none'
				>
					<div className='flex items-center justify-between w-full'>
						<h2 className='text-primary text-2xl lg:text-[28px] font-medium !leading-normal text-left'>
              Member additional product pricing
						</h2>
						<ChevronDown
							className={ clsxm(
								'w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 text-primary ease-out transform duration-200',
								isOpen && 'rotate-180'
							) }
						/>
					</div>
					<p
						className={ clsxm(
							'transform transition-opacity ease-in-out mt-5px lg:mt-1 text-grey-300 text-xs lg:text-lg !leading-normal',
							isOpen
								? 'opacity-0 duration-[50ms]'
								: 'opacity-100 delay-500 duration-500'
						) }
					>
            Click to expand
					</p>
				</button>
				<AnimatePresence mode='wait'>
					{ isOpen && (
						<motion.div
							initial={ { opacity: 0, y: -30, height: 0 } }
							animate={ { opacity: 1, y: 0, height: 'fit-content' } }
							exit={ { opacity: 0, y: -30, height: 0 } }
							transition={ { duration: 0.5, ease: 'easeInOut' } }
							className='w -full overflow-hidden flow-root'
						>
							<div className='inline-block min-w-full align-middle mt-[15px] max-lg:hidden'>
								<table
									className='min-w-full !border-spacing-0 !border-collapse'
									cellSpacing='0'
									cellPadding='0'
								>
									<thead>
										<tr>
											<th
												scope='col'
												className='pb-[27.5px] pr-4 text-left text-primary sm:pl-0 w-[70%]'
											>
												{ renderHeading('Products') }
											</th>
											{ pricingComparisonData.headers.map(header => {
												return (
													<th
														key={ header.id }
														scope='col'
														className={ clsxm(
															'pb-[27.5px] px-[23px] text-center'
														) }
													>
														{ renderHeading(header.title) }
													</th>
												);
											}) }
										</tr>
									</thead>
									<tbody style={ { borderSpacing: '0 !important' } }>
										{ pricingComparisonData.list.map((el, elIdx) => {
											const paddingVertical =
                        elIdx === pricingComparisonData.list.length - 1
                        	? 'pb-9 pt-18px'
                        	: 'py-18px';

											return (
												<tr
													key={ `table-${elIdx}` }
													className='!border-y-0'>
													<td
														className={ clsxm(
															'pr-4 text-left text-lg !leading-normal font-medium text-primary w-[70%]',
															paddingVertical
														) }
													>
														{ el.name }
													</td>

													{ /* <td className={ clsxm('px-4 w-[30%]', paddingVertical) }>
														<span className='w-full flex justify-center whitespace-nowrap'>
															{ el.free }
														</span>
													</td>
													<td className={ clsxm('px-4 w-[30%]', paddingVertical) }>
														<span className='w-full flex justify-center whitespace-nowrap'>
															{ el.basic }
														</span>
													</td> */ }
													<td
														className={ clsxm(
															'w-[30%] text-lg !leading-normal',
															elIdx === 0 && 'rounded-t-20px',
															elIdx === pricingComparisonData.list.length - 1 &&
                                'rounded-b-20px'
														) }
													>
														<span
															className={ clsxm(
																paddingVertical,
																'w-full flex justify-center whitespace-nowrap bg-blue-alice px-4 border-x border-blue-primary',
																elIdx === 0 && 'rounded-t-20px border-t',
																elIdx ===
                                  pricingComparisonData.list.length - 1 &&
                                  'rounded-b-20px border-b'
															) }
														>
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
					) }
				</AnimatePresence>
			</div>
		</div>
	);
};

export default PricingComparison;
