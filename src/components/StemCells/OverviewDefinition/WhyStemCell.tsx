import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedText from './AnimatedText';

const WhyStemCell = () => (
	<div className='relative overflow-hidden w-full h-full flex items-center justify-center bg-midnight-blue'>
		<motion.div
			className='absolute inset-0'
			animate={ {
				rotate: [0, -360],
			} }
			transition={ {
				repeat: Infinity,
				duration: 100,
				ease: 'linear',
			} }
		>
			<Image
				src='/images/stem-cells/overview/ring-outer.svg'
				alt=''
				width={ 787.44 }
				height={ 752.23 }
				className='object-contain w-full h-full'
			/>
		</motion.div>
		<motion.div
			className='absolute inset-x-3 -inset-y-3'
			animate={ {
				rotate: [0, 360],
			} }
			transition={ {
				repeat: Infinity,
				duration: 100,
				ease: 'linear',
			} }
		>
			<Image
				src='/images/stem-cells/overview/ring-inner.svg'
				alt=''
				width={ 752.23 }
				height={ 787.44 }
				className='object-contain w-full h-full'
			/>
		</motion.div>
		<div className='font-PlayFairDisplay opacity-[0.81] max-w-[645px] mx-auto max-lg:px-4'>
			<AnimatedText text="The world's most powerful[m/n]longevity[d/n]treatment, naturally[m/n]healing and[d/n]rejuvenating[m/n]your body at the cellular[m/n][d/n]level." />
		</div>
	</div>
);

export default WhyStemCell;
