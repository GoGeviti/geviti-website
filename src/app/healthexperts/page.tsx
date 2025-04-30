import { Metadata } from 'next';
import Image from 'next/image';

import { Footer, FrequentlyAskedQuestions, MarketingComponent } from '@/components';
import Testimonials from '@/components/CultureApothecary/Testimonials';
import MedicalAdvisors from '@/components/Healthexperts/MedicalAdvisors';
import TextRevealByWord from '@/components/Healthexperts/TextRevealByWord';
import WellnessSpecialists from '@/components/Healthexperts/WellnessSpecialists';
// import LongevitiBlendComponent from '@/components/LongevitiBlend';
import LongevitiPanelComponent from '@/components/LongevitiPanel';
import { solutionData } from '@/constant/data';
import { Slug } from '@/interfaces/marketing'
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';

export const metadata: Metadata = {
	title: 'Health Experts',
	description: 'Healthcare professionals dedicated to compassionate, expert care..',
	openGraph: mergeOpenGraph({
		title: 'Health Experts',
		description: 'Healthcare professionals dedicated to compassionate, expert care..',
		image: '/meta/hero-men.jpg',
	}),
};

const HealthExperts = async() => {
	return (
		<div className='flex min-h-screen flex-col w-full font-Poppins'>
			<MarketingComponent.Hero slug={ Slug.HEALTH_EXPERTS } />
			<MedicalAdvisors />
			{ /* <div className='lg:px-3 my-16'>
				<div className='container-center'>
					<h2 className='h2'>Two teams, one approach</h2>
					<h3 className='h3 text-grey-500 mt-6'>At Geviti, our care team blends functional health coaches with seasoned clinical experts to deliver optimal patient outcomes. Our health coaches review your results and create targeted supplementation plans while guiding you on lifestyle and wellness changes. Meanwhile, our clinical team comprising experienced nurse practitioners and physicians develops advanced treatment protocols, including peptides and other targeted therapies, to address every aspect of your health. Together, they ensure a proactive, comprehensive approach to long-term vitality.</h3>
				</div>
			</div> */ }
			<TextRevealByWord
				text='At Geviti, our care team blends functional health coaches with seasoned clinical experts to deliver optimal patient outcomes. Our health coaches review your results and create targeted supplementation plans while guiding you on lifestyle and wellness changes. Meanwhile, our clinical team comprising experienced nurse practitioners and physicians develops advanced treatment protocols, including peptides and other targeted therapies, to address every aspect of your health. Together, they ensure a proactive, comprehensive approach to long-term vitality.'
			/>
			<WellnessSpecialists />
			<div className='lg:mt-16'>
				<LongevitiPanelComponent.BannerParallax />
			</div>
			<Testimonials />
			<div className='h-[812px] my-16 max-w-screen-2xl w-full mx-auto'>
				<Image
					alt='Footer'
					src='/images/healthexperts/footer.jpg'
					height={ 812 }
					width={ 1432 }
					className='w-full h-full object-cover'
				/>
			</div>
			<FrequentlyAskedQuestions data={ solutionData.faq.data } />
			<Footer landingPage />
		</div>
	);
};

export default HealthExperts;
