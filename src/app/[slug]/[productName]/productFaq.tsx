import React from 'react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/Accordion';
import { ChevronDown } from '@/components/Icons';
import { Product } from '@/payload/payload-types';

type ProductFaqProps = {
	product: Product;
};

const ProductFaq: React.FC<ProductFaqProps> = ({ product }) => {
	return (
		<Accordion
			type='multiple'
			className='w-full border-t border-[#B8C6CC]'>
			{ product?.faq?.map((detail, detailIdx) => (
				<AccordionItem
					key={ detailIdx }
					value={ `item-${detailIdx + 1}` }
					className='py-[13px] sm:py-4 border-[#B8C6CC]'
				>
					<AccordionTrigger className='flex items-start justify-between w-full'>
						<p className='text-[14px] sm:text-sm -tracking-0.04em leading-[27px] sm:leading-8 font-Poppins text-primary font-medium'>
							{ detail.title }
						</p>
						<ChevronDown className='w-5 h-5 sm:w-5 sm:h-5 mt-1 text-primary ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180' />
					</AccordionTrigger>

					<AccordionContent className='pt-11px sm:pt-[13px] text-primary font-BRSonoma text-[14px] sm:text-xs leading-[20px] sm:leading-5'>
						<span>
							{ detail.description && (
								<p
									className='text-[14px] text-[#181A1C] opacity-60 leading-[20px]'
									dangerouslySetInnerHTML={ { __html: detail.description } } />
							) }
						</span>
					</AccordionContent>
				</AccordionItem>
			)) }
		</Accordion>
	);
};

export default ProductFaq;
