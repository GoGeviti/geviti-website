'use client';
import React, { CSSProperties, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import pricingData from '@/constant/data/pricing';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import { ProductsResponse } from '../Checkout/api/types';
import QuestionTooltip from '../Home/QuestionTooltip';
import { GreenCheck, ShieldTick } from '../Icons';
import ButtonSwitchMemberFreq from '../MemberShip/ButtonSwitchMemberFreq';
import Navbar from '../Navbar/Landing';
import PopupReview from '../PopupReview';

// const getPricingCardVariants = (tierIdx: number): Variants => {
// 	if (tierIdx === 0) {
// 		return {
// 			initial: {
// 				x: '100%',
// 				opacity: 0,
// 			},
// 			inView: {
// 				x: 0,
// 				opacity: 1,
// 				transition: {
// 					duration: 0.75,
// 					ease: 'easeInOut',
// 					delay: 1.1,
// 				},
// 			},
// 		};
// 	} else if (tierIdx === 1) {
// 		return {
// 			initial: { y: -50, opacity: 0 },
// 			inView: {
// 				y: 0,
// 				opacity: 1,
// 				transition: {
// 					duration: 0.75,
// 					ease: 'easeInOut',
// 				},
// 			},
// 		};
// 	} else {
// 		return {
// 			initial: { x: '-100%', opacity: 0 },
// 			inView: {
// 				x: 0,
// 				opacity: 1,
// 				transition: {
// 					duration: 0.75,
// 					ease: 'easeInOut',
// 					delay: 1.1,
// 				},
// 			},
// 		};
// 	}
// };

// const PricingCardWrapper: React.FC<{
//   index: number;
//   isInView: boolean;
//   children: React.ReactNode;
// }> = ({ index, isInView, children }) => {
//   return (
//     <>
//       <motion.div
//         variants={getPricingCardVariants(index)}
//         initial='initial'
//         animate={isInView ? 'inView' : 'initial'}
//         className='max-lg:hidden h-full'
//       >
//         {children}
//       </motion.div>

//       <div className='lg:hidden h-full'>{children}</div>
//     </>
//   );
// };

const formatPrice = (price?: string): string => {
	// const numericPrice = Number(price);
	// if (isNaN(numericPrice)) {
	// 	throw new Error('Invalid price value');
	// }
	return `$${price}`;
};

type HeroProps = {
  products?: ProductsResponse[];
  navbar?: boolean;
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ products, navbar = true, className }) => {
	const ref = useRef<HTMLDivElement>(null);
	// const isInView = useInView(ref, { once: true });

	const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

	const renderButtonSwitchFrequency = () => {
		return (
			<ButtonSwitchMemberFreq
				options={ pricingData.hero.pricingOptions }
				onChange={ (currentIdx: number) => setActiveTabIdx(currentIdx) }
				showHightlightTextOnMobile
			/>
		);
	};

	const renderPopup = () => {
		return (
			<PopupReview
				motionProps={ {
					variants: {
						initial: { scale: 0, opacity: 0 },
						animate: {
							scale: 1,
							opacity: 1,
						},
						exit: {
							scale: 0,
							opacity: 0,
						},
					},
					transition: { duration: 0.64, ease: 'easeInOut' },
					initial: 'initial',
					animate: 'animate',
					exit: 'exit',
				} }
				className='max-sm:w-full max-sm:max-w-[277px]'
				style={
          {
          	'--shadow-popup-pricing':
              '0px 61px 25px rgba(184, 184, 184, 0.01), 0px 34px 21px rgba(184, 184, 184, 0.05), 0px 15px 15px rgba(184, 184, 184, 0.09), 0px 4px 8px rgba(184, 184, 184, 0.1)',
          } as CSSProperties
				}
				wrapperClassName='[box-shadow:var(--shadow-popup-pricing)] max-sm:w-full lg:w-[274px]'
			/>
		);
	};

	return (
		<div
			id='packages'
			className='font-Poppins relative z-[3]'>
			{ navbar && <Navbar theme='light' /> }
			<div
				className={ clsxm(
					'container-center flex flex-col items-center pt-[129px] lg:pt-[177px]',
					className
				) }
			>
				<div className='text-center pb-[42px] lg:pb-6'>
					<div className='pb-6 lg:pb-3 flex justify-center w-full'>
						{ renderPopup() }
					</div>
					{ /* <div className='flex justify-center w-full mb-3.5 lg:hidden'>
            <div className='flex items-center gap-1'>
              <ShieldTick className='text-grey-primary flex-shrink-0 w-3.5 h-3.5' />
              <span className='text-[13.44px] !leading-[140%] text-grey-primary font-semibold'>
                HSA/FSA{' '}
                <span className='text-[11.529px] font-normal'>ACCEPTED</span>
              </span>
            </div>
          </div> */ }
					<h2 className='mb-3.5 lg:mb-3 max-sm:max-w-[323px] mx-auto text-2xl md:text-3xl lg:text-[64px] !leading-normal text-primary -tracking-0.04em'>
						{ pricingData.hero.title }
					</h2>
					<p className='text-xs lg:text-sm !leading-5 text-grey-400 max-w-[283px] sm:max-w-[627px] mx-auto'>
						{ pricingData.hero.description }
					</p>
					{ /* <div className='lg:hidden max-w-full mx-auto space-y-3 text-left'>
						{ pricingData.hero.features.map((item, itemIdx) => (
							<div
								key={ `feature-${itemIdx}` }
								className='flex gap-1.5'>
								<CheckCircleIcon className='text-primary w-4 h-4 flex-shrink-0 mt-0.5' />
								<p className='text-primary text-[3.733vw] xxs2:text-sm !leading-5'>
									{ item }
								</p>
							</div>
						)) }
					</div> */ }
				</div>

				<div className='w-fit flex flex-col items-center justify-center gap-[14px]'>
					<span className='text-center text-[10px] text-[#919B9F] uppercase font-semibold tracking-[1.1px] leading-[15px]'>
            Select Membership Frequency
					</span>
					{ renderButtonSwitchFrequency() }
				</div>

				<div
					ref={ ref }
					className='lg:max-w-[1061px] mx-auto sm:max-w-[392px] lg:grid-cols-9 flex max-lg:flex-col lg:grid gap-16 lg:gap-3.5 items-end w-full pt-[58px] lg:pt-[78px]'
				>
					<div className='w-full relative h-full lg:col-span-3'>
						<div className='rounded-2xl pt-7 w-full h-full max-lg:min-h-[676px] relative overflow-hidden bg-[linear-gradient(0deg,#A7DAFF_0%,#75C5FF_100%)]'>
							<div className='px-5'>
								<div className='flex items-center gap-5px mb-3.5'>
									<ShieldTick className='flex-shrink-0 w-5 h-5 text-primary' />

									<span className='inline-flex items-baseline text-[19px] !leading-[140%] font-semibold text-primary'>
										{ pricingData.hero.banner.caption.text }
										<span className='ml-1.5 font-normal text-base'>
											{ pricingData.hero.banner.caption.textSuffix }
										</span>
									</span>
								</div>
								<div>
									<p className='text-xs !leading-6 font-semibold tracking-0.11em text-grey-800 uppercase'>
										{ pricingData.hero.banner.preTitle }
									</p>
									<h3 className='text-2xl !leading-normal text-black -tracking-0.04em'>
										<span
											dangerouslySetInnerHTML={ {
												__html: pricingData.hero.banner.title,
											} }
										/>
									</h3>
								</div>
							</div>
							<Image
								alt=''
								src={ pricingData.hero.banner.image }
								width={ 411 }
								height={ 300 }
								className='object-contain scale-105 w-full h-[498px] lg:h-[380px] object-right absolute -bottom-0 -right-2.5 lg:-bottom-1.5 lg:right-1'
							/>
						</div>
					</div>
					{ pricingData.hero.list.map((item, index) => (
						<div
							key={ index }
							className='w-full relative h-full lg:col-span-6'>
							<div
								className={ clsxm(
									'pt-[42px] pb-[34px] px-6 grid gap-10 grid-cols-1 lg:grid-cols-2 rounded-2xl w-full h-full relative',
									item.mostValue
										? ' text-white bg-most-value'
										: 'bg-[#FCFCFC] border-grey-100 border text-primary'
								) }
							>
								<div>
									<h3 className='!leading-[28px] text-[5.128vw] xs2:text-xl font-medium'>
										{ products?.find(
											e => e.stripeProductId === item.stripeProductId
										)?.name ?? item.name }
									</h3>

									<span className='font-medium text-5xl !leading-[125%] py-1 h-full'>
										<AnimatePresence mode='wait'>
											{ pricingData.hero.pricingOptions[activeTabIdx].value ===
                      'monthly' ? (
													<motion.span
														key='price_monthly'
														initial={ { y: -50, opacity: 0 } }
														animate={ { y: 0, opacity: 1 } }
														exit={ { y: 50, opacity: 0 } }
														transition={ { ease: 'linear', duration: 0.25 } }
														className='font-medium text-5xl !leading-[125%] py-1'
													>
														{ formatPrice(
															products
																?.find(
																	e =>
																		e.stripeProductId === item.stripeProductId
																)
																?.productPrices?.find(
																	e => e.billingFrequency === 'monthly'
																)?.price
														) }{ ' ' }
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
														{ formatPrice(
															products
																?.find(
																	e =>
																		e.stripeProductId === item.stripeProductId
																)
																?.productPrices?.find(
																	e => e.billingFrequency === 'quarterly'
																)?.price
														) }{ ' ' }
													</motion.span>
												) }
										</AnimatePresence>
										<span className='text-base font-medium'>
											{ item.priceNote }
										</span>
									</span>
									<p className='text-xs leading-6'>
										<span>
											<span className='font-medium'>
                        Includes the “
												<span className='underline'>Longevity Panel</span>”
											</span>{ ' ' }
                      testing for{ ' ' }
											<span className='text-xl font-medium'>
												{ item.biomakers }
											</span>{ ' ' }
                      biomarkers at-home by a licensed clinician
										</span>
									</p>
									<ButtonCta
										href={
											item.btnCta.href +
                      '?product_id=' +
                      item.stripeProductId +
                      '&price_id=' +
                      products?.find(
                      	e => e.stripeProductId === item.stripeProductId
                      )?.productPrices![activeTabIdx]?.priceId
										}
										text={ item.btnCta.text }
										theme={ item.mostValue ? 'secondary' : 'primary' }
										className='w-full sm:w-fit mt-[25px]'
									/>
									{ pricingData.hero.pricingOptions[activeTabIdx].value ===
                    'monthly' && (
										<p className='text-[8px] font-Poppins font-light mt-4'>
                      *By purchasing a monthly membership, you agree to a $150
                      cancellation fee for cancellations within the first 60
                      days. Applies to the monthly plan only.
										</p>
									) }
								</div>

								<div>
									<span className='text-sm font-medium mb-3 inline-block'>
										{ item.listTitle }
									</span>
									<ul className='flex flex-col gap-y-[11px] mb-6'>
										{ item.list.map((feature, featureIdx) => (
											<li
												key={ `feature-${featureIdx}` }
												className='text-sm !leading-normal gap-1.5 flex items-center font-medium -tracking-[0.53px]'
											>
												<QuestionTooltip
													icon={
														<GreenCheck className='w-4 h-4 text-green-alert' />
													}
													text={ feature.description || feature.title }
												/>
												{ feature.title }
											</li>
										)) }
									</ul>
								</div>

								{ item.mostPopular && (
									<span className='absolute top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
                    Most Popular
									</span>
								) }
								{ item.mostValue && (
									<span className='absolute top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
                    Free Bloodwork
									</span>
								) }
							</div>

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
