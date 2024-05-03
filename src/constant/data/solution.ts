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
			title: 'Live optimized with <br class="lg:hidden"/><span>Geviti</span>',
			titles: ['Live optimized with <span>Geviti</span>'],
			titlesMobile: ['Live optimized with', '<span>Geviti</span>'],
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
			title: 'Live optimized with <br class="lg:hidden"/><span>Geviti</span>',
			titles: ['Live optimized with <span>Geviti</span>'],
			titlesMobile: ['Live optimized with', '<span>Geviti</span>'],
			description: 'Our platform offers women at-home diagnostics and doctor-supervised treatments covering testosterone therapy, anti-aging peptides, medical weight loss, and more, fostering vitality and longevity.',
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
				imageHeading: 'OF YOUNG MEN under 39',
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
				preTitle: 'Optimal Hormonal Balance Can Be Achieved',
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
				{ id: 2, title: 'Anti-aging Peptides', icon: PeptidesIcon, preTitle: 'Explore Anti-aging Peptides' },
				{ id: 3, title: 'Medical Weight Loss', icon: WeightLossIcon, preTitle: 'See our medical weight loss options' },
				{ id: 4, title: 'Sexual Health', icon: HeartIcon, preTitle: 'Explore our sexual health Solutions' },
				{ id: 5, title: 'Thyroid', icon: ThyroidIcon, preTitle: 'Explore our Thyroid Solutions' },
			],
			products: [
				{
					id: 1,
					name: 'Oral Testosterone',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Oral Gel Capsule',
					price: 99,
					category: { id: 1 },
					image: '/images/solution_media/men/testosterone-therapy/oral-testosterone.webp',
					images: [
						'/images/solution_media/men/testosterone-therapy/oral-testosterone.webp',
						'/images/solution_media/men/testosterone-therapy/oral-testosterone.webp',
						'/images/solution_media/men/testosterone-therapy/oral-testosterone.webp'
					],
					list: [
						'FDA Approved',
						'Bioidentical',
						'96% Efficacy',
						'Oral Capsule',
						'Twice Daily',
						'Mimics Natural Production'
					]
				},
				{
					id: 2,
					name: 'T Booster Complex',
					description: 'The potent mix of Clomiphene, 7-keto-DHEA, Progesterone, and very low dose Anastrozole has been proven to significantly boost male testosterone levels without the need for exogenous testosterone replacement therapy. It\'s both safe and effective.',
					sort_description: 'Oral Tablet',
					price: 60,
					category: { id: 1 },
					image: '/images/solution_media/men/testosterone-therapy/testosterone-booster.webp',
					images: [
						'/images/solution_media/men/testosterone-therapy/testosterone-booster.webp',
						'/images/solution_media/men/testosterone-therapy/testosterone-booster.webp',
						'/images/solution_media/men/testosterone-therapy/testosterone-booster.webp'
					],
					list: [
						'TRT Alternative',
						'Safe Profile',
						'Non-Invasive',
						'Oral Tablet',
						'Daily Dosing',
						'Stimulates Natural Production'
					]
				},
				{
					id: 3,
					name: 'Enclomiphene Citrate',
					description: 'Enclomiphene Citrate stimulates natural testosterone production, offering a standalone solution or a TRT complement. This strategy enhances hormonal health without directly adding external testosterone.',
					sort_description: 'Oral Tablet',
					price: 60,
					category: { id: 1 },
					image: '/images/solution_media/men/testosterone-therapy/enclomiphene-citrat.webp',
					images: [
						'/images/solution_media/men/testosterone-therapy/enclomiphene-citrat.webp',
						'/images/solution_media/men/testosterone-therapy/enclomiphene-citrat.webp',
						'/images/solution_media/men/testosterone-therapy/enclomiphene-citrat.webp'
					],
					list: [
						'TRT Alternative',
						'Safe Profile',
						'Non-Invasive',
						'Oral Tablet',
						'Daily Dosing',
						'Can Boost Natural Production'
					]
				},
				{
					id: 4,
					name: 'Testosterone Cream',
					description: 'Testosterone Cream provides a topical testosterone boost, ensuring steady absorption through the skin for consistent hormonal support. Ideal for those preferring non-injectable options, it offers controlled dosing and ease of use, catering to various treatment needs.',
					sort_description: 'Topical Cream',
					price: 70,
					category: { id: 1 },
					image: '/images/solution_media/men/testosterone-therapy/testosterone-cream.webp',
					images: [
						'/images/solution_media/men/testosterone-therapy/testosterone-cream.webp',
						'/images/solution_media/men/testosterone-therapy/testosterone-cream.webp',
						'/images/solution_media/men/testosterone-therapy/testosterone-cream.webp'
					],
					list: [
						'Applied Topically',
						'Controlled Dosing',
						'Convenient Use',
						'Steady Absorption',
						'Non-Injectable',
						'Versatile Treatment'
					]
				},
				{
					id: 5,
					name: 'Testosterone Cypionate',
					description: 'Testosterone Cypionate, a long-acting injectable testosterone, offers sustained hormone supplementation with fewer doses. Delivered via injection, it supports various treatment goals, from hormone replacement to enhancing muscle growth and vitality.',
					sort_description: '',
					price: 30,
					category: { id: 1 },
					image: '/images/solution_media/men/testosterone-therapy/testosterone-cypionate.webp',
					images: [
						'/images/solution_media/men/testosterone-therapy/testosterone-cypionate.webp',
						'/images/solution_media/men/testosterone-therapy/testosterone-cypionate.webp',
						'/images/solution_media/men/testosterone-therapy/testosterone-cypionate.webp'
					],
					list: [
						'Sustained Release',
						'Bioidentical',
						'Versatile Use',
						'Injectable',
						'Highly Effective',
						'Flexible Dosing'
					]
				},
				{
					id: 6,
					name: 'Sermorelin Mini Troche',
					description: 'Sermorelin Mini Troches dissolve under the tongue for rapid absorption and stimulate natural growth hormone production without the need for injections. They support anti-aging, muscle strength, and vitality.',
					sort_description: 'Sublingual Mini Troche',
					price: 70,
					category: { id: 2 },
					image: '/images/solution_media/men/anti-aging/sermorelin-mini.webp',
					images: [
						'/images/solution_media/men/anti-aging/sermorelin-mini.webp',
						'/images/solution_media/men/anti-aging/sermorelin-mini.webp',
						'/images/solution_media/men/anti-aging/sermorelin-mini.webp'
					],
					list: [
						'Quick Absorption',
						'Enhances Vitality',
						'Non-Invasive',
						'Sublingual Troche',
						'Daily Dosing',
						'Stimulates Growth Hormone'
					]
				},
				{
					id: 7,
					name: 'Sermorelin Injections',
					description: 'Sermorelin Injections stimulate natural growth hormone production through subcutaneous administration, supporting anti-aging, muscle strength, and vitality. They offer targeted, effective hormone optimization for a comprehensive wellness regimen.',
					sort_description: 'Sub-Q Injection',
					price: 115,
					category: { id: 2 },
					image: '/images/solution_media/men/anti-aging/sermorelin-injections.webp',
					images: [
						'/images/solution_media/men/anti-aging/sermorelin-injections.webp',
						'/images/solution_media/men/anti-aging/sermorelin-injections.webp',
						'/images/solution_media/men/anti-aging/sermorelin-injections.webp'
					],
					list: [
						'Versatile Dosing',
						'Enhanced Vitality',
						'Anti-Aging',
						'Subcutaneous Administration',
						'Efficient Absorption',
						'Stimulates Growth Hormone'
					]
				},
				{
					id: 8,
					name: 'GHK-Cu Troche',
					description: 'GHK-Cu Troches offer a convenient, sublingual route for the anti-aging benefits of GHK-Copper peptide, dissolving under the tongue for quick absorption. They promote skin health, wound healing, and collagen production, enhancing daily anti-aging routines with optimal bioavailability.',
					sort_description: 'Sublingual Troche',
					price: 110,
					category: { id: 2 },
					image: '/images/solution_media/men/anti-aging/ghk-troche.webp',
					images: [
						'/images/solution_media/men/anti-aging/ghk-troche.webp',
						'/images/solution_media/men/anti-aging/ghk-troche.webp',
						'/images/solution_media/men/anti-aging/ghk-troche.webp'
					],
					list: [
						'Convenient Use',
						'Keeps Skin Young',
						'Anti-Aging',
						'Sublingual Delivery',
						'Highly Bioavailable',
						'Boosts Collagen Production'
					]
				},
				{
					id: 9,
					name: 'Semaglutide',
					description: 'Semaglutide Injections mimic the GLP-1 hormone to regulate appetite and aid in significant weight reduction. Administered subcutaneously, they offer an effective solution for enhancing metabolic health and managing weight.',
					sort_description: 'Oral Gel Capsule',
					price: 55,
					category: { id: 3 },
					image: '/images/solution_media/men/weight-loss/semaglutide.webp',
					images: [
						'/images/solution_media/men/weight-loss/semaglutide.webp',
						'/images/solution_media/men/weight-loss/semaglutide.webp',
						'/images/solution_media/men/weight-loss/semaglutide.webp'
					],
					list: [
						'Reduces Hunger',
						'Flexible Dosing',
						'Highly Effective',
						'Subcutaneous Administration',
						'Metabolic Enhancement',
						'Mimics GLP-1',
					]
				},
				{
					id: 10,
					name: 'Tirzepatide',
					description: 'Tirzepatide Injections offer a dual-action approach to weight management, mimicking GLP-1 and GIP to suppress appetite and promote significant weight loss. Subcutaneous administration.',
					sort_description: 'Oral Tablet',
					price: 150,
					category: { id: 3 },
					image: '/images/solution_media/men/weight-loss/tirzepatide.webp',
					images: [
						'/images/solution_media/men/weight-loss/tirzepatide.webp',
						'/images/solution_media/men/weight-loss/tirzepatide.webp',
						'/images/solution_media/men/weight-loss/tirzepatide.webp'
					],
					list: [
						'Reduces Hunger',
						'Flexible Dosing',
						'Highly Effective',
						'Subcutaneous Administration',
						'Metabolic Enhancement',
						'Mimics GLP-1 and GIP',
					]
				},
				{
					id: 11,
					name: 'Tadalafil',
					description: 'Tadalafil tablets improve sexual health by enhancing blood flow. They offer lasting effectiveness for erectile dysfunction, promoting reduced stress, better heart health, and higher self-esteem. Better for you, your partner, and your wellness. Tadalafil can be used daily, or on an as needed basis, depending on the individual.',
					sort_description: 'Oral Tablet',
					price: 70,
					category: { id: 4 },
					image: '/images/solution_media/men/sexual-health/tadalafil.webp',
					images: [
						'/images/solution_media/men/sexual-health/tadalafil.webp',
						'/images/solution_media/men/sexual-health/tadalafil.webp',
						'/images/solution_media/men/sexual-health/tadalafil.webp'
					],
					list: [
						'Longer Half Life',
						'Treats ED',
						'30 Tablets',
						'Treats PAH',
						'Improves Sexual Health',
						'Treats BPH symptoms'
					]
				},
				{
					id: 12,
					name: 'Peak Male Mini Troche',
					description: 'Peak Male Mini Troche combines Oxytocin, PT-141 and Tadalafil. These compounds work together to improve overall emotional, physical and intimate well being. Comes with 10 dissolvable Troches.',
					sort_description: 'Sublingual Mini Troche',
					price: 90,
					category: { id: 4 },
					image: '/images/solution_media/men/sexual-health/peak-male.webp',
					images: [
						'/images/solution_media/men/sexual-health/peak-male.webp',
						'/images/solution_media/men/sexual-health/peak-male.webp',
						'/images/solution_media/men/sexual-health/peak-male.webp'
					],
					list: [
						'Sublingual Troche',
						'Oxytocin',
						'PT-141',
						'Improves Intimacy',
						'Tadalafil',
						'Improves Sexual Health'
					]
				},
				{
					id: 13,
					name: 'Desiccated Thyroid',
					description: 'Desiccated Thyroid is used to treat hypothyroidism. It supplements the body’s natural thyroid hormones helping to restore the balance of T3 and T4 levels.',
					sort_description: 'Oral Gel Capsule',
					price: 70,
					category: { id: 5 },
					image: '/images/solution_media/men/thyroid/desiccated-thyroid.webp',
					images: [
						'/images/solution_media/men/thyroid/desiccated-thyroid.webp',
						'/images/solution_media/men/thyroid/desiccated-thyroid.webp',
						'/images/solution_media/men/thyroid/desiccated-thyroid.webp'
					],
					list: [
						'Enhances Energy',
						'Balances Thyroid',
						'Tablets',
						'Weight Management',
						'Mood Improvement',
						'Improves Metabolism'
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
				{ id: 2, title: 'Anti-aging Peptides', icon: PeptidesIcon, preTitle: 'Explore AntI-aging Peptides' },
				{ id: 3, title: 'Medical Weight Loss', icon: WeightLossIcon, preTitle: 'See our medical weight loss options' },
				{ id: 4, title: 'Sexual Health', icon: HeartIcon, preTitle: 'Explore our sexual health Solutions' },
				{ id: 5, title: 'Thyroid', icon: ThyroidIcon, preTitle: 'Explore our Thyroid Solutions' },
			],
			products: [
				{
					id: 1,
					name: 'Oral Estradiol',
					description: 'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
					sort_description: 'Product Info',
					price: 94.99,
					category: { id: 1 },
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
					image: '/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
					images: [
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp',
						'/images/solution_media/women/hormone-therapy/oral-estradiol.webp'
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
