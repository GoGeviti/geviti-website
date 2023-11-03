'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSInit = () => {
	useEffect(() => {
		AOS.init({ once: true, duration: 600, disable: 'mobile' });
		AOS.refresh();
	}, []);

	return null;
};

export default AOSInit;
