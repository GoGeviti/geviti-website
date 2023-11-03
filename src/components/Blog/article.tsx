'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { blogData } from '@/constant/data';

import { ArrowEmail } from '../Icons';

import { SliderArticles } from '.';

const articleData = blogData.article;

const Articles: React.FC = () => {
	const [hoveredItem, setHoveredItem] = useState(1);

	const handleMouseEnter = (id:number) => {
		setHoveredItem(id);
	};

	// const handleMouseLeave = () => {
	// 	setHoveredItem(1);
	// };
	return (
		<div className='w-full relative my-20'>
			<div className='container-center mx-auto  w-full'>
				<p className='text-primary font-Poppins text-4xl -tracking-[1.44px] text-center'>{ articleData.title }</p>
				<div className='w-full justify-center gap-[30px] relative mt-5 md:flex hidden'>
					{ articleData.list.map((items, id) => {
						const isHovered = hoveredItem === id;
						return (
							<div
								key={ id }
								className='relative'
								onMouseEnter={ () => handleMouseEnter(id) }
								// onMouseLeave={ handleMouseLeave }
							>
								<Image
									src={ items.image }
									width={ 270 }
									height={ 500 }
									className={ `object-cover transition-all ease-in-out duration-300 !h-[500px] ${isHovered ? 'w-[500px] ' : 'w-[320px]'} rounded-[20px]` }
									alt={ items.title }
								/>
								<div className='absolute z-10 left-0 bottom-0 flex flex-col text-start px-[30px] py-[26px]'>
									<p className={ `text-[#CDDCE2] font-BRSonoma ${isHovered ? 'text-base' : 'text-sm'}` }>{ items.pretitle }</p>
									<p className={ `text-white font-Poppins  ${isHovered ? 'text-[27px] -tracking-[1.08px]' : 'text-[22px] -tracking-[0.88px]'}` } >{ items.title }</p>
								</div>
								<ArrowEmail className='absolute top-0 right-0 w-[45px] h-[45px] m-5'/>
							</div>
						);
					}) }
				</div>
			</div>
			<div className='md:hidden'>
				<SliderArticles data={ articleData.list }/>
			</div>
		</div>
	);
};

export default Articles;