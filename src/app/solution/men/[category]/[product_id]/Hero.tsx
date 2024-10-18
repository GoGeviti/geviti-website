import React, { CSSProperties } from 'react'
import Image from 'next/image'

import ButtonCta from '@/components/ButtonCta'
import PopupReview from '@/components/PopupReview'

const Hero = () => {
	return (
		<div className='min-h-screen relative lg:px-3 pt-[217px]'>
      	<div className='container-center'>
				<div className='grid grid-cols-2 place-items-center gap-[140px]'>
					<Image
						src='/images/solution_media/category-oral-testosterone.png'
						alt='category product'
						width={ 510 }
						height={ 510 }
						className='object-contain w-[510px]'
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
							<h3 className='text-primary font-medium text-4xl leading-[54px]'>Kyzatrex™</h3>
							<h5 className='text-2xl text-grey-primary'>As low as $95/m*</h5>
						</div>
						<p className='text-grey-primary text-sm leading-5'>The FDA&apos;s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.</p>
						<div>
							<ButtonCta>See if i qualify</ButtonCta>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero