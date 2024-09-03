const membershipListVersion1 = [
	{
		title:
      'Free Bloodwork<br /><span class="text-grey-primary">Every 6 Months</span>',
		description:
      'Receive complimentary at-home bloodwork twice a year to monitor and optimize your health.',
		image: '/images/marketing/free-bloodwork.webp',
	},
	{
		title: 'Ongoing<br /><span class="text-grey-primary">Support</span>',
		description:
      'Benefit from continuous guidance and assistance to help you achieve and maintain your health goals.',
		image: '/images/marketing/ongoing-support.webp',
	},
	{
		title: 'Trusted<br /><span class="text-grey-primary">Medications</span>',
		description:
      'Access to reliable, doctor-approved medications tailored to your specific health needs.',
		image: '/images/marketing/trusted-medications.webp',
	},
	{
		title:
      'Access To<br /><span class="text-grey-primary">Your Care Team</span>',
		description:
      'Connect with your dedicated care team anytime for personalized health advice and support.',
		image: '/images/marketing/access-care-team.webp',
	},
];

const membershipListVersion2 = [
	{
		title:
      'Free Bloodwork<br /><span class="text-grey-primary">Every 6 Months</span>',
		description:
      'Receive complimentary at-home bloodwork twice a year to monitor and optimize your health.',
		image: '/images/marketing/free-bloodwork.webp',
	},
	{
		title:
      'Direct access to<br /><span class="text-grey-primary">Health Experts</span>',
		description:
      'Connect with your dedicated care team anytime for ongoing personalized health advice and support.',
		image: '/images/marketing/ongoing-support.webp',
	},
	{
		title:
      'Wholesale cost of Rx, peptides<br /><span class="text-grey-primary">and custom supplements</span>',
		description:
      'Access to reliable, doctor-approved medications tailored to your specific health needs.',
		image: '/images/marketing/trusted-medications.webp',
	},
	{
		title:
      'Convenient mobile application<br /><span class="text-grey-primary">for easy access</span>',
		description:
      'View health reporting, schedule consultations, order product, & message your care team – all from the Geviti app.',
		image: '/images/marketing/access-care-team.webp',
	},
];

const stepsListDefault = [
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
];

const topTierTabsDefault = [
	{ id: 1, title: 'Prescriptions', pageTitle: 'Top tier prescriptions' },
	{ id: 2, title: 'Supplements', pageTitle: 'Custom supplements' },
];

