'use client';

import { OrderComponent } from '@/components';

const OrdersPage = () => {
	return (
		<div className='container-center w-full pt-[100px] lg:pt-[156px] pb-20 lg:pb-[435px]'>
			<OrderComponent.Hero />

			<OrderComponent.Content />
		</div>
	);
};

export default OrdersPage;
