'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimate, Variants } from 'framer-motion';

import { onboardingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { getNumofCols } from '@/helpers/style';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '../Accordion';

import BiomarkerCompare from './BiomarkerCompare';
import Button from './Button';
import Checkbox from './Checkbox';
import { slideInCenterToLeftProps, slideInRightToCenterProps, slideInVariants } from './transitions';

export const FeatureIcon = ({ className }: { className?: string; }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='17'
			viewBox='0 0 16 17'
			fill='none'
			className={ className }
		>
			<path
				d='M5.93852 7.375C5.93852 7.78921 6.27431 8.125 6.68852 8.125C7.10274 8.125 7.43852 7.78921 7.43852 7.375H5.93852ZM9.091 8.21598L8.54673 7.69996L9.091 8.21598ZM7.56639 8.73399C7.2814 9.03458 7.29405 9.50928 7.59464 9.79427C7.89523 10.0793 8.36994 10.0666 8.65493 9.76601L7.56639 8.73399ZM9.21619 11.5C9.21619 11.0858 8.8804 10.75 8.46619 10.75C8.05197 10.75 7.71619 11.0858 7.71619 11.5H9.21619ZM8.50512 11.5C8.50512 11.0858 8.16934 10.75 7.75512 10.75C7.34091 10.75 7.00512 11.0858 7.00512 11.5H8.50512ZM7.71619 11.5C7.71619 11.9142 8.05197 12.25 8.46619 12.25C8.8804 12.25 9.21619 11.9142 9.21619 11.5H7.71619ZM7.00512 11.5C7.00512 11.9142 7.34091 12.25 7.75512 12.25C8.16934 12.25 8.50512 11.9142 8.50512 11.5H7.00512ZM8.46619 12.25C8.8804 12.25 9.21619 11.9142 9.21619 11.5C9.21619 11.0858 8.8804 10.75 8.46619 10.75V12.25ZM7.75512 10.75C7.34091 10.75 7.00512 11.0858 7.00512 11.5C7.00512 11.9142 7.34091 12.25 7.75512 12.25V10.75ZM7.43852 7.375V7H5.93852V7.375H7.43852ZM7.43852 7C7.43852 6.5476 7.7766 6.25 8.11066 6.25V4.75C6.87382 4.75 5.93852 5.79554 5.93852 7H7.43852ZM8.11066 6.25C8.44471 6.25 8.78279 6.5476 8.78279 7H10.2828C10.2828 5.79554 9.34749 4.75 8.11066 4.75V6.25ZM8.78279 7V7.09098H10.2828V7H8.78279ZM8.78279 7.09098C8.78279 7.32654 8.69368 7.54496 8.54673 7.69996L9.63527 8.73199C10.054 8.29029 10.2828 7.69931 10.2828 7.09098H8.78279ZM8.54673 7.69996L7.56639 8.73399L8.65493 9.76601L9.63527 8.73199L8.54673 7.69996ZM7.71619 11.5C7.71619 11.331 7.8556 11.125 8.11066 11.125V12.625C8.75837 12.625 9.21619 12.0831 9.21619 11.5H7.71619ZM8.11066 11.125C8.36572 11.125 8.50512 11.331 8.50512 11.5H7.00512C7.00512 12.0831 7.46295 12.625 8.11066 12.625V11.125ZM9.21619 11.5C9.21619 10.9169 8.75837 10.375 8.11066 10.375V11.875C7.8556 11.875 7.71619 11.669 7.71619 11.5H9.21619ZM8.11066 10.375C7.46295 10.375 7.00512 10.9169 7.00512 11.5H8.50512C8.50512 11.669 8.36572 11.875 8.11066 11.875V10.375ZM8.46619 10.75H7.75512V12.25H8.46619V10.75ZM14.4713 8.5C14.4713 12.2661 11.5863 15.25 8.11066 15.25V16.75C12.4891 16.75 15.9713 13.0181 15.9713 8.5H14.4713ZM8.11066 15.25C4.63493 15.25 1.75 12.2661 1.75 8.5H0.25C0.25 13.0181 3.73216 16.75 8.11066 16.75V15.25ZM1.75 8.5C1.75 4.7339 4.63493 1.75 8.11066 1.75V0.25C3.73216 0.25 0.25 3.98182 0.25 8.5H1.75ZM8.11066 1.75C11.5863 1.75 14.4713 4.7339 14.4713 8.5H15.9713C15.9713 3.98182 12.4891 0.25 8.11066 0.25V1.75Z'
				fill='#919B9F' />
		</svg>
	);
};

