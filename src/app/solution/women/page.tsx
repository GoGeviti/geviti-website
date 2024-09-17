import { Metadata } from 'next';

import {
	Footer, FrequentlyAskedQuestions, MembershipComponent, RunningLogo, SolutionsComponent
} from '@/components';
import { solutionData } from '@/constant/data';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';

export const metadata: Metadata = {
	title: 'Women’s Health',
	description: 'Science-backed treatment options for female optimization.',
	openGraph: mergeOpenGraph({
		title: 'Women’s Health',
		description: 'Science-backed treatment options for female optimization.',
		image: '/meta/hero-women.jpg',
	}),
};

const Solutions = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
			<SolutionsComponent.Hero type='women' />
			<div className='py-[42px] lg:py-16'>
				<RunningLogo />
			</div>
			<SolutionsComponent.WellnessPro type='women' />
			<div className='lg:px-3 py-6'>
				<MembershipComponent.BiomarkersSection wrapperClassName='bg-white pt-6 pb-[42px] lg:py-[62px]' />
			</div>
			{ /* <SolutionsComponent.TreatmentOptions type='women' /> */ }
			<SolutionsComponent.Steps theme='blue' />
			<SolutionsComponent.Membership />
			<FrequentlyAskedQuestions data={ solutionData.faq.data } />
			<SolutionsComponent.Banner type='women' />
			<Footer landingPage />
		</div>
	);
};

export default Solutions;
