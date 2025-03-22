import type { Metadata } from 'next';

export const SITEURL = 'https://' +  process.env.BASE_URL;

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
