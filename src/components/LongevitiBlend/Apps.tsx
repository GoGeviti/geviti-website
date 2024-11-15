import React from 'react';
import Image from 'next/image';

import longevitiBlendData from '@/constant/data/longevitiBlend';

// import longevitiPanelData from '@/constant/data/longevitiPanel';
import ButtonCta from '../ButtonCta';

const appsData = longevitiBlendData.apps;

const Apps: React.FC = () => {

	const renderContent = () => {
		return (
			<div className='flex flex-col max-lg:items-center max-lg:text-center justify-center w-full h-full lg:pt-[170px] lg:pb-[209px]'>
				<div>
					<p className='mb-3.5 sm:mb-2 text-pretitle text-grey-primary'>
						{ appsData.preTitle }
					</p>
					<h2 className='font-medium text-2xl sm:text-3xl lg:text-4xl !leading-normal -tracking-0.04em'>
						<span dangerouslySetInnerHTML={ { __html: appsData.title } } />
					</h2>
					<p className='mt-3.5 text-grey-primary text-xs sm:text-sm !leading-5 lg:max-w-[423px]'>
						{ appsData.description }
					</p>
				</div>
				<div className='mt-[42px] max-sm:w-full flex'>
					<ButtonCta
						href={ appsData.cta.href }
						text={ appsData.cta.text }
						className='max-sm:w-full'
					/>
				</div>
			</div>
		);
	};

	return (
		<div className='lg:px-3'>
			<div className='container-center pb-[66px] lg:pb-[165px]'>
				<div className='flex flex-col lg:flex-row items-center justify-between gap-[64px] lg:gap-[153px]'>
					<div className='lg:mx-auto'>
						{ renderContent() }
					</div>
					<div className=''>
						<Image
							src={ appsData.image }
							alt='laptop'
							width={ 516 }
							height={ 516 }
							quality={ 100 }
							className='rounded-[20px] overflow-hidden object-cover'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Apps;
