import React from 'react';

import { howItWorksData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { ChevronRight } from '../Icons';
import Navbar from '../Navbar';
import WrapperAnimation from '../WrapperAnimation';

const heroData = howItWorksData.hero;

const Hero: React.FC = () => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<Navbar theme='light'/>
			<div className=' w-full h-full lg:rounded-[19px] pt-[96px] lg:pt-[180px] container-center relative overflow-hidden'>
				<div className='relative w-full mx-auto lg:mx-0 flex justify-center'>
					<div className='sm:max-w-4xl text-center flex flex-col items-center'>
						<h2 className='text-grey-primary font-Poppins font-semibold text-[10px] lg:text-sm eading-6 uppercase tracking-[1.1px] lg:tracking-[1.54px]'>
							{ heroData.preTitle }
						</h2>
						{ heroData.title && (
							<h1 className='mt-[14px] font-Poppins text-[25px] lg:text-[40px] leading-[32.254px] lg:leading-[42.5px] -tracking-[1px] sm:-tracking-[1.6px] text-primary'>
								<span
									className='lg:block hidden'
									dangerouslySetInnerHTML={ { __html: heroData.title } } />
								<span
									className='lg:hidden'
									dangerouslySetInnerHTML={ { __html: heroData.titleMobile } } />
							</h1>
						) }
						<div className='flex max-lg:justify-center mt-[26px] lg:mt-[35px]'>
							<div className='flex max-sm:flex-wrap justify-center items-center gap-2.5 lg:gap-[11px]'>
								{ heroData.btnCtaList.map((btnCta, btnCtaIdx) => {
									return (
										<div key={ btnCtaIdx }>
											<CustomLink
												href={ btnCta.href }
												externalLink={ btnCta.externalLink }
												className={ clsxm(
													'btn-cta-landing group px-5 py-[10px]',
													btnCtaIdx === 0
														? 'btn-primary'
														: ''
												) }
												aria-label={ btnCta.text }
											>
												<span className='text-btn-cta-landing'>
													{ btnCta.text }
												</span>

												<ChevronRight className='arrow-btn-cta-landing' />
											</CustomLink>
										</div>
									);
								}) }
							</div>
						</div>
						<div className='container-center lg:py-[95px] h-full flex items-end max-lg:order-1'>
							<div
								id='main-keys'
								className='grid grid-cols-2 lg:grid-cols-4 gap-11 lg:gap-[54px] w-full'
							>
								{ heroData.mainKeys.map((feature, featureIdx) => (
									<WrapperAnimation
										key={ feature.text }
										data-aos='zoom-in-up'
										data-aos-delay={ `${ featureIdx * 100 }` }
										data-aos-anchor='#main-keys'
										className='flex flex-col text-center items-center gap-y-1 lg:gap-y-5px relative'
									>
										<div className=''>
											<div className={ clsxm(
												'font-Poppins bg-white rounded-full p-1 w-6 h-6 font-medium text-primary text-[11px] flex justify-center items-center mb-5',
												featureIdx + 1 !== heroData.mainKeys.length && 'lg:before:absolute lg:before:bg-[#C7C7C7] lg:before:h-[1px] lg:before:w-[180px] lg:before:top-3 lg:before:left-[100px] xl:before:left-[82px] '
											) }
											>{ featureIdx + 1 }</div>
										</div>
										{ feature.image && (
											<div className='relative overflow-hidden w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]'>
												<feature.image className='w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]'/>
											</div>
										) }
										<div className='font-Poppins font-medium leading-[129.403%] text-primary text-sm lg:text-base'><span dangerouslySetInnerHTML={ { __html: feature.text } } /></div>
									</WrapperAnimation>
								)) }
							</div>
						</div>
						<video
							autoPlay
							muted
							playsInline
							className='w-full lg:h-[508px] inset-0 object-cover z-10 rounded-lg max-lg:order-0 max-lg:my-[60px]'
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
				</div>
				
			</div>
		</div>
	);
};

export default Hero;