import { InitialOfferingType } from '@/components/Checkout/api/types';

const pricingData = {
	hero: {
		preTitle: 'Care based off of biomarkers',
		title: 'Build a healthier future, today.',
		description:
      'Our membership connects you with health experts, offering data-driven care plans, doctor-monitored treatments, routine labs, custom supplements, and more.',
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
				s: '13% off',
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
			title: 'Data Driven Personalized Wellness',
			image: '/images/pricing/phone-mockup.webp',
		},
		list: [
			{
				name: 'Premium Membership',
				// stripeProductId: 'prod_QgoGvBsYKsIYqO',
				stripeProductId: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_ID ?? '',
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
						title: 'Free routine labs at-home',
						description: 'Routine bloodwork is everything. We’ll send a licensed phlebotomist to you for an at-home or in-office blood draw twice a year, looking at over 90 different biomarkers.',
					},
					{
						title: 'Personalized care plans ',
						description: 'Fully customized plan tailored to your goals, including personalized supplements, doctor-monitored medications, metabolic health coaching, and actionable insights based on your data.  ',
					},
					{
						title: 'Wholesale pricing ',
						description: 'Access compounded medications, supplements, and testing at wholesale prices. Save money while receiving premium, medically guided health solutions for your wellness journey.',
					},
					{
						title: 'Custom supplements ',
						description: 'Get science-backed supplements tailored to your unique needs. Based on your bloodwork, these blends ensure you get exactly what your body needs for optimal health and performance.',
					},
					{
						title: 'Doctor monitored treatments',
						description: 'Treatments are overseen by licensed medical providers who monitor progress and adjust plans as needed, ensuring your journey is safe, effective, and aligned with your health goals.',
					},
					{
						title: 'Specialty testing options',
						description: 'From gut health and micronutrient testing, uncover deeper insights into your health. Our specialized tests provide data-driven solutions for a comprehensive wellness strategy.',
					},
					{
						title: 'Dedicated wellness specialists',
						description: 'Stay supported with direct access to a personal wellness specialist. Get guidance, answers, and accountability to keep your health journey on track every step of the way.',
					},
					{
						title: 'Mobile application',
						description: 'Track your health, schedule bloodwork, manage prescriptions, and access your care plan—all from a user-friendly app designed to make proactive care simple and convenient.',
					},
					{
						title: 'AI health companion',
						description: 'Leverage cutting-edge AI to track your progress, analyze your data, and provide actionable insights, keeping your health goals within reach with personalized, real-time support.',
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
				title: 'Longeviti Plan Pricing',
				subtitle: '$362.00/mo',
				geviti: true,
			},
		],
		list: [
			{
				name: 'Tailored Supplement Packs',
				geviti: true,
				premium: 'Wholesale',
			},
			{
				name: 'Prescription Therapeutics ',
				geviti: true,
				premium: 'Wholesale',
			},
			{
				name: 'Longeviti Panel (90 biomarkers)',
				geviti: true,
				premium: 'Free*',
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
