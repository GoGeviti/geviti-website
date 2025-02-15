'use client';
import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import Image from 'next/image';

type CellsProps = {
  isOnload?: boolean;
  onLoad?: () => void;
};

const Cells: React.FC<CellsProps> = ({ isOnload, onLoad }) => {
	return (
		<div className='aspect-[626.65/528.65] w-full lg:w-[626.65px] h-auto relative'>
			<div className='flex flex-col relative w-[73vw] lg:w-[461px] aspect-square h-auto lg:h-[461px] overflow-hidden transform'>
				<Spline
					onLoad={ onLoad }
					className='transform scale-[2.9] lg:scale-[1.1] w-full lg:!w-[1200px] origin-[69%_47%] lg:origin-[500%_340%]'
					scene='https://prod.spline.design/EXIbuuhL7QiYEQyR/scene.splinecode'
					style={ {
						height: 'auto',
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: 10,
						aspectRatio: 1,
					} }
				/>
			</div>
			<motion.div
				initial={ { opacity: 0 } }
				animate={ { opacity: isOnload ? 1 : 0 } }
				transition={ { ease: 'easeInOut', duration: 0.15 } }
				className='absolute bottom-0 right-0 z-0'
			>
				<Image
					src='/images/stem-cells/treatment/small-cells.webp'
					alt=''
					width={ 811.95 }
					height={ 1147.95 }
					className='w-[141px] sm:w-[270.65px] h-auto object-contain'
				/>
			</motion.div>
		</div>
	);
};

export default Cells;
