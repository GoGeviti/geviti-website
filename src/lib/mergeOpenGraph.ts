import type { Metadata } from 'next';

export const SITEURL = 'https://' + (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL : process.env.NEXT_PUBLIC_VERCEL_URL);

const defaultOpenGraph: Metadata['openGraph'] = {
	title: 'Geviti',
	description: 'A data-driven approach to longevity and health optimization. Invest in your future self with our tailored solutions. Join waitlist today.',
	images: [
		{
			url: SITEURL + '/meta/home.jpg'
		},
	],
	siteName: 'Geviti',
	type: 'website',
};

export const mergeOpenGraph = (og?: Metadata['openGraph'] & {image?:string}): Metadata['openGraph'] => {
	return {
		...defaultOpenGraph,
		...og,
		images: og?.image ? [{
			url: SITEURL + og.image
		}] : defaultOpenGraph.images,
	};
};
