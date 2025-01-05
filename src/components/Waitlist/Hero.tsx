import React, { CSSProperties } from 'react';
// import { NextPage } from 'next';
import { notFound } from 'next/navigation';

import PopupReview from '../PopupReview';

import Form from './Form';

type HeroProps = {
	searchParams: { [key: string]: string | string[] | undefined };
};

const Hero = async(props: HeroProps) => {
	const searchParams = props.searchParams;
	const productId = searchParams?.product_id;
	const priceId = searchParams?.price_id;

	if (!productId || !priceId) {
		return notFound();
	}

	return (
		<div className='lg:px-3'>
			<div className='container-center mt-[121px] lg:mt-[164px] mb-16'>
				<div className='flex flex-col justify-center items-center text-center gap-6'>
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
				/>
			</div>
		</div>
	);
};

export default Hero;
