'use client';

import React, { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

import LottieExclamationIcon from '../../../public/lottie/exclamation-icon.json';
import LottieLogoIcon from '../../../public/lottie/logo-icon.json';
import LottieSuccessIcon from '../../../public/lottie/success-icon.json';

import Button from './Button';
import { slideInCenterToLeftProps } from './transitions';

export type TipProps = {
	title?: string;
	desc?: string;
	type?: string; // logo | success | exclamation
	onContinue?: () => void;
	cta?: {
		title: string;
		href?: string;
	};
};

export const getTipBackgroundColor = (type: string) => {
	if (type === 'logo' || type === 'exclamation') return 'rgba(163, 224, 255, 0.25)';
	if (type === 'success') return 'rgba(227,237,230,255)';
	return 'rgba(222,238,245,255)';
};

const Tip: React.FC<TipProps> = ({
	title,
	desc,
	type = 'logo',
	onContinue,
	cta
}) => {
	const lottieRef = useRef<Player>(null);

	useEffect(() => {
		if (lottieRef?.current) {
			setTimeout(() => {
				lottieRef?.current?.play();
			}, 450);
		}
	}, []);

	useEffect(() => {
		if (onContinue) {
			setTimeout(() => {
				onContinue();
			}, type === 'success' ? 8000 : 5000);
		}
	}, []);

	const getLottieSource = () => {
		if (type === 'logo') return LottieLogoIcon;
		if (type === 'success') return LottieSuccessIcon;
		if (type === 'exclamation') return LottieExclamationIcon;
		return LottieLogoIcon;
	};

	const renderPlayer = () => {
		const src = getLottieSource();

		return (
			<Player
				src={ src }
				ref={ lottieRef }
				keepLastFrame
				speed={ type === 'exclamation' ? 2 : 1 }
				className={ type === 'exclamation' ? 'w-[268.15px] h-[268.15px]' : 'w-[278px] h-[278px]' }
			/>
		);
	};

	const bgColorVariants: Variants = {
		hidden: {
			height: '100%',
			width: '100%',
			backgroundColor: '#F2F2F2',
			opacity: 0
		},
		visible: {
			backgroundColor: ['#F2F2F2', getTipBackgroundColor(type)],
			opacity: 1,
			transition: {
				delay: 0.3,
				duration: 2,
				ease: [.21, 1.04, .58, 1.15],
			}
		},
		exit: {
			backgroundColor: '#F2F2F2',
			opacity: 0,
			transition: {
				duration: .5,
				ease: 'easeInOut',
			}
		},
	};

	const slideInVariants: Variants = {
		initial: {
			x: 0,
		},
		visible: {
			x: 0
		},
		exit: {
			x: '-100vw',
			transition: slideInCenterToLeftProps
		}
	};

	return (
		<motion.div
			variants={ bgColorVariants }
			initial='hidden'
			animate='visible'
			exit='exit'
			className='w-full h-full lg:rounded-[20px] text-center relative'
		>
			<motion.div
				variants={ slideInVariants }
				animate='visible'
				exit='exit'
				className='w-full h-full lg:rounded-[20px] text-center relative'
			>
				<div className='absolute top-[40%] -translate-y-[40%] lg:top-1/4 lg:-translate-y-1/4 left-1/2 -translate-x-1/2 w-full px-4 xs2:px-6 lg:px-0'>
					<motion.div
						initial={ { y: '100vh' } }
						animate={ {
							y: 0,
							transition: {
								delay: 0.3,
								duration: 1,
								ease: [.21, 1.04, .58, 1],
							}
						} }
					>
						<div className='-m-[78px]'>
							{ renderPlayer() }
						</div>
					</motion.div>
					<motion.div
						initial={ { y: '100vh' } }
						animate={ {
							y: 0,
							transition: {
								duration: .75,
								delay: 0.48,
								ease: [.21, 1.04, .58, 1.15]
							}
						} }
					>
						{ title && (
							<h1
								className='text-[34px] 2xl:text-[36px] font-medium -tracking-[0.04em] leading-normal mt-2 mb-[7px] lg:mb-2'
								dangerouslySetInnerHTML={ { __html: title } }
							/>
						) }
					</motion.div>
					<motion.div
						initial={ { opacity: 0 } }
						animate={ {
							opacity: 1,
							transition: {
								duration: 1.75,
								delay: 1.05,
								ease: [.74, .16, .88, .98]
							}
						} }
					>
						<div className='max-w-[500px] 2xl:max-w-[550px] mx-auto'>
							{ desc && (
								<h2
									className='font-medium -tracking-[0.04em] leading-normal text-2xl 2xl:text-[28px]'
									dangerouslySetInnerHTML={ { __html: desc } } />
							) }

							{ cta && (
								<div className='flex justify-center mt-10'>
									<Link
										href={ cta.href ?? '/' }
										className='w-full max-w-[430px]'>
										<Button className='!bg-primary !text-white !font-medium w-full max-w-[430px] py-3'>{ cta.title }</Button>
									</Link>
								</div>
							) }
						</div>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Tip;