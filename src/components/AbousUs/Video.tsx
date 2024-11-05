import React from 'react'
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image'

import { TickCircle } from '../Icons'

const rules = [
	{
		title: 'Data-Driven Care',
		description: 'Every decision is rooted in reliable data to ensure the most effective and personalized health solutions.'
	},
	{
		title: 'Transparent Pricing',
		description: 'We prioritize clear, upfront pricing with no hidden costs, so you know exactly what you’re investing in.'
	},
	{
		title: 'Holistic Approach',
		description: 'We view health as a whole, integrating physical, mental, and lifestyle factors for comprehensive care.'
	},
	{
		title: 'Personalized Support',
		description: 'We meet you where you are on your health journey, tailoring support to fit your unique needs and goals.'
	},
]

const Video = () => {
	return (
		<div className='lg:px-3 max-lg:mt-[56px] pb-[45px] lg:pb-[140px]'>
			<div className='container-center grid grid-cols-1 place-items-center gap-[65px] lg:gap-[128px] lg:grid-cols-2'>
				<div className='flex flex-col max-lg:order-reverse max-lg:text-center  gap-[17px] lg:gap-[58px]'>
					<div>
						<h3 className='font-medium text-primary text-2xl md:text-[32px] lg:text-4xl'>Why was Geviti started?</h3>
						<p className='text-sm lg:text-lg text-grey-400 mt-3'>To make high-end, data-driven health optimization accessible to millions worldwide.</p>
					</div>
					<div>
						<div className='w-full lg:w-[522px] max-h-[286px] h-full max-lg:aspect-video rounded-[20px] overflow-hidden group relative flex items-center justify-center'>
							<div className='absolute w-full h-full bg-black/20 group-hover:bg-black/50 transition-colors' />
							<div className='absolute w-full h-full flex items-center justify-center'>
								<a
									href='https://www.youtube.com/watch?v=NwiXo66FZ7M'
									target='_blank'
									rel='noopener norerrer noreferrer'
									className='cursor-pointer'>
									<FaPlay className='text-white text-[50px]' />
								</a>
							</div>
							<Image
								alt='thumbnail'
								src='/images/about_us/thumbnail.webp'
								width={ 522 }
								height={ 286 }
								className='object-cover w-full h-full object-center'
							/>
						</div>
						<p className='text-grey-600 text-sm lg:text-lg italic mt-2 lg:mt-6'>A word from our co-founder and CEO</p>
					</div>
				</div>
				<div className='flex flex-col gap-6 max-w-[395px]'>
					{
						rules.map((rule, index) => (
							<div
								key={ index }
								className='flex gap-3 items-start'>
								<TickCircle className='flex-shrink-0 h-[18px] w-[18px] text-[#4AADF6]' />
								<div className='flex text-left flex-col gap-1'>
									<h4 className='font-medium text-primary leading-none text-lg'>{ rule.title }</h4>
									<p
										className='text-primary text-sm'
										dangerouslySetInnerHTML={ { __html: rule.description } } />
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Video