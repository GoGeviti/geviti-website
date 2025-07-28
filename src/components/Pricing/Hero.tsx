'use client';
import React, {
	CSSProperties,
	useEffect,
	useRef,
	useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { navbarDefaultTransition } from '@/constant/data/navbar';
import pricingData from '@/constant/data/pricing';
import clsxm from '@/helpers/clsxm';
import { NewProductMembership } from '@/interfaces/product';
// import { formatPrice } from '@/lib/formatPrice';
import { BillingInterval, generateStripeNickname } from '@/lib/generateStripeNickname';
import { useCheckoutStore } from '@/store/checkoutStore';

import ButtonCta from '../ButtonCta';
import { ChevronDown, GreenCheck, ShieldTick } from '../Icons';
import ButtonSwitchMemberFreq from '../MemberShip/ButtonSwitchMemberFreq';
import Navbar from '../Navbar/Landing';
import PopupReview from '../PopupReview';

const item = pricingData.hero.list;

type HeroProps = {
  navbar?: boolean;
  className?: string;
  isFromHomePage?: boolean;
  productMembership?: NewProductMembership;
};
const Hero: React.FC<HeroProps> = ({
	navbar = true,
	className,
	isFromHomePage = false,
	productMembership: productMembershipProps,
}) => {
	const ref = useRef<HTMLDivElement>(null);

	const { productMembership, setProductMembership, selectedProductPrice, setSelectedProductPrice } = useCheckoutStore();

	useEffect(() => {
		if (productMembershipProps) {
			setSelectedProductPrice(productMembershipProps.prices[0]);
			setProductMembership(productMembershipProps);
		}
	}, [productMembershipProps]);

	// useEffect(() => {
	// 	console.log('Hero component re-rendered with selectedProductPrice:', selectedProductPrice); // Add this line
	// }, [selectedProductPrice]);

	const [activeListDropdown, setActiveListDropdown] = useState(-1);

	return (
		<React.Fragment>
			{ navbar && (
				<Navbar
					animationProps={ {
						transition: {
							...navbarDefaultTransition,
							delay: 1.1,
						},
					} }
					theme='light'
				/>
			) }
			<div
				id='packages'
				className='font-Poppins relative z-[3]'>
				<div
					className={ clsxm(
						'container-center flex flex-col items-center pt-[129px] lg:pt-[177px]',
						className
					) }
				>
					<div className='text-center pb-[42px] lg:pb-6'>
						<div className='pb-6 lg:pb-3 flex justify-center w-full'>
							<PopupReview
								className='max-sm:w-full max-sm:max-w-[277px]'
								style={
                  {
                  	'--shadow-popup-pricing':
                      '0px 61px 25px rgba(184, 184, 184, 0.01), 0px 34px 21px rgba(184, 184, 184, 0.05), 0px 15px 15px rgba(184, 184, 184, 0.09), 0px 4px 8px rgba(184, 184, 184, 0.1)',
                  } as CSSProperties
								}
								wrapperClassName='[box-shadow:var(--shadow-popup-pricing)] max-sm:w-full lg:w-[274px]'
							/>
						</div>
						<h2 className='mb-3.5 lg:mb-3 max-sm:max-w-[323px] mx-auto text-2xl md:text-3xl lg:text-[64px] !leading-normal text-primary -tracking-0.04em'>
							{ pricingData.hero.title }
						</h2>
						<p className='text-xs lg:text-sm !leading-5 text-grey-400 max-w-[283px] sm:max-w-[627px] mx-auto'>
							{ pricingData.hero.description }
						</p>
					</div>

					<div className='w-fit flex flex-col items-center justify-center gap-[14px]'>
						<span className='text-center text-[10px] text-[#919B9F] uppercase font-semibold tracking-[1.1px] leading-[15px]'>
              Select Membership Frequency
						</span>
						<ButtonSwitchMemberFreq
							showHightlightTextOnMobile
						/>
					</div>

					<div
						ref={ ref }
						className='lg:max-w-[1061px] mx-auto sm:max-w-[392px] lg:grid-cols-9 flex max-lg:flex-col lg:grid gap-6 lg:gap-3.5 items-end w-full pt-[58px] lg:pt-[78px]'
					>
						<div className='w-full max-lg:order-2 relative h-full lg:col-span-3'>
							<div className='rounded-2xl pt-7 w-full max-lg:h-full max-lg:min-h-[529px] lg:h-[450px] relative overflow-hidden bg-[linear-gradient(0deg,#A7DAFF_0%,#75C5FF_100%)]'>
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
										<p className='text-[10px] !leading-6 font-semibold tracking-0.11em text-grey-800 uppercase'>
											{ pricingData.hero.banner.preTitle }
										</p>
										<h3 className='h6 !leading-normal text-black -tracking-0.04em'>
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
									className='object-contain w-full h-[458px] lg:h-[350px] object-right absolute -bottom-10 lg:-bottom-1.5 lg:right-0'
								/>
							</div>
						</div>
						<div className='w-full relative h-full lg:h-[450px] lg:col-span-6'>
							{ item.mostPopular && (
								<span className='absolute z-10 top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
                  Most Popular
								</span>
							) }
							{ item.mostValue && (
								<span className='absolute z-10 top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
                  Free Bloodwork
								</span>
							) }
							<div
								className={ clsxm(
									'pt-[42px] pb-[34px] px-6 grid gap-10 grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden w-full h-full relative',
									item.mostValue
										? ' text-white bg-most-value'
										: 'bg-[#FCFCFC] border-grey-100 border text-primary'
								) }
							>
								<div>
									<h3 className='!leading-[28px] text-[5.128vw] xs2:text-xl font-medium'>
										{ productMembership?.name }
									</h3>

									<AnimatePresence mode='wait'>
										<motion.span
											key={ `price_${selectedProductPrice?.priceId}` }
											initial={ { y: -50, opacity: 0 } }
											animate={ { y: 0, opacity: 1 } }
											exit={ { y: 50, opacity: 0 } }
											transition={ { ease: 'linear', duration: 0.25 } }
											className='font-medium text-5xl whitespace-nowrap !leading-[125%] py-1 h-full'
										>
											{ (() => {
												if (!selectedProductPrice) {
													return (
														<span className='font-medium text-5xl !leading-[125%] py-1'>
                              Loading...
														</span>
													);
												}
												const priceDetails = generateStripeNickname(
													Number(selectedProductPrice.price),
													selectedProductPrice.interval as BillingInterval || 'month',
													selectedProductPrice.intervalCount || 1
												);

												return (
													<span className='font-medium text-5xl !leading-[125%] py-1'>
														{ priceDetails.perMonthPrice || '$0' }
														<span className='text-xs font-medium whitespace-nowrap'>
															{ priceDetails.suffix || '/month' }
														</span>
													</span>
												);
											})() }
										</motion.span>
									</AnimatePresence>
									<p className='text-xs leading-6'>
										{ (() => {
											if (!selectedProductPrice) {
												return (
													<span className='text-[10px] font-medium whitespace-nowrap'>
                              Loading...
													</span>
												);
											}
											const priceDetails = generateStripeNickname(
												Number(selectedProductPrice.price),
												selectedProductPrice.interval as BillingInterval || 'month',
												selectedProductPrice.intervalCount || 1
											);

											return (
												<span className='text-[10px] font-medium whitespace-nowrap'>
													{ priceDetails.formattedPrice || '/month' }
												</span>
											);
										})() }
										<br/>
										<span>
											<span className='font-medium'>
                        Includes the “
												<Link
													href='/longeviti-panel'
													className='underline'>
                          Longeviti Panel
												</Link>
                        ”
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
                      productMembership?.productId +
                      '&price_id=' +
                      selectedProductPrice?.priceId
										}
										target={ isFromHomePage ? '_blank' : undefined }
										text={ item.btnCta.text }
										theme={ item.mostValue ? 'secondary' : 'primary' }
										className='w-full sm:w-fit mt-[25px]'
									/>
								</div>

								<div>
									<span className='text-sm font-medium mb-3 inline-block'>
										{ item.listTitle }
									</span>
									<ul className='flex flex-col gap-y-[11px] mb-6'>
										{ item.list.map((feature, featureIdx) => (
											<li
												key={ `feature-${featureIdx}` }
												className='text-sm !leading-normal gap-1.5 flex items-start font-medium -tracking-[0.53px]'
											>
												<div className='mt-1'>
													<GreenCheck className='w-4 h-4 text-green-alert' />
												</div>
												<button
													onClick={ () =>
														setActiveListDropdown(
															activeListDropdown === featureIdx
																? -1
																: featureIdx
														) }
													className='flex flex-col cursor-pointer'
												>
													<div className='flex items-center gap-2'>
														<span>{ feature.title }</span>
														<ChevronDown
															className={ ` transform ${
																activeListDropdown === featureIdx
																	? 'rotate-180'
																	: 'rotate-0'
															} transition-transform ease-out duration-300` }
														/>
													</div>
													<p
														className={ clsxm(
															'body-extra-small text-left',
															'max-h-[300px] overflow-hidden transition-all duration-300',
															activeListDropdown === featureIdx
																? 'max-h-[300px]'
																: 'max-h-0'
														) }
													>
														{ feature.description }
													</p>
												</button>
											</li>
										)) }
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Hero;
