'use client';

import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

import { landingData } from '@/constant/data';

const paragraph = landingData.textReveal.paragraph;

type WordProps = {
	children: React.ReactNode;
	progress: MotionValue<number>;
	range: number[];
};

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return <span className='relative mr-[0.21em]'>
		<span className='absolute opacity-20'>{ children }</span>
		<motion.span style={ { opacity: opacity } }>{ children }</motion.span>
	</span>;
};

const TextReveal: React.FC = () => {
	const container = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start 0.5', 'end 1']
	});

	const words = paragraph.split(' ');

	return (
		<div className='lg:px-3 font-Poppins mt-6 lg:mt-[77px]'>
			<div
				ref={ container }
				className='bg-primary w-full rounded-19px block my-auto mx-0 px-[1.25rem]'>
				<div className='relative h-[200vh]'>
					<div className='sticky top-0 left-0 flex h-1/2 items-center justify-center py-[3.75rem]'>
						<div className='sm:max-w-md lg:max-w-[1046px] mx-auto flex items-center justify-center h-full'>
							<p className='flex flex-wrap text-[calc(3vw+2vh)] xs3:text-[1.75rem] lg:text-5xl !leading-normal text-blue-primary -tracking-[0.04em]'>
								{ words.map((word, i) => {
									const start = i / words.length;
									const end = start + (1 / words.length);
									return (
										<Word
											key={ i }
											progress={ scrollYProgress }
											range={ [start, end] }
										>{ word }</Word>
									);
								}) }
							</p>
						</div>
						<div className='absolute top-1/3 left-0 h-1/6 w-full' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextReveal;