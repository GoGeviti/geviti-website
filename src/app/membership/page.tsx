import React from 'react';

import { Footer, FrequentlyAskedQuestions, MembershipComponent, RunningLogo } from '@/components';
import { membershipData } from '@/constant/data';

const MemberShipPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
			<MembershipComponent.Hero />
			<div className='py-[42px] lg:py-16'>
				<RunningLogo />
			</div>
			<MembershipComponent.Features />
			<div className='py-6'>
				<MembershipComponent.StepsSection />
			</div>
			<MembershipComponent.Pricing />
			<MembershipComponent.BiomarkersSection />
			<MembershipComponent.ChooseGeviti />
			{ /* <MembershipComponent.Products /> */ }
			<FrequentlyAskedQuestions data={ membershipData.faq.data } />
			<MembershipComponent.Banner />
			<Footer landingPage />
		</div>
	);
};

export default MemberShipPage;
