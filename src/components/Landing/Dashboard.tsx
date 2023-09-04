import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { CheckCircleIcon, ChevronRight } from '../Icons';

const dashboardData = landingData.dashboard;

type BoxShortDescProps = {
	outerClassName?: string;
	className?: string;
	children?: string;
};

const BoxShortDesc: React.FC<BoxShortDescProps> = ({
	outerClassName,
	className,
	children
}) => {
	return (
		<div className={ clsxm('absolute z-10', outerClassName) }>
			<div className={ clsxm(
				'bg-white bg-opacity-50 inline-flex items-center gap-1.5 md:gap-2.5 font-BRSonoma text-primary font-medium',
				className
			) }>
				<CheckCircleIcon className='flex-shrink-0 w-2 h-2 md:w-[13px] md:h-[13px]' />
				<span>{ children }</span>
			</div>
		</div>
	);
};

const Dashboard: React.FC = () => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<div className='bg-blue-1 container-center h-full w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='max-md:pb-[93px] pt-[41px] sm:pt-[113px] relative isolate'>
					<div className='mx-auto max-w-2xl text-center'>
						<p className='text-pretitle text-blue-2'>
							{ dashboardData.preTitle }
						</p>
						<h2 className='text-heading-2 mt-11px sm:mt-7px'>
							{ dashboardData.title }
						</h2>
						<div className='flex justify-center mt-[22px] sm:mt-9'>
							<CustomLink
								href={ dashboardData.btnCta.href }
								externalLink={ dashboardData.btnCta.externalLink }
								className='btn-cta-landing btn-secondary group'
							>
								<span className='text-btn-cta-landing'>
									{ dashboardData.btnCta.text }
								</span>

								<ChevronRight className='arrow-btn-cta-landing' />
							</CustomLink>
						</div>
					</div>
					<div className='mt-[82px] flow-root sm:mt-[90px] max-w-5xl mx-auto px-5 sm:px-30px'>
						<Image
							src={ dashboardData.image }
							alt=''
							width={ 1924 }
							height={ 1282 }
							className='shadow-[0px_-42px_250px_0px_rgba(0,0,0,0.15)] rounded sm:rounded-t'
						/>
					</div>

					<BoxShortDesc
						outerClassName='top-[250px] sm:top-[294px] left-10'
						className='rounded-[5px] md:rounded-[10px] shadow-[0px_10.20453px_20.83426px_0px_rgba(0,0,0,0.05)] md:shadow-[0px_21.74702px_44.40016px_0px_rgba(0,0,0,0.05)] py-2.5 md:py-5 px-[13px] md:px-7 text-[8px] md:text-[17px] backdrop-blur-sm md:backdrop-blur-[10px]'
					>
						Health Metric Tracking
					</BoxShortDesc>

					<BoxShortDesc
						outerClassName='bottom-[124px] left-0'
						className='rounded-[5px] md:rounded-[11px] shadow-[0px_10.70435px_21.85471px_0px_rgba(0,0,0,0.05)] md:shadow-[0px_23.15005px_47.26468px_0px_rgba(0,0,0,0.05)] py-2.5 md:py-[22px] px-[13px] md:px-30px text-[9px] md:text-[19px] backdrop-blur-[5px] md:backdrop-blur-[11px]'
					>
						Direct Messaging
					</BoxShortDesc>

					<BoxShortDesc
						outerClassName='top-[213px] sm:top-[225px] right-10'
						className='rounded md:rounded-lg shadow-[0px_9.27843px_18.94345px_0px_rgba(0,0,0,0.05)] md:shadow-[0px_16.41462px_33.51317px_0px_rgba(0,0,0,0.05)] py-9px md:py-15px px-3 md:px-5 text-[7px] md:text-[13px] backdrop-blur-sm md:backdrop-blur'
					>
						Goal Tracking
					</BoxShortDesc>

					<BoxShortDesc
						outerClassName='max-md:bottom-[161px] md:top-[486px] right-0'
						className='rounded-md md:rounded-[11px] shadow-[0px_12.70039px_25.92997px_0px_rgba(0,0,0,0.05)] md:shadow-[0px_24px_49px_0px_rgba(0,0,0,0.05)] py-3 md:py-[22px] px-4 md:px-30px text-[10px] md:text-[19px] backdrop-blur-[6px] md:backdrop-blur-md'
					>
						Video Calls
					</BoxShortDesc>

					<BoxShortDesc
						outerClassName='bottom-9 md:bottom-[95px] max-md:left-[63px] md:right-2.5'
						className='rounded-[5px] md:rounded-[9px] shadow-[0px_18.91892px_20.27815px_0px_rgba(0,0,0,0.09)] md:shadow-[0px_19.09002px_38.97546px_0px_rgba(0,0,0,0.05)] py-9px md:py-18px px-[13px] md:px-25px text-[8px] md:text-[15px] backdrop-blur-[5px] md:backdrop-blur-[9px]'
					>
						& More
					</BoxShortDesc>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
