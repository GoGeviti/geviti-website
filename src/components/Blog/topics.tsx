'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import Image from 'next/image';

import { blogData } from '@/constant/data';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

const articleData = blogData.topics;

interface TopicsProps {
  image: string;
  pretitle: string;
  title: string;
}

const Topics: React.FC = () => {
	const [showAllTabs, setShowAllTabs] = useState(false);
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.md;

	return (
		<div className='container-center mx-auto w-full relative mt-20'>
			<div className='w-full '>
				<div className='flex justify-center md:justify-between items-center'>
					<p className='text-primary font-Poppins text-4xl -tracking-[1.44px] text-center'>{ articleData.title }</p>
					<div
						className='btn-cta-landing group btn-primary px-9 md:block hidden'
					>
						<span className='text-btn-cta-landing'>
							{ articleData.btnRight }
						</span>
					</div>
				</div>
				<Tabs
					className='flex flex-col'
					defaultValue='tab-0'
				>
					<TabsList
						className='shrink-0 flex border-b border-primary/10 md:space-x-[56px] max-md:justify-between'
						aria-label={ articleData.title }>
						{ articleData.tab.map((items, id) => (
							<TabsTrigger
								key={ id }
								className='text-[15px] pb-[9px] pt-[25px] leading-none text-primary select-none hover:font-bold data-[state=active]:font-bold data-[state=active]:focus:relative data-[state=active]:focus:border-b data-[state=active]:focus:border-primary outline-none cursor-default'
								value={ `tab-${id}` }
							>
								{ items.name }
							</TabsTrigger>
						)) }
					</TabsList>
					<div>
						{ articleData.tab.map((it, id) => {
							return (
								<TabsContent
									key={ id }
									value={ `tab-${id}` }
								>
									
									{ !isMobile ? renderItem(it.list) : showAllTabs ? renderItem(it.list) : renderItem(it.list.slice(0, 3)) }
									{
										it.list.length > 3 &&
										<div
											className='btn-cta-landing group btn-primary px-9 md:hidden w-fit absolute -bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'
											onClick={ () => setShowAllTabs(!showAllTabs) }>
											<span className='text-btn-cta-landing'>
												{ showAllTabs ? 'View Less' : articleData.btnRight }
											</span>
										</div>
									}
									{
										!showAllTabs &&
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

const renderItem = (data : TopicsProps[]) => {
	return (
		<div className='w-full grid grid-cols-1 md:grid-cols-4 gap-[10px] md:gap-[30px] pt-[30px]'>
			{ data.map((items, id) => {
				return (
					<div
						key={ id }
						className='relative bg-white rounded-3xl flex flex-row md:flex-col max-md:items-center max-md:p-5 max-md:space-x-[9px]'
					>
						<Image
							src={ items.image }
							width={ 253 }
							height={ 253 }
							className='object-cover w-[74px] md:w-full h-[74px] md:h-auto max-md:rounded-md'
							alt={ items.title }
						/>
						<div className='flex flex-col text-start md:p-5'>
							<p className='text-grey-primary font-BRSonoma text-xs'>{ items.pretitle }</p>
							<p className='text-primary font-Poppins text-base font-medium -tracking-[0.64px] leading-5 md:leading-6'>{ items.title }</p>
						</div>
					</div>
				);
			}) }
		</div>
	);
};

export default Topics;