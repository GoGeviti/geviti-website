import ShoppingBagIcon from '@/components/Icons/ShoppingBagIcon';

const navigationData = {
	logoLight: '/images/logo/logo_light.webp',
	logoDark: '/images/logo/logo_dark.webp',
	menu: [
		{
			name: 'Membership',
			href: '#',
			externalLink: false
		},
		{
			name: 'Pricing',
			href: '/products',
			externalLink: false
		},
		{
			name: 'Solutions',
			href: '#',
			externalLink: false,
			items: [
				{
					name: 'Male Health',
					href: '#'
				},
				{
					name: 'Female Health',
					href: '#'
				},
				{
					name: 'Diagnostics',
					href: '#'
				},
				{
					name: 'Smart Supplements',
					href: '#'
				}
			]
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
			href: '/onboarding',
			externalLink: false,
			type: 'button'
		}
	]
};

export default navigationData;