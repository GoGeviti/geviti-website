import React from 'react';
import { NextPage } from 'next';

import { Footer, LandingComponent, RunningLogo } from '@/components';
import IntroScreen from '@/components/IntroScreen';
import { getCookie } from '@/services/cookies';

const HomePage: NextPage = async() => {
	const isCloseBanner = await getCookie('close_hero_banner');
	const showIntro = await getCookie('show_intro');

	return (
		<React.Fragment>
			<IntroScreen
				type='video'
				showIntro={ showIntro }>
				<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
					<LandingComponent.Hero
						showIntro={ showIntro }
						showBanner={ !isCloseBanner } />
					<LandingComponent.Steps />
					<RunningLogo />
					<LandingComponent.TextReveal />
					<LandingComponent.Membership />
					<LandingComponent.FeaturesCarousel />
					<LandingComponent.Benefits />
					<LandingComponent.HomeKits />
					<LandingComponent.Innovative />
					<LandingComponent.Products />
					<LandingComponent.Banner />
					<Footer landingPage />
				</div>
			</IntroScreen>
		</React.Fragment>
	);
};

export default HomePage;
