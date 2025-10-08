'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Toaster } from 'sonner';

import { getCookie, setCookie } from '@/services/cookies';

// Lazy load the dialog component
const DialogDiscount = dynamic(() => import('./Home/DialogDiscount'), {
	ssr: false
});

// Separate discount button component
const DiscountButton = ({ onClick }: { onClick: () => void }) => (
	<button
		onClick={ onClick }
		className='fixed bottom-5 rounded-full hover:scale-105 transition-all duration-500 z-50 left-5 bg-primary text-white font-bold text-xl flex items-center justify-center w-12 h-12'
	>
		%
	</button>
);

const Provider = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const checkCookie = async() => {
			const hasClosedDiscount = await getCookie('close_discount') === 'true';
			
			if (!hasClosedDiscount) {
				const timer = setTimeout(() => setOpen(false), 15000); // Discount popup disabled. Set to 'true' to enable.
				return () => clearTimeout(timer);
			}
		};

		checkCookie();
	}, []);

	const handleOpenChange = (isOpen: boolean) => {
		setOpen(isOpen);
		if (!isOpen) {
			setCookie({ key: 'close_discount', value: 'true' });
		}
	};

	return (
		<>
			<Toaster
				richColors
				position='top-right'
			/>
			<DiscountButton onClick={ () => setOpen(true) } />
			<DialogDiscount
				onOpenChange={ handleOpenChange }
				open={ open }
			/>
		</>
	);
};

export default Provider;
