import React from 'react';

import { Footer } from '@/components';

const MarketPlaceLayout: React.FC<{ children: React.ReactNode; }> = ({
	children,
}) => {
	return (
		<div className='min-h-screen bg-grey-background'>
			{ children }
			<Footer />
		</div>
	);
};

export default MarketPlaceLayout;
