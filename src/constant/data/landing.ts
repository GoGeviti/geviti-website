import { ShoppingBagIcon } from '@/components/Icons';

const landingData = {
	navbar: {
		iconsMenu: [
			{
				id: 'shopping',
				href: '/orders',
				icon: ShoppingBagIcon
			}
		],
		actionsMenu: [
			{
				name: 'Get Started',
				href: '/get-started',
				externalLink: false
			}
		]
	},
	hero: {
		preTitle: 'LED BY INDUSTRY EXPERTS',
		title: 'Longevity that works for you.<br />Personalized life- extension plans.',
		image: '/images/landing/hero.png',
		btnCta: {
			text: 'See if I qualify',
			textMobile: 'Take Our 3 Minute Quiz',
			href: '/',
			externalLink: false
		},
		mainKeys: [
			{
				image: '/images/icons/helix.svg',
				text: 'Hormone',
				subtext: 'Optimization'
			},
			{
				image: '/images/icons/chemical.svg',
				text: 'Genetic',
				subtext: 'Navigation'
			},
			{
				image: '/images/icons/traced.svg',
				text: 'Lifestyle',
				subtext: 'Maximization'
			}
		]
	},
	products: {
		title: 'Discover Geviti',
		description: 'Browse our wide range of products!',
		viewAll: {
			text: 'View All Products',
			href: '/products'
		},
		titleMobile: 'Our Products'
	},
	mission: {
		title: 'Our Mission',
		description: 'Geviti is built on the premise that our bodies are merely vessels of consciousness. Our mission is to extend time spent in our conscious experience so we may share it with our loved ones.<br /><br />We strive to slow down, maintain, or even reverse one’s biological age my promoting actionable plans.',
		image: '/images/landing/mission.png',
		imageMobile: '/images/landing/mission_mobile.png',
		btnCta: {
			href: '/',
			externalLink: false,
			text: 'Read More'
		}
	}
};

export default landingData;