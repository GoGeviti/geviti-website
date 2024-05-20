import { HomeIcon } from '@/components/Icons/Landing';
import {
	BloodDropIcon,
	FileIcon,
	GraphWomenIcon,
	MemberIcon,
} from '@/components/Solutions/SolutionIcons';

import landingData from './landing';
import membershipData from './membership';
import productsData from './products';

const biomakersData = [
	{
		key: 'hormone_check_male',
		list: [
			{ title: 'Thyroid Stimulating Hormone (TSH) ', description: '' },
			{ title: 'Follicle Stimulating Hormone (FSH) ', description: '' },
			{ title: 'Estradiol (E2) ', description: '' },
			{ title: 'LH (Lutheinizing Hormone) ', description: '' },
			{ title: 'PRL (Prolactin) ', description: '' },
			{ title: 'A1C', description: '' },
			{ title: 'PSA (Prostate-specific Antigen) ', description: '' },
			{ title: 'Vitamin D', description: '' },
			{ title: 'Total Testosterone', description: '' },
			{ title: 'DHEA-S', description: '' },
			{ title: 'SHBG (Sex Hormone Binding Globulin) ', description: '' },
			{ title: 'Albumin', description: '' },
			{ title: 'Free Testosterone', description: '' },
			{ title: 'HCT (Hematocrit) ', description: '' },
		]
	},
	{
		key: 'hormone_check_female',
		list: [
			{ title: 'Thyroid Stimulating Hormone (TSH) ', description: '' },
			{ title: 'Follicle Stimulating Hormone (FSH) ', description: '' },
			{ title: 'Estradiol (E2) ', description: '' },
			{ title: 'LH (Lutheinizing Hormone) ', description: '' },
			{ title: 'Vitamin D', description: '' },
			{ title: 'SHBG (Sex Hormone Binding Globulin) ', description: '' },
			{ title: 'Progesterone', description: '' },
			{ title: 'Testosterone', description: '' },
		]
	},
	{
		key: 'cardiovascular_check',
		list: [
			{ title: 'Total Cholesterol', description: '' },
			{ title: 'High-Density Lipoprotein (HDL) Cholesterol', description: '' },
			{ title: 'Low-Density Lipoprotein (LDL) Cholesterol', description: '' },
			{ title: 'Triglycerides', description: '' },
			{ title: 'HbA1C (Haemoglobin A1c) ', description: '' },
			{ title: 'Apo-A1 (Apolipoprotein A1) ', description: '' },
			{ title: 'ApoB (Apolipoprotein B) ', description: '' },
			{ title: 'hsCRP (High-sensitivity C-reactive Protein) ', description: '' },
			{ title: 'HCY (Homocysteine) ', description: '' },
			{ title: 'LP(a) (Lipoprotein(a)) ', description: '' },
			{ title: 'APOB/APOA ratio', description: '' },
		]
	},
	{
		key: 'metabolic_check',
		list: [
			{ title: 'Total Cholesterol', description: '' },
			{ title: 'High-Density Lipoprotein (HDL) Cholesterol', description: '' },
			{ title: 'Low-Density Lipoprotein (LDL) Cholesterol', description: '' },
			{ title: 'Triglycerides', description: '' },
			{ title: 'HbA1C (Haemoglobin A1c) ', description: '' },
			{ title: 'AST (Aspartate Aminotransferase) ', description: '' },
			{ title: 'ALT (Alanine Aminotransferase) ', description: '' },
			{ title: 'Insulin', description: '' },
			{ title: 'B12', description: '' },
			{ title: 'Glucose', description: '' },
		]
	}
]

