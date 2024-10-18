'use client'
import React, { CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

import ButtonCta from '@/components/ButtonCta'
import { MouseIcon } from '@/components/Icons'
import PopupReview from '@/components/PopupReview'

const Hero = () => {
	const { scrollY } = useScroll()
	const y = useTransform(scrollY, [0, 500], [0, -50])

	return (
		<div className='min-h-screen relative lg:px-3 pt-[201px]'>
			<div className='container-center'>
				<div className='flex flex-col gap-6 max-w-[431px] relative z-10'>
					<h3 className='text-primary font-medium text-4xl leading-[54px]'>Hormone optimization made simple.</h3>
					<p className='text-grey-primary text-sm leading-5'>Geviti takes pride in our science backed suite of hormone optimization treatments. From testosterone, to thyroid, we’ll deliver the right solution to your doorstep.</p>
					<div>
						<ButtonCta>Get Started</ButtonCta>
					</div>
				</div>
				<Image
					src='/images/solution_media/geviti-logo-background.png'
					alt='logo'
					width={ 982 }
					height={ 248 }
					className='object-contain max-w-[982px] z-[-1] mx-auto mt-8'
				/>
				<div className='flex items-center justify-between pb-[136px] pt-[34px]'>
					<div className='w-[62px] h-[62px] flex items-center justify-center border border-grey-primary rounded-full'>
						<motion.div
							animate={ {
								y: [5, -5, 5],
							} }
							transition={ {
								duration: 1.5,
								repeat: Infinity,
								ease: 'easeInOut'
							} }
						>
							<MouseIcon className='w-6 h-6' />
						</motion.div>
					</div>
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
				</div>
			</div>
			
			<div className='absolute top-[24%] left-1/2 transform -translate-x-1/2'>
				<motion.div style={ { y } }>
					<Image
						src='/images/solution_media/category-oral-testosterone.png'
						alt='category product'
						width={ 630 }
						height={ 630 }
						className='object-contain w-[630px]'
					/>
				</motion.div>
			</div>
			
		</div>
	)
}

export default Hero
