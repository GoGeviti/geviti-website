// import { NextPage } from 'next';

import { ArticleComponent, BlogComponent } from '@/components';
import { Blocks } from '@/components/Blocks';
import { articleData } from '@/constant/data';
import { Post } from '@/payload/payload-types';

export const PageClient: React.FC<{
  post: Post
}> = ({ post }) => {

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<BlogComponent.Hero
				hero={ {
					title: post.title,
					image: post.hero.media.url,
					preTitle: post.hero.categories?.title ?? ''
				} }
				classname= '!h-[372px] md:!h-[514px]'/>
			<Blocks
				blocks={ post.layout }
			/>
			<ArticleComponent.Articles
				list={ post.relatedPosts }
				btn={ articleData.article.btn }
				title={ articleData.article.title }/>
		</div>
	);
};

export default PageClient;
