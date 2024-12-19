'use client';
import React, { useCallback, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { motion } from 'framer-motion';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/helpers/clsxm';
import { usePosts } from '@/hooks/api/blogs';
import { Post, PostCategory } from '@/payload/payload-types';

import { ArrowUpRight2 } from '../Icons';

const Topics = ({ categories } : {categories:PostCategory[]}) => {
	const [selectedItem, setSelectedItem] = useState(0);
	// const { data: categories = [] } = useCategories();
	// const selectedCategory = categories.;
  
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isLoading
	} = usePosts(selectedItem);

	const posts = data?.pages.flatMap(page => page.docs) ?? [];

	const lastPostElementRef = useCallback((node: HTMLDivElement) => {
		if (isFetching || !node) return;
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting && hasNextPage) {
				fetchNextPage();
			}
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, [isFetching, hasNextPage, fetchNextPage]);

	const handleCategoryChange = (id: number) => {
		setSelectedItem(id);
	};

	const renderItem = (item: Post) => {
		return (
			<div className='w-full h-full group'>
				<Link
					href={ `/blog/${item.slug}` }
					prefetch={ true }
					className=''
				>
					<div className='relative rounded-lg overflow-hidden w-full h-[305px]'>
						<Image
							src={ item.hero?.media?.url ?? '' }
							width={ 413 }
							height={ 305 }
							loading={ 'lazy' }
							className='object-cover object-center w-full h-full hover:scale-105 transition-all duration-300 ease-in-out'
							alt={ item.title }
							placeholder='blur'
							blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg=='
						/>
						<div className='absolute body-extra-small text-white border rounded-full border-white/25 bg-white/20 backdrop-blur-2xl overflow-hidden top-6 left-6 py-2 px-4 flex items-center justify-center'>
							{ item.hero.categories?.title }
						</div>
					</div>
					<div className='flex flex-col text-start gap-y-3.5 mt-6'>
						<div className='flex items-start justify-between gap-2'>
							<p className={ clsxm(
								'h6 text-primary',
							) }>
								{ item.title }
							</p>
							<div className='w-6 h-6 flex items-center flex-shrink-0 justify-center overflow-hidden'>
								<ArrowUpRight2 className={ clsxm(
									'text-2xl text-primary w-6 h-6',
									'transform -translate-x-10 translate-y-3 opacity-0',
									'group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100',
									'transition-all duration-200 ease-in-out'
								) }/>
							</div>
						</div>
						<p className='body-small text-grey-600 line-clamp-3'>Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas nibh massa diam sapien fusce. Nisl tortor turpis maecenas scelerisque aenean sem amet et</p>
						<p className='body-extra-small text-grey-primary'>
							<span>{ new Date(item.updatedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) }</span>
							<span> • </span>
							<span>15 mins read</span>
						</p>
					</div>
				</Link>
			</div>
		);
	};

	return (
		<div className='container-center mx-auto w-full relative'>
			<div className='w-full '>
				<div
					className='flex flex-col'>
					<div
						className='shrink-0 overflow-x-auto no-scrollbar flex md:space-x-[18px] max-md:justify-between relative'
					>
						{ categories?.map((category, id) => (
							<motion.button
								key={ id }
								className={ clsxm(
									'py-2 px-6 rounded-[10px] flex items-center justify-center border text-lg',
									selectedItem === category.id ? 'border-grey-100 text-primary' : 'border-transparent text-grey-primary',
								) }
								value={ `tab-${id}` }
								onClick={ () => handleCategoryChange(category.id) }
								whileHover={ { scale: 1.05 } }
								whileTap={ { scale: 0.95 } }
								transition={ {
									type: 'spring',
									stiffness: 300,
									damping: 20
								} }
							>
								<p>{ category.title }</p>
							</motion.button>
						)) }
					</div>
					<div className='grid grid-cols-1 max-md:gap-y-11 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
						{ posts?.map((post, index) => (
							<div
								key={ post.id }
								ref={ index === posts.length - 1 ? lastPostElementRef : null }
							>
								{ renderItem(post) }
							</div>
						)) }
					</div>
					{
						!isLoading && posts.length === 0 && (
							<div className='flex items-center justify-center gap-2 my-20'>
								<span className='h6 text-grey-primary'>
								No data found
								</span>
							</div>
						)
					}
					{ isLoading ? (
						<div className='flex items-center justify-center gap-2 my-20'>
							<div className='w-6 h-6 flex items-center justify-center animate-spin'>
								<CgSpinner className='text-[24px] text-[#C1C1C1]'/>
							</div>
							<span className='h6 text-grey-primary'>Loading</span>
						</div>
					) : (
						<>
							{ isFetching && !isLoading && (
								<div className='flex items-center justify-center gap-2 my-20'>
									<div className='w-6 h-6 flex items-center justify-center animate-spin'>
										<CgSpinner className='text-[24px] text-[#C1C1C1]'/>
									</div>
									<span className='h6 text-grey-primary'>Loading more</span>
								</div>
							) }
						</>
					) }
				</div>
			</div>
		</div>
	);
};

export default Topics;
