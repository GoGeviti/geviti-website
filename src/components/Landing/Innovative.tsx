import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import ButtonCta from './ButtonCta';

const innovativeData = landingData.innovative;

{ /* eslint-disable @typescript-eslint/no-explicit-any */ }

const Innovative: React.FC = () => {
	const renderTitleGridContent = (title: string, cardTheme: 'light' | 'dark' = 'light', className?: string) => {
		return (
			<h3 className={ clsxm(
				'text-[6vw] xs:text-2xl md:text-3xl xl:text-4xl !leading-normal -tracking-0.04em',
				cardTheme === 'dark' ? 'text-white' : 'text-primary',
				className
			) }>
				<span dangerouslySetInnerHTML={ { __html: title } } />
			</h3>
		);
	};

	const renderDescGridContent = (description: string, cardTheme = 'light', className?: string) => {
		return (
			<p className={ clsxm(
				'text-xs lg:text-sm !leading-5',
				cardTheme === 'dark' ? 'text-grey-300' : 'text-grey-400',
				className
			) }>{ description }</p>
		);
	};

	const renderDashboardContent = (item: any) => {
		return (
			<div className='absolute pl-[39px] lg:pl-0 right-0 top-0 pt-[38px] lg:pt-0 flex-none'>
				<Image
					alt='bloodwork'
					src={ item.image }
					width={ 2591.06 }
					height={ 1727.38 }
					className='w-[80.971rem] lg:w-[47.625rem] h-full pointer-events-none'
				/>
			</div>
		);
	};

	const renderUseTelehealthContent = (item: any) => {
		return (
			<div className='h-full lg:grid lg:grid-cols-9 lg:gap-x-8 relative overflow-hidden'>
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
							href={ item.btnCta.href }
						>
							<span dangerouslySetInnerHTML={ { __html: item.btnCta.text ?? 'Join Now' } } />
						</ButtonCta>
					</div>
				</div>
				<div className='lg:col-span-5 relative max-lg:hidden w-full h-full'>
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
									itemIdx === 2 && 'z-10 -top-8',
								) }>
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
					{ renderDescGridContent(item.description) }
				</div>
			</div>
		);
	};

	const renderApplicationContent = (item: any) => {
		return (
			<div className='h-full grid-cols-1 grid lg:grid-cols-2 max-lg:gap-y-[42px] lg:gap-x-8 relative overflow-hidden'>
				<div className='lg:pb-[54px]'>
					<div className='w-full flex flex-col gap-y-3.5 lg:gap-y-18px'>
						<div className='max-sm:max-w-[350px]'>
							{ renderTitleGridContent(item.title, 'light', 'max-lg:text-black') }
						</div>
						{ renderDescGridContent(item.description, 'light', 'max-lg:text-black') }
					</div>
					<div className='flex flex-col gap-y-18px mt-7 lg:mt-12'>
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
				<div className='relative lg:absolute max-lg:flex max-lg:justify-center max-lg:w-full lg:top-0 lg:right-0'>
					<div className='relative overflow-hidden w-[271.93px] h-[588.48px]'>
						<div className='absolute w-full h-full bg-blue-alice rounded-t-[50px] -bottom-5' />
						<video
							autoPlay
							muted
							playsInline
							className='absolute w-full h-full inset-0 object-cover z-10 pointer-events-none'
						>
							<source
								src='/videos/application_safari.mp4'
								type='video/mp4;codecs=hvc1'
							/>
							<source
								src='/videos/application.webm'
								type='video/webm' />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		);
	};

	const renderGridItem = (item: any) => {
		switch (item.id) {
			case 'bloodwork-dashboard': return renderDashboardContent(item);
			case 'telehealth-dashboard': return renderUseTelehealthContent(item);
			case 'test-results': return renderUpdateTestResultContent(item);
			case 'mobile-application': return renderApplicationContent(item);
			default: return null;
		}
	};

	const resolveGridBoxClassName = (id: string) => {
		switch (id) {
			case 'bloodwork-dashboard': return 'lg:hidden bg-primary max-lg:order-3 max-lg:h-[369px] !pb-0 !pr-0';
			case 'mobile-application': return 'lg:col-span-7 bg-white max-lg:order-2 max-lg:h-[738px] !pb-0';
			case 'test-results': return 'lg:col-span-5 bg-white max-lg:order-1 max-lg:h-[369px] max-lg:!pb-[34px]';
			case 'telehealth-dashboard': return 'lg:col-span-12 bg-primary max-lg:order-4 max-lg:h-[369px] lg:!pb-0 lg:!pr-0';
			default: return '';
		}
	};

	return (
		<div className='lg:px-3 font-Poppins'>
			<div className='container-center text-center lg:text-left max-lg:hidden lg:mb-[88px]'>
				<p className='text-grey-primary text-pretitle max-lg:mb-2.5'>{ innovativeData.preTitle }</p>

				<h2 className='text-2xl md:text-4xl lg:text-[4.444vw] xl:text-[64px] lg:!leading-normal -tracking-0.04em max-md:mx-auto max-md:max-w-[330px]'>
					<span dangerouslySetInnerHTML={ { __html: innovativeData.title } } />
				</h2>
				<p className='text-grey-400 text-xs lg:text-sm !leading-5 max-lg:mx-auto max-w-[300px] mt-2.5 lg:mt-4 lg:max-w-[561px]'>
					{ innovativeData.description }
				</p>
			</div>
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