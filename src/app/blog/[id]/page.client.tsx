// import { NextPage } from 'next';
'use client'
import { useRef } from 'react';

import { ArticleComponent, BlogComponent } from '@/components';
import { Blocks } from '@/components/Blocks';
import { ChevronRight } from '@/components/Icons';
import { articleData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { Post } from '@/payload/payload-types';

export const PageClient: React.FC<{
  post: Post
}> = ({ post }) => {

	const headingRefs = useRef<{[key: string]: HTMLElement | null}>({});

	const scrollToHeading = (id: string) => {
		headingRefs.current[id]?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<BlogComponent.HeroDetail post={ post } />
			<div className={ clsxm(
				'container-center w-full max-lg:px-0',
				post.relatedPosts?.length === 0 && 'pb-20'
			) }>
				<div className='flex items-start justify-between mt-10 lg:mt-[120px]'>
					<div className='max-w-[325px] max-lg:hidden w-full flex flex-col gap-6 sticky top-[120px]'>
						<h6>Table of content</h6>
						<ul className='flex flex-col gap-6'>
							{ post.layout.map(block => {
								if (block.blockType === 'content' && block.columns) {
									return block.columns.map((column:any, colIndex) => {
										if (column.richText?.root?.children) {
											return column.richText.root.children?.map((node:any, nodeIndex:number) => {
												if (node.type === 'heading' && ['h1', 'h2', 'h3'].includes(node.tag)) {
													const headingId = `heading-${colIndex}-${nodeIndex}`;
													return (
														<li
															key={ `toc-${headingId}` }
															onClick={ () => scrollToHeading(headingId) }
															className={ clsxm(
																'cursor-pointer border-b border-primary group',
																node.tag === 'h2' && 'ml-4',
																node.tag === 'h3' && 'ml-8'
															) }
														>
															<a
																href={ `#${headingId}` }
																className='flex items-center justify-between gap-2'>
																<span className={ clsxm(
																	'body-small text-primary'
																) }>
																	{ node.children?.[0]?.text || '' }
																</span>
																<ChevronRight className='group-hover:translate-x-1 transform transition-all duration-100' />
															</a>
														</li>
													);
												}
												return null;
											});
										}
										return null;
									});
								}
								return null;
							}) }
						</ul>
					</div>
					<div className='max-w-screen-md w-full'>
						<Blocks
							blocks={ post.layout }
							headingRefs={ headingRefs }
						/>
					</div>
				</div>
			</div>
			{
				post?.relatedPosts && post?.relatedPosts?.length > 0 && (
					<ArticleComponent.Articles
						list={ post.relatedPosts }
						btn={ articleData.article.btn }
						title={ articleData.article.title }/>
				)
			}
		</div>
	);
};

export default PageClient;
