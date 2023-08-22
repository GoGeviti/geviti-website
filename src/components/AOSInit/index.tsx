'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSInit = () => {
	useEffect(() => {
		AOS.init({ once: true });
		AOS.refresh();
	}, []);

	return null;
};

export default AOSInit;
