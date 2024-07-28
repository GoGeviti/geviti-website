import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xxs: '300px',
				xxs2: '375px',
				xs2: '391px',
				xs3: '400px',
				xs: '450px',
				xl2: '1380px',
				xxl: '1920px',
				'8xl': '1360px'
			},
			spacing: {
				'5px': '5px',
				'7px': '7px',
				'9px': '9px',
				'11px': '11px',
				'15px': '15px',
				'18px': '18px',
				'25px': '25px',
				'30px': '30px',
				'50px': '50px',
				'60px': '60px'
			},
			opacity: {
				'15': '.15',
			},
			borderRadius: {
				'19px': '19px',
				'20px': '20px',
			},
			colors: {
				transparent: 'transparent',
				white: '#FFFFFF',
				black: '#000000',
				primary: '#181A1C',
				grey: {
					background: '#F2F2F2',
					primary: '#919B9F',
					secondary: '#FBFBFB',
					dark: '#2D3135',
					shadow: '#CFCFCF',
					'background-2': '#EAEAEA',
					date: '#767A7C',
					cta: '#757C80',
					search: '#E4EBEE',
					50: '#F5F6F6',
					100: '#E6E7E7',
					200: '#CFD0D2',
					300: '#AEB1B2',
					400: '#7B7F81',
					500: '#6A6E70',
					600: '#5B5D5F',
					700: '#4D4F51',
					800: '#444646',
					900: '#3B3C3E',
					950: '#252627'
				},
				blue: {
					'1': '#A3E0FF',
					'2': '#5E899E',
					'3': '#CDD8DC',
					'4': '#78C3E9',
					'primary': '#99D4FF',
					'1-background': '#f6fcff',
					alice: '#ECF8FF'
				},
				neutral: {
					'300': '#EFF0F6',
					'600': '#6F6C90',
					'800': '#170F49',
					'700': '#101828'
				},
				product: {
					'1': '#DBDBCF',
					'2': '#CFD8DB',
					'3': '#CFDBCF',
					'4': '#DBCFCF',
				},
				'black-background': '#222426',
				'black-secondary': '#242628',
				'black-landing': '#353738',
				'black-icons': '#2C2F34',
				'black-card': '#1D1F22',
				'table-light': '#F9FAFB',
				green: {
					success: '#60C57C',
					'success-background': '#eff9f2',
					alert: '#1AAE64'
				},
				red: {
					primary: '#EA3F62',
					'primary-background': '#fdecef',
					alert: '#F97066'
				},
				yellow: {
					alert: '#F79009'
				}
			},
			letterSpacing: {
				'0.04em': '0.04em',
				'0.11em': '0.11em',
			},
			backgroundImage: {
				'backdrop-hero-landing-bottom': 'linear-gradient(0deg, #181a1c 20.46%, rgba(24, 26, 28, 0) 100%)',
				'backdrop-hero-membership-bottom': 'linear-gradient(0deg, #181A1C 0%, rgba(24, 26, 28, 0.66) 55.04%, rgba(24, 26, 28, 0) 83.09%)',
				'backdrop-hero-membership-bottom-mobile': 'linear-gradient(0deg, #181A1C 20.46%, rgba(24, 26, 28, 0.72) 70%, rgba(24, 26, 28, 0) 100%)',
				'backdrop-wellnesspro-solution': 'linear-gradient(0deg, #181A1C 0%, rgba(24, 26, 28, 0.52) 36.06%, rgba(24, 26, 28, 0.00) 75.13%)',
				'backdrop-wellnesspro-solution-mobile': 'linear-gradient(0deg, #181A1C 20.46%, rgba(24, 26, 28, 0.72) 61.5%, rgba(24, 26, 28, 0.00) 100%)',
				'backdrop-hero-solution-men': 'linear-gradient(0deg, #181A1C 0%, rgba(24, 26, 28, 0.66) 55.04%, rgba(24, 26, 28, 0.00) 83.09%)',
				'backdrop-hero-solution-men-mobile': 'linear-gradient(0deg, #181A1C 23.5%, rgba(24, 26, 28, 0.72) 74%, rgba(24, 26, 28, 0.00) 100%)',
				'solution-gradient-left':
					'linear-gradient(90deg, #181A1C -10.42%, rgba(24, 26, 28, 0.49) 46.3%, rgba(24, 26, 28, 0.00) 100%)',
				'hero-landing-top':
					'linear-gradient(180deg, #181A1C 40.05%, rgba(24, 26, 28, 0.00) 100%)',
				'img-grediant':
					'linear-gradient(360deg, #181A1C 0%, rgba(24, 26, 28, 0.00) 96.26%)',
				'hero-landing-bottom':
					'linear-gradient(0deg, #181A1C 20.06%, rgba(24, 26, 28, 0.00) 100%)',
				'banner-landing':
					'linear-gradient(90deg, #181A1C 0%, rgba(24, 26, 28, 0.49) 57.39%, rgba(24, 26, 28, 0.00) 95.66%)',
				'banner-mobile-landing':
					'linear-gradient(0deg, #181A1C 36.98%, rgba(24, 26, 28, 0.00) 100%)',
				'banner-member':
					'linear-gradient(90deg, #181A1C -10.42%, rgba(24, 26, 28, 0.49) 46.3%, rgba(24, 26, 28, 0.00) 100%)',
				'banner-mobile-member':
					'linear-gradient(0deg, #181A1C 40.24%, rgba(24, 26, 28, 0.00) 94.74%)',
				'banner-mobile-solution':
					'linear-gradient(0deg, #181A1C 52.48%, rgba(24, 26, 28, 0.00) 95.41%)',
				'banner-women':
					'linear-gradient(90deg, #181A1C -21.99%, rgba(24, 26, 28, 0.49) 35.18%, rgba(24, 26, 28, 0.00) 100%)',
				'investment-landing':
					'linear-gradient(109deg, #181A1C 17.5%, rgba(24, 26, 28, 0.71) 76.83%)',
				'investment-landing-bottom':
					'linear-gradient(0deg, #181A1C 39.06%, rgba(24, 26, 28, 0.00) 100%)',
				'onboarding-order-summary': 'url("/images/onboarding/background_order_summary.png")',
				'radial-gradient-quality-landing': 'radial-gradient(50% 50% at 50% 50%, #181A1C 0%, rgba(24, 26, 28, 0.00) 100%)',
				'border-gradient-white': 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 100%)',
				'border-innovative-image': 'linear-gradient(91.54deg, rgba(255, 255, 255, 0.15) 11.37%,rgba(228, 235, 238, 0.0375) 56.56%)',
				'most-value': 'linear-gradient(199deg, #283A4B 5.71%, #000 93.76%)'
			},
			animation: {
				marquee: 'marquee 90s linear infinite',
				marquee2: 'marquee2 90s linear infinite',
				fadeIn: 'fadeIn 0.2s ease-out',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				slideUpAndFade: 'slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
				slideDownAndFade: 'slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
				slideRightAndFade: 'slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
				slideLeftAndFade: 'slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
				zoomInAndFade: 'zoomInAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
				zoomOutAndFade: 'zoomOutAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
				scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
				skeletonLoading: 'skeletonLoading 1.5s linear infinite alternate'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				slideUpAndFade: {
					'0%': { opacity: '0', transform: 'translateY(2px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideRightAndFade: {
					'0%': { opacity: '0', transform: 'translateX(-2px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				slideDownAndFade: {
					'0%': { opacity: '0', transform: 'translateY(-2px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideLeftAndFade: {
					'0%': { opacity: '0', transform: 'translateX(2px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				zoomOutAndFade: {
					'0%': {
						opacity: '1',
						transform: 'scale(1, 1)'
					},
					'100%': {
						opacity: '0',
						transform: 'scale(0, 0)'
					}
				},
				zoomInAndFade: {
					'0%': {
						opacity: '0',
						transform: 'scale(0, 0)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1, 1)'
					},
				},
				scroll: {
					to: {
						transform: 'translateX(calc(-50% - 23px))',
					},
				},
				skeletonLoading: {
					'0%, 100%': {
						opacity: '1'
					},
					'100%': {
						opacity: '.5'
					},
				},
			},
			boxShadow: {
				custom1: '0px 4px 21.1px 0px rgba(0, 147, 255, 0.25)',
				custom: '0px 4px 21.1px 0px rgba(153, 212, 255, 0.75)',
				card: '0px 15px 30px 0px rgba(16, 24, 40, 0.10)',
				feature:
					'0px 8px 16px rgba(0, 0, 0, 0.25), inset 0px 6px 18px rgba(255, 255, 255, 0.15)',
				'slider-solution-1': '0px 3px 6px rgba(0, 0, 0, 0.02), 0px 1px 1px rgba(0, 0, 0, 0.03)',
				'slider-solution-2': '0px 2px 6px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.03)',
			},
		},
		fontFamily: {
			Poppins: ['var(--font-Poppins)', 'sans-serif'],
			BRSonoma: ['var(--font-BRSonoma)', 'sans-serif'],
			grifter: ['var(--font-grifter)', 'var(--font-Poppins)', 'sans-serif'],
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwindcss-animate'),
		({ addComponents }: Config['PluginAPI']) => {
			addComponents({
				'.container-center': { '@apply max-w-[1360px] mx-auto px-4 lg:px-10': {} },
				'.absolute-center': {
					'@apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2':
						{},
				},
				'.btn': {
					'@apply rounded-full text-center py-3 px-4 xxs:px-5 transition-transform duration-100 hover:[&:not([disabled])]:-translate-y-[2px] active:[&:not([disabled])]:translate-y-0 focus:outline-0 focus:ring-0':
						{},
				},
				'.btn-primary': {
					'@apply bg-primary hover:bg-opacity-80 disabled:bg-opacity-50 text-grey-secondary font-medium':
						{},
				},
				'.btn-secondary': {
					'@apply bg-grey-secondary text-primary font-medium': {},
				},
				'.btn-cta-landing': {
					'@apply btn !py-[10px] sm:!py-3 flex items-center gap-7px sm:gap-2 !translate-y-0':
						{},
				},
				'.text-pretitle': {
					'@apply font-Poppins font-semibold text-[10px] md:text-sm leading-[150%] md:leading-[171%] uppercase tracking-[0.11em]':
						{},
				},
				'.text-heading-2': {
					'@apply font-Poppins text-[25px] leading-8 sm:text-2xl md:text-[32px] lg:text-[36px] -tracking-0.04em':
						{},
				},
				'.text-btn-cta-landing': {
					'@apply text-xs sm:text-sm font-medium leading-6 font-Poppins': {},
				},
				'.arrow-btn-cta-landing': {
					'@apply stroke-primary w-4 h-4 sm:w-18px sm:h-18px group-hover:translate-x-1 transform transition-all duration-100':
						{},
				},
			});
		},
	],
};
export default config;
