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
				xs2: '391px',
				xs: '450px',
				xxl: '1920px',
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
				'60px': '60px',
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
				},
				blue: {
					'1': '#A3E0FF',
					'2': '#5E899E',
					'3': '#CDD8DC',
					'4': '#78C3E9',
					'1-background': '#f6fcff'
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
				'table-light': '#F9FAFB',
				green: {
					success: '#60C57C',
					'success-background': '#eff9f2'
				},
				red: {
					primary: '#EA3F62',
					'primary-background': '#fdecef'
				}
			},
			letterSpacing: {
				'0.04em': '0.04em',
				'0.11em': '0.11em',
			},
			backgroundImage: {
				'hero-landing-top':
					'linear-gradient(180deg, #181A1C 40.05%, rgba(24, 26, 28, 0.00) 100%)',
				'hero-landing-bottom':
					'linear-gradient(0deg, #181A1C 20.06%, rgba(24, 26, 28, 0.00) 100%)',
				'mission-landing':
					'linear-gradient(0deg, #181A1C 4.29%, rgba(24, 26, 28, 0.49) 83.98%)',
				'investment-landing':
					'linear-gradient(109deg, #181A1C 17.5%, rgba(24, 26, 28, 0.71) 76.83%)',
				'investment-landing-bottom':
					'linear-gradient(0deg, #181A1C 39.06%, rgba(24, 26, 28, 0.00) 100%)',
				'onboarding-order-summary': 'url("/images/onboarding/background_order_summary.png")'
			},
			animation: {
				marquee: 'marquee 40s linear infinite',
				marquee2: 'marquee2 40s linear infinite',
				fadeIn: 'fadeIn 0.2s ease-out',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
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
			},
			boxShadow: {
				card: '0px 15px 30px 0px rgba(16, 24, 40, 0.10)'
			},
		},
		fontFamily: {
			Poppins: ['var(--font-Poppins)', 'sans-serif'],
			BRSonoma: ['var(--font-BRSonoma)', 'sans-serif'],
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		({ addComponents }: Config['PluginAPI']) => {
			addComponents({
				'.container-center': { '@apply max-w-7xl mx-auto px-4 lg:px-10': {} },
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
					'@apply btn !py-1.5 sm:!py-3 flex items-center gap-7px sm:gap-2 !translate-y-0':
						{},
				},
				'.text-pretitle': {
					'@apply font-BRSonoma font-semibold text-[10px] md:text-sm leading-6 uppercase tracking-0.11em':
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
