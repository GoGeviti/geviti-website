'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import dynamic from 'next/dynamic';

const PopoverPills = dynamic(() => import('./PopoverPills'), {
	ssr: false,
});

type FeatureItem = {
  title: string;
  description: string;
};

type FeatureList = {
  id: string;
  reverse?: boolean;
  list: FeatureItem[];
};

type CarouselProps = {
  slides: FeatureItem[];
  direction: 'forward' | 'backward';
};

const Carousel: React.FC<CarouselProps> = ({ slides, direction }) => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [
		AutoScroll({
			playOnInit: true,
			stopOnMouseEnter: true,
			stopOnInteraction: false,
			direction,
			speed: 1,
		}),
	]);
	const duplicateSlides = Array(6)
		.fill([...slides])
		.flat();

	return (
		<div
			className='overflow-hidden -my-[30px] py-[30px]'
			ref={ emblaRef }>
			<div
				style={
          {
          	'--slide-spacing-infinite-moving-features': '23px',
          } as React.CSSProperties
				}
				className='flex touch-pinch-zoom touch-pan-y [margin-left:calc(var(--slide-spacing-infinite-moving-features)*-1)]'
			>
				{ duplicateSlides.map((detail, index) => (
					<div
						className='min-w-0 flex flex-none [padding-left:var(--slide-spacing-infinite-moving-features)]'
						style={ {
							transform: 'translate3d(0, 0, 0)',
						} }
						key={ index }
					>
						<PopoverPills item={ detail } />
					</div>
				)) }
			</div>
		</div>
	);
};

type InfiniteMovingFeaturesProps = {
  list: FeatureList[];
};

const InfiniteMovingFeatures: React.FC<InfiniteMovingFeaturesProps> = ({
	list,
}) => {
	return (
		<div className='flex flex-col gap-[30px]'>
			{ list.map(slide => (
				<Carousel
					key={ slide.id }
					slides={ slide.list }
					direction={ slide.reverse ? 'backward' : 'forward' }
				/>
			)) }
		</div>
	);
};

export default InfiniteMovingFeatures;
