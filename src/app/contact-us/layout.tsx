import React from 'react';

import { Footer } from '@/components';

const ContactUsLayout: React.FC<{ children: React.ReactNode; }> = ({
	children,
}) => {
	return (
		<div className='min-h-screen bg-grey-background'>
			{ children }
			<Footer landingPage/>
		</div>
	);
};

export default ContactUsLayout;
