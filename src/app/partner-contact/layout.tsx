import React from 'react';

import { Footer } from '@/components';

const InvestInquiryLayout: React.FC<{ children: React.ReactNode; }> = ({
	children,
}) => {
	return (
		<div className='min-h-screen bg-grey-background'>
			{ children }
			<Footer landingPage/>
		</div>
	);
};

export default InvestInquiryLayout;
