import React from 'react';
import Image from 'next/image';

import { landingData } from '@/constant/data';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';

const therapyData = landingData.therapy;

const Therapy: React.FC = () => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<div className='bg-grey-secondary w-full lg:rounded-[19px] relative overflow-hidden'>
				<div className='container-center pt-[46px] lg:pt-[193px] lg:pb-[194px] relative overflow-hidden'>
					<div className='text-center lg:text-left relative z-[11]'>
						<p className='hidden lg:block text-pretitle text-grey-primary'>
							{ therapyData.preTitle }
						</p>
						<p className='lg:hidden text-pretitle text-grey-primary'>
							{ therapyData.preTitleMobile }
						</p>
						{ therapyData.title && (
							<div className='hidden lg:block max-lg:mx-auto sm:max-w-[600px] mt-11px sm:mt-3'>
								<h2 className='font-Poppins font-medium text-xl md:text-[32px] lg:text-4xl leading-[30px] sm:leading-[121%] -tracking-[0.8px] md:-tracking-0.04em'>
									{ therapyData.title }
								</h2>
							</div>
						) }
						{ therapyData.titleMobile && (
							<div className='lg:hidden max-lg:mx-auto sm:max-w-[600px] mt-11px sm:mt-3'>
								<h2 className='font-Poppins font-medium text-xl md:text-[32px] lg:text-4xl leading-[30px] sm:leading-[121%] -tracking-[0.8px] md:-tracking-0.04em'>
									{ therapyData.titleMobile }
								</h2>
							</div>
						) }
						<div className='max-lg:mx-auto max-w-[330px] sm:max-w-[408px] mt-11px lg:mt-5'>
							<p className='hidden lg:block text-grey-primary text-xs md:text-sm leading-5 font-Poppins'>
								{ therapyData.description }
							</p>
							<p className='lg:hidden text-grey-primary text-xs md:text-sm leading-5 font-Poppins'>
								{ therapyData.descriptionMobile }
							</p>
						</div>
						<div className='flex max-lg:justify-center mt-[27px] lg:mt-[70px]'>
							<CustomLink
								href={ therapyData.btnCta.href }
								externalLink={ therapyData.btnCta.externalLink }
								className='btn-cta-landing group btn-primary'
								aria-label={ therapyData.btnCta.text }
							>
								<span className='text-btn-cta-landing'>
									{ therapyData.btnCta.text }
								</span>

								<ChevronRight className='arrow-btn-cta-landing' />
							</CustomLink>
						</div>
					</div>
				</div>

				<div className='relative -mt-[150px] right-1 scale-125 md:scale-100 flex justify-end lg:absolute lg:right-0 -bottom-[160px] md:ml-auto md:max-w-4xl z-10'>
					<Image
						src='/images/landing/clinician.png'
						alt='clinician'
						width={ 618 }
						height={ 1035 }
						quality={ 100 }
					/>
				</div>

				<div>
					<div className='absolute bottom-[220px] sm:-bottom-7 max-sm:left-3 sm:right-[250px] md:right-[460px] z-[9]'>
						<video
							autoPlay
							muted
							playsInline
							className='w-[155.912px] h-[123.884px] sm:w-[309.6px] sm:h-[246px] object-cover'
						>
							<source
								src='/videos/graphic_weight_safari.mp4'
								type='video/mp4;codecs=hvc1'
							/>
							<source
								src='/videos/graphic_weight.webm'
								type='video/webm' />
							Your browser does not support the video tag.
						</video>
					</div>

					<div className='absolute bottom-[145px] right-1 sm:bottom-[280px] md:bottom-[400px] sm:-right-[76px] z-[9]'>
						<video
							autoPlay
							muted
							playsInline
							className='w-[103.796px] h-[82.474px] sm:w-[194px] sm:h-[154.147px] object-cover drop-shadow-[0px_26.383874893188477px_57.6763801574707px_rgba(0,0,0,0.25)] sm:drop-shadow-[0px_49.31284713745117px_107.80018615722656px_rgba(0,0,0,0.25)] blur-[0.9203675389289856px] sm:blur-[1.7202154397964478px]'
						>
							<source
								src='/videos/graphic_bmr_safari.mp4'
								type='video/mp4;codecs=hvc1'
							/>
							<source
								src='/videos/graphic_bmr.webm'
								type='video/webm' />
							Your browser does not support the video tag.
						</video>
					</div>

					<div className='sm:hidden absolute bottom-0 inset-x-0 z-[8]'>
						<svg
							width='375'
							height='270'
							viewBox='0 0 375 270'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle
								cx='199.174'
								cy='310.991'
								r='310.174'
								fill='white' />
						</svg>
					</div>

					<div className='max-sm:hidden absolute right-0 bottom-0'>
						<svg
							width='667'
							height='596'
							viewBox='0 0 667 596'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle
								cx='463.629'
								cy='463.629'
								r='463.629'
								fill='white' />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Therapy;
