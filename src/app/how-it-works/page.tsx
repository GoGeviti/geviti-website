import { NextPage } from 'next';

import { ArticleComponent, HomeComponent, HowItWorksComponent, LandingComponent } from '@/components';
import { howItWorksData } from '@/constant/data';
import { getAllPost } from '@/services/products';

const FAQPage: NextPage = async() => {

	const allPost = await getAllPost(4);

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<HowItWorksComponent.Hero />
			<HowItWorksComponent.Product />
			<HowItWorksComponent.Comprehensive />
			<HomeComponent.CTA cta={ howItWorksData.cta } />
			<HowItWorksComponent.Quality />
			<HowItWorksComponent.FAQ />
			{ /* <HomeComponent.LearnMore/> */ }
			<ArticleComponent.Articles
				list={ allPost.docs }
				btn='View All'
				btnLink='/blog'
				title='Learn More'
				preTitle='Research'
				wrapperClassName='max-md:bg-white'
			/>
			<LandingComponent.Products />
		</div>
	);
};

export default FAQPage;
