'use client';

import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import membershipdata from '@/constant/data/membership';

import ButtonCta from '../ButtonCta';
// import CustomLink from '../CustomLink';
import { CheckCircleIcon } from '../Icons';

const chooseGevitiData = membershipdata.chooseGevity;

const ChooseGeviti = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start']
	});
	const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

	const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

	const renderImage = () => {
		return (
			<Image
				className='w-full h-[448px] lg:h-[644.11px] object-contain'
				src={ chooseGevitiData.image }
				alt='oral'
				width={ 480.05 }
				height={ 644.11 }
			/>
		);
	};

	return (
		<div className='lg:px-3 py-6 lg:py-[122px] font-Poppins'>
			<div
				ref={ containerRef }
				className='rounded-19px max-lg:bg-grey-secondary max-lg:overflow-hidden relative'>
				<div className='container-center max-lg:pt-12'>
					<div className='lg:flex items-start'>
						<div className='lg:w-1/2 lg:pt-[50px]'>
							<div
								ref={ ref }
								className='lg:px-4 xl:px-14 text-center lg:text-left'>
								<p className='text-grey-primary text-pretitle mb-4 lg:mb-1'>
									{ chooseGevitiData.preTitle }
								</p>
								<h4 className='text-[28px] !leading-[108%] lg:text-4xl lg:!leading-none -tracking-0.04em'>
									{ chooseGevitiData.title }
								</h4>
								<div className='lg:hidden flex mt-[34px] justify-center max-sm:w-full'>
									<ButtonCta
										href={ chooseGevitiData.btnCta.href }
										text={ chooseGevitiData.btnCta.text }
										aria-label={ chooseGevitiData.btnCta.text }
										theme='primary'
										className='max-sm:w-full'
									/>
								</div>
								<motion.div
									initial='initial'
									animate={ inView ? 'animate' : 'initial' }
									transition={ {
										staggerChildren: 0.25,
									} }
									className='text-left pb-[15px] lg:pb-[50px] pt-[34px] lg:pt-50px flex flex-col gap-y-1.5 lg:gap-y-2.5'>
									{ chooseGevitiData?.list.map((text, index) => (
										<motion.div
											key={ index }
											variants={ {
												initial: {
													y: 25,
													opacity: 0,
												},
												animate: {
													y: 0,
													opacity: 1,
													transition: {
														ease: 'easeInOut',
														duration: .75
													}
												}
											} }
											whileHover={ {
												scale: 1.05,
												transition: {
													duration: .25,
													ease: 'easeOut'
												}
											} }
										>
											<div className='flex items-center gap-3 bg-white/5 px-[13px] lg:px-5 py-[15px] lg:py-3.5 border border-white/15 rounded-lg shadow-[0px_4px_15.8px_0px_rgba(2,23,27,0.10)]'>
												<CheckCircleIcon className='flex-shrink-0 w-[15px] h-[15px] lg:w-3 lg:h-3' />
												<p className='-tracking-0.04em font-medium text-xs !leading-[103%] lg:text-sm lg:!leading-normal'>{ text }</p>
											</div>
										</motion.div>
									)) }
								</motion.div>
								<div className='hidden lg:flex auto-rows-fr gap-6 items-center'>
									<ButtonCta
										href={ chooseGevitiData.btnCta.href }
										text={ chooseGevitiData.btnCta.text }
										theme='primary'
										aria-label={ chooseGevitiData.btnCta.text }
									/>
									{ /* <CustomLink
										href='/products'
										className='bg-white hover:shadow-[0px_4px_15.8px_0px_rgba(2,23,27,0.10)] ease-in-out transition-shadow duration-150 group border border-white/5 backdrop-blur-[25px] rounded-full py-1.5 pl-[42px] pr-1.5 h-[58px] relative grid place-items-center grid-cols-[auto_46px] overflow-hidden gap-1'
										aria-label={ chooseGevitiData.btnCta2.text }
									>
										<span className='text-lg leading-[133%] font-medium text-primary inline-block z-[2]'>
											{ chooseGevitiData.btnCta2.text }
										</span>
										<span className='w-[46px] relative flex items-center justify-center group-hover:translate-x-1 ease-in-out duration-150'>
											<ChevronRight className='w-18px h-18px text-primary flex-shrink-0' />
										</span>
									</CustomLink> */ }
								</div>
							</div>
						</div>
						<motion.div
							style={ { y: backgroundY } }
							className='lg:w-1/2 max-lg:hidden'>
							{ renderImage() }
						</motion.div>

						<div className='lg:hidden relative overflow-hidden max-lg:h-[310px]'>
							{ renderImage() }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseGeviti;
