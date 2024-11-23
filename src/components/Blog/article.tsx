'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { blogData } from '@/constant/data';
import { Post } from '@/payload/payload-types';

import CustomLink from '../CustomLink';
import { ArrowEmail } from '../Icons';

import { SliderArticles } from '.';

const articleData = blogData.article;

const Articles = ({ post }: { post: Post[]; }) => {
	const [hoveredItem, setHoveredItem] = useState(1);

	const handleMouseEnter = (id: number) => {
		setHoveredItem(id);
	};

	// const handleMouseLeave = () => {
	// 	setHoveredItem(1);
	// };
	return (
		<div className='w-full relative my-20'>
			<div className='container-center mx-auto  w-full'>
				<p className='text-primary font-Poppins text-4xl -tracking-[1.44px] text-center'>
					{ articleData.title }
				</p>
				<div className='w-full justify-center gap-[30px] relative mt-5 md:flex hidden'>
					{ post?.map((items, id) => {
						const isHovered = hoveredItem === id;
						return (
							<CustomLink
								href={ `/blog/${ items.slug }` }
								key={ id }
								className='relative'
								onMouseEnter={ () => handleMouseEnter(id) }
							// onMouseLeave={ handleMouseLeave }
							>
								<Image
									src={ items.hero.media.url ?? '' }
									width={ 1000 }
									height={ 1000 }
									className={ `object-cover transition-all ease-in-out duration-300 !h-[500px] ${ isHovered ? 'w-[500px] ' : 'w-[320px]' } rounded-[20px]` }
									alt={ items.title }
								/>
								<div className='absolute z-10 left-0 bottom-0 flex flex-col text-start px-[30px] py-[26px]'>
									<p
										className={ `text-[#CDDCE2] font-BRSonoma ${ isHovered ? 'text-base' : 'text-sm' }` }
									>
										{ items.hero.categories?.title }
									</p>
									<p
										className={ `text-white font-Poppins  ${ isHovered
											? 'text-[22px] lg:text-[27px] -tracking-[1.08px]'
											: 'text-lg lg:text-[22px] -tracking-[0.88px]' }` }
									>
										{ items.title }
									</p>
								</div>
								<button className='cursor-pointer z-10 absolute top-0 right-0 m-5'>
									<ArrowEmail className='w-[45px] h-[45px]' />
								</button>
								<div className='z-0 bottom-0 absolute bg-gradient-to-t from-black/70 via-black/30 to-black/0 h-full w-full rounded-[20px]' />
							</CustomLink>
						);
					}) }
				</div>
			</div>
			<div className='md:hidden'>
				<SliderArticles data={ post } />
			</div>
		</div>
	);
};

export default Articles;
