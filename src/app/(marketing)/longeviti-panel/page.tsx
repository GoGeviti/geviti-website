import React from 'react';
import { NextPage } from 'next';

import { Footer, FrequentlyAskedQuestions } from '@/components';
import LongevitiPanelComponent from '@/components/LongevitiPanel';
import longevitiPanelData from '@/constant/data/longevitiPanel';

const LongevitiPanelPage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<LongevitiPanelComponent.Hero
				{ ...longevitiPanelData.hero }
				longeviti_type='panel' />
			<LongevitiPanelComponent.HowItWorks />
			<LongevitiPanelComponent.BannerParallax />
			<React.Suspense fallback={ <div className='min-h-[200px]' /> }>
				<LongevitiPanelComponent.Analyzed />
			</React.Suspense>
			<LongevitiPanelComponent.Apps />
			<FrequentlyAskedQuestions
				data={ longevitiPanelData.faq.data }
				disabledAnimation
				className='!pt-0 lg:!pt-0'
			/>
			<Footer />
		</div>
	);
};

export default LongevitiPanelPage;
