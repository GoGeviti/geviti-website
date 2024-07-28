'use client';
import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, Variants } from 'framer-motion';

// import Image from 'next/image';
import pricingData from '@/constant/data/pricing';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import QuestionTooltip from '../Home/QuestionTooltip';
import { GreenCheck } from '../Icons';
import ButtonSwitchMemberFreq from '../MemberShip/ButtonSwitchMemberFreq';
import Navbar from '../Navbar/Landing';

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
				className='max-lg:hidden h-full'
			>
				{ children }
			</motion.div>

			<div className='lg:hidden  h-full'>
				{ children }
			</div>
		</>
	);
};

const Hero = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });

	const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

	const renderButtonSwitchFrequency = () => {
		return (
			<ButtonSwitchMemberFreq
				options={ pricingData.hero.pricingOptions }
				onChange={ (currentIdx: number) => setActiveTabIdx(currentIdx) } />
		);
	};

	return (
		<div
			id='packages'
			className=''>
			<Navbar theme='light' />
			<div className='container-center flex flex-col items-center'>
				<div className='text-center pt-[177px] pb-[64px]'>
					<p className='text-pretitle text-grey-primary mb-1'>
						{ pricingData.hero.preTitle }
					</p>
					<h2 className='mb-3 max-sm:max-w-[331px] mx-auto text-2xl md:text-3xl lg:text-[64px] !leading-normal text-primary -tracking-0.04em'>
						{ pricingData.hero.title }
					</h2>
					<p className='text-[3.077vw] xs2:text-xs lg:text-sm !leading-5 text-grey-400 max-w-[331px] sm:max-w-[627px] mx-auto'>
						{ pricingData.hero.description }
					</p>
				</div>

				<div className='w-fit'>
					{ renderButtonSwitchFrequency() }
				</div>

				<div
					ref={ ref }
					className='lg:max-w-full mx-auto sm:max-w-[392px] lg:grid-cols-3 grid-cols-1 grid gap-[42px] lg:gap-6 items-end w-full pt-[43px] lg:pt-[90px]'>
					{ pricingData.hero.list.map((item, index) => (
						<div
							key={ index }
							className='w-full relative h-full'
						>
							<PricingCardWrapper
								index={ index }
								isInView={ isInView }>
								<div className={ clsxm(
									'pt-[42px] pb-[34px] px-6 rounded-2xl w-full h-full relative',
									item.mostValue ? ' text-white bg-most-value' : 'bg-[#FCFCFC] border-grey-100 border text-primary',
									// index === 1 && 'z-10'
								) }>
									
									<h3 className='!leading-[28px] text-[5.128vw] xs2:text-xl'>
										{ item.name }
									</h3>

									<span className='font-medium text-5xl !leading-[125%] py-1 h-full'>
										<AnimatePresence mode='wait'>
											{ pricingData.hero.pricingOptions[activeTabIdx].value === 'monthly'
												? (
													<motion.span
														key='price_monthly'
														initial={ { y: -50, opacity: 0 } }
														animate={ { y: 0, opacity: 1 } }
														exit={ { y: 50, opacity: 0 } }
														transition={ { ease: 'linear', duration: 0.25 } }
														className='font-medium text-5xl !leading-[125%] py-1'
													>
														{ item.priceMonthly } { ' ' }
													</motion.span>
												) : (
													<motion.span
														key='price_quarterly'
														initial={ { y: -50, opacity: 0 } }
														animate={ { y: 0, opacity: 1 } }
														exit={ { y: 50, opacity: 0 } }
														transition={ { ease: 'linear', duration: 0.25 } }
														className='font-medium text-5xl !leading-[125%] py-1'
													>
														{ item.price } { ' ' }
													</motion.span>
												) }
										</AnimatePresence>
										{ /* <span>{ item.price }</span>{ ' ' } */ }
										<span className='text-xs lg:text-sm'>
											{ item.priceNote }
										</span>
										<AnimatePresence mode='wait'>
											{
												(item.priceDiscount && pricingData.hero.pricingOptions[activeTabIdx].value === 'quarterly') && (
													<motion.span
														key='discount'
														initial={ { y: -50, opacity: 0 } }
														animate={ { y: 0, opacity: 1 } }
														exit={ { y: 50, opacity: 0 } }
														transition={ { ease: 'linear', duration: 0.25 } }
														className='text-grey-primary pl-3 text-[28px] font-medium line-through'
													>
														{ item.priceDiscount }
													</motion.span>
												)
											}
										</AnimatePresence>
										{ /* {
											(item.priceDiscount && pricingData.hero.pricingOptions[activeTabIdx].value === 'quarterly') && (
												<span className='text-grey-primary pl-3 text-[28px] font-medium line-through'>
													{ item.priceDiscount }
												</span>
											)
										} */ }
									</span>
									<div className='overflow-hidden'>
										<AnimatePresence mode='wait'>
											{ pricingData.hero.pricingOptions[activeTabIdx].value === 'monthly'
												? (
													<motion.p
														key='monthly'
														initial={ { y: -50, opacity: 0 } }
														animate={ { y: 0, opacity: 1 } }
														exit={ { y: 50, opacity: 0 } }
														transition={ { ease: 'linear', duration: 0.25 } }
														className='text-xs !leading-6'
													>
														<span className='text-xl font-medium'>{ item.monthly } </span>
														<span>one time for at-home bloodwork</span>
													</motion.p>
												) : (
													<motion.p
														key='quarterly'
														initial={ { y: -50, opacity: 0 } }
														animate={ { y: 0, opacity: 1 } }
														exit={ { y: 50, opacity: 0 } }
														transition={ { ease: 'linear', duration: 0.25 } }
														className='text-xs !leading-6'
													>
														<span className='text-xl font-medium'>{ item.quarterly } </span>
														<span>one time for at-home bloodwork</span>
													</motion.p>
												) }
										</AnimatePresence>
									</div>
									<p className='text-xs leading-6'>
										<span>“Longevity Panel” testing <span className='text-xl font-medium'>{ item.biomakers }</span> biomarkers</span>
									</p>
									<ButtonCta
										href={ item.btnCta.href }
										text={ item.btnCta.text }
										theme={ item.mostValue ? 'secondary' : 'primary' }
										className='w-full sm:w-fit mb-[37px] mt-[25px]'
									/>

									<span className='text-sm font-medium mb-3 inline-block'>{ item.listTitle }</span>
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

									{ item.mostPopular
										&& (
											<span className='absolute top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
												Most Popular
											</span>
										) }
									{ item.mostValue
										&& (
											<>
												<span className='absolute top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
												Most Value
												</span>
												{ /* <Image
													src='/images/pricing/noise.png'
													alt=''
													fill
													className='w-full h-full bg-blend-soft-light opacity-5 bg-repeat relative z-0'
													sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
												/> */ }
											</>
											
										) }
								</div>
							</PricingCardWrapper>

							{ /* { index === 1 && (
								<div className='w-full h-[51px] hidden lg:flex' />
							) } */ }
						</div>
					)) }
				</div>
			</div>
		</div>
	);
};

export default Hero;
