import { NextPage } from 'next';

import { Footer, LandingComponent } from '@/components';

const HomePage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<LandingComponent.Hero />
			<LandingComponent.Therapy />
			<LandingComponent.Quality />
			<LandingComponent.RunningLogo />
			<LandingComponent.Steps />
			<LandingComponent.Functional />
			<LandingComponent.Application />
			<LandingComponent.Dashboard />
			<LandingComponent.Investment />
			<LandingComponent.Products />
			<LandingComponent.Mission />

			<Footer landingPage />
		</div>
	);
};

export default HomePage;