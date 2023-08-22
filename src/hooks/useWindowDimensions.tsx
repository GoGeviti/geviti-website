import { useEffect, useState } from 'react';

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

			handleResize();

			window.addEventListener('resize', handleResize);

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return windowDimensions;
};

export default useWindowDimensions;
