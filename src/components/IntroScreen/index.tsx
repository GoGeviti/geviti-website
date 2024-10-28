'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

import { setCookieIntro } from '@/services/cookies';

type IntroScreenProps = {
  src?: string;
  type?: 'video' | 'image';
  screenId?: string;
  children: React.ReactNode;
  showIntro?: string;
};

export default function IntroScreen({
	children,
	src,
	type = 'video',
	showIntro = 'true',
}: IntroScreenProps) {
	const vidRef = useRef<HTMLVideoElement | null>(null);
	const controls = useAnimation();

	const handlePlayVideo = async() => {
		if (vidRef.current && type === 'video' && showIntro === 'true') {
			try {
				await vidRef.current.play();
				await controls.start('enter');
			} catch (error) {
				console.error('Video playback failed:', error);
				await controls.start('enter');
			}
		}
		if (type === 'image') {
			await controls.start('enter');
		}
	};

	useEffect(() => {
		handlePlayVideo();
		if (showIntro === 'true') {
			document.body.style.overflowY = 'hidden';
		}

		return () => {
			if (showIntro === 'true') {
				document.body.style.overflowY = 'unset';
			}
		};
	}, []);

	const renderContent = () => {
		if (type === 'video') {
			return (
				<div className='w-full h-full'>
					<video
						ref={ vidRef }
						muted
						playsInline
						preload='auto'
						className='w-full h-[540px] lg:h-full object-cover'
					>
						<source
							src={ src ?? '/videos/intro.mp4' }
							type='video/mp4'
						/>
						<p className='hidden'>Your browser does not support the video tag.</p>
					</video>
				</div>
			);
		}

		if (type === 'image') {
			return (
				<motion.div
					initial={ {
						y: '100%',
						scale: 0.75,
						opacity: 0,
					} }
					animate={ {
						y: 0,
						opacity: 1,
						scale: 1,
						transition: {
							duration: 1.3,
							ease: [0.76, 0, 0.24, 1],
						},
					} }
					className='w-[145px] h-[34.12px] relative'
				>
					<Image
						src={ src ?? '/images/logo/logo_light.webp' }
						alt='geviti'
						priority
						width={ 145 }
						height={ 34 }
						className='w-full h-full object-contain'
					/>
				</motion.div>
			);
		}

		return null;
	};

	return (
		<>
			{ showIntro === 'true' && (
				<motion.div
					key='loader'
					variants={ {
						initial: {
							transform: 'translateY(0)',
						},
						enter: {
							transform: 'translateY(-110vh)',
							transition: {
								duration: 0.75,
								delay: type === 'video' ? 2.1 : 1.5,
								ease: [0.76, 0, 0.24, 1],
							},
							transitionEnd: {
								transform: 'translateY(110vh)',
							},
						},
					} }
					initial='initial'
					animate={ controls }
					onAnimationComplete={ () => {
						setTimeout(() => {
							document.body.style.overflowY = 'unset';
							setCookieIntro({ key: 'show_intro', value: 'false' });
						}, 500);
					} }
					className='w-screen fixed h-[110vh] overflow-hidden top-0 z-[9999] left-0 pointer-events-none bg-blue-primary'
				>
					<div className='flex justify-center items-center h-screen w-full bg-primary'>
						{ renderContent() }
					</div>
				</motion.div>
			) }
			{ children }
		</>
	);
}
