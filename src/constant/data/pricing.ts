import { InitialOfferingType } from '@/components/Checkout/api/types';

const pricingData = {
	hero: {
		preTitle: 'Care based off of biomarkers',
		title: 'Build a healthier future, today.',
		description:
      'Every user starts with an at-home full panel to establish baselines. For paid memberships, the bloodwork cost is a one time fee. Labs are done at no added cost every 6 months.',
		features: [
			'Start with at-home bloodwork panel',
			'Get free at-home labs every 6 months',
			'Preventative and primary care, in-app',
			'Custom supplements and Rx, delivered',
		],
		pricingOptions: [
			{
				title: 'Quarterly',
				value: 'quarterly',
				s: '17% off',
				price: '99.95',
			},
			{
				title: 'Monthly',
				value: 'monthly',
				price: '297.99',
			},
		],
		banner: {
			caption: {
				text: 'HSA/FSA',
				textSuffix: 'ACCEPTED',
			},
			preTitle: 'Longeviti made simple',
			title: 'Data Driven<br />Personalized Wellness',
			image: '/images/pricing/phone-mockup.webp',
		},
		list: [
			{
				name: 'Free Membership',
				keyword: InitialOfferingType.ESSENTIALS,
				price: '$0',
				priceMonthly: '$0',
				priceDiscount: '',
				priceNote: 'usd/mo',
				biomakers: '70+',
				mostPopular: false,
				mostValue: false,
				monthly: '+ $450',
				quarterly: '+ $450',
				btnCta: {
					href: '/onboarding',
					text: 'Select Option',
				},
				listTitle: 'The Free Plan includes access to:',
				list: [
					{
						title: 'Telehealth visit to review labs',
						description: '',
					},
					{
						title: 'Plan & detailed workup',
						description: '',
					},
					{
						title: 'Custom daily supplement packs',
						description: '',
					},
					{
						title: 'Additional at-home testing options',
						description: '',
					},
					{
						title: 'Wearables integration and tracking',
						description: '',
					},
					{
						title: 'Personalized care plan from results',
						description: '',
					},
					{
						title: 'Bloodwork result tracking in-app',
						description: '',
					},
				],
			},
			// {
			// 	name: 'Basic Membership',
			// 	keyword: InitialOfferingType.COMPREHENSIVE,
			// 	price: '$69',
			// 	priceMonthly: '$85',
			// 	priceDiscount: '$89',
			// 	priceNote: 'usd/mo',
			// 	biomakers: '70+',
			// 	mostPopular: true,
			// 	mostValue: false,
			// 	monthly: '$350',
			// 	quarterly: '$350',
			// 	btnCta: {
			// 		href: '/onboarding',
			// 		text: 'Select Option',
			// 	},
			// 	listTitle: 'Everything in the Free Plan, plus:',
			// 	list: [
			// 		{
			// 			title: '30% off tailored supplement packs ',
			// 			description:
			//         '',
			// 		},
			// 		{
			// 			title: 'Discounted additional testing options ',
			// 			description: '',
			// 		},
			// 		{
			// 			title: 'Free at-home semi-annual bloodwork',
			// 			description: '',
			// 		},
			// 		{
			// 			title: 'Dedicated health coach',
			// 			description: '',
			// 		},
			// 		{
			// 			title: 'Unlimited health coach messaging',
			// 			description: '',
			// 		},
			// 	],
			// },
			{
				name: 'Premium Membership',
				keyword: InitialOfferingType.ULTIMATE,
				price: '$99',
				priceMonthly: '$119',
				priceDiscount: '$119',
				priceNote: 'usd/mo',
				biomakers: '70+',
				mostPopular: false,
				mostValue: true,
				monthly: '+ $300',
				quarterly: '+ $300',
				btnCta: {
					href: '/onboarding',
					text: 'Get first month free',
				},
				listTitle: 'Everything in the Free Plan, plus:',
				list: [
					{
						title: '50% off tailored supplement packs',
						description: '',
					},
					{
						title: 'Wholesale cost additional testing options',
						description: '',
					},
					{
						title: 'Functional medical practitioner access',
						description: '',
					},
					{
						title: 'Exclusive pharmacy pricing',
						description: '',
					},
					{
						title: 'Prescription delivered at-home',
						description: '',
					},
					{
						title: 'Practitioner visits in-app',
						description: '',
					},
					{
						title: 'Free at-home semi-annual bloodwork',
						description: '',
					},
					{
						title: 'Dedicated health coach',
						description: '',
					},
					{
						title: 'Unlimited health coach messaging',
						description: '',
					},
				],
			},
		],
	},
	pricingComparison: {
		title: 'Price comparisons',
		headers: [
			{
				id: 'free',
				title: 'Free Plan Pricing',
				subtitle: '$99.99/mo',
				geviti: false,
			},
			{
				id: 'basic',
				title: 'Basic Plan Pricing',
				subtitle: '$129.00/mo',
				geviti: false,
			},
			{
				id: 'premium',
				title: 'Premium Plan Pricing',
				subtitle: '$362.00/mo',
				geviti: true,
			},
		],
		list: [
			{
				name: 'Longevity Panel (70 biomarkers)',
				geviti: true,
				free: '$450',
				basic: '$350',
				premium: '$300',
			},
			{
				name: 'Longevity Panel (+20 biomarker add-on)',
				geviti: true,
				free: '$535',
				basic: '$435',
				premium: '$385',
			},
			{
				name: 'Biological Age Test Kit',
				geviti: true,
				free: '$350',
				basic: '$300',
				premium: '$250',
			},
			{
				name: 'Hormone Finger Prick Test Kit',
				geviti: true,
				free: '$150',
				basic: '$125',
				premium: '$100',
			},
			{
				name: 'Cardiovascular Finger Prick Test Kit',
				geviti: true,
				free: '$150',
				basic: '$125',
				premium: '$100',
			},
			{
				name: 'Metabolic Health Finger Prick Test Kit',
				geviti: true,
				free: '$150',
				basic: '$125',
				premium: '$100',
			},
			{
				name: 'Tailored Supplement Packs',
				geviti: true,
				free: '30% off',
				basic: '30% off',
				premium: '50% off',
			},
		],
	},
	faq: {
		data: [
			{
				title: 'In which states is Geviti available?',
				content:
          'Geviti currently offers services in eleven states: Arizona (AZ), California (CA), Colorado (CO), Utah (UT), Washington (WA), Texas (TX), Florida (FL), Georgia (GA), Kansas (KS), Oregon (OR), New Mexico (NM), and Missouri (MO). We are actively expanding to include more states across the country.',
			},
			{
				title:
          'What free at-home bloodwork option is included for me twice a year with my membership?',
				content:
          'As part of your membership, you receive the "Essentials Diagnostic" twice each year. This foundational evaluation provides key insights into your health metrics. For a more detailed analysis, you have the option to upgrade to our comprehensive or ultimate diagnostic tiers at any time.',
			},
			{
				title: 'What is the membership cancellation and refund policy?',
				content:
          'You can easily cancel your Geviti membership at any time through your personal dashboard. Given the personalized nature of our services, refunds are not automatically granted but are considered on a case-by-case basis. If you have specific circumstances or need further assistance, please contact our support team for detailed guidance.',
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
          'We require all new members to purchase a diagnostic package as part of our initial assessment process. This ensures that we have the most recent and relevant data to provide personalized care. However, if you have recent lab results, please reach out to our support team. We may be able to adjust your initial requirements based on the specifics of your situation.',
			},
			{
				title: 'Does a blood panel guarantee access to specific treatments?',
				content:
          'Purchasing a diagnostic package does not guarantee that you will receive any specific prescription treatment. The determination of appropriate treatments is solely at the discretion of your healthcare provider, based on a comprehensive evaluation of your test results and overall health profile.',
			},
		],
	},
	banner: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
      'Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.',
		image: '/images/pricing/banner.jpeg',
		imageMobile: '/images/pricing/banner.jpeg',
		btnCta: {
			href: '#packages',
			externalLink: false,
			text: 'Learn More',
		},
	},
};

export default pricingData;
