import React from 'react'
import Image from 'next/image'

const list = [
	{
		image: '/images/landing/featured-01.png',
		title: 'wellworthy',
	},
	{
		image: '/images/landing/featured-02.png',
		title: 'new york weekly',
	},
	{
		image: '/images/landing/featured-03.png',
		title: 'meta press',
	},
]

const FeaturedOn = () => {
	return (
		<div className='px-3 py-3.5 lg:pb-6 lg:pt-3'>
			<div className='bg-white flex flex-col lg:flex-row lg:items-center justify-between rounded-[20px] px-3 lg:px-20 py-6 gap-6 lg:py-16'>
				<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
          Geviti <br/><span className='text-grey-primary'>featured on</span>
				</h3>
				<div className='flex items-center gap-[15px]'>
					{
						list.map((item, index) => (
							<div
								key={ index }
								className='flex relative items-center justify-center w-1/3 lg:w-[215px] h-[69px] lg:h-[108px] border border-grey-50 rounded-lg'>
								<Image
									src={ item.image }
									alt={ item.title }
									fill
									quality={ 100 }
									className='w-1/3 lg:w-[215px] h-[69px] lg:h-[108px] object-contain'
								/>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default FeaturedOn