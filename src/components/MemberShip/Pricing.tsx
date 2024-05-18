'use client';
import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';

import membershipData from '@/constant/data/membership';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import QuestionTooltip from '../Home/QuestionTooltip';
import { GreenCheck } from '../Icons';

import ButtonSwitchMemberFreq from './ButtonSwitchMemberFreq';

const getPricingCardVariants = (tierIdx: number): Variants => {
	if (tierIdx === 0) {
		return {
			initial: {
				x: '100%',
				opacity: 0
			},
			inView: {
				x: 0,
				opacity: 1,
				transition: {
					duration: .75,
					ease: 'easeInOut',
					delay: 1.1
				}
			}
		};
	} else if (tierIdx === 1) {
		return {
			initial: { y: -50, opacity: 0 },
			inView: {
				y: 0,
				opacity: 1,
				transition: {
					duration: .75,
					ease: 'easeInOut'
				}
			}
		};
	} else {
		return {
			initial: { x: '-100%', opacity: 0 },
			inView: {
				x: 0,
				opacity: 1,
				transition: {
					duration: .75,
					ease: 'easeInOut',
					delay: 1.1
				}
			}
		};
	}
};

const PricingCardWrapper: React.FC<{
	index: number;
	isInView: boolean;
	children: React.ReactNode;
}> = ({ index, isInView, children }) => {
	return (
		<>
			<motion.div
				variants={ getPricingCardVariants(index) }
				initial='initial'
				animate={ isInView ? 'inView' : 'initial' }
				className='max-lg:hidden'
			>
				{ children }
			</motion.div>

			<div className='lg:hidden'>
				{ children }
			</div>
		</>
	);
};

const pricingData = membershipData.pricing;

const Pricing = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });

	const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

	const renderButtonSwitchFrequency = () => {
		return (
			<ButtonSwitchMemberFreq
				options={ pricingData.pricingOptions }
				onChange={ (currentIdx: number) => setActiveTabIdx(currentIdx) } />
		);
	};

	return (
		<div
			id='packages'
			className='lg:px-3 pb-6 font-Poppins overflow-hidden'>
			<div className='bg-white rounded-19px py-[42px] lg:pt-[72px] lg:pb-[90px]'>
				<div className='container-center flex flex-col items-center'>
					<div className='text-center'>
						<p className='text-pretitle text-grey-primary mb-1'>
							{ pricingData.preTitle }
						</p>
						<h2 className='mb-3 max-sm:max-w-[331px] mx-auto text-2xl md:text-3xl lg:text-[64px] !leading-normal text-primary -tracking-0.04em'>
							{ pricingData.title }
						</h2>
						<p className='text-[3.077vw] xs2:text-xs lg:text-sm !leading-5 text-grey-400 max-w-[331px] sm:max-w-[627px] mx-auto'>
							{ pricingData.description }
						</p>
					</div>

					<div className='mt-[42px] w-fit'>
						{ renderButtonSwitchFrequency() }
					</div>

					<div
						ref={ ref }
						className='lg:max-w-full mx-auto sm:max-w-[392px] lg:flex-row flex-col flex gap-[42px] lg:gap-6 items-end w-full pt-[43px] lg:pt-[90px]'>
						{ pricingData.list.map((item, index) => (
							<div
								key={ index }
								className='w-full relative'
							>
								<PricingCardWrapper
									index={ index }
									isInView={ isInView }>
									<div className={ clsxm(
										'pt-[42px] pb-[34px] px-6 rounded-2xl w-full relative',
										item.mostPopular ? 'bg-primary text-white' : 'bg-[#F5FBFF] text-primary',
										index === 1 && 'z-10'
									) }>
										<h3 className='!leading-[28px] text-[5.128vw] xs2:text-xl'>
											{ item.name }
										</h3>

										<span className='font-medium text-5xl !leading-[125%] py-1'>
											<span>{ item.price }</span>{ ' ' }
											<span className='text-xs lg:text-sm'>
												{ item.priceNote }
											</span>
										</span>
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
										<p className='text-4xl !leading-normal font-medium mb-[11px] mt-[25px] lg:mt-3.5'>
											<span className='-tracking-0.04em'>{ item.biomakers }{ ' ' }</span>
											<span className='text-xs !leading-normal'>biomarkers</span>
										</p>

										<ul className='flex flex-col gap-y-[11px] mb-6'>
											{ item.list.map((feature, featureIdx) => (
												<li
													key={ `feature-${ featureIdx }` }
													className='text-sm !leading-normal gap-1.5 flex items-center font-medium -tracking-[0.53px]'
												>
													<QuestionTooltip
														icon={ <GreenCheck className='w-4 h-4 text-green-alert' /> }
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

										{ item.mostPopular
											? (
												<span className='absolute top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
													Most Popular
												</span>
											)
											: (
												<div className='absolute top-0 right-0'>
													<div className='w-[257px] h-[312.52px] relative overflow-hidden'>
														<Image
															src='/images/membership/squares-union.svg'
															alt=''
															fill
															className='w-full h-full'
															sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
														/>
													</div>
												</div>
											) }
									</div>
								</PricingCardWrapper>

								{ index === 1 && (
									<div className='w-full h-[51px] hidden lg:flex' />
								) }
							</div>
						)) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
