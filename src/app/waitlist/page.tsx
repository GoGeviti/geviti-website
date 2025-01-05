import React from 'react';
import { NextPage } from 'next';

import { Footer, MarketingComponent } from '@/components';
import { SocialProof } from '@/components/Landing';
import Navbar from '@/components/Navbar/Landing';
import Video from '@/components/testimonials/Video';
import Hero from '@/components/Waitlist/Hero';

type PageProps = {
	searchParams: { [key: string]: string | string[] | undefined };
};

const WaitlistPage: NextPage<PageProps> = async props => {
	const searchParams = props.searchParams;
	// const productId = searchParams?.product_id;
	// const priceId = searchParams?.price_id;

	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<Navbar theme='light' />
			<Hero searchParams={ searchParams }/>
			<Video className='mt-0 lg:mt-6' />
			<SocialProof hideSeeMore />
			<MarketingComponent.Instagram />
			<MarketingComponent.FAQ />
			<Footer />
		</div>
	);
};

export default WaitlistPage;
