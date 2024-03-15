import React from 'react';
import { motion, Variants } from 'framer-motion';

type AnimatedWordsProps = {
	text: string;
};

const slideUpVariants: Variants = {
	hidden: {
		y: '200%',
		transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
	},
	visible: {
		y: 0,
		transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
	},
};

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ text }) => {
	//  Split each word of props.text into an array
	const splitWords = text.split(' ');

	// Create storage array
	const words = [];

	// Push each word into words array
	for (const item of splitWords) {
		words.push(item.split(''));
	}

	// Add a space ("\u00A0") to the end of each word
	words.map(word => {
		return word.push('\u00A0');
	});

	return (
		<>
			{ words.map((word, index) => {
				return (
					<span
						key={ index }
						className='whitespace-nowrap'>
						<span className='overflow-hidden inline-block'>
							<motion.span
								className='inline-block'
								variants={ slideUpVariants }>
								{ word }
							</motion.span>
						</span>
					</span>
				);
			}) }
		</>
	);
};

export default AnimatedWords;
