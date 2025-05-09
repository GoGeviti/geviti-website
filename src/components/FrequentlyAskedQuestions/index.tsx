'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

import AccordionList from './AccordionList';

export type FaqItem = {
  title: string;
  content: string;
};

type FrequentlyAskedQuestionsProps = {
  data: FaqItem[];
  className?: string;
  subtitle?: React.ReactNode;
  disabledAnimation?: boolean;
};

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProps> = ({
	data,
	className,
	subtitle,
	disabledAnimation,
}) => {
	const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
	return (
		<div className='lg:px-3 relative font-Poppins overflow-hidden'>
			<div className='bg-white rounded-19px'>
				<div
					ref={ ref }
					className={ clsxm(
						'bg-white rounded-19px py-[42px] lg:pt-[120px] lg:pb-[63px] container-center',
						className
					) }
				>
					<motion.div
						{ ...(!disabledAnimation
							? {
								initial: 'initial',
								animate: inView ? 'animate' : 'initial',
								transition: {
									staggerChildren: 0.05,
								},
							}
							: {}) }
						className='w-full'
					>
						<div className='grid grid-cols-1 lg:grid-cols-10 gap-14 w-full'>
							<div className='lg:col-span-4 flex flex-col max-lg:items-center max-lg:text-center'>
								{ subtitle ?? (
									<p className='text-pretitle text-grey-primary'>
										<span className='max-lg:hidden'>Have some questions?</span>
										<span className='lg:hidden'>Tailor-made longevity</span>
									</p>
								) }
								<div className='lg:max-w-[389px] mt-4 lg:mt-1'>
									<h2 className='text-[9.3vw] xxs:text-[28px] !leading-[116%] lg:text-4xl lg:!leading-[125%] -tracking-0.04em text-primary'>
                    Frequently asked
										<br />
                    questions
									</h2>
								</div>
							</div>
							<div className='lg:col-span-6 w-full -mt-6'>
								<AccordionList data={ data } />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default FrequentlyAskedQuestions;
