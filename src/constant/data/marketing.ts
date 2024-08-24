const marketingData = {
	hero: {
		titles: [
			'Weight Loss, Simplified.',
			'Feel confident',
			'in your own skin.',
		],
		list: [
			'Wholesale access to weight loss medications',
			'Starting at just $90/month for Members',
			'Ongoing care & health monitoring',
		],
		cta: {
			text: 'Get Started',
			href: '/onboarding',
		},
		image: {
			men: '/images/marketing/hero-men.webp',
			women: '/images/marketing/hero-women.webp',
		},
		imageMobile: {
			men: '/images/marketing/hero-men-mobile.webp',
			women: '/images/marketing/hero-women-mobile.webp',
		},
		popup: {
			title: 'HSA/FSA',
			titleSuffix: 'ACCEPTED',
			images: [
				'/images/marketing/review-3.webp',
				'/images/marketing/review-2.webp',
				'/images/marketing/review-1.webp',
			],
		},
	},
	topTier: {
		title: '<span style="color:#919B9F">tailored to your needs.</span>',
		description:
      'Get direct access to safe and effective treatment options like GLP-1s and other tailored medications if deemed appropriate by your provider.',
		cta: {
			href: '/onboarding',
			text: 'Sign Up Now',
		},
		tabs: [
			{ id: 1, title: 'Prescriptions', pageTitle: 'Top tier prescriptions' },
			{ id: 2, title: 'Supplements', pageTitle: 'Custom supplements' },
		],
		ctaList: {
			text: 'Requires Membership',
		},
		list: [
			{
				id: 1,
				category: { id: 1 },
				title: 'Semaglutide Injections',
				description: 'Same active ingredient as Ozempic for only $90/mo.',
				image: '/images/marketing/sermoreline.webp',
			},
			{
				id: 2,
				category: { id: 1 },
				title: 'Tirzepatide Injections',
				description: 'Same active ingredient as Mojourno for only $150/mo.',
				image: '/images/marketing/sermoreline.webp',
			},
			{
				id: 3,
				category: { id: 1 },
				title: 'Metformin',
				description:
          'Helps improve insulin sensitivity & reduce appetite. From $XX/mo.',
				image: '/images/marketing/sermoreline.webp',
			},
			{
				id: 4,
				category: { id: 1 },
				title: 'B12 Injections',
				description:
          'Boosts metabolism, improves energy levels & overall vitality. From $XX/mo.',
				image: '/images/marketing/sermoreline.webp',
			},
			{
				id: 5,
				category: { id: 2 },
				title: 'Semaglutide Injections',
				description: 'Same active ingredient as Ozempic for only $90/mo.',
				image: '/images/marketing/sermoreline.webp',
			},
			{
				id: 6,
				category: { id: 2 },
				title: 'Tirzepatide Injections',
				description: 'Same active ingredient as Mojourno for only $150/mo.',
				image: '/images/marketing/sermoreline.webp',
			},
			{
				id: 7,
				category: { id: 2 },
				title: 'Metformin',
				description:
          'Helps improve insulin sensitivity & reduce appetite. From $XX/mo.',
				image: '/images/marketing/sermoreline.webp',
			},
			{
				id: 8,
				category: { id: 2 },
				title: 'B12 Injections',
				description:
          'Boosts metabolism, improves energy levels & overall vitality. From $XX/mo.',
				image: '/images/marketing/sermoreline.webp',
			},
		],
	},
	membership: {
		title:
      'What\'s Included In a<br /><span style="color:#919B9F">Geviti Membership</span>',
		description:
      'Experience a new level of personalized health with Geviti. Everything you need to feel and look your best, all in one streamlined platform.',
		cta: {
			text: 'Get Started',
			href: '/onboarding',
		},
		list: [
			{
				title:
          'Free Bloodwork<br /><span style="color:#919B9F">Every 6 Months</span>',
				description:
          'Receive complimentary at-home bloodwork twice a year to monitor and optimize your health.',
				image: '/images/marketing/free-bloodwork.webp',
			},
			{
				title: 'Ongoing<br /><span style="color:#919B9F">Support</span>',
				description:
          'Benefit from continuous guidance and assistance to help you achieve and maintain your health goals.',
				image: '/images/marketing/ongoing-support.webp',
			},
			{
				title: 'Trusted<br /><span style="color:#919B9F">Medications</span>',
				description:
          'Access to reliable, doctor-approved medications tailored to your specific health needs.',
				image: '/images/marketing/trusted-medications.webp',
			},
			{
				title:
          'Access To<br /><span style="color:#919B9F">Your Care Team</span>',
				description:
          'Connect with your dedicated care team anytime for personalized health advice and support.',
				image: '/images/marketing/access-care-team.webp',
			},
		],
	},
	steps: {
		title: 'Our Process',
		image: '/images/marketing/phone.webp',
		list: [
			{
				title: 'Intro Screening:',
				description:
          'Complete at-home blood draw & intake forms to create full health profile.',
			},
			{
				title: 'Health Consult:',
				description:
          'Our medical experts review your results & build a personalized wellness plan.',
			},
			{
				title: 'Tailored Products:',
				description:
          'Your hormone protocol is delivered to your doorstep quickly and discreetly.',
			},
			{
				title: 'Monitoring & Optimizing:',
				description:
          'Track health improvements – beyond just hormones – all from the Geviti app.',
			},
		],
	},
	faq: {
		subtitle: 'Tailor-made longevity',
		data: [
			{
				title: 'What states is Geviti in?',
				content:
          'As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.',
			},
			{
				title: 'What testing is included in the ‘Longevity Panel’?',
				content:
          'As part of your membership, you receive the "Longevity Panel" testing twice each year. This foundational evaluation provides key insights into your health metrics. For a more detailed analysis, you have the option to upgrade to our comprehensive or ultimate diagnostic tiers at any time.',
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
		title:
      'Look better. Feel better. Live longer. Geviti is your partner in long term health.',
		image: {
			men: '/images/marketing/banner-men.webp',
			women: '/images/marketing/banner-women.webp',
		},
		imageMobile: {
			men: '/images/marketing/banner-men-mobile.webp',
			women: '/images/marketing/banner-women-mobile.webp',
		},
		popup: {
			title: 'Your journey starts here!',
			description: 'Purchase bloodwork and optimize your health today.',
			cta: {
				text: 'Get Started',
				href: '/onboarding',
			},
			image: '/images/marketing/phone.webp',
		},
	},
};

export default marketingData;
