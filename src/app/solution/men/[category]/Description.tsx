'use client'
import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation';

const Description = () => {
	const pathname = usePathname();

	const optimizationType = useMemo(() => {
		const isWomen = pathname?.includes('/women/');
		return isWomen ? 'female optimization' : 'male optimization';
	}, [pathname]);

	return (
		<div className='lg:px-3 max-lg:mt-16'>
			<div className='container-center'>
				<div className='lg:pb-[89px] pt-16 border-t border-grey-100'>
					<div className='flex flex-col lg:flex-row items-start justify-between'>
						<div className='w-full'>
							<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
								Treatment options for <br/><span className='text-grey-primary'>{ optimizationType }</span>
							</h3>
						</div>
						<div className='flex flex-col gap-8 lg:gap-16 max-lg:mt-3'>
							<p className='text-grey-primary text-sm'>Geviti takes the guesswork out of health optimization. With AI powered insights, a dedicated care team, and science backed solutions, <br className='max-lg:hidden'/>increasing health span and lifespan has never been easier.</p>
							<div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-[88px]'>
								<div>
									<h2 className='text-primary font-medium text-3xl lg:text-[46px]'>20<span className='text-2xl font-normal'>million</span> </h2>
									<p className='text-grey-primary text-sm'>Men In the united states from ages 25-75 have low T</p>
								</div>
								<div>
									<h2 className='text-primary font-medium text-3xl lg:text-[46px]'>83%</h2>
									<p className='text-grey-primary text-sm'>Of couples say a healthy sex life is critical to their relationship satisfaction.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Description
