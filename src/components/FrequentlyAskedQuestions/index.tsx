'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import Question from './Question';

type FrequentlyAskedQuestionsProps = {
	data: {
		title: string;
		content: string;
	}[];
};

const primaryVariants = {
	initial: {
		y: 25,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			ease: 'easeInOut'
		}
	},
};

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProps> = ({ data }) => {
	const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

	return (
		<div className='lg:px-3 relative font-Poppins overflow-hidden'>
			<div
				ref={ ref }
				className='bg-white rounded-19px py-[42px] lg:pt-[120px] lg:pb-[63px]'>
				<motion.div
					initial='initial'
					animate={ inView ? 'animate' : 'initial' }
					transition={ {
						staggerChildren: 0.05,
					} }
					className='container-center w-full'>
					<div className='grid grid-cols-1 lg:grid-cols-10 gap-14 w-full'>
						<div className='lg:col-span-4 flex flex-col max-lg:items-center max-lg:text-center'>
							<p className='text-pretitle text-grey-primary'>
								<span className='max-lg:hidden'>Have some questions?</span>
								<span className='lg:hidden'>Tailor-made longevity</span>
							</p>
							<div className='lg:max-w-[389px] mt-4 lg:mt-1'>
								<h2 className='text-[9.3vw] xxs:text-[28px] !leading-[116%] lg:text-4xl lg:!leading-[125%] -tracking-0.04em text-primary'>
									Frequently asked<br />questions
								</h2>
							</div>
						</div>
						<div className='lg:col-span-6 w-full -mt-6'>
							{ data.map((item, itemIdx) => {
								return (
									<motion.div
										key={ `faq-${ itemIdx }` }
										variants={ primaryVariants }>
										<Question title={ item.title }>
											<span dangerouslySetInnerHTML={ { __html: item.content } } />
										</Question>
									</motion.div>
								);
							}) }
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default FrequentlyAskedQuestions;