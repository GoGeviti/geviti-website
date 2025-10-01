'use client';

import React from 'react';
import { motion } from 'framer-motion';

import clsxm from '@/helpers/clsxm';
import { ProductMembership } from '@/interfaces/product';
import { useCheckoutStore } from '@/store/checkoutStore';

type ButtonSwitchMemberFreqProps = {
  layoutId?: string;
  showHightlightTextOnMobile?: boolean;
};

const ButtonSwitchMemberFreq: React.FC<ButtonSwitchMemberFreqProps> = ({
	layoutId = 'pill-tab-switch-pricingplans',
}) => {
	const { setSelectedProductPrice, productMembership, selectedProductPrice } = useCheckoutStore();

	const handleClick = (opt: ProductMembership['productPrices'][0]) => {
		setSelectedProductPrice(opt);
	};

	const renderButtonSwitchFrequency = () => {
		const selectedIndex = productMembership?.productPrices.findIndex(
			e => e.productPriceId === selectedProductPrice?.productPriceId
		) ?? 0;
		const totalOptions = productMembership?.productPrices.length ?? 1;

		return (
			<div className='relative overflow-hidden w-full rounded-[100px] h-[49px] px-1.5 bg-grey-50'>
				<div
					className='relative grid h-full'
					style={ { gridTemplateColumns: `repeat(${totalOptions}, 1fr)` } }>
					{ productMembership?.productPrices.map(opt => {
						const isSelected = opt.productPriceId === selectedProductPrice?.productPriceId;
						return (
							<button
								key={ opt.productPriceId }
								aria-label={ opt.nickname }
								onClick={ () => handleClick(opt) }
								className={ clsxm(
									'text-sm !leading-normal h-full flex px-10 items-center justify-center cursor-pointer whitespace-nowrap',
									isSelected ? 'text-white z-10' : 'text-grey-400'
								) }
							>
								{ opt.billingFrequency.charAt(0).toUpperCase() + opt.billingFrequency.slice(1) }
							</button>
						);
					}) }
					
					<motion.div
						layoutId={ layoutId }
						initial={ false }
						transition={ { type: 'spring', duration: 0.5 } }
						className='bg-primary absolute rounded-[100px] px-10 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] h-[37px] top-1.5'
						style={ {
							width: `calc(${100 / totalOptions}% - 12px)`,
							left: `calc(${(selectedIndex * 100) / totalOptions}% + 6px)`,
						} }
					/>
				</div>
			</div>
		);
	};

	return renderButtonSwitchFrequency();
};

export default ButtonSwitchMemberFreq;
