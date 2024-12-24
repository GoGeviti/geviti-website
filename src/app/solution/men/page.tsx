import { Metadata } from 'next';

import { Footer, FrequentlyAskedQuestions, RunningLogo, SolutionsComponent } from '@/components';
import { ViewOtherCategories } from '@/components/Solutions';
import { solutionData } from '@/constant/data';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { getCategories } from '@/services/products';

export const metadata: Metadata = {
	title: 'Men’s Health',
	description: 'Science-backed treatment options for male optimization.',
	openGraph: mergeOpenGraph({
		title: 'Men’s Health',
		description: 'Science-backed treatment options for male optimization.',
		image: '/meta/hero-men.jpg',
	}),
};

const Solutions = async() => {
	const categoryData = await getCategories(undefined, 'male');
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
			<SolutionsComponent.Hero type='men' />
			<div className='py-[42px] lg:py-16'>
				<RunningLogo />
			</div>
			<SolutionsComponent.WellnessPro type='men' />
			{
				categoryData.categories && (
					<ViewOtherCategories
						baseUrl='/men'
						headerText={ {
							main: 'View our optimization',
							sub: 'therapeutics'
						} }
						data={ categoryData.categories } />
				)
			}
			{ /* <SolutionsComponent.TreatmentOptions type='men' /> */ }
			<div className='lg:px-3 pb-6'>
				{ /* <MembershipComponent.BiomarkersSection wrapperClassName='bg-white pt-6 pb-[42px] lg:py-[62px]' /> */ }
			</div>
			<SolutionsComponent.Steps theme='black' />
			<SolutionsComponent.OptimizedYourSelf />
			<SolutionsComponent.Membership />
			<FrequentlyAskedQuestions data={ solutionData.faq.data } />
			<SolutionsComponent.Banner type='men' />
			<Footer landingPage />
		</div>
	);
};

export default Solutions;
