import React from 'react';
import { Metadata } from 'next';

import {
	Footer,
	FrequentlyAskedQuestions,
	MembershipComponent,
	PricingComponent,
	RunningLogo,
} from '@/components';
import { getProductMembership } from '@/components/Checkout/api/onboarding';
import { membershipData } from '@/constant/data';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';

export const metadata: Metadata = {
	title: 'Membership',
	description:
    'Unlock premier health insights & solutions with exclusive Geviti membership benefits.',
	openGraph: mergeOpenGraph({
		title: 'Membership',
		description:
      'Unlock premier health insights & solutions with exclusive Geviti membership benefits.',
		image: '/meta/membership.jpg',
	}),
};

const MemberShipPage = async() => {
	const productMembership = await getProductMembership();
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
			<div
				id='pricing'
				className='lg:px-3 lg:py-6 overflow-hidden'>
				<div className='lg:bg-white lg:rounded-[19px]'>
					<PricingComponent.Hero
						productMembership={ productMembership }
						isFromHomePage={ true }
						navbar={ false }
						className='!py-[52px] lg:!py-[81px]'
					/>
					{ /* <PricingComponent.PricingBiomarkers /> */ }
				</div>
			</div>
			{ /* <MembershipComponent.Pricing /> */ }
			<div className='lg:px-3'>
				<MembershipComponent.BiomarkersSection wrapperClassName='bg-white pt-6 pb-[42px] lg:py-[62px]' />
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
