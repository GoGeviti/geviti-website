import type { Metadata } from 'next';

import { AOSInit } from '@/components';
import { brSonoma, poppins } from '@/constant/fonts';

import './globals.css';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
	title: 'Geviti',
	description: 'Leveraging the power of modern telehealth technology',
};

const RootLayout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
	return (
		<html lang='en'>
			<AOSInit />

			<body className={ `${ poppins.variable } ${ brSonoma.variable }` }>
				{ children }
			</body>
		</html>
	);
};

export default RootLayout;
