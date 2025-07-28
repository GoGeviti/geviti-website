import { Metadata } from 'next';

import { Footer, FrequentlyAskedQuestions } from '@/components';
import { getProductMembership } from '@/components/Checkout/api/onboarding';
import { GevitiForFree } from '@/components/Landing';
import BannerMember from '@/components/Pricing/Banner';
// import Download from '@/components/Pricing/Download';
import Hero from '@/components/Pricing/Hero';
// import PricingBiomarkers from '@/components/Pricing/PricingBiomarkers';
import pricingData from '@/constant/data/pricing';

export const metadata: Metadata = {
	title: 'Pricing',
};

const PricingPage = async() => {
	const productMembership = await getProductMembership();

	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<Hero
				productMembership={ productMembership } />
			<GevitiForFree/>
			{ /* <PricingBiomarkers /> */ }
			{ /* <PricingComparison />
			<div className='lg:px-3'>
				<BiomarkersSection
					wrapperClassName='bg-white pt-[42px]' />
			</div> */ }
			{ /* <div className='max-lg:overflow-hidden max-lg:pb-10 lg:pt-[137px]'>
				<Download />
			</div> */ }
			<FrequentlyAskedQuestions
				className='lg:pt-[140px] lg:pb-[64px]'
				data={ pricingData.faq.data }
			/>
			<BannerMember />
			<Footer landingPage />
		</div>
	);
};

export default PricingPage;
