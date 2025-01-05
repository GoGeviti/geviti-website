import React from 'react'
import Image from 'next/image';

import { Post } from '@/payload/payload-types';

import Navbar from '../Navbar/Landing';

const HeroDetail = ({ post, readingTime } : { post: Post, readingTime: number }) => {
	return (
		  <div className='lg:px-3 lg:py-15px overflow-hidden'>
			<Navbar theme='light' />
			<div className='container-center min-h-screen pt-[40%] lg:pt-[13%]'>
				<h1 className='h5 lg:h2 max-w-[953px]'>{ post.title }</h1>
				<p className='body-extra-small mt-6 max-w-[840px]'>In the quest for a longer, healthier life, we often look to exercise, nutrition, and mental well-being as primary contributors to our overall health. While these are undeniably important, there’s another critical piece of the puzzle that often gets overlooked—bloodwork and biomarker testing. This powerful tool can unlock insights into your body’s internal health, helping you optimize your lifestyle and prevent chronic illnesses. Here&apos;s why regular bloodwork and biomarker monitoring are essential for achieving longevity.</p>
				<div className='flex items-center gap-3.5 mt-5'>
					<div className='flex text-[10px] items-center rounded-full px-3 py-2 text-green-alert bg-[#F6FFFC] border border-[#DDF7ED]   ' >
            Topic - { post.hero.categories?.title }
					</div>
					<p className='body-extra-small text-grey-primary'>
						<span>{ new Date(post.updatedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) }</span>
						<span> • </span>
						<span>{ readingTime } min read</span>
					</p>
				</div>
				<div className='h-[569px] w-full mt-14 rounded-[19px] relative overflow-hidden'>
					<Image
						src={ post.hero?.media?.url ?? '' }
						alt={ post.hero?.media?.alt ?? 'Hero Image' }
						// layout='fill'
						height={ 569 }
						width={ 1024 }
						priority
						placeholder='blur'
						blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg=='
						className='w-full h-full object-center object-cover'
					/>
				</div>
			</div>
		</div>
	)
}

export default HeroDetail