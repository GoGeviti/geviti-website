'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import longevitiPanelData from '@/constant/data/longevitiPanel';
import clsxm from '@/helpers/clsxm';

import { TickCircle } from '../Icons';

const Ripple = dynamic(() => import('../Ripple'), {
	ssr: false,
});

const howItWorksData = longevitiPanelData.howItWorks;

type CardListProps = {
  selectedIndex: number;
  inView: boolean;
  isMobile?: boolean;
};

const HowItWorksCards: React.FC<CardListProps> = ({
	selectedIndex,
	inView,
	isMobile,
}) => {
	const renderResultsFrame = () => {
		const setCardStyles = (index: number) => {
			if (index === 1)
				return {
					boxShadow:
            '0px 11px 4px rgba(163, 163, 163, 0.01), 0px 6px 4px rgba(163, 163, 163, 0.05), 0px 3px 3px rgba(163, 163, 163, 0.09), 0px 1px 2px rgba(163, 163, 163, 0.1)',
					rotate: '-2.89deg',
				};

			if (index === 2) {
				return {
					boxShadow:
            '0px 17px 7px rgba(176, 176, 176, 0.01), 0px 9px 6px rgba(176, 176, 176, 0.05), 0px 4px 4px rgba(176, 176, 176, 0.09), 0px 1px 2px rgba(176, 176, 176, 0.1)',
					rotate: '1.83deg',
				};
			}

			if (index === 3) {
				return {
					boxShadow:
            '0px 9px 4px rgba(163, 163, 163, 0.01), 0px 5px 3px rgba(163, 163, 163, 0.05), 0px 2px 2px rgba(163, 163, 163, 0.09), 0px 1px 1px rgba(163, 163, 163, 0.1)',
					rotate: '-0.71deg',
				};
			}
		};

		const images = [
			'/images/longeviti_panel/card-1.webp',
			'/images/longeviti_panel/card-2.webp',
			'/images/longeviti_panel/card-3.webp',
			'/images/longeviti_panel/card-4.webp',
		];

		return (
			<div className='flex flex-col items-center pt-9 sm:pt-[56px]'>
				<div className='flex flex-col relative bg-white'>
					{ images.map((image, index) => (
						<div
							key={ index }
							className={ clsxm({
								['pt-0']: index === 0,
								['pt-[4.52px] -ml-[2.37px]']: index === 2,
								['pt-[2.71px]']: index !== 0 && index !== 2,
							}) }
						>
							<motion.div
								className='relative'
								{ ...(!isMobile && {
									variants: {
										initial: { scale: 1.1, y: 20, opacity: 0 },
										animate: {
											scale: 1.1,
											y: 0,
											opacity: 1,
										},
									},
									initial: 'initial',
									animate: inView ? 'animate' : 'initial',
									transition: {
										delay: 2 + (3 - index) * 0.1,
										duration: 0.3,
										ease: 'easeInOut',
									},
								}) }
							>
								<motion.div
									className='overflow-hidden relative w-[234.11px] sm:w-[273.11px] aspect-[273.11/55.89] h-auto border-[0.8px] border-gray-50'
									{ ...(!isMobile && {
										animate: inView ? { scale: 0.9 } : { scale: 1 },
										transition: {
											delay: 2 + (3 - index) * 0.1 + 0.4,
											duration: 0.3,
											ease: 'easeInOut',
										},
									}) }
									style={ { ...setCardStyles(index), borderRadius: '11.15px' } }
								>
									<Image
										src={ image }
										alt={ `Image ${index + 1}` }
										quality={ 100 }
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>
								</motion.div>
							</motion.div>
						</div>
					)) }

					<WrapperDotIcon
						className='-left-[6px]'
						dotClassName='top-[21px] sm:top-[25px]'
						delay={ 6 }
						inView={ inView }
					/>
				</div>
			</div>
		);
	};

	const renderSampleFrame = () => {
		return (
			<div className='absolute-center'>
				<div className='w-[224px] sm:w-[254px] h-auto relative'>
					<WrapperDotIcon
						delay={ 2.5 }
						className='left-[17px]'
						dotClassName='-top-[1px]'
						inView={ inView }
					/>
					<WrapperDotIcon
						delay={ 3.5 }
						className='right-[17px]'
						dotClassName='-top-[1px]'
						inView={ inView }
					/>

					<div className='flex flex-col items-center'>
						<motion.div
							className='relative overflow-hidden rounded-2xl'
							{ ...(!isMobile && {
								initial: {
									clipPath: 'inset(50% 0% 50% 0%)',
									scale: 1.25,
								},
								animate: {
									clipPath: inView
										? 'inset(0% 0% 0% 0%)'
										: 'inset(50% 0% 50% 0%)',
									scale: 1,
								},
								transition: { duration: 0.6, delay: 1, ease: 'easeIn' },
							}) }
						>
							<Image
								src='/images/longeviti_panel/step-2.webp'
								alt='sample'
								width={ 762 }
								height={ 852 }
								className='w-[224px] sm:w-[254px] h-auto rounded-2xl'
							/>
						</motion.div>
					</div>
				</div>
			</div>
		);
	};

	const getRippleCircleClassName = (i: number) => {
		if (i === 0) return 'w-[41.76px] sm:w-[54.41px] bg-transparent';
		if (i === 1) return 'w-[72.53px] sm:w-[94.51px] bg-[#91FE9533]';
		return 'w-[125.11px] sm:w-[163px] bg-[#89FE8D1A]';
	};

	const renderRipples = () => {
		return (
			<motion.div
				{ ...(!isMobile && {
					initial: { opacity: 0 },
					animate: { opacity: inView ? 1 : 0 },
					transition: { duration: 0.8, delay: 0.6, ease: 'easeInOut' },
				}) }
				className='relative flex w-[126px] h-[126px] sm:w-[163px] sm:h-[163px] flex-col items-center justify-center overflow-hidden'
			>
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
					disabledAnimate
				/>
			</motion.div>
		);
	};

	const renderOrderFrame = () => {
		return (
			<>
				<div className='absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 z-10'>
					{ renderRipples() }
				</div>
				<div className='absolute top-[66px] sm:top-[86px] left-1/2 -translate-x-1/2 flex flex-col items-center'>
					<div className='relative w-[128.94px] sm:w-[168px] h-auto z-10'>
						<WrapperDotIcon
							delay={ 2 }
							className='-right-[5px]'
							dotClassName='-top-[5px]'
							inView={ inView }
						/>

						<Image
							src='/images/longeviti_panel/step-1.webp'
							alt=''
							width={ 168 * 3 }
							height={ 253 * 3 }
							className='w-[128.94px] sm:w-[168px] h-auto'
						/>
					</div>
					<div className='mt-[13px] sm:mt-[17px]'>
						<motion.button
							style={
                {
                	'--background-button-purchase':
                    'linear-gradient(83.34deg, #4AADF6 15.76%, #89CDFF 84.52%)',
                } as React.CSSProperties
							}
							{ ...(!isMobile && {
								initial: { translateY: '0%' },
								animate: { translateY: inView ? '-200%' : '0%' },
								transition: { duration: 0.3, delay: 0.7, ease: 'easeInOut' },
							}) }
							className='focus:ring-0 focus:outline-none group relative flex'
						>
							<motion.span
								{ ...(!isMobile && {
									initial: { y: 0 },
									animate: { y: inView ? 3 : 0 },
									transition: { duration: 1, delay: 0.1, ease: 'easeInOut' },
								}) }
								className='relative z-[5] rounded-[100px] [background:var(--background-button-purchase)] w-[128.94px] sm:w-[168px] h-[33px] sm:h-10 border border-white/20'
								style={ {
									boxShadow: 'inset 0px -2px 1px rgba(255, 255, 255, 0.2)',
								} }
							>
								<span className='flex items-center justify-center w-full h-full gap-[7px] sm:gap-2.5'>
									<BagIcon />
									<span
										className='text-[10.75px] leading-[15px] sm:text-sm sm:leading-5 text-white'
										style={ { textShadow: '0px 1px 2px #0D67A8' } }
									>
                    Purchase
									</span>
								</span>
							</motion.span>
							<span className='w-[128.94px] sm:w-[168px] h-[33px] sm:h-10 rounded-[100px] [background:var(--background-button-purchase)] absolute top-[3px] inset-x-0' />
						</motion.button>
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

	const renderLine = (itemIdx: number) => {
		const lineClassName =
      'absolute top-1/2 -translate-y-1/2 border-2 border-gray-100 border-dashed max-sm:hidden';
		const rightLine = clsxm(lineClassName, 'left-1/2 right-0');
		const leftLine = clsxm(lineClassName, 'left-0 right-1/2');
		const transition = { duration: 0.6, ease: 'easeInOut' };

		if (isMobile) return null;

		if (itemIdx === 0) {
			return (
				<motion.div
					initial={ { width: '0%' } }
					animate={
						inView
							? {
								width: '50%',
								transition: {
									...transition,
									delay: 0.5,
								},
							}
							: { width: '0%' }
					}
					className={ rightLine }
				/>
			);
		}

		if (itemIdx === 1) {
			return (
				<>
					<motion.div
						initial={ { width: '0%' } }
						animate={
							inView
								? {
									width: '50%',
									transition: {
										...transition,
										delay: 1,
									},
								}
								: { width: '0%' }
						}
						className={ leftLine }
					/>
					<motion.div
						initial={ { width: '0%' } }
						animate={
							inView
								? {
									width: '50%',
									transition: {
										...transition,
										delay: 1.5,
									},
								}
								: { width: '0%' }
						}
						className={ rightLine }
					/>
				</>
			);
		}

		return (
			<motion.div
				initial={ { width: '0%' } }
				animate={
					inView
						? {
							width: '50%',
							transition: {
								...transition,
								delay: 2,
							},
						}
						: { width: '0%' }
				}
				className={ leftLine }
			/>
		);
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
							'relative select-none lg:!shadow-none transform transition ease-in-out duration-200',
							'h-full w-[calc(100vw-86.95px)] sm:w-[411px] lg:w-full',
							'bg-grey-primary-light border border-grey-50 rounded-[18px] pt-[10.75px] sm:pt-3.5 pb-[10.75px] sm:pb-[19px] flex flex-col flex-none'
						) }
					>
						<div className='flex flex-col relative w-full h-full px-[10.75px] sm:px-3.5'>
							<div className='w-full h-[303.94px] sm:h-[396px] relative overflow-hidden bg-white rounded-[14px]'>
								{ renderLine(itemIdx) }

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

export default HowItWorksCards;

type WrapperDotIconProps = {
  inView?: boolean;
  className?: string;
  dotClassName?: string;
  delay?: number;
};

const WrapperDotIcon: React.FC<WrapperDotIconProps> = ({
	inView,
	className,
	dotClassName,
	delay,
}) => {
	return (
		<motion.div
			initial={ { opacity: 0 } }
			animate={ { opacity: inView ? 1 : 0 } }
			transition={ { delay: (delay ?? 0) / 2, duration: 0.6, ease: 'easeInOut' } }
			className={ clsxm(
				'absolute top-1/2 -translate-y-1/2 z-10 max-lg:hidden',
				className
			) }
		>
			<DotIcon className={ clsxm('relative', dotClassName) } />
		</motion.div>
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

const DotIcon = (props?: React.SVGProps<SVGSVGElement>) => (
	<svg
		width='11'
		height='11'
		viewBox='0 0 11 11'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{ ...props }
	>
		<g filter='url(#filter0_i_11628_7715)'>
			<circle
				cx='5.5'
				cy='5.5'
				r='5.5'
				fill='url(#paint0_linear_11628_7715)' />
		</g>
		<circle
			cx='5.5'
			cy='5.5'
			r='4.71429'
			stroke='white'
			strokeWidth='1.57143'
		/>
		<defs>
			<filter
				id='filter0_i_11628_7715'
				x='0'
				y='-1.57143'
				width='11'
				height='12.5714'
				filterUnits='userSpaceOnUse'
				colorInterpolationFilters='sRGB'
			>
				<feFlood
					floodOpacity='0'
					result='BackgroundImageFix' />
				<feBlend
					mode='normal'
					in='SourceGraphic'
					in2='BackgroundImageFix'
					result='shape'
				/>
				<feColorMatrix
					in='SourceAlpha'
					type='matrix'
					values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					result='hardAlpha'
				/>
				<feOffset dy='-3.14286' />
				<feGaussianBlur stdDeviation='0.785714' />
				<feComposite
					in2='hardAlpha'
					operator='arithmetic'
					k2='-1'
					k3='1' />
				<feColorMatrix
					type='matrix'
					values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0'
				/>
				<feBlend
					mode='normal'
					in2='shape'
					result='effect1_innerShadow_11628_7715'
				/>
			</filter>
			<linearGradient
				id='paint0_linear_11628_7715'
				x1='2.16071'
				y1='12.925'
				x2='10.4942'
				y2='11.952'
				gradientUnits='userSpaceOnUse'
			>
				<stop stopColor='#4AADF6' />
				<stop
					offset='1'
					stopColor='#89CDFF' />
			</linearGradient>
		</defs>
	</svg>
);
