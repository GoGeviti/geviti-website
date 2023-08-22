import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

const poppins = Poppins({
	weight: ['400', '500', '600', '700', '800', '900'],
	fallback: ['sans-serif'],
	subsets: ['latin', 'latin-ext'],
	variable: '--font-Poppins',
	display: 'swap'
});

const brSonoma = localFont({
	display: 'swap',
	src: [
		{
			path: './fonts/BRSonoma-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/BRSonoma-LightItalic.otf',
			weight: '300',
			style: 'italic',
		},
		{
			path: './fonts/BRSonoma-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/BRSonoma-RegularItalic.otf',
			weight: '400',
			style: 'italic',
		},
		{
			path: './fonts/BRSonoma-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/BRSonoma-MediumItalic.otf',
			weight: '500',
			style: 'italic',
		},
		{
			path: './fonts/BRSonoma-SemiBold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './fonts/BRSonoma-SemiBoldItalic.otf',
			weight: '600',
			style: 'italic',
		},
		{
			path: './fonts/BRSonoma-Bold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/BRSonoma-BoldItalic.otf',
			weight: '700',
			style: 'italic',
		},
	],
	variable: '--font-BRSonoma'
});

export { brSonoma, poppins };