'use client';

import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { marketingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

const bannerData = marketingData.banner;

type BannerProps = {
  type: string;
};

const Banner: React.FC<BannerProps> = ({ type = 'men' }) => {
	const [openPopup, setOpenPopup] = useState<boolean>(true);

	const renderImage = () => {
		const image =
      bannerData.image[type as 'women' | 'men'] ?? bannerData.image.women;
		const imageMobile =
      bannerData.imageMobile[type as 'women' | 'men'] ?? bannerData.image.women;

		if (image || imageMobile) {
			return (
				<>
					<Image
						src={ image }
						alt='banner'
						className={ clsxm(
							'object-cover pointer-events-none max-lg:hidden',
							type === 'men' && 'object-top'
						) }
						quality={ 100 }
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
						fill
					/>

					<Image
						src={ imageMobile }
						alt='banner-mobile'
						className='object-cover object-top pointer-events-none lg:hidden'
						quality={ 100 }
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
						fill
					/>
				</>
			);
		}

		return null;
	};

	const renderBanner = () => {
		return (
			<div className='lg:px-3 overflow-hidden'>
				<div className='bg-primary w-full rounded-19px relative overflow-hidden'>
					<div className='max-lg:hidden absolute right-6 bottom-5 z-30'>
						{ renderPopup() }
					</div>

					<div className='container-center max-lg:h-[811px] lg:h-[664px] px-5 pb-16 lg:p-60px w-full'>
						<div className='h-full flex flex-col justify-end lg:justify-start relative z-10 max-w-[336px] lg:max-w-[611px] mx-auto lg:mx-0'>
							<motion.h2
								variants={ {
									initial: { y: -24, opacity: 0 },
									animate: { y: 0, opacity: 1 },
								} }
								initial='initial'
								whileInView='animate'
								viewport={ { once: true, amount: 0.3 } }
								transition={ { duration: 0.64, ease: 'easeInOut' } }
								className='text-white max-lg:text-center font-medium text-[9.6vw] xxs2:text-4xl lg:text-[46px] !leading-normal -tracking-0.04em'
							>
								{ bannerData.title }
							</motion.h2>
						</div>
					</div>
					<div className='absolute bottom-[180px] lg:bottom-0 w-full h-full max-lg:h-[631px]'>
						{ renderImage() }
					</div>

					{ type !== 'women' && (
						<div
							className='max-lg:hidden absolute inset-y-0 w-1/2'
							style={ {
								background:
                  'linear-gradient(90deg, #14222B -29.15%, rgba(22, 30, 36, 0.50) 53.32%, rgba(24, 26, 28, 0.00) 100%)',
							} }
						/>
					) }
					<div
						className='absolute bottom-0 inset-x-0 z-[5] w-full h-[523px] lg:hidden'
						style={ {
							background:
                type === 'women'
                	? 'linear-gradient(0deg, #649AAD 40.24%, rgba(24, 26, 28, 0.00) 94.74%)'
                	: 'linear-gradient(0deg, #080F00 32.21%, rgba(14, 26, 0, 0.00) 94.74%)',
						} }
					/>
				</div>
			</div>
		);
	};

	const renderPopup = () => {
		return (
			<motion.div
				variants={ {
					initial: { scale: 0, opacity: 0 },
					animate: {
						scale: 1,
						opacity: 1,
						transition: { duration: 0.64, delay: 0.4, ease: 'easeInOut' },
					},
					exit: {
						scale: 0,
						opacity: 0,
						transition: { duration: 0.64, ease: 'easeInOut' },
					},
				} }
				initial='initial'
				whileInView={ openPopup ? 'animate' : 'initial' }
				viewport={ { once: true, amount: 0.3 } }
				exit='exit'
			>
				<div className='bg-white rounded-[20px] p-3 lg:w-[419px] relative'>
					<button
						onClick={ () => setOpenPopup(false) }
						className='focus:ring-0 focus:outline-none max-lg:hidden absolute right-3 top-3 rounded-full border-[0.6px] border-grey-100 hover:bg-grey-100 w-5 h-5 flex items-center justify-center'
					>
						<IoIosClose className='fill-grey-primary w-5 h-5 flex-shrink-0' />
					</button>
					<div className='grid grid-cols-10 gap-2.5 w-full'>
						<div className='col-span-3 flex-shrink-0'>
							<div className='w-full h-full bg-gradient-blue rounded-2xl relative overflow-hidden'>
								<Image
									src={ bannerData.popup.image }
									alt=''
									className='object-cover'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
									fill
								/>
							</div>
						</div>
						<div className='text-primary w-full col-span-7'>
							<h4 className='text-lg'>{ bannerData.popup.title }</h4>
							<p className='mt-2.5 text-xs !leading-5 max-sm:max-w-[196px] lg:max-w-[252px]'>
								{ bannerData.popup.description }
							</p>
							<div className='w-full flex mt-6 lg:mt-[22px]'>
								<Link
									href={ bannerData.popup.cta.href }
									className='btn btn-primary w-full text-xs !leading-6 !py-2'
								>
									{ bannerData.popup.cta.text }
								</Link>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		);
	};

	return (
		<div className='pt-[42px] lg:pt-[165px] w-full'>
			<div className='max-lg:px-4 max-lg:mb-[42px] max-w-2xl mx-auto lg:hidden'>
				{ renderPopup() }
			</div>
			{ renderBanner() }
		</div>
	);
};

export default Banner;
