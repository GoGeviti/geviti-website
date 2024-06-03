import React, { FC } from 'react';

interface ICheckoutItem {
  name?: string;
  price?: string;
  plan?: string;
  metadata?: string;
  icon?: React.JSX.Element;
}
const CheckoutItem: FC<ICheckoutItem> = ({ name, price, plan, metadata, icon }) => {
	return (
		<div className='flex border-b-2 border-grey-950 lg:border-none'>
			<div className='flex items-center justify-center w-[53px] h-[53px] lg:w-[71px] lg:h-[71px] bg-blue-primary rounded-[10px]'>
				{ icon }
			</div>
			<div className='flex flex-col w-full lg:flex-row'>
				<div className='ml-6 flex flex-col justify-around'>
					<h3 className='text-white text-lg lg:text-2xl'>{ name }</h3>
					<span className='text-grey-primary text-sm'>{ plan }</span>
				</div>
				<div className='ml-6 my-6 lg:my-0 lg:ml-auto flex flex-col justify-around text-grey-primary lg:text-right'>
					<p className='text-lg'>${ price }</p>
					<span className='text-xs whitespace-nowrap leading-7'>{ metadata }</span>
				</div>
			</div>
		</div>
	);
};

export default CheckoutItem;
