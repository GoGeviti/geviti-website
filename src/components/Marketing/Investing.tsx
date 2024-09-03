import React from 'react';
import Image from 'next/image';

import { marketingData } from '@/constant/data';

import SectionHeading from './SectionHeading';

const investingData = marketingData.investing;

const Investing: React.FC = () => {
	const renderBoxContent1 = () => {
		return (
			<div className='max-lg:px-0 p-6 bg-grey-primary-light rounded-2xl flex flex-col text-primary'>
				<div className='max-w-[481px]'>
					<h5 className='text-lg'>{ investingData.content[1].title }</h5>
					<p className='mt-1.5 text-xs !leading-5'>
						{ investingData.content[1].description }
					</p>
				</div>
				<ul className='flex flex-col mt-[42px] lg:mt-[75px] max-lg:gap-6 lg:justify-between h-full'>
					{ investingData.content[1].list.map((item, itemIdx) => (
						<li
							key={ itemIdx }
							className='flex items-start lg:items-center p-3 gap-[42px] bg-white rounded-20px border border-grey-50'
						>
							<div
								className='w-[66px] lg:w-[112px] flex-shrink-0 aspect-square text-white bg-gradient-blue rounded-20px flex items-center justify-center text-[6.75vw] xs3:text-[27px] lg:text-[46px] font-medium !leading-normal -tracking-0.04em'
								style={ {
									textShadow:
                    '0px 23px 7px rgba(0, 61, 107, 0.00), 0px 15px 6px rgba(0, 61, 107, 0.01), 0px 8px 5px rgba(0, 61, 107, 0.05), 0px 4px 4px rgba(0, 61, 107, 0.09), 0px 1px 2px rgba(0, 61, 107, 0.10)',
								} }
							>
								<span dangerouslySetInnerHTML={ { __html: item.counterText } } />
							</div>
							<p className='max-w-[211px] sm:max-w-[313px] text-gray-600 text-[4.5vw] xs3:text-lg'>
								{ item.text }
							</p>
						</li>
					)) }
				</ul>
			</div>
		);
	};

	const renderBoxContent2 = () => {
		return (
			<div className='max-lg:px-0 p-6 bg-grey-primary-light rounded-2xl flex flex-col text-primary'>
				<div className='max-w-[446px]'>
					<h5 className='text-lg'>{ investingData.content[2].title }</h5>
					<p className='mt-1.5 text-xs !leading-5'>
						{ investingData.content[2].description }
					</p>
				</div>
				<div className='mt-[42px] w-full aspect-[343/497] lg:aspect-[582/563] h-full bg-primary rounded-2xl relative overflow-hidden'>
					<div className='max-lg:-bottom-[5%] absolute inset-x-0 w-full h-full'>
						<Image
							src={ investingData.content[2].image }
							alt=''
							fill
							className='object-cover max-lg:object-left-top'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
							quality={ 100 }
						/>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='w-full container-center pb-[42px] lg:pb-[188px]'>
			<SectionHeading
				title={ investingData.title }
				description={ investingData.description }
				cta={ investingData.cta }
			/>
			<div className='mt-6 lg:mt-[42px] w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2.5'>
				{ renderBoxContent1() }
				{ renderBoxContent2() }
			</div>
		</div>
	);
};

export default Investing;
