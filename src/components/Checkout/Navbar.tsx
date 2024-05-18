'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/helpers/clsxm';

import { ArrowNarrowLeft } from '../Icons';

export type NavbarProps = {
	className?: string;
	theme?: 'light' | 'dark';
	arrowBack?: boolean;
	onClickBack?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
	className,
	theme = 'dark',
	arrowBack,
	onClickBack
}) => {
	return (
		<div className={ clsxm(
			'absolute top-0 inset-x-0 z-50 w-full h-[87px] lg:h-[9.537vh] 2xl:h-[103px] px-4 xl:px-10 2xl:px-20',
			theme === 'dark' && 'bg-primary border-b-[0.6px] border-grey-950',
			theme === 'light' && 'bg-white border-b border-[#252627]/10',
			className
		) }>
			<div className='flex items-center relative w-full h-full'>
				{ arrowBack && (
					<button
						className='focus:outline-none focus:ring-0 inline-flex items-center gap-2 lg:gap-3.5'
						onClick={ onClickBack }
					>
						<ArrowNarrowLeft
							className={ clsxm(
								'relative overflow-hidden w-18px lg:w-6 h-18px lg:h-6',
								theme === 'light' ? 'fill-primary' : 'fill-grey-background'
							) }
						/>
						<span className='text-grey-500 font-semibold text-xs lg:text-lg !leading-normal'>BACK</span>
					</button>
				) }
				<Link
					href='/'
					className='absolute-center'>
					<div className='w-[85px] lg:w-[145px] h-5 lg:h-[34.12px] relative overflow-hidden'>
						<Image
							src={ theme === 'dark' ? '/images/logo/logo_light.webp' : '/images/logo/logo_dark.webp' }
							alt='geviti'
							priority
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							className='w-full h-full object-contain'
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
