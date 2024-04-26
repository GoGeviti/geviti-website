import { Footer, FrequentlyAskedQuestions, RunningLogo, SolutionsComponent } from '@/components';
import { solutionData } from '@/constant/data';

const Solutions = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
			<SolutionsComponent.Hero type='men' />
			<div className='py-[42px] lg:py-16'>
				<RunningLogo />
			</div>
			<SolutionsComponent.WellnessPro type='men' />
			<SolutionsComponent.TreatmentOptions type='men' />
			<SolutionsComponent.Steps theme='black' />
			<SolutionsComponent.OptimizedYourSelf />
			<SolutionsComponent.Membership />
			<FrequentlyAskedQuestions data={ solutionData.faq.men } />
			<SolutionsComponent.Banner type='men' />
			<Footer landingPage />
		</div>
	);
};

export default Solutions;
