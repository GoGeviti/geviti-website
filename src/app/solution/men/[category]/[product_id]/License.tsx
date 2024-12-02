import React from 'react'
import Image from 'next/image'

const License = () => {
	return (
		<div className='lg:px-3 pt-[60px] mb-16 lg:mb-[124px]'>
			<div className='container-center'>
				<h3 className='h5 lg:h3 lg:text-center'>Made with precision <br className='max-lg:hidden' />and care for you. </h3>
				<p className='lg:text-center max-w-[698px] body-small mx-auto mt-3.5'>
          Medications are delivered straight to your home from trusted, state-licensed pharmacies in our network.
					<br/>
					<br/>
        Each prescription undergoes thorough quality testing in labs registered with the FDA and DEA. Our partner pharmacies focus on four essential factors to ensure every compounded medication meets the highest safety and quality standards.
				</p>
				<div className='flex flex-wrap items-center justify-center gap-5 lg:gap-11 mt-14'>
					{
						[...Array(5)].map((_, index) => (
							<Image
								key={ index }
								width={ 106 }
								height={ 106 }
								alt='license'
								className='max-lg:w-[calc(33%-40px)]'
								src={ `/images/solution_media/products/license-${index + 1}.webp` }
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default License