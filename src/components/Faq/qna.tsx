'use client';
import React from 'react';
import { Accordion } from '@radix-ui/react-accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

import { faqData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { AccordionContent, AccordionItem, AccordionTrigger } from '../Accordion';
import { ChevronDown, ChevronRight, SearchIcon } from '../Icons';

const qnaData = faqData.faq;
interface QnaProps {
  questions: string;
  answer: string;
}

const QnA: React.FC = () => {

	const renderItem =  (data : QnaProps[]) => {
		return (
			<div className='bg-white w-full h-full rounded-[19px] relative overflow-hidden'>
				<div className='px-5 md:px-[30px] flex flex-col items-center justify-center '>
					<Accordion
						type='multiple'
						className='w-full'
					>
						{ data.map((items, id) => (
							<AccordionItem
								key={ id }
								value={ `item-${ id + 1 }` }
								className={ clsxm(id + 1 === data.length ? 'border-none' : 'border-[#D9DBE9]', 'py-6') }
							>
								<AccordionTrigger className='flex items-center justify-between w-full space-x-4'>
									<p className='text-base leading-7 font-Poppins font-semibold -tracking-[0.6px] text-black text-start'>{ items.questions }</p>
									<div className='!w-5 !h-5'>
										<ChevronRight className='!w-5 !h-5 text-grey-primary ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:hidden block'/>
										<ChevronDown className='!w-5 !h-5 text-grey-primary ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:block hidden'/>
									</div>
								</AccordionTrigger>

								<AccordionContent className='pt-[9px] text-[#697175] font-Poppins !text-sm font-medium -tracking-[0.525px] text-start'>
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
		);
	};

	return (
		<div className='container-center mx-auto w-full overflow-hidden mt-[48px] md:mt-[70px]'>
			<div className='w-full '>
				<div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-5'>
					<p className='text-primary font-Poppins text-4xl -tracking-[1.44px] text-center'>{ qnaData.title }</p>
					<div className='flex items-center gap-[5px] md:gap-[10px] bg-white border border-neutral-300 rounded-[76px] md:w-[308px] px-[25px] py-[5px] w-full shadow-md'>
						<SearchIcon className='w-4 h-4 text-[#697175]'/>
						<input
							type='text'
							placeholder={ qnaData.btnRight }
							className='w-full text-primary text-sm font-medium font-Poppins border-0 focus:border-0 focus:ring-0 focus:outline-0 placeholder:text-grey-primary'
						/>
					</div>
				</div>
				<Tabs
					className='flex flex-col'
					defaultValue='tab-0'
				>
					<TabsList
						className='shrink-0 flex border-b border-primary/10 md:space-x-[56px] max-md:justify-between mb-[34px]'
						aria-label={ qnaData.title }>
						{ qnaData.tab.map((items, id) => (
							<TabsTrigger
								key={ id }
								className='text-[15px] cursor-pointer pb-[9px] pt-[25px] leading-none text-primary select-none hover:font-bold data-[state=active]:font-bold data-[state=active]:focus:relative data-[state=active]:focus:border-b data-[state=active]:focus:border-primary outline-none'
								value={ `tab-${id}` }
							>
								{ items.name }
							</TabsTrigger>
						)) }
					</TabsList>
					<div>
						{ qnaData.tab.map((it, id) => {
							return (
								<TabsContent
									key={ id }
									value={ `tab-${id}` }
								>
									 { renderItem(it.listQna) }
								</TabsContent>
							);
						}) }
					</div>
				</Tabs>
			</div>
		</div>
	);
};

export default QnA;