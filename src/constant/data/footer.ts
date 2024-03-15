const footerData = {
	logo: '/images/logo/logo_dark.webp',
	image: '/images/logo/geviti-footer.png',
	content: 'Stay in the loop with exclusive offers and product previews.',
	bottomContent: '*Product images are for display purposes; actual items from US-based pharmacies may vary.',
	list: [
		{
			title: 'Help & Support',
			menu: [
				{
					name: 'Contact Us',
					href: '/contact-us',
					externalLink: false
				},
				{
					name: 'FAQs',
					href: '/faq',
					externalLink: false
				},
				{
					name: 'Terms & Conditions',
					href: '/terms-and-conditions',
					externalLink: false
				},
				{
					name: 'Privacy Policy',
					href: '/privacy-policy',
					externalLink: false
				}
			]
		},
		{
			title: 'About Geviti',
			menu: [
				{
					name: 'About Us',
					href: '/',
					externalLink: false
				},
				{
					name: 'Invest',
					href: '/',
					externalLink: false
				},
				{
					name: 'Careers',
					href: '/',
					externalLink: false
				}
			]
		}
	],
	socialMedia: [
		{
			alt: 'facebook',
			url: 'https://facebook.com/',
			image: '/images/social_media/facebook.svg'
		},
		{
			alt: 'twitter',
			url: 'https://twitter.com/',
			image: '/images/social_media/twitter.svg'
		},
		{
			alt: 'instagram',
			url: 'https://instagram.com/',
			image: '/images/social_media/instagram.svg'
		},
		{
			alt: 'linkedin',
			url: 'https://linkedin.com/',
			image: '/images/social_media/linkedin.svg'
		}
	],
	disclaimer: {
		label: 'Please read the disclaimer +',
		content: '<span class="block">*Lab tests are ordered solely at the discretion of clinicians. If a physician decides not to order a test, the cost will be refunded.</span><span class="block">*Product images are for display purposes; actual items from US-based pharmacies may vary.</span><span class="block">All professional medical services are offered by licensed physicians and clinicians who operate within independently owned and professionally managed practices. Geviti is a healthcare technology company and does not function as a laboratory or medical provider. All laboratory and medical services are delivered by independent third-party entities.</span>'
	}
};

export default footerData;