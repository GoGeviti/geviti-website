'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';
import { Post } from '@/payload/payload-types';

// interface ArticleProps {
// 	pretitle: string;
// 	title: string;
//   image: string;
// }

interface ArticlesProps {
	list?: Post[]
	title:string;
	btn: string;
}

const Articles: React.FC<ArticlesProps> = ({ list, title, btn }) => {
	const [showAllTabs, setShowAllTabs] = useState(false);
	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.md;

	return (
		<div className='container-center mx-auto w-full relative'>
			<div className='w-full pt-[70px] '>
				<div className='flex justify-center md:justify-between items-center'>
					<p className='text-primary font-Poppins text-4xl -tracking-[1.44px] text-center'>{ title }</p>
					<div
						className='btn-cta-landing group btn-primary px-9 md:block hidden'
					>
						<span className='text-btn-cta-landing'>
							{ btn }
						</span>
					</div>
				</div>
				<div className='relative'>
					{ !isMobile ? renderItem(list) : showAllTabs ? renderItem(list) : renderItem(list?.slice(0, 3)) }
					<div
						className='btn-cta-landing group btn-primary px-9 md:hidden w-fit absolute -bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'
						onClick={ () => setShowAllTabs(!showAllTabs) }>
						<span className='text-btn-cta-landing'>
							{ showAllTabs ? 'View Less' : btn }
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

const renderItem = (data? : Post[]) => {
	return (
		<div className={ clsxm('w-full grid grid-cols-1 gap-[10px] md:gap-[30px] pt-[30px]', data?.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4') }>
			{ data?.map((items, id) => {
				return (
					<Link
						href={ `/blog/${ items.id }` }
						key={ id }
						className='relative bg-white rounded-3xl flex flex-row md:flex-col max-md:items-center max-md:p-5 max-md:space-x-[9px]'
					>
						<div>
							<div className='relative md:h-[254px] w-[74px] h-[74px] max-md:rounded-lg max-md:overflow-hidden md:w-full'>
								<Image
									src={ items.hero.media.url ?? '' }
									fill
									className='object-cover object-center'
									alt={ items.hero.media.alt ?? '' }
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

export default Articles;