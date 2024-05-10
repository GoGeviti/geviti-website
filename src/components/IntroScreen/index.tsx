'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type IntroScreenProps = {
	src?: string;
	type?: 'video' | 'image';
	screenId?: string;
	children: React.ReactNode;
};

export default function IntroScreen({ children, src, type = 'video' }: IntroScreenProps) {
	const vidRef = useRef<HTMLVideoElement | null>(null);

	const handlePlayVideo = () => {
		if (vidRef.current && type === 'video') {
			vidRef.current.play();
		}
	};

	useEffect(() => {
		handlePlayVideo();
		document.body.style.overflowY = 'hidden';

		return () => {
			document.body.style.overflowY = 'unset';
		};
	}, []);

	const renderContent = () => {
		if (type === 'video') {
			return (
				<video
					ref={ vidRef }
					muted
					width={ 3432 }
					height={ 2160 }
					playsInline
					className='w-full h-[540px] lg:h-full object-cover'
				>
					<source
						src={ src ?? '/videos/intro.mp4' }
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>
			);
		}

		if (type === 'image') {
			return (
				<motion.div
					initial={ {
						y: '100%',
						scale: 0.75,
						opacity: 0
					} }
					animate={ {
						y: 0,
						opacity: 1,
						scale: 1,
						transition: {
							duration: 1.3,
							ease: [0.76, 0, 0.24, 1]
						}
					} }
					className='w-[145px] h-[34.12px] relative overflow-hidden'>
					<Image
						src={ src ?? '/images/logo/logo_light.webp' }
						alt='geviti'
						priority
						fill
						className='w-full h-full object-contain'
					/>
				</motion.div>
			);
		}

		return null;
	};

	return (
		<AnimatePresence>
			<motion.div
				key='loader'
				variants={ {
					initial: {
						top: '0',
					},
					enter: {
						top: '-110vh',
						transition: { duration: .75, delay: type === 'video' ? 2.1 : 1.5, ease: [0.76, 0, 0.24, 1] },
						transitionEnd: {
							top: '110vh'
						}
					}
				} }
				initial='initial'
				animate='enter'
				onAnimationComplete={ () => {
					if (window) {
						setTimeout(() => {
							document.body.style.overflowY = 'unset';
						}, 500);
					}
				} }
				className='w-screen fixed h-[110vh] overflow-hidden top-0 z-[9999] left-0 pointer-events-none bg-blue-primary'
			>
				<div className='flex justify-center items-center h-screen w-full bg-primary'>
					{ renderContent() }
				</div>
			</motion.div>
			<motion.div key='content-children'>
				{ children }
			</motion.div>
		</AnimatePresence>
	);
}