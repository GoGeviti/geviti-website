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
          'secondary': '#FBFBFB'
        },
        blue: {
          '1': '#A3E0FF',
          '2': '#5E899E'
        },
        'black-background': '#222426',
        'black-secondary': '#242628'
      }
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
          '.container-center': { '@apply max-w-7xl mx-auto px-4': {} },
          '.absolute-center': { '@apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2': {} },
          '.btn': { '@apply rounded-full text-center py-3 px-4 xxs:px-5 transition-transform duration-100 hover:[&:not([disabled])]:-translate-y-[2px] active:[&:not([disabled])]:translate-y-0 focus:outline-0 focus:ring-0': {} },
          '.btn-primary': { '@apply bg-primary hover:bg-opacity-80 disabled:bg-opacity-50 text-grey-secondary font-medium': {} },
          '.btn-secondary': { '@apply bg-grey-secondary text-primary font-medium': {} },
          '.text-pretitle': { '@apply font-BRSonoma font-semibold text-[10px] sm:text-xs md:text-sm leading-6 uppercase tracking-[0.11em]': {} }
        }
      );
    }
  ]
};
export default config;
