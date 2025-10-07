'use client';
import React, {
	CSSProperties,
	useEffect,
	useRef,
	useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { navbarDefaultTransition } from '@/constant/data/navbar';
import pricingData from '@/constant/data/pricing';
import clsxm from '@/helpers/clsxm';
import { ProductMembership } from '@/interfaces/product';
// import { formatPrice } from '@/lib/formatPrice';
import { useCheckoutStore } from '@/store/checkoutStore';

import ButtonCta from '../ButtonCta';
import { GreenCheck, RedEx } from '../Icons';
import ButtonSwitchMemberFreq from '../MemberShip/ButtonSwitchMemberFreq';
import Navbar from '../Navbar/Landing';
import PopupReview from '../PopupReview';

const item = pricingData.hero.list;
export const SIGN_UP_SITE_URL = 'https://app.gogeviti.com/onboarding/signup';

// Define pricing tiers for all cards based on frequency
export const PRICING_TIERS = {
	lite: {
		'semi annual': { monthlyPrice: '$66.67', billedAmount: '$399', period: '6mo' },
		annual: { monthlyPrice: '$56.67', billedAmount: '$679.89', period: 'yr' }
	},
	plus: {
		'semi annual': { monthlyPrice: '$129.99', billedAmount: '$779', period: '6mo' },
		annual: { monthlyPrice: '$110.50', billedAmount: '$1325.98', period: 'yr' }
	},
	premium: {
		'semi annual': { monthlyPrice: '$149.83', billedAmount: '$899', period: '6mo' },
		annual: { monthlyPrice: '$127.50', billedAmount: '$1529.98', period: 'yr' }
	}
};

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
	const ref = useRef<HTMLDivElement>(null);

	const { setProductMembership, selectedProductPrice, setSelectedProductPrice } = useCheckoutStore();
	
	// Individual frequency state for each card on mobile
	const [liteFrequency, setLiteFrequency] = useState<'semi annual' | 'annual'>('semi annual');
	const [plusFrequency, setPlusFrequency] = useState<'semi annual' | 'annual'>('semi annual');
	const [premiumFrequency, setPremiumFrequency] = useState<'semi annual' | 'annual'>('semi annual');
	
	// Global frequency state for desktop switcher
	const [, setGlobalFrequency] = useState<'semi annual' | 'annual'>('semi annual');

	// Determine current frequency based on selectedProductPrice
	const getCurrentFrequency = (): 'semi annual' | 'annual' => {
		if (!selectedProductPrice) return 'semi annual';
		
		// Map different intervals to our pricing tiers
		const interval = selectedProductPrice.interval;
		const intervalCount = selectedProductPrice.intervalCount;
		
		// If it's explicitly 'annual' or 'year' with intervalCount 1, it's annual
		if (interval === 'annual' || (interval === 'year' && intervalCount === 1)) {
			return 'annual';
		}
		
		// If it's 'semi annual' or 'month' with intervalCount 6, it's semi annual
		if (interval === 'semi annual' || (interval === 'month' && intervalCount === 6)) {
			return 'semi annual';
		}
		
		// Default to semi annual for any other cases
		return 'semi annual';
	};

	// const currentFrequency = getCurrentFrequency();

	useEffect(() => {
		if (productMembershipProps) {
			setSelectedProductPrice(productMembershipProps.productPrices[0]);
			setProductMembership(productMembershipProps);
		}
	}, [productMembershipProps]);

	// Sync global frequency with selectedProductPrice changes
	useEffect(() => {
		const frequency = getCurrentFrequency();
		setGlobalFrequency(frequency);
		// When global frequency changes, update all card frequencies on desktop
		setLiteFrequency(frequency);
		setPlusFrequency(frequency);
		setPremiumFrequency(frequency);
	}, [selectedProductPrice]);

	// useEffect(() => {
	// 	console.log('Hero component re-rendered with selectedProductPrice:', selectedProductPrice); // Add this line
	// }, [selectedProductPrice]);

	// const [activeListDropdown, setActiveListDropdown] = useState(-1);

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
						'container-center flex flex-col items-center pt-20 sm:pt-24 md:pt-28 lg:pt-[177px]',
						className
					) }
				>
					<div className='text-center pb-[42px] lg:pb-6'>
						<div className='pb-6 lg:pb-3 flex justify-center items-center w-full'>
							<PopupReview
								className='max-sm:w-full max-sm:max-w-[277px]'
								style={
                  {
                  	'--shadow-popup-pricing':
                      '0px 61px 25px rgba(184, 184, 184, 0.01), 0px 34px 21px rgba(184, 184, 184, 0.05), 0px 15px 15px rgba(184, 184, 184, 0.09), 0px 4px 8px rgba(184, 184, 184, 0.1)',
                  } as CSSProperties
								}
								wrapperClassName='[box-shadow:var(--shadow-popup-pricing)] max-sm:w-full lg:w-[274px] mx-auto'
							/>
						</div>
						<h2 className='mb-3.5 lg:mb-3 max-sm:max-w-[323px] mx-auto text-2xl md:text-3xl lg:text-[64px] !leading-normal text-primary -tracking-0.04em font-VictorSerif italic font-medium'>
							{ pricingData.hero.title }
						</h2>
						<p className='text-xs lg:text-sm !leading-5 text-grey-400 max-w-[283px] sm:max-w-[627px] mx-auto'>
							{ pricingData.hero.description }
						</p>
					</div>

					<div className='hidden md:flex w-fit flex-col items-center justify-center gap-[14px] mx-auto'>
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
										<h3 className='font-medium text-3xl pb-3'>Geviti Lite</h3>
										{ /* Mobile frequency switcher for this card */ }
										<div className='md:hidden w-full flex flex-col items-center justify-center gap-[8px] mb-4'>
											<span className='text-center text-[9px] text-[#919B9F] uppercase font-semibold tracking-[1px] leading-[12px]'>
                        Select Frequency
											</span>
											<div className='relative overflow-hidden w-full rounded-[100px] h-[40px] px-1 bg-grey-50'>
												<div className='relative grid h-full grid-cols-2'>
													<button
														onClick={ () => setLiteFrequency('semi annual') }
														className={ clsxm(
															'text-xs !leading-normal h-full flex items-center justify-center cursor-pointer whitespace-nowrap relative',
															liteFrequency === 'semi annual' ? 'text-white z-10' : 'text-grey-400'
														) }
													>
														Semi Annual
													</button>
													<button
														onClick={ () => setLiteFrequency('annual') }
														className={ clsxm(
															'text-xs !leading-normal h-full flex items-center justify-center cursor-pointer whitespace-nowrap relative',
															liteFrequency === 'annual' ? 'text-white z-10' : 'text-grey-400'
														) }
													>
														<span className='flex items-center justify-center w-full'>
															Annual
														</span>
														<div className={ clsxm(
															'absolute px-1 py-0.5 rounded-full font-semibold text-[8px] -right-[-0.3rem]',
															liteFrequency === 'annual' ? 'bg-white text-black' : 'bg-black text-white'
														) }>
															15% off
														</div>
													</button>
													<motion.div
														initial={ false }
														transition={ { type: 'spring', duration: 0.5 } }
														className='bg-primary absolute rounded-[100px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] h-[32px] top-1'
														style={ {
															width: 'calc(50% - 8px)',
															left: liteFrequency === 'semi annual' ? '4px' : 'calc(50% + 4px)',
														} }
													/>
												</div>
											</div>
										</div>

										<AnimatePresence mode='wait'>
											<motion.div
												key={ `lite_price_${liteFrequency}` }
												initial={ { y: -50, opacity: 0 } }
												animate={ { y: 0, opacity: 1 } }
												exit={ { y: 50, opacity: 0 } }
												transition={ { ease: 'linear', duration: 0.25 } }
												className='font-medium text-5xl whitespace-nowrap !leading-[125%] py-1 h-full'
											>
												<span className='victor-serif-medium italic text-5xl !leading-[125%] py-1'>
													{ PRICING_TIERS.lite[liteFrequency].monthlyPrice }/mo
												</span>
											</motion.div>
										</AnimatePresence>
										<p className='text-xs leading-6'>
											<span className='text-[12px] font-medium whitespace-nowrap'>
												(billed at { PRICING_TIERS.lite[liteFrequency].billedAmount } every { PRICING_TIERS.lite[liteFrequency].period })
											</span>
											<br/>
										</p>

										<div className='flex flex-col mt-4'>
											<p className='flex flex-row items-center gap-2 mb-1'>Perfect For Advanced Insights</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>100+ biomarker bloodwork panel every 6mo</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>At-home blood draw included*</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Personalized health optimization plan</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Access to custom supplement protocol</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Exclusive Savings</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Custom supplements discount</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Discounted specialty test access</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Dedicated Support</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Dedicated Functional Wellness Specialist</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Quarterly Functional Wellness Specialist visits</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Nutrition and lifestyle coaching</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Clinical Solutions</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Dedicated Longevity Practitioner</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Quarterly Longevity Practitioner visits</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Peptide therapy & regenerative medicine</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Hormone replacement therapy & other Rx</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Unavailable in</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>AK, HI, RI</p>
											</div>
										</div>

										<ButtonCta
											href={ SIGN_UP_SITE_URL }
											text='Get Started'
											theme='primary'
											className='w-full sm:w-fit sm:mx-auto mt-[35px]'
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
										<h3 className='font-medium text-3xl'>Geviti Plus</h3>

										{ /* Mobile frequency switcher for this card */ }
										<div className='md:hidden w-full flex flex-col items-center justify-center gap-[8px] mb-4'>
											<span className={ clsxm(
												'text-center text-[9px] uppercase font-semibold tracking-[1px] leading-[12px]',
												item.mostValue ? 'text-white/80' : 'text-[#919B9F]'
											) }>
                        Select Frequency
											</span>
											<div className='relative overflow-hidden w-full rounded-[100px] h-[40px] px-1 bg-grey-50'>
												<div className='relative grid h-full grid-cols-2'>
													<button
														onClick={ () => setPlusFrequency('semi annual') }
														className={ clsxm(
															'text-xs !leading-normal h-full flex items-center justify-center cursor-pointer whitespace-nowrap relative',
															plusFrequency === 'semi annual' ? 'text-white z-10' : 'text-grey-400'
														) }
													>
														Semi Annual
													</button>
													<button
														onClick={ () => setPlusFrequency('annual') }
														className={ clsxm(
															'text-xs !leading-normal h-full flex items-center justify-center cursor-pointer whitespace-nowrap relative',
															plusFrequency === 'annual' ? 'text-white z-10' : 'text-grey-400'
														) }
													>
														<span className='flex items-center justify-center w-full'>
															Annual
														</span>
														<div className={ clsxm(
															'absolute px-1 py-0.5 rounded-full font-semibold text-[8px] -right-[-0.3rem]',
															plusFrequency === 'annual' ? 'bg-white text-black' : 'bg-black text-white'
														) }>
															15% off
														</div>
													</button>
													<motion.div
														initial={ false }
														transition={ { type: 'spring', duration: 0.5 } }
														className='bg-primary absolute rounded-[100px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] h-[32px] top-1'
														style={ {
															width: 'calc(50% - 8px)',
															left: plusFrequency === 'semi annual' ? '4px' : 'calc(50% + 4px)',
														} }
													/>
												</div>
											</div>
										</div>

										<AnimatePresence mode='wait'>
											<motion.div
												key={ `plus_price_${plusFrequency}` }
												initial={ { y: -50, opacity: 0 } }
												animate={ { y: 0, opacity: 1 } }
												exit={ { y: 50, opacity: 0 } }
												transition={ { ease: 'linear', duration: 0.25 } }
												className='font-medium text-5xl whitespace-nowrap !leading-[125%] py-1 h-full'
											>
												<span className='victor-serif-medium italic text-5xl !leading-[125%] py-1'>
													{ PRICING_TIERS.plus[plusFrequency].monthlyPrice }/mo
												</span>
											</motion.div>
										</AnimatePresence>
										<p className='text-xs leading-6'>
											<span className='text-[12px] font-medium whitespace-nowrap'>
												(billed at { PRICING_TIERS.plus[plusFrequency].billedAmount } every { PRICING_TIERS.plus[plusFrequency].period })
											</span>
											<br/>
										</p>

										<div className='flex flex-col mt-4'>
											<p className='flex flex-row items-center gap-2 mb-1'>Ideal For Wellness Enthusiasts</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>100+ biomarker bloodwork panel every 6mo</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>At-home blood draw included*</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Personalized health optimization plan</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Access to custom supplement protocol</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Exclusive Savings</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>40% Custom supplements discount</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Discounted specialty test access</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Dedicated Support</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Assigned Functional Longevity Specialist</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Quarterly Longevity Specialist visits</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Nutrition and lifestyle coaching</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Clinical Solutions</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Dedicated Longevity Practitioner</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Quarterly Longevity Practitioner visits</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Peptide therapy & regenerative medicine</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>Hormone replacement therapy & other Rx</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Unavailable in</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<RedEx/>
												<p className='text-[12px]'>AK, HI, RI</p>
											</div>
										</div>

										<ButtonCta
											href={ SIGN_UP_SITE_URL }
											target={ isFromHomePage ? '_blank' : undefined }
											text={ item.btnCta.text }
											theme={ item.mostValue ? 'secondary' : 'primary' }
											className='w-full sm:w-fit sm:mx-auto mt-[45px]'
										/>
									</div>
								</div>
							</div>

							{ /* Card 3: Geviti Premium */ }
							<div className='w-full relative h-auto'>
								<div
									className='pt-[42px] pb-[34px] px-6 flex flex-col gap-10 rounded-2xl overflow-hidden w-full h-auto relative bg-[#FCFCFC] border-grey-100 border text-primary'
								>
									<div>
										<h3 className='font-medium text-3xl'>Geviti Plus Rx</h3>

										{ /* Mobile frequency switcher for this card */ }
										<div className='md:hidden w-full flex flex-col items-center justify-center gap-[8px] mb-4'>
											<span className='text-center text-[9px] text-[#919B9F] uppercase font-semibold tracking-[1px] leading-[12px]'>
                        Select Frequency
											</span>
											<div className='relative overflow-hidden w-full rounded-[100px] h-[40px] px-1 bg-grey-50'>
												<div className='relative grid h-full grid-cols-2'>
													<button
														onClick={ () => setPremiumFrequency('semi annual') }
														className={ clsxm(
															'text-xs !leading-normal h-full flex items-center justify-center cursor-pointer whitespace-nowrap relative',
															premiumFrequency === 'semi annual' ? 'text-white z-10' : 'text-grey-400'
														) }
													>
														Semi Annual
													</button>
													<button
														onClick={ () => setPremiumFrequency('annual') }
														className={ clsxm(
															'text-xs !leading-normal h-full flex items-center justify-center cursor-pointer whitespace-nowrap relative',
															premiumFrequency === 'annual' ? 'text-white z-10' : 'text-grey-400'
														) }
													>
														<span className='flex items-center justify-center w-full'>
															Annual
														</span>
														<div className={ clsxm(
															'absolute px-1 py-0.5 rounded-full font-semibold text-[8px] -right-[-0.3rem]',
															premiumFrequency === 'annual' ? 'bg-white text-black' : 'bg-black text-white'
														) }>
															15% off
														</div>
													</button>
													<motion.div
														initial={ false }
														transition={ { type: 'spring', duration: 0.5 } }
														className='bg-primary absolute rounded-[100px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] h-[32px] top-1'
														style={ {
															width: 'calc(50% - 8px)',
															left: premiumFrequency === 'semi annual' ? '4px' : 'calc(50% + 4px)',
														} }
													/>
												</div>
											</div>
										</div>

										<AnimatePresence mode='wait'>
											<motion.div
												key={ `premium_price_${premiumFrequency}` }
												initial={ { y: -50, opacity: 0 } }
												animate={ { y: 0, opacity: 1 } }
												exit={ { y: 50, opacity: 0 } }
												transition={ { ease: 'linear', duration: 0.25 } }
												className='font-medium text-5xl whitespace-nowrap !leading-[125%] py-1 h-full'
											>
												<span className='victor-serif-medium italic text-5xl !leading-[125%] py-1'>
													{ PRICING_TIERS.premium[premiumFrequency].monthlyPrice }/mo
												</span>
											</motion.div>
										</AnimatePresence>
										<p className='text-xs leading-6'>
											<span className='text-[12px] font-medium whitespace-nowrap'>
												(billed at { PRICING_TIERS.premium[premiumFrequency].billedAmount } every { PRICING_TIERS.premium[premiumFrequency].period })
											</span>
											<br/>
										</p>

										<div className='flex flex-col mt-4'>
											<p className='flex flex-row items-center gap-2 mb-1'>The Complete Longevity Solution</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>100+ biomarker bloodwork panel</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>At-home blood draw included*</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Personalized health optimization plan</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Access to custom supplement protocol</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Exclusive Savings</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>40% Custom supplements discount</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Discounted specialty test access</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Dedicated Support</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Dedicated Functional Longevity Specialist</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Quarterly Functional Longevity Specialist visits</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Nutrition and lifestyle coaching</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Clinical Solutions</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Dedicated Longevity Practitioner</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Quarterly Longevity Practitioner visits</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Peptide therapy & regenerative medicine</p>
											</div>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>Hormone replacement therapy & other Rx</p>
											</div>

											<p className='flex flex-row items-center gap-2 mb-1 mt-7'>Plus Rx is exclusively available in</p>
											<div className='flex flex-row items-center gap-2 mt-2'>
												<GreenCheck className='w-4 h-4 text-green-alert flex-shrink-0' />
												<p className='text-[12px]'>CA, TX, NY, FL, IL, PA, OH, GA, NC, MI, NJ, VA, WA, AZ, MA, IN, TN, MO, MD, WI</p>
											</div>
										</div>

										<ButtonCta
											href={ SIGN_UP_SITE_URL }
											text='Get Started'
											theme='primary'
											className='w-full sm:w-fit sm:mx-auto mt-[25px]'
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
