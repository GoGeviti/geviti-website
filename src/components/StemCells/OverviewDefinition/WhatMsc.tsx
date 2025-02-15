import AnimatedText from './AnimatedText';

const WhatMsc = () => {
	return (
		<div className='relative overflow-hidden w-full h-full flex items-center justify-center bg-midnight-blue'>
			<div
				className='absolute inset-0 mix-blend-color-dodge'
				style={ {
					backgroundImage:
            'url(\'/images/stem-cells/overview/background-1.webp\')',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				} }
			/>
			<div
				className='absolute-center w-[1027.482px] h-[699.19px] sm:w-[2551px] sm:h-[1268px] -rotate-[36.83deg]'
				style={ {
					background:
            'radial-gradient(36.71% 36.71% at 50% 50%, rgba(11, 15, 38, 0.60) 0%, #0B0F26 100%)',
				} }
			/>
			<div className='font-PlayFairDisplay opacity-[0.81] max-w-[759px] mx-auto max-lg:px-4'>
				<AnimatedText
					text={
						'Mesenchymal Stem Cells (MSCs)[m/n]are your[d/n]body\'s master healers,[m/n]unleashing powerful[d/n]anti-[m/n]inflammatory and regenerative[m/n][d/n]benefits to repair and rejuvenate[m/n]damaged[d/n]tissue.'
					}
				/>
			</div>
		</div>
	);
};

export default WhatMsc;
