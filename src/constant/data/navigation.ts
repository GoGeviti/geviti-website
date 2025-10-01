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
		// {
		// 	name: 'Men\'s Health',
		// 	href: '/men',
		// 	externalLink: false,
		// 	items: [
		// 		{
		// 			name: 'Longevity and Peptide Therapy',
		// 			href: '/men/longevity-and-peptide-therapy',
		// 		},
		// 		{
		// 			name: 'Hormone Health Optimization',
		// 			href: '/men/hormone-optimization',
		// 		},
		// 		{
		// 			name: 'Medical Weight Management',
		// 			href: '/men/medical-weight-management',
		// 		},
		// 		{
		// 			name: 'Sexual Health and Vitality',
		// 			href: '/men/sexual-health-and-vitality',
		// 		},
		// 		{
		// 			name: 'Hair Regrowth Solutions',
		// 			href: '/men/hair-regrowth-solutions',
		// 		},
		// 	],
		// },
		// {
		// 	name: 'Women\'s Health',
		// 	href: '/women',
		// 	externalLink: false,
		// 	items: [
		// 		{
		// 			name: 'Longevity and Peptide Therapy',
		// 			href: '/women/longevity-and-peptide-therapy',
		// 		},
		// 		{
		// 			name: 'Hormone Health Optimization',
		// 			href: '/women/hormone-health-and-optimization-female',
		// 		},
		// 		{
		// 			name: 'Medical Weight Management',
		// 			href: '/women/medical-weight-management-female',
		// 		},
		// 		{
		// 			name: 'Sexual Health and Vitality',
		// 			href: '/women/sexual-health-and-vitality-female',
		// 		},
		// 		{
		// 			name: 'Hair Regrowth Solutions',
		// 			href: '/women/hair-regrowth-solutions-female',
		// 		},
		// 	],
		// },
		{
			name: 'Bloodwork',
			href: '/longeviti-panel',
			externalLink: false,
		},
		{
			name: 'Supplements',
			href: '/longeviti-blend',
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
					name: 'Wellness Blog',
					href: '/blog',
				},
				{
					name: 'Testimonials',
					href: '/testimonials',
					externalLink: false,
				},
				{
					name: 'For Business',
					href: '/business-oriented',
					externalLink: false,
				},
				{
					name: 'Contact Us',
					href: '/contact-us',
				},
				{
					name: 'About Us',
					href: '/about-us',
					externalLink: false,
				},
				{
					name: 'FAQ',
					href: 'https://help.gogeviti.com',
					externalLink: true,
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
