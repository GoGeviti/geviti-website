import { NextPage } from 'next';

import { BlogComponent } from '@/components';
import { getAllPost, getAllPostCategories } from '@/services/products';

const BlogPage: NextPage = async() => {

	const latestPost = await getAllPost(3);
	const categoriesRes = await getAllPostCategories();

	const allCategory = {
		title: 'All',
		id: 0,
		description: '',
		updatedAt: '',
		createdAt: ''
	};
	const categories =  [allCategory, ...categoriesRes?.docs];

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<BlogComponent.Hero
				hero={ latestPost.docs.slice(0, 3) }
				classname=''
			/>
			<div className='lg:px-3 pb-14 pt-20'>
				<div className='container-center flex items-center justify-between'>
					<div className='flex flex-col gap-[18px]'>
						<h2 className='h2'>Blog</h2>
						<p className='body-small text-grey-primary max-w-[472px]'>Information is everywhere. It is hard to know what is right and what is wrong. Geviti’s Wellness Blog aims to be a source of truth for those looking to optimize both health span and lifespan. Like everything at Geviti, our blogs are data-driven.</p>
					</div>
				</div>
			</div>
			<BlogComponent.Topics categories={ categories ?? [] } />
			{ /* <BlogComponent.Articles post={ allPost.docs.slice(0, 3) } /> */ }
			<BlogComponent.Updated />
		</div>
	);
};

export default BlogPage;