export const CheckIcon = ({ className }: { className?: string; }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='23'
			height='23'
			viewBox='0 0 23 23'
			fill='none'
			className={ className }>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M23 11.5C23 17.8512 17.8512 23 11.5 23C5.14872 23 0 17.8512 0 11.5C0 5.14872 5.14872 0 11.5 0C17.8512 0 23 5.14872 23 11.5Z'
				fill='#A3E0FF' />
			<path
				d='M6.6416 12.444L9.27093 15.0733L15.8442 8.5'
				stroke='#181A1C'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round' />
		</svg>
	);
};

export type Tier = {
	id: string;
	variantID?: string;
	tag?: string;
	title: string;
	price: string;
	priceNote: string;
	biomarkers?: string;
	notes?: string;
	btn: string;
	features: string[];
	statement?: string;
	mostPopular: true;
	longTitle?: string;
	image?: string;
};

type PricingPlansProps = {
	isAlreadyOnHRT?: boolean;
	gender?: string;
	onSelect: (tier: Tier) => void; // eslint-disable-line no-unused-vars
	onMouseEnterButtonSelect?: (e: React.MouseEvent<HTMLButtonElement>) => void; // eslint-disable-line no-unused-vars
};

const getDataTiers = (isAlreadyOnHRT?: boolean, gender?: string) => {
	if (isAlreadyOnHRT) return onboardingData.pricingPlans.consultationTiers;
	if (gender?.toLowerCase() === 'female') return onboardingData.pricingPlans.bloodTiersWomen;
	return onboardingData.pricingPlans.bloodTiersMen;
};