const solutionData = {
	hero: {
		men: {
			preTitle: 'mens health and wellness solutions',
			title: 'Live optimized with <br class="lg:hidden"/><span>Geviti</span><span class="lg:hidden">.</span>',
			titles: ['Live optimized with'],
			titlesMobile: ['Live optimized with'],
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
			title: 'Live optimized with <br class="lg:hidden"/><span>Geviti</span><span class="lg:hidden">.</span>',
			titles: ['Live optimized with'],
			titlesMobile: ['Live optimized with'],
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
			'Membership journey starts with choosing a full bloodwork panel. We’ll draw your blood from the comfort of your home.',
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
				preTitle: 'Testosterone deficiencies are common',
				title: '1 in 4 men over age 30 have low T.',
				description:
					'It’s a misconception that your testosterone only drops in your older years. Geviti offers the ultimate solution for health and wellness to help keep your hormones in the optimal range.',
				image: '/images/solution_media/compressed/wellnesspro-men-1.webp',
				imageMobile: '/images/solution_media/compressed/wellnesspro-men-1-mobile.webp',
				count: 20,
				suffix: 'million',
				imageHeading: 'Men In the united states',
				imageSubheading: 'from ages 25-75 have low T',
			},
			{
				preTitle: 'Glp-1’s effectively aid in weight loss',
				title: 'We have a weight problem.',
				description:
					'You don’t have to fight obesity alone. Through the advancement of weight loss peptides, like Semaglutide, weight management is becoming more easily achievable.',
				image: '/images/solution_media/compressed/wellnesspro-men-2.webp',
				imageMobile: '/images/solution_media/compressed/wellnesspro-men-2-mobile.webp',
				count: 69,
				suffix: '%',
				imageHeading: 'Of Adults in the united states',
				imageSubheading: 'are obese or overweight',
			},
		],
		women: [
			{
				preTitle: 'Maintaining A healthy weight is vital',
				title: 'We have a weight problem.',
				description:
					'4 in every 10 women have a Body Mass Index greater than 30, classifying theme as obese. Obesity comes with an increased risk for diabetes, heart disease, and some cancers.',
				image: '/images/solution_media/compressed/wellnesspro-women-1.webp',
				imageMobile: '/images/solution_media/compressed/wellnesspro-women-1-mobile.webp',
				count: 40,
				suffix: '%',
				imageHeading: 'Of women in <span class="text-white">America</span>',
				imageSubheading: 'Struggle with obesity',
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
				imageHeading: 'Of women in America',
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
	biomarkers: {
		title: 'View the full list of biomarkers',
		expandText: 'Click to expand',
		options: [
			{
				title: 'Finger Prick',
				value: 'finger_prick',
				tabs: [
					{
						label: 'Hormone Check',
						value: 'hormone_check',
						gender: 'men',
						list: biomakersData.find(el => el.key === 'hormone_check_male')?.list ?? []
					},
					{
						label: 'Cardiovascular Check',
						value: 'cardiovascular_check',
						gender: 'men',
						list: biomakersData.find(el => el.key === 'cardiovascular_check')?.list ?? []
					},
					{
						label: 'Metabolic Check',
						value: 'metabolic_check',
						gender: 'men',
						list: biomakersData.find(el => el.key === 'metabolic_check')?.list ?? []
					},
					{
						label: 'Hormone Check',
						value: 'hormone_check',
						gender: 'women',
						list: biomakersData.find(el => el.key === 'hormone_check_female')?.list ?? []
					},
					{
						label: 'Cardiovascular Check',
						value: 'cardiovascular_check',
						gender: 'women',
						list: biomakersData.find(el => el.key === 'cardiovascular_check')?.list ?? []
					},
					{
						label: 'Metabolic Check',
						value: 'metabolic_check',
						gender: 'women',
						list: biomakersData.find(el => el.key === 'metabolic_check')?.list ?? []
					},
				]
			},
			{
				title: 'Phlebotomy',
				value: 'phlebotomy',
				tabs: [
					{
						label: 'Essential Health Check',
						value: 'essential_health_check',
						gender: 'men',
						list: membershipData.biomarkers.data.find(el => el.key === 'essential')?.list ?? []
					},
					{
						label: 'Comprehensive Health Dive',
						value: 'comprehensive_health_dive',
						gender: 'men',
						list: membershipData.biomarkers.data.find(el => el.key === 'comprehensive')?.list ?? []
					},
					{
						label: 'Ultimate Health Assessment',
						value: 'ultimate_health_assessment',
						gender: 'men',
						list: membershipData.biomarkers.data.find(el => el.key === 'ultimateMale')?.list ?? []
					},
					{
						label: 'Ultimate Health Assessment',
						value: 'ultimate_health_assessment',
						gender: 'women',
						list: membershipData.biomarkers.data.find(el => el.key === 'ultimateFemale')?.list ?? []
					},
					{
						label: 'Essential Health Check',
						value: 'essential_health_check',
						gender: 'women',
						list: membershipData.biomarkers.data.find(el => el.key === 'essential')?.list ?? []
					},
					{
						label: 'Comprehensive Health Dive',
						value: 'comprehensive_health_dive',
						gender: 'women',
						list: membershipData.biomarkers.data.find(el => el.key === 'comprehensive')?.list ?? []
					},
				]
			}
		],
	},
	treatmentOptions: {
		men: {
			preTitle: 'Easy online care',
			title: 'Treatment options for male optimization',
			btnCta: {
				href: '/onboarding',
				text: 'Get Started'
			},
			...productsData.men
		},
		women: {
			preTitle: 'Easy online care',
			title: 'Treatment options for female optimization',
			btnCta: {
				href: '/onboarding',
				text: 'Get Started'
			},
			...productsData.women
		},
	}
};

export default solutionData;
