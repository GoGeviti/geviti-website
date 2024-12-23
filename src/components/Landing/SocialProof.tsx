'use client'
import React, { useEffect, useState } from 'react'
import Autoscroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import { StarIcon } from '../Icons'

interface TestimonialCardProps {
	rating: number
	text: string
	author: {
		name: string
		title: string
		image: string
	}
}

const defaultTestimonials: TestimonialCardProps[] = [
	{
		rating: 5,
		text: 'Everyone with whom I have interacted at Geviti has been professional and personable, and they seem genuinely concerned about creating an optimal healthcare outcome for their clients.',
		author: {
			name: 'Kurt Mechelke',
			title: 'Doctor of Chiropractic',
			image: '/images/landing/social-01.png'
		}
	},
	{
		rating: 5,
		text: 'Aside from the convenience of this platform, I’ve been extremely impressed with the overall approach to health and fitness from my health coach Sharon.',
		author: {
			name: 'Joe Kennedy',
			title: 'Business Owner',
			image: '/images/landing/social-02.png'
		}
	},
	{
		rating: 5,
		text: 'Since starting on my custom Longeviti Blend, I’ve not only been waking up before my alarm, but I’ve also had some of my best workouts in years',
		author: {
			name: 'Cole Matheis',
			title: 'Senior Strategy Consultant',
			image: '/images/landing/social-03.png'
		}
	},
	{
		rating: 5,
		text: 'I love that I get to meet with the doctor online and get personalized care rather than having to go into an office.',
		author: {
			name: 'Cathy Fougnies',
			title: 'Mother & Grandmother',
			image: '/images/landing/social-04.png'
		}
	},
	{
		rating: 5,
		text: 'As someone who used to struggle with constant fatigue, low energy, and poor sleep, I can honestly say that Geviti has been a life-changing experience.',
		author: {
			name: 'Mark Lovelady',
			title: 'Business Operations Manager',
			image: '/images/landing/social-05.png'
		}
	},
	{
		rating: 5,
		text: 'The supplement packets are wonderful for traveling and make daily routine hassle free and simple. Geviti is a great company and I highly recommend for all your wellness needs!',
		author: {
			name: 'Casie Messer',
			title: 'Mother & Grandmother',
			image: '/images/landing/social-06.png'
		}
	},
]

const TestimonialCard = React.memo(({ rating, text, author }: TestimonialCardProps) => {
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
				{
					author.image && (
						<div className='flex items-center overflow-hidden justify-center border rounded-full w-10 h-10'>
							<Image
								src={ author.image }
								alt={ author.name }
								width={ 40 }
								height={ 40 }
								className='rounded-full'
								loading='lazy'
							/>
						</div>
					)
				}
				<div className='flex flex-col'>
					<div className='body-small text-primary'>{ author.name }</div>
					<div className='text-sm text-grey-primary'>{ author.title }</div>
				</div>
			</div>
		</div>
	)
})

TestimonialCard.displayName = 'TestimonialCard'

interface SocialProofProps {
	testimonials?: TestimonialCardProps[]
}

const SocialProof = ({ testimonials = defaultTestimonials }: SocialProofProps) => {
	const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)
	
	const [emblaRef] = useEmblaCarousel({
		align: 'center',
		loop: true,
		skipSnaps: false,
		dragFree: true
	},
	[
		Autoscroll({
			stopOnInteraction: false,
			speed: 0.5,
			playOnInit: autoScrollEnabled,
		})
	]
	)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setAutoScrollEnabled(entry.isIntersecting)
			},
			{ threshold: 0.1 }
		)

		const element = document.querySelector('.social-proof-container')
		if (element) {
			observer.observe(element)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<div className='px-3 font-Poppins mb-6'>
			<div className='bg-white rounded-[19px] py-16 overflow-hidden social-proof-container'>
				<div className='px-3 lg:px-16'>
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

export default React.memo(SocialProof)