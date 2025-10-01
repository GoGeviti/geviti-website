'use client';
import React, {
	CSSProperties,
	useEffect,
	useRef,
	useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { collectSegments } from 'next/dist/build/segment-config/app/app-segments';
import Image from 'next/image';
import Link from 'next/link';

import { navbarDefaultTransition } from '@/constant/data/navbar';
import pricingData from '@/constant/data/pricing';
import clsxm from '@/helpers/clsxm';
import { ProductMembership } from '@/interfaces/product';
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
  productMembership?: ProductMembership;
};
const Hero: React.FC<HeroProps> = ({
	navbar = true,
	className,
	isFromHomePage = false,
	productMembership: productMembershipProps,
}) => {
	// console.log('productMembershipProps ==> ', productMembershipProps)
	const ref = useRef<HTMLDivElement>(null);

	const { productMembership, setProductMembership, selectedProductPrice, setSelectedProductPrice } = useCheckoutStore();

	useEffect(() => {
		if (productMembershipProps) {
			setSelectedProductPrice(productMembershipProps.productPrices[0]);
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
						className='container-center mx-auto w-full pt-[58px] lg:pt-[78px]'
					>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{ /* Card 1: Geviti Lite */ }
							<div className='w-full relative h-auto'>
								<div
									className='pt-[42px] pb-[34px] px-6 flex flex-col gap-10 rounded-2xl overflow-hidden w-full h-auto relative bg-[#FCFCFC] border-grey-100 border text-primary'
								>
									<div>
										<h3 className='!leading-[28px] text-[5.128vw] xs2:text-xl font-medium'>
											Geviti Lite
										</h3>

										<div className='font-medium text-5xl whitespace-nowrap !leading-[125%] py-1 h-full'>
											<span className='victor-serif-medium italic text-5xl !leading-[125%] py-1'>
												$99/mo
											</span>
										</div>
										<p className='text-xs leading-6'>
											<span className='text-[10px] font-medium whitespace-nowrap'>
												$1,188 billed annually
											</span>
											<br/>
										</p>

										<div className='flex flex-col mt-4'>
											<h3 className='font-medium text-3xl'>Geviti Lite</h3>
											<p className='font-normal text-xl text-opacity-90 mt-1'>Basic longevity plan</p>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>Basic bloodwork panel</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>30 min bloodwork review</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>Personalized health dashboard</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>20% off custom supplement protocol</p>
											</div>
										</div>

										<ButtonCta
											href='#'
											text='Get Started'
											theme='primary'
											className='w-full sm:w-fit mt-[25px]'
										/>
									</div>
								</div>
							</div>

							{ /* Card 2: Geviti Plus (Most Popular) */ }
							<div className='w-full relative h-auto'>
								<span className='absolute z-10 top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
									Most Popular
								</span>
								<div
									className={ clsxm(
										'pt-[42px] pb-[34px] px-6 flex flex-col gap-10 rounded-2xl overflow-hidden w-full h-auto relative',
										item.mostValue
											? ' text-white bg-most-value'
											: 'bg-[#FCFCFC] border-grey-100 border text-primary'
									) }
								>
									<div>
										<h3 className='!leading-[28px] text-[5.128vw] xs2:text-xl font-medium'>
											{ productMembership?.productName }
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
														selectedProductPrice.price,
														selectedProductPrice.interval || 'month',
														selectedProductPrice.intervalCount || 1
													);

													return (
														<span className='text-5xl victor-serif-medium italic !leading-[125%] py-1'>
															{ priceDetails.perMonthPrice || '$0' }/mo
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
													selectedProductPrice.price,
													selectedProductPrice.interval || 'month',
													selectedProductPrice.intervalCount || 1
												);

												return (
													<span className='text-[10px] font-medium whitespace-nowrap'>
														{ priceDetails.formattedPrice || '/mo' }
													</span>
												);
											})() }
											<br/>
										</p>

										<div className='flex flex-col mt-4'>
											<h3 className='font-medium text-3xl'>Geviti Plus</h3>
											<p className='font-normal text-xl text-opacity-90 mt-1'>Everything in Lite, plus</p>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>Dedicated Functional Longevity Specialist</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>45 min detailed bloodwork review</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>Quarterly virtual visits</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>40% off custom supplement protocol</p>
											</div>
										</div>

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
								</div>
							</div>

							{ /* Card 3: Geviti Premium */ }
							<div className='w-full relative h-auto'>
								<span className='absolute z-10 top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
									Premium
								</span>
								<div
									className='pt-[42px] pb-[34px] px-6 flex flex-col gap-10 rounded-2xl overflow-hidden w-full h-auto relative bg-[#FCFCFC] border-grey-100 border text-primary'
								>
									<div>
										<h3 className='!leading-[28px] text-[5.128vw] xs2:text-xl font-medium'>
											Geviti Premium
										</h3>

										<div className='font-medium text-5xl whitespace-nowrap !leading-[125%] py-1 h-full'>
											<span className='victor-serif-medium italic text-5xl !leading-[125%] py-1'>
												$299/mo
											</span>
										</div>
										<p className='text-xs leading-6'>
											<span className='text-[10px] font-medium whitespace-nowrap'>
												$3,588 billed annually
											</span>
											<br/>
										</p>

										<div className='flex flex-col mt-4'>
											<h3 className='font-medium text-3xl'>Geviti Premium</h3>
											<p className='font-normal text-xl text-opacity-90 mt-1'>Everything in Plus, plus</p>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>Comprehensive bloodwork panel</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>60 min in-depth analysis</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>Monthly virtual visits</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-1'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p>60% off custom supplement protocol</p>
											</div>
										</div>

										<ButtonCta
											href='#'
											text='Get Started'
											theme='primary'
											className='w-full sm:w-fit mt-[25px]'
										/>
									</div>
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
