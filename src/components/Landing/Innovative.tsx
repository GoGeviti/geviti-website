import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import ButtonCta from './ButtonCta';

const innovativeData = landingData.innovative;

{
	/* eslint-disable @typescript-eslint/no-explicit-any */
}

const Innovative: React.FC = () => {
	const renderTitleDescGridContent = (
		title: string,
		description: string,
		theme = 'light'
	) => {
		return (
			<>
				<h3
					className={ clsxm(
						'text-[6.266vw] max-xs:leading-[32px] xs:text-2xl max-md:!leading-9 md:text-3xl xl:text-4xl xl:!leading-[54px] -tracking-0.04em',
						theme === 'light' ? 'text-white' : 'text-primary'
					) }
				>
					<span dangerouslySetInnerHTML={ { __html: title } } />
				</h3>
				<p
					className={ clsxm(
						'text-grey-primary text-xs lg:text-sm !leading-5',
						theme === 'light' ? 'text-grey-primary' : 'text-grey-700'
					) }
				>
					{ description }
				</p>
			</>
		);
	};

	const renderDashboardContent = (item: any) => {
		return (
			<div className='absolute pl-[39px] lg:pl-[42px] right-0 top-0 pt-[38px] lg:pt-[51px] flex-none'>
				<Image
					alt='bloodwork'
					src={ item.image }
					width={ 2591.06 }
					height={ 1727.38 }
					className='w-[80.971rem] h-full pointer-events-none'
					unoptimized
				/>
			</div>
		);
	};

	const renderUseTelehealthContent = (item: any) => {
		return (
			<div className='flex flex-col justify-between h-full'>
				<div className='flex flex-col gap-3.5 lg:gap-6'>
					{ renderTitleDescGridContent(item.title, item.description) }
				</div>
				<div className='flex lg:mt-20 xl:mt-0'>
					<ButtonCta
						theme='secondary'
						href={ item.btnCta.href }
						text={ item.btnCta.text }
					/>
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
									itemIdx === 1 && 'z-20 -top-3 sm:-top-2',
									itemIdx === 2 && 'z-10 -top-6 sm:-top-4'
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
											itemIdx === 0 && 'w-[310px] sm:w-[503px] h-full',
											itemIdx === 1 && 'w-[291.61px] sm:w-[473px] h-full',
											itemIdx === 2 && 'w-[275.58px] sm:w-[447px] h-full'
										) }
										unoptimized
									/>
								</div>
								{ /* <div className={ clsxm(
									'rounded-xl bg-border-innovative-image',
									itemIdx === 0 && 'p-[0.83px]',
									itemIdx === 1 && 'p-[0.78px]',
									itemIdx === 2 && 'p-[0.74px]',
								) }>
									<div key={ itemIdx } className={ clsxm(
										'w-full relative bg-primary grid grid-cols-4 items-center h-[37.61px] lg:h-[61px] px-3 lg:px-6',
										itemIdx === 0 && 'shadow-[inset_0px_2px_8px_rgba(255,255,255,0.15)] rounded-[calc(0.75rem-0.83px)]',
										itemIdx === 1 && 'rounded-[calc(0.75rem-0.78px)]',
										itemIdx === 2 && 'rounded-[calc(0.75rem-0.74px)]',
									) }>
										<p className={ clsxm(
											'col-span-2',
											itemIdx === 0 && 'text-[#F6F8F9] text-[10.83px] lg:text-[17.57px] font-medium',
											itemIdx === 1 && 'text-grey-400 text-[10.18px] lg:text-[16.52px]',
											itemIdx === 2 && 'text-grey-400 text-[9.62px] lg:text-[15.61px]',
										) }>{ item.title }</p>
										<p className={ clsxm(
											'text-center text-grey-400',
											itemIdx === 0 && 'text-[9.48px] lg:text-[15.37px]',
											itemIdx === 1 && 'text-[8.91px] lg:text-[14.45px]',
											itemIdx === 2 && 'text-[8.42px] lg:text-[13.66px]',
										) }>{ item.date }</p>
										<span className='flex justify-end'>
											<span className={ clsxm(
												'flex justify-center items-center gap-1 font-medium py-1 lg:py-[7px] px-[9px] lg:px-4 border-[1.09px] border-[#F2D9D940] rounded-[100px]',
												itemIdx === 0 && 'text-green-alert text-[6.77px] lg:text-[10.98px]',
												itemIdx === 1 && 'text-[#F7900980] text-[6.35px] lg:text-[10.29px]',
												itemIdx === 2 && 'text-[#F9706680] text-[6px] lg:text-[9.73px]',
											) }>
												{ itemIdx === 0 && (
													<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='max-lg:w-[8.12px] max-lg:h-[8.12px]'>
														<path d="M7.31718 12.9457C4.06197 12.9457 1.41609 10.2998 1.41609 7.04464C1.41609 3.78944 4.06197 1.14355 7.31718 1.14355C10.5724 1.14355 13.2183 3.78944 13.2183 7.04464C13.2183 10.2998 10.5724 12.9457 7.31718 12.9457ZM7.31718 1.96696C4.51759 1.96696 2.2395 4.24506 2.2395 7.04464C2.2395 9.84423 4.51759 12.1223 7.31718 12.1223C10.1168 12.1223 12.3949 9.84423 12.3949 7.04464C12.3949 4.24506 10.1168 1.96696 7.31718 1.96696Z" fill="#1AAE64" />
														<path d="M6.53769 9.00971C6.42791 9.00971 6.32361 8.96579 6.24676 8.88894L4.69326 7.33545C4.53407 7.17626 4.53407 6.91277 4.69326 6.75357C4.85245 6.59438 5.11594 6.59438 5.27514 6.75357L6.53769 8.01613L9.35924 5.19459C9.51843 5.0354 9.78192 5.0354 9.94111 5.19459C10.1003 5.35378 10.1003 5.61727 9.94111 5.77646L6.82863 8.88894C6.75178 8.96579 6.64748 9.00971 6.53769 9.00971Z" fill="#1AAE64" />
													</svg>
												) }
												{ itemIdx === 1 && (
													<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='max-lg:w-[7.62px] max-lg:h-[7.62px]'>
														<path d="M6.95282 1.43708C10.0049 1.43708 12.4857 3.91789 12.4857 6.97001C12.4857 10.0221 10.0049 12.5029 6.95282 12.5029C3.90071 12.5029 1.4199 10.0221 1.4199 6.97001C1.4199 3.91789 3.90071 1.43708 6.95282 1.43708ZM6.95282 11.7309C9.57775 11.7309 11.7137 9.59493 11.7137 6.97001C11.7137 4.34508 9.57775 2.20912 6.95282 2.20912C4.3279 2.20912 2.19194 4.34508 2.19194 6.97001C2.19194 9.59493 4.3279 11.7309 6.95282 11.7309Z" fill="#F79009" fillOpacity="0.5" />
														<path d="M6.95282 6.06955C7.16384 6.06955 7.33884 6.24455 7.33884 6.45557L7.33884 9.02902C7.33884 9.24004 7.16384 9.41504 6.95282 9.41504C6.7418 9.41504 6.5668 9.24004 6.5668 9.02902L6.5668 6.45557C6.5668 6.24455 6.7418 6.06955 6.95282 6.06955Z" fill="#F79009" fillOpacity="0.5" />
														<path d="M6.95282 4.39604C7.01973 4.39604 7.08664 4.41148 7.14841 4.43722C7.21017 4.46295 7.26678 4.49898 7.31825 4.5453C7.36458 4.59677 7.4006 4.64824 7.42634 4.71515C7.45207 4.77692 7.46751 4.84382 7.46751 4.91073C7.46751 4.97764 7.45207 5.04455 7.42634 5.10632C7.4006 5.16808 7.36458 5.2247 7.31825 5.27616C7.26678 5.32249 7.21017 5.35852 7.14841 5.38425C7.02488 5.43572 6.88077 5.43572 6.75724 5.38425C6.69548 5.35852 6.63886 5.32249 6.58739 5.27616C6.54107 5.2247 6.50504 5.16808 6.47931 5.10632C6.45357 5.04455 6.43813 4.97764 6.43813 4.91073C6.43813 4.84382 6.45357 4.77692 6.47931 4.71515C6.50504 4.64824 6.54107 4.59677 6.58739 4.5453C6.63886 4.49898 6.69548 4.46295 6.75724 4.43722C6.819 4.41148 6.88591 4.39604 6.95282 4.39604Z" fill="#F79009" fillOpacity="0.5" />
													</svg>
												) }
												{ itemIdx === 2 && (
													<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='max-lg:w-[7.2px] max-lg:h-[7.2px]'>
														<path d="M6.13097 8.10886C5.93155 8.10886 5.76617 7.94348 5.76617 7.74406V5.31206C5.76617 5.11264 5.93155 4.94727 6.13097 4.94727C6.3304 4.94727 6.49577 5.11264 6.49577 5.31206V7.74406C6.49577 7.94348 6.3304 8.10886 6.13097 8.10886Z" fill="#F97066" fillOpacity="0.5" />
														<path d="M6.13098 9.68983C6.10179 9.68983 6.06774 9.68497 6.0337 9.68011C6.00451 9.67524 5.97533 9.66551 5.94614 9.65092C5.91696 9.64119 5.88778 9.6266 5.85859 9.60715C5.83427 9.58769 5.80995 9.56823 5.78563 9.54878C5.69808 9.45636 5.64458 9.3299 5.64458 9.20344C5.64458 9.07697 5.69808 8.95051 5.78563 8.85809C5.80995 8.83864 5.83427 8.81918 5.85859 8.79972C5.88778 8.78027 5.91696 8.76568 5.94614 8.75595C5.97533 8.74136 6.00451 8.73163 6.0337 8.72676C6.09693 8.71217 6.16502 8.71217 6.22339 8.72676C6.25744 8.73163 6.28662 8.74136 6.31581 8.75595C6.34499 8.76568 6.37418 8.78027 6.40336 8.79972C6.42768 8.81918 6.452 8.83864 6.47632 8.85809C6.56387 8.95051 6.61737 9.07697 6.61737 9.20344C6.61737 9.3299 6.56387 9.45636 6.47632 9.54878C6.452 9.56823 6.42768 9.58769 6.40336 9.60715C6.37418 9.6266 6.34499 9.64119 6.31581 9.65092C6.28662 9.66551 6.25744 9.67524 6.22339 9.68011C6.19421 9.68497 6.16016 9.68983 6.13098 9.68983Z" fill="#F97066" fillOpacity="0.5" />
														<path d="M9.07855 11.7127H3.1834C2.23492 11.7127 1.51018 11.3674 1.14052 10.7448C0.775721 10.1222 0.824361 9.31964 1.28644 8.4879L4.23402 3.18615C4.72042 2.31064 5.39165 1.8291 6.13097 1.8291C6.8703 1.8291 7.54153 2.31064 8.02793 3.18615L10.9755 8.49277C11.4376 9.32451 11.4911 10.1222 11.1214 10.7497C10.7518 11.3674 10.027 11.7127 9.07855 11.7127ZM6.13097 2.5587C5.67376 2.5587 5.22627 2.90891 4.8712 3.54123L1.92849 8.84784C1.59774 9.44125 1.54423 9.98601 1.77284 10.38C2.00145 10.774 2.5073 10.988 3.18826 10.988H9.08341C9.76437 10.988 10.2654 10.774 10.4988 10.38C10.7323 9.98601 10.6739 9.44611 10.3432 8.84784L7.39075 3.54123C7.03567 2.90891 6.58819 2.5587 6.13097 2.5587Z" fill="#F97066" fillOpacity="0.5" />
													</svg>
												) }
												{ item.badge }
											</span>
										</span>
									</div>
								</div> */ }
							</div>
						);
					}) }
				</div>
				<div className='flex flex-col gap-y-3.5 lg:gap-y-6'>
					{ renderTitleDescGridContent(item.title, item.description) }
				</div>
			</div>
		);
	};

	const renderApplicationContent = (item: any) => {
		return (
			<div className='h-full grid-cols-1 grid lg:grid-cols-2 max-lg:gap-y-5 lg:gap-x-8 relative overflow-hidden'>
				<div>
					<div className='w-full flex flex-col gap-y-3'>
						{ renderTitleDescGridContent(item.title, item.description, 'dark') }
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
			case '1':
				return renderDashboardContent(item);
			case '2':
				return renderUseTelehealthContent(item);
			case '3':
				return renderUpdateTestResultContent(item);
			case '4':
				return renderApplicationContent(item);
			default:
				return null;
		}
	};

	const resolveGridBoxClassName = (id: string) => {
		switch (id) {
			case '1':
				return 'lg:col-span-2 bg-blue-primary max-lg:h-[369px]';
			case '2':
				return 'lg:col-span-1 bg-primary max-lg:order-3 max-lg:h-[369px]';
			case '3':
				return 'lg:col-span-1 bg-primary max-lg:order-1 max-lg:h-[369px]';
			case '4':
				return 'lg:col-span-2 bg-blue-primary max-lg:order-2 max-lg:h-[738px] !pb-0';
			default:
				return '';
		}
	};

	return (
		<div className='lg:px-3 font-Poppins'>
			<div className='container-center text-center lg:text-left mb-[42px] lg:mb-[74px]'>
				<p className='text-grey-primary text-pretitle max-lg:mb-2.5'>
					{ innovativeData.preTitle }
				</p>

				<h2 className='text-2xl md:text-4xl lg:text-[64px] lg:leading-normal -tracking-0.04em max-md:mx-auto max-md:max-w-[330px]'>
					<span dangerouslySetInnerHTML={ { __html: innovativeData.title } } />
				</h2>
				<p className='text-grey-400 text-xs lg:text-sm !leading-5 max-lg:mx-auto max-w-[300px] mt-2.5 lg:mt-4 lg:max-w-[561px]'>
					{ innovativeData.description }
				</p>
			</div>
			<div className='max-lg:px-4 grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-[26px] lg:gap-x-6 lg:auto-rows-fr xl:auto-rows-[32.125rem]'>
				{ innovativeData.list.map(item => (
					<div
						key={ item.id }
						className={ clsxm(
							'relative overflow-hidden isolate w-full h-full py-6 lg:pt-[42px] lg:pb-[46px] px-4 lg:px-9 rounded-19px',
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
