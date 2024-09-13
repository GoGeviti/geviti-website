'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import landingData from '@/constant/data/landing';
import clsxm from '@/helpers/clsxm';

import { ArrowNarrowRight } from '../Icons';

const benefitsData = landingData.benefits;
const articleClassName =
  'relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-3 pb-3 h-[542px]';
const cardArticleClassName =
  'rounded-2xl p-px border border-white/50 backdrop-blur-[50px] group';
const innerCardArticleClassName =
  'rounded-[calc(1rem-1px)] bg-[#042A4980] pt-6 sm:pt-[17px] pb-[21px] sm:pb-[15px] px-6 sm:px-18px text-white relative overflow-hidden group';

type CardBenefitProps = {
  item: (typeof benefitsData.list)[0];
  itemIdx: number;
  hovered: boolean;
  setHoveredIdx: React.Dispatch<React.SetStateAction<number>>;
};

const CardBenefit: React.FC<CardBenefitProps> = ({
	item,
	itemIdx,
	hovered,
	setHoveredIdx,
}) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const renderImage = (renderOnMobile?: boolean) => {
		return (
			<Image
				src={ renderOnMobile ? item.imageMobile : item.image }
				alt={ item.title }
				className={ clsxm(
					'absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none',
					renderOnMobile ? 'lg:hidden' : 'max-lg:hidden'
				) }
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
				fill
			/>
		);
	};

	const renderList = () => {
		return (
			<ul className='list-inside list-disc mt-2.5 sm:mt-5px text-xs sm:text-sm !leading-7 text-grey-50'>
				{ item.details.map((detail: string) => (
					<li key={ detail }>{ detail }</li>
				)) }
			</ul>
		);
	};

	const renderTitle = () => {
		return (
			<h3 className='text-2xl !leading-9 sm:text-3xl lg:text-4xl lg:!leading-[54px] -tracking-0.04em'>
				{ item.title }
			</h3>
		);
	};

	const renderArrow = () => {
		return (
			<div className='absolute z-10 right-18px bottom-15px max-lg:hidden group-hover:translate-y-1 transform transition-transform ease-in-out duration-500'>
				<div className='flex relative w-[62px] h-[62px] rounded-full bg-white/20 border-2 border-white/5 hover:bg-white/40'>
					<ArrowNarrowRight className='w-8 h-8 text-white absolute-center flex-shrink-0 -rotate-45' />
				</div>
			</div>
		);
	};

	return (
		<>
			<article
				className={ clsxm(articleClassName, 'max-lg:hidden') }
				onMouseEnter={ () => setHoveredIdx(itemIdx) }
				onMouseLeave={ () => setHoveredIdx(-1) }
			>
				{ renderImage() }
				<motion.div
					variants={ {
						visible: {
							opacity: 1,
							scale: 1,
							transition: {
								duration: 0.5,
								ease: 'easeInOut',
							},
						},
						hidden: { opacity: 0, scale: 0 },
					} }
					initial='hidden'
					whileInView='visible'
					viewport={ { once: true } }
					className={ cardArticleClassName }
				>
					<motion.div
						variants={ {
							initial: { maxHeight: 91.4 },
							visible: { maxHeight: 264.4 },
						} }
						initial='initial'
						animate={ hovered ? 'visible' : 'initial' }
						style={ { maxHeight: 91.4 } }
						transition={ { duration: 0.6, ease: 'easeInOut' } }
						className={ innerCardArticleClassName }
					>
						<Link href={ item.href }>
							{ renderTitle() }
							{ renderArrow() }

							<motion.div
								variants={ {
									initial: { height: 0, y: 20 },
									visible: { height: 'fit-content', y: 0 },
								} }
								initial='initial'
								animate={ hovered ? 'visible' : 'initial' }
								transition={ {
									duration: 0.6,
									ease: 'easeInOut',
								} }
								className='block'
							>
								{ renderList() }
							</motion.div>
						</Link>
					</motion.div>
				</motion.div>
			</article>

			<article className={ clsxm(articleClassName, 'lg:hidden') }>
				{ renderImage(true) }
				<motion.div
					variants={ {
						visible: {
							opacity: 1,
							scale: 1,
							transition: {
								duration: 0.5,
								ease: 'easeInOut',
							},
						},
						hidden: { opacity: 0, scale: 0 },
					} }
					initial='hidden'
					whileInView='visible'
					viewport={ { once: true } }
					className={ cardArticleClassName }
				>
					<div className={ innerCardArticleClassName }>
						<Link href={ item.href }>
							{ renderTitle() }
							{ renderArrow() }
							<div className='flex'>{ renderList() }</div>
						</Link>
					</div>
				</motion.div>
			</article>
		</>
	);
};

const Benefits: React.FC = () => {
	const [hoveredIdx, setHoveredIdx] = useState<number>(-1);
	
	return (
		<div className='lg:px-3 mt-6 font-Poppins'>
			<div className='bg-white relative overflow-hidden rounded-19px py-[46px] lg:pt-[79px] lg:pb-[49px]'>
				<div className='container-center'>
					<div className='text-center flex flex-col justify-center'>
						<p className='text-pretitle text-grey-primary'>
							{ benefitsData.preTitle }
						</p>

						<h2 className='my-2.5 lg:mt-0 lg:mb-2 text-primary text-[6.107vw] max-md:leading-[133%] md:text-3xl lg:text-[4.444vw] xl:text-[64px] lg:!leading-normal -tracking-0.04em'>
							{ benefitsData.title }
						</h2>

						{ benefitsData.description && (
							<p className='text-grey-400 text-xs sm:text-sm !leading-5 max-w-[342px] mx-auto lg:max-w-[628px]'>
								<span
									dangerouslySetInnerHTML={ {
										__html: benefitsData.description,
									} }
								/>
							</p>
						) }
					</div>
					<div className='mx-auto mt-[42px] lg:mt-[68px] grid max-w-2xl grid-cols-1 gap-[42px] lg:gap-[23px] lg:mx-0 lg:max-w-none lg:grid-cols-2'>
						{ benefitsData.list.map((item, itemIdx) => {
							const hovered = itemIdx === hoveredIdx;

							return (
								<CardBenefit
									key={ item.title }
									item={ item }
									itemIdx={ itemIdx }
									hovered={ hovered }
									setHoveredIdx={ setHoveredIdx }
								/>
							);
						}) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
