'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/helpers/clsxm';

const Navbar: React.FC<{ className?: string; }> = ({ className }) => {
	return (
		<div className={ clsxm('w-full bg-primary', className) }>
			<div className='h-[87px] px-2 lg:px-5 flex items-center relative border-b-[0.6px] border-grey-950'>
				<Link
					href='/'
					className='absolute-center'>
					<Image
						src='/images/logo/logo_light.webp'
						alt='logo'
						width={ 85 }
						height={ 20 }
					/>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
