import React from 'react';

const FAQLayout: React.FC<{ children: React.ReactNode; }> = ({
	children,
}) => {
	return (
		<div className='min-h-screen bg-grey-background'>
			{ children }
		</div>
	);
};

export default FAQLayout;
