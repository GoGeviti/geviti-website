'use client';

import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { AnimationItem } from 'lottie-web';

import { FormOption } from '@/app/onboarding/page';

import { slideInVariants, wrapperListVariants } from './transitions';

const AnswerBox: React.FC<{ text: string; onClick?: () => void; }> = ({ text, onClick }) => {
	const [lottieRef, setLottieRef] = useState<AnimationItem | null>(null);

	return (
		<motion.li
			onHoverStart={ () => lottieRef?.play() }
			variants={ slideInVariants }
			whileHover={ {
				scale: 1.02,
				boxShadow: '0px 15px 30px 0px rgba(16, 24, 40, 0.10)',
				zIndex: 1,
				transition: {
					duration: 0.75,
					ease: [.21, 1.04, .58, 1.15]
				}
			} }
			whileTap={ {
				scale: 1,
				boxShadow: '0px 15px 30px 0px rgba(16, 24, 40, 0)',
				transition: {
					duration: 0.75,
					ease: [.21, 1.04, .58, 1.15]
				}
			} }
			className='bg-white px-6 py-18px rounded-[10px] flex justify-between gap-1 cursor-pointer'
			onClick={ onClick }
		>
			<span className='text-[15px] 2xl:text-[17px] font-medium leading-normal text-left select-none'>{ text }</span>
			<Player
				src='https://lottie.host/bb088647-6cba-449e-88b6-c71c07ada63e/Fnq8jLrX0T.json'
				className='w-6 2xl:w-[26px]'
				lottieRef={ ref => setLottieRef(ref) }
			/>
		</motion.li>
	);
};

export type MultipleChoiceQuestionProps = {
	title?: string;
	options?: FormOption[];
	onSelect?: (selected: FormOption) => void; // eslint-disable-line no-unused-vars
};

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
	title,
	options = [],
	onSelect
}) => {
	return (
		<div className='absolute top-[30px] lg:top-[5%] 2xl:top-[10%] left-1/2 -translate-x-1/2 w-full max-lg:px-4'>
			<div className='max-w-[430px] mx-auto w-full'>
				<motion.h1
					variants={ slideInVariants }
					className='text-2xl 2xl:text-[36px] leading-normal -tracking-[0.04em] max-lg:font-medium text-center lg:text-left'>
					{ title }
				</motion.h1>
				<div className='mt-5'>
					<motion.ul
						variants={ wrapperListVariants }
						className='flex flex-col gap-y-3'>
						{ options.map((answer, answerIdx) => (
							<AnswerBox
								key={ answerIdx }
								text={ answer.label }
								onClick={ () => {
									if (onSelect) onSelect(answer);
								} }
							/>
						)) }
					</motion.ul>
				</div>
			</div>
		</div>
	);
};

export default MultipleChoiceQuestion;