import React, { FC } from 'react';

import Skeleton from '@/components/Skeleton/Skeleton';

interface ICheckoutItem {
  name?: string;
  price?: number;
  plan?: string;
  metadata?: string;
  icon?: React.JSX.Element;
	loading: boolean;
}
const CheckoutItem: FC<ICheckoutItem> = ({ name, price, plan, metadata, icon, loading }) => {

	return (
		<div className='flex border-b-2 border-grey-950 lg:border-none'>
			<div className='flex items-center justify-center min-w-[53px] h-[53px] lg:min-w-[71px] lg:h-[71px] bg-blue-primary rounded-[10px]'>
				{ icon }
			</div>
			<div className='flex flex-col w-full lg:flex-row'>
				<div className='ml-6 flex flex-col justify-around'>
					<Skeleton
						loading={ loading }
						className='h-7 w-60'>
						<h3 className='inline-block text-white text-lg lg:text-2xl'>{ name }</h3>
					</Skeleton>
					<Skeleton
						loading={ loading }
						className='h-5 w-[50%]'>
						<span className='inline-block text-grey-primary text-sm'>{ plan }</span>
					</Skeleton>
				</div>
				<div className='ml-6 my-6 lg:my-0 lg:ml-auto flex flex-col justify-around text-grey-primary lg:text-right'>
					<Skeleton
						loading={ loading }
						className='h-5 w-28'>

						<p className='text-lg'>${ price }</p>
					</Skeleton>
					<Skeleton
						loading={ loading }
						className='h-4 w-[50%]'>
						<span className='text-xs whitespace-nowrap leading-7'>{ metadata }</span>
					</Skeleton>
				</div>
			</div>
		</div>
	);
};

export default CheckoutItem;
