import { HomeIcon } from '@/components/Icons/Landing';
import {
	BloodDropIcon,
	FileIcon,
	GraphWomenIcon,
	HeartIcon,
	HormoneTherapyIcon,
	MemberIcon,
	PeptidesIcon,
	TherapyIcon,
	ThyroidIcon,
	WeightLossIcon,
} from '@/components/Solutions/SolutionIcons';

import landingData from './landing';

const solutionData = {
	hero: {
		men: {
			preTitle: 'mens health and wellness solutions',
			titles: ['Live optimized with <b>Geviti</b>'],
			titlesMobile: ['Live optimized with', '<b>Geviti</b>'],
			description: 'Our platform offers men at-home diagnostics and doctor-supervised treatments covering testosterone therapy, anti-aging peptides, medical weight loss, and more, fostering vitality and longevity.',
			image: '/images/solution_media/compressed/hero-men.webp',
			imageMobile: '/images/solution_media/compressed/hero-men-mobile.webp',
			btnCta: {
				text: 'Join Geviti',
				href: '/onboarding',
				externalLink: false,
			},
		},
		women: {
			preTitle: 'Womens health and wellness solutions',
			titles: ['Live optimized with <b>Geviti</b>'],
			titlesMobile: ['Live optimized with', '<b>Geviti</b>'],
			description: 'A Geviti membership makes longevity easy and <br class="lg:hidden"/>accessible with our wide range of at-home diagnostics, <br class="lg:hidden"/>innovative anti-aging therapies, and a dedicated <br class="lg:hidden"/>qualified care team.',
			image: '/images/solution_media/compressed/hero-women.webp',
			imageMobile: '/images/solution_media/compressed/hero-women-mobile.webp',
			btnCta: {
				text: 'Join Geviti',
				href: '/onboarding',
				externalLink: false,
			},
		}
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
	steps: {
		preTitle: 'Geviti offers data-driven wellness solutions',
		title: 'Begin with an at-home <br class="lg:hidden"/>bloodwork panel',
		description:
			'Membership journey starts with choosing a “Deep Dive” diagnostic. We’ll draw your blood from the comfort of your home.',
		list: [
			{
				id: 'step-1',
				title: 'Become a member by <br class="max-lg:hidden"/>purchasing a full panel <br class="max-lg:hidden"/>diagnostic package',
				icon: MemberIcon,
			},
			{
				id: 'step-2',
				title: 'Complete your at-home blood <br class="max-lg:hidden"/>draw with our mobile <br class="max-lg:hidden"/>phlebotomy team',
				icon: BloodDropIcon,
				iconMobile: HomeIcon,
			},
			{
				id: 'step-3',
				title: 'Review results and tailored <br class="max-lg:hidden"/>protocol with your designated <br class="max-lg:hidden"/>care team',
				icon: FileIcon,
			},
			{
				id: 'step-4',
				title: 'Receive your tailor-made <br class="max-lg:hidden"/>protocols in the mail and <br class="max-lg:hidden"/>track your progress',
				icon: GraphWomenIcon,
			},
		],
	},
	treatmentmens: {
		sectionsubheading: 'Easy online care',
		sectionmainheading: 'Treatment options for male optimization',
		cards: {
			heading: 'Compare Testosterone Optimization options',
			subheading: 'Oral Testosterone',
			paragraph:
				'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many. ',
			features: [
				'FDA Approved',
				'Bioidentical',
				'96% Efficacy',
				'Oral Capsule',
				'Twice Daily',
				'Flexible Dosing',
			],
			cardslist: [
				{
					imageURL: '/images/solution_media/Pill-Bottle-Mockup.webp',
				},
				{
					imageURL: '/images/solution_media/Pill-Bottle-Mockup.webp',
				},
				{
					imageURL: '/images/solution_media/Pill-Bottle-Mockup.webp',
				},
				{
					imageURL: '/images/solution_media/Pill-Bottle-Mockup.webp',
				},
			],
		},
		products: [
			{
				id: 1,
				name: 'Oral Testosterone',
				description: 'Oral Gel Capsule',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup.webp',
			},
			{
				id: 2,
				name: 'Enclomiphene Citrate',
				description: 'Oral Tablet',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup.webp',
			},
			{
				id: 3,
				name: 'Testosterone Booster Complex',
				description: 'Oral Tablet',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup.webp',
			},
			{
				id: 4,
				name: 'Testosterone Topical Cream',
				description: 'Oral Tablet',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup.webp',
			},
			{
				id: 5,
				name: 'Enclomiphene Citrate',
				description: 'Oral Tablet',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup.webp',
			},
			{
				id: 6,
				name: 'Enclomiphene Citrate',
				description: 'Oral Tablet',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup.webp',
			},
		],
	},
	wellnessProList: {
		men: [
			{
				preTitle: 'Hormone optimization can change your life',
				title: 'Be proactive instead of reactive.',
				description:
					'With 1 in every 4 men over 30 experiencing testosterone deficiencies and 1 in 3 adults overweight, Geviti delivers the ultimate proactive solution for health and wellness.',
				image: '/images/solution_media/compressed/wellnesspro-men-1.webp',
				imageMobile: '/images/solution_media/compressed/wellnesspro-men-1-mobile.webp',
				count: 20,
				suffix: 'million',
				imageHeading: 'Men In the united states',
				imageSubheading: 'from ages 25-75 have low T',
			},
			{
				preTitle: 'Testosterone deficiencies are common',
				title: 'Let’s optimize your testosterone.',
				description:
					'Testosterone levels don’t only decline in later years. More young men are experiencing deficiencies than ever before, demonstrating that low T can affect men at all stages of aging.',
				image: '/images/solution_media/compressed/wellnesspro-men-2.webp',
				imageMobile: '/images/solution_media/compressed/wellnesspro-men-2-mobile.webp',
				count: 20,
				suffix: '%',
				imageHeading: 'YOUNG MEN under 39',
				imageSubheading: 'have a testosterone deficiency',
			},
		],
		women: [
			{
				preTitle: 'Maintaining A healthy weight is vital',
				title: 'We have a weight problem.',
				description:
					'4 in every 10 women have a Body Mass Index greater than 30, classifying theme as obese. Obesity comes with an increased risk for diabetes, heart disease, and some cancers. ',
				image: '/images/solution_media/compressed/wellnesspro-women-1.webp',
				imageMobile: '/images/solution_media/compressed/wellnesspro-women-1-mobile.webp',
				count: 40,
				suffix: '%',
				imageHeading: 'Of women in <span class="text-white">America</span>',
				imageSubheading: 'Struggle with obesity ',
			},
			{
				preTitle: 'optimized hormonal states can be maintained',
				title: 'Lets optimize your hormones.',
				description:
					'It’s a misconception that your testosterone only drops in your older years. More young men struggle with testosterone deficiencies than ever before.',
				image: '/images/solution_media/compressed/wellnesspro-women-2.webp',
				imageMobile: '/images/solution_media/compressed/wellnesspro-women-2-mobile.webp',
				count: 80,
				suffix: '%',
				imageHeading: 'Of women in <span class="text-white">America</span>',
				imageSubheading: 'struggle with hormone imbalances',
			},
		],
	},
	banner: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
			'Age better without compromising your lifestyle—our longevity and vitality solutions are designed to fit seamlessly into your everyday life.',
		image: {
			women: '/images/solution_media/compressed/banner-women.webp',
			men: '/images/solution_media/compressed/banner-men.webp',
		},
		imageMobile: {
			women: '/images/solution_media/compressed/banner-women-mobile.webp',
			men: '/images/solution_media/compressed/banner-men-mobile.webp',
		},
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Start Now',
		},
	},
	faq: {
		data: [
			{
				title: 'In which states is Geviti available?',
				content:
					'Geviti currently offers services in eleven states: Arizona (AZ), California (CA), Colorado (CO), Utah (UT), Washington (WA), Texas (TX), Florida (FL), Georgia (GA), Kansas (KS), Oregon (OR), and New Mexico (NM). We are actively expanding to include more states across the country.',
			},
			{
				title:
					'What “Deep-dive Diagnostic” is included semi-annually with the membership?',
				content: 'As part of your membership, you receive the "Essentials Diagnostic" twice each year. This foundational evaluation provides key insights into your health metrics. For a more detailed analysis, you have the option to upgrade to our comprehensive or ultimate diagnostic tiers at any time.',
			},
			{
				title: 'What is the membership cancellation and refund policy?',
				content: 'You can easily cancel your Geviti membership at any time through your personal dashboard. Given the personalized nature of our services, refunds are not automatically granted but are considered on a case-by-case basis. If you have specific circumstances or need further assistance, please contact our support team for detailed guidance.',
			},
			{
				title:
					'Are the cost of supplements or prescriptions included in the membership fee?',
				content: 'The membership fee provides access to our range of supplements and prescription services; however, the costs for these items are not included in the fee. Each supplement or prescription is priced separately, allowing you to choose exactly what fits your needs and budget.',
			},
			{
				title:
					'What if I have recently done labs? Do I still need to purchase a diagnostic package?',
				content: 'We require all new members to purchase a diagnostic package as part of our initial assessment process. This ensures that we have the most recent and relevant data to provide personalized care. However, if you have recent lab results, please reach out to our support team. We may be able to adjust your initial requirements based on the specifics of your situation.',
			},
			{
				title: 'Does a blood panel guarantee access to specific treatments?',
				content: 'Purchasing a diagnostic package does not guarantee that you will receive any specific prescription treatment. The determination of appropriate treatments is solely at the discretion of your healthcare provider, based on a comprehensive evaluation of your test results and overall health profile.',
			},
		]
	},
	membership: {
		preTitle: 'Personalized plans that are right for you',
		title: 'Memberships as low as <br class="sm:hidden"/>$99<span class="text-xs lg:text-2xl lg:!leading-9">/month</span>',
		description: 'Your Geviti membership will include the following:',
		btnCta: {
			text: 'Become A Member',
			href: '/onboarding'
		},
		btnCtaMobile: {
			text: 'Join Geviti',
			href: '/onboarding'
		},
		list: landingData.membership.priceSection.list
	},
	optimizedYourSelf: {
		preTitle: 'You owe it to yourself, and others.',
		title: 'Become the optimized <br />version of yourself.',
		description: 'A Geviti membership makes longevity easy and accessible with our wide range of at-home diagnostics, innovative anti-aging therapies, and a dedicated qualified care team.<br /><br />All of this, and more with in-house health coaching, automated at-home bloodwork, and custom smart supplements.',
		image: '/images/solution_media/compressed/optimizedyourself.webp',
		imageMobile: '/images/solution_media/compressed/optimizedyourself-mobile.webp',
		btnCta: {
			text: 'Become A Member',
			href: '/onboarding'
		},
		imageCaption: {
			mobile: {
				count: 20,
				suffix: 'million',
				subheading1: 'men in the united states',
				subheading2: 'from ages 25-75 have low T'
			},
			desktop: {
				count: '1-2',
				suffix: '%',
				subheading1: 'annual decreases in testosterone after 40'
			}
		}
	},
	treatmentOptions: {
		men: {
			preTitle: 'Easy online care',
			title: 'Treatment options for male optimization',
			btnCta: {
				href: '/onboarding',
				text: 'Get Started'
			},
			tabs: [
				{ id: 1, title: 'Testosterone Therapy', icon: TherapyIcon, preTitle: 'Compare Testosterone optimization options' },
				{ id: 2, title: 'Anti-aging Peptides', icon: PeptidesIcon, preTitle: 'Compare Anti-aging optimization options' },
				{ id: 3, title: 'Medical Weight Loss', icon: WeightLossIcon, preTitle: 'Compare Weight Loss optimization options' },
				{ id: 4, title: 'Sexual Health', icon: HeartIcon, preTitle: 'Compare Sexual Health optimization options' },
				{ id: 5, title: 'Thyroid', icon: ThyroidIcon, preTitle: 'Compare Thyroid optimization options' },
			],
			products: [
				{
					id: 1,
					name: 'Oral Testosterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Gel Capsule',
					price: 94.99,
					category: { id: 1 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 2,
					name: 'Enclomiphene Citrate',
					description: 'The FDA\'s approval of Enclomiphene Citrate undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 1 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 3,
					name: 'Testosterone Booster Complex',
					description: 'The FDA\'s approval of Testosterone Booster Complex undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 1 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 4,
					name: 'Testosterone Topical Cream',
					description: 'The FDA\'s approval of Testosterone Topical Cream undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 1 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 5,
					name: 'Oral Testosterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Gel Capsule',
					price: 94.99,
					category: { id: 2 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 6,
					name: 'Enclomiphene Citrate',
					description: 'The FDA\'s approval of Enclomiphene Citrate undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 2 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 7,
					name: 'Testosterone Booster Complex',
					description: 'The FDA\'s approval of Testosterone Booster Complex undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 2 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 8,
					name: 'Testosterone Topical Cream',
					description: 'The FDA\'s approval of Testosterone Topical Cream undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 2 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 9,
					name: 'Oral Testosterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Gel Capsule',
					price: 94.99,
					category: { id: 3 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 10,
					name: 'Enclomiphene Citrate',
					description: 'The FDA\'s approval of Enclomiphene Citrate undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 3 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 11,
					name: 'Testosterone Booster Complex',
					description: 'The FDA\'s approval of Testosterone Booster Complex undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 3 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 12,
					name: 'Testosterone Topical Cream',
					description: 'The FDA\'s approval of Testosterone Topical Cream undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 3 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 13,
					name: 'Oral Testosterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Gel Capsule',
					price: 94.99,
					category: { id: 4 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 14,
					name: 'Enclomiphene Citrate',
					description: 'The FDA\'s approval of Enclomiphene Citrate undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 4 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 15,
					name: 'Testosterone Booster Complex',
					description: 'The FDA\'s approval of Testosterone Booster Complex undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 4 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 16,
					name: 'Testosterone Topical Cream',
					description: 'The FDA\'s approval of Testosterone Topical Cream undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 4 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 17,
					name: 'Oral Testosterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Gel Capsule',
					price: 94.99,
					category: { id: 5 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 18,
					name: 'Enclomiphene Citrate',
					description: 'The FDA\'s approval of Enclomiphene Citrate undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 5 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 19,
					name: 'Testosterone Booster Complex',
					description: 'The FDA\'s approval of Testosterone Booster Complex undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 5 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 20,
					name: 'Testosterone Topical Cream',
					description: 'The FDA\'s approval of Testosterone Topical Cream undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Tablet',
					price: 94.99,
					category: { id: 5 },
					image: '/images/solution_media/compressed/product-men-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-men.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Flexible Dosing'
					]
				},
			],
		},
		women: {
			preTitle: 'Doctor Led online Treatment',
			title: 'Treatment options for females',
			btnCta: {
				href: '/onboarding',
				text: 'Get Started'
			},
			tabs: [
				{ id: 1, title: 'Horomone Therapy', icon: HormoneTherapyIcon, preTitle: 'Analyze hormone Therapy options' },
				{ id: 2, title: 'Anti-aging Peptides', icon: PeptidesIcon, preTitle: 'Analyze anti-aging options' },
				{ id: 3, title: 'Medical Weight Loss', icon: WeightLossIcon, preTitle: 'Analyze weight loss options' },
				{ id: 4, title: 'Sexual Health', icon: HeartIcon, preTitle: 'Analyze sexual health options' },
				{ id: 5, title: 'Thyroid', icon: ThyroidIcon, preTitle: 'Analyze thyroid options' },
			],
			products: [
				{
					id: 1,
					name: 'Oral Estradiol',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 1 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 2,
					name: 'Oral Progesterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 1 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 3,
					name: 'Progesterone Topical Cream',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 1 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 4,
					name: 'Estradiol Topical Cream',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 1 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},

				{
					id: 5,
					name: 'Oral Estradiol',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 2 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 6,
					name: 'Oral Progesterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 2 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 7,
					name: 'Progesterone Topical Cream',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 2 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 8,
					name: 'Estradiol Topical Cream',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 2 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 9,
					name: 'Oral Estradiol',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 3 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 10,
					name: 'Oral Progesterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 3 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 11,
					name: 'Progesterone Topical Cream',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 3 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 12,
					name: 'Estradiol Topical Cream',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 3 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 14,
					name: 'Oral Estradiol',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 4 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 15,
					name: 'Oral Progesterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 4 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 16,
					name: 'Progesterone Topical Cream',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 4 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 17,
					name: 'Estradiol Topical Cream',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 4 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 18,
					name: 'Oral Estradiol',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 5 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 19,
					name: 'Oral Progesterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 5 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 20,
					name: 'Progesterone Topical Cream',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 5 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				},
				{
					id: 21,
					name: 'Estradiol Topical Cream',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 5 },
					image: '/images/solution_media/compressed/product-women-1.webp',
					images: [
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp',
						'/images/solution_media/compressed/pill-bottle-mockup-women.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'Convenient',
						'Oral Tablet',
						'Taken Daily',
						'Flexible Dosing'
					]
				}
			]
		},
	}
};

export default solutionData;
