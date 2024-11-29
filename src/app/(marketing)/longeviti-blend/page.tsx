import React from 'react';
import { NextPage } from 'next';

import { Footer, FrequentlyAskedQuestions, MarketingComponent } from '@/components';
import LongevitiBlendComponent from '@/components/LongevitiBlend';
import LongevitiPanelComponent from '@/components/LongevitiPanel';
import longevitiBlendData from '@/constant/data/longevitiBlend';
import longevitiPanelData from '@/constant/data/longevitiPanel';

const LongevitiBlendPage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<LongevitiPanelComponent.Hero
				{ ...longevitiBlendData.hero }
				longeviti_type='blend' />
			<LongevitiBlendComponent.HowItWorks />
			<LongevitiBlendComponent.Unique />
			<LongevitiBlendComponent.TextRevealByWord text={ longevitiBlendData.textRefeal } />
			<MarketingComponent.Testimonials />
			<LongevitiBlendComponent.Apps />
			<FrequentlyAskedQuestions
				data={ longevitiPanelData.faq.data }
				disabledAnimation
				className='!pt-0 lg:!pt-0'
			/>
			<Footer />
		</div>
	);
};

export default LongevitiBlendPage;
