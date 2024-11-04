import React from 'react';
import Image from 'next/image';

import { marketingData } from '@/constant/data';

import AccordionList from '../FrequentlyAskedQuestions/AccordionList';
interface FAQProps {
	data?: {
    subtitle: string;
    title: string;
    image: string;
    data: {
        title: string;
        content: string;
    }[];
}
}

const FAQ: React.FC<FAQProps> = ({ data }) => {

	const faqData = data || marketingData.faq;

	return (
		<div className='container-center w-full'>
			<div className='grid grid-cols-1 lg:grid-cols-9 gap-[42px] pb-14 lg:pb-20'>
				<div className='max-lg:order-1 lg:col-span-4 w-full max-lg:mx-auto sm:max-w-[343px] lg:max-w-[519px]'>
					<div
						style={ {
							background:
                'linear-gradient(332.09deg, #4AADF6 1.07%, #8CCEFF 93.32%)',
						} }
						className='w-full aspect-[343/354] lg:aspect-[519/684] max-lg:min-h-[354px] lg:h-[684px] rounded-20px overflow-hidden relative'
					>
						<Image
							src={ faqData.image }
							alt='FAQ'
							className='object-cover object-top w-full h-full'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
							fill
						/>
					</div>
				</div>
				<div className='lg:col-span-5 max-lg:-mx-4 lg:max-w-[625px] lg:ml-auto'>
					<div className='w-full pb-[42px] pt-[52px] lg:py-0 max-lg:border border-black/5 rounded-2xl max-lg:px-[22px]'>
						<div className='flex flex-col gap-4 max-lg:items-center max-lg:text-center mb-14 lg:mb-50px'>
							<p className='text-pretitle text-grey-primary lg:hidden'>
								{ faqData.subtitle }
							</p>
							<div className='lg:max-w-[389px]'>
								<h2 className='whitespace-pre-line text-[9.3vw] xxs:text-[28px] !leading-[116%] lg:text-4xl lg:!leading-[125%] -tracking-0.04em text-primary'>
									{ faqData.title }
								</h2>
							</div>
						</div>
						<AccordionList data={ faqData.data } />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
