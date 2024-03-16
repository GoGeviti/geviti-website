import { NextPage } from 'next';

import { Footer, LandingComponent } from '@/components';

const HomePage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<LandingComponent.Hero />
			<LandingComponent.Steps />
			<div className='max-lg:hidden'>
				{ /** include: RunningLogo, Flexible, Clinical, and Application */ }
				<LandingComponent.SectionCardsParallax />
			</div>
			<div className='flex flex-col gap-y-3.5 lg:gap-y-6 lg:hidden'>
				<LandingComponent.RunningLogo />
				<LandingComponent.Flexible />
				<LandingComponent.Clinical />
				<LandingComponent.Application />
			</div>
			<LandingComponent.Benefits />
			<LandingComponent.HomeKits />
			<LandingComponent.BiologicalKit />
			<LandingComponent.Supplements />
			<LandingComponent.Innovative />
			<LandingComponent.Products />
			<div className='flex flex-col gap-y-3.5'>
				<LandingComponent.Mission />
				<Footer landingPage />
			</div>
		</div>
	);
};

export default HomePage;