import React from 'react';
import Image from 'next/image';

import { marketingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { SlugOpt } from '@/interfaces/marketing';

const stepsData = marketingData.steps;

type StepsProps = {
  slug: SlugOpt;
};

const Steps: React.FC<StepsProps> = ({ slug }) => {
	const renderImage = () => {
		const bgTheme = stepsData.backgroundTheme[slug];

		return (
			<div
				className={ clsxm(
					'group w-full h-full max-lg:aspect-[450/743] max-h-[743px] relative overflow-hidden rounded-[16.6px]',
					bgTheme === 'black' ? 'bg-primary' : 'bg-gradient-blue'
				) }
			>
				<Image
					src={ stepsData.image }
					alt='Our Process'
					className='object-cover w-full h-full'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
					fill
				/>
			</div>
		);
	};

	const renderContent = () => {
		return (
			<div className='flex flex-col justify-center w-full h-full lg:py-[101.42px] text-primary'>
				<div>
					<h2 className='font-medium text-4xl !leading-normal -tracking-0.04em'>
						{ stepsData.title }
					</h2>
				</div>
				<div className='mt-[62px] flex flex-col gap-y-2.5 w-full'>
					{ stepsData.list[slug].map((item, itemIdx) => (
						<div
							key={ item.title }
							className='flex gap-6'>
							<div className='mt-1 flex flex-shrink-0 bg-primary w-[27px] h-[27px] relative rounded-full'>
								<span className='absolute-center flex-shrink-0 text-[10px] leading-8 text-blue-primary'>
									{ itemIdx + 1 }
								</span>
							</div>
							<div>
								<h4 className='text-2xl'>{ item.title }</h4>
								<p className='text-lg !leading-8 text-gray-500'>
									{ item.description }
								</p>
							</div>
						</div>
					)) }
				</div>
			</div>
		);
	};

	return (
		<div className='w-full overflow-hidden container-center pb-[42px] lg:pb-[163px]'>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-[42px] lg:gap-5'>
				<div className='lg:col-span-5'>{ renderImage() }</div>
				<div className='lg:col-span-7 w-full max-w-[543px] mx-auto'>
					{ renderContent() }
				</div>
			</div>
		</div>
	);
};

export default Steps;
