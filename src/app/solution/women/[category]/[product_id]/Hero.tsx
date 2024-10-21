import React, { CSSProperties } from 'react'
import Image from 'next/image'

import ButtonCta from '@/components/ButtonCta'
import PopupReview from '@/components/PopupReview'
import { Product } from '@/payload/payload-types'

const Hero:React.FC<{data:Product}> = ({ data }) => {
	return (
		<div className='lg:min-h-screen relative lg:px-3 py-40 lg:pt-[217px]'>
      	<div className='container-center'>
				<div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-[140px]'>
					<Image
						src={ data.image.url ?? '' }
						alt={ data.image.alt ?? '' }
						width={ 510 }
						height={ 510 }
						className='object-contain max-lg:hidden lg:w-[510px]'
					/>
					<div className='flex flex-col gap-6 '>
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
						<div>
							<h3 className='text-primary font-medium text-3xl lg:text-4xl lg:leading-[54px]'>{ data.name }</h3>
							<h5 className='text-xl lg:text-2xl text-grey-primary'>{ data.price }</h5>
						</div>
						<p className='text-grey-primary text-sm leading-5'>{ data.description }</p>
						<div className='w-fit'>
							<ButtonCta href='/pricing'>See if i qualify</ButtonCta>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero