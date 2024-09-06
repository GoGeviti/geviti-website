import React from 'react';
import { NextPage } from 'next';

import {
	Footer,
	LandingComponent,
	PricingComponent,
	RunningLogo,
} from '@/components';
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
				<div
					id='pricing'
					className='lg:px-3 lg:py-6 overflow-hidden'>
					<div className='lg:bg-white lg:rounded-[19px]'>
						<PricingComponent.Hero
							products={ products }
							isFromHomePage={ true }
							navbar={ false }
							className='!pt-[52px] lg:!pt-[164px]'
						/>
						<PricingComponent.PricingBiomarkers />
						<div className='max-lg:overflow-hidden pb-[42px] lg:pb-[64px] lg:pt-[118px]'>
							<PricingComponent.Download />
						</div>
					</div>
				</div>
				<LandingComponent.Products />
				<LandingComponent.Banner />
				<Footer landingPage />
			</div>
		</IntroScreen>
	);
};

export default HomePage;
