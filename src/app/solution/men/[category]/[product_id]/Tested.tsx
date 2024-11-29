import React from 'react'

import { TickCircle } from '@/components/Icons'

const items = [
	{
		title: 'Identity Test',
		desc: 'Verifies the medication\'s active ingredients match the prescription to ensure accurate treatment.'
	},
	{
		title: 'Potency Test',
		desc: 'Measures the medication\'s strength to confirm it meets the prescribed dosage for optimal results.'
	},
	{
		title: 'Purity Test',
		desc: 'Assesses the medication to ensure it is free from impurities or contaminants for safe and reliable use.'
	},
	{
		title: 'Sterility Test',
		desc: 'Confirms the medication is completely free of harmful bacteria or microbes to ensure patient safety.'
	},
	{
		title: 'pH Test',
		desc: 'Tests the medication\'s pH level to confirm stability, compatibility, and safety for effective use.'
	},
]

const Tested = () => {
	return (
		<div className='lg:px-3'>
			<div className='container-center'>
				<h3
					className='lg:h3 h5 text-primary lg:text-center'>
           Clean, simple and tested
				</h3>
				<div className='mt-14 flex flex-col lg:flex-row items-center w-full justify-center gap-5 flex-wrap'>
					{
						items.map((e, i) => {
							return (
								<div
									key={ i }
									className='bg-white w-full lg:w-[calc(33%-40px)] border border-grey-100 rounded-[15px] py-3.5 px-6 gap-3.5'>
									<div className='flex items-center justify-between'>
										<h6 className='h6'>{ e.title }</h6>
										<div className='h-7 rounded-full bg-[#F6FFFC] border px-3 border-green-alert flex items-center justify-center gap-1'>
											<TickCircle className='w-3 h-3 flex-shrink-0 text-green-alert'/>
											<span className='text-[10px] font-medium text-green-alert'>Passed</span>
										</div>
									</div>
									<p className='body-small mt-3.5'>{ e.desc }</p>
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