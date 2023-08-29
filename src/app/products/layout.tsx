import React from 'react';

import { Footer } from '@/components';

const ProductsLayout: React.FC<{ children: React.ReactNode; }> = ({
	children,
}) => {
	return (
		<div className='min-h-screen bg-grey-background'>
			{ children }
			<Footer />
		</div>
	);
};

export default ProductsLayout;
