'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/helpers/clsxm';

type NavbarProps = {
	onStepBack?: () => void;
	theme?: 'light' | 'dark';
	navbarRef?: React.RefObject<HTMLDivElement>;
};

const ArrowLeft = ({ className }: { className?: string; }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='50'
			height='50'
			viewBox='0 0 50 50'
			fill='none'
			className={ className }>
			<circle
				cx='25'
				cy='25'
				r='25'
				fill='current'
				fillOpacity='0.1' />
			<path
				d='M23.5304 19.5303C23.8233 19.2374 23.8233 18.7626 23.5304 18.4697C23.2375 18.1768 22.7626 18.1768 22.4697 18.4697L23.5304 19.5303ZM16.4697 24.4696C16.1768 24.7625 16.1768 25.2374 16.4697 25.5303C16.7626 25.8232 17.2374 25.8232 17.5303 25.5303L16.4697 24.4696ZM17.5303 24.4696C17.2374 24.1767 16.7626 24.1767 16.4697 24.4696C16.1768 24.7625 16.1768 25.2374 16.4697 25.5303L17.5303 24.4696ZM22.4697 31.5303C22.7626 31.8232 23.2375 31.8232 23.5304 31.5303C23.8233 31.2374 23.8233 30.7626 23.5304 30.4697L22.4697 31.5303ZM17 24.25C16.5858 24.25 16.25 24.5857 16.25 25C16.25 25.4142 16.5858 25.75 17 25.75V24.25ZM32.4287 25.75C32.8429 25.75 33.1787 25.4142 33.1787 25C33.1787 24.5857 32.8429 24.25 32.4287 24.25V25.75ZM22.4697 18.4697L16.4697 24.4696L17.5303 25.5303L23.5304 19.5303L22.4697 18.4697ZM16.4697 25.5303L22.4697 31.5303L23.5304 30.4697L17.5303 24.4696L16.4697 25.5303ZM17 25.75H32.4287V24.25H17V25.75Z'
				fill='current' />
		</svg>
	);
};

const Navbar: React.FC<NavbarProps> = ({ theme = 'light', navbarRef, onStepBack }) => {
	return (
		<div
			ref={ navbarRef }
			className={ clsxm(
				'h-[50px] lg:h-[8.65vh] px-2 lg:px-5 flex items-center relative',
				theme === 'light' ? 'bg-white' : 'bg-primary'
			) }>
			<button
				className='focus:outline-none focus:ring-0'
				onClick={ onStepBack }
			>
				<ArrowLeft
					className={ clsxm(
						'relative overflow-hidden w-[33px] h-[33px] lg:h-[4.63vh] lg:w-[4.63vh] hover:opacity-80 cursor-pointer',
						theme === 'light' ? 'fill-primary' : 'fill-grey-background'
					) }
				/>
			</button>
			<Link
				href='/'
				className='absolute-center'>
				<Image
					src={ theme === 'light' ? '/images/logo/logo_dark.webp' : '/images/logo/logo_light.webp' }
					alt='logo'
					width={ 85 }
					height={ 20 }
				/>
			</Link>
		</div>
	);
};

export default Navbar;