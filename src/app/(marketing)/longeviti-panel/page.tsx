import { NextPage } from 'next';

import { Footer, FrequentlyAskedQuestions } from '@/components';
import LongevitiPanelComponent from '@/components/LongevitiPanel';
import longevitiPanelData from '@/constant/data/longevitiPanel';

const LongevitiPanelPage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<LongevitiPanelComponent.Hero />
			<LongevitiPanelComponent.HowItWorks />
			<LongevitiPanelComponent.BannerParallax />
			<LongevitiPanelComponent.Analyzed />
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
