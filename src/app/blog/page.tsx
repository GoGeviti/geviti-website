import { NextPage } from 'next';

import { BlogComponent } from '@/components';
import { Post } from '@/payload/payload-types';
import { getAllPost } from '@/services/products';

interface GroupedPost {
  name: string;
  list: Post[];
}

const BlogPage: NextPage = async() => {

	const allPost = await getAllPost();

	// function transformPostDataToTopics(postDataArray:Post[]) {
	// 	return {
	// 		title: 'Popular Topics',
	// 		btnRight: 'View All',
	// 		tab: [
	// 			{
	// 				name: 'All',
	// 				list: postDataArray.map(post => ({
	// 					id: post.id,
	// 					image: post.hero.media.url as string,
	// 					pretitle: post.hero.categories?.title as string,
	// 					title: post.title,
	// 				})),
	// 			},
	// 			...postDataArray.map((item:Post) => {
	// 				const categoryPosts = postDataArray.filter(
	// 					post => post.hero.categories?.title && post.hero.categories?.title.includes(item.hero.categories?.title as string)
	// 				);
	
	// 				return {
	// 					name: item.hero.categories?.title as string,
	// 					list: categoryPosts.map((post:Post) => ({
	// 						id: post.id,
	// 						image: post.hero.media.url as string,
	// 						pretitle: post.hero.categories?.title as string,
	// 						title: post.title,
	// 					})),
	// 				};
	// 			}),
	// 		],
	// 	};
	// }

	const groupFaqsByCategory = (posts: Post[]): GroupedPost[] =>  {
		return posts.reduce((result: GroupedPost[], post: Post) => {
			const existingCategory = result.find(group => group.name === post.hero.categories?.title);
	
			if (existingCategory) {
				existingCategory.list.push(post);
			} else {
				result.push({
					name: post.hero.categories?.title ?? '',
					list: [post],
				});
			}
	
			return result;
		}, [
			{
				name: 'All',
				list: posts,
			},
		]);
	};

	const topicsData = groupFaqsByCategory(allPost.docs);
  
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<BlogComponent.Hero
				hero={ {
					title: allPost.docs[0].title,
					titleMobile: allPost.docs[0].title,
					image: allPost.docs[0].hero.media.url,
					preTitle: allPost.docs[0].hero.categories?.title ?? '',
					btn: 'Read Article',
					btnLink: `/blog/${allPost.docs[0].id}`,
				} }
				classname=''
			/>
			<BlogComponent.Topics
				title='Popular Topics'
				btnRight='View All'
				articleData={ topicsData }/>
			<BlogComponent.Articles post={ allPost.docs.slice(0, 3) }/>
			<BlogComponent.Updated/>
		</div>
	);
};

export default BlogPage;
