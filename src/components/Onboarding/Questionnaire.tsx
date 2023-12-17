'use client';

import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { AnimationItem } from 'lottie-web';

import type { FormOption } from './Main';
import { slideInVariants, slideInVariantsDelay } from './transitions';

const AnswerBox: React.FC<{ text: string; index: number; onClick?: () => void; }> = ({ text, index, onClick }) => {
	const [lottieRef, setLottieRef] = useState<AnimationItem | null>(null);

	return (
		<motion.li
			onHoverStart={ () => lottieRef?.play() }
			variants={ slideInVariantsDelay(index + 1) }
			initial='initial'
			animate='visible'
			// exit='exit'
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
			className='bg-white px-6 py-5 sm:py-18px rounded-[10px] flex items-center justify-between gap-1 cursor-pointer relative'
			onClick={ onClick }
		>
			<span className='text-[15px] 2xl:text-[17px] font-medium leading-normal text-left select-none'>{ text }</span>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='16'
				viewBox='0 0 18 16'
				fill='none'
				className='sm:hidden'>
				<path
					d='M1.7998 6.99995C1.24752 6.99995 0.799805 7.44767 0.799805 7.99995C0.799805 8.55224 1.24752 8.99995 1.7998 8.99995V6.99995ZM16.1162 8.99995C16.6685 8.99995 17.1162 8.55224 17.1162 7.99995C17.1162 7.44767 16.6685 6.99995 16.1162 6.99995V8.99995ZM15.3336 8.62243C15.6774 9.05467 16.3065 9.12637 16.7387 8.78259C17.1709 8.4388 17.2426 7.80971 16.8988 7.37747L15.3336 8.62243ZM11.3313 0.37752C10.9876 -0.0547177 10.3585 -0.126422 9.92623 0.217364C9.49399 0.56115 9.42228 1.19024 9.76607 1.62248L11.3313 0.37752ZM16.8989 8.62242C17.2426 8.19018 17.1709 7.56109 16.7387 7.21731C16.3064 6.87353 15.6774 6.94524 15.3336 7.37748L16.8989 8.62242ZM9.76607 14.3775C9.42228 14.8098 9.49399 15.4389 9.92623 15.7826C10.3585 16.1264 10.9876 16.0547 11.3313 15.6225L9.76607 14.3775ZM1.7998 8.99995H16.1162V6.99995H1.7998V8.99995ZM16.8988 7.37747L11.3313 0.37752L9.76607 1.62248L15.3336 8.62243L16.8988 7.37747ZM15.3336 7.37748L9.76607 14.3775L11.3313 15.6225L16.8989 8.62242L15.3336 7.37748Z'
					fill='#181A1C' />
			</svg>
			<div className='absolute top-1/2 -translate-y-1/2 right-6 max-sm:hidden'>
				<Player
					src='https://lottie.host/bb088647-6cba-449e-88b6-c71c07ada63e/Fnq8jLrX0T.json'
					className='w-[26px]'
					lottieRef={ ref => setLottieRef(ref) }
				/>
			</div>
		</motion.li>
	);
};

export type QuestionnaireProps = {
	title?: string;
	options?: FormOption[];
	onSelect?: (selected: FormOption) => void; // eslint-disable-line no-unused-vars
};

const Questionnaire: React.FC<QuestionnaireProps> = ({
	title,
	options = [],
	onSelect
}) => {
	return (
		<motion.div
			variants={ slideInVariants }
			initial='initial'
			animate='visible'
			exit='exit'
			className='w-full h-full lg:rounded-[20px] text-center relative'
		>
			<div className='absolute top-[30px] lg:top-[5%] 2xl:top-[10%] left-1/2 -translate-x-1/2 w-full px-4 xs2:px-6 lg:px-0'>
				<div className='max-w-[430px] mx-auto w-full'>
					<motion.h1
						variants={ slideInVariants }
						initial='initial'
						animate='visible'
						className='text-2xl 2xl:text-[36px] leading-normal -tracking-[0.04em] max-lg:font-medium text-center lg:text-left'>
						{ title }
					</motion.h1>
					<div className='mt-[21px]'>
						<ul className='flex flex-col gap-y-3'>
							{ options.map((answer, answerIdx) => (
								<AnswerBox
									key={ answerIdx }
									index={ answerIdx }
									text={ answer.label }
									onClick={ () => {
										if (onSelect) onSelect(answer);
									} }
								/>
							)) }
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Questionnaire;