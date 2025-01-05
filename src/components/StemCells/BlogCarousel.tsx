'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';
import { numberWithinRange } from '@/lib/numberWithinRange';

import SectionAnimate from './SectionAnimate';

const posts = [
	{
		id: 1,
		title: 'Lorem ipsum dolor sit amet consectetur.',
		description:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas nibh massa diam sapien fusce. Nisl tortor turpis maecenas scelerisque aenean sem amet et',
		image: '/images/stem-cells/blog/blog-1.webp',
		date: '02 Dec 2024',
		totalRead: '15 mins',
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor sit amet consectetur.',
		description:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas nibh massa diam sapien fusce. Nisl tortor turpis maecenas scelerisque aenean sem amet et',
		image: '/images/stem-cells/blog/blog-2.webp',
		date: '02 Dec 2024',
		totalRead: '15 mins',
	},
	{
		id: 3,
		title: 'Lorem ipsum dolor sit amet consectetur.',
		description:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas nibh massa diam sapien fusce. Nisl tortor turpis maecenas scelerisque aenean sem amet et',
		image: '/images/stem-cells/blog/blog-3.webp',
		date: '02 Dec 2024',
		totalRead: '15 mins',
	},
];

const TWEEN_FACTOR_BASE = 0.84;

const BlogCarousel = () => {
	const [hovered, setHovered] = useState<number | null>(null);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		loop: true,
	});
	const tweenFactor = useRef(0);

	const setTweenFactor = useCallback((emblaApiCb: EmblaCarouselType) => {
		tweenFactor.current =
      TWEEN_FACTOR_BASE * emblaApiCb.scrollSnapList().length;
	}, []);

	const tweenOpacity = useCallback(
		(emblaApiCb: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApiCb.internalEngine();
			const scrollProgress = emblaApiCb.scrollProgress();
			const slidesInView = emblaApiCb.slidesInView();
			const isScrollEvent = eventName === 'scroll';

			emblaApiCb.scrollSnapList().forEach((scrollSnap, snapIndex) => {
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
					const opacity = numberWithinRange(tweenValue, 0.5, 1).toString();
					emblaApiCb.slideNodes()[slideIndex].style.opacity = opacity;
				});
			});
		},
		[]
	);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenFactor(emblaApi);
		tweenOpacity(emblaApi);
		emblaApi
			.on('reInit', setTweenFactor)
			.on('reInit', tweenOpacity)
			.on('scroll', tweenOpacity)
			.on('slideFocus', tweenOpacity);
	}, [emblaApi, tweenOpacity]);

	return (
		<SectionAnimate
			by='section'
			animation='fadeIn'
			whileInView='show'
			initial='hidden'
			exit='exit'
			viewport={ { once: true, amount: 0.5 } }
		>
			<div
				className='overflow-hidden'
				ref={ emblaRef }>
				<div className='lg:container-center flex lg:grid lg:grid-cols-3 lg:justify-center h-full flex-nowrap lg:gap-x-5 max-lg:touch-pan-y max-lg:touch-pinch-zoom scrolling-touch scroll-smooth max-lg:ml-px'>
					{ posts.map((post, index) => (
						<BlogContent
							key={ post.id }
							post={ post }
							index={ index }
							hovered={ hovered }
							setHovered={ setHovered }
						/>
					)) }
				</div>
			</div>
		</SectionAnimate>
	);
};

type BlogContentProps = {
  post: {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    totalRead: string;
  };
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
};

const BlogContent: React.FC<BlogContentProps> = ({
	post,
	index,
	hovered,
	setHovered,
}) => {
	return (
		<article
			onMouseEnter={ () => setHovered(index) }
			onMouseLeave={ () => setHovered(null) }
			className='min-w-0 flex flex-none max-lg:pl-[15px]'
			style={ {
				transform: 'translate3d(0, 0, 0)',
			} }
		>
			<div
				className={ clsxm(
					'group cursor-pointer flex flex-col items-start justify-between h-full w-[calc(100vw-76.11px)] sm:w-[413px] lg:w-full relative transition-all duration-300 ease-out',
					hovered !== null &&
            hovered !== index &&
            'lg:blur-[2px] lg:scale-[0.98]'
				) }
			>
				<div className='relative w-full'>
					<div className='aspect-[299/221] sm:aspect-[413/305] w-full relative overflow-hidden rounded-lg'>
						<Image
							alt={ post.title }
							src={ post.image }
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							fill
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='max-w-xl flex flex-col mt-[30px] lg:mt-[41px]'>
						<div className='flex items-start justify-between gap-5'>
							<h3 className='text-[13px]/[141%] sm:text-lg/[141%] font-medium text-white -tracking-0.04em'>
								{ post.title }
							</h3>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='25'
								height='26'
								viewBox='0 0 25 26'
								fill='none'
								className='flex-shrink-0'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M18.0192 15.3338C18.0192 15.5459 18.104 15.7298 18.2384 15.8641C18.3727 15.9985 18.5636 16.0904 18.7687 16.0833C19.1788 16.0833 19.5182 15.7439 19.5182 15.3338L19.5182 6.74953C19.5182 6.33941 19.1788 6 18.7687 6H10.1844C9.7743 6 9.43489 6.33941 9.43489 6.74953C9.43489 7.15966 9.7743 7.49907 10.1844 7.49907L16.9585 7.49907L6.2175 18.24C5.92758 18.5299 5.92758 19.0108 6.2175 19.3007C6.50741 19.5906 6.98824 19.5906 7.27816 19.3007L18.0192 8.55967V15.3338Z'
									fill='#00A0EA'
								/>
							</svg>
						</div>
						<p className='mt-2.5 lg:mt-3.5 line-clamp-3 text-[11px]/[143%] sm:text-sm/5 text-grey-primary'>
							{ post.description }
						</p>
					</div>
				</div>
				<div className='relative mt-2.5 lg:mt-3.5 text-[9px]/[203%] sm:text-xs/6 text-grey-primary'>
					{ post.date } • { post.totalRead } read
				</div>
			</div>
		</article>
	);
};

export default BlogCarousel;
