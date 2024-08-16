'use client';

import React, { CSSProperties, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { marketingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import { CheckCircleIcon } from '../Icons';
import Navbar, { navbarDefaultTransition } from '../Navbar/Landing';
import PopupReview from '../PopupReview';

const heroData = marketingData.hero;
const transition = {
	ease: 'easeInOut',
	duration: 0.75,
};

type HeroProps = {
  type?: string;
};

const Hero: React.FC<HeroProps> = ({ type = 'men' }) => {
	const [openPopup, setOpenPopup] = useState<boolean>(true);

	const renderImage = (size: 'desktop' | 'mobile') => {
		const imageMobile = size === 'mobile';
		const currImage = imageMobile ? heroData.imageMobile : heroData.image;

		return (
			<Image
				src={ currImage[type as 'women' | 'men'] ?? currImage.women }
				alt='hero'
				priority={ true }
				className={ clsxm(
					'object-cover pointer-events-none',
					imageMobile
						? 'md:hidden object-center'
						: 'md:block hidden object-right'
				) }
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
			/>
		);
	};

	const renderTitles = (titles: string[]) => {
		return titles.map((title: string, titleIdx: number) => (
			<span
				key={ `title-${titleIdx}` }
				className='overflow-hidden inline-flex'>
				<motion.span
					variants={ {
						visible: {
							y: 0,
							transition: transition,
						},
						hidden: { y: '100%' },
					} }
					className='inline-flex text-[7.2vw] xxs2:text-[7.692vw] xs2:text-3xl lg:text-[46px] !leading-normal font-medium -tracking-0.04em text-grey-secondary lg:text-white'
				>
					{ title }
				</motion.span>
			</span>
		));
	};

	const renderPopup = () => {
		return (
			<PopupReview
				motionProps={ {
					variants: {
						initial: { scale: 0, opacity: 0 },
						animate: {
							scale: 1,
							opacity: 1,
							transition: { duration: 0.64, delay: 2, ease: 'easeInOut' },
						},
						exit: {
							scale: 0,
							opacity: 0,
							transition: { duration: 0.64, ease: 'easeInOut' },
						},
					},
					initial: 'initial',
					animate: openPopup ? 'animate' : 'initial',
					exit: 'exit',
				} }
				style={
          {
          	'--shadow-popup-mobile':
              '0px 61px 25px rgba(184, 184, 184, 0.01), 0px 34px 21px rgba(184, 184, 184, 0.05), 0px 15px 15px rgba(184, 184, 184, 0.09), 0px 4px 8px rgba(184, 184, 184, 0.1)',
          } as CSSProperties
				}
				wrapperClassName='max-lg:[box-shadow:var(--shadow-popup-mobile)] lg:w-[419px]'
				sizeLargerOnDesktop
				buttonClose={
					<button
						onClick={ () => setOpenPopup(false) }
						className='focus:ring-0 focus:outline-none max-lg:hidden absolute right-3 top-3 rounded-full border-[0.6px] border-grey-100 hover:bg-grey-100 w-5 h-5 flex items-center justify-center'
					>
						<IoIosClose className='fill-grey-primary w-5 h-5 flex-shrink-0' />
					</button>
				}
			/>
		);
	};

	const renderHero = () => {
		return (
			<div className='bg-primary h-[calc(100svh+14px)] lg:h-[calc(100vh-24px)] w-full overflow-hidden max-lg:rounded-t-none rounded-19px relative pt-11px lg:pt-5'>
				<div className='absolute max-lg:bottom-[29.564vh] max-lg:h-[calc(100vh-29.564vh+14px)] lg:bottom-0 w-full h-full'>
					{ renderImage('desktop') }
					{ renderImage('mobile') }
				</div>
				<div className='max-lg:hidden absolute right-6 bottom-6 z-30'>
					{ renderPopup() }
				</div>

				<div
					className={ clsxm(
						'lg:hidden absolute bottom-0 inset-x-0 w-full h-[71%] -z-0'
					) }
					style={ {
						background:
              type === 'women'
              	? 'linear-gradient(0deg, #184860 47.49%, rgba(24, 72, 96, 0.00) 94.74%)'
              	: 'linear-gradient(0deg, #14222B 47.49%, rgba(24, 26, 28, 0.00) 94.74%)',
					} }
				/>

				<div className='h-full container-center relative'>
					<div className='pb-6 lg:pb-[74px] h-full w-full flex flex-col justify-end'>
						<div className='text-left flex flex-col'>
							<motion.h1
								initial='hidden'
								animate='visible'
								variants={ {
									visible: {
										transition: {
											staggerChildren: 0.25,
										},
									},
								} }
								className='flex flex-col'
							>
								{ renderTitles(heroData.titles) }
							</motion.h1>

							<motion.div
								initial='hidden'
								animate='visible'
								variants={ {
									visible: {
										transition: {
											staggerChildren: 0.25,
											delayChildren: 0.25 * heroData.titles.length,
										},
									},
								} }
								className='mt-3.5 lg:mt-6 space-y-3'
							>
								{ heroData.list.map((item, itemIdx) => {
									return (
										<motion.div
											variants={ {
												hidden: { x: 24, opacity: 0 },
												visible: { x: 0, opacity: 1 },
											} }
											transition={ transition }
											key={ itemIdx }
											className='flex gap-1.5'
										>
											<CheckCircleIcon className='w-4 h-4 flex-shrink-0 text-white' />
											<span className='text-sm !leading-5 text-grey-50 lg:text-white'>
												{ item }
											</span>
										</motion.div>
									);
								}) }
							</motion.div>

							<div className='flex w-full mt-6 overflow-hidden'>
								<motion.div
									variants={ {
										visible: {
											y: 0,
											transition: {
												...transition,
												delay: 0.25 * heroData.titles.length + 0.75,
												duration: 1,
											},
										},
										hidden: { y: '101%' },
									} }
									initial='hidden'
									animate='visible'
									className='max-sm:w-full flex'
								>
									<ButtonCta
										href={ heroData.cta.href }
										theme='secondary'
										className='max-sm:w-full'
									>
										{ heroData.cta.text }
									</ButtonCta>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='lg:px-3 lg:pt-3 overflow-hidden lg:mb-[124px]'>
			<Navbar
				animationProps={ {
					transition: {
						...navbarDefaultTransition,
						delay: 1.75,
					},
				} }
			/>
			{ renderHero() }
			<div className='max-lg:px-4 max-lg:pb-[42px] max-lg:mt-[42px] max-w-2xl mx-auto lg:hidden'>
				{ renderPopup() }
			</div>
		</div>
	);
};

export default Hero;
