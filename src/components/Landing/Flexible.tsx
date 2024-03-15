import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

const flexibleData = landingData.flexible;

const Flexible: React.FC = () => {
	return (
		<div className='overflow-hidden'>
			<div className='bg-grey-secondary h-full w-full rounded-19px relative overflow-hidden'>
				<div className='max-lg:pt-[29px] max-lg:pb-[42px] container-center grid-cols-1 grid lg:grid-cols-2 max-lg:gap-y-7 lg:gap-x-8'>
					<div className='max-lg:order-1 lg:h-[43.125rem]'>
						<div className='h-full flex flex-col justify-center relative lg:z-10 max-lg:w-full lg:max-w-lg mx-auto lg:mx-0'>
							<div className='text-center lg:text-left lg:max-w-xl'>
								<p className='mb-[10px] md:mb-3 text-pretitle text-grey-primary'>
									<span className='max-md:hidden'>{ flexibleData.preTitle }</span>
									<span className='md:hidden'>{ flexibleData.preTitleMobile }</span>
								</p>

								{ flexibleData.title && (
									<h2 className='mb-[10px] md:mb-[16.5px] md:leading-[121%] -tracking-[0.04em] leading-[133%] font-normal md:font-medium font-Poppins text-primary md:text-4xl text-[5.8vw] xs:text-2xl'>
										{ flexibleData.title }<span className='text-[3.9vw] xs:text-base md:text-2xl'>/month</span>
									</h2>
								) }

								{ flexibleData.description && (
									<p className='text-grey-400 max-sm:max-w-[330px] md:max-w-[446px] max-lg:mx-auto text-xs md:text-sm leading-5 font-BRSonoma'>
										<span className='max-md:hidden'>{ flexibleData.description }</span>
										<span className='md:hidden'>{ flexibleData.descriptionMobile }</span>
									</p>
								) }

								<div className='mt-6 md:mt-[60.51px] max-sm:max-w-[330px] md:max-w-[446px] max-lg:mx-auto'>
									<ul className='list-disc list-inside text-black text-sm sm:text-base md:text-lg leading-[229%] sm:leading-[178%] font-Poppins text-left'>
										{ flexibleData.list.map(item => (
											<li key={ item }>
												{ item }
											</li>
										)) }
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='max-lg:hidden lg:absolute lg:inset-0 xl:-top-0.5 lg:left-1/2 lg:mr-0'>
						<div className='w-full bg-gray-50 lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'>
							<Image
								src={ flexibleData.image }
								alt='flexible'
								loading='lazy'
								sizes='100vw'
								quality={ 100 }
								fill
								className='object-cover scale-x-[-1] pointer-events-none'
							/>
						</div>
					</div>

					<div className='lg:hidden order-0'>
						<Image
							src={ flexibleData.imageMobile }
							alt='flexible mobile'
							loading='lazy'
							className='object-cover w-full max-sm:h-[216px] rounded-xl scale-x-[-1] pointer-events-none'
							width={ 339 }
							height={ 216 }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Flexible;