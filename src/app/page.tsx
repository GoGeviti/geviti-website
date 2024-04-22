import { NextPage } from 'next';

import { Footer, LandingComponent, RunningLogo } from '@/components';
import IntroScreen from '@/components/IntroScreen';
import { getCookie } from '@/services/cookies';

const HomePage: NextPage = async () => {
	const isCloseBanner = getCookie('close_hero_banner');

	return (
		<IntroScreen>
			<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
				<LandingComponent.Hero showBanner={ !isCloseBanner } />
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
	);
};

export default HomePage;