const marketingData = {
	hero: {
		titles: {
			'women-weight-loss':
        'Weight Loss, Simplified.<br />Feel confident in your <span class="lg:hidden"><br /></span>own <span class="max-lg:hidden"><br /></span>skin.',
			'men-weight-loss':
        'Weight Loss, Simplified.<br />Become the best <span class="lg:hidden"><br /></span>version of <span class="max-lg:hidden"><br /></span>yourself.',
			'men-hormone-therapy':
        'Boost energy, build <span class="lg:hidden"><br /></span>muscle, <span class="max-lg:hidden"><br /></span>feel healthier.',
			menopause:
        'Experience true relief<br/>through the stages of<br/>menopause.',
			'business-oriented':
        'Your key to a<br/>healthier, more<br/>productive workforce.',
		},
		list: {
			'men-weight-loss': [
				'Wholesale access to weight loss medications',
				'Starting at just $90/month for Members',
				'Ongoing care & health monitoring',
			],
			'women-weight-loss': [
				'Wholesale access to weight loss medications',
				'Starting at just $90/month for Members',
				'Ongoing care & health monitoring',
			],
			'men-hormone-therapy': [
				'Doctor recommended products, wholesale cost',
				'Personalized plans specifically based on your bloodwork',
				'Ongoing care & health monitoring on your app',
			],
			menopause: [
				'Doctor recommended hormone treatments',
				'Starting at just $XX/month for Members',
				'Ongoing care & health monitoring',
			],
			'business-oriented': [
				'Comprehensive bi-annual at-home bloodwork',
				'Personalized guidance & optimization plans',
				'Telehealth access to Primary Care',
			],
		},
		cta: {
			text: {
				menopause: 'Get Started',
				'men-hormone-therapy':
          '<span class="lg:hidden">Join Geviti</span><span class="max-lg:hidden">Get Started</span>',
				'men-weight-loss':
          '<span class="lg:hidden">Join Geviti</span><span class="max-lg:hidden">Get Started</span>',
				'women-weight-loss':
          '<span class="lg:hidden">Join Geviti</span><span class="max-lg:hidden">Get Started</span>',
				'business-oriented': 'Schedule A Call',
			},
			href: '/onboarding',
		},
		image: {
			'men-hormone-therapy': '/images/marketing/men-hormone-therapy/hero.webp',
			'men-weight-loss': '/images/marketing/men-weight-loss/hero.webp',
			'women-weight-loss': '/images/marketing/women-weight-loss/hero.webp',
			menopause: '/images/marketing/menopause/hero.webp',
			'business-oriented': '/images/marketing/business-oriented/hero.webp',
		},
		imageMobile: {
			'men-hormone-therapy':
        '/images/marketing/men-hormone-therapy/hero-mobile.webp',
			'men-weight-loss': '/images/marketing/men-weight-loss/hero-mobile.webp',
			'women-weight-loss':
        '/images/marketing/women-weight-loss/hero-mobile.webp',
			menopause: '/images/marketing/menopause/hero-mobile.webp',
			'business-oriented':
        '/images/marketing/business-oriented/hero-mobile.webp',
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
		secondaryTitle: {
			'men-hormone-therapy': 'tailored to your needs.',
			'men-weight-loss': 'tailored to your needs.',
			'women-weight-loss': 'tailored to your needs.',
			menopause: 'peptides, Rx, supplements',
		},
		description: {
			'men-hormone-therapy':
        'Get direct access to safe and effective treatment options like Oral T and other hormone medications if deemed appropriate by your provider.',
			'men-weight-loss':
        'Get direct access to safe and effective treatment options like GLP-1s and other tailored medications if deemed appropriate by your provider.',
			'women-weight-loss':
        'Get direct access to safe and effective treatment options like GLP-1s and other tailored medications if deemed appropriate by your provider.',
			menopause:
        'Get direct access to safe and effective treatment options like Estradiol and other tailored medications if deemed appropriate by your provider.',
		},
		cta: {
			href: '/onboarding',
			text: 'Sign Up Now',
		},
		tabs: {
			'men-hormone-therapy': topTierTabsDefault,
			'men-weight-loss': topTierTabsDefault,
			'women-weight-loss': topTierTabsDefault,
			menopause: topTierTabsDefault.map(tabs => ({
				...tabs,
				pageTitle: 'Top-tier hormone treatments',
			})),
		},
		ctaList: {
			href: '/pricing',
			text: 'Requires Membership',
		},
		list: {
			'women-weight-loss': [
				{
					id: 1,
					category: { id: 1 },
					title: 'Semaglutide Injections',
					description: 'Same active ingredient as Ozempic for only $90/mo.',
					image: '/images/marketing/products/semaglutide.webp',
				},
				{
					id: 2,
					category: { id: 1 },
					title: 'Tirzepatide Injections',
					description: 'Same active ingredient as Mojourno for only $150/mo.',
					image: '/images/marketing/products/tirzepatide.webp',
				},
				{
					id: 3,
					category: { id: 1 },
					title: 'Metformin (Cream)',
					description:
            'Helps improve insulin sensitivity & reduce appetite. From $65/mo.',
					image: '/images/marketing/products/metformin-women.webp',
				},
				{
					id: 4,
					category: { id: 1 },
					title: 'MIC B12 Injections',
					description:
            'Boosts metabolism, improves energy levels & overall vitality. From $15/mo.',
					image: '/images/marketing/products/mic-b12-women.webp',
				},
				{
					id: 5,
					category: { id: 2 },
					title: 'Longeviti Blend',
					description:
            'Custom supplements crafted specifically to your needs based on your bloodwork.',
					image: '/images/marketing/products/longevity-blend.webp',
				},
			],
			'men-weight-loss': [
				{
					id: 1,
					category: { id: 1 },
					title: 'Semaglutide Injections',
					description: 'Same active ingredient as Ozempic for only $90/mo.',
					image: '/images/marketing/products/semaglutide.webp',
				},
				{
					id: 2,
					category: { id: 1 },
					title: 'Tirzepatide Injections',
					description: 'Same active ingredient as Mojourno for only $150/mo.',
					image: '/images/marketing/products/tirzepatide.webp',
				},
				{
					id: 4,
					category: { id: 1 },
					title: 'MIC B12 Injections',
					description:
            'Boosts metabolism, improves energy levels & overall vitality. From $15/mo.',
					image: '/images/marketing/products/mic-b12-men.webp',
				},
				{
					id: 3,
					category: { id: 1 },
					title: 'Metformin (Cream)',
					description:
            'Helps improve insulin sensitivity & reduce appetite. From $65/mo.',
					image: '/images/marketing/products/metformin-men.webp',
				},
				{
					id: 5,
					category: { id: 2 },
					title: 'Longeviti Blend',
					description:
            'Custom supplements crafted specifically to your needs based on your bloodwork.',
					image: '/images/marketing/products/longevity-blend.webp',
				},
			],
			'men-hormone-therapy': [
				{
					id: 1,
					category: { id: 1 },
					title: 'Testosterone Injections',
					description:
            'A long-acting injectable testosterone to boost energy and vitality. From $15/mo.',
					image: '/images/marketing/products/testosterone-cypionate.webp',
				},
				{
					id: 2,
					category: { id: 1 },
					title: 'Oral Testosterone (Kyzatrex)',
					description:
            'A safe oral option to enhance test levels and vitality. From $65/mo.',
					image: '/images/marketing/products/oral-testosterone.webp',
				},
				{
					id: 3,
					category: { id: 1 },
					title: 'Testosterone Topical Cream',
					description:
            'A skin-applied testosterone therapy for steady hormone support. From $45/mo.',
					image: '/images/marketing/products/testosterone-topical-cream.webp',
				},
				{
					id: 4,
					category: { id: 1 },
					title: 'Testosterone Booster',
					description:
            'A hormone-regulating blend to naturally boost test and overall health. $35/mo',
					image: '/images/marketing/products/testosterone-booster.webp',
				},
				{
					id: 5,
					category: { id: 2 },
					title: 'Longeviti Blend',
					description:
            'Custom supplements crafted specifically to your needs based on your bloodwork.',
					image: '/images/marketing/products/longevity-blend.webp',
				},
			],
			menopause: [
				{
					id: 1,
					category: { id: 1 },
					title: 'Weight Loss',
					description: 'Same active ingredient as Ozempic for only $90/mo.',
					image: '/images/marketing/products/mockup.webp',
				},
				{
					id: 2,
					category: { id: 1 },
					title: 'Peptides',
					description:
            'Lorem ipsum dolor sit amet consectetur as low as $50/mo',
					image: '/images/marketing/products/mockup.webp',
				},
				{
					id: 3,
					category: { id: 1 },
					title: 'Supplements',
					description:
            'Lorem ipsum dolor sit amet consectetur as low as $50/mo',
					image: '/images/marketing/products/mockup.webp',
				},
				{
					id: 4,
					category: { id: 1 },
					title: 'Weight Loss',
					description:
            'Lorem ipsum dolor sit amet consectetur as low as $50/mo',
					image: '/images/marketing/products/mockup.webp',
				},
				{
					id: 5,
					category: { id: 2 },
					title: 'Longeviti Blend',
					description:
            'Custom supplements crafted specifically to your needs based on your bloodwork.',
					image: '/images/marketing/products/longevity-blend.webp',
				},
			],
		},
	},
	membership: {
		title:
      'What\'s Included In a<br /><span class="text-grey-primary">Geviti Membership</span>',
		description: {
			menopause:
        'Experience a new level of personalized health with Geviti. Everything you need to feel and look your best, all in one streamlined platform.',
			'men-hormone-therapy':
        'Experience a new level of personalized health with Geviti. Everything you need to feel and look your best, all in one streamlined platform.',
			'men-weight-loss':
        'Experience a new level of personalized health with Geviti. Everything you need to feel and look your best, all in one streamlined platform.',
			'women-weight-loss':
        'Experience a new level of personalized health with Geviti. Everything you need to feel and look your best, all in one streamlined platform.',
			'business-oriented':
        'Experience a new level of personalized health with Geviti. Everything your team needs to feel their best, all in one streamlined platform.',
		},
		cta: {
			text: {
				menopause: 'Sign Up Now',
				'men-hormone-therapy': 'Get Started',
				'men-weight-loss': 'Get Started',
				'women-weight-loss': 'Get Started',
				'business-oriented': 'Schedule A Call',
			},
			href: '/onboarding',
		},
		list: {
			'men-hormone-therapy': membershipListVersion1,
			'men-weight-loss': membershipListVersion1,
			'women-weight-loss': membershipListVersion1,
			menopause: membershipListVersion2,
			'business-oriented': membershipListVersion2,
		},
	},
	steps: {
		title: 'Our Process',
		image: '/images/marketing/phone.webp',
		list: {
			menopause: stepsListDefault,
			'men-hormone-therapy': stepsListDefault,
			'men-weight-loss': stepsListDefault,
			'women-weight-loss': stepsListDefault,
			'business-oriented': stepsListDefault.map(item => {
				if (item.title === 'Tailored Products') {
					return {
						...item,
						description:
              'Your custome protocol is delivered to your doorstep quickly and discreetly.',
					};
				}
				return item;
			}),
		},
		backgroundTheme: {
			menopause: 'blue',
			'men-hormone-therapy': 'blue',
			'men-weight-loss': 'blue',
			'women-weight-loss': 'blue',
			'business-oriented': 'black',
		},
	},
	faq: {
		subtitle: 'Tailor-made longevity',
		title: 'Frequently asked\nquestions',
		image: '/images/marketing/faq.webp',
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
			'men-hormone-therapy':
        '/images/marketing/men-hormone-therapy/banner.webp',
			'men-weight-loss': '/images/marketing/men-weight-loss/banner.webp',
			'women-weight-loss': '/images/marketing/women-weight-loss/banner.webp',
		},
		imageMobile: {
			'men-hormone-therapy':
        '/images/marketing/men-hormone-therapy/banner-mobile.webp',
			'men-weight-loss': '/images/marketing/men-weight-loss/banner-mobile.webp',
			'women-weight-loss':
        '/images/marketing/women-weight-loss/banner-mobile.webp',
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
	menopauseCare: {
		title:
      'Personalized menopause care<br /><span class="text-grey-primary">with your Geviti membership</span>',
		description:
      'Empower your menopause journey with Geviti—tailored treatments and expert care included in your membership.',
		cta: {
			text: 'Sign Up Now',
			href: '/onboarding',
		},
		content: {
			1: {
				id: 1,
				title: 'The highest quality solutions, tailored specifically to you.',
				description:
          'Get direct access to safe and effective treatment options like Progesterone and other tailored medications if deemed appropriate by your provider.',
				list: [
					'Shipped directly to your door',
					'Sold at cost with zero markups',
					'Micronized for maximum effectiveness',
				],
				image: '/images/marketing/menopause/menopause-care-1.webp',
			},
			2: {
				id: 2,
				title: 'Your partner in feeling better as you age',
				description:
          'Geviti is here to improve your quality of life through the challenging stages of menopause, with personalized treatments & holistic care that goes where you go.',
				perimenopause: {
					image:
            '/images/marketing/menopause/menopause-care-2-perimenopause.webp',
					imageMobile:
            '/images/marketing/menopause/menopause-care-2-perimenopause-mobile.webp',
					imageCaption: 'Perimenopause',
					list: [
						'Irregular periods',
						'Hot flashes',
						'Night sweats',
						'Mood swings',
					],
				},
				menopause: {
					title: '1 Day',
					subtitle: 'Menopause',
				},
				postmenopause: {
					image:
            '/images/marketing/menopause/menopause-care-2-postmenopause.webp',
					imageMobile:
            '/images/marketing/menopause/menopause-care-2-postmenopause-mobile.webp',
					imageCaption: 'Postmenopause',
					list: [
						'Vaginal Dryness',
						'Bone loss',
						'Weight gain',
						'Cardiovascular risks',
					],
				},
			},
			3: {
				title: 'The Longeviti Panel testing 90+ biomarkers',
				description:
          'Comprehensive bloodwork that could cost you thousands elsewhere - we’re giving it to you for free every 6 months. Just one of the benefits of being a Geviti Member.',
				image: '/images/marketing/menopause/menopause-care-3.webp',
			},
		},
	},
	testimonials: {
		title:
      'What our customers<br/><span class="text-grey-primary">say about us</span>',
		list: [
			{
				body: 'Geviti\'s custom supplements have transformed my health. I feel more energetic and healthier.',
				author: {
					name: 'Alex Buckmaster',
					company: 'Cala Foods',
				},
			},
			{
				body: 'More energy, better digestion, and excellent customer service with Geviti.',
				author: {
					name: 'Judith Rodriguez',
					company: 'Rainbow Bay Crafts',
				},
			},
			{
				body: 'High-quality custom supplements that make a difference. I feel supported and healthier.',
				author: {
					name: 'Rhonda Rhodes',
					company: 'Giant',
				},
			},
			{
				body: 'Top-notch health care services and game-changing custom supplements.',
				author: {
					name: 'Rhonda Rhodes',
					company: 'Giant',
				},
			},
			{
				body: 'Geviti\'s personalized approach ensures I get what my body needs. Highly recommend!',
				author: {
					name: 'Eddie Lake',
					company: 'Magna Architectural Design',
				},
			},
		],
	},
	investing: {
		title:
      'Why investing in preventive<br /><span class="text-grey-primary">wellness is essential</span>',
		description:
      'Keep your team operating at the top of their game with cutting-edge, data-driven preventive health solutions & care.',
		cta: {
			href: '/onboarding',
			text: 'Schedule A Call',
		},
		content: {
			1: {
				title:
          'Your employees are only as productive as their bodies & minds allow them to be.',
				description:
          'Don’t let reactive healthcare cost your business time & money.',
				list: [
					{
						counterText: '5x',
						text: 'Average additional cost of employees with multiple chronic conditions vs those without',
					},
					{
						counterText:
              '57<span class="text-sm lg:text-2xl !leading-normal">%</span>',
						text: 'Employees state health & wellness programs are an important factor in staying in their current job',
					},
					{
						counterText: '5x',
						text: 'something about absenteeism or productivity***',
					},
				],
			},
			2: {
				title: 'The perfect blend of preventive & primary care.',
				description:
          'We understand that illnesses arise, which is why we also provide full PCP access through our partner Guardian Medical Direction.',
				image: '/images/marketing/business-oriented/phone.webp',
			},
		},
	},
	employeePricing: {
		title:
      'Your employees deserve to feel their best <span class="max-lg:hidden"><br/></span><span class="text-grey-primary">you can help them get there</span>',
		description:
      'Geviti is your partner in workforce optimization through energy boosting, productivity improvement and disease prevention.',
		inputLabel: 'Number of Employees:',
		employeesLabel: 'Employees',
		priceSuffixLabel: 'per Employee/month',
		rules: [
			{
				title: 'Small Team',
				min: 10,
				max: 49,
				price: 99,
			},
			{
				title: 'Medium Team',
				min: 50,
				max: 99,
				price: 95,
			},
			{
				title: 'Large Team',
				min: 100,
				max: 199,
				price: 90,
			},
			{
				title: 'Enterprise',
				min: 200,
				max: Infinity,
				price: 85,
			},
		],
		disclaimer: {
			title: '*Disclaimer',
			content:
        'Geviti is your partner in workforce optimization through energy boosting, productivity improvement and disease prevention.',
		},
	},
};

export default marketingData;
