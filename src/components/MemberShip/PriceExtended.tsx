import React from 'react';
import Image from 'next/image';

import { membershipData, navbarData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

const comparisonData = membershipData.pricing.extended;

const PriceExtended: React.FC = () => {
	return (
		<div className='pt-[42px] lg:pt-[84px] font-Poppins flex flex-col w-full'>
			<p className='text-pretitle text-grey-primary text-center lg:mb-1'>
				{ comparisonData.preTitle }
			</p>
			<h3 className='text-2xl !leading-normal lg:text-[64px] text-center'>
				{ comparisonData.title }
			</h3>

			<div className='max-lg:flex-col items-center flex lg:grid lg:grid-cols-2 gap-[42px] lg:gap-6 mt-[43px] lg:mt-12 w-full sm:max-w-[392px] lg:max-w-[846px] mx-auto'>
				{ comparisonData.list.map(item => {
					return (
						<div
							key={ item.name }
							className={ clsxm(
								'rounded-2xl relative w-full border',
								item.geviti ? 'bg-primary text-white border-primary' : 'bg-[#F5FBFF] lg:bg-grey-50 text-primary border-black/5'
							) }>
							{ item.geviti && (
								<span className='absolute top-0 right-6 -translate-y-1/2 text-sm !leading-normal font-medium bg-blue-primary py-2 px-6 rounded-full text-primary'>
									More value
								</span>
							) }
							<div className='px-6 pb-[42px] pt-6'>
								{
									item.geviti
										? (
											<div className='flex-shrink-0 pt-18px'>
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
										: <h4 className='text-5xl !leading-[125%] font-medium'>{ item.name }</h4>
								}
								<p className='text-grey-primary font-medium text-sm !leading-6 mt-[11px] mb-3'>{ item.priceTitle }</p>
								<p className='text-5xl !leading-[125%] font-medium'>
									{ item.price } <span className='text-sm'>{ item.priceNote }</span>
								</p>
								<ul className={ clsxm('pt-6 flex flex-col gap-y-3', item.geviti ? 'text-white' : 'text-grey-500') }>
									{ item.list.map((feature, featureIdx) => {
										const Icon = feature.icon;

										return (
											<li
												key={ `featurecompare-${ featureIdx }` }
												className='text-sm !leading-normal -tracking-0.04em flex justify-between'>
												{ feature.title } <Icon className={ clsxm('flex-shrink-0', item.geviti && 'text-[#32D583C9]') } />
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
