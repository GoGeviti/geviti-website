import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

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
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setWindowDimensions(getWindowDimensions());
			};

			// Initialize dimensions immediately
			handleResize();

			// Throttle subsequent updates to avoid excessive re-renders during resize
			const throttledHandleResize = throttle(handleResize, 200);

			window.addEventListener('resize', throttledHandleResize);

			return () => {
				window.removeEventListener('resize', throttledHandleResize);
				throttledHandleResize.cancel();
			};
		}
	}, []);

	return windowDimensions;
};

export default useWindowDimensions;
