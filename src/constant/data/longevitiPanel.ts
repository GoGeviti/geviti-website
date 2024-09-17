import { faqDataDefault } from './faq';

const longevitiPanelData = {
	navbar: {
		menu: [
			{
				name: 'Mens Health',
				href: '/solution/men',
				externalLink: false,
			},
			{
				name: 'Womens Health',
				href: '/solution/women',
				externalLink: false,
			},
			{
				name: 'Bloodwork',
				href: '/',
				externalLink: false,
			},
			{
				name: 'Supplements',
				href: '/',
				externalLink: false,
			},
			{
				name: 'Pricing',
				href: '/pricing',
				externalLink: false,
			},
			{
				name: 'Resources',
				href: '#',
				externalLink: false,
				items: [
					{
						name: 'Learn More',
						href: '/membership',
						externalLink: false,
					},
					{
						name: 'Blog',
						href: '/blog',
					},
					{
						name: 'FAQ',
						href: '/faq',
					},
					{
						name: 'Contact Us',
						href: '/contact-us',
					},
				],
			},
		],
	},
	hero: {
		preTitle: 'Unlock the Secrets to Your Health',
		title: 'Comprehensive Longeviti<br />Bloodwork Panel',
		description:
      'Our Longeviti Bloodwork Panel offers an in-depth analysis of 90+ critical biomarkers, giving you a complete picture of your health to guide you toward a longer, healthier life.',
		benefits: {
			title: 'Why Choose Our Panel?',
			description:
        'Geviti is redefining what a “full panel” means. Our comprehensive lab panel helps you stay ahead of disease, maintain optimal health, and live at your best.',
			image: '/images/longeviti_panel/hero.webp',
			imageMobile: '/images/longeviti_panel/hero-mobile.webp',
			cta: {
				text: 'Join Geviti',
				href: '/pricing',
			},
			list: [
				{
					title: 'Comprehensive Analysis:',
					description:
            'Covering all essential aspects of your health, our panel goes above and beyond compared to others.',
				},
				{
					title: 'Actionable Insights:',
					description:
            'Get detailed reports to make informed decisions. Review these insights with a wellness professional.',
				},
				{
					title: 'Free for Members:',
					description:
            'Receive this test for free every 6 months with a Longeviti Membership. Always be in the know.',
				},
				{
					title: 'Convenient Home Blood Draw:',
					description:
            'Performed by a licensed phlebotomist at your home. Our process couldn’t be more simple.',
				},
			],
		},
	},
	howItWorks: {
		title: 'How it Works?',
		description:
      'People will go years at a time without getting their bloodwork done due to the amount of friction in the traditional process. Geviti removes this friction with our streamlined approach.',
		list: [
			{
				id: 'order',
				title: 'Order Your Test:',
				description:
          'Sign up for your Longeviti Membership, and get your bloodwork done at no added cost.',
			},
			{
				id: 'sample',
				title: 'Collect Your Sample:',
				description:
          'Our licensed phlebotomist comes to your home for a convenient blood draw.',
			},
			{
				id: 'results',
				title: 'Receive Results:',
				description: 'Get your comprehensive report with actionable insights.',
			},
		],
	},
	banner: {
		title: 'Level Up Your Health',
		description:
      'We\'re here to help you unlock the best version of yourself. Don\'t wait to optimize your well-being. Live a healthier, more vibrant life with Geviti today.',
		image: '/images/longeviti_panel/banner.webp',
		imageMobile: '/images/longeviti_panel/banner-mobile.webp',
		cta: {
			text: 'Join Geviti',
			href: '/pricing',
		},
	},
	analyzed: {
		title: 'Categories Analyzed',
		description:
      'Geviti redefines the “full panel.” While most doctors test around 20 biomarkers, offering a limited view of your health, we go further by testing 90+ markers, delivering in-depth insights across key health categories to promote longevity.',
		categories: [
			{
				id: 1,
				title: 'Male Panel',
			},
			{
				id: 2,
				title: 'Female Panel',
			},
		],
		data: [
			{
				title: 'Metabolic Health',
				image: '/images/longeviti_panel/icons/metabolic-health.webp',
				list: [
					'Glucose Fasting: Understand blood sugar levels and risk of diabetes.',
					'Hemoglobin A1C: Track long-term blood sugar control.',
					'Fasting Insulin & HOMA2 Indices (B, S, IR): Gain a clearer picture of your metabolic status.',
					'QUICKI: Assess insulin sensitivity.',
				],
			},
			{
				title: 'Kidney and Liver Function',
				image: '/images/longeviti_panel/icons/kidney-and-liver.webp',
				list: [
					'Glucose Fasting: Understand blood sugar levels and risk of diabetes.',
					'Hemoglobin A1C: Track long-term blood sugar control.',
					'Fasting Insulin & HOMA2 Indices (B, S, IR): Gain a clearer picture of your metabolic status.',
					'QUICKI: Assess insulin sensitivity.',
				],
			},
			{
				title: 'Cardiovascular Health',
				image: '/images/longeviti_panel/icons/cardiovascular-health.webp',
				list: [
					'Glucose Fasting: Understand blood sugar levels and risk of diabetes.',
					'Hemoglobin A1C: Track long-term blood sugar control.',
					'Fasting Insulin & HOMA2 Indices (B, S, IR): Gain a clearer picture of your metabolic status.',
					'QUICKI: Assess insulin sensitivity.',
				],
			},
			{
				title: 'Hormonal Health',
				image: '/images/longeviti_panel/icons/hormonal-health.webp',
				list: [
					'Glucose Fasting: Understand blood sugar levels and risk of diabetes.',
					'Hemoglobin A1C: Track long-term blood sugar control.',
					'Fasting Insulin & HOMA2 Indices (B, S, IR): Gain a clearer picture of your metabolic status.',
					'QUICKI: Assess insulin sensitivity.',
				],
			},
			{
				title: 'Nutrient Levels',
				image: '/images/longeviti_panel/icons/nutrient-levels.webp',
				list: [
					'Glucose Fasting: Understand blood sugar levels and risk of diabetes.',
					'Hemoglobin A1C: Track long-term blood sugar control.',
					'Fasting Insulin & HOMA2 Indices (B, S, IR): Gain a clearer picture of your metabolic status.',
					'QUICKI: Assess insulin sensitivity.',
				],
			},
			{
				title: 'Inflammatory and Immune Markers',
				image: '/images/longeviti_panel/icons/immune.webp',
				list: [
					'Glucose Fasting: Understand blood sugar levels and risk of diabetes.',
					'Hemoglobin A1C: Track long-term blood sugar control.',
					'Fasting Insulin & HOMA2 Indices (B, S, IR): Gain a clearer picture of your metabolic status.',
					'QUICKI: Assess insulin sensitivity.',
				],
			},
		],
	},
	apps: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Take Control of <br class="sm:hidden"/>Your Health Today!',
		description:
      'Invest in your future with our Longeviti Bloodwork Panel and take the first step toward a healthier, longer life. Order now and unlock the secrets to your longevity.',
		image: '/images/longeviti_panel/vial-phone.webp',
		cta: {
			text: 'Join Geviti',
			href: '/pricing',
		},
	},
	faq: {
		data: faqDataDefault,
	},
};

export default longevitiPanelData;
