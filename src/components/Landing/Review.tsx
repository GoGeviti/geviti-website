'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import { ChevronRight, QuoteBlue } from '../Icons'

interface TestimonialCardProps {
  text: string
  author: {
    name: string
    title: string
    image: string
  }
}

const testimonials: TestimonialCardProps[] = [
	{
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Chris Powell',
			title: 'TV Host for ABC’s “Extreme Weight Loss” ',
			image: '/images/landing/review-01.webp'
		}
	},
	{
		text: 'I highly recommend every woman entering in their midlife years get this done. It’s such a fantastic investment in yourself and your health!',
		author: {
			name: 'Chrissa Benson',
			title: 'Women’s Exercise Specialist',
			image: '/images/landing/review-02.webp'
		}
	},
	{
		text: 'Since starting The Longeviti Blend I have noticed improvement in my recovery and energy along with less fatigue.',
		author: {
			name: 'Brandon Fougnies',
			title: 'Elite Personal Trainer',
			image: '/images/landing/review-03.webp'
		}
	},
	{
		text: 'I had dealt with some hypothyroidsim, chronic stress & gut issues, now I’m able to stay on top of my hormones. I’ve loved every aspect of Geviti!',
		author: {
			name: 'Melissa-Sue Methven',
			title: 'Author of The Truth Behind the Smiles',
			image: '/images/landing/review-04.webp'
		}
	},
	{
		text: 'Just turned 50 years old and I feel amazing. I’ve really leaned on Geviti to stay optimized in my health and wellness.',
		author: {
			name: 'Ernie Meeks',
			title: 'Commercial Airline Pilot & Host of Flying With Big Ern Podcast',
			image: '/images/landing/review-05.webp'
		}
	},
	{
		text: 'From getting my blood drawn in my own home, to chatting with a doctor on zoom, to my customized supplements showing up at my door. You’ll love Geviti.',
		author: {
			name: 'Christa Treat',
			title: 'Flight Attendant',
			image: '/images/landing/review-06.webp'
		}
	},
]

function TestimonialCard({ text, author }: TestimonialCardProps) {
	
	return (
		<div className='testimonial-card bg-[#FAFAFA] flex flex-col lg:flex-row items-center gap-6 relative px-5 py-[30px] rounded-[20px]'>
			<div className='h-[302px] overflow-hidden flex-shrink-0 w-full lg:w-[277px] rounded-xl flex items-center justify-center'>
				<Image
					width={ 277 }
					height={ 302 }
					className='w-full h-full object-top object-cover'
					alt='person'
					src={ author.image }
				/>
			</div>
			<div className='lg:hidden self-start'>
				<QuoteBlue/>
			</div>
			<div>
				<h6 className='h5 text-primary'>{ text }</h6>
				<p className='mt-4 text-lg text-primary'>{ author.name }</p>
				<p className='text-lg text-grey-primary mt-1'>{ author.title }</p>
			</div>
			<div className='max-lg:hidden absolute top-5 right-5'>
				<QuoteBlue/>
			</div>
		</div>
	)
}

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)

const Review = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'center',
		loop: true,
		skipSnaps: true,
		dragFree: false
	})

	const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
	const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

	const [selectedIndex, setSelectedIndex] = React.useState(0)

	const onSelect = useCallback((api: EmblaCarouselType) => {
		setPrevBtnDisabled(!api.canScrollPrev())
		setNextBtnDisabled(!api.canScrollNext())
		setSelectedIndex(api.selectedScrollSnap())
	}, [])

	const tweenFactor = useRef(0)
	const tweenNodes = useRef<HTMLElement[]>([])

	const setTweenNodes = useCallback((api: EmblaCarouselType): void => {
		tweenNodes.current = api.slideNodes().map(slideNode => {
			return slideNode.querySelector('.testimonial-card') as HTMLElement
		})
	}, [])

	const setTweenFactor = useCallback((api: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length
	}, [])

	const tweenScale = useCallback(
		(api: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = api.internalEngine()
			const scrollProgress = api.scrollProgress()
			const slidesInView = api.slidesInView()
			const isScrollEvent = eventName === 'scroll'

			api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress
				const slidesInSnap = engine.slideRegistry[snapIndex]

				slidesInSnap.forEach(slideIndex => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach(loopItem => {
							const target = loopItem.target()

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target)

								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress)
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress)
								}
							}
						})
					}

					const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
					const scale = numberWithinRange(tweenValue, 0.9, 1).toString()
					const opacity = numberWithinRange(tweenValue, 0.2, 1).toString()

					const tweenNode = tweenNodes.current[slideIndex]
					if (tweenNode) {
						tweenNode.style.transform = `scale(${scale})`
						tweenNode.style.opacity = opacity

					}
				})
			})
		},
		[]
	)

	useEffect(() => {
		if (!emblaApi) return

		setTweenNodes(emblaApi)
		setTweenFactor(emblaApi)
		tweenScale(emblaApi)

		onSelect(emblaApi)
		emblaApi.on('select', onSelect)
		emblaApi.on('reInit', onSelect)

		emblaApi
			.on('reInit', setTweenNodes)
			.on('reInit', setTweenFactor)
			.on('reInit', tweenScale)
			.on('scroll', tweenScale)
			.on('slideFocus', tweenScale)

		return () => {
			emblaApi
				.off('reInit', setTweenNodes)
				.off('reInit', setTweenFactor)
				.off('reInit', tweenScale)
				.off('scroll', tweenScale)
				.off('slideFocus', tweenScale)
				.off('select', onSelect)
				.off('reInit', onSelect)
		}
	}, [emblaApi, setTweenNodes, setTweenFactor, tweenScale, onSelect])

	return (
		<div className='px-3 font-Poppins mb-3.5 lg:mb-6'>
			<div className='bg-white rounded-[19px] py-16 overflow-hidden'>
				<div className='px-4 lg:px-16'>
					<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
            We are trusted by <br/><span className='text-grey-primary'>some amazing people</span>
					</h3>
				</div>
				<div className='mt-6 lg:mt-14'>
					<div
						className='overflow-hidden'
						ref={ emblaRef }>
						<div className='flex max-lg:px-4 touch-pan-y'>
							{ testimonials.map((testimonial, index) => (
								<div
									key={ index }
									className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_54%]'
								>
									<div className='h-full'>
										<TestimonialCard { ...testimonial } />
									</div>
								</div>
							)) }
						</div>
						<div className='flex items-center mt-14 justify-center gap-16'>
							<button
								className='disabled:opacity-30'
								onClick={ scrollPrev }
								disabled={ prevBtnDisabled }
								aria-label='Previous slide'
							>
								<ChevronRight className='transform rotate-180 text-blue-primary' />
							</button>
							<div className='flex items-center gap-2'>
								{ testimonials.map((_, index) => (
									<button
										key={ index }
										className={ `w-2 h-2 rounded-full transition-all ${
											index === selectedIndex
												? 'bg-blue-primary w-4'
												: 'bg-grey-100'
										}` }
										onClick={ () => emblaApi?.scrollTo(index) }
										aria-label={ `Go to slide ${index + 1}` }
									/>
								)) }
							</div>
							<button
								className='disabled:opacity-30'
								onClick={ scrollNext }
								disabled={ nextBtnDisabled }
								aria-label='Next slide'
							>
								<ChevronRight className='text-blue-primary'/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review