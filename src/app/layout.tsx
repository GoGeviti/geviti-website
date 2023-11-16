import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { AOSInit } from '@/components';
import Provider from '@/components/Provider';
import { brSonoma, poppins } from '@/constant/fonts';
import StyledComponentsRegistry from '@/lib/registry';

import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

export const metadata: Metadata = {
	title: 'Geviti',
	description: 'Leveraging the power of modern telehealth technology',
	themeColor: '#181A1C'
};

const RootLayout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
	return (
		<html lang='en'>
			<AOSInit />
			{ /* <Script src='//embed.typeform.com/next/embed.js' /> */ }

			<StyledComponentsRegistry>
				<body className={ `${ poppins.variable } ${ brSonoma.variable }` }>
					<NextTopLoader
						showSpinner={ false }
						color='#A3E0FF' />
					<Provider/>
					{ children }
				</body>
			</StyledComponentsRegistry>
		</html>
	);
};

export default RootLayout;
