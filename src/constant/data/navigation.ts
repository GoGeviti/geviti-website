import ShoppingBagIcon from '@/components/Icons/ShoppingBagIcon';

const navigationData = {
	logoLight: '/images/logo/logo_light.webp',
	logoDark: '/images/logo/logo_dark.webp',
	menu: [
		// {
		// 	name: 'Membership',
		// 	href: '/membership',
		// 	externalLink: false,
		// },
		{
			name: 'Men\'s Health',
			href: '/solution/men',
			externalLink: false,
			items: [
				{
					name: 'Hair Regrowth Solutions',
					href: '/solution/men/hair-regrowth-solutions',
				},
				{
					name: 'Sexual Health',
					href: '/solution/men/sexual-health',
				},
				{
					name: 'Weight Management',
					href: '/solution/men/weight-management',
				},
				{
					name: 'Hormone Optimization',
					href: '/solution/men/hormone-optimization',
				},
				{
					name: 'Anti-aging Peptides',
					href: '/solution/men/anti-aging-peptides',
				},
			],
		},
		{
			name: 'Women\'s Health',
			href: '/solution/women',
			externalLink: false,
			items: [
				{
					name: 'Hair Regrowth Solutions',
					href: '/solution/women/hair-regrowth-solutions',
				},
				{
					name: 'Sexual Health',
					href: '/solution/women/sexual-health',
				},
				{
					name: 'Weight Management',
					href: '/solution/women/weight-management',
				},
				{
					name: 'Hormone Optimization',
					href: '/solution/women/hormone-optimization',
				},
				{
					name: 'Anti-aging Peptides',
					href: '/solution/women/anti-aging-peptides',
				},
			],
		},
		{
			name: 'Bloodwork',
			href: '/longeviti-panel',
			externalLink: false,
		},
		{
			name: 'Pricing',
			href: '/pricing',
			externalLink: false,
		},
		{
			name: 'Resources',
			href: '#',
			externalLink: false,
			items: [
				{
					name: 'Membership',
					href: '/membership',
					externalLink: false,
				},
				{
					name: 'Blog',
					href: '/blog',
				},
				{
					name: 'FAQ',
					href: '/faq',
				},
				{
					name: 'Contact Us',
					href: '/contact-us',
				},
			],
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
			type: 'button',
		},
	],
};

export default navigationData;
