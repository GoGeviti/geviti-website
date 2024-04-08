import { NextPage } from 'next';

import { Footer, LandingComponent } from '@/components';

const HomePage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
			<LandingComponent.Hero />
			<LandingComponent.Steps />
			<LandingComponent.RunningLogo />
			<LandingComponent.TextReveal />
			<LandingComponent.Membership />
			<LandingComponent.FeaturesCarousel />
			<LandingComponent.Benefits />
			<LandingComponent.HomeKits />
			<LandingComponent.Innovative />
			<LandingComponent.Products />
			<LandingComponent.Mission />
			<Footer landingPage />
		</div>
	);
};

export default HomePage;