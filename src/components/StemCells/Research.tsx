'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { XIcon } from '../Icons';

import ButtonCTA from './ButtonCTA';
import SectionTitle from './SectionTitle';

const VideoResearch = () => {
	return (
		<div className='container-center w-full pb-[105px] lg:pb-[212px]'>
			<div className='gap-y-[42px] max-w-[738px] mx-auto flex flex-col items-center text-center'>
				<SectionTitle>
          Watch the latest research
					<br className='lg:hidden' />
          on a new interview with
					<br className='lg:hidden' />
					<span className='font-normal italic'>Dr. Joy Kong</span>
				</SectionTitle>
				<ButtonCTA className='max-sm:w-full'>Coming Soon</ButtonCTA>
			</div>
			<div className='max-w-[1229px] mx-auto mt-[105px] lg:mt-[59px]'>
				<VideoDialog />
			</div>
		</div>
	);
};

const Play = (props?: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width='50'
			height='55'
			viewBox='0 0 50 55'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{ ...props }
		>
			<path
				d='M47.1579 23.9664C49.8947 25.5465 49.8947 29.4968 47.1579 31.077L7.13158 54.1862C4.39474 55.7663 0.973687 53.7911 0.973687 50.6309L0.97369 4.41248C0.97369 1.25225 4.39474 -0.722895 7.13158 0.857221L47.1579 23.9664Z'
				fill='white'
			/>
		</svg>
	);
};

const VideoDialog = () => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);
	const animationProps = {
		initial: { scale: 0.5, opacity: 0 },
		animate: { scale: 1, opacity: 1 },
		exit: { scale: 0.5, opacity: 0 },
	};

	return (
		<div className='relative'>
			<div
				className='relative overflow-hidden w-full h-full cursor-pointer group rounded-[27px] lg:rounded-[50px] aspect-[343/349] lg:aspect-[1229/632]'
				onClick={ () => setIsVideoOpen(true) }
			>
				<div className='relative overflow-hidden w-full h-full'>
					<div
						className='absolute inset-0 z-10 bg-[#2B307A]'
						style={ {
							mixBlendMode: 'hard-light',
						} }
					/>

					<Image
						src='/images/stem-cells/research/video-thumbnail.webp'
						alt='Latest Research'
						className='w-full object-cover max-lg:hidden'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						fill
					/>

					<Image
						src='/images/stem-cells/research/video-thumbnail-mobile.webp'
						alt='Latest Research'
						className='w-full object-cover lg:hidden'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						fill
					/>
				</div>

				<div className='absolute inset-0 flex items-center justify-center z-20'>
					<div className='flex items-center justify-center bg-white/20 backdrop-blur-[10.67px] border-2 border-white/15 rounded-full w-[107.73px] lg:w-[195px] aspect-square transition-all ease-out duration-200 relative group-hover:scale-[0.9] scale-100'>
						<Play className='w-[38.56px] lg:w-[70px] h-auto -mr-1.5' />
					</div>
				</div>
			</div>
			<AnimatePresence>
				{ isVideoOpen && (
					<motion.div
						initial={ { opacity: 0 } }
						animate={ { opacity: 1 } }
						onClick={ () => setIsVideoOpen(false) }
						exit={ { opacity: 0 } }
						className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md'
					>
						<motion.div
							{ ...animationProps }
							transition={ { type: 'spring', damping: 30, stiffness: 300 } }
							className='relative w-full max-w-4xl aspect-video mx-4 md:mx-0'
						>
							<motion.button className='absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black'>
								<XIcon className='w-5 h-5' />
							</motion.button>
							<div className='w-full h-full border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative'>
								<iframe
									src='https://www.youtube.com/embed/b1JffHCq-g0?si=X0n2Bw27iHNLbno7'
									className='w-full h-full rounded-2xl'
									allowFullScreen
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								 />
							</div>
						</motion.div>
					</motion.div>
				) }
			</AnimatePresence>
		</div>
	);
};

export default VideoResearch;
