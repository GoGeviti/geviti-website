'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import longevitiPanelData from '@/constant/data/longevitiPanel';
import clsxm from '@/helpers/clsxm';
import { useCarousel } from '@/hooks/embla/use-carousel';

import { TickCircle } from '../Icons';

const Ripple = dynamic(() => import('../Ripple'), {
	ssr: false,
});
const DotButton = dynamic(() => import('../CarouselDotButton'), {
	ssr: false,
});

const howItWorksData = longevitiPanelData.howItWorks;

const Membership: React.FC = () => {
	const carousel = useCarousel({
		loop: true,
		duration: 25,
		align: 'start',
	});
	const { mainRef: emblaRef } = carousel;

	const renderCardList = () => {
		return (
			<div
				className='overflow-hidden'
				ref={ emblaRef }>
				<div className='lg:container-center flex lg:grid lg:grid-cols-3 lg:justify-center h-full flex-nowrap lg:gap-x-6 max-lg:touch-pan-y max-lg:touch-pinch-zoom scrolling-touch scroll-smooth max-lg:-ml-[7px]'>
					<CardList selectedIndex={ carousel.dots.selectedIndex } />
				</div>
			</div>
		);
	};

	const renderDots = () => {
		return (
			<div className='flex flex-wrap gap-1'>
				{ carousel.dots.scrollSnaps.map((_, index) => (
					<DotButton
						key={ index }
						onClick={ () => carousel.dots.onClickDot(index) }
						selected={ carousel.dots.selectedIndex === index }
					/>
				)) }
			</div>
		);
	};

	return (
		<div className='w-full'>
			<div className='w-full container-center'>
				<div className='max-w-[648px] mx-auto flex flex-col items-center text-center gap-y-3.5'>
					<h2 className='text-2xl sm:text-3xl lg:text-4xl sm:font-medium text-primary -tracking-0.04em'>
						{ howItWorksData.title }
					</h2>
					<p className='text-grey-primary text-xs sm:text-sm !leading-5'>
						{ howItWorksData.description }
					</p>
				</div>
			</div>
			<div className='relative w-full'>
				{ renderCardList() }
				<div className='absolute bottom-[42px] lg:hidden flex w-full justify-center'>
					{ renderDots() }
				</div>
			</div>
		</div>
	);
};

export default Membership;

type CardListProps = {
  selectedIndex: number;
};

