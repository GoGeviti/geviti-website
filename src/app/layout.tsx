import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';

import { AOSInit } from '@/components';
import LenisScroller from '@/components/LenisScroller';
import Provider from '@/components/Provider';
import { brSonoma } from '@/constant/fonts';
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

const HEAD_TAGS = (
	<>
		<link
			rel='preconnect'
			href='https://www.googletagmanager.com' />
		<link
			rel='preconnect'
			href='https://r.wdfl.co' />
		<meta
			name='cometly-domain-verification'
			content='007df841-addd-4846-93c2-f94f19c48097'
		/>
		<Script
			id='sa-dynamic-optimization'
			strategy='afterInteractive'
			data-uuid='b796f358-ef4e-46eb-a821-772b2f43cf30'
			src='https://dashboard.qeramarketing.com/scripts/dynamic_optimization.js'
			nonce='sa-dynamic-optimization'
			data-nowprocket='true'
			nitro-exclude='true'
		/>
	</>
);

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
			{ HEAD_TAGS }
			<AOSInit />
			
			{ /* Essential scripts keep afterInteractive */ }
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
					className={ `${ brSonoma.variable }` }
					suppressHydrationWarning
				>
					<NextTopLoader
						showSpinner={ false }
						color='#A3E0FF' />
					<Provider />
					{ children }
					<LenisScroller />
					
					{ /* Move less critical scripts to lazyOnload */ }
					<Script
						src='https://www.googletagmanager.com/gtag/js?id=AW-11455487187'
						strategy='lazyOnload'
					/>
					<Script
						id='google-ads-init'
						strategy='lazyOnload'
					>
						{ `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'AW-11455487187');
						` }
					</Script>
					<Script
						src={ SCRIPT_URL }
						data-rewardful={ API_KEY }
						strategy='lazyOnload'
					/>
					<Script
						id='rewardful-queue'
						strategy='lazyOnload'>
						{ '(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,\'rewardful\');' }
					</Script>
					
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
