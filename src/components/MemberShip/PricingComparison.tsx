'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { membershipData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { CheckCircleFill, ChevronDown, CloseCircleFill } from '../Icons';

const pricingComparisonData = membershipData.pricingComparison;

type HeaderID = 'geviti' | 'competitor_a' | 'competitor_b' | 'competitor_c';
type HeaderData = {
	id: string;
	title: string;
	subtitle: string;
	geviti: boolean;
};

const PricingAccordion: React.FC<{
	title: string;
	subtitle?: string;
	children: React.ReactNode;
	isLastIdx?: boolean;
}> = ({
	title,
	subtitle,
	children,
	isLastIdx
}) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<motion.div
			animate={ open ? 'open' : 'closed' }
			className={ clsxm(!isLastIdx && 'border-b border-grey-950', 'font-Poppins') }
		>
			<div
				onClick={ () => setOpen(pv => !pv) }
				className='py-3 w-full flex justify-between gap-2'
			>
				<span className='text-sm !leading-normal font-medium text-left text-white'>
					{ title }{ ' ' }
					<span className='text-grey-primary font-medium text-[10px] !leading-[15px]'>{ subtitle }</span>
				</span>
				<motion.span
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
				>
					<ChevronDown className='w-5 h-5 text-white' />
				</motion.span>
			</div>
			<motion.div
				initial={ false }
				animate={ { height: open ? 'fit-content' : '0px' } }
				className='overflow-hidden w-full'
			>
				{ children }
			</motion.div>
		</motion.div>
	);
};

const PricingComparison: React.FC = () => {
	const renderValue = (val: boolean) => {
		if (val) {
			return (
				<CheckCircleFill className='flex-shrink-0' />
			);
		}

		return (
			<CloseCircleFill className='flex-shrink-0' />
		);
	};

	const renderHeading = (text: string) => {
		return (
			<h5 className='text-2xl !leading-normal -tracking-0.04em !font-normal whitespace-nowrap'>{ text }</h5>
		);
	};

	const renderLogo = () => {
		return (
			<Image
				src='/images/logo/logo-blue.webp'
				alt='Geviti'
				width={ 403.75 }
				height={ 95 }
				className='w-auto h-[19px]'
			/>
		);
	};

	const renderListMobile = (header: HeaderData) => {
		return (
			<div className='flex flex-col gap-y-18px pb-6 pt-3'>
				{ pricingComparisonData.list.map((el, elIdx) => {
					return (
						<div
							key={ `list-${ header.title }-${ elIdx }` }
							className='w-full flex justify-between'>
							<span className='text-white text-sm !leading-6 font-medium'>
								{ el.name }
							</span>
							{ renderValue(el[header.id as HeaderID]) }
						</div>
					);
				}) }
			</div>
		);
	};

	const renderContentMobile = () => {
		const gevitiHeader = pricingComparisonData.headers[0];
		const accordionList = pricingComparisonData.headers.slice(1);

		return (
			<div className='lg:hidden mt-6 w-full'>
				<div>
					<div className='pb-3 flex flex-col gap-y-[19px]'>
						<div>
							{ renderLogo() }
						</div>
						<p className='text-blue-primary text-lg !leading-[25px] -tracking-0.04em font-medium'>
							{ gevitiHeader.subtitle }
						</p>
					</div>
					{ renderListMobile(gevitiHeader) }
				</div>
				{ accordionList.map((header, headerIdx) => {
					return (
						<PricingAccordion
							key={ header.title }
							title={ header.title }
							subtitle={ header.subtitle }
							isLastIdx={ headerIdx === accordionList.length - 1 }>
							{ renderListMobile(header) }
						</PricingAccordion>
					);
				}) }
			</div>
		);
	};

	return (
		<div className='lg:px-3 pt-6'>
			<div className='bg-most-value rounded-19px overflow-hidden'>
				<div className='container-center w-full pt-6 lg:pt-16 pb-[22px] lg:pb-[46px]'>
					<div>
						<h2 className='text-white text-2xl lg:text-4xl !leading-normal lg:!leading-[43px] lg:-tracking-0.04em'>
							{ pricingComparisonData.title }
						</h2>
						<p className='lg:mt-5px text-grey-400 text-sm !leading-5 max-w-[283px] sm:max-w-[610px]'>
							{ pricingComparisonData.description }
						</p>
					</div>
					<div className='mt-18px w-full flow-root max-lg:hidden'>
						<div className='inline-block min-w-full align-middle'>
							<table className='min-w-full'>
								<thead>
									<tr>
										<th
											scope='col'
											className='pt-[38px] pb-[33px] pr-4 text-left text-white sm:pl-0 w-2/6'>
											{ renderHeading('Included') }
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
														'pt-[38px] pb-[33px] px-4 text-center w-1/6',
														header.geviti ? 'text-blue-primary bg-grey-950 rounded-t-20px' : 'text-grey-primary'
													) }>
													<span className='w-full flex flex-col items-center gap-y-2.5'>
														{ header.geviti
															? (
																<span className='w-full h-9 flex items-center justify-center'>
																	{ renderLogo() }
																</span>
															) : renderHeading(header.title) }

														<span className='text-lg !leading-[25px] -tracking-0.04em font-medium'>
															{ header.subtitle }
														</span>
													</span>
												</th>
											);
										}) }
									</tr>
								</thead>
								<tbody>
									{ pricingComparisonData.list.map((el, elIdx) => {
										const paddingVertical = elIdx === pricingComparisonData.list.length - 1 ? 'pb-9 pt-18px' : 'py-[15px]';

										return (
											<tr key={ `table-${ elIdx }` }>
												<td className={ clsxm('pr-4 text-left text-sm !leading-6 font-medium text-white w-2/6', paddingVertical) }>
													{ el.name }
												</td>
												<td className={ clsxm('px-4 w-1/6 bg-grey-950', elIdx === pricingComparisonData.list.length - 1 && 'rounded-b-20px', paddingVertical) }>
													<span className='w-full flex justify-center'>
														{ renderValue(el.geviti) }
													</span>
												</td>
												<td className={ clsxm('px-4 w-1/6', paddingVertical) }>
													<span className='w-full flex justify-center'>
														{ renderValue(el.competitor_a) }
													</span>
												</td>
												<td className={ clsxm('px-4 w-1/6', paddingVertical) }>
													<span className='w-full flex justify-center'>
														{ renderValue(el.competitor_b) }
													</span>
												</td>
												<td className={ clsxm('px-4 w-1/6', paddingVertical) }>
													<span className='w-full flex justify-center'>
														{ renderValue(el.competitor_c) }
													</span>
												</td>
											</tr>
										);
									}) }
								</tbody>
							</table>
						</div>
					</div>

					{ renderContentMobile() }
				</div>
			</div>
		</div>
	);
};

export default PricingComparison;