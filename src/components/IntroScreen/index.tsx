'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function IntroScreen({ children }: { children: React.ReactNode; }) {
	const vidRef = useRef<HTMLVideoElement | null>(null);

	const handlePlayVideo = () => {
		if (vidRef.current) {
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
						transition: { duration: .75, delay: 2.1, ease: [0.76, 0, 0.24, 1] },
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
					<video
						ref={ vidRef }
						muted
						width={ 3432 }
						height={ 2160 }
						playsInline
						className='w-full h-[540px] object-cover'
					>
						<source
							src='/videos/intro.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
				</div>
			</motion.div>
			<motion.div
				key='content-children'
				variants={ {
					initial: {
						visibility: 'hidden'
					},
					enter: {
						visibility: 'visible'
					}
				} }
				transition={ { delay: 2.1, ease: [0.76, 0, 0.24, 1] } }
				initial='initial'
				animate='enter'
			>
				{ children }
			</motion.div>
		</AnimatePresence>
	);
}