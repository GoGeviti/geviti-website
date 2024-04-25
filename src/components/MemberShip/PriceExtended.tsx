import React from 'react';
import Image from 'next/image';

import { membershipData, navbarData } from '@/constant/data';

const comparisonList = membershipData.pricing.comparisonList;

const PriceExtended = () => {
	return (
		<div className='pt-[42px] lg:pt-[84px] font-Poppins flex flex-col w-full'>
			<p className='text-pretitle text-grey-primary text-center lg:mb-1'>
				Care based off of biomarkers
			</p>
			<h4 className='text-2xl !leading-normal lg:text-[64px] text-center'>
				More, for less.
			</h4>

			<div className='max-lg:flex-col flex lg:grid lg:grid-cols-2 justify-center gap-[42px] lg:gap-6 mt-[43px] lg:mt-12 w-full'>
				{ comparisonList.map(item => {
					return (
						<div
							key={ item.name }
							className='bg-primary px-6 py-10 rounded-2xl text-white relative w-full sm:w-[392px] lg:w-[411px]'>
							{ item.geviti && (
								<p className='absolute top-0 right-8 -translate-y-1/2 text-sm font-Poppins font-medium bg-[#91c9f2] py-2 px-6 rounded-full text-primary'>
									More value
								</p>
							) }
							<div>
								{
									item.geviti
										? (
											<div className='flex-shrink-0'>
												<Image
													src={ navbarData.logoLight }
													alt='logo'
													width={ 144.5 }
													height={ 34 }
													priority
													className='w-[144.5px] h-full object-contain'
												/>
											</div>
										)
										: <h4 className='text-5xl !leading-[60px]'>{ item.name }</h4>
								}
								<p className='text-grey-primary my-4'>{ item.priceTitle }</p>
								<p className='text-4xl md:text-5xl font-medium'>
									{ item.price } <span className='text-sm'>{ item.priceNote }</span>
								</p>
								<ul className='pt-6 flex flex-col gap-y-3'>
									{ item.list.map((feature, featureIdx) => {
										const Icon = feature.icon;

										return (
											<li
												key={ `featurecompare-${ featureIdx }` }
												className='text-white text-sm flex justify-between'>
												{ feature.title } <Icon className='flex-shrink-0' />
											</li>
										);
									}) }
								</ul>
							</div>
						</div>
					);
				}) }
			</div>
		</div>
	);
};

export default PriceExtended;
