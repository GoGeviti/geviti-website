'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import {
	AccordionMinus,
	AccordionMobileMinus,
	AccordionMobilePlus,
	AccordionPlus,
} from '../Icons';

const FrequentlyAskedQues = () => {
	const accordionData = [
		{
			title: 'What states is Geviti in?',
			content:
        'As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.',
		},
		{
			title:
        'What “Deep-dive Diagnostic” is included semi-annually with the membership?',
			content: 'Content for Accordion Item 2',
		},
		{
			title: 'What is the membership cancellation and refund policy?',
			content: 'Content for Accordion Item 3',
		},
		{
			title:
        'Are the cost of supplements or prescription included in the membership fee?',
			content: 'Content for Accordion Item 3',
		},
		{
			title:
        'What if I have recently done labs? Do I still need to purchase a diagnostic package?',
			content: 'Content for Accordion Item 3',
		},
		{
			title: 'Does a blood panel guarantee access to specific treatments?',
			content: 'Content for Accordion Item 3',
		},
	];

	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className='bg-white sm:mx-3 rounded-[19px] mb-6 sm:my-6 py-[42px] md:pb-14 md:pt-28'>
			<div className=' md:flex flex-wrap container-center'>
				<div className='md:w-[40%] -mx-3'>
					<p className=' uppercase text-[10px] md:text-start text-center md:text-sm font-Poppins tracking-[1.54px] text-grey-primary font-semibold'>
            Have some questions?
					</p>
					<h2 className='tracking-[-1.44px] md:text-start text-center text-primary leading-[125%] text-[27.941px] md:text-4xl font-Poppins'>
            Frequently asked <br /> questions
					</h2>
				</div>
				<div className='md:w-[60%] mt-8 md:mt-0'>
					{ accordionData.map((item, index) => (
						<div
							key={ index }
							className='border-b border-gray-300'>
							<motion.div
								className={ `flex justify-between items-center cursor-pointer duration-300 py-4 md:pt-6  md:pb-6 ${ openIndex === index ? '!pt-6 !pb-0' : ''
								}` }
								onClick={ () => toggleAccordion(index) }
							>
								<h2 className='text-[14px] md:text-lg leading-[155.556%] font-medium font-Poppins text-neutral-700'>
									{ item.title }
								</h2>

								{ openIndex === index ? (
									<>
										<div className='md:block hidden'>
											<AccordionMinus />
										</div>
										<div className='block md:hidden'>
											<AccordionMobileMinus />
										</div>
									</>
								) : (
									<>
										<div className='md:block hidden'>
											<AccordionPlus />
										</div>
										<div className='block md:hidden'>
											<AccordionMobilePlus />
										</div>
									</>
								) }
							</motion.div>
							<AnimatePresence>
								{ openIndex === index && (
									<motion.div
										key='content'
										initial={ { opacity: 0, height: 0 } }
										animate={ { opacity: 1, height: 'auto' } }
										exit={ { opacity: 0, height: 0 } }
										transition={ { duration: 0.3 } }
									>
										<p className='py-2 text-[13px] md:text-base font-Poppins text-grey-primary leading-[150%] max-w-[700px]'>
											{ item.content }
										</p>
									</motion.div>
								) }
							</AnimatePresence>
						</div>
					)) }
				</div>
			</div>
		</div>
	);
};

export default FrequentlyAskedQues;
