import React from 'react';
import Image from 'next/image';

import longevitiPanelData from '@/constant/data/longevitiPanel';

import ButtonCta from '../ButtonCta';

const appsData = longevitiPanelData.apps;

const Apps: React.FC = () => {
	const renderBackgroundBlue = () => {
		return (
			<div
				style={ {
					background:
            'linear-gradient(342.91deg, #4AADF6 -12.96%, #8CCEFF 67.54%)',
				} }
				className='rounded-[20px] max-sm:aspect-[343/452] w-[calc(100vw-32px)] sm:w-[516px] h-auto sm:h-[569px] max-lg:absolute max-lg:top-0'
			/>
		);
	};

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
		<div className='w-full overflow-hidden container-center relative z-20 -mb-[155px] pb-[102px] lg:pb-[261px] pt-[41px] lg:pt-[163px]'>
			<div className='flex max-lg:flex-col lg:grid lg:grid-cols-12 gap-[42px] lg:gap-[37px]'>
				<div className='lg:col-span-5 w-full max-w-[494px] mx-auto'>
					{ renderContent() }
				</div>
				<div className='lg:col-span-7 max-sm:-mx-4 relative flex items-center justify-center lg:justify-end'>
					{ renderBackgroundBlue() }
					<Image
						src={ appsData.image }
						alt=''
						width={ 1032 }
						height={ 1668 }
						quality={ 100 }
						className='w-full sm:w-auto h-auto min-h-[654px] sm:h-[834px] object-contain relative top-[17px] lg:top-[62px] lg:absolute lg:right-0'
					/>
				</div>
			</div>
		</div>
	);
};

export default Apps;
