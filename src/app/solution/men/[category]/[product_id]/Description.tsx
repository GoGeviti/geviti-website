import React from 'react'

const Description = () => {
	return (
		<div className='lg:px-3'>
			<div className='container-center'>
				<div className='pb-[89px] pt-16 border-t border-grey-100'>
					<div className='flex flex-col lg:flex-row items-start justify-between'>
						<div className='w-full'>
							<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
								Treatment options for <br/><span className='text-grey-primary'>male optimization</span>
							</h3>
						</div>
						<div className='flex flex-col gap-8 lg:gap-16 max-lg:mt-3'>
							<p className='text-grey-primary text-sm'>Geviti takes the guesswork out of health optimization. With AI powered insights, a dedicated care team, and science backed solutions, <br className='max-lg:hidden'/>increasing health span and lifespan has never been easier.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Description