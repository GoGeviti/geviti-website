'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// import Link from 'next/link';
import clsxm from '@/helpers/clsxm';
import { Post } from '@/payload/payload-types';

import { ArrowUpRight2, ChevronRight } from '../Icons';
import { CustomLink } from '..';

// interface ArticleProps {
// 	pretitle: string;
// 	title: string;
//   image: string;
// }

interface ArticlesProps {
	list?: Post[];
	title: string;
	preTitle?: string;
	btn: string;
	btnLink?: string;
	className?: string;
	wrapperClassName?: string;
}

// TODO: You're probably aware but React.FC creates awkward types here - see https://github.com/facebook/create-react-app/pull/8177
// Just thought I'd add, since I edited this component and noticed it :)

const Articles: React.FC<ArticlesProps> = ({
	list,
	title,
	preTitle,
	btn,
	btnLink,
	className,
	wrapperClassName,
}) => {
	const [showAllTabs, setShowAllTabs] = useState(false);
	// const windowDimensions = useWindowDimensions();
	// const isMobile = windowDimensions.width < screens.md;

	return (
		<div
			className={ clsxm(
				'container-center mx-auto w-full relative',
				wrapperClassName
			) }
		>
			<div className={ clsxm('w-full pt-[70px]', className && className) }>
				<div className='flex justify-center md:justify-between items-center'>
					<div className='flex flex-col max-md:text-center'>
						{ preTitle && (
							<p className='sm:mb-7px text-pretitle text-grey-primary'>
								{ preTitle }
							</p>
						) }
						<h2 className='text-primary font-Poppins text-4xl -tracking-[1.44px] text-center'>
							{ title }
						</h2>
					</div>
					{ btnLink ? (
						<CustomLink
							href={ btnLink }
							aria-label={ btn }
							className='btn btn-primary max-md:hidden flex items-center gap-7px sm:gap-2 !translate-y-0 group'
						>
							<span className='text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-Poppins'>
								{ btn }
							</span>

							<ChevronRight className='stroke-grey-secondary w-4 h-4 sm:w-18px sm:h-18px group-hover:translate-x-1 transform transition-all duration-100' />
						</CustomLink>
					) : (
						<button
							onClick={ () => setShowAllTabs(!showAllTabs) }
							className='btn-cta-landing group btn-primary px-9 md:block hidden'
						>
							<span className='text-btn-cta-landing'>
								{ showAllTabs ? 'View Less' : btn }
							</span>
						</button>
					) }
				</div>
				<div className='relative'>
					<div className='max-md:hidden'>{ renderItem(list?.slice(0, 4) ?? []) }</div>
					<div className='md:hidden'>{ renderItem(list?.slice(0, 3) ?? []) }</div>
					<div className='flex w-full justify-center py-[30px]'>
						{ btnLink ? (
							<CustomLink
								href={ btnLink }
								aria-label={ btn }
								className='btn-cta-landing group btn-primary px-9 md:hidden w-fit'
							>
								<span className='text-btn-cta-landing'>{ btn }</span>

								<ChevronRight className='stroke-grey-secondary w-4 h-4 sm:w-18px sm:h-18px group-hover:translate-x-1 transform transition-all duration-100' />
							</CustomLink>
						) : (
							<button
								className='btn-cta-landing group btn-primary px-9 md:hidden w-fit'
								onClick={ () => setShowAllTabs(!showAllTabs) }
							>
								<span className='text-btn-cta-landing'>
									{ showAllTabs ? 'View Less' : btn }
								</span>
							</button>
						) }
					</div>

					{ /* {
						!showAllTabs &&
						<div className='md:hidden bg-gradient-to-t from-grey-background/90 to-grey-background/0 absolute -bottom-5 z-10 w-full h-[131px]' />
					} */ }
				</div>
			</div>
		</div>
	);
};

// const renderItem = (data?: Post[]) => {
// 	return (
// 		<div
// 			className={ clsxm(
// 				'w-full grid grid-cols-1 gap-[10px] md:gap-[18px] pt-[30px] md:grid-cols-4'
// 			) }
// 		>
// 			{ data?.map((items, id) => {
// 				return (
// 					<CustomLink
// 						href={ `/blog/${ items.slug }` }
// 						key={ id }
// 						className='relative bg-white max-md:rounded-lg overflow-hidden flex flex-row md:flex-col max-md:items-center max-md:p-5 max-md:space-x-[9px]'
// 					>
// 						<div>
// 							<div className='relative md:h-[254px] w-[74px] h-[74px] max-md:rounded-lg max-md:overflow-hidden md:w-full'>
// 								<Image
// 									src={ items.hero?.media?.url ?? '' }
// 									fill
// 									className='object-cover object-center'
// 									alt={ items.hero.media.alt ?? '' }
// 								/>
// 							</div>
// 						</div>
// 						<div className='flex flex-col text-start md:p-5'>
// 							<p className='text-grey-primary font-BRSonoma text-xs'>
// 								{ items.hero.categories?.title }
// 							</p>
// 							<p className='text-primary font-Poppins text-base font-medium -tracking-[0.64px] leading-5 md:leading-6'>
// 								{ items.title }
// 							</p>
// 						</div>
// 					</CustomLink>
// 				);
// 			}) }
// 		</div>
// 	);
// };

const renderItem = (data: Post[]) => {
	return (
		<div
			className={ clsxm(
				'w-full grid grid-cols-1 gap-[10px] md:gap-[18px] pt-[30px] md:grid-cols-4'
			) }
		>
			{ data?.map((item, id) => {
				return (
					<div
						key={ id }
						className='w-full h-full group'>
						<CustomLink
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
						</CustomLink>
					</div>
				)
			}) }

		</div>
	);
};

export default Articles;
