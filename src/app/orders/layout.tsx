import React from 'react';

import { Navbar } from '@/components';

const OrdersLayout: React.FC<{ children: React.ReactNode; }> = ({
	children,
}) => {
	return (
		<div className='bg-black min-h-screen'>
			<Navbar />
			{ children }
		</div>
	);
};

export default OrdersLayout;
