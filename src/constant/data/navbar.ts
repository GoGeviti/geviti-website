import ShoppingBagIcon from '@/components/Icons/ShoppingBagIcon';

const navigationData = {
	logoLight: '/images/logo/logo_light.webp',
	logoDark: '/images/logo/logo_dark.webp',
	menu: [
		{
			name: 'Get Started',
			href: '/get-started',
			externalLink: false
		},
		{
			name: 'Products',
			href: '/products',
			externalLink: false
		},
		{
			name: 'Resources',
			href: '/',
			externalLink: false
		}
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
			name: 'Dashboard',
			href: '/',
			externalLink: false
		}
	]
};

export default navigationData;