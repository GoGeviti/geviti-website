'use client';

import React from 'react';
import Image from 'next/image';

import { marketingData } from '@/constant/data';

import Ripple from '../Ripple';

import SectionHeading from './SectionHeading';

const menopauseCareData = marketingData.menopauseCare;
const content = menopauseCareData.content;

const MenopauseCare: React.FC = () => {
	// const renderBoxContent1 = () => {
	// 	return (
	// 		<div className='max-lg:order-1 w-full h-full bg-primary rounded-2xl relative max-lg:pb-0 p-6 text-white'>
	// 			<div className='flex flex-col gap-3.5'>
	// 				<h5 className='text-lg'>{ content[1].title }</h5>
	// 				<p className='max-w-[353px] text-xs !leading-6'>
	// 					{ content[1].description }
	// 				</p>
	// 				<ul className='max-w-[353px] list-disc list-inside text-sm'>
	// 					{ content[1].list.map((text, textIdx) => (
	// 						<li key={ textIdx }>{ text }</li>
	// 					)) }
	// 				</ul>
	// 			</div>
	// 			<div className='flex justify-center -mt-6 lg:absolute lg:bottom-0 lg:right-0'>
	// 				<div className='relative overflow-hidden h-[293px] aspect-square'>
	// 					<Image
	// 						src={ content[1].image }
	// 						alt=''
	// 						fill
	// 						className='object-contain'
	// 						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
	// 						quality={ 100 }
	// 					/>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// };

	const renderBoxSymtomps = ({
		image,
		imageMobile,
		imageCaption,
		list,
	}: {
    image: string;
    imageMobile: string;
    imageCaption: string;
    list: string[];
  }) => {
		return (
			<div className='overflow-hidden rounded-20px bg-grey-50 w-full h-full grid grid-cols-2 max-lg:gap-[22px] lg:flex lg:flex-col p-3 max-lg:pr-6 lg:p-2 text-xs leading-5'>
				<div className='rounded-20px relative overflow-hidden aspect-square lg:aspect-[172/94] w-full lg:w-full h-full'>
					<Image
						src={ imageMobile }
						alt=''
						fill
						className='object-cover lg:hidden'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
						quality={ 100 }
					/>
					<Image
						src={ image }
						alt=''
						fill
						className='object-cover max-lg:hidden'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
						quality={ 100 }
					/>

					<div className='absolute bottom-0 inset-x-0 h-[50px] lg:h-[29px] w-full flex items-end justify-center'>
						<span className='text-white text-sm text-center pb-2.5 lg:pb-px'>
							{ imageCaption }
						</span>
					</div>
				</div>
				<div className='flex flex-col justify-center h-full lg:mt-9px'>
					<h6 className='lg:font-medium text-grey-primary text-sm lg:text-xs'>
            Typical Symptomps
					</h6>
					<ul className='max-lg:mt-3 list-disc list-outside ml-[21px] text-primary'>
						{ list.map((text, textIdx) => (
							<li key={ textIdx }>{ text }</li>
						)) }
					</ul>
				</div>
			</div>
		);
	};

	const getRippleCircleClassName = (i: number) => {
		if (i === 0) return 'w-[140px] lg:w-[127px]';
		if (i === 1) return 'w-[203.01px] sm:w-[178.59px]';
		return 'w-[286px] sm:w-[234px]';
	};

	const getRippleCircleStyle = (i: number) => {
		const mainCircleOpacity = 0.25;
		const opacity = mainCircleOpacity - i * 0.03;
		const borderWidth = i === 0 ? '1.25' : 1.5 + (i - 1) * 0.5;
		const boxShadow =
      i % 2 === 1
      	? '6.378px 6.378px 12.757px 12.757px rgba(255, 255, 255, 0.25) inset, 0px 74.946px 20.73px 20.73px rgba(0, 95, 163, 0.00), 0px 47.838px 19.135px 19.135px rgba(0, 95, 163, 0.01), 0px 27.108px 15.946px 15.946px rgba(0, 95, 163, 0.05), 0px 11.162px 11.162px 11.162px rgba(0, 95, 163, 0.09), 0px 3.189px 6.378px 6.378px rgba(0, 95, 163, 0.10)'
      	: '8.357px 8.357px 16.715px 16.715px rgba(255, 255, 255, 0.25), 0px 98.198px 27.161px 27.161px rgba(0, 95, 163, 0.00), 0px 62.679px 25.072px 25.072px rgba(0, 95, 163, 0.01), 0px 35.518px 20.893px 20.893px rgba(0, 95, 163, 0.05), 0px 14.625px 14.625px 14.625px rgba(0, 95, 163, 0.09), 0px 4.179px 8.357px 8.357px rgba(0, 95, 163, 0.10)';

		return {
			opacity,
			borderStyle: 'solid',
			borderWidth: `${borderWidth}px`,
			borderColor: 'white',
			boxShadow,
		} as React.CSSProperties;
	};

	const renderBoxRipples = () => {
		return (
			<div className='w-full h-[192px] lg:h-full rounded-20px overflow-hidden bg-grey-50 relative'>
				<div className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden'>
					<div
						className='z-10 bg-gradient-blue text-white text-center flex flex-col items-center justify-center whitespace-pre-wrap border-[1.25px] border-white rounded-full w-[140px] lg:w-[127px] aspect-square'
						style={ {
							boxShadow:
                '5px 5px 10px 0px rgba(255, 255, 255, 0.25) inset, 0px 58.75px 16.25px 0px rgba(0, 95, 163, 0.00), 0px 37.5px 15px 0px rgba(0, 95, 163, 0.01), 0px 21.25px 12.5px 0px rgba(0, 95, 163, 0.05), 0px 8.75px 8.75px 0px rgba(0, 95, 163, 0.09), 0px 2.5px 5px 0px rgba(0, 95, 163, 0.10)',
						} }
					>
						<p
							style={ {
								textShadow:
                  '0px 20.132px 6.127px rgba(0, 61, 107, 0.00), 0px 13.13px 5.252px rgba(0, 61, 107, 0.01), 0px 7.002px 4.377px rgba(0, 61, 107, 0.05), 0px 3.501px 3.501px rgba(0, 61, 107, 0.09), 0px 0.875px 1.751px rgba(0, 61, 107, 0.10)',
							} }
							className='text-[31.5px] !leading-normal font-medium -tracking-0.04em'
						>
							{ content[2].menopause.title }
						</p>
						<p
							style={ {
								textShadow:
                  '0px 23px 7px rgba(0, 61, 107, 0.00), 0px 15px 6px rgba(0, 61, 107, 0.01), 0px 8px 5px rgba(0, 61, 107, 0.05), 0px 4px 4px rgba(0, 61, 107, 0.09), 0px 1px 2px rgba(0, 61, 107, 0.10)',
							} }
							className='text-xs !leading-normal -tracking-0.04em'
						>
							{ content[2].menopause.subtitle }
						</p>
					</div>
					<Ripple
						circleClassName={ getRippleCircleClassName }
						circleStyle={ getRippleCircleStyle }
					/>
				</div>
			</div>
		);
	};

	const renderBoxContent2 = () => {
		return (
			<div className='max-lg:order-3 flex flex-col justify-between max-lg:mt-[46px] w-full h-full bg-grey-primary-light rounded-2xl max-lg:px-0 p-6 text-primary'>
				<div>
					<h5 className='text-lg'>{ content[2].title }</h5>
					<p className='mt-1.5 max-w-[397px] text-xs !leading-5'>{ content[2].description }</p>
				</div>
				<div className='mt-6 lg:mt-[21px] grid grid-cols-1 h-full lg:grid-cols-3 gap-4 lg:gap-2'>
					{ renderBoxSymtomps(content[2].perimenopause) }
					{ renderBoxRipples() }
					{ renderBoxSymtomps(content[2].postmenopause) }
				</div>
			</div>
		);
	};

	const renderBoxContent3 = () => {
		return (
			<div className='max-lg:order-2 flex flex-col w-full h-full bg-grey-primary-light rounded-2xl p-6 text-primary'>
				<h5 className='text-lg'>{ content[3].title }</h5>
				<p className='max-w-[397px] text-xs !leading-5 mt-1.5'>
					{ content[3].description }
				</p>
				<div className='mt-6 w-full h-auto lg:h-[316px] max-lg:aspect-[295/495] relative overflow-hidden bg-grey-50 rounded-20px'>
					<div className='max-lg:-bottom-[2%] absolute inset-x-0 w-full h-full'>
						<Image
							src={ content[3].image }
							alt=''
							fill
							className='object-cover max-lg:hidden'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
							quality={ 100 }
						/>
						<Image
							src={ content[3].imageMobile }
							alt=''
							fill
							className='object-cover lg:hidden'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
							quality={ 100 }
						/>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='w-full container-center mb-6 lg:mb-[124px]'>
			<SectionHeading
				title={ menopauseCareData.title }
				description={ menopauseCareData.description }
				cta={ menopauseCareData.cta }
			/>

			<div className='w-full grid lg:grid-cols-2 gap-y-6 lg:gap-y-5 lg:gap-x-6 mt-[42px] lg:mt-16'>
				{ /* { renderBoxContent1() } */ }
				{ renderBoxContent2() }
				{ renderBoxContent3() }
			</div>
		</div>
	);
};

export default MenopauseCare;
