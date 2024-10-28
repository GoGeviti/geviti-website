import React from 'react';
import Image from 'next/image';

import landingData from '@/constant/data/landing';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';

const innovativeData = landingData.innovative;

{
	/* eslint-disable @typescript-eslint/no-explicit-any */
}

const Innovative: React.FC = () => {
	const renderTitleGridContent = (
		title: string,
		cardTheme: 'light' | 'dark' = 'light',
		className?: string
	) => {
		return (
			<h3
				className={ clsxm(
					'text-[6vw] xs:text-2xl md:text-3xl xl:text-4xl !leading-normal -tracking-0.04em',
					cardTheme === 'dark' ? 'text-white' : 'text-primary',
					className
				) }
			>
				<span dangerouslySetInnerHTML={ { __html: title } } />
			</h3>
		);
	};

	const renderDescGridContent = (
		description: string,
		cardTheme = 'light',
		className?: string
	) => {
		return (
			<p
				className={ clsxm(
					'text-xs lg:text-sm !leading-5',
					cardTheme === 'dark' ? 'text-grey-300' : 'text-grey-400',
					className
				) }
			>
				{ description }
			</p>
		);
	};

	const renderDashboardContent = (item: any) => {
		return (
			<div className='absolute pl-5 lg:pl-0 right-0 inset-y-0 pt-5 lg:pt-0 flex-none'>
				<Image
					alt='bloodwork'
					src={ item.image }
					width={ 858 * 2 }
					height={ 451 * 2 }
					className='max-md:w-[80.971rem] lg:w-auto object-cover object-left-top h-full pointer-events-none rounded-tl-[19px]'
				/>
			</div>
		);
	};

	const renderUseTelehealthContent = (item: any) => {
		return (
			<div className='h-full lg:grid lg:grid-cols-11 lg:gap-x-5 relative overflow-hidden'>
				<div className='flex flex-col justify-between h-full lg:pb-[41px] lg:col-span-4'>
					<div className='flex flex-col gap-3.5 lg:gap-6 lg:max-w-[516px]'>
						{ renderTitleGridContent(item.title, 'dark') }
						<div className='lg:max-w-[463px]'>
							{ renderDescGridContent(item.description, 'dark') }
						</div>
					</div>
					<div className='flex lg:mt-20 xl:mt-0'>
						<ButtonCta
							theme='secondary'
							href={ item.btnCta.href }>
							<span
								dangerouslySetInnerHTML={ {
									__html: item.btnCta.text ?? 'Join Now',
								} }
							/>
						</ButtonCta>
					</div>
				</div>
				<div className='lg:col-span-7 relative w-full h-full'>
					{ renderDashboardContent(item) }
				</div>
			</div>
		);
	};

	const renderUpdateTestResultContent = (item: any) => {
		return (
			<div className='flex flex-col justify-between h-full'>
				<div className='flex flex-col h-full justify-center items-center relative lg:-mx-5'>
					{ item.groupImages.map((image: any, itemIdx: number) => {
						return (
							<div
								key={ itemIdx }
								className={ clsxm(
									'relative overflow-hidden',
									itemIdx === 0 && 'z-30',
									itemIdx === 1 && 'z-20 -top-4',
									itemIdx === 2 && 'z-10 -top-8'
								) }
							>
								<div className='relative overflow-hidden w-full h-full'>
									<Image
										src={ image }
										alt=''
										width={ 2515 }
										height={ 305 }
										className={ clsxm(
											'pointer-events-none',
											itemIdx === 1 && 'scale-95',
											itemIdx === 2 && 'scale-90'
										) }
									/>
								</div>
							</div>
						);
					}) }
				</div>
				<div className='flex flex-col gap-y-3.5 lg:gap-y-6'>
					{ renderTitleGridContent(item.title) }
					<div className='lg:max-w-[463px]'>
						{ renderDescGridContent(item.description) }
					</div>
				</div>
			</div>
		);
	};

	const renderApplicationContent = (item: any) => {
		return (
			<div className='h-full grid-cols-1 grid lg:grid-cols-2 lg:gap-x-8 overflow-hidden'>
				<div>
					<div className='w-full flex flex-col gap-y-3.5 lg:gap-y-18px'>
						<div className='max-sm:max-w-[350px] lg:max-w-[362px]'>
							{ renderTitleGridContent(item.title, 'light', 'max-lg:text-black') }
						</div>
						<div className='max-w-[299px]'>
							{ renderDescGridContent(
								item.description,
								'light',
								'max-lg:text-black'
							) }
						</div>
					</div>
					<div className='flex flex-col gap-y-18px mt-7 mb-[14px] lg:mt-12'>
						{ item.list.map((detailItem: any, detailIdx: number) => {
							const Icon = detailItem.icon;

							return (
								<div
									key={ detailIdx }
									className='flex items-center justify-start gap-3.5'
								>
									<Icon className='flex-shrink-0' />
									<h4 className='text-xs !leading-6 uppercase font-normal tracking-0.11em'>
										{ detailItem.text }
									</h4>
								</div>
							);
						}) }
					</div>
				</div>
				<div className='absolute bottom-0 lg:inset-y-0 left-0 lg:left-[8%] xl:left-[14%] right-0'>
					<div className='w-full max-sm:aspect-[343/413] max-lg:aspect-[688/514] max-sm:max-h-[425px] h-full relative overflow-hidden'>
						<div className='max-lg:-bottom-[4.5%] max-lg:left-[7%] absolute w-full h-full'>
							<Image
								src={ item.image }
								alt=''
								fill
								className='object-cover max-lg:object-right-top'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const renderGridItem = (item: any) => {
		switch (item.id) {
			case 'bloodwork-dashboard':
				return renderDashboardContent(item);
			case 'telehealth-dashboard':
				return renderUseTelehealthContent(item);
			case 'test-results':
				return renderUpdateTestResultContent(item);
			case 'mobile-application':
				return renderApplicationContent(item);
			default:
				return null;
		}
	};

	const resolveGridBoxClassName = (id: string) => {
		switch (id) {
			case 'bloodwork-dashboard':
				return 'lg:hidden bg-primary max-lg:order-3 max-lg:h-[369px] !pb-0 !pr-0';
			case 'mobile-application':
				return 'lg:col-span-7 bg-white max-lg:order-2 max-lg:h-[738px] !pb-0';
			case 'test-results':
				return 'lg:col-span-5 bg-white max-lg:order-1 max-lg:h-[369px] max-lg:!pb-[34px]';
			case 'telehealth-dashboard':
				return 'lg:col-span-12 bg-primary max-lg:order-4 max-lg:h-[369px] lg:!pb-0 lg:!pr-0';
			default:
				return '';
		}
	};

	return (
		<div className='lg:px-3 font-Poppins mt-6'>
			{ /* <div className='container-center text-center lg:text-left max-lg:hidden lg:mb-[90px]'> */ }
			{ /* <p className='text-grey-primary text-pretitle max-lg:mb-2.5'>
					{ innovativeData.preTitle }
				</p>

				<h2 className='text-2xl md:text-4xl lg:text-[4.444vw] xl:text-[64px] lg:!leading-normal -tracking-0.04em max-md:mx-auto max-md:max-w-[330px]'>
					<span dangerouslySetInnerHTML={ { __html: innovativeData.title } } />
				</h2> */ }
			{ /* <p className='text-grey-400 text-xs lg:text-sm !leading-5 max-lg:mx-auto max-w-[300px] mt-2.5 lg:mt-4 lg:max-w-[561px]'>
          {innovativeData.description}
        </p> */ }
			{ /* </div> */ }
			<div className='max-lg:px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:auto-rows-fr xl:auto-rows-[32.125rem]'>
				{ innovativeData.list.map(item => (
					<div
						key={ item.id }
						className={ clsxm(
							'relative overflow-hidden isolate w-full h-full py-6 lg:pt-[42px] lg:pb-[46px] px-5 lg:px-9 rounded-19px',
							resolveGridBoxClassName(item.id)
						) }
					>
						{ renderGridItem(item) }
					</div>
				)) }
			</div>
		</div>
	);
};

export default Innovative;
