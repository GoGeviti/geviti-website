import { NextPage } from 'next';

import { ArticleComponent, Footer, HomeComponent } from '@/components';
import { homeData } from '@/constant/data';
import { getAllPost } from '@/services/products';

const HomePage: NextPage = async() => {

	const allPost = await getAllPost(4);

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<HomeComponent.Hero />
			<HomeComponent.Packages />
			<HomeComponent.CTA cta={ homeData.cta }/>
			{ /* <HomeComponent.LearnMore/> */ }
			<ArticleComponent.Articles
				list={ allPost.docs }
				className='py-[70px] lg:py-[95px]'
				btn='View All'
				btnLink='/blog'
				title='Learn More'
				preTitle='Research'
			/>
			<HomeComponent.Products withBg />
			<HomeComponent.Features />

			<Footer />
		</div>
	);
};

export default HomePage;