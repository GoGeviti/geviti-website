'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import Image from 'next/image';
import Link from 'next/link';

// import clsxm from '@/helpers/clsxm';
// import { blogData } from '@/constant/data';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';
import { Post } from '@/payload/payload-types';

// const articleData = blogData.topics;

// interface TopicsProps {
// 	id:number
//   image: string;
//   pretitle: string;
//   title: string;
// }

const Topics: React.FC<{
	title: string;
	btnRight: string;
	articleData: {
		name: string;
		list: Post[];
	}[]
}> = ({
	articleData,
	title,
	btnRight
}) => {
	const [showAllTabs, setShowAllTabs] = useState(false);
	const [selectedItem, setSelectedItem] = useState(0);
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.md;

	return (
		<div className='container-center mx-auto w-full relative mt-20'>
			<div className='w-full '>
				<div className='flex justify-center md:justify-between items-center'>
					<p className='text-primary font-Poppins text-4xl -tracking-[1.44px] text-center'>{ title }</p>
					<button
						className='btn-cta-landing group btn-primary px-9 md:block hidden'
						onClick={ () => setShowAllTabs(!showAllTabs) }
					>
						<span className='text-btn-cta-landing'>
							{ showAllTabs ? 'View Less' : btnRight }
						</span>
					</button>
				</div>
				<Tabs
					className='flex flex-col'
					defaultValue='tab-0'
				>
					<TabsList
						className='shrink-0 flex border-b border-primary/10 md:space-x-[56px] max-md:justify-between'
						aria-label={ title }>
						{ articleData.sort((a, b) => a.name.localeCompare(b.name)).map((items, id) => (
							<div
								key={ id }
								// className={ clsxm(id === 0 ? 'w-[18px]' : id === 1 ? 'w-[75px]' : id === 2 ? 'w-[46px]' : 'w-[59px]') }
							>
								<TabsTrigger
									className='text-[15px] cursor-pointer pb-[9px] pt-[25px] leading-none text-primary select-none data-[state=active]:font-bold relative outline-none'
									value={ `tab-${id}` }
									onClick={ () => setSelectedItem(id) }
								>
									<p>{ items.name }</p>
									{
										selectedItem === id &&
									<div className='absolute h-[1px] rounded w-full bg-primary -bottom-0'/>
									}
								</TabsTrigger>
							</div>
						)) }
					</TabsList>
					<div>
						{ articleData.map((it, id) => {
							return (
								<TabsContent
									key={ id }
									value={ `tab-${id}` }
								>
									{
										isMobile ?
											showAllTabs ? renderItem(it.list) : renderItem(it.list.slice(0, 3)) :
											showAllTabs ? renderItem(it.list) : renderItem(it.list.slice(0, 4))
									}
									{
										it.list.length > 3 &&
										<button
											className='btn-cta-landing group btn-primary px-9 md:hidden w-fit absolute -bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'
											onClick={ () => setShowAllTabs(!showAllTabs) }>
											<span className='text-btn-cta-landing'>
												{ showAllTabs ? 'View Less' : btnRight }
											</span>
										</button>
									}
									{
										it.list.length > 3 && isMobile && !showAllTabs &&
										<div className='bg-gradient-to-t from-grey-background/90 to-grey-background/0 absolute -bottom-5 z-10 w-full h-[131px]' />
									}
								</TabsContent>
							);
						}) }
					</div>
				</Tabs>
			</div>
		</div>
	);
};

const renderItem = (data : Post[]) => {
	return (
		<div className='w-full grid grid-cols-1 md:grid-cols-4 gap-[10px] md:gap-[18px] pt-[30px]'>
			{ data.map((items, id) => {
				return (
					<Link
						href={ `/blog/${ items.slug }` }
						key={ id }
						className='relative bg-white rounded-lg md:rounded-2xl overflow-hidden flex flex-row md:flex-col max-md:items-center max-md:p-5 max-md:space-x-[9px]'
					>
						<div>
							<div className='relative md:h-[254px] w-[74px] h-[74px] max-md:rounded-lg overflow-hidden md:w-full'>
								<Image
									src={ items.hero.media.url ?? '' }
									fill
									className='object-cover object-center hover:scale-105 transition-all duration-300 ease-in-out'
									alt={ items.title }
								/>
							</div>
						</div>
						<div className='flex flex-col text-start md:p-5'>
							<p className='text-grey-primary font-BRSonoma text-xs'>{ items.hero.categories?.title }</p>
							<p className='text-primary font-Poppins text-base font-medium -tracking-[0.64px] leading-5 md:leading-6'>{ items.title }</p>
						</div>
					</Link>
				);
			}) }
		</div>
	);
};

export default Topics;