'use client';
import React from 'react';
import { Toaster } from 'sonner';

const Provider = () => {
	return (
		<React.Fragment>
			<Toaster
				richColors
				position='top-right' />
		</React.Fragment>
	);
};

export default Provider;