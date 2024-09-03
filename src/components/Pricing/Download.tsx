'use client'
import { motion } from 'framer-motion';

const PulseSyncFadeFast = ({
	n = 4,
	duration = 1,
	delay = 0.5,
	width = 333,
	gap = 100
}) => {
	return (
		<motion.div
			style={ { display: 'grid', placeItems: 'center', position: 'relative' } }
		>
			{ Array.from({ length: n }, (_, i) => {
				const pulseDelay = delay * i;
				const pulseRepeatDelay = pulseDelay;
				const pulseDuration = duration + delay * (n - i);
				return (
					<motion.div
						key={ i }
						style={ {
							borderRadius: '50%',
							background:
                'radial-gradient(50% 50% at 50% 50%, white 0%, #FCFCFC 100%)',
							border: '1px solid rgba(0, 0, 0, 0.50)',
							gridArea: '1 / 1 / 2 / 2',
							width: `${width + gap * i}px`,
							aspectRatio: '1/1',
							zIndex: n - i
						} }
						{ ...(i !== 0 && {
							initial: { opacity: 0 },
							animate: { opacity: [0, 1, 0], scale: 1.1 },
							transition: {
								duration: pulseDuration,
								delay: pulseDelay,
								ease: [0.05, 0.6, 0.3, 0.3],
								repeat: Infinity,
								repeatDelay: pulseRepeatDelay
							}
						}) }
					/>
				);
			}) }
			<div className='w-[333px] h-[333px] absolute z-10 cursor-pointer bg-primary flex items-center text-white text-center text-[22px] flex-col rounded-full justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
				<svg
					width='40'
					height='39'
					viewBox='0 0 40 39'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M15.98 26.8764C16.2849 26.8764 16.5897 26.9887 16.8304 27.2294L20.0876 30.4865L23.3448 27.2294C23.8101 26.764 24.5802 26.764 25.0455 27.2294C25.5109 27.6947 25.5109 28.4648 25.0455 28.9302L20.938 33.0377C20.4727 33.503 19.7025 33.503 19.2372 33.0377L15.1296 28.9302C14.6643 28.4648 14.6643 27.6947 15.1296 27.2294C15.3703 26.9887 15.6751 26.8764 15.98 26.8764Z'
						fill='white'/>
					<path
						d='M20.0876 14.5526C20.7455 14.5526 21.291 15.0981 21.291 15.7559L21.291 32.074C21.291 32.7318 20.7455 33.2773 20.0876 33.2773C19.4298 33.2773 18.8842 32.7318 18.8842 32.074L18.8842 15.7559C18.8842 15.0821 19.4298 14.5526 20.0876 14.5526Z'
						fill='white'/>
					<path
						d='M19.894 5.21406C28.1573 5.21406 33.9336 10.9903 33.9336 19.2536C33.9336 19.9115 33.3881 20.457 32.7302 20.457C32.0723 20.457 31.5268 19.9115 31.5268 19.2536C31.5268 12.4023 26.7453 7.62085 19.894 7.62085C13.0427 7.62085 8.26122 12.4023 8.26122 19.2536C8.26122 19.9115 7.71568 20.457 7.05783 20.457C6.39997 20.457 5.85444 19.9115 5.85444 19.2536C5.85444 10.9903 11.6307 5.21406 19.894 5.21406Z'
						fill='white'/>
				</svg>

				<p>Download<br/>Rx pricing sheet</p>
			</div>
		</motion.div>
	);
};

const downloadPDF = () => {
	const link = document.createElement('a');
	link.href = '/files/Geviti Rx Pricing Sheet (Updated September 2 2024).pdf';
	link.download = 'Geviti Rx Pricing Sheet (Updated September 2 2024).pdf';
	link.click();
}

const Download = () => {
	return (
		<div className='lg:px-3 font-Poppins'>
			<div className='container-center pt-[42px] flex items-center justify-center'>
				<button onClick={ () => downloadPDF() }>
					<PulseSyncFadeFast
						duration={ 3.4 }
						delay={ 0.8 } />
				</button>
			</div>
		</div>
	)
}

export default Download