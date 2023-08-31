import { NextPage } from 'next';

import { Footer, HomeComponent } from '@/components';

const HomePage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<HomeComponent.Hero />
			<HomeComponent.Packages />
			<HomeComponent.Products />
			<HomeComponent.Features />

			<Footer />
		</div>
	);
};

export default HomePage;