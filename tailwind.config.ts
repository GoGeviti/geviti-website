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
				xs: '450px',
				xxl: '1920px'
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
			colors: {
				transparent: 'transparent',
				white: '#FFFFFF',
				black: '#000000',
				primary: '#181A1C',
				grey: {
					'background': '#F2F2F2',
					'primary': '#919B9F',
					'secondary': '#FBFBFB',
					'dark': '#2D3135',
					'shadow': '#CFCFCF',
					'background-2': '#EAEAEA',
					'date': '#767A7C',
					'cta': '#757C80'
				},
				blue: {
					'1': '#A3E0FF',
					'2': '#5E899E',
					'3': '#CDD8DC',
					'4': '#78C3E9'
				},
				'black-background': '#222426',
				'black-secondary': '#242628',
				'black-landing': '#353738',
				'black-icons': '#2C2F34',
				'table-light': '#F9FAFB'
			},
			letterSpacing: {
				'0.04em': '0.04em',
				'0.11em': '0.11em'
			},
			backgroundImage: {
				'hero-landing-top': 'linear-gradient(180deg, #181A1C 37.05%, rgba(24, 26, 28, 0.00) 100%)',
				'hero-landing-bottom': 'linear-gradient(0deg, #181A1C 39.06%, rgba(24, 26, 28, 0.00) 100%)',
				'mission-landing': 'linear-gradient(0deg, #181A1C 28.72%, rgba(24, 26, 28, 0.00) 100%)',
				'investment-landing': 'linear-gradient(109deg, #181A1C 17.5%, rgba(24, 26, 28, 0.71) 76.83%)',
				'investment-landing-bottom': 'linear-gradient(0deg, #181A1C 39.06%, rgba(24, 26, 28, 0.00) 100%)'
			},
			animation: {
				marquee: 'marquee 40s linear infinite',
				marquee2: 'marquee2 40s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(100%)' },
				}
			},
		},
		fontFamily: {
			'Poppins': ['var(--font-Poppins)', 'sans-serif'],
			'BRSonoma': ['var(--font-BRSonoma)', 'sans-serif'],
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		({ addComponents }: Config['PluginAPI']) => {
			addComponents(
				{
					'.container-center': { '@apply max-w-7xl mx-auto px-4 lg:px-10': {} },
					'.absolute-center': { '@apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2': {} },
					'.btn': { '@apply rounded-full text-center py-3 px-4 xxs:px-5 transition-transform duration-100 hover:[&:not([disabled])]:-translate-y-[2px] active:[&:not([disabled])]:translate-y-0 focus:outline-0 focus:ring-0': {} },
					'.btn-primary': { '@apply bg-primary hover:bg-opacity-80 disabled:bg-opacity-50 text-grey-secondary font-medium': {} },
					'.btn-secondary': { '@apply bg-grey-secondary text-primary font-medium': {} },
					'.btn-cta-landing': { '@apply btn !py-2.5 sm:!py-3 flex items-center gap-7px sm:gap-2 !translate-y-0': {} },
					'.text-pretitle': { '@apply font-BRSonoma font-semibold text-[10px] sm:text-xs md:text-sm leading-6 uppercase tracking-0.11em': {} },
					'.text-heading-2': { '@apply font-Poppins text-[21px] sm:text-2xl md:text-[32px] lg:text-4xl leading-[129%] sm:leading-[125%] -tracking-0.04em': {} },
					'.text-btn-cta-landing': { '@apply text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-Poppins': {} },
					'.arrow-btn-cta-landing': { '@apply stroke-primary w-4 h-4 sm:w-18px sm:h-18px group-hover:translate-x-1 transform transition-all duration-100': {} }
				}
			);
		}
	]
};
export default config;
