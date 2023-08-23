'use client';

import React, { useState } from 'react';

import { homeData, packagesData, statesData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import {
	ArrowNarrowDown,
	ArrowNarrowRight,
	CheckIcon,
	InfoCircle
} from '../Icons';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue
} from '../Select';

import DialogHelp from './DialogHelp';
import SliderPackages from './SliderPackages';

type ComponentItem = {
	packageId: number;
	componentId: number;
	name: string;
	description: string;
};

const PackagesSection: React.FC = () => {
	const [detailPopover, setDetailPopover] = useState<ComponentItem>({
		packageId: -1,
		componentId: -1,
		name: '',
		description: ''
	});
	const [selectedPackageIdx, setSelectedPackageIdx] = useState<number>(-1);
	const [openPopover, setOpenPopover] = useState<boolean>(false);
	const [openDialogHelp, setOpenDialogHelp] = useState<boolean>(false);
	const [state, setState] = useState<string>(statesData.options[0].value);

	const handleMouseEnter = (component: ComponentItem) => {
		setOpenPopover(true);
		setDetailPopover(component);
	};

	const handleMouseLeave = (component: ComponentItem) => {
		setOpenPopover(false);
		setDetailPopover(component);
	};

	const renderTooltipProductDetail = (component: ComponentItem) => {
		const isOpen = openPopover
			&& detailPopover.componentId === component.componentId
			&& detailPopover.packageId === component.packageId;

		return (
			<Popover
				open={ isOpen }
				onOpenChange={ isOpen ? setOpenPopover : undefined }
			>
				<PopoverTrigger
					onClick={ () => handleMouseEnter(component) }
					onMouseEnter={ () => handleMouseEnter(component) }
					onMouseLeave={ () => handleMouseLeave(component) }
					asChild
				>
					<span className='flex items-center gap-1 text-primary'>
						<CheckIcon />

						<p className='text-[10px] text-primary font-BRSonoma leading-5'>{ component.name }</p>
					</span>
				</PopoverTrigger>
				<PopoverContent
					className='p-18px'
					onMouseEnter={ () => handleMouseEnter(component) }
					onMouseLeave={ () => handleMouseLeave(component) }
				>
					<div className='flex flex-col gap-y-1'>
						<InfoCircle className='w-[13px] h-[13px]' />

						<p className='text-sm text-primary font-medium font-Poppins'>What is { detailPopover.name }?</p>
						<p className='text-xs leading-4 text-grey-primary font-BRSonoma'>
							{ detailPopover.description && (
								<span dangerouslySetInnerHTML={ { __html: detailPopover.description } } />
							) }
						</p>
					</div>
				</PopoverContent>
			</Popover>
		);
	};

	const renderPackageList = () => {
		const foundPackages = packagesData.find(packageItem => packageItem.state.value === state);

		if (foundPackages) {
			const packageList = foundPackages.list;

			return (
				<div className='mt-10 lg:mt-5 flex flex-col gap-3'>
					{ packageList.map((packageItem, packageItemIdx) => {
						const isSelected = packageItemIdx === selectedPackageIdx;

						return (
							<div
								key={ packageItem.id }
								className={ clsxm(
									'rounded-md py-[25px] px-[27px] border cursor-pointer',
									isSelected ? 'bg-blue-1 border-[#65CBFF]' : 'bg-grey-secondary border-transparent'
								) }
								data-aos='zoom-in-down'
								onClick={ () => setSelectedPackageIdx(packageItemIdx) }
							>
								<div className='flex flex-col xxs:flex-row xxs:grid xxs:grid-cols-11 gap-3 xxs:gap-6 items-start'>
									<div className='xxs:col-span-8 w-full'>
										<p className='text-primary text-sm font-medium font-Poppins'>{ packageItem.name }</p>
										<p className='text-grey-primary text-[10px] lg:text-xs leading-[145%] lg:leading-5 font-BRSonoma mt-0.5'>
											{ packageItem.description && (
												<span dangerouslySetInnerHTML={ { __html: packageItem.description } } />
											) }
										</p>
									</div>

									<div className='xxs:col-span-3 flex max-lg:flex-col xxs:items-end lg:items-center lg:justify-end lg:gap-15px xxs:text-right lg:text-left'>
										<div className='lg:rounded-full lg:bg-primary lg:bg-opacity-10 lg:py-1.5 lg:px-3 text-[10px] leading-5 text-grey-primary lg:text-primary font-BRSonoma'>
											<span>{ packageItem.oldPrice } Value</span>
										</div>

										<p className='text-primary font-Poppins text-base lg:text-xl font-medium'>{ packageItem.newPrice }</p>
									</div>
								</div>

								<div className='mt-[26px] lg:mt-5'>
									<div className='flex flex-wrap gap-x-25px gap-y-4'>
										{ packageItem.components?.map((component, componentIdx) => (
											<div key={ componentIdx }>
												{ renderTooltipProductDetail({ ...component, packageId: packageItemIdx, componentId: componentIdx }) }
											</div>
										)) }
									</div>
								</div>

								{ isSelected && (
									<button className='btn btn-primary mt-5 flex items-center gap-1.5 max-lg:hidden'>
										<span className='text-xs font-medium font-BRSonoma leading-[159%]'>Continue</span>

										<ArrowNarrowRight />
									</button>
								) }
							</div>
						);
					}) }
				</div>
			);
		}
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
			<div
				data-aos='zoom-in-right'
				className='flex flex-col max-lg:items-center text-center lg:text-left'
			>
				<p className='text-pretitle text-grey-primary'>{ homeData.packages.preTitle }</p>

				<h2 className='mt-11px lg:mt-9px text-primary font-Poppins text-3xl lg:text-4xl leading-[100%] lg:leading-[119%] -tracking-[0.04em]'>
					{ homeData.packages.title }
				</h2>

				<p className='mt-[17px] lg:mt-9px text-grey-primary font-BRSonoma text-xs lg:text-sm leading-[167%] lg:leading-[143%]'>
					{ homeData.packages.description }
				</p>
			</div>
		);
	};

	const renderSelectState = () => {
		const selectOptions = statesData.options;

		return (
			<div
				data-aos='zoom-in-right'
				className='mt-10'
			>
				<p className='text-xs lg:text-sm leading-5 font-BRSonoma mb-[13px]'>{ statesData.label }</p>

				<Select
					value={ state }
					onValueChange={ setState }
				>
					<SelectTrigger className='w-full lg:w-[297px] bg-grey-secondary text-primary'>
						<SelectValue placeholder='Select state' />
					</SelectTrigger>
					<SelectContent className='bg-grey-secondary text-primary'>
						<SelectGroup className='overflow-x-hidden'>
							{ selectOptions.map((option, optionIdx) => (
								<div key={ optionIdx }>
									<SelectItem
										value={ option.value }
										className='data-[state=unchecked]:text-grey-primary data-[state=checked]:text-primary'
									>{ option.label }</SelectItem>
									{ optionIdx < selectOptions.length - 1 && (
										<SelectSeparator />
									) }
								</div>
							)) }
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		);
	};

	return (
		<>
			<div className='container-center w-full py-[94px]'>
				<div className='lg:grid lg:grid-cols-10 lg:gap-x-32'>
					<div
						className='lg:hidden'
						data-aos='zoom-in'
					>{ renderTitleDescPage() }</div>

					<div
						className='lg:col-span-4 max-lg:mt-10'
						data-aos='fade-in'
					>
						<SliderPackages />
					</div>

					<div className='lg:col-span-6'>
						<div className='max-lg:hidden'>
							{ renderTitleDescPage() }
						</div>

						{ renderSelectState() }

						<div className='flex max-lg:flex-col gap-11px items-center lg:justify-between mt-10'>
							<div
								data-aos='zoom-in-right'
								className='flex items-center gap-5px'
							>
								<span className='text-primary lg:text-grey-primary text-sm leading-5 font-BRSonoma'>
									{ homeData.packages.titlePackageList }
								</span>
								<ArrowNarrowDown className='text-primary lg:text-grey-primary' />
							</div>

							<div
								data-aos='zoom-in-left'
								className='flex items-center gap-[7px] cursor-pointer'
								onClick={ () => setOpenDialogHelp(true) }
							>
								<InfoCircle className='w-4 h-4' />
								<span className='text-sm font-semibold font-BRSonoma leading-5 text-grey-primary'>
									{ homeData.packages.helpText }
								</span>
							</div>
						</div>

						{ renderPackageList() }
					</div>
				</div>
			</div>

			{ renderDialogHelp() }
		</>
	);
};

export default PackagesSection;
