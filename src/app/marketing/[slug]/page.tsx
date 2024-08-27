import { NextPage } from 'next';

import {
	Footer,
	FrequentlyAskedQuestions,
	MarketingComponent,
} from '@/components';
import { marketingData } from '@/constant/data';

type PageProps = {
  params: { slug: string };
};

const MarketingPage: NextPage<PageProps> = ({ params }) => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<MarketingComponent.Hero slug={ params.slug } />
			<MarketingComponent.TopTier slug={ params.slug } />
			<MarketingComponent.Membership />
			<MarketingComponent.Steps />
			<FrequentlyAskedQuestions
				data={ marketingData.faq.data }
				subtitle={
					<p className='text-pretitle text-grey-primary lg:hidden'>
						{ marketingData.faq.subtitle }
					</p>
				}
				disabledAnimation
			/>
			<MarketingComponent.Banner slug={ params.slug } />
			<Footer landingPage />
		</div>
	);
};

export default MarketingPage;
