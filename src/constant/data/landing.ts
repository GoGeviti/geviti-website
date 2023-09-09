import {
	BarChartSquareIcon, DiamondIcon, EmergencyCallAddIcon, RocketIcon, ShoppingBagIcon
} from '@/components/Icons';

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
				name: 'Dashboard',
				href: '/',
				externalLink: false
			}
		]
	},
	hero: {
		preTitle: 'LED BY INDUSTRY EXPERTS',
		title: 'Longevity that works for you.<br />Telehealth made simple.',
		image: '/images/landing/hero.png',
		btnCta: {
			text: 'See if I qualify',
			href: 'https://gogeviti.typeform.com/qualify',
			externalLink: true
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
	investment: {
		preTitle: 'INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description: 'Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.',
		image: '/images/landing/investment.png',
		imageMobile: '/images/landing/investment_mobile.png',
		btnCta: {
			href: '/get-started',
			externalLink: false,
			text: 'Get Started'
		}
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
	},
	steps: {
		preTitle: 'completely custom',
		title: 'Start on the path towards a longer, more enjoyable life.',
		btnCta: {
			href: 'https://gogeviti.typeform.com/qualify',
			externalLink: true,
			text: 'See if I qualify'
		},
		list: [
			{
				id: 'package',
				title: 'Select your package.',
				image: '/images/landing/step_1.png',
				imageMobile: '/images/landing/step_1_mobile.png'
			},
			{
				id: 'testing',
				title: 'Complete your testing.',
				image: '/images/landing/step_2.png',
				imageMobile: '/images/landing/step_2_mobile.png'
			},
			{
				id: 'treatment',
				title: 'Get treatment in the mail.',
				image: '/images/landing/step_3.png',
				imageMobile: '/images/landing/step_3.png'
			},
			{
				id: 'best',
				title: 'Become the best possible you.',
				image: '/images/landing/step_4.png',
				imageMobile: '/images/landing/step_4.png'
			},
		]
	},
	dashboard: {
		preTitle: 'AI DRIVEN',
		title: 'Cutting-edge health monitoring technology.',
		btnCta: {
			href: '/get-started',
			externalLink: false,
			text: 'Start Now'
		},
		image: '/images/landing/dashboard_geviti.png'
	},
	application: {
		preTitle: 'On-the-fly access',
		title: 'Access to a longer life in the palm of your hand.',
		description: 'Geviti’s applications make managing longevity easy and convenient.',
		list: [
			{
				icon: BarChartSquareIcon,
				text: 'track your metrics'
			},
			{
				icon: DiamondIcon,
				text: 'direct specialist access'
			},
			{
				icon: RocketIcon,
				text: 'manage your goals'
			},
			{
				icon: EmergencyCallAddIcon,
				text: 'field telehealth calls'
			}
		],
		btnCta: {
			href: '/get-started',
			externalLink: false,
			text: 'Start Now'
		},
		image: '/images/landing/application.png'
	},
	functional: {
		preTitle: 'Tailored Functional Medicine',
		title: 'A holistic approach to an<br />optimized <span class="font-semibold">you.</span>',
		btnCta: {
			href: '/products',
			externalLink: false,
			text: 'See Products'
		},
		list: [
			'Compounds shipped direct to your door',
			'Cutting edge anti-aging therapies',
			'Oral testosterone replacement therapy',
			'Data-driven care by a board certified physician'
		]
	},
	quality: {
		preTitle: 'Highest quality standards',
		title: 'Hormones, peptides, and more shipped straight to your door.',
		list: [
			'Regenerative Medicine',
			'Hormone Therapy',
			'Anti-aging Protocols',
			'Innovative Therapies'
		],
		btnCtaList: [
			{
				href: '/get-started',
				externalLink: false,
				text: 'Start Now'
			},
			{
				href: '/products',
				externalLink: false,
				text: 'See Products'
			}
		],
	},
	therapy: {
		preTitle: 'Innovative anti-aging therapies',
		title: 'Hormone therapy, peptide therapy, and anti-aging medicine.',
		description: 'We go beyond the traditional one-size-fits-all approach. We understand that each individual has unique needs and goals.',
		btnCta: {
			href: '/get-started',
			externalLink: false,
			text: 'Start Now'
		}
	}
};

export default landingData;