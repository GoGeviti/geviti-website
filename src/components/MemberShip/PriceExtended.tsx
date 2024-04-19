import React from 'react'

import membershipdata from '@/constant/data/membershipdata'

import { CrossRed, GreenCheck } from '../Icons'
const pricing = membershipdata.pricing

const PriceExtended = () => {
	return (
		<div className='pt-12 sm:pt-20'>
			<p className=' uppercase text-[10px] md:text-sm text-grey-primary text-center font-Poppins font-semibold'>
        Care based off of biomarkers
			</p>
			<h4 className='text-[24px] md:text-6xl text-center font-Poppins'>
        More, for less.
			</h4>

			<div className=' md:flex-row flex-col flex  justify-center gap-6 mt-12 '>
				<div className='md:mx-0 mx-auto max-w-[411px] w-full'>
					<div className=' bg-primary px-6 py-10 rounded-2xl text-white relative'>
						<p className=' absolute top-0 right-8 -translate-y-1/2 text-sm font-Poppins font-medium bg-[#91c9f2] py-2 px-6 rounded-full text-primary'>
					More value
						</p>
						<h3 className='text-3xl lg:text-5xl font-medium font-Poppins '>
              Geviti
						</h3>
						<p className=' text-grey-primary my-4'>Membership cost as low as</p>
						<p className=' text-4xl md:text-5xl font-medium font-Poppins '>
              $99 <span className=' text-sm'>per month</span>
						</p>
						<ul className=' pt-6 font-Poppins font-normal'>
							{ pricing.others.map(data => (
								<>
									<li className='text-white text-sm pb-3 flex justify-between'>
										{ data } <GreenCheck />
									</li>
								</>
							)) }
						</ul>
					</div>
				</div>
				<div className=' max-w-[411px] md:mx-0 mx-auto w-full'>
					<div className=' text-primary border border-[#e9e9ea] bg-[#F5F6F6] px-6 py-10 rounded-2xl '>
						<h3 className='text-3xl lg:text-5xl font-medium font-Poppins '>
              Others
						</h3>
						<p className=' text-grey-primary my-4'>Membership cost </p>
						<p className=' text-4xl md:text-5xl font-medium font-Poppins '>
              $130+ <span className=' text-sm'>per month</span>
						</p>
						<ul className=' pt-6 font-Poppins  font-normal'>
							{ pricing.others.map(data => (
								<>
									<li className='text-[#6A6E70] text-sm pb-3 flex justify-between'>
										{ data } <CrossRed />
									</li>
								</>
							)) }
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PriceExtended
