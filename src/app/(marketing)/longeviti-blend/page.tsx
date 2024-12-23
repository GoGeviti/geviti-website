import React from 'react';
import { NextPage } from 'next';

import { Footer, FrequentlyAskedQuestions } from '@/components';
import SocialProof from '@/components/Landing/SocialProof';
import LongevitiBlendComponent from '@/components/LongevitiBlend';
import LongevitiPanelComponent from '@/components/LongevitiPanel';
import { marketingData } from '@/constant/data';
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
			{ /* <MarketingComponent.Testimonials /> */ }
			{ /* <SocialProof/> */ }
			<SocialProof testimonials={ [
				...marketingData.testimonials.list.map(item => ({
					rating: Math.random() < 0.3 ? 4 : 5, // 30% chance of 4 stars, 70% chance of 5 stars
					text: item.body,
					author: {
						name: item.author.name,
						title: item.author.company,
						image: ''
					}
				})),
				...marketingData.testimonials.list.map(item => ({
					rating: Math.random() < 0.3 ? 4 : 5,
					text: item.body,
					author: {
						name: item.author.name,
						title: item.author.company,
						image: ''
					}
				}))
			] } />
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
