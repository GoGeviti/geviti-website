'use client';
import React from 'react';
import { Accordion } from '@radix-ui/react-accordion';

import { howItWorksData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../Accordion';
import { Minus2, Plus2 } from '../Icons';

const howItWorks = howItWorksData.faq;
const faq: React.FC = () => {
	return (
		<div className='container-center mx-auto w-full overflow-hidden mt-[70px] md:mt-[143px]'>
			<div className='w-full flex flex-col md:flex-row'>
				<div className='flex flex-col text-center md:text-start md:w-[45%] space-y-4 px-10'>
					<p className='text-grey-primary font-Poppins text-[10px] md:text-sm font-semibold leading-[15px] md:leading-6 tracking-[1.1px] md:tracking-[1.54px] uppercase'>
						{ howItWorks.preTitle }
					</p>
					<p className='text-primary font-Poppins text-[27.941px] md:text-4xl -tracking-[1.118px] md:-tracking-[1.44px] leading-[32.3px] md:leading-[45px]'>
						{ howItWorks.title }
					</p>
				</div>
				<div className='w-full max-md:pt-14'>
					<div className='px-5 md:px-[30px] flex flex-col items-center justify-center '>
						<Accordion
							type='multiple'
							className='w-full'>
							{ howItWorks.list.map((items, id) => (
								<AccordionItem
									key={ id }
									value={ `item-${id + 1}` }
									className={ clsxm(
										id + 1 === howItWorks.list.length
											? 'border-none'
											: 'border-[#EAECF0]',
										'py-6'
									) }
								>
									<AccordionTrigger className='flex items-center justify-between w-full space-x-4'>
										<p className='text-[15.614px] md:text-lg leading-[24.289px] md:leading-7 font-Poppins font-medium text-neutral-700 text-start'>
											{ items.questions }
										</p>
										<div className='!w-6 !h-6'>
											<Plus2 className='!w-6 !h-6 ease-custom transition-transform duration-300 group-data-[state=open]:hidden block' />
											<Minus2 className='!w-6 !h-6 ase-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:block hidden' />
										</div>
									</AccordionTrigger>

									<AccordionContent className='pt-[9px] text-grey-primary font-Poppins !text-[13.88px] md:!text-base leading-6 text-start'>
										{ items.answer }
									</AccordionContent>
								</AccordionItem>
							)) }
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
};

export default faq;
