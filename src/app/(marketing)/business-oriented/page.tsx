import { NextPage } from 'next';

import { MarketingComponent } from '@/components';
import { marketingData } from '@/constant/data';
import { Slug } from '@/interfaces/marketing';

const BusinessOrientedPage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<MarketingComponent.Hero slug={ Slug.BUSINESS_ORIENTED } />
			<MarketingComponent.Investing />
			<MarketingComponent.Membership slug={ Slug.BUSINESS_ORIENTED } />
			<MarketingComponent.Steps slug={ Slug.BUSINESS_ORIENTED } />
			<MarketingComponent.Testimonials />
			<MarketingComponent.EmployeePricing />
			<MarketingComponent.FAQ data={ marketingData.faqBusiness } />
		</div>
	);
};

export default BusinessOrientedPage;
