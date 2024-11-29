'use client';

import { useMemo } from 'react';
// import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { TickCircle } from '@/components/Icons';
import { Category } from '@/payload/payload-types';

export const Biomakers = ({
	items,
	stats
}: {
  items: string[];
	stats: Category['stats']
}) => {

	const pathname = usePathname();

	const imgsrc = useMemo(() => {
		const isWomen = pathname?.includes('/women/');
		return isWomen ? '/images/solution_media/products/female.webp' : '/images/solution_media/products/male.webp';
	}, [pathname]);

	return (
		<div className='max-w-[1360px] lg:pr-10 2xl:mx-auto max-lg:pb-20 max-lg:pt-16 lg:mt-[124px]'>
			<div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-32'>
				<div className=''>
					<Image
						src={ imgsrc }
						alt='Treartment'
						width={ 710 }
						height={ 648 }
						className=''
					/>
				</div>
				<div className='max-w-[521px] max-lg:px-4'>
					<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
					Treatment options for <br/><span className='text-grey-primary'>human optimization</span>
					</h3>
					<p className='text-grey-primary text-sm mt-4 lg:mt-10'>{ stats?.mainDescription }</p>
					<div className='grid grid-cols-2 gap-y-14 lg:gap-y-16 gap-x-10 lg:gap-x-20 mt-20'>
						{
							items.map((e, i) => {
								return (
									<div
										key={ i }
										className='flex items-center gap-3'>
										<TickCircle className='w-6 h-6 flex-shrink-0 text-blue-primary'/>
										<span className='text-primary lg:text-lg'>{ e }</span>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};
