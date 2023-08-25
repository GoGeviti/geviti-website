import React from 'react';

import { recommendationPackages } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../Accordion';
import { Dialog, DialogContent } from '../Dialog';
import { ChevronDown } from '../Icons';

type DialogHelpProps = {
	open?: boolean;
	onOpenChange?: (open: boolean) => void; // eslint-disable-line no-unused-vars
};

const DialogHelp: React.FC<DialogHelpProps> = ({ open, onOpenChange }) => {
	const renderAccordion = () => {
		const defaultValueAccordion = Array.from(Array(recommendationPackages.length).keys()).map(i => `item-${ i + 1 }`);

		return (
			<Accordion
				type='multiple'
				className='w-full'
				defaultValue={ defaultValueAccordion }
			>
				{ recommendationPackages.map((recommendationPackage, recommendationIdx) => (
					<AccordionItem
						key={ recommendationPackage.id }
						value={ `item-${ recommendationIdx + 1 }` }
						className={ clsxm(recommendationIdx > 0 ? 'py-5 lg:py-[23px]' : 'pb-5 lg:pb-[23px]') }
					>
						<AccordionTrigger className='flex items-start justify-between gap-4 w-full'>
							<div className='flex items-center gap-1'>
								<ChevronDown className='w-3.5 h-3.5 text-primary' />
								<p className='text-sm font-medium font-Poppins text-primary'>{ recommendationPackage.name }</p>
							</div>
							<p className='text-primary font-medium text-xl text-right font-Poppins'>{ recommendationPackage.price }</p>
						</AccordionTrigger>

						<AccordionContent className='pt-18px'>
							<p className='text-grey-primary text-xs leading-5 font-BRSonoma'>{ recommendationPackage.description }</p>
						</AccordionContent>
					</AccordionItem>
				)) }
			</Accordion>
		);
	};

	const renderDialog = () => {
		return (
			<Dialog
				open={ open }
				onOpenChange={ onOpenChange }
			>
				<DialogContent className='max-w-sm md:max-w-md lg:max-w-[904px] px-7 lg:px-12 py-8 lg:py-[46px]'>
					<div className='flex flex-col'>
						<p className='text-grey-primary text-pretitle'>
							geviti packages
						</p>
						<p className='text-2xl md:text-3xl lg:text-4xl text-primary leading-[114%] lg:leading-[120%] font-Poppins mt-2.5 lg:mt-[1px] -tracking-[0.04em]'>Need help deciding your package?</p>

						<div className='mt-8 grid h-[50vh] lg:max-h-[45vh] overflow-y-auto pr-4 -mr-4'>
							{ renderAccordion() }
						</div>
					</div>
				</DialogContent>
			</Dialog>
		);
	};

	return renderDialog();
};

export default DialogHelp;