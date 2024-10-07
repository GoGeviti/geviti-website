import { InitialOfferingType } from '@/components/Checkout/api/types';
import {
	CrossRed,
	DollarCircle,
	DoubleDollarCircle,
	FemaleIcon,
	GreenCheck,
	MaleIcon,
	Verify,
} from '@/components/Icons';
import {
	DNAIcon,
	DropIcon,
	FavFolder,
	Graph,
	HeartbeatIcon,
	MedicalDocIcon,
	MonitoringIcon,
	PillIcon,
	UserTag,
} from '@/components/Icons/Landing';

import biomarkersData from './biomarkers';

const membershipData = {
	hero: {
		preTitle:
      'all you need <span class="max-sm:hidden ">in one </span>membership',
		title: 'Unlock premier health with exclusive membership benefits',
		titles: ['Unlock premier health with', 'exclusive membership benefits'],
		description:
      'A Geviti membership makes longevity easy and accessible with our wide range of at-home diagnostics, innovative anti-aging therapies, and a dedicated qualified care team.',
		titlesMobile: [
			'Unlock premier health',
			'with exclusive',
			'membership benefits',
		],
		image: '/images/membership/compressed/hero.webp',
		imageMobile: '/images/membership/compressed/hero_mobile.webp',
		btnCta: {
			text: 'Join Geviti',
			href: '/pricing',
			externalLink: false,
		},
		btnCta2: {
			href: '#packages',
			externalLink: false,
			text: '<span class="lg:hidden">Learn More</span><span class="max-lg:hidden">View Packages</span>',
		},
		mainKeys: [
			{
				icon: MonitoringIcon,
				text: 'Hormone optimization<br />Made simple',
			},
			{
				icon: DNAIcon,
				text: 'At-home diagnostics<br />Blood and DNA',
			},
			{
				icon: MedicalDocIcon,
				text: 'Data-driven protocols<br />No guesswork',
			},
			{
				icon: PillIcon,
				text: 'Tailor-made supplements<br />Custom to you',
			},
			{
				icon: HeartbeatIcon,
				text: 'Anti-aging peptides<br />Highly effective',
			},
		],
	},
	biomarkers: {
		title: 'Compare Tested Biomarkers',
		expandText: 'Click to expand',
		tabs: [
			{
				title: 'Longeviti Panel',
				key: {
					male: 'longeviti_panel_male',
					female: 'longeviti_panel_female',
				},
			},
		],
		genderOptions: [
			{
				title: 'Male Biomarkers',
				shortLabel: 'Male',
				icon: MaleIcon,
				value: 'male',
			},
			{
				title: 'Female Biomarkers',
				shortLabel: 'Female',
				icon: FemaleIcon,
				value: 'female',
			},
		],
		data: biomarkersData.data,
	},
	chooseGevity: {
		preTitle: 'Tailor-made longevity',
		title: 'Why Choose Geviti?',
		image: '/images/membership/compressed/oral.webp',
		btnCta: {
			href: '/pricing',
			text: 'Get Started',
		},
		btnCta2: {
			href: '/products',
			text: 'See Products',
		},
		list: [
			'Testing and diagnostics from the comfort of your own home.',
			'Cutting edge health care available at your fingertips.',
			'Streamlined processes that eliminate traditional pain points.',
			'Comprehensive health/human optimization made simple.',
		],
	},
	steps: {
		preTitle: 'become a member',
		title:
      'Start your health journey <span class="max-lg:hidden"/>with a full blood panel</span>',
		description:
      'Your journey starts with our \'Longevity Panel,\' testing 70+ biomarkers at-home by a qualified clinician.',
		list: [
			{
				id: 'step-1',
				title:
          'Complete your at-home blood <br class="max-lg:hidden" />draw with our mobile <br class="max-lg:hidden" />phlebotomy team',
				icon: UserTag,
			},
			{
				id: 'step-2',
				title:
          'Review results and a tailored <br class="max-lg:hidden" />plan with your designated care <br class="max-lg:hidden" />team',
				icon: DropIcon,
				iconMobile: DropIcon,
			},
			{
				id: 'step-3',
				title:
          'Receive your supplements <br class="max-lg:hidden" />and Rx directly at your <br class="max-lg:hidden" />doorstep',
				icon: FavFolder,
			},
			{
				id: 'step-4',
				title:
          'Track your progress & <br class="max-lg:hidden" />continue to optimize <br class="max-lg:hidden" />health',
				icon: Graph,
			},
		],
	},
	slider: {
		list: [
			{
				preTitle: 'Data-driven health and wellness, made simple.',
				title:
          'The ultimate wellness <br class="sm:hidden"/>membership for as low as <br class="sm:hidden"/>$99 per month.',
				description:
          'Geviti transcends the usual health and wellness offerings, providing unparalleled value at a lower cost. Our mission is to make longevity-focused care exceptionally accessible.',
				list: [
					'Geviti Platform Access',
					'Mobile App Integration',
					'Smart Wearables Integration',
					'Biannual At-home Full Panels',
					'Doctor-Monitored Therapeutics',
					'Tailored Smart Supplements',
					'Custom Longevity Protocols',
					'Certified Personal Health Coach',
					'Wholesale At-home Diagnostics',
				],
				image: '/images/membership/compressed/slider-1.webp',
			},
			{
				preTitle: 'Data-driven health and wellness, made simple.',
				title: 'Doctor  monitored cutting edge care',
				description:
          'Geviti offers a comprehensive care team for our clients. Instead of having to choose between a healthcare provider and a health coach, Geviti provides a solution where the two collaborate to create the ultimate longevity regimen.',
				list: [],
				image: '/images/membership/compressed/slider-2.webp',
				btnCta: {
					href: '/pricing',
					text: 'Join Geviti',
				},
			},
			{
				preTitle: 'Data-driven health and wellness, made simple.',
				title: 'A complete wellness team in your pocket',
				description: ' ',
				list: [
					'Hormone Therapy',
					'Anti-aging Peptides',
					'Medical Weight Loss',
					'Sexual Health Medication',
					'Nootropics and Brain Health',
					'And More.',
				],
				image: '/images/membership/compressed/slider-3.webp',
				btnCta: {
					href: '/pricing',
					text: 'Join Geviti',
				},
			},
			{
				preTitle: 'Data-driven health and wellness, made simple.',
				title: 'Biannual At-Home Full Panels ',
				description:
          'Americans may go several years without getting their bloodwork done. This can be the difference between life and death. Geviti makes bloodwork easy with our nationwide team of phlebotomists Every 6 months, we’ll come to you and perform a full panel.',
				list: [],
				image: '/images/membership/compressed/slider-4.webp',
				btnCta: {
					href: '/pricing',
					text: 'Join Geviti',
				},
			},
		],
	},
	pricing: {
		preTitle: 'Care based off of biomarkers',
		title: 'Start by establishing baselines',
		description:
      'Every user starts with an at-home full panel establish baselines. This package includes one month for free. Memberships can be billed monthly or quarterly.',
		pricingOptions: [
			{
				title: 'Quarterly',
				value: 'quarterly',
				s: '13% off',
				price: '99.95',
			},
			{
				title: 'Monthly',
				value: 'monthly',
				price: '297.99',
			},
		],
		list: [
			{
				name: 'Essentials Diagnostic',
				keyword: InitialOfferingType.ESSENTIALS,
				price: '$299',
				priceMonthly: '$299',
				priceNote: 'one time payment',
				priceDescGeneral:
          '<span class="lg:hidden">+$99/m billed quarterly</span><span class="max-lg:hidden">+$198 initially, then $297 quarterly</span>',
				biomakers: '67+',
				mostPopular: false,
				monthly: '+ $119 monthly',
				quarterly: '+ $99 per month billed quarterly',
				btnCta: {
					href: '/pricing',
					text: 'Select Option',
				},
				list: [
					{
						title: 'At-home phlebotomy blood draw',
						description:
              'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.',
					},
					{
						title: 'Full biomarker results report',
						description: '',
					},
					{
						title: 'Smart supplement recommendation',
						description: '',
					},
					{
						title: 'Bloodwork results telehealth review',
						description: '',
					},
					{
						title: 'First month of membership included',
						description: '',
					},
				],
			},
			{
				name: 'Comprehensive Diagnostic',
				keyword: InitialOfferingType.COMPREHENSIVE,
				price: '$469',
				priceMonthly: '$469',
				priceNote: 'one time payment',
				priceDescGeneral:
          '<span class="lg:hidden">+ $297 quarterly</span><span class="max-lg:hidden">+$198 initially, then $297 quarterly</span>',
				biomakers: '78+',
				mostPopular: true,
				monthly: '+ $119 monthly',
				quarterly: '+ $99 per month billed quarterly',
				btnCta: {
					href: '/pricing',
					text: 'Select Option',
				},
				list: [
					{
						title: 'At-home phlebotomy blood draw',
						description:
              'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.',
					},
					{
						title: 'Full biomarker results report',
						description: '',
					},
					{
						title: 'Smart supplement recommendation',
						description: '',
					},
					{
						title: 'Bloodwork results telehealth review',
						description: '',
					},
					{
						title: 'First month of membership included',
						description: '',
					},
				],
			},
			{
				name: 'Ultimate Diagnostic',
				keyword: InitialOfferingType.ULTIMATE,
				price: '$599',
				priceMonthly: '$599',
				priceNote: 'one time payment',
				priceDescGeneral:
          '<span class="lg:hidden">+ $297 quarterly</span><span class="max-lg:hidden">+$198 initially, then $297 quarterly</span>',
				biomakers: '85+',
				mostPopular: false,
				monthly: '+ $119 monthly',
				quarterly: '+ $99 per month billed quarterly',
				btnCta: {
					href: '/pricing',
					text: 'Select Option',
				},
				list: [
					{
						title: 'At-home phlebotomy blood draw',
						description:
              'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.',
					},
					{
						title: 'Full biomarker results report',
						description: '',
					},
					{
						title: 'Smart supplement recommendation',
						description: '',
					},
					{
						title: 'Bloodwork results telehealth review',
						description: '',
					},
					{
						title: 'First month of membership included',
						description: '',
					},
				],
			},
		],
		features: [
			'At-home phlebotomy blood draw',
			'Full biomarker results report',
			'Smart supplement recommendation',
			'Bloodwork results telehealth review',
			'First month of membership included',
		],
		extended: {
			btn: {
				text: 'Geviti vs. competitors',
				textMobile: 'Geviti vs. our competitors',
			},
			preTitle: 'Care based off of biomarkers',
			title: 'More, for less.',
			list: [
				{
					name: 'Geviti',
					priceTitle: 'Membership cost as low as',
					price: '$99',
					priceNote: 'per month',
					geviti: true,
					list: [
						{
							title: 'Free telehealth consults',
							icon: GreenCheck,
						},
						{
							title: 'Designated certified health coach',
							icon: GreenCheck,
						},
						{
							title: 'At-home bloodwork',
							icon: GreenCheck,
						},
						{
							title: 'Free semi-annual bloodwork',
							icon: GreenCheck,
						},
						{
							title: 'Affordable treatments',
							icon: GreenCheck,
						},
						{
							title: 'Included medical supplies',
							icon: GreenCheck,
						},
						{
							title: 'Custom Smart Supplements',
							icon: GreenCheck,
						},
						{
							title: 'Everything direct to your door',
							icon: GreenCheck,
						},
						{
							title: 'Wholesale cost additional testing',
							icon: GreenCheck,
						},
						{
							title: 'Wholesale cost supplements',
							icon: GreenCheck,
						},
						{
							title: 'DNA and bloodwork options',
							icon: GreenCheck,
						},
						{
							title: 'Data-driven tech platform',
							icon: GreenCheck,
						},
						{
							title: 'Integrated mobile app',
							icon: GreenCheck,
						},
					],
				},
				{
					name: 'Others',
					priceTitle: 'Membership cost',
					price: '$130+',
					priceNote: 'per month',
					geviti: false,
					list: [
						{
							title: 'Free telehealth consults',
							icon: DollarCircle,
						},
						{
							title: 'Designated certified health coach',
							icon: CrossRed,
						},
						{
							title: 'At-home bloodwork',
							icon: CrossRed,
						},
						{
							title: 'Free semi-annual bloodwork',
							icon: DollarCircle,
						},
						{
							title: 'Affordable treatments',
							icon: DoubleDollarCircle,
						},
						{
							title: 'Included medical supplies',
							icon: DollarCircle,
						},
						{
							title: 'Custom Smart Supplements',
							icon: CrossRed,
						},
						{
							title: 'Everything direct to your door',
							icon: CrossRed,
						},
						{
							title: 'Wholesale cost additional testing',
							icon: DoubleDollarCircle,
						},
						{
							title: 'Wholesale cost supplements',
							icon: DollarCircle,
						},
						{
							title: 'DNA and bloodwork options',
							icon: CrossRed,
						},
						{
							title: 'Data-driven tech platform',
							icon: CrossRed,
						},
						{
							title: 'Integrated mobile app',
							icon: CrossRed,
						},
					],
				},
			],
		},
	},
	pricingComparison: {
		title: 'More, for less with Geviti',
		description:
      'As a Geviti member, you have access to all the best tools for longevity, at an industry-leading price.',
		headers: [
			{
				id: 'geviti',
				title: 'Geviti',
				subtitle: '$129.00/mo',
				geviti: true,
			},
			{
				id: 'competitor_a',
				title: 'Competitor A',
				subtitle: '$149.00/mo',
				geviti: false,
			},
			{
				id: 'competitor_b',
				title: 'Competitor B',
				subtitle: '$362.00/mo',
				geviti: false,
			},
			{
				id: 'competitor_c',
				title: 'Competitor C',
				subtitle: 'Membership N/A',
				geviti: false,
			},
		],
		list: [
			{
				name: 'Dedicated health coach',
				geviti: true,
				competitor_a: true,
				competitor_b: true,
				competitor_c: false,
			},
			{
				name: 'Medical practitioner care',
				geviti: true,
				competitor_a: true,
				competitor_b: true,
				competitor_c: true,
			},
			{
				name: 'HRT and other Rx treatments',
				geviti: true,
				competitor_a: true,
				competitor_b: false,
				competitor_c: true,
			},
			{
				name: 'At-home bloodwork',
				geviti: true,
				competitor_a: true,
				competitor_b: true,
				competitor_c: true,
			},
			{
				name: 'Health tracking dashboard',
				geviti: true,
				competitor_a: true,
				competitor_b: false,
				competitor_c: false,
			},
			{
				name: 'Various testing options',
				geviti: true,
				competitor_a: true,
				competitor_b: true,
				competitor_c: false,
			},
			{
				name: 'Free bloodwork twice yearly',
				geviti: true,
				competitor_a: true,
				competitor_b: true,
				competitor_c: false,
			},
			{
				name: 'Tailored supplements packs',
				geviti: true,
				competitor_a: false,
				competitor_b: false,
				competitor_c: true,
			},
			{
				name: 'Discounted Rx pricing',
				geviti: true,
				competitor_a: false,
				competitor_b: false,
				competitor_c: false,
			},
			{
				name: 'Mobile application for care',
				geviti: true,
				competitor_a: false,
				competitor_b: false,
				competitor_c: false,
			},
		],
	},
	faq: {
		data: [
			{
				title: 'In which states is Geviti available?',
				content:
          'Geviti currently offers services in seventeen states: Arizona (AZ), California (CA), Colorado (CO), Florida (FL), Georgia (GA), Illinois (IL), Indiana (IN), Kansas (KS), Missouri (MO), New Mexico (NM), Nevada (NV), Oregon (OR), Tennessee (TN), Texas (TX), Utah (UT), Virginia (VA), Washington (WA). We are actively expanding to include more states across the country.',
			},
			{
				title: 'How do I get started?',
				content:
          'Click any of the \'Get Started\' buttons to become a Geviti member by selecting your membership frequency. You\'ll be prompted to schedule an at-home bloodwork exam, and from there, we\'ll communicate with you through our mobile application.',
			},
			{
				title:
          'What free at-home bloodwork option is included for me twice a year with my membership?',
				content:
          'As part of your membership, you receive the \'Longeviti Panel\' testing twice a year. This extensive evaluation offers valuable insights into over 90 biomarkers. If you were to pay out of pocket at Labcorp or Quest, this test could cost over $2,000.',
			},
			{
				title: 'What is the membership cancellation and refund policy?',
				content:
          'You can cancel your Geviti membership at any time through your personal dashboard. Please note, if you’re on a monthly plan and cancel within the first 60 days, a $150 cancellation fee will apply. This does not apply to quarterly. Due to the personalized nature of our services, refunds are not automatically provided but may be considered on a case-by-case basis. If you have specific circumstances or require additional assistance, please contact our support team for further guidance.',
			},
			{
				title:
          'Are the cost of supplements or prescriptions included in the membership fee?',
				content:
          'The membership fee provides access to our range of supplements and prescription services; however, the costs for these items are not included in the fee. Each supplement or prescription is priced separately, allowing you to choose exactly what fits your needs and budget.',
			},
			{
				title:
          'What if I have recently done labs? Do I still need to purchase a diagnostic package?',
				content:
          'Every membership includes an at-home blood draw as part of our initial assessment process, ensuring we have the most recent and relevant data to provide personalized care. If you have recent lab results and prefer not to undergo another panel, please reach out to our support team. We may be able to adjust your initial requirements based on your specific situation.',
			},
			{
				title: 'Does a blood panel guarantee access to specific treatments?',
				content:
          'Becoming a Geviti member does not guarantee that you will receive any specific prescription treatment. The decision on appropriate treatments is solely at the discretion of your healthcare provider, based on a thorough evaluation of your test results and overall health profile.',
			},
		],
	},
	products: {
		title: 'Discover Geviti',
		description: 'Browse our wide range of products!',
	},
	banner: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
      'Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.',
		image: '/images/membership/compressed/banner-member.webp',
		imageMobile: '/images/membership/compressed/banner-member-mobile.webp',
		btnCta: {
			href: '/pricing',
			externalLink: false,
			text: 'Start Now',
		},
	},
	features: [
		{
			id: 1,
			preTitle: 'Data-driven health and wellness, made simple.',
			title:
        'The ultimate wellness platform.<br class="sm:hidden"/> Look better. Feel better. Live Longer.',
			description:
        'Geviti transcends the usual health and wellness offerings, providing unparalleled value at a lower cost. Our mission is to make longevity-focused care exceptionally accessible.',
			image: null,
			main: true,
			list: {
				listStyleType: 'none',
				icon: Verify,
				items: [
					'Advanced Health Dashboard',
					'Mobile Application Access',
					'Custom Longevity Care Plans',
					'convenient at-home testing ',
					'Certified Personal Health Coach',
					'Doctor Monitored Prescriptions',
					'Free Biannual At-home Labs',
					'Wearable Device Integration',
					'Tailored Supplements Packs',
				],
			},
		},
		{
			id: 2,
			preTitle: 'Data-driven health and wellness, made simple.',
			title: 'A complete wellness team in <br class="sm:hidden"/>your pocket',
			description:
        'Geviti offers a comprehensive care team for our clients. Instead of having to choose between a healthcare provider and a health coach, Geviti provides a solution where the two collaborate to create the ultimate longevity regimen.',
			image: '/images/membership/compressed/features-states.webp',
			main: false,
			list: null,
		},
		{
			id: 3,
			preTitle: 'Data-driven health and wellness, made simple.',
			title: 'Doctor  monitored cutting <br class="sm:hidden"/>edge care',
			description: '',
			image: '/images/membership/compressed/features-products.webp',
			main: false,
			list: {
				listStyleType: 'disc',
				icon: null,
				items: [
					'Hormone Therapy',
					'Anti-aging Peptides',
					'Medical Weight Loss',
					'Sexual Health',
					'Nootropics',
					'And More.',
				],
			},
		},
		{
			id: 4,
			preTitle: 'Data-driven health and wellness, made simple.',
			title: 'Biannual At-Home Full Panels',
			description:
        'Many Americans neglect essential bloodwork for years, putting their health and wellness at risk. Geviti simplifies this critical process with our nationwide team of phlebotomists, making it convenient for you to stay on top of your health.<br/><br/>Every 6 months, we’ll come to you and perform a full panel at no additional cost.',
			image: '/images/membership/compressed/features-apps.webp',
			main: false,
			list: null,
		},
	],
};

export default membershipData;
