'use client';

import React, { useCallback, useEffect, useState } from 'react';

import { marketingData } from '@/constant/data';

import Slider from '../Slider';

import { SectionTitle } from './SectionHeading';

const employeePricingData = marketingData.employeePricing;
const rules = employeePricingData.rules;
const MAX_VALUE = rules[rules.length - 1].min;
const EmployeePricing: React.FC = () => {
	const [value, setValue] = useState<number>(10);
	const [currentPrice, setCurrentPrice] = useState<number>(rules[0].price);

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		trailingZeroDisplay: 'stripIfInteger',
	});

	const getCurrentPrice = (updatedVal: number) => {
		if (updatedVal >= MAX_VALUE) return rules[rules.length - 1].price;

		const findRule = rules.find(rule => {
			return updatedVal >= rule.min && updatedVal <= rule.max;
		});

		return findRule?.price ?? rules[0].price;
	};

	const onChangeInput = useCallback((inputVal: number) => {
		setValue(inputVal);
		const updatedPrice = getCurrentPrice(inputVal);
		setCurrentPrice(updatedPrice);
	}, []);

	const renderTextSavings = (title: string, textValue: string) => {
		return (
			<span className='text-sm lg:text-lg font-medium text-grey-primary max-lg:inline-flex max-lg:justify-between max-lg:items-center'>
				<span>{ title }</span>{ ' ' }
				<span className='text-green-alert'>{ textValue }</span>
			</span>
		);
	};

	const renderDisclaimerText = () => {
		return (
			<div className='max-w-[607px]'>
				<p className='uppercase text-primary text-[10px] max-lg:!leading-[15px] lg:text-base font-semibold tracking-0.11em'>
					{ employeePricingData.disclaimer.title }
				</p>
				<p className='text-xs lg:text-sm font-medium text-grey-primary !leading-5 lg:!leading-6'>
					{ employeePricingData.disclaimer.content }
				</p>
			</div>
		);
	};

	return (
		<div className='w-full mb-6 lg:mb-[124px] pb-12 pt-6 lg:py-16 max-lg:border border-black/5 rounded-2xl'>
			<div className='w-full container-center flex flex-col lg:items-center lg:text-center gap-3.5'>
				<SectionTitle title={ employeePricingData.title } />

				<p className='max-w-[607px] lg:mx-auto text-grey-primary text-sm font-medium !leading-6'>
					{ employeePricingData.description }
				</p>
			</div>
			<div className='w-full container-center mt-[42px]'>
				<div className='flex-[0_0_100%] min-w-0'>
					<div
						className='w-full lg:bg-white lg:rounded-20px lg:p-6 max-lg:!shadow-none'
						style={ {
							boxShadow:
                '0px 518px 145px 0px rgba(210, 229, 244, 0.00), 0px 332px 133px 0px rgba(210, 229, 244, 0.03), 0px 187px 112px 0px rgba(210, 229, 244, 0.09), 0px 83px 83px 0px rgba(210, 229, 244, 0.16), 0px 21px 46px 0px rgba(210, 229, 244, 0.18)',
						} }
					>
						<div className='flex flex-col gap-6 lg:gap-[42px]'>
							<div className='flex max-sm:flex-col lg:items-center w-full gap-6 sm:justify-between'>
								<h5 className='text-lg lg:text-2xl !leading-normal -tracking-0.04em text-primary'>
									{ employeePricingData.inputLabel }
								</h5>

								<input
									type='text'
									pattern='[0-9]*'
									inputMode='numeric'
									value={ value }
									onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
										onChangeInput(
											Number(e.target.value.replace(/[^\d]+/g, ''))
										);
									} }
									className='py-2 px-3.5 w-full sm:w-[120px] text-2xl !leading-normal -tracking-0.04em text-primary placeholder:text-grey-primary rounded-xl border border-grey-primary focus:border-primary !ring-0 !outline-none'
								/>
							</div>

							<Slider
								value={ [value] }
								max={ MAX_VALUE }
								min={ 10 }
								step={ 1 }
								onValueChange={ (updatedVal: number[]) => {
									onChangeInput(updatedVal[0]);
								} }
							/>

							<div>
								<div className='grid grid-cols-3 gap-2.5'>
									<BoxHighlight
										title='Price per Employee'
										value={
											<span>
												{ formatter.format(currentPrice) }
												<span className='text-grey-primary text-[10px] lg:text-lg'>
                          /month
												</span>
											</span>
										}
									/>
									<BoxHighlight
										title='Total Monthly Cost'
										value={ `${formatter.format(currentPrice * value)}` }
									/>
									<BoxHighlight
										title='Total Annual Cost'
										value={ `${formatter.format((currentPrice * value) * 12)}` }
									/>
								</div>
								<div className='mt-6 lg:mt-3.5 rounded-2xl w-full flex max-lg:flex-col gap-2.5 lg:items-center lg:justify-around p-3.5 lg:p-6 border border-grey-50 bg-grey-primary-light'>
									{ renderTextSavings(
										'Project monthly savings:',
										formatter.format(3.27 * (currentPrice * value))
									) }
									{ renderTextSavings(
										'Absenteeism savings:',
										formatter.format(2.73 * (currentPrice * value))
									) }
									{ renderTextSavings(
										'Healthcare Cost Reduction:',
										formatter.format(136 * value)
									) }
								</div>
							</div>

							<div className='grid grid-cols-1 lg:grid-cols-4 gap-2.5'>
								{ rules.map((rule, ruleIdx) => (
									<div
										key={ ruleIdx }
										className='p-3.5 lg:py-[42px] lg:px-6 text-primary rounded-3xl bg-grey-primary-light border border-grey-50 flex flex-col items-center justify-center gap-2.5 text-center'
									>
										<h3 className='text-base lg:text-2xl font-semibold -tracking-0.04em'>
											{ rule.title }
										</h3>

										<div className='text-xs max-lg:!leading-5 lg:text-lg flex flex-col h-full justify-end gap-2.5 items-center'>
											<span>
												{ rule.min }
												{ Number.isFinite(rule.max) ? `-${rule.max}` : '+' }{ ' ' }
												{ employeePricingData.employeesLabel }
											</span>
											<span>
                        ${ rule.price } { employeePricingData.priceSuffixLabel }
											</span>
										</div>
									</div>
								)) }
							</div>

							{ renderDisclaimerText() }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployeePricing;

type BoxHighlightProps = {
  title: string;
  value: string | React.ReactNode;
};

const BoxHighlight: React.FC<BoxHighlightProps> = ({ title, value }) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<div className='bg-blue-alice rounded-2xl w-full p-3.5 lg:py-[42px] flex flex-col items-center text-center'>
			<p className='text-xs max-lg:!leading-5 lg:text-lg'>{ title }</p>

			<div className='flex flex-col flex-1 h-full justify-end mt-2.5'>
				<h4 className='font-medium text-lg lg:text-4xl !leading-normal -tracking-0.04em'>
					{ isMounted && value }
				</h4>
			</div>
		</div>
	);
};
