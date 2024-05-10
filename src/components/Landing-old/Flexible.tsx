'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { landingData } from '@/constant/data';

const DesktopImageWrapper = styled.div`
  top: 0;
  right: 0;
  height: 100%;
  width: 45vw;
  justify-content: flex-end;
`;

const flexibleData = landingData.flexible;

const Flexible: React.FC = () => {
	return (
		<div className='lg:px-3 overflow-hidden'>
			<div className='bg-grey-secondary h-full w-full lg:rounded-19px relative overflow-hidden'>
				<div className='max-lg:px-5 max-lg:py-9 container-center grid-cols-1 grid lg:grid-cols-2 h-fit lg:h-[700px]'>
					<div className='max-lg:order-1 h-full flex flex-col justify-center relative lg:z-10 max-lg:w-full lg:max-w-lg '>
						<div className='text-center lg:text-left lg:max-w-xl'>
							<p className='mb-[10px] md:mb-3 text-pretitle text-grey-primary max-md:mt-7'>
								<span className='max-md:hidden'>{ flexibleData.preTitle }</span>
								<span className='md:hidden'>{ flexibleData.preTitleMobile }</span>
							</p>

							{ flexibleData.title && (
								<h2 className='mb-[10px] md:mb-[14px] md:leading-[120.833%] md:-tracking-[0.96px] leading-[133%] -tracking-[0.64px] font-medium font-Poppins text-primary md:text-4xl text-[5.8vw] xs:text-2xl'>
									{ flexibleData.title }
									<span className='text-[3.9vw] xs:text-base md:text-2xl'>
										/month
									</span>
								</h2>
							) }

							{ flexibleData.description && (
								<p className='text-grey-primary max-sm:max-w-[330px] max-sm:mx-auto text-xs md:text-sm leading-5 font-BRSonoma'>
									<span className='max-md:hidden'>
										{ flexibleData.description }
									</span>
									<span className='md:hidden'>
										{ flexibleData.descriptionMobile }
									</span>
								</p>
							) }

							{ /* <div className='flex max-lg:justify-center mt-6 sm:mt-[60px]'>
								<CustomLink
									href={ flexibleData.btnCta.href }
									externalLink={ flexibleData.btnCta.externalLink }
									className='btn-cta-landing btn-primary group'
									aria-label={ flexibleData.btnCta.text }
								>
									<span className='text-btn-cta-landing'>
										{ flexibleData.btnCta.text }
									</span>

									<ChevronRight className='arrow-btn-cta-landing' />
								</CustomLink>
							</div> */ }
						</div>
					</div>
					<div />

					<DesktopImageWrapper className='lg:absolute hidden lg:flex'>
						<Image
							src={ flexibleData.image }
							alt='flexible'
							loading='lazy'
							width={ 1440 }
							height={ 801 }
							className='object-cover'
						/>
					</DesktopImageWrapper>
					<div className='lg:hidden order-0'>
						<Image
							src={ flexibleData.imageMobile }
							alt='flexible mobile'
							loading='lazy'
							className='object-cover w-full h-[216px] rounded-[7px]'
							width={ 337 }
							height={ 216 }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Flexible;
