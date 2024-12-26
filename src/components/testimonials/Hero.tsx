import React from 'react';
import Image from 'next/image';

import heroImage from '@/assets/images/testimonials/hero.webp';

import ButtonCta from '../ButtonCta';
import PopupReview from '../PopupReview';

const Hero = () => {
	return (
		<div className='lg:px-3'>
			<div className='lg:container-center flex-col max-lg:gap-[61px] lg:flex-row flex justify-between gap-6 lg:pt-[164px]'>
				<div className='mt-[154px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center lg:mt-8 max-lg:px-3.5'>
					<div
						style={ {
							boxShadow:
                '0px 96px 27px 0px rgba(184, 184, 184, 0.00), 0px 61px 25px 0px rgba(184, 184, 184, 0.01), 0px 34px 21px 0px rgba(184, 184, 184, 0.05), 0px 15px 15px 0px rgba(184, 184, 184, 0.09), 0px 4px 8px 0px rgba(184, 184, 184, 0.10)',
						} }
						className='w-fit rounded-[20px] overflow-hidden'
					>
						<PopupReview wrapperClassName='border border-grey-50 w-fit' />
					</div>
					<h1 className='mt-6 h5 lg:h2'>
            Why Our Members Love<br/>Geviti.
					</h1>
					<p className='mt-6 body-extra-small max-w-[475px]'>
            From boosted energy to better sleep, hear how Geviti is helping
            members take control of their health and feel their best.
					</p>
					<ButtonCta
						href='/pricing'
						className='mt-10 w-fit'
						text='Become a member'
					/>
				</div>
				<div className='relative'>
					<div className='flex items-center justify-center w-screen lg:min-w-[530px] lg:max-w-[530px] lg:w-full'>
						<Image
							src={ heroImage }
							alt='hero'
							width={ 530 }
							priority
							placeholder='blur'
							quality={ 100 }
							height={ 550 }
							className='object-cover object-top lg:h-[550px] w-screen lg:w-full'
						/>
					</div>
					<div className='absolute flex flex-col gap-3 bottom-[-80px] lg:-bottom-[15%] w-[calc(100vw-54px)] lg:w-[320px] left-1/2 max-lg:-translate-x-1/2 lg:-left-1/4 py-3 px-5 border border-grey-100 bg-white/50 backdrop-blur-lg rounded-xl'>
						<svg
							width='17'
							height='16'
							viewBox='0 0 17 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M5.43592 0.863281C1.96492 4.22581 0.337891 7.80528 0.337891 11.0051C0.337891 13.6084 2.29033 15.5066 4.24276 15.5066C5.97826 15.5066 7.38836 14.0965 7.38836 12.361C7.38836 10.1374 5.76132 8.99843 3.37501 8.99843C3.37501 6.34095 4.18853 4.76815 6.73754 2.1649L5.43592 0.863281ZM14.4931 0.863281C11.0221 4.22581 9.39503 7.80528 9.39503 11.0051C9.39503 13.6084 11.3475 15.5066 13.2999 15.5066C15.0354 15.5066 16.4455 14.0965 16.4455 12.361C16.4455 10.1374 14.8185 8.99843 12.4321 8.99843C12.4321 6.34095 13.2457 4.76815 15.7947 2.1649L14.4931 0.863281Z'
								fill='#4AADF6'
							/>
						</svg>
						<p className='italic font-medium tracking-[-0.64px] text-primary'>
              I just turned 50 years old and I feel amazing! I have really
              leaned on Geviti to stay optimized in my health and wellness
              journey.{ ' ' }
						</p>
						<svg
							width='17'
							height='16'
							viewBox='0 0 17 16'
							fill='none'
							className='self-end transform rotate-180'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M5.43592 0.863281C1.96492 4.22581 0.337891 7.80528 0.337891 11.0051C0.337891 13.6084 2.29033 15.5066 4.24276 15.5066C5.97826 15.5066 7.38836 14.0965 7.38836 12.361C7.38836 10.1374 5.76132 8.99843 3.37501 8.99843C3.37501 6.34095 4.18853 4.76815 6.73754 2.1649L5.43592 0.863281ZM14.4931 0.863281C11.0221 4.22581 9.39503 7.80528 9.39503 11.0051C9.39503 13.6084 11.3475 15.5066 13.2999 15.5066C15.0354 15.5066 16.4455 14.0965 16.4455 12.361C16.4455 10.1374 14.8185 8.99843 12.4321 8.99843C12.4321 6.34095 13.2457 4.76815 15.7947 2.1649L14.4931 0.863281Z'
								fill='#4AADF6'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
