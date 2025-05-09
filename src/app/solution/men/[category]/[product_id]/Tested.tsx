import React from 'react'

import { TickCircle } from '@/components/Icons'
import { Product } from '@/payload/payload-types'

const Tested = ({ data } : {data : Product['testing']}) => {
	return (
		<div className='lg:px-3 max-lg:mb-[200px]'>
			<div className='container-center'>
				<h3
					className='lg:h3 h5 text-primary lg:text-center'>
           Clean, simple and tested
				</h3>
				<div className='mt-14 flex flex-col lg:flex-row items-center w-full justify-center lg:gap-5 flex-wrap'>
					{
						data?.map((e, i) => {
							const translateY = i * 50;
							
							return (
								<div
									key={ i }
									style={ { '--translateY': `${translateY}px` } as React.CSSProperties }
									className='bg-white w-full lg:w-[calc(33%-40px)] max-lg:transform max-lg:translate-y-[--translateY] max-lg:sticky max-lg:top-[100px] border border-grey-100 rounded-[15px] py-3.5 px-6 gap-3.5 max-lg:-mt-5'>
									<div className='flex items-center justify-between'>
										<h6 className='h6'>{ e.title }</h6>
										<div className='h-7 rounded-full bg-[#F6FFFC] border px-3 border-green-alert flex items-center justify-center gap-1'>
											<TickCircle className='w-3 h-3 flex-shrink-0 text-green-alert'/>
											<span className='text-[10px] font-medium text-green-alert'>Passed</span>
										</div>
									</div>
									<p className='body-small mt-3.5'>{ e.description }</p>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Tested