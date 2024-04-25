'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import membershipdata from '@/constant/data/membership';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import QuestionTooltip from '../Home/QuestionTooltip';
import { ChevronDown, QuestionIcon } from '../Icons';

import PriceExtended from './PriceExtended';

const pricingData = membershipdata.pricing;

const Pricing = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const renderButtonSwitchGender = () => {
		const currentOpt = pricingData.pricingOptions[activeTabIdx];

		return (
			<div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-grey-50'>
				<div className='relative flex items-center h-full'>
					{ pricingData.pricingOptions.map((opt, optIdx) => {
						return (
							<button
								key={ opt.title }
								aria-label={ opt.title }
								onClick={ () => setActiveTabIdx(optIdx) }
								className={ clsxm(
									'text-sm !leading-normal h-full flex items-center justify-center text-grey-400 cursor-pointer whitespace-nowrap',
									optIdx === 0 ? 'px-3.5 w-[95px] sm:w-[156px]' : 'px-6 w-[104px] sm:w-[156px]'
								) }>
								{ opt.title }
							</button>
						);
					}) }
				</div>

				<motion.span
					layoutId='pill-tab-pricingplans'
					transition={ { type: 'spring', duration: 0.75 } }
					className={ clsxm(
						'bg-primary cursor-pointer rounded-[100px] font-medium text-white whitespace-nowrap shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] text-sm !leading-normal flex items-center h-[37px] top-1.5 absolute',
						activeTabIdx === 0
							? 'left-1.5 w-[95px] sm:w-[156px] px-3.5'
							: 'left-[95px] sm:left-[162px] w-[104px] sm:w-[156px] px-6',
						currentOpt.highlight ? 'justify-between' : 'justify-center'
					) }
				>
					{ currentOpt.title }
					{ currentOpt.highlight && (
						<span className='text-blue-primary max-sm:hidden text-xs !leading-normal w-[55px] h-[21px] flex-shrink-0 bg-[#F2FAFF]/15 border-[0.55px] border-white/15 rounded-[100px] flex items-center justify-center'>
							{ currentOpt.highlight }
						</span>
					) }
				</motion.span>
			</div>
		);
	};

	const renderButtonToggleCompetitor = () => {
		return (
			<button
				onClick={ toggleDropdown }
				className={ clsxm(
					'max-sm:w-full flex mt-3 items-center border border-black/5 gap-6 lg:gap-[15px] rounded-2xl justify-center px-4 py-[15px] lg:p-6 w-full bg-blue-primary',
					isOpen && 'bg-[#E6E7E7] border-[#E6E7E7]'
				) }
			>
				<p className='text-sm !leading-[28px] lg:text-xl'>
					<span className='max-lg:hidden'>Compare Geviti to others</span>
					<span className='lg:hidden'>Geviti vs. our competitors</span>
				</p>
				<motion.span
					variants={ {
						open: {
							rotate: '180deg',
						},
						closed: {
							rotate: '0deg',
						},
					} }
					animate={ isOpen ? 'open' : 'closed' }
					transition={ { ease: 'easeOut', duration: .2 } }
				>
					<ChevronDown className='w-5 h-5 flex-shrink-0 text-primary' />
				</motion.span>
			</button>
		);
	};

	const resolveWrapperPricingCard = (isMostPopular: boolean) => {
		if (isMostPopular) return 'bg-primary text-white';
		return 'bg-[#F5FBFF] text-primary';
	};

	return (
		<div className='lg:px-3 font-Poppins overflow-hidden'>
			<div className='bg-white rounded-19px py-[42px] lg:pt-[72px] lg:pb-[90px]'>
				<div className='container-center flex flex-col items-center'>
					<div className='text-center'>
						<p className='text-pretitle text-grey-primary mb-1'>
							{ pricingData.preTitle }
						</p>
						<h2 className='mb-3 max-sm:max-w-[331px] mx-auto text-2xl md:text-3xl lg:text-[64px] !leading-normal text-primary -tracking-0.04em'>
							{ pricingData.title }
						</h2>
						<p className='text-xs lg:text-sm !leading-5 text-grey-400 max-sm:max-w-[283px] mx-auto'>
							{ pricingData.description }
						</p>
					</div>

					<div className='mt-[42px] w-fit'>
						{ renderButtonSwitchGender() }
					</div>

					<div className='lg:max-w-full mx-auto sm:max-w-[392px] lg:flex-row flex-col flex gap-[42px] lg:gap-6 items-end w-full pt-[43px] lg:pt-[90px]'>
						{ pricingData.list.map((item, index) => (
							<div
								key={ index }
								className='w-full relative'
							>
								<div className={ clsxm('pt-[42px] pb-[34px] px-6 rounded-2xl w-full', resolveWrapperPricingCard(item.mostPopular)) }>
									<p className='!leading-[28px] text-[5.128vw] xs2:text-xl'>
										{ item.name }
									</p>

									<h3 className='font-medium text-5xl !leading-[125%] py-1'>
										<span>{ item.price }</span>{ ' ' }
										<span className='text-xs lg:text-sm'>
											{ item.priceNote }
										</span>
									</h3>
									<div className='overflow-hidden'>
										<AnimatePresence mode='wait'>
											{ pricingData.pricingOptions[activeTabIdx].value === 'monthly'
												? (
													<motion.p
														key='monthly'
														initial={ { y: -50, opacity: 0 } }
														animate={ { y: 0, opacity: 1 } }
														exit={ { y: 50, opacity: 0 } }
														transition={ { ease: 'linear', duration: 0.25 } }
														className='font-medium text-xs lg:text-sm !leading-6'
													>
														{ item.monthly }
													</motion.p>
												) : (
													<motion.p
														key='quarterly'
														initial={ { y: -50, opacity: 0 } }
														animate={ { y: 0, opacity: 1 } }
														exit={ { y: 50, opacity: 0 } }
														transition={ { ease: 'linear', duration: 0.25 } }
														className='font-medium text-xs lg:text-sm !leading-6'
													>
														{ item.quarterly }
													</motion.p>
												) }
										</AnimatePresence>
									</div>
									<p className='text-2xl !leading-normal font-medium mb-[11px] mt-8 lg:mt-[43px]'>
										{ item.biomakers }{ ' ' }
										<span className='text-xs !leading-normal'>biomarkers</span>
									</p>

									<ul className='flex flex-col gap-y-[11px] mb-6'>
										{ item.list.map((feature, featureIdx) => (
											<li
												key={ `feature-${ featureIdx }` }
												className='text-sm !leading-normal gap-1.5 flex items-center font-medium -tracking-[0.53px]'
											>
												<QuestionTooltip
													icon={ <QuestionIcon /> }
													text={ feature.description || feature.title } />
												{ feature.title }
											</li>
										)) }
									</ul>

									<ButtonCta
										href={ item.btnCta.href }
										text={ item.btnCta.text }
										theme={ item.mostPopular ? 'secondary' : 'primary' }
										className='w-full sm:w-fit mx-auto'
									/>

								</div>
								{ item.mostPopular
									? (
										<div>
											<span className='absolute top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
												Most Popular
											</span>
											<div className='max-lg:hidden'>
												{ renderButtonToggleCompetitor() }
											</div>
										</div>
									)
									: (
										<div className='absolute top-0 right-0'>
											<Image
												src='/images/membership/squares-union.svg'
												alt=''
												width={ 257 }
												height={ 312.52 }
												className='w-[257px] h-full'
											/>
										</div>
									) }
							</div>
						)) }
					</div>

					<div className='lg:hidden w-full mx-auto sm:max-w-[392px]'>
						{ renderButtonToggleCompetitor() }
					</div>
					{ isOpen && (
						<PriceExtended />
					) }
				</div>
			</div>
		</div>
	);
};

export default Pricing;
