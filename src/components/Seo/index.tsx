import React from 'react';
import { NextSeo } from 'next-seo';

export type SEOProps = {
  title? : string,
  description? : string,
  og_images? : string,
  canonical? : string,
}

const SEO:React.FC<SEOProps> = props => {

	const url = 'https://' + (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL : process.env.NEXT_PUBLIC_VERCEL_URL);

	const {
		title = 'Geviti',
		description = 'A data-driven approach to longevity and health optimization. Invest in your future self with our tailored solutions. Join waitlist today.',
		og_images = '/meta/home.jpg',
		canonical = ''
	} = props;
	return (
		<NextSeo
			title={ title }
			description={ description }
			canonical={ url + canonical }
			openGraph={ {
				url: url,
				title: title,
				description: description,
				images: [
					{
						url: url +  og_images
					},
				],
			} }
			twitter={ {
				handle: url,
				site: url,
				cardType: 'summary_large_image',
			} }
		/>
	);
};
export default SEO;