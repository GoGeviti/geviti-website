import type { Metadata } from 'next';

const defaultOpenGraph: Metadata['openGraph'] = {
	description: 'Leveraging the power of modern telehealth technology',
	images: [
		{
			url: 'https://payloadcms.com/images/og-image.jpg',
		},
	],
	siteName: 'Geviti',
	title: 'Geviti',
	type: 'website',
};

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
	return {
		...defaultOpenGraph,
		...og,
		images: og?.images ? og.images : defaultOpenGraph.images,
	};
};
