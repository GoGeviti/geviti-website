import { NextPage } from 'next';

import { HomeComponent, HowItWorksComponent, LandingComponent } from '@/components';
import { howItWorksData } from '@/constant/data';

const FAQPage: NextPage = () => {

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<HowItWorksComponent.Hero/>
			<HowItWorksComponent.Product/>
			<HowItWorksComponent.Comprehensive/>
			<HomeComponent.CTA cta={ howItWorksData.cta }/>
			<HowItWorksComponent.Quality/>
			<HowItWorksComponent.FAQ/>
			<HomeComponent.LearnMore/>
			<LandingComponent.Products />
		</div>
	);
};

export default FAQPage;
