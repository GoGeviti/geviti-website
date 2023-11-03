'use client';

import React from 'react';
import Image from 'next/image';

import { homeData } from '@/constant/data';
import { handleScroll } from '@/helpers/handleScroll';

import { ChevronRight } from '../Icons';

const featuresData = homeData.features;

const Features: React.FC = () => {
	const renderContentButtonAction = () => {
		return (
			<>
				<span className='text-xs sm:text-sm leading-5 sm:leading-6 font-Poppins font-medium'>{ featuresData.action.name }</span>
				<span className='group-hover:translate-x-1 duration-100 tranform transition-all'>
					<ChevronRight className='w-[19px] h-18px stroke-primary' />
				</span>
			</>
		);
	};

	const renderButtonAction = () => {
		const actionData = featuresData.action;
		const wrapper = 'btn btn-secondary inline-flex items-center gap-2 group !translate-y-0';

		if (actionData.href) {
			return (
				<button
					onClick={ () => handleScroll(actionData.href) }
					data-aos='zoom-in'
					aria-label='content btn action'
					className={ wrapper }>
					{ renderContentButtonAction() }
				</button>
			);
		}

		return (
			<button
				data-aos='zoom-in'
				className={ wrapper }
				aria-label='content btn action'
			>
				{ renderContentButtonAction() }
			</button>
		);
	};

	const renderFeatureList = () => {
		return (
			<div className='flex flex-col gap-y-[7px] mt-50px'>
				{ featuresData.list.map(item => (
					<div
						key={ item.title }
						data-aos='zoom-in-down'
						className='rounded-md bg-[#BCE8FF] py-[17px] sm:py-5 px-18px sm:px-[22px] relative'
					>
						<div className='flex justify-between gap-3'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='21'
								height='22'
								viewBox='0 0 21 22'
								fill='none'>
								<path
									d='M6.5625 11L9.1875 13.625L14.4375 8.375M19.25 11C19.25 15.8325 15.3325 19.75 10.5 19.75C5.66751 19.75 1.75 15.8325 1.75 11C1.75 6.16751 5.66751 2.25 10.5 2.25C15.3325 2.25 19.25 6.16751 19.25 11Z'
									stroke='#7EADC5'
									strokeWidth='1.75'
									strokeLinecap='round'
									strokeLinejoin='round' />
							</svg>

							{ item?.icons && (
								<div className='flex items-center flex-wrap gap-[7px]'>
									{ item.icons?.map((icon: string, iconIdx: number) => (
										<div
											key={ iconIdx }
											className='relative overflow-hidden w-3 h-2.5 lg:w-5 lg:h-15px'
										>
											<Image
												loading='lazy'
												src={ icon }
												alt='icon'
												fill
												className='object-contain'
											/>
										</div>
									)) }
								</div>
							) }
						</div>

						<p className='mt-9px sm:mt-11px text-primary text-xs sm:text-[15px] font-medium font-Poppins leading-[124%] sm:leading-[116.67%]'>{ item.title }</p>
						<p className='mt-1.5 lg:mt-1 text-[10px] sm:text-xs text-primary font-BRSonoma leading-[170%] sm:leading-5'>{ item.description }</p>
					</div>
				)) }
			</div>
		);
	};

	return (
		<div className='lg:px-3 mt-4'>
			<div className='relative isolate overflow-hidden bg-blue-1 lg:rounded-[19px]'>
				<div className='container-center pb-[41px] pt-[52px] lg:flex lg:py-[102px]'>
					<div className='mx-auto max-w-2xl text-center lg:text-left flex-shrink-0 lg:mx-0 lg:max-w-xl flex flex-col max-lg:items-center'>
						<div data-aos='zoom-in-right'>
							<p className='text-blue-2 text-pretitle'>
								{ featuresData.preTitle }
							</p>
							{ featuresData.title && (
								<div className='mt-11px lg:mt-9px'>
									<h2 className='text-primary text-[21px] md:text-3xl lg:text-4xl font-Poppins leading-[128%] lg:leading-[125%] -tracking-0.04em'>
										<span dangerouslySetInnerHTML={ { __html: featuresData.title } } />
									</h2>
								</div>
							) }
							<p className='mt-[13px] lg:mt-9px text-xs sm:text-sm leading-5 text-primary sm:max-w-[400px]'>
								{ featuresData.description }
							</p>
						</div>
						<div className='max-lg:hidden'>
							{ renderFeatureList() }
						</div>
						<div className='mt-30px lg:mt-50px'>
							{ renderButtonAction() }
						</div>
					</div>
					{ featuresData.image && (
						<div className='mx-auto mt-50px flex max-w-2xl max-sm:-mr-6 lg:mr-0 lg:mt-0 lg:ml-32 xl:ml-[173px] xl:py-36'>
							<div
								data-aos='zoom-in-left'
								className='max-sm:w-full flex-none sm:max-w-4xl lg:max-w-2xl'
							>
								<Image
									loading='lazy'
									src={ featuresData.image }
									alt='dashboard'
									width={ 2432 }
									height={ 1442 }
									className='w-[76rem] rounded-[10px] shadow-[0px_-37.24116516113281px_221.67359924316406px_0px_rgba(0,0,0,0.15)] ring-1 ring-white/10'
								/>
							</div>
						</div>
					) }
					<div className='lg:hidden'>
						{ renderFeatureList() }
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
