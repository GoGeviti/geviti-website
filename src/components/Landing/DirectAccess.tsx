import React from 'react'
import { FaUser } from 'react-icons/fa'

import ButtonCta from '../ButtonCta'

const DirectAccess = () => {
	return (
		<div className='px-3'>
			<div className='bg-primary rounded-[30px] p-[124px] flex justify-between'>
				<div className='max-w-[460px]'>
					<span className='text-grey-300 uppercase tracking-[1.54px]'>Direct access</span>
					<h2 className='h2 text-white tracking-[-1.68px]'>Routine bloodwork, automated. </h2>
					<p className='text-md text-grey-300 mt-3.5 leading-[20px]'>Geviti provides our users with a comprehensive care team. Instead of being forced to choose between a healthcare provider and a health coach, we offer a solution where the two work in tandem to craft the ultimate longevity regimen.</p>
					<div className='w-fit mt-11'>
						<ButtonCta
							theme='secondary'
							text='Join Geviti'
							href='/pricing' />
					</div>
				</div>
				<div className='max-w-[420px] w-full'>
					<div className='w-full h-[390px] bg-white p-3.5 rounded-[20px]'>
						<div className='flex w-full h-full rounded-[16px] items-center justify-center border'>
							<FaUser	/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DirectAccess