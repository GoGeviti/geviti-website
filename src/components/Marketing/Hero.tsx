'use client';

import React, { CSSProperties, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';

import { marketingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { Slug, SlugOpt } from '@/interfaces/marketing';

import ButtonCta from '../ButtonCta';
import { CheckCircleIcon } from '../Icons';
import Navbar from '../Navbar/Landing';
import PopupReview from '../PopupReview';

const heroData = marketingData.hero;

type HeroProps = {
  slug?: SlugOpt;
};

const Hero: React.FC<HeroProps> = ({ slug = Slug.MEN_WEIGHT_LOSS }) => {
	const [openPopup, setOpenPopup] = useState<boolean>(true);

	const renderImage = (size: 'desktop' | 'mobile') => {
		const imageMobile = size === 'mobile';
		const currImage = imageMobile ? heroData.imageMobile : heroData.image;

		return (
			<Image
				src={ currImage[slug as SlugOpt] }
				alt='hero'
				priority={ true }
				className={ clsxm(
					'object-cover pointer-events-none',
					imageMobile ? 'md:hidden object-top' : 'md:block hidden'
				) }
				quality={ 100 }
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
			/>
		);
	};

	const renderPopup = () => {
		return (
			<PopupReview
				motionProps={ {
					variants: {
						visible: {
							opacity: 1,
						},
						hidden: {
							opacity: 0,
							transition: { duration: 0.3, ease: 'easeInOut' },
						},
					},
					initial: 'visible',
					animate: openPopup ? 'visible' : 'hidden',
					exit: 'hidden',
				} }
				style={
          {
          	'--shadow-popup-mobile':
              '0px 61px 25px rgba(184, 184, 184, 0.01), 0px 34px 21px rgba(184, 184, 184, 0.05), 0px 15px 15px rgba(184, 184, 184, 0.09), 0px 4px 8px rgba(184, 184, 184, 0.1)',
          } as CSSProperties
				}
				wrapperClassName='max-lg:[box-shadow:var(--shadow-popup-mobile)] lg:w-[419px]'
				sizeLargerOnDesktop
				buttonClose={
					<button
						onClick={ () => setOpenPopup(false) }
						className='focus:ring-0 focus:outline-none max-lg:hidden absolute right-3 top-3 rounded-full border-[0.6px] border-grey-100 hover:bg-grey-100 w-5 h-5 flex items-center justify-center'
					>
						<IoIosClose className='fill-grey-primary w-5 h-5 flex-shrink-0' />
					</button>
				}
			/>
		);
	};

	const bgOverlayMobile = () => {
		switch (slug) {
			case Slug.MEN_HORMONE_THERAPY:
				return 'linear-gradient(180deg, #1B1310 47.49%, rgba(24, 26, 28, 0) 94.74%)';
			case Slug.MEN_WEIGHT_LOSS:
				return 'linear-gradient(180deg, #14222B 47.49%, rgba(24, 26, 28, 0.00) 94.74%)';
			case Slug.WOMEN_WEIGHT_LOSS:
				return 'linear-gradient(180deg, #184860 47.49%, rgba(24, 72, 96, 0.00) 94.74%)';
			case Slug.MENOPAUSE:
				return 'linear-gradient(180deg, #111703 3.54%, rgba(17, 23, 3, 0.505) 70.51%, rgba(17, 23, 3, 0) 92.83%)';
			case Slug.BUSINESS_ORIENTED:
			default:
				return 'linear-gradient(180deg, #1E100D 47.49%, rgba(0, 0, 0, 0.495) 68.91%, rgba(0, 0, 0, 0) 91.87%)';
		}
	};

	const bgOverlayDesktop = () => {
		switch (slug) {
			case Slug.MENOPAUSE:
				return 'linear-gradient(90deg, #111703 -17.39%, rgba(17, 23, 3, 0.505) 60.21%, rgba(17, 23, 3, 0) 100%)';
			case Slug.MEN_WEIGHT_LOSS:
				return 'linear-gradient(90deg, #14222B -29.15%, rgba(22, 30, 36, 0.50) 53.32%, rgba(24, 26, 28, 0.00) 100%)';
			case Slug.BUSINESS_ORIENTED:
				return 'linear-gradient(90deg, #120D0A -4.11%, rgba(18, 13, 10, 0.505) 73.91%, rgba(18, 13, 10, 0) 100%)';
			case Slug.MEN_HORMONE_THERAPY:
				return 'linear-gradient(90deg, #120D0A -4.11%, rgba(18, 13, 10, 0.505) 63.56%, rgba(18, 13, 10, 0) 100%)';
			default:
				return '';
		}
	};

	const renderOverlayDesktop = () => {
		const bg = bgOverlayDesktop();

		if (bg) {
			return (
				<div
					className='max-lg:hidden absolute inset-y-0 w-1/2'
					style={ {
						background: bg,
					} }
				/>
			);
		}

		return null;
	};

	const renderOverlayMobile = () => {
		return (
			<div
				className={ clsxm(
					'lg:hidden absolute bottom-0 inset-x-0 w-full h-[71%] -z-0 list-item bg-clip-text [background:var(--bg-overlay-hero-mobile)]'
				) }
				style={
          {
          	'--bg-overlay-hero-mobile': bgOverlayMobile(),
          	transform: 'matrix(1, 0, 0, -1, 0, 0)',
          } as React.CSSProperties
				}
			/>
		);
	};

	const renderHero = () => {
		return (
			<div className='bg-primary h-[calc(100svh+14px)] lg:h-[calc(100vh-24px)] w-full overflow-hidden max-lg:rounded-t-none rounded-19px relative pt-11px lg:pt-5'>
				<div
					className={ clsxm(
						'absolute max-lg:top-0 lg:bottom-0 w-full h-full',
						slug === Slug.WOMEN_WEIGHT_LOSS &&
              'max-lg:h-[calc(100svh-29.564svh+14px)]',
						slug === Slug.MEN_WEIGHT_LOSS &&
              'max-lg:h-[calc(100svh-21.253svh+14px)]',
						slug === Slug.MEN_HORMONE_THERAPY &&
              'max-lg:h-[calc(100svh-23.978svh+14px)]',
						// slug === Slug.MENOPAUSE && 'max-lg:bottom-0',
						slug === Slug.BUSINESS_ORIENTED &&
              'max-lg:h-[calc(100svh-21.935svh+14px)]'
					) }
				>
					{ renderImage('desktop') }
					{ renderImage('mobile') }
				</div>
				<div className='max-lg:hidden absolute right-6 bottom-6 z-30'>
					{ renderPopup() }
				</div>

				{ renderOverlayDesktop() }
				{ renderOverlayMobile() }

				<div className='h-full container-center relative'>
					<div
						className={ clsxm(
							'h-full w-full flex flex-col justify-end lg:justify-start',
							slug === Slug.WOMEN_WEIGHT_LOSS && 'max-lg:pb-6 lg:pt-[31.397vh]',
							slug === Slug.MEN_WEIGHT_LOSS &&
                'max-lg:pb-[5.722vh] lg:pt-[23.79vh]',
							slug === Slug.MEN_HORMONE_THERAPY &&
                'max-lg:pb-[11.853vh] lg:pt-[23.79vh]',
							slug === Slug.MENOPAUSE && 'max-lg:pb-[5.722vh] lg:pt-[25.173vh]',
							slug === Slug.BUSINESS_ORIENTED &&
                'max-lg:pb-[5.722vh] lg:pt-[26.418vh]'
						) }
					>
						<div className='text-left flex flex-col'>
							<h1 className='text-[7.2vw] xxs2:text-[7.692vw] xs2:text-3xl lg:text-[46px] !leading-normal font-medium -tracking-0.04em text-grey-secondary'>
								<span
									dangerouslySetInnerHTML={ {
										__html: heroData.titles[slug as SlugOpt] ?? '',
									} }
								/>
							</h1>

							<div className='mt-3.5 lg:mt-6 space-y-3'>
								{ heroData.list[slug as SlugOpt]?.map((item, itemIdx) => {
									return (
										<div
											key={ itemIdx }
											className='flex whitespace-nowrap gap-1.5'
										>
											<CheckCircleIcon className='w-4 h-4 flex-shrink-0 text-white' />
											<span
												dangerouslySetInnerHTML={ {
													__html: item ?? '',
												} }
												className='text-[3.111vw] xs:text-sm !leading-5 text-grey-50' />
										</div>
									);
								}) }
							</div>

							<div className='flex w-full mt-6 overflow-hidden'>
								<div className='max-sm:w-full flex'>
									<ButtonCta
										href={ heroData.cta.href[slug as SlugOpt] }
										theme='secondary'
										externalLink={ slug === Slug.BUSINESS_ORIENTED }
										className='max-sm:w-full'
									>
										<span
											dangerouslySetInnerHTML={ {
												__html: heroData.cta.text[slug] ?? 'Get Started',
											} }
										/>
									</ButtonCta>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='lg:px-3 lg:pt-3 overflow-hidden lg:mb-[124px]'>
			<Navbar
				animationProps={ {
					initial: 'visible',
				} }
			/>
			{ renderHero() }
			<div className='max-lg:px-4 max-lg:pb-[42px] max-lg:mt-[42px] max-w-2xl mx-auto lg:hidden'>
				{ renderPopup() }
			</div>
		</div>
	);
};

export default Hero;
