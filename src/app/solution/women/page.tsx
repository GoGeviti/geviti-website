import { Footer, FrequentlyAskedQuestions, RunningLogo, SolutionsComponent } from '@/components';
import SEO from '@/components/Seo';
import { solutionData } from '@/constant/data';

const Solutions = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
			<SEO
				title='Women’s Health'
				description='Science-backed treatment options for female optimization. '
				og_images='/meta/hero-women.jpg'
				canonical='/solution/women'
			/>
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
