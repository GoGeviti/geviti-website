import React from 'react';
import Image from 'next/image';

import { membershipData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

const featuresData = membershipData.features;
type FeatureProps = {
	id: number;
	preTitle: string;
	title: string;
	description: string;
	image: string | null;
	main: boolean;
	list: {
		listStyleType: string | null;
		icon: ((props?: React.SVGProps<SVGSVGElement> | undefined) => React.JSX.Element) | null; // eslint-disable-line no-unused-vars
		items: string[];
	} | null;
};

const splitList = (list: string[], size = 3) => {
	return [...Array(Math.ceil(list.length / size))].map((_, i) => list.slice(i * size, i * size + size));
};

const Features: React.FC = () => {
	const renderContent = (feature: FeatureProps) => {
		if (feature.main) {
			const Icon = feature.list?.icon;
			const list = feature.list?.items ?? [];
			const splittedList = splitList(list);

			return (
				<div className='flex flex-col items-center w-full max-lg:px-4 py-[52px] lg:py-[81px]'>
					<div className='lg:max-w-[782px] lg:mx-auto text-center'>
						<p className='text-grey-primary text-pretitle'>{ feature.preTitle }</p>
						<h2 className='lg:mt-2 mb-3 lg:mb-6 text-[6.154vw] xs2:text-2xl md:text-3xl lg:text-4xl !leading-normal -tracking-0.04em lg:font-medium text-primary'>
							<span dangerouslySetInnerHTML={ { __html: feature.title } } />
						</h2>
						<p className='text-xs lg:text-sm !leading-normal lg:!leading-5 text-grey-400 lg:text-grey-primary'>{ feature.description }</p>
					</div>
					<div className='lg:container-center w-full'>
						<div className='flex max-lg:flex-col lg:justify-between max-lg:gap-y-6 w-full mt-[27px] lg:mt-[86px] text-left'>
							{ splittedList.map((items: string[], itemsIdx: number) => {
								return (
									<div
										key={ `items-${ itemsIdx }` }
										className='flex flex-col gap-y-6'>
										{ items.map((item: string, itemIdx: number) => {
											return (
												<div
													key={ `item-${ itemIdx }` }
													className='lg:py-18px lg:px-6 flex items-center gap-2.5 lg:gap-[11px]'>
													{ Icon && <Icon className='flex-shrink-0' /> }
													<span className='text-grey-500 text-lg lg:!leading-6'>{ item }</span>
												</div>
											);
										}) }
									</div>
								);
							}) }
						</div>
					</div>
				</div>
			);
		}

		const list = feature.list?.items ?? [];
		const splittedList = splitList(list);

		return (
			<div className='w-full h-full px-3.5 pt-3.5 pb-6 lg:pb-3.5 flex flex-col gap-y-3'>
				{ feature.image && (
					<div className='rounded-2xl relative overflow-hidden w-full border border-grey-50 bg-white aspect-[347/299] lg:aspect-[435/299] px-4 lg:px-[46px] py-12 lg:py-[38px]'>
						<div className={ clsxm(
							feature.id === 2 && 'relative w-full h-full',
							feature.id === 3 && 'absolute inset-0 w-full h-full',
							feature.id === 4 && 'absolute inset-y-0 left-1/2 -translate-x-1/2 w-full h-full'
						) }>
							<Image
								src={ feature.image }
								alt=''
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								className={ clsxm(
									'w-full h-full object-contain',
									feature.id === 2 && 'object-center',
									feature.id === 3 && 'object-right-bottom',
									feature.id === 4 && 'object-bottom'
								) }
							/>
						</div>
					</div>
				) }
				<div>
					<p className='text-grey-primary text-[10px] !leading-6 tracking-0.11em uppercase font-semibold'>{ feature.preTitle }</p>
					<h2 className='mt-2 mb-18px text-[6.154vw] xs2:text-2xl !leading-normal -tracking-0.04em text-primary'>
						<span dangerouslySetInnerHTML={ { __html: feature.title } } />
					</h2>
					{ feature.description && (
						<p
							dangerouslySetInnerHTML={ { __html: feature.description } }
							className='text-xs !leading-5 text-grey-primary' />
					) }

					{ feature.list && (
						<div className='w-full mt-18px flex gap-6'>
							{ splittedList.map((items: string[], itemsIdx: number) => {
								return (
									<ul
										key={ `items-${ itemsIdx }` }
										className='list-inside list-disc text-sm !leading-8 text-grey-primary'>
										{ items.map((item: string, itemIdx: number) => {
											return (
												<li key={ `item-${ itemIdx }` }>
													{ item }
												</li>
											);
										}) }
									</ul>
								);
							}) }
						</div>
					) }
				</div>
			</div>
		);
	};

	return (
		<div className='lg:px-3 overflow-hidden'>
			<div className='grid lg:grid-cols-3 lg:gap-x-3 gap-y-6'>
				{ featuresData.map((feature: FeatureProps) => {
					return (
						<div
							key={ feature.id }
							className={ clsxm('bg-white rounded-19px w-full', feature.main ? 'lg:col-span-3' : 'lg:col-span-1') }>
							{ renderContent(feature) }
						</div>
					);
				}) }
			</div>
		</div>
	);
};

export default Features;