const CardList: React.FC<CardListProps> = ({ selectedIndex }) => {
	const renderResultsFrame = () => {
		return (
			<Image
				src='/images/longeviti_panel/step-3.png'
				width={ 277.54 * 3 }
				height={ 235.26 * 3 }
				alt=''
				className='absolute top-9 sm:top-[56px] left-1/2 -translate-x-1/2 w-[237px] sm:w-[277.54px] h-auto'
			/>
		);
	};

	const renderSampleFrame = () => {
		return (
			<Image
				src='/images/longeviti_panel/step-2.png'
				width={ 254 * 3 }
				height={ 284 * 3 }
				alt=''
				className='absolute-center w-[224px] sm:w-[254px] h-auto'
			/>
		);
	};

	const getRippleCircleClassName = (i: number) => {
		if (i === 0) return 'w-[41.76px] sm:w-[54.41px] bg-transparent';
		if (i === 1) return 'w-[72.53px] sm:w-[94.51px] bg-[#91FE9533]';
		return 'w-[125.11px] sm:w-[163px] bg-[#89FE8D1A]';
	};

	const renderRipples = () => {
		return (
			<div className='relative flex w-[126px] h-[126px] sm:w-[163px] sm:h-[163px] flex-col items-center justify-center overflow-hidden'>
				<div
					style={ {
						background: 'linear-gradient(180deg, #74FE7A 0%, #FFFFFF 100%)',
					} }
					className='z-10 relative overflow-hidden flex flex-col items-center justify-center whitespace-pre-wrap rounded-full w-[41.76px] lg:w-[54.41px] aspect-square'
				>
					<div className='absolute inset-0 border-[2.38px] rounded-full border-white/50' />
					<CheckIcon />
				</div>
				<Ripple
					circleClassName={ i =>
						clsxm(getRippleCircleClassName(i), '!border-0') }
				/>
			</div>
		);
	};

	const renderOrderFrame = () => {
		return (
			<>
				<div className='absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 z-10'>
					{ renderRipples() }
				</div>
				<div className='absolute top-[66px] sm:top-[86px] left-1/2 -translate-x-1/2 flex flex-col items-center'>
					<Image
						src='/images/longeviti_panel/step-1.png'
						alt=''
						width={ 168 * 3 }
						height={ 253 * 3 }
						className='w-[128.94px] sm:w-[168px] h-auto'
					/>
					<div className='mt-[13px] sm:mt-[17px]'>
						<button
							style={
                {
                	'--background-button-purchase':
                    'linear-gradient(83.34deg, #4AADF6 15.76%, #89CDFF 84.52%)',
                } as React.CSSProperties
							}
							className='focus:ring-0 focus:outline-none group relative flex'
						>
							<Link href='/pricing'>
								<span
									className='relative z-[1] group-hover:translate-y-[3px] rounded-[100px] [background:var(--background-button-purchase)] w-[128.94px] sm:w-[168px] h-[33px] sm:h-10 border border-white/20 flex items-center justify-center gap-[7px] sm:gap-2.5'
									style={ {
										boxShadow: 'inset 0px -2px 1px rgba(255, 255, 255, 0.2)',
									} }
								>
									<BagIcon />{ ' ' }
									<span
										className='text-[10.75px] leading-[15px] sm:text-sm sm:leading-5 text-white'
										style={ { textShadow: '0px 1px 2px #0D67A8' } }
									>
                    Purchase
									</span>
								</span>
								<span className='w-[128.94px] sm:w-[168px] h-[33px] sm:h-10 rounded-[100px] [background:var(--background-button-purchase)] absolute top-[3px] inset-x-0' />
							</Link>
						</button>
					</div>
				</div>
			</>
		);
	};

	const renderFrame = (id: string) => {
		if (id === 'order') return renderOrderFrame();
		if (id === 'sample') return renderSampleFrame();
		if (id === 'results') return renderResultsFrame();
	};

	return (
		<>
			{ howItWorksData.list.map((item, itemIdx) => (
				<div
					key={ itemIdx }
					className='min-w-0 pb-[92px] lg:pb-[164px] pt-[42px] lg:pt-[64px] flex flex-none max-lg:pl-6'
					style={ {
						transform: 'translate3d(0, 0, 0)',
					} }
				>
					<motion.div
						animate={ {
							boxShadow:
                selectedIndex === itemIdx
                	? '0px 156px 62px rgba(150, 150, 150, 0.01), 0px 88px 53px rgba(150, 150, 150, 0.05), 0px 39px 39px rgba(150, 150, 150, 0.09), 0px 10px 21px rgba(150, 150, 150, 0.1)'
                	: '0px 0px 0px rgba(0,0,0,0)',
						} }
						className={ clsxm(
							'select-none lg:!shadow-none transform transition ease-in-out duration-200',
							'h-full w-[calc(100vw-86.95px)] sm:w-[411px] lg:w-full',
							'bg-grey-primary-light border border-grey-50 rounded-[18px] pt-[10.75px] sm:pt-3.5 pb-[10.75px] sm:pb-[19px] flex flex-col flex-none'
						) }
					>
						<div className='flex flex-col relative w-full h-full px-[10.75px] sm:px-3.5'>
							<div className='w-full h-[303.94px] sm:h-[396px] relative overflow-hidden bg-white rounded-[14px]'>
								{ renderFrame(item.id) }
							</div>
						</div>
						<div className='mt-[10.75px] sm:mt-3.5 flex flex-1 flex-col justify-end px-[10.75px] sm:px-3.5'>
							<div className='flex gap-2 sm:gap-[11px]'>
								<TickCircle className='flex-shrink-0 w-[14px] sm:w-[18px] h-[14px] sm:h-[18px] text-[#4AADF6] mt-[3px] sm:mt-1' />

								<div className='flex flex-col gap-y-1'>
									<h6 className='text-sm sm:text-lg sm:font-medium sm:-tracking-0.04em text-primary'>
										{ item.title }
									</h6>
									<p className='text-grey-primary text-xs sm:text-sm !leading-5'>
										{ item.description }
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			)) }
		</>
	);
};

