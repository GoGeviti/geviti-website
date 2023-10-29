import React from 'react';
import Image from 'next/image';

import { blogData } from '@/constant/data';

import { ArrowEmail } from '../Icons';

const updatednData = blogData.updated;

const Updated: React.FC = () => {
	return (
		<div className='lg:px-3 mx-10 lg:py-15px px-10 overflow-hidden container-center sm:mx-auto h-[300px] w-full lg:rounded-[19px] relative bg-black'>
			<div className='absolute inset-0 w-full h-full z-0'>
				{ updatednData.image  && (
					<div className='relative overflow-hidden w-full h-full lg:rounded-[19px]'>
						<Image
							src={ updatednData.image }
							alt='hero'
							priority
							className='object-cover'
							fill
							objectPosition='top'
						/>
					</div>
				) }
			</div>

			<div className='relative w-full h-full lg:rounded-b-[19px]'>
				<div className='flex flex-col items-center justify-center w-full h-full z-10'>
					<div className='font-Poppins text-white text-[32px] md:!text-[36px] mb-[9px] -leading-[1.44px]'>
						<span
							className='hidden md:block'
							dangerouslySetInnerHTML={ { __html: updatednData.title } } />
					</div>
					<p className='font-Poppins text-xs md:text-base font-medium text-grey-primary -leading-[0.64px] '>{ updatednData.desc }</p>
					<div
						className='flex items-center pl-px justify-between w-[319px] bg-white rounded-full py-3 xxs:px-5 mt-[29px]'>
						<input
							type='text'
							name='email'
							id='email'
							autoComplete='off'
							className='block rounded-full text-primary placeholder:text-grey-primary font-Poppins text-sm border-none outline-none'
							placeholder='Enter Email Address'
						/>
						<ArrowEmail/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Updated;