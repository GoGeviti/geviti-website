// import { NextPage } from 'next';
'use client'
import { useRef } from 'react';

import { ArticleComponent, BlogComponent } from '@/components';
import { Blocks } from '@/components/Blocks';
import { ChevronRight } from '@/components/Icons';
import { articleData } from '@/constant/data';
import { calculateReadingTime } from '@/helpers/calculateReadingTime';
import clsxm from '@/helpers/clsxm';
import { Post } from '@/payload/payload-types';

export const PageClient: React.FC<{
  post: Post
}> = ({ post }) => {

	const headingRefs = useRef<{[key: string]: HTMLElement | null}>({});

	const scrollToHeading = (id: string) => {
		const element = headingRefs.current[id];
		if (element) {
			const offset = 100; // Adjust this value based on your header height
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - offset;
			
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	};

	const readingTime = calculateReadingTime(post.layout);

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<BlogComponent.HeroDetail
				post={ post }
				readingTime={ readingTime } />
			<div className={ clsxm(
				'container-center w-full max-lg:px-0',
				post.relatedPosts?.length === 0 && 'pb-20'
			) }>
				<div className='flex items-start justify-between mt-10 lg:mt-[120px]'>
					<div className='max-w-[325px] max-lg:hidden w-full flex flex-col gap-6 sticky top-[120px]'>
						<h6>Table of contents</h6>
						<ul className='flex flex-col gap-6'>
							{ post.layout.map(block => {
								if (block.blockType === 'content' && block.columns) {
									return block.columns.map((column:any, colIndex) => {
										if (column.richText?.root?.children) {
											return column.richText.root.children?.map((node:any, nodeIndex:number) => {
												if (node.type === 'heading' && ['h1', 'h2', 'h3'].includes(node.tag)) {
													// Recursive function to extract text from nested nodes
													const extractText = (textNode: any): string => {
														if (typeof textNode.text === 'string') return textNode.text;
														if (Array.isArray(textNode.children)) {
															return textNode.children.map(extractText).join('');
														}
														return '';
													};
													
													const headingText = extractText(node);
													if (!headingText) return null;
													
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
															<div className='flex items-center justify-between gap-2'>
																<span className='body-small text-primary'>
																	{ headingText }
																</span>
																<ChevronRight className='group-hover:translate-x-1 flex-shrink-0 transform transition-all duration-100' />
															</div>
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
