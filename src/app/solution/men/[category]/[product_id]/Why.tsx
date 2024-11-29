import React from 'react'

import ButtonCta from '@/components/ButtonCta'

const items = [
	{
		title: 'Lorem ipsum dolor sit amet consectetur',
		desc: 'Lorem ipsum dolor sit amet consectetur. Ac sed consectetur mauris in id nullam volutpat viverra. Netus convallis vivamus quisque dignissim nisi tristique. Urna senectus tempor magna sit. Sollicitudin non tellus lectus vestibulum odio amet.'
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur',
		desc: 'Lorem ipsum dolor sit amet consectetur. Ac sed consectetur mauris in id nullam volutpat viverra. Netus convallis vivamus quisque dignissim nisi tristique. Urna senectus tempor magna sit. Sollicitudin non tellus lectus vestibulum odio amet.'
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur',
		desc: 'Lorem ipsum dolor sit amet consectetur. Ac sed consectetur mauris in id nullam volutpat viverra. Netus convallis vivamus quisque dignissim nisi tristique. Urna senectus tempor magna sit. Sollicitudin non tellus lectus vestibulum odio amet.'
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur',
		desc: 'Lorem ipsum dolor sit amet consectetur. Ac sed consectetur mauris in id nullam volutpat viverra. Netus convallis vivamus quisque dignissim nisi tristique. Urna senectus tempor magna sit. Sollicitudin non tellus lectus vestibulum odio amet.'
	},
]

const Why = () => {
	return (
		<div className='lg:px-3 mt-[42px] lg:mt-[124px]'>
			<div className='container-center'>
				<div className='flex items-center justify-between'>
					<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
             Why it <br/><span className='text-grey-primary'>matters</span>
					</h3>
					<ButtonCta
						text='Get Started'
						href='/pricing'/>
				</div>
				<div className='mt-16 flex flex-col gap-6'>
					{
						items.map((e, i) => (
							<div
								key={ i }
								className='bg-white flex-col lg:flex-row gap-3 border border-grey-100 rounded-[14px] px-6 py-8 flex items-start justify-between'>
								<h5 className='h5'>
									<span className='body-small'>0{ i + 1 }/ </span>
									<span>{ e.title }</span>
								</h5>
								<p className='lg:w-1/2 body-small'>
									{ e.desc }
								</p>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Why