'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import AnimatedWords from '../AnimatedWords';

import ButtonCta from './ButtonCta';
import { revealTextTransition } from './transition';

const AnimatedNumbers = dynamic(() => import('../AnimatedNumbers'), { ssr: false });

const biologicalData = landingData.biologicalKit;

const defaultPropsAnimatedNumbers = {
	includeComma: true,
	className: 'text-[160px] leading-[240px] lg:text-[270px] lg:leading-[405px] -tracking-0.04em',
	transitions: (index: number) => ({
		ease: 'easeInOut',
		duration: 3 - (index * 0.05),
		delay: .025 * (2 - index)
	}),
	animateToNumber: biologicalData.counter.digit
};

const BiologicalKit: React.FC = () => {
	const { ref, inView } = useInView({
		triggerOnce: true
	});

	const renderStep = () => {
		const stepsData = biologicalData.step.list;

		return (
			<div
				className='mt-6'
				aria-hidden='true'>
				<div className='overflow-hidden hidden lg:inline-block w-full'>
					<motion.div
						variants={ {
							hidden: { y: '100%' },
							visible: { y: 0, transition: revealTextTransition }
						} }
						initial='hidden'
						animate={ inView ? 'visible' : 'hidden' }
						className='overflow-hidden h-0.5 rounded-full hidden lg:grid lg:grid-cols-3 bg-white/10'
					>
						{ stepsData.map((stepItem, stepItemIdx) => (
							<motion.div
								key={ `step-bar-${ stepItemIdx }` }
								className='w-full shadow-none flex flex-col text-center whitespace-nowrap justify-center'
								style={ {
									boxShadow: `0px 2px 5px 0px ${ stepItem.shadowColor }`,
									backgroundColor: stepItem.stepColor
								} }
								variants={ {
									visible: { width: '100%' },
									hidden: { width: 0 }
								} }
								initial='hidden'
								animate={ inView ? 'visible' : 'hidden' }
								transition={ {
									duration: 1.5,
									delay: 1.5,
									ease: 'easeOut'
								} }
							/>
						)) }
					</motion.div>
				</div>
				<motion.div
					initial='hidden'
					animate={ inView ? 'visible' : 'hidden' }
					variants={ {
						visible: {
							transition: {
								delayChildren: .6,
								staggerChildren: 0.05
							}
						}
					} }
				>
					<h3 className='text-2xl lg:!leading-[36px] -tracking-0.04em mt-[62px] lg:mt-[5vh]'>
						<AnimatedWords text={ biologicalData.step.title } />
					</h3>
				</motion.div>
				<motion.div
					initial='hidden'
					animate={ inView ? 'visible' : 'hidden' }
					variants={ {
						visible: {
							transition: {
								staggerChildren: 0.05,
								delayChildren: .6
							}
						}
					} }
					className='mt-[37px] grid gap-[42px] lg:gap-1 lg:grid-cols-3 text-sm !leading-[21px] text-grey-primary'>
					{ stepsData.map((stepItem, stepItemIdx) => (
						<span
							key={ stepItemIdx }
							className='overflow-hidden inline-block'>
							<motion.div
								variants={ {
									hidden: { y: '200%' },
									visible: {
										y: 0,
										transition: { ease: revealTextTransition.ease, duration: 1.5 },
									},
								} }
								className={ clsxm(
									'flex',
									stepItemIdx === stepsData.length - 1 && 'justify-end',
									stepItemIdx > 0 && stepItemIdx < stepsData.length - 1 && 'justify-center'
								) }
							>
								<div className='flex gap-3'>
									<stepItem.icon className='flex-shrink-0' />
									<span className='lg:max-w-[285px]'>
										<span className='text-white'>{ stepItem.title }{ ' ' }</span>{ stepItem.text }
									</span>
								</div>
							</motion.div>
						</span>
					)) }
				</motion.div>
			</div>
		);
	};

	return (
		<div className='lg:px-3 overflow-hidden font-Poppins'>
			<div
				ref={ ref }
				className='bg-primary w-full rounded-19px relative text-white'>
				<div className='container-center py-[52px] lg:pt-[3vh] xxl:pt-[68px] lg:pb-[50px] relative isolate w-full h-full'>
					<div className='flex max-lg:flex-col justify-end lg:justify-between lg:gap-6 relative'>
						<div className='flex flex-col'>
							<div className='overflow-hidden inline-block'>
								<motion.span
									variants={ {
										hidden: { y: '100%' },
										visible: {
											y: 0,
											transition: { ease: revealTextTransition.ease, duration: 1 },
										},
									} }
									animate={ inView ? 'visible' : 'hidden' }
									initial='hidden'
									className='inline-block'>
									<h2
										className='-tracking-0.04em text-4xl !leading-[150%] md:text-5xl xl:text-[64px] xl:leading-normal'
										dangerouslySetInnerHTML={ { __html: biologicalData.title } } />
								</motion.span>
							</div>
							<div className='mt-2.5 text-grey-primary text-sm lg:max-w-[463px] overflow-hidden inline-block'>
								<motion.span
									variants={ {
										hidden: { y: '100%' },
										visible: {
											y: 0,
											transition: { ease: revealTextTransition.ease, duration: 1 },
										},
									} }
									animate={ inView ? 'visible' : 'hidden' }
									initial='hidden'
									className='inline-block'>
									<span dangerouslySetInnerHTML={ { __html: biologicalData.description } } />
								</motion.span>
							</div>
						</div>
						<div className='flex max-lg:my-1 justify-end lg:absolute lg:-top-[68px] lg:bottom-2 lg:right-0'>
							<div className='inline-block overflow-hidden'>
								<div className='lg:hidden'>
									<AnimatedNumbers
										{ ...defaultPropsAnimatedNumbers }
										fontStyle={ { fontSize: 160 } }
										isInView={ inView } />
								</div>
								<div className='max-lg:hidden'>
									<AnimatedNumbers
										{ ...defaultPropsAnimatedNumbers }
										fontStyle={ { fontSize: 270 } }
										isInView={ inView } />
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-end text-right lg:mt-5 max-lg:max-w-[324px] ml-auto overflow-hidden'>
						<motion.span
							variants={ {
								hidden: { y: '100%', },
								visible: {
									y: 0,
									transition: { ease: revealTextTransition.ease, duration: 1, delay: .5 },
								},
							} }
							animate={ inView ? 'visible' : 'hidden' }
							initial='hidden'
							className='inline-block'>
							<p className='text-grey-primary font-semibold text-[10px] !leading-[143%] lg:text-sm lg:!leading-6 tracking-0.11em uppercase'>
								<span dangerouslySetInnerHTML={ { __html: biologicalData.counter.description } } />
							</p>
						</motion.span>
					</div>
					<div className='mt-[62px] lg:mt-[17px] max-sm:w-full max-lg:justify-center overflow-hidden flex'>
						<motion.span
							variants={ {
								hidden: { y: '100%' },
								visible: {
									y: 0,
									transition: { ease: revealTextTransition.ease, duration: 1 },
								},
							} }
							animate={ inView ? 'visible' : 'hidden' }
							initial='hidden'
							className='inline-block'>
							<ButtonCta
								href={ biologicalData.btnCta.href }
								text={ biologicalData.btnCta.text }
								theme='secondary'
								className='max-sm:w-full'
							/>
						</motion.span>
					</div>
					<div className='mt-[62px] lg:mt-[20vh] xxl:mt-[267px]'>
						{ renderStep() }
					</div>
				</div>
			</div>
		</div>
	);
};

export default BiologicalKit;