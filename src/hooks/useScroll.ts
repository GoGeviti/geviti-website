import { useCallback, useEffect, useState } from 'react';

export const useScroll = (threshold = 200) => {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isScrolled, setIsScrolled] = useState(false);

	const controlNavbar = useCallback(() => {
		if (typeof window === 'undefined') return;
    
		const currentScrollY = window.scrollY;
		setIsVisible(currentScrollY <= 10 || currentScrollY <= lastScrollY);
		setLastScrollY(currentScrollY);
		setIsScrolled(currentScrollY > threshold);
	}, [lastScrollY, threshold]);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const throttledControlNavbar = () => {
			window.requestAnimationFrame(controlNavbar);
		};

		window.addEventListener('scroll', throttledControlNavbar);
		return () => {
			window.removeEventListener('scroll', throttledControlNavbar);
		};
	}, [controlNavbar]);

	return { isVisible, isScrolled };
};
