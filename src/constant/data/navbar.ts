import { SearchIcon, ShoppingBagIcon, UserIcon } from '@/components/Icons';

const navigationData = {
	logoLight: '/images/logo/logo_light.png',
	logoDark: '/images/logo/logo_dark.png',
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
			id: 'search',
			icon: SearchIcon
		},
		{
			id: 'shopping',
			href: '/orders',
			icon: ShoppingBagIcon
		},
		{
			id: 'user',
			icon: UserIcon
		}
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