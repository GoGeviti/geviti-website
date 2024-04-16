import React from 'react'
import Image from 'next/image'

import membershipdata from '@/constant/data/membershipdata'

import { CheckCircleIcon, ChevronRight } from '../Icons'
import ButtonCta from '../Landing/ButtonCta'
import { CustomLink } from '..'
const chooseGevitilist = membershipdata.choosegivity

const ChooseGeviti = () => {
	return (
		<div className='mx-3 rounded-[19px] my-6 pt-8 sm:py-14'>
			<div className=' container-center '>
				<div className=' md:flex items-center'>
					<div className='md:w-1/2 '>
						<div className='lg:px-4 xl:px-14'>
							<p className='tracking-[1.1px] font-Poppins uppercase md:text-start text-center text-[10px] sm:text-sm text-grey-primary font-semibold'>
                Tailor-made longevity
							</p>
							<h4 className='text-[27.941px] md:text-start text-center sm:text-4xl font-Poppins'>
                Why Choose Geviti?
							</h4>
							<div className='sm:hidden grid mt-8 sm:mt-12 grid-cols-1 auto-rows-fr sm:grid-cols-2 gap-4 sm:gap-6 items-center max-sm:w-full'>
								<ButtonCta
									href='/'
									text='Get Started'
									theme='primary'
									className='max-sm:w-full'
								/>
							</div>
							<div className='mt-8 sm:mt-12'>
								{ chooseGevitilist?.data.map((text, index) => (
									<div
										key={ index }
										className='  flex items-center gap-3 mb-3 bg-[rgba(255,255,255,0.05)] px-5 py-[14px] border border-[rgba(255,255,255,0.15)] rounded-lg cursor-pointer duration-300 shadow-[0px_4px_15.8px_0px_rgba(2,23,27,0.10)]'
									>
										<CheckCircleIcon />
										<p className=' font-Poppins font-medium text-sm'>{ text }</p>
									</div>
								)) }
							</div>
							<div className='hidden  sm:grid mt-12 grid-cols-1 auto-rows-fr lg:grid-cols-2 gap-2 sm:gap-6 items-center max-sm:w-full'>
								<ButtonCta
									href='/'
									text='Get Started'
									theme='primary'
									className='max-sm:w-full'
								/>
								<CustomLink
									href='/'
									className='bg-white hover:bg-white/20 group max-md:w-full  border border-white/5 backdrop-blur-[25px] rounded-full py-1.5 pl-[42px] pr-1.5 h-full relative grid place-items-center grid-cols-[auto_46px] overflow-hidden gap-6'
									aria-label='See Products'
								>
									<span className='text-lg leading-[133%] font-medium text-primary inline-block z-[2]'>
                    See Products
									</span>
									<span className='w-[46px] relative flex items-center justify-center'>
										<ChevronRight className='w-18px h-18px  text-primary flex-shrink-0' />
									</span>
								</CustomLink>
							</div>
						</div>
					</div>
					<div className='md:w-1/2'>
						<Image
							className='w-full h-full'
							src='/images/membership/oral.png'
							alt='oral'
							width={ 400 }
							height={ 670 }
							unoptimized
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChooseGeviti
