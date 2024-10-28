import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Footer, LandingComponent, RunningLogo } from '@/components';
import { getAllProducts } from '@/components/Checkout/api/onboarding';
import IntroScreen from '@/components/IntroScreen';
import { getCookie } from '@/services/cookies';

const HeroPricing = dynamic(() => import('@/components/Pricing/Hero'), {
	ssr: false,
});

const PricingBiomarkers = dynamic(
	() => import('@/components/Pricing/PricingBiomarkers'),
	{
		ssr: false,
	}
);

const HomePage: NextPage = async() => {
	const products = await getAllProducts();
	const showIntro = await getCookie('show_intro');

	return (
		<IntroScreen
			type='video'
			showIntro={ showIntro }>
			<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
				<LandingComponent.Hero
					showIntro={ showIntro }
					showBanner={ false } />
				<LandingComponent.TextReveal />
				<LandingComponent.Steps />
				<div className='mb-16'>
					<RunningLogo />
				</div>
				<LandingComponent.Membership />
				<LandingComponent.FeaturesCarousel />
				<LandingComponent.Benefits />
				<LandingComponent.Innovative />
				<LandingComponent.HomeKits />
				{ products?.length && (
					<div
						id='pricing'
						className='lg:px-3 lg:py-6 overflow-hidden'>
						<div className='lg:bg-white lg:rounded-[19px] pb-[42px] lg:pb-[64px]'>
							<HeroPricing
								products={ products }
								isFromHomePage={ true }
								navbar={ false }
								className='!pt-[52px] lg:!pt-[164px]'
							/>
							<PricingBiomarkers isFromHomePage={ true } />
						</div>
					</div>
				) }
				{ /* <LandingComponent.Pricing products={ products } /> */ }
				<LandingComponent.Products />
				<LandingComponent.Banner />
				<Footer landingPage />
			</div>
		</IntroScreen>
	);
};

export default HomePage;
