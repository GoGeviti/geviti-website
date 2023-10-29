import { NextPage } from 'next';

import { Footer, HomeComponent } from '@/components';
import { homeData } from '@/constant/data';

const HomePage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<HomeComponent.Hero />
			<HomeComponent.Packages />
			<HomeComponent.CTA cta={ homeData.cta }/>
			<HomeComponent.LearnMore/>
			<HomeComponent.Products withBg/>
			<HomeComponent.Features />

			<Footer />
		</div>
	);
};

export default HomePage;