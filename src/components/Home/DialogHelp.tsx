import React from 'react';

import clsxm from '@/helpers/clsxm';

import { Dialog, DialogContent } from '../Dialog';
import { ChevronDown } from '../Icons';

const recommendationPackages = [
	{
		id: 1,
		name: 'Tier 1',
		price: '$256',
		description: 'For those who are interested in our products that don’t require a bloodwork panel, such as NAD, or Glutathione, simply schedule an initial consultation. It is $199, then $99/month following.'
	},
	{
		id: 2,
		name: 'Product Name',
		price: '$32',
		description: 'For those who are interested in our products that don’t require a bloodwork panel, such as NAD, or Glutathione, simply schedule an initial consultation. It is $199, then $99/month following.'
	},
	{
		id: 3,
		name: 'Product Name',
		price: '$32',
		description: 'For those who are interested in our products that don’t require a bloodwork panel, such as NAD, or Glutathione, simply schedule an initial consultation. It is $199, then $99/month following.'
	},
	{
		id: 4,
		name: 'Product Name',
		price: '$32',
		description: 'For those who are interested in our products that don’t require a bloodwork panel, such as NAD, or Glutathione, simply schedule an initial consultation. It is $199, then $99/month following.'
	}
];

type DialogHelpProps = {
	open?: boolean;
	onOpenChange?: (open: boolean) => void; // eslint-disable-line no-unused-vars
};

const DialogHelp: React.FC<DialogHelpProps> = ({ open, onOpenChange }) => {
	const renderDialog = () => {
		return (
			<Dialog
				open={ open }
				onOpenChange={ onOpenChange }
			>
				<DialogContent className='max-w-sm md:max-w-md lg:max-w-[904px] px-7 lg:px-12 py-8 lg:py-[46px]'>
					<div className='flex flex-col'>
						<p className='text-grey-primary text-[10px] md:text-xs lg:text-sm font-BRSonoma font-semibold uppercase leading-[150%] lg:leading-6 tracking-[0.11em]'>
							geviti packages
						</p>
						<p className='text-2xl md:text-3xl lg:text-4xl text-primary leading-[114%] lg:leading-[120%] font-Poppins mt-2.5 lg:mt-[1px] -tracking-[0.04em]'>Need help deciding your package?</p>

						<div className='mt-8 grid max-h-[35vh] overflow-y-auto pr-4 -mr-4'>
							{ recommendationPackages.map((recommendationPackage, recommendationIdx) => (
								<div
									key={ recommendationPackage.id }
									className={ clsxm(recommendationIdx > 0 ? 'py-5 lg:py-[23px] border-t border-[#D1DADE]' : 'pb-5 lg:pb-[23px]') }
								>
									<div className='flex items-start justify-between gap-4'>
										<div className='flex items-center gap-1'>
											<ChevronDown className='w-3.5 h-3.5 text-primary' />
											<p className='text-sm font-medium font-Poppins text-primary'>{ recommendationPackage.name }</p>
										</div>
										<p className='text-primary font-medium text-xl text-right font-Poppins'>{ recommendationPackage.price }</p>
									</div>

									<div className='mt-18px'>
										<p className='text-grey-primary text-xs leading-5 font-BRSonoma'>{ recommendationPackage.description }</p>
									</div>
								</div>
							)) }
						</div>
					</div>
				</DialogContent>
			</Dialog>
		);
	};

	return renderDialog();
};

export default DialogHelp;