const BagIcon = () => (
	<svg
		width='22'
		height='22'
		viewBox='0 0 22 22'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='w-[13.82px] h-[13.82px] sm:w-[18px] sm:h-[18px]'
	>
		<g filter='url(#filter0_d_11628_7743)'>
			<path
				d='M5.89266 5.78502C5.75016 5.78502 5.60016 5.72502 5.49516 5.62002C5.27766 5.40252 5.27766 5.04252 5.49516 4.82502L8.21766 2.10252C8.43516 1.88502 8.79516 1.88502 9.01266 2.10252C9.23016 2.32002 9.23016 2.68002 9.01266 2.89752L6.29016 5.62002C6.17766 5.72502 6.03516 5.78502 5.89266 5.78502Z'
				fill='white'
			/>
			<path
				d='M16.1073 5.78502C15.9648 5.78502 15.8223 5.73252 15.7098 5.62002L12.9873 2.89752C12.7698 2.68002 12.7698 2.32002 12.9873 2.10252C13.2048 1.88502 13.5648 1.88502 13.7823 2.10252L16.5048 4.82502C16.7223 5.04252 16.7223 5.40252 16.5048 5.62002C16.3998 5.72502 16.2498 5.78502 16.1073 5.78502Z'
				fill='white'
			/>
			<path
				d='M17.1575 8.95001C17.105 8.95001 17.0525 8.95001 17 8.95001H16.8275H5C4.475 8.95751 3.875 8.95751 3.44 8.52251C3.095 8.18501 2.9375 7.66001 2.9375 6.88751C2.9375 4.82501 4.445 4.82501 5.165 4.82501H16.835C17.555 4.82501 19.0625 4.82501 19.0625 6.88751C19.0625 7.66751 18.905 8.18501 18.56 8.52251C18.17 8.91251 17.645 8.95001 17.1575 8.95001ZM5.165 7.82501H17.0075C17.345 7.83251 17.66 7.83251 17.765 7.72751C17.8175 7.67501 17.93 7.49501 17.93 6.88751C17.93 6.04001 17.72 5.95001 16.8275 5.95001H5.165C4.2725 5.95001 4.0625 6.04001 4.0625 6.88751C4.0625 7.49501 4.1825 7.67501 4.2275 7.72751C4.3325 7.82501 4.655 7.82501 4.985 7.82501H5.165Z'
				fill='white'
			/>
			<path
				d='M9.32031 14.725C9.01281 14.725 8.75781 14.47 8.75781 14.1625V11.5C8.75781 11.1925 9.01281 10.9375 9.32031 10.9375C9.62781 10.9375 9.88281 11.1925 9.88281 11.5V14.1625C9.88281 14.4775 9.62781 14.725 9.32031 14.725Z'
				fill='white'
			/>
			<path
				d='M12.7695 14.725C12.462 14.725 12.207 14.47 12.207 14.1625V11.5C12.207 11.1925 12.462 10.9375 12.7695 10.9375C13.077 10.9375 13.332 11.1925 13.332 11.5V14.1625C13.332 14.4775 13.077 14.725 12.7695 14.725Z'
				fill='white'
			/>
			<path
				d='M13.1671 18.0625H8.64457C5.95957 18.0625 5.35957 16.465 5.12707 15.0775L4.06957 8.59C4.01707 8.2825 4.22707 7.9975 4.53457 7.945C4.84207 7.8925 5.12707 8.1025 5.17957 8.41L6.23707 14.89C6.45457 16.2175 6.90457 16.9375 8.64457 16.9375H13.1671C15.0946 16.9375 15.3121 16.2625 15.5596 14.9575L16.8196 8.395C16.8796 8.0875 17.1721 7.885 17.4796 7.9525C17.7871 8.0125 17.9821 8.305 17.9221 8.6125L16.6621 15.175C16.3696 16.6975 15.8821 18.0625 13.1671 18.0625Z'
				fill='white'
			/>
		</g>
		<defs>
			<filter
				id='filter0_d_11628_7743'
				x='0.9375'
				y='0.939392'
				width='20.125'
				height='20.1231'
				filterUnits='userSpaceOnUse'
				colorInterpolationFilters='sRGB'
			>
				<feFlood
					floodOpacity='0'
					result='BackgroundImageFix' />
				<feColorMatrix
					in='SourceAlpha'
					type='matrix'
					values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					result='hardAlpha'
				/>
				<feOffset dy='1' />
				<feGaussianBlur stdDeviation='1' />
				<feComposite
					in2='hardAlpha'
					operator='out' />
				<feColorMatrix
					type='matrix'
					values='0 0 0 0 0.0519388 0 0 0 0 0.403111 0 0 0 0 0.659049 0 0 0 1 0'
				/>
				<feBlend
					mode='normal'
					in2='BackgroundImageFix'
					result='effect1_dropShadow_11628_7743'
				/>
				<feBlend
					mode='normal'
					in='SourceGraphic'
					in2='effect1_dropShadow_11628_7743'
					result='shape'
				/>
			</filter>
		</defs>
	</svg>
);

const CheckIcon = () => (
	<svg
		width='27'
		height='21'
		viewBox='0 0 27 21'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='w-[18px] h-[18px] sm:w-6 sm:h-6'
	>
		<path
			d='M8.34692 19.3581L8.85317 18.8519L8.34692 19.3581C8.81292 19.8241 9.44669 20.0915 10.1148 20.0915C10.783 20.0915 11.4167 19.8241 11.8827 19.3581L25.3801 5.86074C26.35 4.8908 26.35 3.29486 25.3801 2.32492V2.32492C24.4102 1.35498 22.8142 1.35498 21.8443 2.32492L10.1148 14.0544L5.14596 9.08551C4.17602 8.11557 2.58007 8.11557 1.61014 9.08551C0.640199 10.0554 0.640199 11.6514 1.61014 12.6213L8.34692 19.3581Z'
			fill='#3CC324'
			stroke='url(#paint0_linear_11628_7733)'
			strokeWidth='1.4319'
		/>
		<defs>
			<linearGradient
				id='paint0_linear_11628_7733'
				x1='13.4951'
				y1='2.31342'
				x2='13.4951'
				y2='19.3756'
				gradientUnits='userSpaceOnUse'
			>
				<stop
					stopColor='white'
					stopOpacity='0.5' />
				<stop
					offset='1'
					stopColor='white'
					stopOpacity='0' />
			</linearGradient>
		</defs>
	</svg>
);
