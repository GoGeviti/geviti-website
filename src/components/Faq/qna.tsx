'use client';
import React from 'react';
import { Accordion } from '@radix-ui/react-accordion';

import { faqData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { AccordionContent, AccordionItem, AccordionTrigger } from '../Accordion';
import { AddPlus, CloseMinus } from '../Icons';

const qnaData = faqData.faq;

const QnA: React.FC = () => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<div className='bg-white w-full h-full lg:rounded-[19px] py-[104px] relative overflow-hidden'>
				<div className='container-center max-md:px-5 mx-auto flex flex-col items-center justify-center '>
					<Accordion
						type='multiple'
						className='w-full'
					>
						{ qnaData.map((items, id) => (
							<AccordionItem
								key={ id }
								value={ `item-${ id + 1 }` }
								className={ clsxm(id + 1 === qnaData.length ? 'border-none' : 'border-[#D9DBE9]', 'py-[13px] sm:py-[45.9px]') }
							>
								<AccordionTrigger className='flex items-start justify-between w-full space-x-4 '>
									<p className='text-base md:text-[22px] leading-7 font-Poppins font-medium text-black text-start'>{ items.questions }</p>
									<AddPlus className='max-md:mt-2 w-[22.579px] md:w-[25px] h-[16.028px] md:h-[25px] ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:hidden block'/>
									<CloseMinus className='max-md:mt-2 w-[25px] h-[25px] ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:block hidden'/>
								</AccordionTrigger>

								<AccordionContent className='pt-11px md:pt-[14px] pb-[11px] md:pb-[35px] text-neutral-600 font-Poppins text-[13px] md:text-lg leading-[30px] text-start'>
									{ Array.isArray(items.answer) && items.answer?.length
										? (
											<ul className='flex flex-col gap-y-1'>
												{ items.answer?.map((answerItem: string, answerItemIdx: number) => (
													<li key={ answerItemIdx }>{ answerItem }</li>
												)) }
											</ul>
										) : <span>{ items.answer && <p dangerouslySetInnerHTML={ { __html: items.answer } } /> }</span> }
								</AccordionContent>
							</AccordionItem>
						)) }
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default QnA;