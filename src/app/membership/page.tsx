import React from 'react';

import {
	Footer,
	FrequentlyAskedQuestions,
	MembershipComponent,
	RunningLogo,
} from '@/components';
import SEO from '@/components/Seo';
import { membershipData } from '@/constant/data';

const MemberShipPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
			<SEO
				title='Membership'
				description='Unlock premier health insights & solutions with exclusive Geviti membership benefits.'
				og_images='/meta/membership.jpg'
				canonical='/membership'
			/>
			<MembershipComponent.Hero />
			<div className='py-[42px] lg:py-16'>
				<RunningLogo />
			</div>
			<MembershipComponent.Features />
			<div className='py-6'>
				<MembershipComponent.StepsSection />
			</div>
			<MembershipComponent.Pricing />
			<div className='lg:px-3'>
				<MembershipComponent.BiomarkersSection
					wrapperClassName='bg-white pt-6 pb-[42px] lg:py-[62px]' />
			</div>
			<MembershipComponent.PricingComparison />
			<MembershipComponent.ChooseGeviti />
			{ /* <MembershipComponent.Products /> */ }
			<FrequentlyAskedQuestions data={ membershipData.faq.data } />
			<MembershipComponent.Banner />
			<Footer landingPage />
		</div>
	);
};

export default MemberShipPage;
