import React from 'react';
import { NextPage } from 'next';

import { Footer, LandingComponent, RunningLogo } from '@/components';
import { getAllProducts } from '@/components/Checkout/api/onboarding';
import IntroScreen from '@/components/IntroScreen';
import { getCookie } from '@/services/cookies';

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
				<LandingComponent.Steps />
				<RunningLogo />
				<LandingComponent.TextReveal />
				<LandingComponent.Membership />
				<LandingComponent.FeaturesCarousel />
				<LandingComponent.Benefits />
				<LandingComponent.HomeKits />
				<LandingComponent.Innovative />
				<LandingComponent.Pricing products={ products } />
				<LandingComponent.Products />
				<LandingComponent.Banner />
				<Footer landingPage />
			</div>
		</IntroScreen>
	);
};

export default HomePage;
