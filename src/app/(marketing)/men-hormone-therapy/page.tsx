import { NextPage } from 'next';

import { FrequentlyAskedQuestions, MarketingComponent } from '@/components';
import { marketingData } from '@/constant/data';
import { Slug } from '@/interfaces/marketing';

const MenHormoneTherapy: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<MarketingComponent.Hero slug={ Slug.MEN_HORMONE_THERAPY } />
			<MarketingComponent.TopTier slug={ Slug.MEN_HORMONE_THERAPY } />
			<MarketingComponent.Membership slug={ Slug.MEN_HORMONE_THERAPY } />
			<MarketingComponent.Steps slug={ Slug.MEN_HORMONE_THERAPY } />
			<FrequentlyAskedQuestions
				data={ marketingData.faq.data }
				subtitle={
					<p className='text-pretitle text-grey-primary lg:hidden'>
						{ marketingData.faq.subtitle }
					</p>
				}
				disabledAnimation
			/>
			<MarketingComponent.Banner slug={ Slug.MEN_HORMONE_THERAPY } />
		</div>
	);
};

export default MenHormoneTherapy;
