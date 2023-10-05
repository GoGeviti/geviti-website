'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { homeData, statesData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import {
	ArrowNarrowDown,
	ArrowNarrowRight,
	CheckBlue,
	InfoCircle,
} from '../Icons';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue
} from '../Select';
import WrapperAnimation from '../WrapperAnimation';

import DialogHelp from './DialogHelp';
import TablePackage from './TablePackage';

type ComponentItem = {
	packageId?: number;
	componentId?: number;
	name: string;
	description: any;
};

const PackagesSection: React.FC = () => {
	const [selectedPackageIdx, setSelectedPackageIdx] = useState<number>(-1);
	const [openFeatures, setOpenFeatures] =  useState<number>(-1);
	const [openDialogHelp, setOpenDialogHelp] = useState<boolean>(false);
	const [state, setState] = useState<string>('');
	const [stateGender, setStateGender] = useState<string>('');

	const renderTextComponentPackage = (component: ComponentItem) => {
		return (
			<span className='flex items-center gap-1 text-primary'>
				{
					component.description === true &&
					<CheckBlue />
				}
				<p className='text-[10px] text-primary font-BRSonoma leading-5'>{ component.description !== true && <span className='font-bold'>{ component.description }</span> } { component.name }</p>
			</span>
		);
	};

	const resolveCardPackageClassName = (isSelected: boolean) => {
		if (!state || !stateGender) return 'opacity-50 bg-grey-secondary border-transparent cursor-default';

		if (isSelected) {
			return 'bg-blue-1/30 border-[#65CBFF]';
		}

		return 'bg-grey-secondary border-transparent cursor-pointer lg:hover:bg-blue-1 lg:hover:bg-opacity-30 lg:hover:border-[#65CBFF] lg:hover:border-opacity-50';
	};

	const renderPackageList = () => {
		return (
			<div
				id='package-list'
				className='mt-10 lg:mt-5 flex flex-col gap-3'
			>
				{ homeData.bloodPanel.map((packageItem, packageItemIdx) => {
					const isSelected = packageItemIdx === selectedPackageIdx;

					return (
						<div
							key={ packageItemIdx }
							data-aos='zoom-in-down'
							data-aos-delay={ `${ packageItemIdx * 100 }` }
							data-aos-anchor='#package-list'
						>
							<div
								onClick={ () => state && setSelectedPackageIdx(packageItemIdx) }
								className={ clsxm(
									'rounded-md py-[25px] px-[27px] border transform transition-all duration-500',
									resolveCardPackageClassName(isSelected)
								) }
							>
								<div className='flex flex-col justify-between items-start'>
									{
										packageItem.isPopular &&
										<p className='bg-blue-1/30 text-blue-4 px-5 py-[2px] rounded-full w-fit font-Poppins text-sm font-medium leading-5'>Most Popular</p>
									}
									<p className='font-Poppins text-base font-medium text-primary my-3'>{ packageItem.title }</p>
									<p className='font-Poppins text-4xl font-medium text-primary leading-[125%] -tracking-[0.72px;]'>{ packageItem.price } <span className='text-grey-primary text-[10px] leading-[150%] tracking-normal'>{ packageItem.priceNote }</span></p>
									<p className='text-primary text-base leading-[150%] font-Poppins font-medium'>{ packageItem.priceThen } <span className='text-grey-primary text-[10px]'>{ packageItem.priceThenNote }</span></p>
									<p className='text-grey-primary text-xs leading-[150%] font-Poppins mt-3'>{ packageItem.desc }</p>
								</div>
								<div
									className='text-primary mt-8 mb-3 flex items-center gap-2'
									onClick={ () => setOpenFeatures(packageItemIdx) }>
									<p className='font-Poppins text-sm text-primary'>View Plan Features</p>
									<ArrowNarrowDown className='text-primary' />
								</div>

								<div className={ clsxm('flex-col gap-x-25px gap-y-3.5 lg:gap-y-4', state && stateGender ? (packageItemIdx === openFeatures ? 'flex' : 'hidden') : 'hidden') }>
									{ packageItem.components?.map((component, componentIdx) => (
										<div key={ componentIdx }>
											<div className=''>
												{ renderTextComponentPackage(component) }
											</div>
										</div>
									)) }
								</div>

								{  state && stateGender && isSelected && (
									<Link
										prefetch={ false }
										href={ `/orders?selectedProduct=${ packageItemIdx + 1 }` }
										className='btn btn-primary mt-5 flex items-center gap-1.5 w-fit'>
										<span className='text-xs font-medium font-BRSonoma leading-[159%]'>Continue</span>

										<ArrowNarrowRight />
									</Link>
								) }
							</div>
						</div>
					);
				}) }
			</div>
		);
	};

	const renderDialogHelp = () => {
		return (
			<DialogHelp
				open={ openDialogHelp }
				onOpenChange={ setOpenDialogHelp }
			/>
		);
	};

	const renderTitleDescPage = () => {
		return (
			<WrapperAnimation
				data-aos='zoom-in-right'
				className='flex flex-col max-lg:items-center text-center lg:text-left'
			>
				<p className='text-pretitle text-grey-primary'>{ homeData.packages.preTitle }</p>

				<h2 className='mt-11px lg:mt-9px text-primary font-Poppins text-3xl lg:text-4xl leading-[100%] lg:leading-[119%] -tracking-0.04em'>
					{ homeData.packages.title }
				</h2>

				<p className='mt-[17px] lg:mt-9px text-grey-primary font-BRSonoma text-xs lg:text-sm leading-[167%] lg:leading-[143%]'>
					{ homeData.packages.description }
				</p>
			</WrapperAnimation>
		);
	};

	const renderPopularPackage = () => {
		return (
			<div className={ clsxm('grid grid-cols-4 w-full gap-12 mt-24', (!state || !stateGender) && 'opacity-50 border-transparent cursor-default') }>
				<div />
				{ homeData.bloodPanel.map((items, id) => (
					<div
						key={ id }
						className='max-w-[250px] flex flex-col justify-end'>
						{
							items.isPopular &&
						<p className='bg-blue-1/30 text-blue-4 px-5 py-[2px] rounded-full w-fit font-Poppins text-sm font-medium leading-5 mb-4'>Most Popular</p>
						}
						<p className='font-Poppins text-xl font-medium mb-4 text-primary'>{ items.title }</p>
						<p className='font-Poppins text-5xl font-medium text-primary leading-[125%] -tracking-[0.96px;]'>{ items.price } <span className='text-grey-primary text-base leading-[150%] tracking-normal'>{ items.priceNote }</span></p>
						<p className='text-primary text-base leading-[150%] font-Poppins font-medium'>{ items.priceThen } <span className='text-grey-primary text-sm'>{ items.priceThenNote }</span></p>
						<p className='text-grey-primary text-sm leading-[150%] font-Poppins mt-4'>{ items.desc }</p>
						<button
							className='btn-cta-landing group btn-primary w-full text-center mt-14'
							aria-label={ items.btn }
						>
							<span className='text-btn-cta-landing w-full'>
								{ items.btn }
							</span>
						</button>
					</div>
				)) }
			</div>
		);
	};

	const renderNumber = (number:number) => {
		return (
			<div className=' lg:flex hidden w-5 h-5 rounded-full bg-primary/5  items-center justify-center text-primary font-Poppins text-[10px] mr-2'>
				{ number }
			</div>
		);
	};

	const renderSelectState = (data:any) => {
		const selectOptions = data.options;

		return (
			<WrapperAnimation
				data-aos='zoom-in-right'
				className='mt-10'
			>
				<p className='text-xs lg:text-sm leading-5 font-BRSonoma mb-[13px] flex'>{ renderNumber(data.number) }{ data.label }</p>

				<Select
					value={ data.number === '2' ? stateGender : state }
					onValueChange={ data.number === '2' ? setStateGender : setState  }
				>
					<SelectTrigger
						className='w-full lg:w-[297px] bg-grey-secondary text-primary'>
						<SelectValue
							aria-label={  data.number === '2' ? stateGender : state }
							placeholder={ data.placeholder }
						>
							{  data.number === '2' ? stateGender || data.placeholder : state || data.placeholder }
						</SelectValue>
					</SelectTrigger>
					<SelectContent className='bg-grey-secondary text-primary'>
						<SelectGroup className='overflow-x-hidden'>
							{ selectOptions.map((option, optionIdx) => (
								<div
									key={ optionIdx }>
									<SelectItem
										value={ option.value }
										className='data-[state=unchecked]:font-medium data-[state=checked]:font-semibold text-primary data-[highlighted]:bg-white'
									>{ option.label }</SelectItem>
									{ optionIdx < selectOptions.length - 1 && (
										<SelectSeparator />
									) }
								</div>
							)) }
							<SelectSeparator />
							{
								 data.number === '1' &&
								 <button
								 aria-label='Don&apos;t see your state? Click here!'
								 className='cursor-pointer flex w-full select-none items-center rounded-sm px-18px py-2 text-sm leading-6 font-medium font-Poppins'
								 onClick={ () => window.open('https://cchtpaycds0.typeform.com/to/BVFNdpwc', '_blank') }>Don&apos;t see your state? Click here!</button>
							}
						</SelectGroup>
					</SelectContent>
				</Select>
			</WrapperAnimation>
		);
	};

	return (
		<>
			<div
				id='packages'
				className='container-center w-full py-14 lg:py-[94px] relative'>
				<div className='w-full max-lg:mt-10 flex flex-col lg:flex-row justify-between items-center'>
					{ renderTitleDescPage() }

					<div className='flex-col lg:flex-row flex gap-x-10 max-lg:w-full'>
						{ renderSelectState(statesData.states) }
						{ renderSelectState(statesData.gender) }
					</div>
				</div>
				
				<div className='flex max-lg:flex-col gap-11px items-center lg:justify-between mt-10'>
					<WrapperAnimation
						data-aos='zoom-in-right'
						className='flex items-center gap-5px lg:hidden'
					>
						{ renderNumber(2) }
						<span className='text-primary text-sm leading-5 font-BRSonoma'>
							{ homeData.packages.titlePackageList }
						</span>
						<ArrowNarrowDown className='text-primary' />
					</WrapperAnimation>

					<WrapperAnimation
						data-aos='zoom-in-left'
						className='flex items-center gap-[7px] cursor-pointer lg:hidden'
						disableMobile={ false }
						onClick={ () => { setOpenDialogHelp(true); } }
					>
						<InfoCircle className='w-4 h-4' />
						<span className='text-sm font-semibold font-BRSonoma leading-5 text-primary'>
							{ homeData.packages.helpText }
						</span>
					</WrapperAnimation>
				</div>
				<WrapperAnimation
					data-aos='zoom-in-right'
				>
					<div className='lg:block hidden'>
						{ renderPopularPackage() }
					</div>
				</WrapperAnimation>

				<WrapperAnimation
					data-aos='zoom-in-right'
				>
					<div className='lg:hidden'>
						{ renderPackageList() }
					</div>
				</WrapperAnimation>
				<WrapperAnimation
					data-aos='zoom-in-right'
				>
					<div className='hidden lg:block mt-14'>
						<TablePackage classname={	(!state || !stateGender) ? 'opacity-50 bg-grey-secondary border-transparent cursor-default' : '' }/>
					</div>
				</WrapperAnimation>

			</div>

			{ renderDialogHelp() }
		</>
	);
};

export default PackagesSection;
