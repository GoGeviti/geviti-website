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
				name: 'Premium Membership',
				stripeProductId: 'prod_QgoGvBsYKsIYqO',
				keyword: InitialOfferingType.ULTIMATE,
				price: '$99',
				priceMonthly: '$119',
				priceDiscount: '$119',
				priceNote: 'usd/mo',
				biomakers: '90+',
				mostPopular: false,
				mostValue: true,
				monthly: '+ $300',
				quarterly: '+ $300',
				btnCta: {
					href: '/onboarding/payment',
					text: 'Get started',
				},
				listTitle: 'Your membership includes access to:',
				list: [
					{
						title: 'Free at-home bloodwork twice per year',
						description: '',
					},
					{
						title: 'Online provider visits to review labs',
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
					{
						title: 'Daily supplement packs (no markups)',
						description: '',
					},
					{
						title: 'Wholesale cost for additional testing',
						description: '',
					},
					{
						title: 'Access to functional medicine providers',
						description: '',
					},
					{
						title: 'Exclusive pharmacy pricing (no markups)',
						description: '',
					},
					{
						title: 'Prescriptions delivered to your door',
						description: '',
					},
					{
						title: 'Easy access to prescriptions',
						description: '',
					},
					{
						title: 'Quarterly practitioner visits via the app',
						description: '',
					},
					{
						title: 'Dedicated wellness professional',
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
				id: 'premium',
				title: 'Premium Plan Pricing',
				subtitle: '$362.00/mo',
				geviti: true,
			},
		],
		list: [
			{
				name: 'Tailored Supplement Packs',
				geviti: true,
				premium: 'No markups',
			},
			{
				name: 'Prescription Therapeutics ',
				geviti: true,
				premium: 'No markups',
			},
			{
				name: 'Longevity Panel (90 biomarkers)',
				geviti: true,
				premium: '$300',
			},
			{
				name: 'Biological Age Test Kit',
				geviti: true,
				premium: '$250',
			},
			{
				name: 'Hormone Health Finger Prick Test Kit',
				geviti: true,
				premium: '$100',
			},
			{
				name: 'Cardiovascular Health Finger Prick Test Kit',
				geviti: true,
				premium: '$100',
			},
			{
				name: 'Metabolic Health Finger Prick Test Kit',
				geviti: true,
				premium: '$100',
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
