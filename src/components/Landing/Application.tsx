import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const applicationData = landingData.application;

const Application: React.FC = () => {
	const renderTitleDesc = () => {
		return (
			<>
				<p className='mb-11px sm:mb-7px text-pretitle text-grey-primary'>{ applicationData.preTitle }</p>

				<h2 className='mb-3.5 text-heading-2 text-primary lg:max-w-[433px]'>
					{ applicationData.title }
				</h2>

				<p className='text-grey-primary text-xs sm:text-sm leading-5 font-BRSonoma lg:max-w-[338px]'>
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

					<div className='relative w-full h-full flex justify-center'>
						<div className='relative overflow-hidden rounded-[35.359px] lg:rounded-[46.716px] lg:w-[297.02px] lg:h-[613.581px] w-[225px] h-[464px] aspect-[1/2] shadow-[0px_3.12473px_50px_0px_rgba(0,0,0,0.25)] lg:shadow-[0px_4.12834px_258.02103px_0px_rgba(0,0,0,0.25)]'>
							<Image
								src={ applicationData.image }
								alt=''
								sizes='100vw'
								fill
								className='object-cover z-10'
							/>

							<div className='absolute inset-x-[9px] lg:inset-x-[11px] inset-y-[8.97px] lg:inset-y-[11.85px] rounded-[25.86px] lg:rounded-[34.165px]'>
								<div className='relative overflow-hidden w-[208px] lg:w-[275px] h-[445.42px] lg:h-[588.48px]'>
									<Image
										src='/images/landing/application_screen.png'
										alt=''
										sizes='100vw'
										fill
										className='object-cover z-[11]'
									/>
								</div>
							</div>
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
												'rounded-full flex items-center justify-center w-[52px] h-[52px]',
												detailIdx === 0 ? 'bg-white drop-shadow-[0px_31px_40px_rgba(0,0,0,0.05)]' : 'bg-[#F5F5F5]'
											) }>
												<Icon className='w-5 h-5' />
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
