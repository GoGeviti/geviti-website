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
			title: 'TV Host for ABC’s “Extreme Weight Loss”',
			image: '/images/landing/review-02.webp'
		}
	},
	{
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Brian Pruett',
			title: 'Fitness Influencer ',
			image: '/images/landing/review-05.webp'
		}
	},
	{
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Dr. Jeremy London',
			title: 'Cardiovascular Surgeon, Medical Advisor',
			image: '/images/landing/review-03.webp'
		}
	},
	{
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Dr. Joy Kong',
			title: 'Stem Cell “Doctor of the Decade”',
			image: '/images/landing/review-04.webp'
		}
	},
	{
		text: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
		author: {
			name: 'Alex Clark',
			title: 'Host of top podcast “Culture Apothecary”',
			image: '/images/landing/review-01.webp'
		}
	},
]

function TestimonialCard({ text, author }: TestimonialCardProps) {
	
	return (
		<div className='testimonial-card bg-[#FAFAFA] flex flex-col lg:flow-row items-center gap-6 relative px-5 py-[30px] rounded-[20px]'>
			<div className='h-[320px] overflow-hidden flex-shrink-0 w-full lg:w-[292px] rounded-xl flex items-center justify-center'>
				<Image
					width={ 292 }
					height={ 320 }
					className='w-full h-full object-top object-cover'
					alt='person'
					src={ author.image }
				/>
			</div>
			<div className='lg:hidden self-start'>
				<QuoteBlue/>
			</div>
			<div>
				<h5 className='h5 text-primary'>{ text }</h5>
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
		<div className='lg:px-3 font-Poppins mb-6'>
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
									className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_50%]'
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