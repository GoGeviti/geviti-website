import { NextPage } from 'next';

import { Footer, MarketingComponent } from '@/components';
import { Benefits } from '@/components/Landing';
import { GiveawayRules } from '@/components/Marketing';
import { Slug } from '@/interfaces/marketing';

const GiveawayPage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<MarketingComponent.Hero slug={ Slug.GIVEAWAY } />
			<GiveawayRules/>
			<Benefits />
			<MarketingComponent.Instagram />
			<MarketingComponent.FAQ />
			<Footer/>
		</div>
	);
};

export default GiveawayPage;
