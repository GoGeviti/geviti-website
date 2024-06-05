'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import { checkoutData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import QuestionTooltip from '../Home/QuestionTooltip';
import { GreenCheck } from '../Icons';
import BiomarkersSection from '../MemberShip/BiomarkersSection';

import { getInitialOfferings } from './api/onboarding';
import { InitialOfferingsReturnType } from './api/types';
import { CheckoutStep } from './Main';
import Navbar from './Navbar';
import ProgressStep from './ProgressStep';

type PricingProductPlanProps = {
  setStep: Dispatch<SetStateAction<CheckoutStep>>;
};
// TODO: Local and DB data are not properly synced. Need to define proper typings in API contract
const pricingProductPlanData = checkoutData.pricingProductPlan;

const PricingProductPlan: React.FC<PricingProductPlanProps> = ({ setStep }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [initialOfferings, SetInitialOfferings] = useState<InitialOfferingsReturnType[]>([]);

	useEffect(() => {
		const getOfferings = async() => {
			const offerings = await getInitialOfferings();
			SetInitialOfferings(offerings);
		};
		getOfferings();
	}, []);

	const onClickBack = () => {
		router.back();
		if (setStep) setStep(CheckoutStep.FORM_PERSONAL_INFO);
	};

	const onClickSelectOption = (product: InitialOfferingsReturnType) => {
		if (setStep) {
			const params = new URLSearchParams(searchParams.toString());
			params.set('product', product.id);
			if (window) {
				window.history.pushState(null, '', `?${params.toString()}`);
				window.scrollTo({ top: 0 });
			}
			setStep(CheckoutStep.MEMBER_FREQUENCY_PLAN);
		}
	};

	return (
		<div className='flex flex-col w-full h-full min-h-screen'>
			<Navbar
				theme='light'
				arrowBack
				onClickBack={ onClickBack } />
			<motion.div
				variants={ {
					initial: { y: 0, opacity: 0 },
					visible: { y: 0, opacity: 1 },
					exit: { y: '-50%', opacity: 0 },
				} }
				initial='initial'
				animate='visible'
				exit='exit'
				transition={ { ease: 'easeInOut', duration: 1 } }
			>
				<div className='pt-[87px] lg:pt-[9.537vh] 2xl:pt-[103px] w-full h-full'>
					<div className='w-full container-center pt-6 lg:pt-[3.889vh] 2xl:pt-[42px]'>
						<ProgressStep
							currentIdx={ 1 }
							theme='light' />
						<h1 className='max-lg:mt-[42px] max-sm:max-w-[331px] mx-auto text-2xl lg:text-4xl !leading-normal text-primary lg:-tracking-0.04em text-center'>
							{ pricingProductPlanData.title }
						</h1>
						<p className='mt-4 lg:mt-3.5 max-lg:max-w-[253px] mx-auto text-grey-400 lg:text-grey-500 text-xs !leading-5 lg:text-sm lg:!leading-normal text-center'>
							{ pricingProductPlanData.description }
						</p>

						<div className='lg:max-w-full mx-auto sm:max-w-[392px] lg:flex-row flex-col flex gap-[42px] lg:gap-6 items-end w-full pt-[42px] lg:pt-[3.889vh] 2xl:pt-[42px]'>
							{ initialOfferings &&
                initialOfferings.map((item, index) => {
                	const productLocalData = pricingProductPlanData.list.find(it => it.name === item.name);
                	return (
                		<motion.div
                			key={ index }
                			variants={ {
                				initial: { y: 0, opacity: 0 },
                				visible: { y: 0, opacity: 1 },
                				exit: { y: '-50%', opacity: 0 },
                			} }
                			initial='initial'
                			animate='visible'
                			exit='exit'
                			transition={ { ease: 'easeInOut', duration: 1 } }
                			className='w-full'
                		>
                			<div
                				key={ index }
                				className='w-full relative'>
                				<div
                					className={ clsxm(
                						'pt-[42px] pb-[34px] px-6 rounded-2xl w-full relative',
                						productLocalData?.mostPopular ? 'bg-primary text-white' : 'bg-[#F5FBFF] text-primary',
                						index === 1 && 'z-10'
                					) }
                				>
                					<h3 className='!leading-[28px] text-[5.128vw] xs2:text-xl'>{ item.name }</h3>

                					<span className='font-medium text-5xl !leading-[125%] py-1'>
                						<span>${ item.price }</span>{ ' ' }
                						<span className='text-xs lg:text-sm'>{ productLocalData?.priceNote }</span>
                					</span>
                					<p className='font-medium text-xs lg:text-sm !leading-6'>+ ongoing membership fee</p>
                					<p className='text-4xl !leading-normal font-medium mb-[11px] mt-[25px] lg:mt-3.5'>
                						<span className='-tracking-0.04em'>{ productLocalData?.biomakers } </span>
                						<span className='text-xs !leading-normal'>biomarkers</span>
                					</p>

                					<ul className='flex flex-col gap-y-[11px] mb-6'>
                						{ productLocalData?.list.map((feature, featureIdx) => (
                							<li
                								key={ `feature-${featureIdx}` }
                								className='text-sm !leading-normal gap-1.5 flex items-center font-medium -tracking-[0.53px]'
                							>
                								<QuestionTooltip
                									icon={ <GreenCheck className='w-4 h-4 text-green-alert' /> }
                									text={ feature.description || feature.title }
                								/>
                								{ feature.title }
                							</li>
                						)) }
                					</ul>

                					<ButtonCta
                						text={ productLocalData?.btnCta.text }
                						theme={ productLocalData?.mostPopular ? 'secondary' : 'primary' }
                						className='w-full sm:w-fit mx-auto'
                						onClick={ () => onClickSelectOption(item) }
                					/>

                					{ productLocalData?.mostPopular ? (
                						<span className='absolute top-0 right-6 -translate-y-1/2 text-sm !leading-normal text-primary font-medium bg-blue-primary py-2 px-6 rounded-full'>
                              Most Popular
                						</span>
                					) : (
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
                			</div>
                		</motion.div>
                	);
                }) }
						</div>
					</div>
					<div className='mt-[66px] lg:mt-[3.889vh] 2xl:mt-[42px] pb-16 lg:pb-5 w-full lg:container-center'>
						<BiomarkersSection
							wrapperClassName='lg:bg-[#F5FBFF] py-6 lg:pt-[19px] lg:pb-[18px]'
							tabLayoutId='tab-biomakers-checkout'
							btnSwithLayoutId='switch-biomakers-checkout'
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default PricingProductPlan;
