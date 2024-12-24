'use client';

import React, { useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import Image from 'next/image';
import { toast } from 'sonner';

import { blogData } from '@/constant/data';
import { createEmailSubscription } from '@/services/subscription';

import { ArrowEmail } from '../Icons';

const updatednData = blogData.updated;

const Updated: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmitSubscription = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const { status, message: messageResponse } = await createEmailSubscription(
			email
		);
		if (status === 'OK') {
			setLoading(false);
			toast.success(messageResponse, {
				icon: <AiFillCheckCircle className='h-5 w-5 text-green-alert' />,
			});
			setEmail('');
		} else {
			toast.error(messageResponse, {
				icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
			});
		}
		setLoading(false);
	};

	return (
		<div className='overflow-hidden lg:container-center sm:mx-auto w-full pb-3.5 pt-20'>
			<div className='lg:py-15px h-[300px] w-full lg:rounded-[19px] relative bg-black'>
				<div className='absolute inset-0 w-full h-full z-0'>
					{ updatednData.image && (
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
							<span dangerouslySetInnerHTML={ { __html: updatednData.title } } />
						</div>
						<p className='font-Poppins text-sm md:text-base font-medium text-grey-primary -tracking-[0.56px] md:-tracking-[0.64px] md:hidden'>
							{ updatednData.descMobile }
						</p>
						<p className='font-Poppins text-sm md:text-base font-medium text-grey-primary -tracking-[0.56px] md:-tracking-[0.64px] hidden md:block'>
							{ updatednData.desc }
						</p>
						<form
							onSubmit={ onSubmitSubscription }
							className='flex items-center justify-between w-[319px] h-[46px] bg-white rounded-full px-[10px] md:px-3 mt-[29px]'
						>
							<input
								type='email'
								name='email'
								id='email'
								value={ email }
								onChange={ (e: React.ChangeEvent<HTMLInputElement>) =>
									setEmail(e.target.value) }
								autoComplete='off'
								className='block rounded-full text-primary placeholder:text-grey-primary font-Poppins text-xs md:text-sm border-none outline-none'
								placeholder='Enter Email Address'
								required
							/>
							<button
								disabled={ loading }
								type='submit'
								className='focus:outline-none focus:ring-0'
							>
								<ArrowEmail />
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Updated;
