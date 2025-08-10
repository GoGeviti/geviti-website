
'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';

const LenisScroller = () => {
	const pathname = usePathname();
	const lenisRef = useRef<Lenis | null>(null);
	const rafIdRef = useRef<number | null>(null);

	useEffect(() => {
		// Helpers to start/stop Lenis cleanly
		const enableLenis = () => {
			if (lenisRef.current) return; // already enabled
			const lenis = new Lenis();
			lenisRef.current = lenis;

			const raf = (time: number) => {
				lenis.raf(time);
				rafIdRef.current = requestAnimationFrame(raf);
			};

			rafIdRef.current = requestAnimationFrame(raf);
		};

		const disableLenis = () => {
			if (rafIdRef.current) {
				cancelAnimationFrame(rafIdRef.current);
				rafIdRef.current = null;
			}
			if (lenisRef.current) {
				// lenisRef.current.stop?.(); // optional if available
				lenisRef.current.destroy();
				lenisRef.current = null;
			}
		};

		// Disable on assessment route to allow native nested scrolling
		if (pathname?.startsWith('/assessment')) {
			disableLenis();
		} else {
			enableLenis();
		}

		return () => {
			// On unmount or route change cleanup
			disableLenis();
		};
	}, [pathname]);

	return null;
};

export default LenisScroller;