import { NextPage } from 'next';

import { FrequentlyAskedQuestions, MarketingComponent } from '@/components';
import { marketingData } from '@/constant/data';
import { Slug } from '@/interfaces/marketing';

const MenWeightLoss: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<MarketingComponent.Hero slug={ Slug.MEN_WEIGHT_LOSS } />
			<MarketingComponent.TopTier slug={ Slug.MEN_WEIGHT_LOSS } />
			<MarketingComponent.Membership slug={ Slug.MEN_WEIGHT_LOSS } />
			<MarketingComponent.Steps slug={ Slug.MEN_WEIGHT_LOSS } />
			<FrequentlyAskedQuestions
				data={ marketingData.faq.data }
				subtitle={
					<p className='text-pretitle text-grey-primary lg:hidden'>
						{ marketingData.faq.subtitle }
					</p>
				}
				disabledAnimation
			/>
			<MarketingComponent.Banner slug={ Slug.MEN_WEIGHT_LOSS } />
		</div>
	);
};

export default MenWeightLoss;
