import React from 'react';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { CheckCircleIcon, ChevronRight } from '../Icons';

const dashboardData = landingData.dashboard;

type BoxShortDescProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	outerClassName?: string;
	className?: string;
	children?: string;
	iconClassName?: string;
};

const BoxShortDesc: React.FC<BoxShortDescProps> = ({
	outerClassName,
	className,
	children,
	iconClassName,
	...props
}) => {
	return (
		<div
			{ ...props }
			className={ clsxm('absolute z-10', outerClassName) }>
			<div
				className={ clsxm(
					'bg-white bg-opacity-50 inline-flex items-center gap-1.5 md:gap-2.5 font-BRSonoma text-primary font-medium',
					className
				) }
			>
				<CheckCircleIcon
					className={ clsxm('flex-shrink-0 text-primary', iconClassName) }
				/>
				<span>{ children }</span>
			</div>
		</div>
	);
};

const Dashboard: React.FC = () => {
	return (
		<div className='hidden lg:block lg:px-3 lg:py-15px overflow-hidden'>
			<div className='bg-blue-1 h-full w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='container-center max-md:pb-[93px] pt-[41px] sm:pt-[113px] relative isolate'>
					<div className='mx-auto max-w-2xl text-center'>
						<p className='text-pretitle text-blue-2'>
							{ dashboardData.preTitle }
						</p>
						<h2 className='font-Poppins text-[21px] md:text-[32px] lg:text-[36px]  leading-[27px] sm:leading-[125%] -tracking-[0.84px] md:-tracking-0.04em text-primary max-w-[287px] mx-auto sm:max-w-[447px] mt-11px sm:mt-7px'>
							{ dashboardData.title }
						</h2>
						<div className='flex justify-center mt-[22px] sm:mt-9'>
							<CustomLink
								href={ dashboardData.btnCta.href }
								externalLink={ dashboardData.btnCta.externalLink }
								className='btn-cta-landing btn-secondary group py-[10.3] px-[17.3px]'
								aria-label={ dashboardData.btnCta.text }
							>
								<span className='text-btn-cta-landing'>
									{ dashboardData.btnCta.text }
								</span>

								<ChevronRight className='arrow-btn-cta-landing' />
							</CustomLink>
						</div>
					</div>
					<div className='mt-[72px] flow-root sm:mt-[90px] lg:-mb-10 max-w-5xl mx-auto relative'>
						{ /* <div className='absolute-center rounded-[3.383px] sm:rounded-[10.689px] w-[90%] h-[90%] bg-[#EBEFF0] -z-10 shadow-[0px_-13.29418px_79.13201px_0px_rgba(0,0,0,0.15)] sm:shadow-[0px_-42px_250px_0px_rgba(0,0,0,0.15)]' /> */ }
						<video
							autoPlay
							muted
							playsInline
							width={ 1924 }
							height={ 1282 }
							className='w-full h-full object-cover'
						>
							<source
								src='/videos/dashboard_safari.mp4'
								type='video/mp4;codecs=hvc1'
							/>
							<source
								src='/videos/dashboard.webm'
								type='video/webm' />
							Your browser does not support the video tag.
						</video>
					</div>

					<BoxShortDesc
						data-aos='fade-right'
						iconClassName='w-[9px] h-[9px] md:w-4 md:h-4'
						outerClassName='top-[248px] sm:top-[294px] left-10 xl:left-[80px]'
						className='rounded-[5px] md:rounded-[10px] shadow-[0px_10.20453px_20.83426px_0px_rgba(0,0,0,0.05)] md:shadow-[0px_21.74702px_44.40016px_0px_rgba(0,0,0,0.05)] py-2.5 md:py-5 px-[13px] md:px-7 text-[8.173px] md:text-[17px] backdrop-blur-sm md:backdrop-blur-[10px]'
					>
						Health Metric Tracking
					</BoxShortDesc>

					<BoxShortDesc
						data-aos='fade-right'
						iconClassName='w-[9px] h-[9px] md:w-[17px] md:h-[17px]'
						outerClassName='bottom-[110px] left-3 lg:left-0 xl:left-[10px]'
						className='rounded-[5px] md:rounded-[11px] shadow-[0px_10.70435px_21.85471px_0px_rgba(0,0,0,0.05)] md:shadow-[0px_23.15005px_47.26468px_0px_rgba(0,0,0,0.05)] py-2.5 md:py-[22px] px-[13px] md:px-30px text-[8.573px] md:text-[19px] backdrop-blur-[5px] md:backdrop-blur-[11px]'
					>
						Direct Messaging
					</BoxShortDesc>

					<BoxShortDesc
						data-aos='fade-left'
						iconClassName='w-2 h-2 md:w-[13px] md:h-[13px]'
						outerClassName='top-[213px] sm:top-[225px] right-10 xl:right-[80px]'
						className='rounded md:rounded-lg shadow-[0px_9.27843px_18.94345px_0px_rgba(0,0,0,0.05)] md:shadow-[0px_16.41462px_33.51317px_0px_rgba(0,0,0,0.05)] py-9px md:py-15px px-3 md:px-5 text-[7.431px] md:text-[13px] backdrop-blur-sm md:backdrop-blur'
					>
						Goal Tracking
					</BoxShortDesc>

					<BoxShortDesc
						data-aos='fade-left'
						iconClassName='w-2.5 h-2.5 md:w-18px md:h-18px'
						outerClassName='max-md:bottom-[161px] md:top-[486px] right-3 xl:right-[40px]'
						className='rounded-md md:rounded-[11px] shadow-[0px_12.70039px_25.92997px_0px_rgba(0,0,0,0.05)] md:shadow-[0px_24px_49px_0px_rgba(0,0,0,0.05)] py-3 md:py-[22px] px-4 md:px-30px text-[10.171px] md:text-[19px] backdrop-blur-[6px] md:backdrop-blur-md'
					>
						Video Calls
					</BoxShortDesc>

					<BoxShortDesc
						data-aos='fade-left'
						iconClassName='w-2.5 h-2.5 md:w-3.5 md:h-3.5'
						outerClassName='bottom-[95px] xl:bottom-[130px] right-2.5 max-md:hidden xl:right-[44px]'
						className='rounded-[9px] shadow-[0px_19.09002px_38.97546px_0px_rgba(0,0,0,0.05)] py-18px px-25px text-[15px] backdrop-blur-[9px]'
					>
						& More
					</BoxShortDesc>

					<BoxShortDesc
						data-aos='fade-right'
						outerClassName='bottom-9 left-[63px] md:hidden'
						className='rounded-[5px] shadow-[0px_18.91892px_20.27815px_0px_rgba(0,0,0,0.09)] py-9px px-[13px] text-[7.954px] backdrop-blur-[5px]'
					>
						& More
					</BoxShortDesc>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
