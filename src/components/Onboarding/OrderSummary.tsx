'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { onboardingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { buttonVariants } from './Button';
import Checkbox from './Checkbox';
import { Tier } from './PricingPlans';

const steps = onboardingData.orderSummary.steps;
const defaultProducts = onboardingData.orderSummary.defaultProducts;

type OrderSummaryProps = {
	selectedPlan?: Tier | null;
	isAlreadyOnHRT?: boolean;
	withAnimation?: boolean;
};

type ButtonCheckoutProps = {
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
};

const ButtonCheckout: React.FC<ButtonCheckoutProps> = ({
	className,
	disabled,
	onClick,
}) => {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<motion.button
			className={ clsxm(
				'bg-white disabled:text-white/10 disabled:bg-opacity-10 w-full h-[45px] px-5 rounded-full text-primary focus:ring-0 focus:outline-none flex items-center justify-center',
				className
			) }
			disabled={ disabled }
			variants={ buttonVariants }
			onClick={ () => {
				setClicked(true);
				if (onClick) onClick();
				setTimeout(() => {
					setClicked(false);
				}, 250);
			} }
			whileHover={ !disabled ? (!clicked ? 'hover' : 'release') : undefined }
			whileTap={ !disabled ? 'tap' : undefined }
		>
			<div className='flex items-center justify-center gap-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='14'
					height='16'
					viewBox='0 0 14 16'
					fill='none'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M0.169588 3.72489C0 4.19565 0 4.73487 0 5.81332V9.61312C0 10.5102 0 10.9587 0.123641 11.3659C0.233099 11.7263 0.412558 12.0616 0.651739 12.3526C0.921916 12.6814 1.29512 12.9302 2.04151 13.4277H2.04153L3.80552 14.6038H3.80552C4.95438 15.3697 5.52881 15.7526 6.14969 15.9014C6.69841 16.0329 7.27034 16.0329 7.81906 15.9014C8.43991 15.7526 9.01435 15.3697 10.1632 14.6038L11.9272 13.4277C12.6736 12.9302 13.0468 12.6814 13.317 12.3526C13.5562 12.0616 13.7356 11.7263 13.8451 11.3659C13.9687 10.9587 13.9687 10.5102 13.9687 9.61312V5.81332C13.9687 4.73487 13.9687 4.19565 13.7992 3.72489C13.6493 3.30876 13.405 2.93299 13.0856 2.627C12.7244 2.28083 12.2316 2.06183 11.2461 1.62384L8.84637 0.557287C8.16068 0.252548 7.81784 0.100179 7.46146 0.0400011C7.14562 -0.0133337 6.82312 -0.0133337 6.50729 0.0400011C6.1509 0.100179 5.80806 0.252548 5.1224 0.557287L2.72264 1.62384C1.73714 2.06183 1.24439 2.28083 0.883075 2.627C0.5637 2.93299 0.319497 3.30876 0.169588 3.72489ZM9.87146 6.78656C10.0813 6.57675 10.0813 6.23658 9.87146 6.02677C9.66164 5.81695 9.32152 5.81695 9.1117 6.02677L6.26803 8.87041L5.21523 7.81759C5.00542 7.60785 4.66524 7.60785 4.45543 7.81759C4.24562 8.02741 4.24562 8.3676 4.45543 8.57742L5.88815 10.0101C6.09796 10.2199 6.43809 10.2199 6.6479 10.0101L9.87146 6.78656Z'
						fill='currentColor'
					/>
				</svg>
				<span className='text-sm font-semibold leading-normal'>
					{ onboardingData.orderSummary.cart.btnLabel }
				</span>
			</div>
		</motion.button>
	);
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
	isAlreadyOnHRT,
	selectedPlan,
	withAnimation = true,
}) => {
	const products = [
		...(!isAlreadyOnHRT ? defaultProducts : []),
		...(selectedPlan
			? [
				{
					name: selectedPlan?.title,
					price: selectedPlan?.price,
					free: false,
					image: selectedPlan?.image,
				},
			]
			: []),
	];

	const [isChecked, setIsChecked] = useState<boolean>(false);

	const renderButtonCheckout = () => {
		if (isAlreadyOnHRT) {
			return (
				<>
					<ButtonCheckout
						className='lg:hidden'
						disabled={ !isChecked } />
					<ButtonCheckout className='max-lg:hidden' />
				</>
			);
		}

		return <ButtonCheckout />;
	};

	return (
		<motion.div
			variants={
				withAnimation
					? {
						initial: { opacity: 0 },
						visible: { opacity: 1 },
						exit: {
							opacity: 0,
							transition: {
								duration: 0,
							},
						},
					}
					: undefined
			}
			initial='initial'
			animate='visible'
			exit='exit'
			className='w-full h-full lg:rounded-[20px] relative'
		>
			<div className='flex flex-col lg:items-center lg:justify-center px-4 xs2:px-6 lg:px-0 max-lg:py-[21px] relative w-full h-full z-10 max-w-5xl mx-auto text-left'>
				<div className='flex max-lg:flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 w-full'>
					<motion.div
						variants={
							withAnimation
								? {
									initial: {
										opacity: 0,
										y: 30,
									},
									visible: {
										opacity: 1,
										y: 0,
										transition: {
											delay: 0.5,
											duration: 0.5,
											ease: [0.15, 1.14, 0.88, 0.98],
										},
									},
									exit: {
										opacity: 0,
										y: 30,
									},
								}
								: undefined
						}
						initial='initial'
						animate='visible'
						exit='exit'
						className='max-w-[400px] max-lg:mx-auto'
					>
						<h3 className='text-white lg:text-grey-background text-2xl 2xl:text-[36px] font-medium lg:font-normal leading-normal font-Poppins -tracking-[0.04em]'>
							{ onboardingData.orderSummary.title }
						</h3>
						<h4 className='mt-[7px] font-BRSonoma text-sm leading-normal font-normal text-grey-primary lg:text-grey-background/70'>
							{ onboardingData.orderSummary.subtitle }
						</h4>
						<ul className='mt-[23px] lg:mt-11 flex flex-col gap-y-[11px] lg:gap-y-7'>
							{ steps.map((step, stepIdx) => {
								return (
									<li
										key={ stepIdx }
										className='flex gap-3 text-xs xs2:text-sm 2xl:text-base font-normal leading-normal font-Poppins -tracking-[0.04em] text-white'
									>
										<span className='flex-shrink-0 rounded-full relative w-8 h-8 2xl:w-[46px] 2xl:h-[46px] bg-white/20 backdrop-blur-[13.591408729553223px]'>
											<span className='absolute-center flex-shrink-0 text-base 2xl:text-[26px]'>
												{ stepIdx + 1 }
											</span>
										</span>
										{ step }
									</li>
								);
							}) }
						</ul>
					</motion.div>
					<div className='max-w-[400px] max-lg:mx-auto lg:ml-auto w-full'>
						<motion.div
							variants={
								withAnimation
									? {
										initial: {
											opacity: 0,
											y: 30,
										},
										visible: {
											opacity: 1,
											y: 0,
											transition: {
												delay: 0.75,
												duration: 0.5,
												ease: [0.15, 1.14, 0.88, 0.98],
											},
										},
										exit: {
											opacity: 0,
											y: 30,
										},
									}
									: undefined
							}
							initial='initial'
							animate='visible'
							exit='exit'
							className='w-full rounded-[20px] bg-white/10 shadow-[0px_15px_30px_0px_rgba(0,0,0,0.35)]'
						>
							<div className='max-lg:hidden px-[30px] py-7 bg-white/5 text-white rounded-t-[20px]'>
								<h4 className='font-BRSonoma text-2xl font-medium leading-normal -tracking-[0.025em]'>
									{ onboardingData.orderSummary.cart.title }
								</h4>
							</div>
							<div className='p-4 lg:p-[30px]'>
								<ul className='flex flex-col gap-y-2.5 lg:gap-y-[14px] mb-[14px]'>
									{ products.map((product, productIdx) => {
										return (
											<li
												key={ productIdx }
												className='flex items-start space-x-4'
											>
												<div className='relative overflow-hidden w-11 h-11 rounded-md bg-grey-background'>
													{ product.image && (
														<Image
															src={ product.image }
															alt={ product.name }
															className='flex-none object-cover object-center'
															sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
															fill
														/>
													) }
												</div>
												<div className='flex-auto text-grey-secondary font-Poppins'>
													<h5 className='text-sm font-medium leading-normal -tracking-[0.036em]'>
														{ product.name }
													</h5>
													<p className='flex-none text-xl font-semibold leading-normal -tracking-[0.05em]'>
														<span
															className={ clsxm(
																product.free
																	? 'text-grey-secondary/30 line-through'
																	: ''
															) }
														>
															{ product.price || '-' }{ ' ' }
														</span>
														{ product.free && (
															<span className='text-green-success'>
																{ onboardingData.orderSummary.cart.freeLabel }
															</span>
														) }
													</p>
												</div>
											</li>
										);
									}) }
								</ul>

								<div className='flex items-center justify-between border-t border-white border-opacity-10 pt-4 lg:pt-6 mb-[14px] lg:mb-6 text-white text-lg font-semibold leading-normal -tracking-[0.036em]'>
									<dt>{ onboardingData.orderSummary.cart.totalLabel }</dt>
									<dd className='text-right'>{ selectedPlan?.price || '-' }</dd>
								</div>

								{ isAlreadyOnHRT && (
									<div className='border-t border-white/10 pt-4 mb-[18px] lg:hidden'>
										<Checkbox
											id='order-consultation'
											label='I acknowledge that buying the Clinical Consultation does not guarantee the option to change therapy to Geviti.'
											labelClassName={ clsxm(
												'!text-xs leading-normal font-BRSonoma !font-normal',
												isChecked ? 'text-[#D0D5DD]' : 'text-[#D0D5DD]/60'
											) }
											className='!text-white focus:outline-transparent checked:focus:!outline-white bg-[#D0D5DD1A] outline-1 outline-[#D0D5DD1A] outline-offset-0 checked:outline-offset-2 checked:outline-2 checked:outline-white'
											checked={ isChecked }
											onChange={ (e: React.ChangeEvent<HTMLInputElement>) =>
												setIsChecked(e.target.checked) }
										/>
									</div>
								) }

								<Link
									href={ `https://geviti.myshopify.com/cart/${ selectedPlan?.variantID ?? ''
									}:1` }
								>
									{ renderButtonCheckout() }
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default OrderSummary;
