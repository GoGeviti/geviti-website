'use client';
import { NextPage } from 'next';

import { ArticleComponent, BlogComponent } from '@/components';
import { articleData } from '@/constant/data';

const ArticlePage: NextPage = () => {
  
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<BlogComponent.Hero
				hero={ articleData.hero }
				classname= '!h-[372px] md:!h-[514px]'/>
			<ArticleComponent.News/>
			<ArticleComponent.Articles/>
		</div>
	);
};

export default ArticlePage;
