import React from 'react';

import { homeData } from '@/constant/data';

const data = homeData.sliderPackageImages;

const SliderPackages = () => {
	return (
		<div className='grid grid-cols-2 gap-[13px]'>
			{
				data.map((e, idx) => {
					return (
						<div
							key={ idx }
							className='p-5 md:p-6 rounded-md bg-[#EBEBEB] text-primary font-Poppins flex flex-col'>
							<div className='rounded-full flex items-center justify-center bg-primary/5 text-xs md:text-sm w-9 h-9 font-medium'>
								{ idx + 1 }
							</div>
							<span className='mt-5 font-medium text-sm md:text-base'>
								{ e }
							</span>
						</div>
					);
				})
			}
		</div>
	);
};

export default SliderPackages;