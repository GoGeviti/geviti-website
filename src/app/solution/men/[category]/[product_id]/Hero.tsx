import React, { CSSProperties } from 'react'
// import { DollarSquare, TruckFast } from 'iconsax-react';
import Image from 'next/image'

import ButtonCta from '@/components/ButtonCta'
// import { DNAIcon, LeafIcon } from '@/components/Icons/Landing'
import PopupReview from '@/components/PopupReview'
import { Product } from '@/payload/payload-types'

const Hero:React.FC<{data:Product}> = ({ data }) => {
	return (
		<div className='lg:min-h-screen relative lg:px-3 pt-40 lg:pt-[217px]'>
      	<div className='container-center'>
				<div className='flex flex-col lg:flex-row gap-[140px]'>
					<div className='relative max-lg:hidden lg:w-[510px] lg:flex-1'>
						<Image
							src={ data.image.url ?? '' }
							alt={ data.image.alt ?? '' }
							width={ 510 }
							height={ 510 }
							quality={ 100 }
							priority={ true }
							loading='eager'
							className='object-contain max-lg:hidden lg:w-[510px]'
						/>
						<PopupReview
							className='max-sm:w-full max-sm:max-w-[277px] absolute left-0 -top-5'
							style={
              {
              	'--shadow-popup-longeviti-panel':
                  '0px 96px 27px 0px rgba(184, 184, 184, 0.00), 0px 61px 25px 0px rgba(184, 184, 184, 0.01), 0px 34px 21px 0px rgba(184, 184, 184, 0.05), 0px 15px 15px 0px rgba(184, 184, 184, 0.09), 0px 4px 8px 0px rgba(184, 184, 184, 0.10)',
              } as CSSProperties
							}
							wrapperClassName='[box-shadow:var(--shadow-popup-longeviti-panel)] max-sm:w-full lg:w-[274px] border border-grey-50'
						/>
					</div>
					<div className='flex flex-col lg:max-w-[546px] lg:flex-1 max-lg:text-center max-lg:items-center gap-6 '>
						<div className='flex flex-col gap-3.5'>
							<PopupReview
								className='max-sm:w-full max-sm:max-w-[277px] lg:hidden mx-auto'
								style={
              {
              	'--shadow-popup-longeviti-panel':
                  '0px 96px 27px 0px rgba(184, 184, 184, 0.00), 0px 61px 25px 0px rgba(184, 184, 184, 0.01), 0px 34px 21px 0px rgba(184, 184, 184, 0.05), 0px 15px 15px 0px rgba(184, 184, 184, 0.09), 0px 4px 8px 0px rgba(184, 184, 184, 0.10)',
              } as CSSProperties
								}
								wrapperClassName='[box-shadow:var(--shadow-popup-longeviti-panel)] max-sm:w-full lg:w-[274px] border border-grey-50'
							/>
							<h5 className='h3 text-primary max-lg:leading-none'>{ data.name }</h5>
							<h6 className='h5 leading-none text-grey-primary'>{ data.price }</h6>
							<h6 className='h6 leading-none text-grey-primary'>{ data.retail_price }</h6>
							<div className='flex flex-col gap-3.5 lg:gap-6'>
								{ data.productFeatures?.map((e, idx) => (
									<div
										className='flex items-center gap-[15px]'
										key={ idx }>
										<Image
											src={ e.icon.url ?? '' }
											alt={ e.icon.alt ?? 'icon' }
											width={ 24 }
											height={ 24 }
											className='w-6 h-6 text-primary flex-shrink-0'/>
										<span className='h6 text-grey-primary'>
											{ `${e.text} ` }
											{ e.highlightText && e.highlightLink ? (
												<a
													href={ e.highlightLink }
													target={ e.openInNewTab ? '_blank' : '_self' }
													className='text-[#4AADF6]'
													rel='noreferrer'>{ e.highlightText }</a>
											) : (
												<span className='text-[#4AADF6]'>{ e.highlightText }</span>
											) }
										</span>
									</div>
								)) }
								{ /* <div className='flex items-center gap-[15px]'>
									<DNAIcon className='w-6 h-6 text-primary flex-shrink-0 transform rotate-45'/>
									<span className='h6 text-grey-primary'>Supports <span className='text-[#4AADF6]'>testosterone levels</span></span>
								</div>
								<div className='flex items-center gap-[15px]'>
									<TruckFast
										size='24'
										color='#181A1C'
										className='w-6 h-6 flex-shrink-0'
									/>
									<span className='h6 text-grey-primary'>Free and discreet delivery</span>
								</div>
								<div className='flex items-center gap-[15px]'>
									<DollarSquare
										size={ 24 }
										color='#181A1C'
										className='w-6 h-6 flex-shrink-0'/>
									<span className='h6 text-grey-primary'>Wholesale pricing for members</span>
								</div>
								<div className='flex items-center gap-[15px]'>
									<LeafIcon className='w-6 text-primary h-6 flex-shrink-0'/>
									<span className='h6 text-grey-primary'>Compounded in USA Pharmacy</span>
								</div> */ }
							</div>
						</div>
						<p className='body-extra-small lg:body-small'>{ data.description }</p>
						<div className='flex flex-col w-full lg:flex-row items-center gap-6'>
							<ButtonCta
								className='max-lg:w-full h-[58px]'
								href='/pricing'>Become a member</ButtonCta>
							{ /* <ButtonCta
								href='/pricing'
								className='max-lg:w-full h-[58px]'
								theme='outline'
								hideArrow={ true }
								text='Purchase now'
							/> */ }
						</div>
						<div className='lg:hidden'>
							<Image
								src={ data.image.url ?? '' }
								alt={ data.image.alt ?? '' }
								width={ 510 }
								height={ 510 }
								quality={ 100 }
								priority={ true }
								loading='eager'
								className='object-contain lg:hidden w-full'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero