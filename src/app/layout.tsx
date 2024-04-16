import type { Metadata } from 'next';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';

import { AOSInit } from '@/components';
import LenisScroller from '@/components/LenisScroller';
import Provider from '@/components/Provider';
import { brSonoma, poppins } from '@/constant/fonts';
import StyledComponentsRegistry from '@/lib/registry';

import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './globals.css';
import './main.css';

export const metadata: Metadata = {
	title: 'Geviti',
	description: 'Leveraging the power of modern telehealth technology',
	themeColor: '#181A1C',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
		viewportFit: 'cover',
	},
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html lang='en'>
			<AOSInit />
			{ /* <Script src='//embed.typeform.com/next/embed.js' /> */ }
			<Script
				id='google-tag-manager'
				strategy='afterInteractive'>
				{ `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-K227ZN5C');
      ` }
			</Script>
			<StyledComponentsRegistry>
				<body
					className={ `${poppins.variable} ${brSonoma.variable}` }
					suppressHydrationWarning
				>
					<NextTopLoader
						showSpinner={ false }
						color='#A3E0FF' />
					<Provider />
					{ children }
					<LenisScroller />
					<noscript>
						<iframe
							src='https://www.googletagmanager.com/ns.html?id=GTM-K227ZN5C'
							height='0'
							width='0'
							style={ {
								display: 'none',
								visibility: 'hidden',
							} }
						/>
					</noscript>
				</body>
			</StyledComponentsRegistry>
		</html>
	);
};

export default RootLayout;
