import ShoppingBagIcon from '@/components/Icons/ShoppingBagIcon';

const navigationData = {
	logoLight: '/images/logo/logo_light.webp',
	logoDark: '/images/logo/logo_dark.webp',
	menu: [
		{
			name: 'Men\'s Health',
			href: '/solution/men',
			externalLink: false
		},
		{
			name: 'Women\'s Health',
			href: '/solution/women',
			externalLink: false
		},
		{
			name: 'Learn More',
			href: '/membership',
			externalLink: false
		},
		{
			name: 'Pricing',
			href: '/pricing',
			externalLink: false
		},
		{
			name: 'Resources',
			href: '#',
			externalLink: false,
			items: [
				{
					name: 'Blog',
					href: '/blog'
				},
				{
					name: 'FAQ',
					href: '/faq'
				},
				{
					name: 'Contact Us',
					href: '/contact-us'
				}
			]
		},
	],
	iconsMenu: [
		{
			id: 'shopping',
			href: '/cart',
			icon: ShoppingBagIcon,
		},
	],
	actionsMenu: [
		{
			name: 'Get Started',
			href: '/pricing',
			externalLink: false,
			type: 'button'
		}
	]
};

export default navigationData;