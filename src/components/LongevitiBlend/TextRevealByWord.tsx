'use client';

import { FC, ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
	text,
	className
}) => {
	const targetRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
	});
	const words = text.split(' ');

	return (
		<div
			ref={ targetRef }
			className={ clsxm('relative z-0 h-[200vh]', className) }>
			<div
				className='sticky top-0 mx-auto px-4 flex h-[50%] max-w-screen-lg  items-center bg-transparent'
			>
				<p
					ref={ targetRef }
					className={
						'flex flex-wrap h5 lg:h2'
					}
				>
					{ words.map((word, i) => {
						const start = i / words.length;
						const end = start + 1 / words.length;
						return (
							<Word
								key={ i }
								progress={ scrollYProgress }
								range={ [start, end] }>
								{ word }
							</Word>
						);
					}) }
				</p>
			</div>
		</div>
	);
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className='xl:lg-3 relative mx-1 lg:mx-2.5'>
			<span className={ 'absolute opacity-30' }>{ children }</span>
			<motion.span
				style={ { opacity: opacity } }
				className={ 'text-primary' }
			>
				{ children }
			</motion.span>
		</span>
	);
};

export default TextRevealByWord;