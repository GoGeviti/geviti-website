'use client';

import React from 'react';
import { motion } from 'framer-motion';

import type { FaqItem } from './index';
import Question from './Question';

type AccordionListProps = {
  data: FaqItem[];
};

const AccordionList: React.FC<AccordionListProps> = ({ data }) => {
	return (
		<>
			{ data.map((item, itemIdx) => {
				return (
					<motion.div
						key={ `faq-${itemIdx}` }
						variants={ primaryVariants }>
						<Question
							title={ item.title }
							isLastIdx={ itemIdx === data.length - 1 }
						>
							<span dangerouslySetInnerHTML={ { __html: item.content } } />
						</Question>
					</motion.div>
				);
			}) }
		</>
	);
};

export default AccordionList;

const primaryVariants = {
	initial: {
		y: 25,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			ease: 'easeInOut',
		},
	},
};
