import { Footer, FrequentlyAskedQuestions, RunningLogo, SolutionsComponent } from '@/components';
// import EasyOnlineCare from '@/components/Solutions/easy-online-care/EasyOnlineCare';
import Hero from '@/components/Solutions/Hero';
import OptimizedYourSelf from '@/components/Solutions/OptimizedYourSelf';
import { solutionData } from '@/constant/data';

const Solutions = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
			<Hero type='men' />
			<div className='py-[42px] lg:py-16'>
				<RunningLogo />
			</div>
			<SolutionsComponent.WellnessPro type='men' />
			{ /* <EasyOnlineCare treatmentmens={ solutionData.treatmentmens } /> */ }
			<SolutionsComponent.Steps theme='black' />
			<OptimizedYourSelf />
			<SolutionsComponent.Membership />
			<FrequentlyAskedQuestions data={ solutionData.faq.men } />
			<SolutionsComponent.Banner type='men' />
			<Footer landingPage />
		</div>
	);
};

export default Solutions;
