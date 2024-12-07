'use client'
import React from 'react'
import Autoscroll from 'embla-carousel-auto-scroll'
// import { FaStar } from 'react-icons/fa'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import { StarIcon } from '../Icons'

// import Image from 'next/image'

// import clsxm from '@/helpers/clsxm'

interface TestimonialCardProps {
  rating: number
  text: string
  author: {
    name: string
    title: string
    image: string
  }
}

const testimonials: TestimonialCardProps[] = [
	{
		rating: 5,
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Alex Buckmaster',
			title: 'CEO, Cala Foods',
			image: '/images/landing/social-01.png'
		}
	},
	{
		rating: 5,
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Kenneth Allen',
			title: 'Switchboard operator',
			image: '/images/landing/social-02.png'
		}
	},
	{
		rating: 5,
		text: 'More energy, better digestion, and excellent customer service with Geviti.',
		author: {
			name: 'Kimberly Mastrangelo',
			title: 'Material scheduling',
			image: '/images/landing/social-03.png'
		}
	},
	{
		rating: 4,
		text: 'High-quality custom supplements that make a difference. I feel supported and healthier.',
		author: {
			name: 'Judith Rodriguez',
			title: 'Cost recovery technician',
			image: '/images/landing/social-04.png'
		}
	},
	{
		rating: 5,
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Dennis Callis',
			title: 'Department head',
			image: '/images/landing/social-05.png'
		}
	},
	{
		rating: 5,
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Alex Buckmaster',
			title: 'CEO, Cala Foods',
			image: '/images/landing/social-01.png'
		}
	},
	{
		rating: 5,
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Kenneth Allen',
			title: 'Switchboard operator',
			image: '/images/landing/social-02.png'
		}
	},
	{
		rating: 5,
		text: 'More energy, better digestion, and excellent customer service with Geviti.',
		author: {
			name: 'Kimberly Mastrangelo',
			title: 'Material scheduling',
			image: '/images/landing/social-03.png'
		}
	},
	{
		rating: 4,
		text: 'High-quality custom supplements that make a difference. I feel supported and healthier.',
		author: {
			name: 'Judith Rodriguez',
			title: 'Cost recovery technician',
			image: '/images/landing/social-04.png'
		}
	},
	{
		rating: 5,
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Dennis Callis',
			title: 'Department head',
			image: '/images/landing/social-05.png'
		}
	},
]

function TestimonialCard({ rating, text, author }: TestimonialCardProps) {
	
	return (
		<div className='flex flex-col h-full p-6 bg-grey-primary-light border-grey-50 rounded-[20px] border'>
			<div className='flex gap-1 mb-3.5'>
				{ [...Array(5)].map((_, i) => (
					<StarIcon
						key={ i }
						filled={ i < rating } />
				)) }
			</div>
			<p className='h6 text-primary flex-grow mb-6'>{ text }</p>
			<div className='flex items-center gap-6'>
				<div className='flex items-center overflow-hidden justify-center border rounded-full w-10 h-10'>
					<Image
						src={ author.image }
						alt={ author.name }
						width={ 40 }
						height={ 40 }
						className='rounded-full'
					/>
				</div>
				{ /* <Image
					src={ author.image }
					alt={ author.name }
					width={ 40 }
					height={ 40 }
					className='rounded-full'
				/> */ }
				<div className='flex flex-col'>
					<div className='body-small text-primary'>{ author.name }</div>
					<div className='text-sm text-grey-primary'>{ author.title }</div>
				</div>
			</div>
		</div>
	)
}

const SocialProof = () => {
	const [emblaRef] = useEmblaCarousel({
		align: 'center',
		loop: true,
		skipSnaps: false,
		dragFree: true
	},
	[
		Autoscroll({
			stopOnInteraction: false,
			speed: 1,
			playOnInit: true,
		})
	]
	)

	// const handleMouseEnter = () => {
	// 	const autoScroll = emblaApi?.plugins()?.autoScroll
	// 	if (!autoScroll) return
	// 	autoScroll.stop()
	// };

	// const handleMouseLeave = () => {
	// 	const autoScroll = emblaApi?.plugins()?.autoScroll
	// 	if (!autoScroll) return
	// 	autoScroll.play()
	// };

	return (
		<div className='px-3 font-Poppins mb-6'>
			<div className='bg-white rounded-[19px] py-16 overflow-hidden'>
				<div className='px-16'>
					<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
						What our customers <br/><span className='text-grey-primary'>say about us</span>
					</h3>
				</div>
				<div className='relative mt-16'>
					<div className='absolute inset-y-0 left-0 w-[219px] bg-[linear-gradient(90deg,#FFF_0%,rgba(255,255,255,0.00)_100%)] z-10 hidden md:block' />
					<div className='absolute inset-y-0 right-0 w-[219px] bg-[linear-gradient(270deg,#FFF_0%,rgba(255,255,255,0.00)_100%)] z-10 hidden md:block' />
					<div
						className='overflow-hidden'
						ref={ emblaRef }>
						<div className='flex touch-pan-y'>
							{ testimonials.map((testimonial, index) => (
								<div
									key={ index }
									className='flex-[0_0_100%] min-w-0 px-3 md:px-5 sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_29%]'
									// onMouseEnter={ handleMouseEnter }
									// onMouseLeave={ handleMouseLeave }
								>
									<div className='h-full'>
										<TestimonialCard { ...testimonial } />
									</div>
								</div>
							)) }
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SocialProof