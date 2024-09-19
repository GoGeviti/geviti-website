'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PulseSyncFadeFast = ({
	n = 4,
	duration = 1,
	delay = 0.5,
	width = 333,
	gap = 100,
}) => {
	return (
		<motion.span
			style={ { display: 'grid', placeItems: 'center', position: 'relative' } }
		>
			{ Array.from({ length: n }, (_, i) => {
				const pulseDelay = delay * i;
				const pulseRepeatDelay = pulseDelay;
				const pulseDuration = duration + delay * (n - i);
				return (
					<motion.span
						key={ i }
						style={
              {
              	borderRadius: '50%',
              	// background:
              	//   'radial-gradient(50% 50% at 50% 50%, white 0%, #FCFCFC 100%)',
              	border: '1px solid rgba(0, 0, 0, 0.50)',
              	gridArea: '1 / 1 / 2 / 2',
              	'--pulse-width-mobile': `${width / 1.8 + gap * i}px`,
              	'--pulse-width-desktop': `${width + gap * i}px`,
              	aspectRatio: '1/1',
              	zIndex: n - i,
              } as React.CSSProperties
						}
						className='[width:var(--pulse-width-mobile)] sm:[width:var(--pulse-width-desktop)]'
						{ ...(i !== 0 && {
							initial: { opacity: 0 },
							animate: { opacity: [0, 1, 0], scale: 1.1 },
							transition: {
								duration: pulseDuration,
								delay: pulseDelay,
								ease: [0.05, 0.6, 0.3, 0.3],
								repeat: Infinity,
								repeatDelay: pulseRepeatDelay,
							},
						}) }
					/>
				);
			}) }
			<span className='w-[183px] h-[183px] sm:w-[333px] sm:h-[333px] absolute z-10 cursor-pointer bg-primary flex items-center text-white text-center -tracking-0.04em text-xs sm:text-[22px] !leading-[18px] sm:!leading-[33px] flex-col rounded-full justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
				<Image
					src='/images/marketing/export.webp'
					alt='download'
					width={ 40 }
					height={ 39 }
					className='w-[22px] h-[22px] lg:w-10 lg:h-[39px]'
				/>

				<p>
          Download
					<br />
          Rx pricing sheet
				</p>
			</span>
		</motion.span>
	);
};

// const downloadPDF = () => {
// 	const link = document.createElement('a');
// 	link.href = '/files/Geviti Rx Pricing Sheet.pdf';
// 	link.download = 'Geviti Rx Pricing Sheet.pdf';
// 	link.click();
// };

const Download = () => {
	return (
		<div className='lg:px-3 font-Poppins'>
			<div className='container-center pt-[42px] flex items-center justify-center'>
				<a
					href='/files/Geviti Rx Pricing Sheet.pdf'
					target='_blank'
					rel='noopener noreferrer'
				>
					<PulseSyncFadeFast
						duration={ 3.4 }
						delay={ 0.8 } />
				</a>
			</div>
		</div>
	);
};

export default Download;
