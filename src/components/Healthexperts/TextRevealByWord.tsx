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
	className,
}) => {
	const targetRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
	});
	const words = text.split(' ');

	return (
		<div
			ref={ targetRef }
			className={ clsxm('relative z-0 lg:h-[200vh] lg:px-3', className) }>
			<div
				className={
					clsxm(
						'sticky top-0 container-center flex flex-col h-[50%] w-full  justify-center bg-transparent',
					)
				}
			>
				<h2 className='h3 lg:h2 mb-6'>Two teams, one approach</h2>
				<p className='body-small lg:hidden'>{ text }</p>
				<p
					ref={ targetRef }
					className={
						'flex flex-wrap h3 max-lg:hidden'
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