'use client';
import { NextPage } from 'next';

import { FAQComponent, Footer, HomeComponent } from '@/components';

const FAQPage: NextPage = () => {

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<FAQComponent.Hero />
			<FAQComponent.Categories/>
			<FAQComponent.QnA/>
			<FAQComponent.CompletelyCustom/>
			<HomeComponent.LearnMore/>
			<Footer landingPage />
		</div>
	);
};

export default FAQPage;
