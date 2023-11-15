import { NextPage } from 'next';

import { BlogComponent } from '@/components';
import { Post } from '@/payload/payload-types';
import { getAllPost } from '@/services/products';

const BlogPage: NextPage = async() => {

	const allPost = await getAllPost();

	function transformPostDataToTopics(postDataArray:Post[]) {
		return {
			title: 'Popular Topics',
			btnRight: 'View All',
			tab: [
				{
					name: 'All',
					list: postDataArray.map(post => ({
						image: post.hero.media.url as string,
						pretitle: post.hero.categories?.title as string,
						title: post.title,
					})),
				},
				...postDataArray.map((item:Post) => {
					const categoryPosts = postDataArray.filter(
						post => post.hero.categories?.title && post.hero.categories?.title.includes(item.hero.categories?.title as string)
					);
	
					return {
						name: item.hero.categories?.title as string,
						list: categoryPosts.map((post:Post) => ({
							image: post.hero.media.url as string,
							pretitle: post.hero.categories?.title as string,
							title: post.title,
						})),
					};
				}),
			],
		};
	}

	const topicsData = transformPostDataToTopics(allPost.docs);
  
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<BlogComponent.Hero
				hero={ {
					title: allPost.docs[0].title,
					titleMobile: allPost.docs[0].title,
					image: allPost.docs[0].hero.media.url,
					preTitle: allPost.docs[0].hero.categories?.title ?? '',
					btn: 'Read Article'
				} }
				classname=''
			/>
			<BlogComponent.Topics articleData={ topicsData }/>
			<BlogComponent.Articles post={ allPost.docs.slice(0, 3) }/>
			<BlogComponent.Updated/>
		</div>
	);
};

export default BlogPage;
