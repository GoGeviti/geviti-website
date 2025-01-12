'use client';

import { motion } from 'framer-motion';

import SectionTitle from '../SectionTitle';

const Title = () => {
	return (
		<motion.div
			initial='hidden'
			whileInView='show'
			viewport={ { amount: 0.5, once: true } }
			exit='exit'
			variants={ {
				show: {
					transition: { staggerChildren: 0.06 },
				},
				exit: {
					transition: { staggerChildren: 0.06, staggerDirection: -1 },
				},
			} }
			className='text-center flex flex-col items-center'
		>
			<SectionTitle>
        Our <span className='font-normal italic'>Innovative</span>
			</SectionTitle>
			<SectionTitle>Process</SectionTitle>
		</motion.div>
	);
};

export default Title;