const PricingPlans: React.FC<PricingPlansProps> = ({
	isAlreadyOnHRT,
	gender,
	onMouseEnterButtonSelect,
	onSelect
}) => {
	const tiers = getDataTiers(isAlreadyOnHRT, gender) as Tier[];
	const defaultValueTier = tiers.findIndex(tier => tier.mostPopular) ?? 1;

	const [hoveredIdx, setHoveredIdx] = useState<number>(defaultValueTier);
	const [openBiomarkerCompare, setOpenBiomarkerCompare] = useState<boolean>(false);
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const [scope, animate] = useAnimate();

	useEffect(() => {
		if (openBiomarkerCompare) {
			animate(scope.current, {
				opacity: 0,
				y: -30,
				transition: {
					opacity: {
						duration: .25,
						ease: [.15, 1.14, .88, .98]
					},
					y: {
						duration: .5,
						ease: [.15, 1.14, .88, .98]
					}
				}
			});
		} else {
			animate(scope.current, {
				opacity: 1,
				y: 0,
				transition: {
					opacity: {
						duration: .25,
						ease: [.15, 1.14, .88, .98]
					},
					y: {
						duration: .5,
						ease: [.15, 1.14, .88, .98]
					}
				}
			});
		}
	}, [openBiomarkerCompare]);

	const getText = () => {
		if (!isAlreadyOnHRT) {
			return {
				title: onboardingData.pricingPlans.bloodwork.title,
				subtitle: onboardingData.pricingPlans.bloodwork.subtitle,
			};
		}

		return {
			title: onboardingData.pricingPlans.switch.title,
			subtitle: onboardingData.pricingPlans.switch.subtitle,
		};
	};

	const getWrapperClassName = (tierIdx: number, mostPopular: boolean) => {
		const defaultClassName = hoveredIdx === tierIdx
			? '!rounded-[30px] ring-2 ring-blue-1 bg-blue-1-background opacity-100' : '!opacity-70';

		if (tierIdx === 0) return clsxm(
			'max-lg:rounded-t-[30px] max-lg:rounded-b-none lg:rounded-r-none lg:rounded-l-[30px]',
			defaultClassName
		);
		if (tierIdx === tiers.length - 1) return clsxm(
			'max-lg:rounded-b-[30px] max-lg:rounded-t-none lg:rounded-l-none lg:rounded-r-[30px]',
			defaultClassName
		);
		if (mostPopular) return clsxm('rounded-none', defaultClassName);
	};

	const renderTopCard = (tier: Tier, tierIdx: number) => {
		return (
			<>
				{ tier.tag && (
					<div className='flex mb-2.5 lg:mb-2'>
						<p className={ clsxm(
							'rounded-full px-2.5 font-BRSonoma py-1 text-xs lg:text-[10px] 2xl:text-xs font-bold leading-normal text-primary',
							hoveredIdx === tierIdx
								? 'bg-blue-1'
								: 'bg-primary/10'
						) }>
							{ tier.tag }
						</p>
					</div>
				) }
				<div className='flex items-end justify-between -mb-2.5 relative'>
					<div className='flex flex-col items-start text-left'>
						<h3 className='whitespace-nowrap text-left text-[17px] 2xl:text-[19px] leading-normal font-BRSonoma font-bold text-primary -leading-[0.025em]'>
							{ tier.title }
						</h3>
						<span>
							<span className='text-2xl xs2:text-[30px] 2xl:text-[36px] leading-normal -tracking-[0.04em] font-bold'>{ tier.price }</span>
							<span className='mb-2.5 text-[10px] xs2:text-[13px] font-medium leading-normal text-grey-primary -tracking-[0.036em] inline-block ml-0.5'>
								{ tier.priceNote }
							</span>
						</span>
					</div>
					{ tier.biomarkers && tier.notes && (
						<div className='flex flex-col items-end text-right max-sm:absolute max-sm:bottom-0 max-sm:right-0'>
							<span className='text-2xl xs2:text-[30px] 2xl:text-[36px] leading-normal -tracking-[0.04em] font-bold text-red-primary'>
								{ tier.biomarkers }
							</span>
							<span className='mb-2.5 text-[10px] xs2:text-[13px] font-semibold leading-normal text-[#52585A] -tracking-[0.036em] flex items-center'>
								<FeatureIcon className='w-3 h-3 2xl:w-[15px] 2xl:h-[15px] flex-shrink-0 inline-block mr-[3px]' />
								{ tier.notes }
							</span>
						</div>
					) }
				</div>
			</>
		);
	};

	const renderButtonSelectPlan = (tier: Tier, tierIdx: number, disabled?: boolean) => {
		if (hoveredIdx === tierIdx) {
			return (
				<Button
					className='mt-6 lg:mt-[2.7vh] text-sm lg:text-xs 2xl:text-sm'
					onClick={ () => onSelect(tier) }
					disabled={ disabled }
					onMouseEnter={ onMouseEnterButtonSelect }
				>
					{ tier.btn }
				</Button>
			);
		}

		return null;
	};

	const renderContentCard = (tier: Tier, tierIdx: number) => {
		return (
			<>
				<ul className='text-left space-y-3 lg:space-y-[1.1vh] mt-4 lg:mt-[1.1vh] pt-4 lg:pt-[2.2vh] border-t border-grey-primary/10'>
					{ tier.features.map(feature => (
						<li
							key={ feature }
							className='flex items-center justify-between gap-2'
						>
							<span className='flex items-baseline gap-x-1.5 text-base lg:text-xs 2xl:text-base font-medium leading-normal text-[#52585A] -leading-[0.036em]'>
								<FeatureIcon className='w-[15px] h-[15px] 2xl:w-[17px] 2xl:h-[17px] flex-shrink-0 max-sm:hidden' />
								<svg
									width='14'
									height='17'
									viewBox='0 0 14 17'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='flex-shrink-0 sm:hidden'>
									<path
										id='Shape'
										d='M4.52869 7.375C4.52869 7.78921 4.86447 8.125 5.27869 8.125C5.6929 8.125 6.02869 7.78921 6.02869 7.375H4.52869ZM7.50808 8.21598L6.94498 7.72057L7.50808 8.21598ZM6.03526 8.7546C5.76166 9.06559 5.79197 9.53949 6.10296 9.8131C6.41395 10.0867 6.88785 10.0564 7.16146 9.7454L6.03526 8.7546ZM7.67828 11.5C7.67828 11.0858 7.34249 10.75 6.92828 10.75C6.51407 10.75 6.17828 11.0858 6.17828 11.5H7.67828ZM7.01844 11.5C7.01844 11.0858 6.68266 10.75 6.26844 10.75C5.85423 10.75 5.51844 11.0858 5.51844 11.5H7.01844ZM6.17828 11.5C6.17828 11.9142 6.51407 12.25 6.92828 12.25C7.34249 12.25 7.67828 11.9142 7.67828 11.5H6.17828ZM5.51844 11.5C5.51844 11.9142 5.85423 12.25 6.26844 12.25C6.68266 12.25 7.01844 11.9142 7.01844 11.5H5.51844ZM6.92828 12.25C7.34249 12.25 7.67828 11.9142 7.67828 11.5C7.67828 11.0858 7.34249 10.75 6.92828 10.75V12.25ZM6.26844 10.75C5.85423 10.75 5.51844 11.0858 5.51844 11.5C5.51844 11.9142 5.85423 12.25 6.26844 12.25V10.75ZM6.02869 7.375V7H4.52869V7.375H6.02869ZM6.02869 7C6.02869 6.49264 6.3711 6.25 6.59836 6.25V4.75C5.36791 4.75 4.52869 5.85051 4.52869 7H6.02869ZM6.59836 6.25C6.82562 6.25 7.16803 6.49264 7.16803 7H8.66803C8.66803 5.85051 7.82881 4.75 6.59836 4.75V6.25ZM7.16803 7V7.09098H8.66803V7H7.16803ZM7.16803 7.09098C7.16803 7.34284 7.07914 7.56809 6.94498 7.72057L8.07117 8.71138C8.46198 8.26716 8.66803 7.68301 8.66803 7.09098H7.16803ZM6.94498 7.72057L6.03526 8.7546L7.16146 9.7454L8.07117 8.71138L6.94498 7.72057ZM6.17828 11.5C6.17828 11.426 6.20465 11.3424 6.26854 11.2698C6.33369 11.1957 6.4487 11.125 6.59836 11.125V12.625C7.28213 12.625 7.67828 12.0281 7.67828 11.5H6.17828ZM6.59836 11.125C6.74803 11.125 6.86303 11.1957 6.92818 11.2698C6.99207 11.3424 7.01844 11.426 7.01844 11.5H5.51844C5.51844 12.0281 5.91459 12.625 6.59836 12.625V11.125ZM7.67828 11.5C7.67828 10.9719 7.28213 10.375 6.59836 10.375V11.875C6.4487 11.875 6.33369 11.8043 6.26854 11.7302C6.20465 11.6576 6.17828 11.574 6.17828 11.5H7.67828ZM6.59836 10.375C5.91459 10.375 5.51844 10.9719 5.51844 11.5H7.01844C7.01844 11.574 6.99207 11.6576 6.92818 11.7302C6.86303 11.8043 6.74803 11.875 6.59836 11.875V10.375ZM6.92828 10.75H6.26844V12.25H6.92828V10.75ZM12.4467 8.5C12.4467 12.321 9.74091 15.25 6.59836 15.25V16.75C10.7441 16.75 13.9467 12.9632 13.9467 8.5H12.4467ZM6.59836 15.25C3.45578 15.25 0.75 12.321 0.75 8.5H-0.75C-0.75 12.9632 2.45259 16.75 6.59836 16.75V15.25ZM0.75 8.5C0.75 4.67893 3.45577 1.75 6.59836 1.75V0.25C2.4526 0.25 -0.75 4.03679 -0.75 8.5H0.75ZM6.59836 1.75C9.74092 1.75 12.4467 4.67894 12.4467 8.5H13.9467C13.9467 4.03679 10.7441 0.25 6.59836 0.25V1.75Z'
										fill='#919B9F' />
								</svg>

								{ feature }
							</span>
							<CheckIcon className='w-5 h-5 lg:w-[17px] lg:h-[17px] 2xl:w-[23px] 2xl:h-[23px]' />
						</li>
					)) }
				</ul>
				<div>
					{ tier.statement
						? (
							<div>
								<div className='max-lg:hidden'>
									<div className='border-t border-grey-primary/10 mt-[2.2vh] pt-[2.2vh] text-left lg:max-w-[280px] 2xl:max-w-[348px]'>
										<Checkbox
											id={ `pricing-${ tierIdx }` }
											label={ tier.statement }
											labelClassName='text-xs lg:text-[10px] 2xl:text-xs'
											className='w-[14px] h-[14px] lg:w-2.5 lg:h-2.5 2xl:w-[14px] 2xl:h-[14px]'
											checked={ isChecked }
											onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked) }
										/>
									</div>
									{ renderButtonSelectPlan(tier, tierIdx, !isChecked) }
								</div>
								<div className='lg:hidden'>
									{ renderButtonSelectPlan(tier, tierIdx) }
								</div>
							</div>
						)
						: renderButtonSelectPlan(tier, tierIdx) }
				</div>
			</>
		);
	};

	const renderCompareLabel = () => {
		if (!isAlreadyOnHRT) {
			return (
				<button
					className='flex items-center gap-2.5 group lg:hover:bg-grey-primary/30 lg:focus:bg-grey-primary/50 rounded-[10px] px-3 py-0.5 -my-0.5 font-Poppins cursor-pointer focus:outline-none focus:ring-0'
					onClick={ () => setOpenBiomarkerCompare(prev => !prev) }
				>
					<span className='text-primary text-sm font-semibold leading-6'>{ onboardingData.pricingPlans.bloodwork.compareLabel }</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='6'
						height='11'
						viewBox='0 0 6 11'
						fill='none'
						className={ clsxm(
							'transform transition-all duration-300 inline-block',
							openBiomarkerCompare ? 'rotate-90' : ''
						) }>
						<path
							d='M1 1L5.5 5.5L1 10'
							stroke='#181A1C'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round' />
					</svg>
				</button>
			);
		}

		return null;
	};

	const renderFooter = () => {
		if (!isAlreadyOnHRT) {
			return (
				<div className='max-xl:hidden flex flex-col items-center text-center text-primary/70 font-BRSonoma text-xs leading-normal font-normal pb-[2.4vh] pt-1.5 relative z-10'>
					{ onboardingData.pricingPlans.bloodwork.disclaimerLabel.map((text: string, textIdx: number) => (
						<span
							key={ textIdx }
							dangerouslySetInnerHTML={ { __html: text ?? '' } } />
					)) }
				</div>
			);
		}

		return null;
	};

	const getPricingCardVariants = (tierIdx: number): Variants => {
		if (tierIdx === 0) {
			return {
				initial: {
					x: '100%',
					...tiers.length === 1 ? { opacity: 0 } : { visibility: 'hidden' }
				},
				inView: {
					x: 0,
					...tiers.length === 1
						? {
							opacity: 1,
							transition: {
								...slideInCenterToLeftProps,
								delay: 0.08
							}
						}
						: {
							visibility: 'visible',
							transition: {
								...slideInCenterToLeftProps,
								delay: 1.1
							}
						},
				}
			};
		} else if (tierIdx === 1) {
			return {
				initial: { x: '100vw' },
				inView: {
					x: 0,
					transition: {
						...slideInRightToCenterProps,
						delay: .08
					}
				}
			};
		} else {
			return {
				initial: { x: '-100%', visibility: 'hidden' },
				inView: {
					x: 0,
					visibility: 'visible',
					transition: {
						...slideInCenterToLeftProps,
						delay: 1.1
					}
				}
			};
		}
	};

	const renderPricingPlans = () => {
		return (
			<div className={ clsxm(
				'w-full flex-grow flex flex-col justify-between h-full relative',
				openBiomarkerCompare ? 'max-lg:hidden' : ''
			) }>
				<div
					ref={ scope }
					className='relative overflow-hidden flex-1 h-full flex flex-col items-center w-full max-lg:pb-[120px] max-lg:pt-[21px] lg:top-[5%] 2xl:top-[10%]'>
					<div className='max-lg:pb-[23px] max-lg:px-6 flex flex-col items-center text-center'>
						<motion.h1
							variants={ slideInVariants }
							initial='initial'
							animate='visible'
							className={ clsxm(
								'text-2xl 2xl:text-[36px] leading-normal -tracking-[0.04em] max-lg:font-medium text-center',
								isAlreadyOnHRT ? 'max-w-[430px] 2xl:max-w-[600px] mx-auto' : 'max-w-[430px] mx-auto'
							) }>
							{ getText().title }
						</motion.h1>
						<motion.h2
							variants={ slideInVariants }
							initial='initial'
							animate='visible'
							className={ clsxm(
								'max-lg:mt-[7px] text-sm font-BRSonoma leading-normal text-primary/70 font-normal',
								isAlreadyOnHRT ? 'max-w-[430px] mx-auto' : 'max-w-[360px] mx-auto'
							) }>
							{ getText().subtitle }
						</motion.h2>
						{ !isAlreadyOnHRT && (
							<motion.div
								variants={ slideInVariants }
								initial='initial'
								animate='visible'
								className='max-lg:hidden lg:mt-[2.2vh]'
							>
								{ renderCompareLabel() }
							</motion.div>
						) }
					</div>
					<div className={ clsxm(
						'max-lg:px-2.5 lg:hidden max-sm:w-full',
						hoveredIdx === 0 ? 'max-lg:mt-[23px]' : ''
					) }>
						<Accordion
							type='single'
							onValueChange={ (value: string) => setHoveredIdx(+ value) }
							value={ hoveredIdx.toString() }
							defaultValue={ defaultValueTier.toString() }
						>
							{ tiers.map((tier: Tier, tierIdx: number) => {
								return (
									<AccordionItem
										key={ tierIdx }
										value={ tierIdx.toString() }
										className={ clsxm(
											getWrapperClassName(tierIdx, tier.mostPopular),
											'flex flex-col justify-between border-[0.5px] border-grey-background lg:p-[3.7vh] max-sm:w-full',
											hoveredIdx === tierIdx ? 'z-10 relative lg:my-0 max-lg:-my-4 shadow-card p-6' : 'bg-white lg:my-[4.25vh] max-lg:px-6 max-lg:py-[30px] z-[9]'
										) }
									>
										<AccordionTrigger>
											{ renderTopCard(tier, tierIdx) }
										</AccordionTrigger>
										<AccordionContent>
											{ renderContentCard(tier, tierIdx) }
										</AccordionContent>
									</AccordionItem>
								);
							}) }
						</Accordion>
					</div>
					<div className={ clsxm(
						'max-lg:hidden isolate mt-[2.2vh] grid mx-0 max-w-none lg:px-2',
						getNumofCols(tiers.length)
					) }>
						{ tiers.map((tier: Tier, tierIdx: number) => (
							<motion.div
								key={ tierIdx }
								variants={ getPricingCardVariants(tierIdx) }
								initial='initial'
								animate='inView'
								className={ clsxm(
									getWrapperClassName(tierIdx, tier.mostPopular),
									'flex flex-col justify-between border-[0.5px] border-grey-background lg:p-[3.7vh]',
									hoveredIdx === tierIdx ? 'z-10 lg:my-0 shadow-card p-6' : 'bg-white lg:my-[4.25vh] max-lg:px-6 max-lg:py-[30px]'
								) }
								onMouseEnter={ () => setHoveredIdx(tierIdx) }
							>
								<div>
									{ renderTopCard(tier, tierIdx) }
									{ renderContentCard(tier, tierIdx) }
								</div>
							</motion.div>
						)) }
					</div>
				</div>
				<motion.div
					variants={ {
						initial: {
							opacity: 0
						},
						visible: {
							opacity: 1,
							transition: {
								delay: 1.1,
								duration: 1,
								ease: [.74, .16, .88, .98]
							}
						}
					} }
					initial='initial'
					animate='visible'>
					{ renderFooter() }
				</motion.div>
			</div>
		);
	};

	const renderCloseCompareLabel = () => {
		return (
			<button
				className='focus:ring-0 focus:outline-none text-white inline-flex items-center gap-2'
				onClick={ () => setOpenBiomarkerCompare(false) }
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					className='inline-block'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7763 11.777C12.0746 11.4786 12.0746 10.9964 11.7763 10.6981L9.07888 7.99996L11.7762 5.30266C12.0745 5.00433 12.0745 4.52133 11.7762 4.22375C11.4778 3.92542 10.9956 3.92542 10.6973 4.22375L7.99996 6.92105L5.30266 4.22375C5.00433 3.92542 4.52133 3.92542 4.22375 4.22375C3.92542 4.52133 3.92542 5.00433 4.22375 5.30266L6.92105 7.99996L4.2245 10.6973C3.92617 10.9948 3.92617 11.4778 4.2245 11.7762C4.37329 11.925 4.56865 11.9998 4.76398 11.9998C4.95855 11.9998 5.15391 11.925 5.30345 11.7762L8 9.07888L10.6973 11.777C10.8461 11.9258 11.0415 12.0005 11.2368 12.0005C11.4321 12.0005 11.6275 11.9258 11.7763 11.777Z'
						fill='white' />
				</svg>
				{ onboardingData.pricingPlans.bloodwork.closeCompareLabel }
			</button>
		);
	};

	return (
		<>
			<motion.div
				variants={ {
					initial: {
						x: '100vw',
					},
					visible: {
						x: 0,
						transition: slideInRightToCenterProps
					},
					exit: {
						x: 0,
						opacity: 0,
						transition: {
							duration: 0
						}
					}
				} }
				initial='initial'
				animate='visible'
				exit='exit'
				className='w-full h-full lg:rounded-[20px] text-center relative'
			>
				{ renderPricingPlans() }

				<BiomarkerCompare
					open={ openBiomarkerCompare }
					compareLabel={ renderCompareLabel() }
					footer={ renderFooter() } />
			</motion.div>
			{ !isAlreadyOnHRT && (
				<motion.div
					initial={ { y: '100%' } }
					animate={ { y: 0 } }
					transition={ { duration: .3, delay: .75, ease: [.15, 1.14, .88, .98] } }
					exit={ {
						visibility: 'hidden',
						transition: {
							duration: 0
						}
					} }
					className={ clsxm(
						'lg:hidden sticky w-full z-[99] bottom-0 inset-x-0 shadow-[0px_5px_10px_0px_rgba(167,172,188,0.05)] flex items-center justify-center pt-3 pb-[14px]',
						openBiomarkerCompare ? 'bg-primary' : 'bg-white'
					) }>
					{ openBiomarkerCompare ? renderCloseCompareLabel() : renderCompareLabel() }
				</motion.div>
			) }
		</>
	);
};

export default PricingPlans;
