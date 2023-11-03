'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { articleData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { Quote } from '../Icons';
const article = articleData.news;

const News: React.FC = () => {

	return (
		<div className='container-center mx-auto w-full relative mt-10 md:mt-[70px] mb-[70px]'>
			<div className='w-full '>
				<div className='w-full flex  justify-center md:justify-between items-center'>
					<div className='flex justify-start items-center space-x-2'>
						{ article.tag.map((items, id) => {
							return (
								<div
									key={ id }
									className='border rounded-[10px] border-primary/10 bg-primary/5 px-[9px] py-[5px]'>
									<p className='font-Poppins text-primary text-sm font-medium -tracking-[0.56px]'>{ items }</p>
								</div>
							);
						}) }
					</div>
					<div className='items-center gap-4 md:flex hidden'>
						{ article.sosmed.map(item => (
							<CustomLink
								key={ item.alt }
								href={ item.url }
								externalLink
								aria-label={ item.alt }
							>
								<div className='relative overflow-hidden w-4 sm:w-[30px] h-4 sm:h-[30px]'>
									<Image
										src={ item.image }
										alt={ item.alt }
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										fill
										loading='lazy'
									/>
								</div>
							</CustomLink>
						)) }
					</div>
				</div>
				<div className='bg-primary/[0.03] border-primary border-l-2 rounded-tr-[20px] rounded-br-[20px] px-5 py-[10px] mt-10 md:mt-[70px] relative'>
					<p className='font-Poppins text-primary text-xs md:text-base italic font-semibold leading-6 md:leading-[33px]'>{ article.quote.text }</p>
					<p className='font-Poppins text-primary text-xs md:text-base italic font-semibold leading-6 md:leading-[33px] mt-[10px] md:mt-5'>{ article.quote.author }</p>
					<Quote className='absolute bottom-0 right-0 m-[30px] md:m-5'/>
				</div>
				<div className=''>
					{ article.news.map((item, id) => {
						return (
							<div key={ id }>
								<p className='text-primary font-Poppins text-[26px] font-semibold leading-[33px] mb-[10px] md:mb-5 mt-[30px] md:mt-[70px]'>{ item.title }</p>
								{ item.image &&
                  <div className='w-full h-[350px] md:h-[340px] relative'>
                  	<Image
                  		src={ item.image }
                  		alt={ item.title }
                  		fill
                  		className='object-cover rounded-[30px]'
                  		objectPosition='center'
                  	/>
                  </div> }
								<div
									className='text-primary font-Poppins text-base md:text-xl leading-[30px] md:leading-10 -tracking-[0.64px] md:-tracking-[0.8px] mt-5 md:mt-[30px]'
									dangerouslySetInnerHTML={ { __html: item.desc } } />
								{ item.imageRight && item.textLeft &&
								<div className='flex flex-col md:flex-row gap-[30px] mt-[30px] items-center'>
									{ item.imageRight &&
                  <div className='w-full md:w-[60%] h-[280px] relative'>
                  	<Image
                  		src={ item.imageRight }
                  		alt={ item.title }
                  		fill
                  		className='object-cover rounded-[30px]'
                  		objectPosition='center'
                  	/>
                  </div> }
									{ item.textLeft &&
									<div
										className='md:w-[40%] text-primary font-Poppins text-base md:text-xl leading-[30px] md:leading-10 -tracking-[0.64px] md:-tracking-[0.8px]'
										dangerouslySetInnerHTML={ { __html: item.textLeft } } /> }
								</div> }
							</div>
						);
					}) }
         
				</div>
			</div>
		</div>
	);
};
export default News;