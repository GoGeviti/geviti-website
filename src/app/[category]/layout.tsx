import React from 'react';

import { Footer, Navbar } from '@/components';

const Layout: React.FC<{ children: React.ReactNode; }> = ({
	children,
}) => {
	return (
		<div className='min-h-screen bg-grey-background'>
			<Navbar theme='light' />
			{ children }
			<Footer />
		</div>
	);
};

export default Layout;
