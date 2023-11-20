import ShoppingBagIcon from '@/components/Icons/ShoppingBagIcon';

const navigationData = {
	logoLight: '/images/logo/logo_light.webp',
	logoDark: '/images/logo/logo_dark.webp',
	menu: [
		{
			name: 'How it Works',
			href: '/how-it-works',
			externalLink: false
		},
		{
			name: 'Products',
			href: '/products',
			externalLink: false
		},
	],
	iconsMenu: [
		{
			id: 'shopping',
			href: '/orders',
			icon: ShoppingBagIcon
		},
	],
	actionsMenu: [
		{
			name: 'Get Started',
			href: '/get-started',
			externalLink: false
		}
	]
};

export default navigationData;