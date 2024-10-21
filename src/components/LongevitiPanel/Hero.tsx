import { CSSProperties } from 'react';
import Image from 'next/image';

import longevitiPanelData from '@/constant/data/longevitiPanel';

import ButtonCta from '../ButtonCta';
import { TickCircle } from '../Icons';
import Navbar from '../Navbar/Landing';
import PopupReview from '../PopupReview';

const heroData = longevitiPanelData.hero;

const Hero: React.FC = () => {
	return (
		<div className='overflow-hidden relative'>
			<Navbar
				animationProps={ {
					transition: {
						duration: 1,
						ease: 'easeInOut',
					},
				} }
				theme='light'
				// menuList={ longevitiPanelData.navbar.menu }
			/>
			<div className='pt-[118px] lg:pt-[193px] w-full container-center'>
				<div className='flex flex-col items-center text-center mx-auto max-w-[331px] sm:max-w-[738px]'>
					<PopupReview
						className='max-sm:w-full max-sm:max-w-[277px]'
						style={
              {
              	'--shadow-popup-longeviti-panel':
                  '0px 96px 27px 0px rgba(184, 184, 184, 0.00), 0px 61px 25px 0px rgba(184, 184, 184, 0.01), 0px 34px 21px 0px rgba(184, 184, 184, 0.05), 0px 15px 15px 0px rgba(184, 184, 184, 0.09), 0px 4px 8px 0px rgba(184, 184, 184, 0.10)',
              } as CSSProperties
						}
						wrapperClassName='[box-shadow:var(--shadow-popup-longeviti-panel)] max-sm:w-full lg:w-[274px]'
					/>
					<p className='mt-[42px] text-pretitle uppercase text-grey-primary'>
						{ heroData.preTitle }
					</p>
					<h1 className='my-3.5 lg:my-1 text-2xl sm:text-3xl lg:text-[46px] !leading-normal -tracking-0.04em font-normal sm:font-medium text-primary'>
						<span
							dangerouslySetInnerHTML={ {
								__html: heroData.title,
							} }
						/>
					</h1>
					<p className='text-xs !leading-5 sm:text-sm sm:max-w-[682px] mx-auto text-grey-primary'>
						{ heroData.description }
					</p>
				</div>
			</div>
			<div className='lg:pt-[185px] relative flex container-center max-lg:flex-col pb-[36px] lg:pb-[215px]'>
				<div className='w-full max-lg:order-2 flex flex-col max-lg:items-center max-lg:text-center'>
					<div className='sm:max-w-[434px] flex flex-col'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl !leading-normal sm:font-medium -tracking-0.04em text-primary'>
							{ heroData.benefits.title }
						</h2>
						<p className='mt-3.5 text-xs !leading-normal sm:text-sm text-grey-primary'>
							{ heroData.benefits.description }
						</p>
						<div className='mt-[42px] max-sm:w-full'>
							<ButtonCta
								text={ heroData.benefits.cta.text }
								href={ heroData.benefits.cta.href }
								className='max-sm:w-full'
							/>
						</div>
					</div>
					<ul className='sm:max-w-[434px] lg:max-w-[395px] mt-[42px] flex flex-col gap-y-6 text-left'>
						{ heroData.benefits.list.map(item => (
							<li
								key={ item.title }
								className='flex gap-[11px]'>
								<TickCircle className='mt-1 flex-shrink-0 w-[18px] h-[18px] text-[#4AADF6]' />
								<span className='flex flex-col gap-y-1'>
									<h3 className='text-lg -tracking-0.04em font-medium text-primary'>
										{ item.title }
									</h3>
									<p className='text-sm text-grey-primary'>
										{ item.description }
									</p>
								</span>
							</li>
						)) }
					</ul>
				</div>

				<div className='absolute left-1/2 top-7 w-screen max-lg:hidden'>
					<Image
						src={ heroData.benefits.image }
						alt=''
						width={ 1750 }
						height={ 2192 }
						priority
						className='w-auto h-[1300px] object-contain max-lg:hidden'
					/>
				</div>
				<div className='flex -mx-4 order-1 relative -mb-[22%] lg:hidden'>
					<Image
						src={ heroData.benefits.imageMobile }
						alt=''
						width={ 1750 }
						height={ 2192 }
						className='w-full h-auto object-contain lg:hidden'
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
