import React from 'react';
import { Metadata } from 'next';

import { Navbar } from '@/components';

export const metadata: Metadata = {
	themeColor: '#181A1C',
};

const OrdersLayout: React.FC<{ children: React.ReactNode; }> = ({
	children,
}) => {
	return (
		<div className='bg-primary min-h-screen'>
			<Navbar />
			{ children }
		</div>
	);
};

export default OrdersLayout;
