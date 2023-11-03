import React from 'react';
import Image from 'next/image';

import { blogData } from '@/constant/data';

import { ArrowEmail } from '../Icons';

const updatednData = blogData.updated;

const Updated: React.FC = () => {
	return (
		<div className='overflow-hidden lg:container-center sm:mx-auto w-full'>
			<div className='lg:py-15px  h-[300px] w-full lg:rounded-[19px] relative bg-black'>
				<div className='absolute inset-0 w-full h-full z-0'>
					{ updatednData.image  && (
						<div className='relative overflow-hidden w-full h-full lg:rounded-[19px]'>
							<Image
								src={ updatednData.image }
								alt='updated'
								width={ 1100 }
								height={ 300 }
								className='object-cover'
							/>
						</div>
					) }
				</div>

				<div className='relative w-full h-full lg:rounded-b-[19px]'>
					<div className='flex flex-col items-center justify-center w-full h-full z-10'>
						<div className='font-Poppins text-center text-white text-[32px] md:!text-[36px] mb-[9px] -leading-[1.44px]'>
							<span
								dangerouslySetInnerHTML={ { __html: updatednData.title } } />
						</div>
						<p className='font-Poppins text-sm md:text-base font-medium text-grey-primary -tracking-[0.56px] md:-tracking-[0.64px] md:hidden'>{ updatednData.descMobile }</p>
						<p className='font-Poppins text-sm md:text-base font-medium text-grey-primary -tracking-[0.56px] md:-tracking-[0.64px] hidden md:block'>{ updatednData.desc }</p>
						<div
							className='flex items-center pl-px justify-between w-[319px] bg-white rounded-full py-[10px] md:py-3 px-[10px] md:px-5 mt-[29px]'>
							<input
								type='text'
								name='email'
								id='email'
								autoComplete='off'
								className='block rounded-full text-primary placeholder:text-grey-primary font-Poppins text-xs md:text-sm border-none outline-none'
								placeholder='Enter Email Address'
							/>
							<ArrowEmail/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Updated;