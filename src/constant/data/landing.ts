import {
	BarChartSquareIcon,
	DiamondIcon,
	EmergencyCallAddIcon,
	RocketIcon,
	ShoppingBagIcon,
} from '@/components/Icons';

const landingData = {
	navbar: {
		iconsMenu: [
			{
				id: 'shopping',
				href: '/orders',
				icon: ShoppingBagIcon,
			},
		]
	},
	hero: {
		preTitle: 'Your at-home health and wellness clinic',
		title:
			'Online anti-aging care and <br /> personalized wellness.',
		image: '/images/landing/hero.png',
		imageMobile: '/images/landing/hero_mobile.png',
		btnCta: {
			text: 'Get Started',
			href: '/onboarding',
			externalLink: false,
		},
		btnCta2: {
			href: '/how-it-works',
			externalLink: false,
			text: 'How It Works',
		},
		mainKeys: [
			{
				image: '/images/landing/hero-icons/injection.svg',
				text: 'Hormone therapy',
				subtext: 'if applicable',
			},
			{
				image: '/images/landing/hero-icons/blood-drop.svg',
				text: 'Bloodwork screening',
				subtext: 'at-home',
			},
			{
				image: '/images/landing/hero-icons/rx.svg',
				text: 'Prescription care',
				subtext: 'cash pay',
			},
		],
	},
	products: {
		title: 'Discover Geviti',
		description: 'Browse our wide range of products!',
		viewAll: {
			text: 'View All Products',
			href: '/products',
		},
		titleMobile: 'Our Products',
	},
	investment: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
			'Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.',
		image: '/images/landing/investment.png',
		imageMobile: '/images/landing/investment_mobile.png',
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Get Started',
		},
	},
	mission: {
		title: 'Our Mission',
		description:
			'Geviti is built on the premise that our bodies are merely vessels of consciousness. Our mission is to extend time spent in our conscious experience so we may share it with our loved ones.<br /><br />We strive to slow down, maintain, or even reverse one’s biological age by promoting actionable plans.',
		image: '/images/landing/mission.png',
		imageMobile: '/images/landing/mission_mobile.png',
		btnCta: {
			href: '/blog/the-mission-of-geviti-the-birth-of-a-better-telehealth',
			externalLink: false,
			text: 'Read More',
		},
	},
	steps: {
		preTitle: 'Easy online care',
		title: 'Access to better care in just 4 easy steps.',
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Get Started',
		},
		list: [
			{
				id: 'package',
				title: 'Select your <br class="max-lg-hidden" />blood test',
				image: '/images/landing/compressed/step_1.webp',
				imageMobile: '/images/landing/compressed/step_1_mobile.webp',
			},
			{
				id: 'testing',
				title: 'Complete in-<br class="max-lg-hidden" />home testing',
				image: '/images/landing/compressed/step_2.webp',
				imageMobile: '/images/landing/compressed/step_2_mobile.webp',
			},
			{
				id: 'treatment',
				title: 'Telehealth <br class="max-lg-hidden" />doctor visit',
				image: '/images/landing/compressed/step_3.webp',
				imageMobile: '/images/landing/compressed/step_3.webp',
			},
			{
				id: 'best',
				title: 'Receive treatment <br class="max-lg-hidden" />in mail',
				image: '/images/landing/compressed/step_4.webp',
				imageMobile: '/images/landing/compressed/step_4.webp',
			},
		],
	},
	dashboard: {
		preTitle: 'Quality Care made accessible',
		title: 'Easy to use Geviti telehealth dashboard.',
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Start Now',
		},
		image: '/images/landing/compressed/dashboard_geviti.webp',
	},
	application: {
		preTitle: 'On-the-fly access',
		title: 'Integrated health tracking mobile application.',
		titleMobile: 'Integrated health monitoring mobile application.',
		description:
			'Geviti’s applications make managing longevity easy and convenient.',
		list: [
			{
				icon: BarChartSquareIcon,
				text: 'track Key metrics',
			},
			{
				icon: DiamondIcon,
				text: 'Medical team access',
			},
			{
				icon: RocketIcon,
				text: 'manage your goals',
			},
			{
				icon: EmergencyCallAddIcon,
				text: 'field telehealth calls ',
			},
		],
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Start Now',
		},
		image: '/images/landing/compressedapplication.webp',
	},
	functional: {
		preTitle: 'Tailored Functional Medicine',
		preTitleMobile: 'Longevity made easy',
		title:
			'A holistic approach to an<br />optimized <span class="font-semibold">you.</span>',
		btnCta: {
			href: '/products',
			externalLink: false,
			text: 'See Products',
		},
		list: [
			'Custom treatment sent straight to your door',
			'Cutting edge anti-aging peptide therapy',
			'New generation hormone replacement therapy',
			'All made in fully accredited USA pharmacies',
		],
	},
	quality: {
		preTitle: 'USA Pharmacy dispensed',
		preTitleMobile: 'Tailor-made longevity',
		title: 'Hormone therapy, peptide therapy, and more.',
		notes:
			'*Product images are for display purposes; actual items from US-based pharmacies may vary.',
		list: [
			'Treatments for both <span class="font-semibold">men</span> and <span class="font-semibold">women</women>',
			'Data-driven care to truly optimize your life',
			'24/7 health tracking via wearable integrations ',
			'Driven by technology to make your life simpler',
		],
		btnCtaList: [
			{
				href: '/onboarding',
				externalLink: false,
				text: 'Start Now',
			},
			{
				href: '/products',
				externalLink: false,
				text: 'See Products',
			},
		],
	},
	therapy: {
		preTitle: 'Innovative anti-aging therapies',
		preTitleMobile: 'Geviti is the cutting edge',
		title: 'No need to leave home. Anti-aging care that goes where you go.',
		titleMobile: 'Anti-aging care that goes where you go.',
		description:
			'Through on-site blood analysis by certified mobile phlebotomists, we\'ll tailor a healthcare plan specifically for your requirements.',
		descriptionMobile:
			'Geviti aims to increase both healthspan and lifespan by making longevity accessible.',
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Start Now',
		},
	},
	flexible: {
		preTitle: 'Personalized plans that are right for you',
		title: 'Full access for just $99',
		description:
			'Unlock personalized healthcare on the Geviti platform. From hormone optimization to peptide therapies and advanced diagnostics—all at your fingertips.',
		image: '/images/landing/compressed/flexible.webp',
		imageMobile: '/images/landing/compressed/flexible-mobile.webp',
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Join Now',
		},
	},
};

export default landingData;
