import React from 'react';

import { Post } from '@/payload/payload-types';

import { Quote } from '../Icons';

type Props = Extract<Post['layout'][0], { blockType: 'quote' }>

export const QuoteBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
	const { author, description } = props;
	return (
		<div className='bg-primary/[0.03] border-primary border-l-2 rounded-tr-[20px] rounded-br-[20px] px-5 py-[10px] relative'>
			<p className='font-Poppins text-primary text-xs md:text-base italic font-semibold leading-6 md:leading-[33px]'>{ description }</p>
			<p className='font-Poppins text-primary text-xs md:text-base italic font-semibold leading-6 md:leading-[33px] mt-[10px] md:mt-5'>{ author }</p>
			<Quote className='absolute bottom-0 right-0 m-[30px] md:m-5'/>
		</div>
	);
};

export default QuoteBlock;