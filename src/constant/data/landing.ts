import { ShoppingBagIcon } from '@/components/Icons';
import {
	BarChartSquareIcon,
	ChartIcon,
	// DNAIcon,
	DocumentIcon,
	EmergencyCallAddIcon,
	FavoriteChartIcon,
	GevitiIcon,
	// HeartbeatIcon,
	HomeOutlineIcon,
	InformationIcon,
	// MedicalDocIcon,
	// MonitoringIcon,
	// PillIcon,
	TeamIcon,
} from '@/components/Icons/Landing';

const landingData = {
	navbar: {
		iconsMenu: [
			{
				id: 'shopping',
				href: '/cart',
				icon: ShoppingBagIcon,
			},
		],
	},
	hero: {
		preTitle: 'FEEL BETTER AND LIVE LONGER',
		title: 'Your partner in total health optimization and longevit<span class="ml-0.5">y<span>.',
		titles: [
			'Your partner in total health',
			'optimization and longevit<span class="ml-0.5">y<span>.',
		],
		titlesMobile: [
			'Your partner in total health',
			'optimization and longevit<span class="ml-0.5">y<span>.',
		],
		banner: {
			text: '<span class="font-medium">Geviti Closes Early Stage Seed Financing</span> 🎉 <br/>To Celebrate, Those Who Join Our Beta Before<br/>August 1st Will Be Grandfathered In At $89/M!',
			icon: InformationIcon,
			show: true,
		},
		image: '/images/landing/compressed/hero.webp',
		imageMobile: '/images/landing/compressed/hero-mobile.webp',
		btnCta: {
			text: 'Join Geviti',
			href: '/pricing',
			externalLink: false,
		},
		btnCta2: {
			href: 'https://calendly.com/cole-gogeviti/discovery-call',
			externalLink: true,
			text: 'Schedule a call',
		},
		mainKeys: [
			'Maximize healthspan',
			'Increase lifespan',
			'Build lean muscle',
			'Reduce body fat',
			'Optimize hormone levels',
			'Reduce aging rate',
			'Improve sleep quality',
			'Enhance cognitive performance',
			'Boost sexual wellness',
			'Regrow hair',
			'Lower cancer risk',
			'Strengthen heart health',
		],
	},
	products: {
		title: 'Discover Geviti',
		description: 'Browse our wide range of products!',
		viewAll: {
			text: 'View All Products',
			href: '/products',
		},
		categories: [
			{
				title: 'Mens Products',
				slug: 'male-hormone-optimization',
			},
			{
				title: 'Womens Products',
				slug: 'female-hormone-optimization',
			},
		],
		subCategories: [
			{ id: 1, title: 'Prescriptions' },
			{ id: 3, title: 'Supplements' },
			{ id: 2, title: 'Testing Options' },
		],
	},
	investment: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
      'Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.',
		image: '/images/landing/investment.png',
		imageMobile: '/images/landing/investment_mobile.png',
		btnCta: {
			href: '/pricing',
			externalLink: false,
			text: 'Get Started',
		},
	},
	banner: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
      'Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.',
		image: '/images/landing/compressed/banner-landing.webp',
		imageMobile: '/images/landing/compressed/banner-landing-mobile.webp',
		btnCta: {
			href: '/pricing',
			externalLink: false,
			text: 'Start Now',
		},
	},
	steps: {
		preTitle: 'No more guessing where your health is',
		title: 'Your journey begins with a full blood panel.',
		btnCta: {
			href: '/pricing',
			externalLink: false,
			text: 'Become A Member',
		},
		list: [
			{
				id: 'step-1',
				title: 'Sign up for our <br />Longeviti <br />Membership',
				icon: GevitiIcon,
			},
			{
				id: 'step-2',
				title: 'Complete<br />your at-home<br />blood draw',
				icon: HomeOutlineIcon,
			},
			{
				id: 'step-3',
				title: 'Review your<br />results in a<br />telehealth visit',
				icon: ChartIcon,
			},
			{
				id: 'step-4',
				title: 'Receive your<br />treatments on<br />your doorstep ',
				icon: DocumentIcon,
			},
		],
	},
	dashboard: {
		preTitle: 'Quality Care made accessible',
		title: 'Easy to use Geviti telehealth dashboard.',
		btnCta: {
			href: '/pricing',
			externalLink: false,
			text: 'Start Now',
		},
		image: '/images/landing/compressed/dashboard_geviti.webp',
	},
	application: {
		preTitle: 'membership features',
		title: 'A health coach in your pocket',
		list: [
			'The creation of an action plan based off of the users bloodwork results, focusing on lifestyle, nutrition, supplementation, and overall health optimization.',
			'The creation of an action plan based off of the users bloodwork results, focusing on lifestyle, nutrition, supplementation, and overall health optimization.',
			'The creation of an action plan based off of the users bloodwork results, focusing on lifestyle, nutrition, supplementation, and overall health optimization.',
			'The creation of an action plan based off of the users bloodwork results, focusing on lifestyle, nutrition, supplementation, and overall health optimization.',
		],
		btnCta: {
			href: '/pricing',
			externalLink: false,
			text: 'Join Now',
		},
		image: '/images/landing/compressed/athlete-female.webp',
		imageMobile: '/images/landing/compressed/athlete-female-mobile.webp',
	},
	functional: {
		preTitle: 'Tailored Functional Medicine',
		preTitleMobile: 'Longevity made easy',
		title:
      'A holistic approach to an<br />optimized <span class="font-semibold">you.</span>',
		btnCta: {
			href: '/products',
			externalLink: false,
			text: 'See Products',
		},
		list: [
			'Custom treatment sent straight to your door',
			'Cutting edge anti-aging peptide therapy',
			'New generation hormone replacement therapy',
			'All made in fully accredited USA pharmacies',
		],
	},
	quality: {
		preTitle: 'USA Pharmacy dispensed',
		preTitleMobile: 'Tailor-made longevity',
		title: 'Hormone therapy, peptide therapy, and more.',
		notes:
      '*Product images are for display purposes; actual items from US-based pharmacies may vary.',
		list: [
			'Treatments for both <span class="font-semibold">men</span> and <span class="font-semibold">women</span>',
			'Data-driven care to truly optimize your life',
			'24/7 health tracking via wearable integrations ',
			'Driven by technology to make your life simpler',
		],
		btnCtaList: [
			{
				href: '/pricing',
				externalLink: false,
				text: 'Start Now',
			},
			{
				href: '/products',
				externalLink: false,
				text: 'See Products',
			},
		],
	},
	therapy: {
		preTitle: 'Innovative anti-aging therapies',
		preTitleMobile: 'Geviti is the cutting edge',
		title: 'No need to leave home. Anti-aging care that goes where you go.',
		titleMobile: 'Anti-aging care that goes where you go.',
		description:
      'Through on-site blood analysis by certified mobile phlebotomists, we\'ll tailor a healthcare plan specifically for your requirements.',
		descriptionMobile:
      'Geviti aims to increase both healthspan and lifespan by making longevity accessible.',
		btnCta: {
			href: '/pricing',
			externalLink: false,
			text: 'Start Now',
		},
	},
	flexible: {
		preTitle: 'Personalized plans that are right for you',
		preTitleMobile: 'Personalized for you',
		title: 'Full access for just $99',
		description:
      'Unlock personalized healthcare on the Geviti platform. From hormone optimization to peptide therapies and advanced diagnostics—all at your fingertips.',
		descriptionMobile:
      'From hormone optimization to peptide therapies and advanced diagnostics—all at your fingertips with the Geviti platform.',
		image: '/images/landing/compressed/flexible.webp',
		imageMobile: '/images/landing/compressed/flexible-mobile.webp',
		list: [
			'Telehealth provider access',
			'Personal health and wellness coach',
			'Prescriptions delivered to your door',
			'Cutting edge anti-aging medications',
			'Wholesale supplements and diagnostics',
			'Mobile application and web dashboard',
			'Autonomous health screening',
			'And so much more',
		],
	},
	clinical: {
		preTitle: 'Membership Features',
		preTitleMobile: 'Membership Features',
		title: 'Nationwide clinical network',
		description:
      'Each user is given access to licensed providers who are qualified to go over their bloodwork results and write prescriptions accordingly within our platform.<br/><br/>The network of providers using the Geviti platforms spans across the country with the ability to provide care in most states.',
		descriptionMobile:
      'Each user is assigned a licensed provider who is qualified to go over their bloodwork results and write prescriptions accordingly within our platform.<br/><br/>The network of providers using the Geviti platforms spans  across the country with the ability to provide care in most states.',
		image: '/images/landing/compressed/clinical-network.webp',
		imageMobile: '/images/landing/compressed/clinical-network.webp',
		btnCta: {
			href: '/pricing',
			externalLink: false,
			text: 'Get Access',
		},
	},
	benefits: {
		preTitle: 'Anti-aging care” instead of “membership benefits',
		title: 'Optimize health & wellness',
		description:
      'A fully integrated health program that brings together advanced diagnostics, expert medical care and coaching, science-backed longevity therapies for optimal well-being and long-term vitality.',
		list: [
			{
				title: 'Traditional Healthcare:',
				items: [
					{
						cheked: false,
						text: '~20 biomarkers if labs are done',
					},
					{
						cheked: false,
						text: 'Generalized one-size-fits all',
					},
					{
						cheked: false,
						text: 'Immediate symptom-only approach',
					},
					{
						cheked: false,
						text: 'In-person visits required',
					},
					{
						cheked: false,
						text: 'Reactive. Care once sick.',
					},
					{
						cheked: false,
						text: 'Limited communication',
					},
					{
						cheked: false,
						text: 'One-off visits',
					}
				]
			},
			{
				title: 'Geviti',
				items: [
					{
						cheked: true,
						text: '90+ biomarkers every 6 months',
					},
					{
						cheked: true,
						text: 'Personalized to you',
					},
					{
						cheked: true,
						text: 'Holistic root cause approach',
					},
					{
						cheked: true,
						text: 'Convenience (all from the comfort of your home)',
					},
					{
						cheked: true,
						text: 'Proactive/Preventative',
					},
					{
						cheked: true,
						text: 'Direct access to care in our app',
					},
					{
						cheked: true,
						text: 'Continual health partner',
					}
				]
			},
		],
	},
	biologicalKit: {
		title: 'At-home<br />biological age kit',
		description:
      'Our biological age tests use the DNA methylation analysis method to accurately depict your biological age. This is known to be the most advanced way to retrieve ones biological age currently.',
		btnCta: {
			text: 'See all Kits',
			href: '/products',
		},
		counter: {
			digit: 32.7,
			description:
        'BIOLOGICAL <span class="text-white">AGE is 4.3 Years Lower</span> THAN chronological age ',
		},
		step: {
			title: 'How to use your biological test kit',
			list: [
				{
					title: 'Receive your package',
					text: 'directly in your mail. Included in this test is a cheek swap collection kit for quick and convenient testing.',
					image: '/images/landing/hero-icons/package.png',
					stepColor: '#EF8E5F',
					shadowColor: '#DF865A80',
				},
				{
					title: 'Complete the test',
					text: 'by collecting your sample via a quick and easy cheek swap. The process takes all of 10 minutes max.',
					image: '/images/landing/hero-icons/complete-test.png',
					stepColor: '#D07EE5',
					shadowColor: '#C941CE80',
				},
				{
					title: 'Receive the test results',
					text: 'once they are processed by our labs. You’ll be notified when the results are ready for review in roughly 7-14 days.',
					image: '/images/landing/hero-icons/test-result.png',
					stepColor: '#00D1FF',
					shadowColor: '#96D4FD80',
				},
			],
		},
	},
	innovative: {
		preTitle: 'Innovative Technology',
		title: 'Data-driven longevity. No <br class="lg:hidden"/>guesswork.',
		description:
      'Geviti is reshaping the traditional health care system and individuals’ relationship with their health by leveraging cutting edge technology and combining it with convenient diagnostics followed by cutting edge care.',
		list: [
			{
				id: 'test-results',
				title: 'Up to date test results',
				description:
          'There should never be a reason to bounce around to track down your lab reports. Geviti compiles your diagnostic results into our platform for users to analyze, track, and understand their markers.',
				groupImages: [
					'/images/landing/compressed/group-test-result-1.webp',
					'/images/landing/compressed/group-test-result-2.webp',
					'/images/landing/compressed/group-test-result-3.webp',
				],
				list: [
					{
						title: 'Endocrine Health',
						date: 'Feb. 22 2024',
						badge: 'Normal',
					},
					{
						title: 'Metabolic Health',
						date: 'Mar. 04 2024',
						badge: 'Warning',
					},
					{
						title: 'Cardiovascular Risk',
						date: 'Mar. 12 2024',
						badge: 'Review',
					},
				],
			},
			{
				id: 'mobile-application',
				title: 'Integrated health tracking mobile application.',
				description:
          'Geviti’s applications make managing longevity easy and convenient.',
				image: '/images/landing/compressed/phone.webp',
				list: [
					{
						icon: BarChartSquareIcon,
						text: 'track Key metrics',
					},
					{
						icon: FavoriteChartIcon,
						text: 'manage your goals',
					},
					{
						icon: TeamIcon,
						text: 'Medical team access',
					},
					{
						icon: EmergencyCallAddIcon,
						text: 'field telehealth calls',
					},
				],
			},
			{
				id: 'bloodwork-dashboard',
				image: '/images/landing/compressed/dashboard-mobile.webp',
			},
			{
				id: 'telehealth-dashboard',
				title:
          'Easy to use Geviti <br class="sm:hidden"/>telehealth dashboard.',
				description:
          'Our technology driven platform compiles your full health context into a centralized hub that is easy to navigate. In doing so, Geviti works with you to promote longevity using your real health data.',
				btnCta: {
					text: '<span class="lg:hidden">Join Now</span><span class="max-lg:hidden">Become A Member</span>',
					href: '/pricing',
				},
				image: '/images/landing/compressed/dashboard.webp',
			},
		],
	},
	homeKits: {
		carousel: [
			{
				id: 'homekits',
				preTitle: 'Members receive access to',
				title: 'Innovative at-home bloodwork',
				description:
          'Geviti offers a wide range of convenient and advanced <br class="max-lg:hidden"/>diagnostics, all from the comfort of your home. From mobile <br class="max-lg:hidden"/>phlebotomy, to at-home testing kits, we make health <br class="max-lg:hidden"/>screening ultra accessible.',
				image: '/images/landing/compressed/homekits-bloodwork.webp',
				imageMobile:
          '/images/landing/compressed/homekits-bloodwork-mobile.webp',
			},
			{
				id: 'prescription',
				preTitle: 'Members receive access to',
				title: 'Prescription wellness done right',
				description:
          'We offer hormone therapy, peptide therapy, and other <br class="max-lg:hidden"/>prescription wellness services under the supervision of medical <br class="max-lg:hidden"/>professionals. Once you receive approval from a provider <br class="max-lg:hidden"/>through the Geviti app, we\'ll deliver your treatment directly to you.',
				image: '/images/landing/compressed/homekits-prescription.webp',
				imageMobile:
          '/images/landing/compressed/homekits-prescription-mobile.webp',
			},
			{
				id: 'therapy',
				preTitle: 'Members receive access to',
				title: 'Customized supplement blends',
				description:
          'No more over spending on supplements that aren\'t designed exactly <br class="max-lg:hidden"/>for you. Geviti will analyze your biomarkers and create totally custom <br class="max-lg:hidden"/>supplements packs with everything you need, and nothing that you <br class="max-lg:hidden"/>don’t.',
				image: '/images/landing/compressed/homekits-supplements.webp',
				imageMobile:
          '/images/landing/compressed/homekits-supplements-mobile.webp',
			},
		],
		btnCta: {
			href: '#landing-discover-geviti',
			text: 'View All Products',
		},
		mouseCircleText: 'Click To Slide',
	},
	supplements: {
		preTitle: 'Driven by your bloodwork Results',
		title: 'Tailormade smart <br class="sm:hidden"/>supplements',
		description:
      'No more over spending on supplements that aren\'t designed exactly for you. Geviti will analyze your biomarkers and create totally custom supplements with everything you need, and nothing that you don’t.',
	},
	textReveal: {
		paragraph:
      'Geviti leverages your bloodwork and DNA to enhance your health and improve aging. We provide personalized hormone optimization, custom supplements, and tailored wellness plans aimed at extending your healthy years and lifespan. This approach helps you enjoy more time and create lasting memories with your loved ones.',
	},
	membership: {
		priceSection: {
			preTitle: 'Personalized plans that are right for you',
			title:
        'Memberships start at $129<span class="text-xs sm:text-[20px] lg:text-2xl !leading-normal">/month</span>',
			description:
        'Geviti easily integrates into your life with at-home diagnostics and doctor-supervised treatments on your time.',
			btnCta: {
				text: 'Learn More',
				href: '#pricing',
			},
			btnCtaMobile: {
				text: 'Join Geviti',
				href: '#pricing',
			},
			list: [
				{
					id: 'top',
					reverse: true,
					list: [
						{
							title: 'Automated Bloodwork',
							description:
                'Your membership comes with biannual full panels conducted comfortably at home, with no extra charge.',
						},
						{
							title: 'Platform Access',
							description:
                'Your all-in-one center for functional care needs: track health metrics, message your health coach, access telehealth visits, and more, all from one place.',
						},
						{
							title: 'Advanced Diagnostics',
							description:
                'We exceed standard screenings by analyzing a broader range of biomarkers, DNA, and more, going beyond what your primary care physician may offer.',
						},
					],
				},
				{
					id: 'middle',
					reverse: false,
					list: [
						{
							title: 'Personal Health Coach',
							description:
                'Your personal health coach will guide you towards optimization with essential lifestyle changes, serving as your accountability partner.',
						},
						{
							title: 'Prescription Wellness',
							description:
                'Geviti partners with top US compound pharmacies. Our medical team will assess if our advanced therapeutics suit your needs.',
						},
						{
							title: 'Hormone Optimization',
							description:
                'Hormone optimization is key to vitality and longevity. Geviti provides nationwide expert care and advanced therapeutics for men and women.',
						},
					],
				},
				{
					id: 'bottom',
					reverse: true,
					list: [
						{
							title: 'In-app Doctors',
							description:
                'Our mission is to eliminate barriers in healthcare. There should be no need to leave your home for this level of care.',
						},
						{
							title: 'Wholesale Products',
							description:
                'Unlike our competitors, Geviti prioritizes accessibility over maximum profit. We\'re committed to making our supplements and screenings widely available.',
						},
						{
							title: 'Custom Protocols',
							description:
                'One Size Fits One! Forget "one size fits all." Our personalized protocols blend tailored supplements and lifestyle changes, going beyond conventional wellness.',
						},
					],
				},
			],
		},
		locationSection: {
			preTitle: 'What states do we support?',
			title: 'Care that goes where you go.',
			description:
        'Available in 17 states and expanding across all the country: <br/>AZ, CA, CO, FL, GA, IL, IN, KS, MO, NM, NV, OR, TN, TX, UT, VA, WA.',
			btnCta: {
				text: 'Become a member',
				href: '/pricing',
			},
			btnCtaMobile: {
				text: 'Become a member',
				href: '/pricing',
			},
			image: '/images/landing/compressed/continent_dots.webp',
		},
	},
	features: [
		{
			align: 'left',
			preTitle: 'Direct access',
			title: 'A wellness team in your<br />pocket',
			description:
				'Geviti provides our users with a comprehensive care team. Instead of being forced to choose between a healthcare provider and a health coach, we offer a solution where the two work in tandem to craft the ultimate longevity regimen.',
			btnCta: {
				href: '/pricing',
				text: 'Join Geviti',
			},
			card: {
				id: 'doctor',
				title: 'Doctor Led Care',
				description:
					'Cutting edge therapeutics including hormone therapy, peptide therapy, medical weight loss, and more monitored by board certified providers.',
			}
		},
		{
			align: 'right',
			preTitle: 'A holistic approach',
			title: 'Eastern and western<br />medicine, combined. ',
			description:
				'At Geviti, we bring together the best of both worlds by integrating the wisdom of Eastern practices with the advancements of Western medicine. This holistic approach ensures that your health journey is supported from all angles, promoting optimal balance, healing, and long-term wellness.',
			card: {
				id: 'coaching',
				title: 'Health Coaching',
				description:
					'Bi-weekly check-ins from your designated <br class="max-lg:hidden"/>health coach to hold you accountable to <br class="max-lg:hidden"/>your goals and ensure you have the <br class="max-lg:hidden"/>necessary tools for success',
			},
		},
		{
			align: 'left',
			preTitle: 'data-driven care',
			title: 'Custom plans tailored<br />to your needs.',
			description:
				'No two bodies are the same, and your care plan shouldn’t be either. Geviti designs personalized health plans based on your unique biomarkers, lifestyle, and goals. Whether it’s optimizing longevity or improving daily performance, your regimen is crafted just for you.',
			btnCta: {
				href: '/pricing',
				text: 'Join Geviti',
			},
			card: {
				id: 'protocols',
				title: 'Tailored Protocols',
				description:
					'The creation of an action plan based off of <br class="max-lg:hidden"/>your bloodwork results, focusing on <br class="max-lg:hidden"/>lifestyle, nutrition, supplementation, and <br class="max-lg:hidden"/>overall health optimization.',
			},
		},
		{
			align: 'right',
			preTitle: 'Not a one and done approach',
			title: 'Ongoing care and<br />health monitoring.',
			description:
				'Your health is always evolving, and so is our care. With Geviti’s continuous health tracking and regular check-ins, we ensure that your plan adapts to your progress. From real-time metrics to follow-up lab work, your wellness is in constant focus.',
			card: {
				id: 'education',
				title: 'Health Education',
				description:
					'Regular check-ins to educate and monitor progress over time, observing changes in bloodwork biomarkers, wearable device health metrics, and more.',
			},
		},
	],
};

export default landingData;
