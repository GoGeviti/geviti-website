import React from 'react';
import dynamic from 'next/dynamic';

import SectionTitle from './SectionTitle';

const BlogCarousel = dynamic(() => import('./BlogCarousel'));

const Blog = () => {
	return (
		<div className='font-Poppins pb-[100px] lg:pb-[361px]'>
			<div className='container-center w-full'>
				<div className='mx-auto max-w-[737px] text-left sm:text-center'>
					<SectionTitle>
            Read more{ ' ' }
						<span className='italic font-normal'>science research</span> about
            stem cell therapy.
					</SectionTitle>
				</div>
			</div>
			<div className='mt-[45px] lg:mt-[116px]'>
				<BlogCarousel />
			</div>
		</div>
	);
};

export default Blog;
