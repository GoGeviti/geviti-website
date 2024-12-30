'use client';

import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { footerData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import FooterContent from './Content';

type FooterProps = {
	landingPage?: boolean;
};

const WrapperFooter: React.FC<FooterProps & {
	children: React.ReactNode;
	isMobile?: boolean;
	containerRef?: React.RefObject<HTMLDivElement | null>;
	scrollYProgress: MotionValue<number>;
}> = ({ isMobile, landingPage, children, containerRef, scrollYProgress }) => {
	const wrapperClassName = 'pt-6 pb-[106px] lg:pt-12 lg:h-[569px] lg:pb-[310px] bg-white rounded-19px relative overflow-hidden w-full';
	const y = useTransform(scrollYProgress, [0, 1], [-569, 0]);

	if (!landingPage) {
		return (
			<div className={ wrapperClassName }>
				{ children }
			</div>
		);
	}

	// temporary workaround for popover bug that won't appear if you have 2 containers div
	// while if you just use motiondiv with y transform in mobile view it will be weird.
	return (
		<>
			<motion.div
				ref={ containerRef }
				style={ { y } }
				className={ clsxm(wrapperClassName, 'max-lg:hidden') }>
				{ !isMobile && (
					<>
						{ children }
					</>
				) }
			</motion.div>
			<div className={ clsxm(wrapperClassName, 'lg:hidden') }>
				{ isMobile && (
					<>
						{ children }
					</>
				) }
			</div>
		</>
	);
};

const Footer: React.FC<FooterProps> = ({ landingPage }) => {
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end end']
	});
	const gevitiLogoY = useTransform(scrollYProgress, [0, 1], [400, 0]);

	return (
		<div className='pt-6 lg:pt-3.5 pb-[66px] lg:pb-6 px-4 lg:px-3 overflow-hidden font-Poppins'>
			<WrapperFooter
				landingPage={ landingPage }
				isMobile={ isMobile }
				containerRef={ container }
				scrollYProgress={ scrollYProgress }
			>
				<FooterContent
					theme='light'
					landingPage={ landingPage } />

				<motion.div
					style={ { y: gevitiLogoY } }
					className='absolute bottom-0 lg:-bottom-[5%] inset-x-0 z-0 max-w-[1327.38px] mx-auto'>
					<div className='relative overflow-hidden w-full h-full'>
						<Image
							src={ footerData.image }
							alt='flexible'
							loading='lazy'
							width={ 1327.38 }
							height={ 335.04 }
							className='w-full'
						/>
					</div>
				</motion.div>
			</WrapperFooter>
		</div>
	);
};

export default Footer;