import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

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

			// Debounce to reduce re-renders on window resize
			const debouncedHandleResize = debounce(handleResize, 200);

			handleResize();

			window.addEventListener('resize', debouncedHandleResize);

			return () => {
				window.removeEventListener('resize', debouncedHandleResize);
				debouncedHandleResize.cancel();
			};
		}
	}, []);

	return windowDimensions;
};

export default useWindowDimensions;
