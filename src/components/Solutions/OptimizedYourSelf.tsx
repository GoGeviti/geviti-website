import React from 'react';
import Image from 'next/image';

import { solutionData } from '@/constant/data';

import ButtonCta from '../ButtonCta';

import Stat from './Stat';

const optimizedData = solutionData.optimizedYourSelf;

const Flexible: React.FC = () => {
	return (
		<div className='overflow-hidden lg:px-3 pt-6'>
			<div className='bg-grey-secondary h-full w-full rounded-19px relative overflow-hidden font-Poppins'>
				<div className='max-lg:py-[42px] container-center grid-cols-1 grid lg:grid-cols-2 max-lg:gap-y-[42px] lg:gap-x-8'>
					<div className='lg:h-[685px]'>
						<div className='h-full flex flex-col lg:justify-between lg:py-[42px] relative lg:z-10 max-lg:w-full lg:max-w-[631px] mx-auto lg:mx-0'>
							<div>
								<p className='mb-3 lg:mb-0 text-pretitle text-grey-primary'>
									<span dangerouslySetInnerHTML={ { __html: optimizedData.preTitle } } />
								</p>

								{ optimizedData.title && (
									<h2 className='mb-4 lg:mb-3.5 !leading-normal text-primary text-[6.4vw] xxs2:text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
										<span dangerouslySetInnerHTML={ { __html: optimizedData.title } } />
									</h2>
								) }

								{ optimizedData.description && (
									<p className='text-grey-400 max-w-[340px] lg:max-w-[606px] text-xs lg:text-lg !leading-5 lg:!leading-normal'>
										<span dangerouslySetInnerHTML={ { __html: optimizedData.description } } />
									</p>
								) }
							</div>
							<div className='hidden lg:flex'>
								<ButtonCta
									text={ optimizedData.btnCta.text }
									href={ optimizedData.btnCta.href }
									theme='primary' />
							</div>
						</div>
					</div>
					<div className='max-lg:hidden lg:absolute lg:inset-y-6 lg:inset-x-3 lg:left-1/2'>
						<div className='w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-2xl relative overflow-hidden'>
							<Image
								src={ optimizedData.image }
								alt='flexible'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
								quality={ 100 }
								fill
								className='object-cover pointer-events-none rounded-2xl w-full h-full'
							/>

							<div className='relative w-full h-full z-10'>
								<div
									className='absolute z-10 bg-black w-full h-[74%] bottom-0 inset-x-0'
									style={ { background: 'linear-gradient(0deg, #181A1C 0%, rgba(24, 26, 28, 0) 96.26%)' } } />
								<div className='absolute right-0 bottom-0 z-[11] pb-[17px] pr-[27px] text-white text-right flex flex-col justify-end'>
									<span className='text-[209.67px] !leading-none -tracking-0.04em'>
										{ optimizedData.imageCaption.desktop.count }<span className='text-[104.84px]'>{ optimizedData.imageCaption.desktop.suffix }</span>
									</span>
									<span className='text-sm !leading-6 tracking-0.11em uppercase font-semibold'>
										{ optimizedData.imageCaption.desktop.subheading1 }
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className='lg:hidden'>
						<div className='relative rounded-2xl overflow-hidden h-[343px] sm:h-[450px]'>
							<div className='absolute inset-x-0 bottom-[29px] overflow-hidden w-full h-full'>
								<Image
									src={ optimizedData.imageMobile }
									alt='flexible mobile'
									loading='lazy'
									className='object-cover w-full h-full pointer-events-none'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									fill
								/>
							</div>

							<div
								className='absolute inset-x-0 bottom-0 text-white pt-3.5 pl-[21px] pb-[18px]'
								style={ { background: 'linear-gradient(0deg, #181A1C 20.46%, rgba(24, 26, 28, 0.72) 61.5%, rgba(24, 26, 28, 0) 100%)' } }>
								<Stat
									num={ optimizedData.imageCaption.mobile.count }
									suffix={ optimizedData.imageCaption.mobile.suffix }
									suffixClassName='text-4xl !leading-normal -tracking-0.04em' />
								<div className='uppercase text-[3.581vw] xs2:text-sm !leading-[171%] tracking-0.11em font-semibold'>
									<p className='text-blue-primary'>{ optimizedData.imageCaption.mobile.subheading1 }</p>
									<p className='text-white'>{ optimizedData.imageCaption.mobile.subheading2 }</p>
								</div>
							</div>
						</div>

						<div className='flex justify-center max-sm:w-full mt-[42px]'>
							<ButtonCta
								text={ optimizedData.btnCta.text }
								href={ optimizedData.btnCta.href }
								theme='primary'
								className='max-sm:w-full'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Flexible;