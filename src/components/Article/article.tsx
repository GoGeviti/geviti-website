'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { articleData,  } from '@/constant/data';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

const article = articleData.article;

interface ArticlesProps {
	pretitle: string;
	title: string;
  image: string;
}

const Articles: React.FC = () => {
	const [showAllTabs, setShowAllTabs] = useState(false);
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.md;

	return (
		<div className='container-center mx-auto w-full relative'>
			<div className='w-full border-t border-primary/10  pt-[70px] '>
				<div className='flex justify-center md:justify-between items-center'>
					<p className='text-primary font-Poppins text-4xl -tracking-[1.44px] text-center'>{ article.title }</p>
					<div
						className='btn-cta-landing group btn-primary px-9 md:block hidden'
					>
						<span className='text-btn-cta-landing'>
							{ article.btn }
						</span>
					</div>
				</div>
				<div className='relative'>
					{ !isMobile ? renderItem(article.list) : showAllTabs ? renderItem(article.list) : renderItem(article.list.slice(0, 3)) }
					<div
						className='btn-cta-landing group btn-primary px-9 md:hidden w-fit absolute -bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'
						onClick={ () => setShowAllTabs(!showAllTabs) }>
						<span className='text-btn-cta-landing'>
							{ showAllTabs ? 'View Less' : article.btn }
						</span>
					</div>
					{
						!showAllTabs &&
						<div className='md:hidden bg-gradient-to-t from-grey-background/90 to-grey-background/0 absolute -bottom-5 z-10 w-full h-[131px]' />
					}
				</div>
			</div>
		</div>
	);
};

const renderItem = (data : ArticlesProps[]) => {
	return (
		<div className='w-full grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[30px] pt-[30px]'>
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

export default Articles;