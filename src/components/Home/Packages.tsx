'use client';

import React, { useState } from 'react';

import clsxm from '@/helpers/clsxm';

import { ArrowNarrowDown, InfoCircle } from '../Icons';

const packages = [
	{
		id: 1,
		name: 'Tier 1',
		newPrice: '$256',
		description: 'Includes the following tests',
		oldPrice: '$39.99',
		components: [
			{
				name: 'TSH',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'LH',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}
		]
	},
	{
		id: 2,
		name: 'Product Name',
		newPrice: '$32',
		description: 'Product Info',
		oldPrice: '$39.99',
		components: [
			{
				name: 'TSH',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}
		]
	},
	{
		id: 3,
		name: 'Product Name',
		newPrice: '$32',
		description: 'Product Info',
		oldPrice: '$39.99',
		components: [
			{
				name: 'TSH',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}
		]
	},
	{
		id: 4,
		name: 'No Bloodwork Consultation',
		newPrice: '$32',
		description: 'For those who are interested in our products that don’t require a bloodwork panel, such as NAD, or Glutathione, simply schedule an initial consultation. It is $199, then $99/month following.',
		oldPrice: '$39.99',
		components: []
	},
];

const PackagesSection: React.FC = () => {
	const [selectedPackageIdx, setSelectedPackageIdx] = useState<number>(0);

	const renderPackageList = () => {
		return (
			<div className='mt-10 lg:mt-5 flex flex-col gap-3'>
				{ packages.map((packageItem, packageItemIdx) => {
					const isSelected = packageItemIdx === selectedPackageIdx;

					return (
						<div
							key={ packageItem.id }
							className={ clsxm(
								'rounded-md py-[25px] px-[27px] border',
								isSelected ? 'bg-blue-1 border-[#65CBFF]' : 'bg-grey-secondary border-transparent'
							) }
							onClick={ () => setSelectedPackageIdx(packageItemIdx) }
						>
							<div className='grid grid-cols-8 gap-3 items-start'>
								<div className='col-span-6 w-full'>
									<p className='text-primary text-sm font-medium font-Poppins'>{ packageItem.name }</p>
									<p className='text-grey-primary text-[10px] lg:text-xs leading-[145%] lg:leading-5 font-BRSonoma mt-0.5'>{ packageItem.description }</p>
								</div>

								<div className='col-span-2 flex max-lg:flex-col items-center justify-end lg:gap-15px max-lg:text-right'>
									<div className='lg:rounded-full lg:bg-primary lg:bg-opacity-10 lg:py-1.5 lg:px-3 text-[10px] leading-5 text-grey-primary lg:text-primary font-BRSonoma'>
										<span>{ packageItem.oldPrice } Value</span>
									</div>

									<p className='text-primary font-Poppins text-base lg:text-xl font-medium'>{ packageItem.newPrice }</p>
								</div>
							</div>
						</div>
					);
				}) }
			</div>
		);
	};

	return (
		<div className='container-center py-[94px]'>
			<div className='grid lg:grid-cols-10'>
				<div className='lg:col-span-4' />

				<div className='lg:col-span-6'>
					<div className='flex flex-col max-lg:items-center text-center lg:text-left'>
						<p className='font-semibold font-BRSonoma uppercase text-[10px] lg:text-sm leading-[150%] lg:leading-6 tracking-[0.11em]'>TAILORED TO YOUR SPECIFIC NEEDS</p>

						<h2 className='mt-11px lg:mt-9px text-primary font-Poppins text-3xl lg:text-4xl leading-[100%] lg:leading-[119%] -tracking-[0.04em]'>Select Your Package</h2>

						<p className='mt-[17px] lg:mt-9px font-BRSonoma text-xs lg:text-sm leading-[167%] lg:leading-[143%]'>
							Begin your personalized healthcare journey with us today. An initial consultation is included at just $199.
						</p>
					</div>

					<div className='flex max-lg:flex-col gap-11px items-center lg:justify-between mt-10'>
						<div className='flex items-center gap-5px'>
							<span className='text-primary lg:text-grey-primary text-sm leading-5 font-BRSonoma'>
								Select one of the following options
							</span>
							<ArrowNarrowDown className='stroke-primary lg:stroke-grey-primary' />
						</div>

						<div className='flex items-center gap-[7px]'>
							<InfoCircle className='w-4 h-4' />
							<span className='text-sm font-semibold font-BRSonoma leading-5'>Need Help?</span>
						</div>
					</div>

					{ renderPackageList() }
				</div>
			</div>
		</div>
	);
};

export default PackagesSection;
