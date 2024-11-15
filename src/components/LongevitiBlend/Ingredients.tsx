'use client';
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import longevitiBlendData from '@/constant/data/longevitiBlend'

import 'swiper/css';
interface IngredientCardProps {
  image: string
  title: string
  desc: string
}

const IngredientCard = ({ image, title, desc }: IngredientCardProps) => {

	return (
		<div className='group relative'>
			<div className='w-full max-lg:shadow-card-ingredients h-[278px] lg:h-[300px] bg-primary rounded-[14px] lg:rounded-lg overflow-hidden relative'>
				<Image
					width={ 240 }
					height={ 240 }
					src={ image }
					alt={ title }
					className='object-cover w-full h-full'
				/>
				<div className='absolute max-lg:hidden bottom-0 left-0 right-0 bg-black/10 backdrop-blur-sm p-[18px]'>
					<h3 className='body-small text-center text-white'>{ title }</h3>
				</div>
				<div className='absolute max-lg:hidden inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[18px] flex flex-col items-start justify-center'>
					<h3 className='h6 text-primary'>{ title }</h3>
					<p className='body-small text-grey-primary mt-3.5'>{ desc }</p>
				</div>
			</div>
			<div className='lg:hidden mt-6'>
				<h3 className='h6 text-primary'>{ title }</h3>
				<p className='body-small text-grey-primary mt-3.5'>{ desc }</p>
			</div>
		</div>
	)
}

const Ingredients = () => {

	return (
		<React.Fragment>
			<div className='lg:px-3 lg:pt-[58px] pt-[64px]'>
				<div className='container-center'>
					<div className='text-center max-w-[470px] mx-auto flex flex-col gap-3.5'>
						<h2 className='lg:h3 h5'>Only the Best Ingredients</h2>
						<p className='body-small'>Ingredients are carefully selected and rigorously tested to ensure they meet the highest standards.</p>
					</div>
					
					{ /* Grid container split into two rows */ }
					<div className='flex max-lg:hidden flex-col gap-4 mt-8'>
						{ /* First row - 6 items */ }
						<div className='grid grid-cols-6 gap-4'>
							{ longevitiBlendData.ingredients.slice(0, 6).map((ingredient, index) => (
								<IngredientCard
									key={ index }
									{ ...ingredient }
								/>
							)) }
						</div>

						{ /* Second row - 5 items */ }
						<div className='grid grid-cols-5 gap-4'>
							{ longevitiBlendData.ingredients.slice(6).map((ingredient, index) => (
								<IngredientCard
									key={ index }
									{ ...ingredient }
								/>
							)) }
						</div>
					</div>

				</div>
			</div>
			{ /* Mobile */ }
			<div className='mt-16 lg:hidden'>
				<Swiper
					slidesPerView={ 4 }
					breakpoints={ {
						0: {
							slidesPerView: 1.4,
							centeredSlidesBounds: true,
							spaceBetween: 24,
							// slidesOffsetBefore: 16,
							slidesOffsetAfter: 16,
							allowTouchMove: true,
							centeredSlides: true,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 24,
							allowTouchMove: false,
						},
					} }
					spaceBetween={ 24 }
					slidesOffsetAfter={ 16 }
				>
					{ longevitiBlendData.ingredients.map((item, idx) => {
						return (
							<SwiperSlide
								className={ idx === 0 ? 'pl-4' : '' }
								key={ idx }>
								<IngredientCard
									key={ idx }
									{ ...item }/>
							</SwiperSlide>
						);
					}) }
				</Swiper>
			</div>
		</React.Fragment>
	)
}

export default Ingredients
