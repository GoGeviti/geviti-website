'use client';

import Marquee from 'react-fast-marquee';

import { TickCircle } from '@/components/Icons';

export const Biomakers = ({
	items,
}: {
  items: string[];
}) => {
	return (
		<div className='flex flex-col gap-6'>
			<Marquee
				autoFill
				direction='left'
				pauseOnHover
			>
				{ items.map((item, index) => {
					return (
						<div
							className='pr-6'
							key={ index }>
							<div
								className='bg-[#F4FBFF] p-6 overflow-hidden rounded-[30px] flex flex-col justify-between h-[176px] min-w-[327px] w-full'>
								<TickCircle className='flex-shrink-0 h-10 w-10 text-[#4AADF6]' />
								<span className='text-2xl text-primary font-Poppins'>{ item }</span>
							</div>
						</div>
					)
				}) }
			</Marquee>
			<Marquee
				autoFill
				pauseOnHover
				direction='right'
			>
				{ items.map((item, index) => {
					return (
						<div
							className='pr-6'
							key={ index }>
							<div
								className='bg-[#F4FBFF] p-6 rounded-[30px] flex flex-col justify-between h-[176px] min-w-[327px] w-full'>
								<TickCircle className='flex-shrink-0 h-10 w-10 text-[#4AADF6]' />
								<span className='text-2xl text-primary font-Poppins'>{ item }</span>
							</div>
						</div>
					)
				}) }
			</Marquee>
		</div>
	);
};
