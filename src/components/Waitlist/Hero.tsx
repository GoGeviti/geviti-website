import React, { CSSProperties } from 'react';
import Image from 'next/image';
// import { NextPage } from 'next';
import { notFound } from 'next/navigation';

import PopupReview from '../PopupReview';

import Form from './Form';

type HeroProps = {
	searchParams: { [key: string]: string | string[] | undefined };
	totalWaitlist: number;
};

const Hero = async(props: HeroProps) => {
	const searchParams = props.searchParams;
	const productId = searchParams?.product_id;
	const priceId = searchParams?.price_id;
	const totalWaitlist = props.totalWaitlist;
	if (!productId || !priceId) {
		return notFound();
	}

	return (
		<div className='lg:px-3'>
			<div className='container-center mt-[121px] lg:mt-[164px] mb-16 relative'>
				<div className='absolute max-lg:hidden top-0 gap-[61px] flex flex-col left-0 w-full h-full -z-0'>
					<div className='flex items-center justify-between'>
						<div className='rounded-[20px] w-[209px] overflow-hidden h-[253px]'>
							<Image
								src='/images/waitlist/hero-01.webp'
								alt='Hero 01'
								width={ 209 }
								height={ 253 }
								priority
								quality={ 100 }
								className='w-full h-full object-cover object-center'
							/>
						</div>
						<div className='rounded-[20px] w-[209px] overflow-hidden h-[253px]'>
							<Image
								src='/images/waitlist/hero-02.webp'
								alt='Hero 01'
								width={ 209 }
								height={ 253 }
								priority
								quality={ 100 }
								className='w-full h-full object-cover object-center'
							/>
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<div className='rounded-[20px] w-[209px] overflow-hidden h-[159px] ml-[70px]'>
							<Image
								src='/images/waitlist/hero-03.webp'
								alt='Hero 01'
								width={ 209 }
								height={ 159 }
								priority
								quality={ 100 }
								className='w-full h-full object-cover object-center'
							/>
						</div>
						<div className='rounded-[20px] w-[209px] overflow-hidden h-[159px] mr-[70px]'>
							<Image
								src='/images/waitlist/hero-04.webp'
								alt='Hero 01'
								width={ 209 }
								height={ 159 }
								priority
								quality={ 100 }
								className='w-full h-full object-cover object-center'
							/>
						</div>
					</div>
				</div>
				<div className='flex relative z-10 flex-col justify-center items-center text-center gap-6'>
					<div className='flex lg:hidden items-center justify-between gap-4'>
						<div className='rounded-[10px] w-full overflow-hidden h-[100px]'>
							<Image
								src='/images/waitlist/hero-04.webp'
								alt='Hero 04'
								width={ 209 }
								height={ 253 }
								priority
								quality={ 100 }
								className='w-full h-full object-cover object-center'
							/>
						</div>
						<div
							style={ {
								boxShadow: '0px 64px 18px 0px rgba(0, 0, 0, 0.00), 0px 41px 16px 0px rgba(0, 0, 0, 0.01), 0px 23px 14px 0px rgba(0, 0, 0, 0.05), 0px 10px 10px 0px rgba(0, 0, 0, 0.09), 0px 3px 6px 0px rgba(0, 0, 0, 0.10)'
							} }
							className='rounded-[10px] w-full overflow-hidden h-[139px]'>
							<Image
								src='/images/waitlist/hero-02.webp'
								alt='Hero 02'
								width={ 209 }
								height={ 253 }
								priority
								quality={ 100 }
								className='w-full h-full object-cover object-center'
							/>
						</div>
						<div className='rounded-[10px] w-full overflow-hidden h-[100px]'>
							<Image
								src='/images/waitlist/hero-03.webp'
								alt='Hero 03'
								width={ 209 }
								height={ 253 }
								priority
								quality={ 100 }
								className='w-full h-full object-cover object-center'
							/>
						</div>
					</div>
					<PopupReview
						hideReadTestimonials
						className='max-sm:w-full max-sm:max-w-[274px]'
						style={
							{
								'--shadow-popup-longeviti-panel':
									'0px 96px 27px 0px rgba(184, 184, 184, 0.00), 0px 61px 25px 0px rgba(184, 184, 184, 0.01), 0px 34px 21px 0px rgba(184, 184, 184, 0.05), 0px 15px 15px 0px rgba(184, 184, 184, 0.09), 0px 4px 8px 0px rgba(184, 184, 184, 0.10)',
							} as CSSProperties
						}
						wrapperClassName='[box-shadow:var(--shadow-popup-longeviti-panel)] max-sm:w-full lg:w-[274px] border border-grey-50'
					/>
					<h1 className='h5 lg:h2 text-primary'>At Capacity - Join Our Waitlist</h1>
					<p className='body-extra-small max-w-[475px]'>High demand has filled all available spots. Get priority access when space opens by joining our waitlist.</p>
				</div>
				 <Form
					productId={ productId as string }
					priceId={ priceId as string }
					totalWaitlist={ totalWaitlist }
				/>
			</div>
		</div>
	);
};

export default Hero;
