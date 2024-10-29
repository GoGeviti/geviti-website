'use client'
import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation';

import { Category } from '@/payload/payload-types';

interface DescriptionProps {
	data: Category['stats']
}

const Description: React.FC<DescriptionProps> = ({ data }) => {
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
							<p className='text-grey-primary text-sm'>{ data?.mainDescription }</p>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[88px]'>
								<div>
									<h2 className='text-primary font-medium text-3xl lg:text-[46px]'>{ data?.statistic1?.numberValue }<span className='text-2xl font-normal'>{ data?.statistic1?.numberUnit }</span> </h2>
									<p className='text-grey-primary text-sm'>{ data?.statistic1?.description }</p>
								</div>
								<div>
									<h2 className='text-primary font-medium text-3xl lg:text-[46px]'>{ data?.statistic2?.numberValue }<span className='text-2xl font-normal'>{ data?.statistic2?.numberUnit }</span> </h2>
									<p className='text-grey-primary text-sm'>{ data?.statistic2?.description }</p>
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
