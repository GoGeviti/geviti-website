import React from 'react';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const applicationData = landingData.application;

const Application: React.FC = () => {
	const renderTitleDesc = () => {
		return (
			<>
				<p className='mb-7px text-pretitle text-grey-primary'>{ applicationData.preTitle }</p>

				<h2 className='hidden lg:block mb-3.5 font-Poppins text-[21px] md:text-[32px] lg:text-4xl leading-[27px] sm:leading-[125%] -tracking-[0.84px] md:-tracking-0.04em text-primary max-sm:max-w-[293px] max-sm:mx-auto lg:max-w-[450px]'>
					{ applicationData.title }
				</h2>
				<h2 className='lg:hidden mb-3.5 font-Poppins text-[21px] md:text-[32px] lg:text-4xl leading-[27px] sm:leading-[125%] -tracking-[0.84px] md:-tracking-0.04em text-primary max-sm:max-w-[293px] max-sm:mx-auto lg:max-w-[450px]'>
					{ applicationData.titleMobile }
				</h2>

				<p className='text-grey-primary text-xs sm:text-sm leading-5 font-BRSonoma max-sm:max-w-[292px] max-sm:mx-auto lg:max-w-[338px]'>
					{ applicationData.description }
				</p>
			</>
		);
	};

	return (
		<div className='lg:px-3 overflow-hidden'>
			<div className='bg-grey-secondary h-full w-full lg:rounded-[19px] relative'>
				<div className='container-center pt-[46px] pb-[63px] lg:py-24 flex flex-col lg:grid lg:grid-cols-2 lg:flex-row items-center sm:max-w-5xl mx-auto gap-[42px] xl:gap-24 text-center lg:text-left'>
					<div className='lg:hidden'>{ renderTitleDesc() }</div>

					<div className='relative w-full h-full flex justify-center -my-5'>
						<div className='relative overflow-hidden lg:w-[297.02px] lg:h-[613.581px] w-[225px] h-[464px]'>
							<video
								autoPlay
								muted
								playsInline
								className='absolute w-full h-full inset-0 object-cover z-10'>
								<source
									src='/videos/application_safari.mp4'
									type='video/mp4;codecs=hvc1' />
								<source
									src='/videos/application.webm'
									type='video/webm' />
								Your browser does not support the video tag.
							</video>
						</div>
						<div className='absolute-center -z-0 w-full flex justify-center'>
							<div className='rounded-full w-[313px] h-[313px] lg:w-[414px] lg:h-[414px] bg-black' />
						</div>
					</div>
					<div className='w-full'>
						<div className='max-lg:hidden'>
							{ renderTitleDesc() }
						</div>

						<div className='max-lg:flex max-lg:justify-center lg:-ml-10'>
							<div className='lg:mt-11 flex max-lg:flex-col lg:grid lg:grid-cols-2 gap-y-[33px] lg:gap-y-[57px] lg:gap-x-5'>
								{ applicationData.list.map((detailItem, detailIdx) => {
									const Icon = detailItem.icon;

									return (
										<div
											key={ detailIdx }
											className='flex lg:flex-col items-center justify-start gap-[21px] lg:gap-[17px]'
										>
											<div className={ clsxm(
												'rounded-full flex items-center justify-center w-[42px] h-[42px] sm:w-[52px] sm:h-[52px]',
												'bg-[#F5F5F5] hover:bg-white hover:drop-shadow-[0px_25.038461685180664px_32.30769348144531px_rgba(0,0,0,0.05)] sm:hover:drop-shadow-[0px_31px_40px_rgba(0,0,0,0.05)]'
											) }>
												<Icon className='w-4 h-4 sm:w-5 sm:h-5' />
											</div>

											<h4 className='text-xs leading-6 uppercase font-BRSonoma font-semibold text-center tracking-0.11em'>
												{ detailItem.text }
											</h4>
										</div>
									);
								}) }
							</div>
						</div>

						<div className='flex max-lg:justify-center mt-[42px] sm:mt-20'>
							<CustomLink
								href={ applicationData.btnCta.href }
								externalLink={ applicationData.btnCta.externalLink }
								className='btn-cta-landing btn-primary group'
								aria-label={ applicationData.btnCta.text }
							>
								<span className='text-btn-cta-landing'>
									{ applicationData.btnCta.text }
								</span>

								<ChevronRight className='arrow-btn-cta-landing' />
							</CustomLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Application;
