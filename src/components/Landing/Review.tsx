'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import { testimonials } from '@/constant/data/review'

import CustomLink from '../CustomLink'
import { ChevronRight } from '../Icons'

import { TestimonialCard } from './TestimonialCard'

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
				<div className='px-4 flex lg:items-start justify-between max-lg:flex-col max-lg:gap-3.5 lg:px-16'>
					<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
            We are trusted by <br/><span className='text-grey-primary'>some amazing people</span>
					</h3>
					<CustomLink
						href='/testimonials'
						className='flex items-center gap-2 text-primary font-medium text-sm group relative after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:bg-primary after:transition-all after:duration-300 after:w-0 hover:after:w-full after:-translate-x-1/2 after:origin-center'>
						<span>See more testimonials</span>
						<ChevronRight className='transition-transform group-hover:translate-x-1'/>
					</CustomLink>
				</div>
				<div className='mt-6 lg:mt-14'>
					<div
						className='overflow-hidden'
						ref={ emblaRef }>
						<div className='flex max-lg:px-4 touch-pan-y'>
							{ testimonials.map((testimonial, index) => (
								<div
									key={ index }
									className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_55%]'
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