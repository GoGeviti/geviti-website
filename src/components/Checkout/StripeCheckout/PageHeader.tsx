import { FC } from 'react';
import Image from 'next/image';

import { ArrowNarrowLeft } from '@/components/Icons';

const PageHeader: FC<{ onBackClick: () => void }> = ({ onBackClick }) => (
	<div className='flex w-full py-8 lg:pt-11 lg:flex-col border-b-[0.6px] border-grey-950 lg:border-none'>
		<button
			onClick={ onBackClick }
			className='focus:outline-none focus:ring-0 inline-flex items-center gap-1 lg:gap-3.5'>
			<ArrowNarrowLeft className='relative overflow-hidden w-18px lg:w-6 h-18px lg:h-6 text-white' />
			<span className='text-grey-500 font-semibold text-xs lg:text-lg !leading-normal'>BACK</span>
		</button>
		<div className='w-1/3 m-auto lg:mt-14 lg:w-full'>
			<GevitiLogo />
			<p className='hidden lg:block text-blue-primary mt-3'>Enjoy your FREE bloodwork!</p>
		</div>
	</div>
);

function GevitiLogo() {
	return (
		<div className='relative overflow-hidden w-[85px] lg:w-[145px] h-5 lg:h-[34.12px]'>
			<Image
				src='/images/logo/logo_light.webp'
				alt='geviti'
				fill
				className='w-full h-full' />
		</div>
	);
}

export default PageHeader;
