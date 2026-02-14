import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

type Dimensions = {
	width: number;
	height: number;
};

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
};

const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState<Dimensions>({
		width: 0,
		height: 0
	});

	useEffect(() => {
		if (window) {
			const handleResize = () => {
				setWindowDimensions(getWindowDimensions());
			};

			// Optimize performance by throttling resize events
			// This prevents excessive re-renders during window resizing
			const throttledResize = throttle(handleResize, 200);

			handleResize();

			window.addEventListener('resize', throttledResize);

			return () => {
				window.removeEventListener('resize', throttledResize);
				throttledResize.cancel();
			};
		}
	}, []);

	return windowDimensions;
};

export default useWindowDimensions;
