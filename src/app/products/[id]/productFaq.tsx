import React from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import { ChevronDown } from '@/components/Icons';
import { productsData } from '@/constant/data';

type ProductFaqProps = {
	product: typeof productsData[0]
}

const ProductFaq:React.FC<ProductFaqProps> = ({ product }) => {
	return (
		<Accordion
			type='multiple'
			className='w-full border-t border-[#B8C6CC]'
		>
			{ product?.details?.map((detail, detailIdx) => (
				<AccordionItem
					key={ detailIdx }
					value={ `item-${ detailIdx + 1 }` }
					className='py-[13px] sm:py-4 border-[#B8C6CC]'
				>
					<AccordionTrigger className='flex items-start justify-between w-full'>
						<p className='text-xs sm:text-sm -tracking-0.04em leading-[27px] sm:leading-8 font-Poppins text-primary'>{ detail.question }</p>
						<ChevronDown className='w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180' />
					</AccordionTrigger>

					<AccordionContent className='pt-11px sm:pt-[13px] text-primary font-BRSonoma text-[10px] sm:text-xs leading-[17px] sm:leading-5'>
					
						{
							Array.isArray(detail.answer) && detail.answer?.length
								? (
									<ul className='flex flex-col gap-y-1'>
										{ detail.answer?.map((answerItem: string, answerItemIdx: number) => (
											<li key={ answerItemIdx }>{ answerItem }</li>
										)) }
									</ul>)
								:
								(
									<span>{ detail.answer && <p dangerouslySetInnerHTML={ { __html: detail.answer } } /> }</span>
								)
						}
					</AccordionContent>
				</AccordionItem>
			)) }
		</Accordion>
	);
};

export default ProductFaq;