'use client';
import { NextPage } from 'next';

import { BlogComponent } from '@/components';
import { blogData } from '@/constant/data';

const BlogPage: NextPage = () => {
  
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<BlogComponent.Hero
				hero={ blogData.hero }
				classname=''/>
			<BlogComponent.Topics/>
			<BlogComponent.Articles/>
			<BlogComponent.Updated/>
		</div>
	);
};

export default BlogPage;
