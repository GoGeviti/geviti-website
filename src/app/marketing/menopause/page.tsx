import { NextPage } from 'next';

import { MarketingComponent } from '@/components';
import { Slug } from '@/interfaces/marketing';

const MenopausePage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<MarketingComponent.Hero slug={ Slug.MENOPAUSE } />
			<MarketingComponent.MenopauseCare />
			<MarketingComponent.Membership slug={ Slug.MENOPAUSE } />
			<MarketingComponent.TopTier slug={ Slug.MENOPAUSE } />
			<MarketingComponent.Testimonials />
			<MarketingComponent.FAQ />
		</div>
	);
};

export default MenopausePage;
