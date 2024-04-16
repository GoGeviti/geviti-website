import React from 'react';

import ButtonCta from '../Landing/ButtonCta';

interface IProps {
  bgimgyourself: string;
}

const OptimizedYourSelf = (props: IProps) => {
	const { bgimgyourself } = props;

	return (
		<>
			<section className='lg:px-4'>
				<div className='bg-white w-full my-6 rounded-[19px] px-4 sm:px-10 lg:pl-10 lg:pr-4 py-4'>
					<div className='flex justify-between lg:flex-row flex-col h-full gap-10 lg:gap-[58px] xl:pl-[88px]'>
						<div className='lg:max-w-[606px] lg:py-[22px] w-full'>
							<h2 className='lg:text-sm md:text-xs text-[10px] font-semibold tracking-[1.1px] sm:tracking-[1.54px] uppercase text-grey-primary leading-[150%] sm:leading-[171.429%] font-Poppins'>
                You owe it to yourself, and others.
							</h2>
							<p className='xl:text-5xl lg:text-4xl text-2xl font-Poppins text-primary !leading-[150%]'>
                Become the optimized version of yourself.
							</p>
							<div className='mt-[14px]'>
								<p className='lg:text-lg md:text-sm text-xs text-gray-400 font-Poppins !font-normal'>
                  The Geviti platform gives men access to doctor supervised
                  treatments covering testosterone therapy, anti-aging peptides,
                  medical weight loss, sexual health, and more.
								</p>
								<p className='lg:text-lg md:text-sm text-xs text-gray-400 font-Poppins !font-normal mt-12 md:mt-8 lg:mt-16'>
                  All of this, and more with automated at-home bloodwork, custom
                  smart supplements, and more
								</p>
							</div>
							<div className='md:block hidden'>
								<ButtonCta
									className='max-w-[296px] mt-[158px]'
									text='Become a member'
									href='#'
									theme='primary'
								/>
							</div>
						</div>
						<div
							style={ { backgroundImage: `url(${bgimgyourself})` } }
							className='relative h-[326px] sm:h-[560px] bg-cover lg:h-auto rounded-2xl bg-no-repeat bg-center pointer-events-none lg:max-w-[672px] w-full  flex items-end justify-end overflow-hidden'
						>
							<div className='relative z-10 gap-[14px] md:gap-6 pb-5 sm:pb-6 md:px-7 px-4 flex flex-col items-end justify-end bg-img-grediant w-full'>
								<p className='lg:text-[104.837px] sm:text-[100px] text-[74px] font-Poppins text-white font-normal -tracking-[4.193px] w-full text-start md:text-end leading-none'>
                  1-2%
								</p>
								<h6 className='text-sm font-Poppins tracking-[1.54px] font-semibold text-white uppercase'>
                  annual decreases in testosterone after 40
								</h6>
							</div>
						</div>
						<div className='block md:hidden mb-5'>
							<ButtonCta
								text='Become a member'
								href='#'
								theme='primary' />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default OptimizedYourSelf;
