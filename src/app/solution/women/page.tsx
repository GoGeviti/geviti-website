import { Metadata } from 'next';

import { Footer, FrequentlyAskedQuestions, RunningLogo, SolutionsComponent } from '@/components';
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
			<SolutionsComponent.TreatmentOptions type='women' />
			<SolutionsComponent.Steps theme='blue' />
			<SolutionsComponent.Membership />
			<FrequentlyAskedQuestions data={ solutionData.faq.data } />
			<SolutionsComponent.Banner type='women' />
			<Footer landingPage />
		</div>
	);
};

export default Solutions;
