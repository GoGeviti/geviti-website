import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';

import { AOSInit } from '@/components';
import LenisScroller from '@/components/LenisScroller';
import Provider from '@/components/Provider';
import { brSonoma, poppins } from '@/constant/fonts';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import StyledComponentsRegistry from '@/lib/registry';

import 'aos/dist/aos.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './globals.css';
import './main.css';

// Use your Rewardful API Key
const API_KEY = process.env.NEXT_PUBLIC_REWARDFUL_API_KEY || '642d4d';

// If not setting NEXT_PUBLIC_APP_REWARDFUL_SCRIPT_URL, just use https://r.wdfl.co/rw.js
const SCRIPT_URL = process.env.NEXT_PUBLIC_APP_REWARDFUL_SCRIPT_URL || 'https://r.wdfl.co/rw.js';

export const metadata: Metadata = {
	title: 'Geviti',
	description: 'A data-driven approach to longevity and health optimization. Invest in your future self with our tailored solutions. Join waitlist today.',
	openGraph: mergeOpenGraph({}),
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	viewportFit: 'cover',
	themeColor: '#181A1C'
};

const RootLayout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
	return (
		<html lang='en'>
			<meta
				name='cometly-domain-verification'
				content='007df841-addd-4846-93c2-f94f19c48097'/>
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
					className={ `${ poppins.variable } ${ brSonoma.variable }` }
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
					<Script
						src={ SCRIPT_URL }
						data-rewardful={ API_KEY } />
					<Script
						id='rewardful-queue'
						strategy='beforeInteractive'>
						{`(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');`}
					</Script>
				</body>
			</StyledComponentsRegistry>
		</html>
	);
};

export default RootLayout;
