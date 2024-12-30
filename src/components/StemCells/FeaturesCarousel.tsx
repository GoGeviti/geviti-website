'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import { numberWithinRange } from '@/lib/numberWithinRange';

import { FeatureContent } from './Features';

const TWEEN_FACTOR_BASE = 0.52;

type FeaturesCarouselProps = {
  features: {
    name: string;
    image: string;
    description: string;
  }[];
};

const FeaturesCarousel: React.FC<FeaturesCarouselProps> = ({ features }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'center',
		loop: true,
		skipSnaps: true,
		dragFree: false,
	});

	const tweenFactor = useRef(0);
	const tweenNodes = useRef<HTMLElement[]>([]);

	const setTweenNodes = useCallback((api: EmblaCarouselType): void => {
		tweenNodes.current = api.slideNodes().map(slideNode => {
			return slideNode.querySelector('.stem-cells-features') as HTMLElement;
		});
	}, []);

	const setTweenFactor = useCallback((api: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
	}, []);

	const tweenScale = useCallback(
		(api: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = api.internalEngine();
			const scrollProgress = api.scrollProgress();
			const slidesInView = api.slidesInView();
			const isScrollEvent = eventName === 'scroll';

			api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress;
				const slidesInSnap = engine.slideRegistry[snapIndex];

				slidesInSnap.forEach(slideIndex => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach(loopItem => {
							const target = loopItem.target();

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target);

								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress);
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress);
								}
							}
						});
					}

					const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
					const scale = numberWithinRange(tweenValue, 0.9, 1).toString();
					const opacity = numberWithinRange(tweenValue, 0.5, 1).toString();

					const tweenNode = tweenNodes.current[slideIndex];
					if (tweenNode) {
						tweenNode.style.transform = `scale(${scale})`;
						tweenNode.style.opacity = opacity;
					}
				});
			});
		},
		[]
	);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenNodes(emblaApi);
		setTweenFactor(emblaApi);
		tweenScale(emblaApi);

		emblaApi
			.on('reInit', setTweenNodes)
			.on('reInit', setTweenFactor)
			.on('reInit', tweenScale)
			.on('scroll', tweenScale)
			.on('slideFocus', tweenScale);

		return () => {
			emblaApi
				.off('reInit', setTweenNodes)
				.off('reInit', setTweenFactor)
				.off('reInit', tweenScale)
				.off('scroll', tweenScale)
				.off('slideFocus', tweenScale);
		};
	}, [emblaApi, setTweenNodes, setTweenFactor, tweenScale]);

	return (
		<div className='w-full font-Poppins'>
			<div
				className='overflow-hidden'
				ref={ emblaRef }>
				<div className='flex touch-pan-y'>
					{ features.map((feature, featureIdx) => (
						<div
							key={ feature.name }
							className='flex-[0_0_78.4%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_55%]'
							style={ {
								transform: 'translate3d(0, 0, 0)',
							} }
						>
							<div className='h-full flex items-center'>
								<div
									className='stem-cells-features p-[3px] relative rounded-20px bg-blend-screen'
									style={ {
										background:
                      'linear-gradient(0deg, #212261, #212261), radial-gradient(47.54% 47.54% at 50.14% 0%, #743DF2 0%, rgba(18, 18, 53, 0) 100%)',
									} }
								>
									<div
										className='bg-blend-screen rounded-[19px] p-6 text-white'
										style={ {
											background:
                        'radial-gradient(117.16% 161.33% at 50% 23.87%, #2D2E83 0%, #212261 18%, #131337 43%, #0B0F26 66%, #0B0F26 86%, #0B0F26 100%)',
										} }
									>
										<FeatureContent
											feature={ feature }
											index={ featureIdx } />
									</div>
								</div>
							</div>
						</div>
					)) }
				</div>
			</div>
		</div>
	);
};

export default FeaturesCarousel;
