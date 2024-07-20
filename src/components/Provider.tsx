'use client';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'sonner';

import { getCookie, setCookie } from '@/services/cookies';

import DialogDiscount from './Home/DialogDiscount';

const Provider = () => {

	const [open, setOpen] = useState(false)

	useEffect(() => {
		const checkCookies = async() => {
			const cookies = await getCookie('close_discount');
			if (cookies === 'true') {
				setOpen(false);
			} else {
				setOpen(true);
			}
		}
		checkCookies();
	}, [])

	useEffect(() => {
		if (open) {
			document.body.classList.add('!overflow-hidden');
		} else {
			document.body.classList.remove('!overflow-hidden');
		}
		return () => {
			document.body.classList.remove('!overflow-hidden');
		};
	}, [open]);

	return (
		<React.Fragment>
			<Toaster
				richColors
				position='top-right' />
			<button
				onClick={ () => setOpen(true) }
				className='fixed bottom-5 rounded-full hover:scale-105 transition-all duration-500 z-50 left-5 bg-primary text-white font-bold text-xl flex items-center justify-center w-12 h-12' >%</button>
			<DialogDiscount
				onOpenChange={ e => { setOpen(e); !e && setCookie({ key: 'close_discount', value: 'true' }); } }
				open={ open } />
		</React.Fragment>
	);
};

export default Provider;