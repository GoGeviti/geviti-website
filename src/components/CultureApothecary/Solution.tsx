'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import { CheckCircleIcon, ChevronDown } from '../Icons';

const accordionData = [
	{
		title: 'Chronic Fatigue',
		description:
      'Ongoing sense of exhaustion, low energy, and mental or physical weariness that persists even with adequate rest.',
	},
	{
		title: 'Peri/post menopause',
		description:
      'Physical and emotional changes, such as hot flashes, mood swings, and sleep disturbances, that occur as a woman’s body transitions out of its reproductive years.',
	},
	{
		title: 'Weight Management Issues',
		description:
      'Difficulty achieving or maintaining a healthy weight despite efforts with diet, exercise, or lifestyle changes.',
	},
	{
		title: 'Low Libido',
		description:
      'Persistent lack of sexual desire or interest, often accompanied by reduced arousal or satisfaction, which can stem from hormonal changes, stress, or other health factors.',
	},
	{
		title: 'Cognitive Decline',
		description:
      'Gradual reduction in memory, focus, problem-solving abilities, and overall mental sharpness, often impacting daily functioning and quality of life.',
	},
];

const Solution: React.FC = () => {
	const [openIdx, setOpenIdx] = useState<number>(0);

	const toggleAccordion = (idx: number) => {
		if (openIdx === idx) setOpenIdx(-1);
		else setOpenIdx(idx);
	};

	const renderAccordionList = () => {
		return accordionData.map(({ title, description }, index) => {
			const isOpen = index === openIdx;

			return (
				<div
					key={ title }
					onClick={ () => toggleAccordion(index) }
					className='relative overflow-hidden cursor-pointer'
				>
					<div className='relative w-full py-3'>
						<div className='flex items-center justify-between gap-6'>
							<div className='flex items-center gap-3.5'>
								<CheckCircleIcon
									className={ clsxm(
										'w-18px h-18px ease-in-out transition-colors duration-200',
										isOpen ? 'text-[#4AADF6]' : 'text-grey-primary'
									) }
								/>
								<h6
									className={ clsxm(
										'h6 -tracking-0.04em',
										isOpen ? 'text-primary' : 'text-grey-primary'
									) }
								>
									{ title }
								</h6>
							</div>
							<ChevronDown
								className={ clsxm(
									'w-4 h-4 ease-out transform duration-200',
									isOpen ? 'rotate-180 text-primary' : 'text-grey-primary'
								) }
							/>
						</div>
						<AnimatePresence mode='wait'>
							{ isOpen && (
								<motion.div
									key={ `culture-solution-${title}` }
									initial={ { y: -5, opacity: 0, height: 0 } }
									animate={ { y: 0, opacity: 1, height: 'fit-content' } }
									exit={ { y: -5, opacity: 0, height: 0 } }
									transition={ { duration: 0.3, ease: 'easeInOut' } }
								>
									<div className='pt-1 pl-8 text-grey-primary text-sm'>
										{ description }
									</div>
								</motion.div>
							) }
						</AnimatePresence>
					</div>
				</div>
			);
		});
	};

	return (
		<div className='relative overflow-hidden isolate'>
			<div className='flex max-lg:flex-col-reverse w-full lg:container-center pb-16 lg:pb-[175px]'>
				<div className='max-lg:mt-[42px] lg:flex-none lg:absolute lg:right-1/2 lg:left-0 lg:pr-10 xl:pr-[109px] xxxl:left-auto'>
					<div className='relative flex'>
						<div className='lg:flex-none lg:max-w-none relative w-full aspect-square lg:h-[640px] overflow-hidden'>
							<Image
								alt='Alex Clark'
								src='/images/cultureapothecary/solution-background.webp'
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw'
								className='w-full object-cover object-top'
							/>
						</div>
					</div>
				</div>
				<div className='w-full lg:relative lg:left-1/2 flex lg:min-h-[640px]'>
					<div className='lg:max-w-[507px] max-lg:px-4 flex flex-col gap-[42px]'>
						<h2 className='h5 lg:h3 max-xs3:text-[6vw] max-sm:max-w-[337px]'>
							<span className='max-lg:hidden'>
                We help address a variety of symptoms for total health
                optimization.
							</span>
							<span className='lg:hidden'>
                We assist in total body optimization for a healthier, longer
                lifespan
							</span>
						</h2>
						<ButtonCta
							href='/pricing'
							className='w-full sm:w-fit'>
							<span className='lg:hidden'>Become A Member</span>
							<span className='max-lg:hidden'>Join Geviti</span>
						</ButtonCta>

						<div className='-mt-3'>
							{ renderAccordionList() }
							{ /* <Accordion type='single' collapsible>
                {accordionData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`culture-solution-${index}`}
                    className='!border-none py-3'
                  >
                    <AccordionTrigger className='w-full flex items-center gap-3.5 text-left [&[data-state=open]>svg:nth-of-type(1)]:text-blue-primary [&[data-state=open]>svg:nth-of-type(2)]:rotate-180 data-[state=closed]:text-grey-primary data-[state=open]:text-primary font-medium text-lg -tracking-0.04em'>
                      <CheckCircleIcon className='ease-in-out transform transition-colors duration-300 w-[18px] h-[18px] shrink-0' />
                      <h5 className='flex-auto'>{item.title}</h5>
                      <ChevronDown className='w-4 h-4 ease-out transform duration-200 shrink-0' />
                    </AccordionTrigger>
                    <AccordionContent className='pt-1 pl-8 text-left text-grey-primary text-sm'>
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion> */ }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solution;
