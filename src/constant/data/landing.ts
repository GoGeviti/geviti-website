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
		preTitle: 'We’ll Help You Live Longer and Live Healthier',
		title: 'Your online hormone therapy and<br/>functional medicine provider.',
		image: '/images/landing/compressed/hero.webp',
		imageMobile: '/images/landing/compressed/hero-mobile.webp',
		btnCta: {
			text: 'See if I qualify',
			href: 'https://gogeviti.typeform.com/qualify',
			externalLink: true
		},
		btnCta2: {
			href: '/get-started',
			externalLink: false,
			text: 'Get Started'
		},
		mainKeys: [
			{
				image: '/images/icons/helix.svg',
				text: 'Hormone therapy',
				subtext: 'if applicable'
			},
			{
				image: '/images/icons/chemical.svg',
				text: 'Bloodwork screening',
				subtext: 'at-home'
			},
			{
				image: '/images/icons/traced.svg',
				text: 'Prescription care',
				subtext: 'cash pay'
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
		image: '/images/landing/compressed/investment.webp',
		imageMobile: '/images/landing/compressed/investment_mobile.webp',
		btnCta: {
			href: '/get-started',
			externalLink: false,
			text: 'Get Started'
		}
	},
	mission: {
		title: 'Our Mission',
		description: 'Geviti is built on the premise that our bodies are merely vessels of consciousness. Our mission is to extend time spent in our conscious experience so we may share it with our loved ones.<br /><br />We strive to slow down, maintain, or even reverse one’s biological age my promoting actionable plans.',
		image: '/images/landing/compressed/mission.webp',
		imageMobile: '/images/landing/compressed/mission_mobile.webp',
		btnCta: {
			href: '/',
			externalLink: false,
			text: 'Read More'
		}
	},
	steps: {
		preTitle: 'Easy online care',
		title: 'Access to better care in just 4 easy steps.',
		btnCta: {
			href: 'https://gogeviti.typeform.com/qualify',
			externalLink: true,
			text: 'See if I qualify'
		},
		list: [
			{
				id: 'package',
				title: 'Select your blood test',
				image: '/images/landing/compressed/step_1.webp',
				imageMobile: '/images/landing/compressed/step_1_mobile.webp'
			},
			{
				id: 'testing',
				title: 'Complete in-home testing',
				image: '/images/landing/compressed/step_2.webp',
				imageMobile: '/images/landing/compressed/step_2_mobile.webp'
			},
			{
				id: 'treatment',
				title: 'Telehealth doctor visit',
				image: '/images/landing/compressed/step_3.webp',
				imageMobile: '/images/landing/compressed/step_3.webp'
			},
			{
				id: 'best',
				title: 'Receive treatment in mail',
				image: '/images/landing/compressed/step_4.webp',
				imageMobile: '/images/landing/compressed/step_4.webp'
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
		image: '/images/landing/compressed/dashboard_geviti.webp'
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
		image: '/images/landing/compressedapplication.webp'
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
		title: 'Pharmacy Dispensed Medicines',
		notes: '*Product images are for display purposes; actual items from US-based pharmacies may vary.',
		list: [
			'Oral testosterone replacement (TRT)',
			'Online peptide and hormone therapy',
			'Integrated telehealth care app',
			'And more tailored treatments'
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
		title: 'No need to leave home. Anti-aging care that goes where you go.',
		description: 'Through on-site blood analysis by certified mobile phlebotomists, we\'ll tailor a healthcare plan specifically for your requirements.',
		btnCta: {
			href: '/get-started',
			externalLink: false,
			text: 'Start Now'
		}
	},
	flexible: {
		preTitle: 'flexible plans that are right for you',
		title: 'Starting from just $99/month',
		description: 'With at-home blood testing, facilitated by professional mobile phlebotomists, we will design a care plan precisely for your needs.',
		image: '/images/landing/compressed/flexible.webp',
		imageMobile: '/images/landing/compressed/flexible-mobile.webp',
		btnCta: {
			href: '/get-started',
			externalLink: false,
			text: 'Get Started'
		}
	},
};

export default landingData;