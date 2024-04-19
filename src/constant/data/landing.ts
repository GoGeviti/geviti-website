import { ShoppingBagIcon } from '@/components/Icons';
import {
	BarChartSquareIcon,
	ChartIcon,
	DNAIcon,
	DocumentIcon,
	EmergencyCallAddIcon,
	FavoriteChartIcon,
	GevitiIcon,
	HeartbeatIcon,
	HomeOutlineIcon,
	InformationIcon,
	MedicalDocIcon,
	MonitoringIcon,
	PillIcon,
	TeamIcon
} from '@/components/Icons/Landing';

const landingData = {
	navbar: {
		iconsMenu: [
			{
				id: 'shopping',
				href: '/cart',
				icon: ShoppingBagIcon,
			},
		]
	},
	hero: {
		preTitle: 'the ultimate longevity companion',
		title:
			'Longevity made <br class="sm:hidden"/>accessible. Data driven <br class="sm:hidden"/>anti-aging care.',
		titles: [
			'Longevity made accessible. Data',
			'driven anti-aging care.'
		],
		titlesMobile: [
			'Longevity made',
			'accessible. Data driven',
			'anti-aging care.'
		],
		banner: {
			text: 'Geviti closes Early stage Seed round. To celebrate, those who join before June 1 will be grandfathered in at a discount!',
			icon: InformationIcon,
			show: true
		},
		image: '/images/landing/compressed/hero.webp',
		imageMobile: '/images/landing/compressed/hero_mobile.webp',
		btnCta: {
			text: 'Join Geviti',
			href: '/onboarding',
			externalLink: false,
		},
		btnCta2: {
			href: '/products',
			externalLink: false,
			text: 'Learn More',
		},
		mainKeys: [
			{
				icon: MonitoringIcon,
				text: 'Hormone treatments<br />Made simple',
			},
			{
				icon: DNAIcon,
				text: 'At-home diagnostics<br />Blood and DNA'
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
	products: {
		title: 'Discover Geviti',
		description: 'Browse our wide range of products!',
		viewAll: {
			text: 'View All Products',
			href: '/products',
		},
		titleMobile: 'Our Products',
	},
	investment: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
			'Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.',
		image: '/images/landing/investment.png',
		imageMobile: '/images/landing/investment_mobile.png',
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Get Started',
		},
	},
	mission: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
			'Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.',
		image: '/images/landing/compressed/mission_1.webp',
		imageMobile: '/images/landing/compressed/mission_mobile.webp',
		images: [
			{
				src: '/images/landing/compressed/mission_1.webp',
				theme: 'dark'
			},
			{
				src: '/images/landing/compressed/mission_2.webp',
				theme: 'light'
			},
		],
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Start Now',
		},
	},
	steps: {
		preTitle: '<span class="lg:hidden">Easy online care</span><span class="max-lg:hidden">No more guessing where your health is</span>',
		title: '<span class="lg:hidden">Start your journey with a full blood panel.</span><span class="max-lg:hidden">Your journey begins with a full blood panel.</span>',
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Become A Member',
		},
		list: [
			{
				id: 'step-1',
				title: '<span class="lg:hidden">Become a Geviti <br />Member</span><span class="max-lg:hidden">Sign up for a <br />membership</span>',
				icon: GevitiIcon
			},
			{
				id: 'step-2',
				title: 'Complete at-<br />home labs',
				icon: HomeOutlineIcon
			},
			{
				id: 'step-3',
				title: '<span class="lg:hidden">Full lab results <br />breakdown</span><span class="max-lg:hidden">Telehealth visit <br />breakdown</span>',
				icon: ChartIcon
			},
			{
				id: 'step-4',
				title: 'Receive tailor <br />made protocols.',
				icon: DocumentIcon
			},
		],
	},
	dashboard: {
		preTitle: 'Quality Care made accessible',
		title: 'Easy to use Geviti telehealth dashboard.',
		btnCta: {
			href: '/onboarding',
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
			href: '/onboarding',
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
				href: '/onboarding',
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
			href: '/onboarding',
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
		descriptionMobile: 'From hormone optimization to peptide therapies and advanced diagnostics—all at your fingertips with the Geviti platform.',
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
			'And so much more'
		]
	},
	clinical: {
		preTitle: 'Membership Features',
		preTitleMobile: 'Membership Features',
		title: 'Nationwide clinical network',
		description:
			'Each user is given access to licensed providers who are qualified to go over their bloodwork results and write prescriptions accordingly within our platform.<br/><br/>The network of providers using the Geviti platforms spans across the country with the ability to provide care in most states.',
		descriptionMobile: 'Each user is assigned a licensed provider who is qualified to go over their bloodwork results and write prescriptions accordingly within our platform.<br/><br/>The network of providers using the Geviti platforms spans  across the country with the ability to provide care in most states.',
		image: '/images/landing/compressed/clinical-network.webp',
		imageMobile: '/images/landing/compressed/clinical-network.webp',
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Get Access',
		}
	},
	benefits: {
		preTitle: 'Membership Benefits',
		title: 'Therapeutics for optimization',
		description:
			'<span class="lg:hidden">Geviti has partnered with key compound pharmacies across the country to offer a range of anti-aging care at  the lowest prices possible. All clinical protocols are created and overseen by board certified providers.</span><span class="max-lg:hidden">Your Geviti membership will include the following: range of anti-aging care at the lowest prices possible. All clinical protocols are created and overseen by board certified providers.</span>',
		viewAll: {
			text: 'View All Products',
			href: '/products',
		},
		list: [
			{
				id: 'men',
				image: '/images/landing/compressed/benefits-men.webp',
				imageMobile: '/images/landing/compressed/benefits-men-mobile.webp',
				title: 'Mens Health',
				details: [
					'Testosterone Replacement',
					'Hormone Optimization',
					'Peptide Therapy',
					'Medical Weight-loss',
					'Sexual Function',
					'Other Anti-aging Solutions',
				]
			},
			{
				id: 'women',
				image: '/images/landing/compressed/benefits-women.webp',
				imageMobile: '/images/landing/compressed/benefits-women-mobile.webp',
				title: 'Women\'s Health',
				details: [
					'Menopause Hormone Replacement',
					'PCOS Treatment',
					'Peptide Therapy',
					'Medical Weight-loss',
					'Sexual Function',
					'Other Anti-aging Solutions',
				]
			}
		]
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
			description: 'BIOLOGICAL <span class="text-white">AGE is 4.3 Years Lower</span> THAN chronological age '
		},
		step: {
			title: 'How to use your biological test kit',
			list: [
				{
					title: 'Receive your package',
					text: 'directly in your mail. Included in this test is a cheek swap collection kit for quick and convenient testing.',
					image: '/images/landing/hero-icons/package.png',
					stepColor: '#EF8E5F',
					shadowColor: '#DF865A80'
				},
				{
					title: 'Complete the test',
					text: 'by collecting your sample via a quick and easy cheek swap. The process takes all of 10 minutes max.',
					image: '/images/landing/hero-icons/complete-test.png',
					stepColor: '#D07EE5',
					shadowColor: '#C941CE80'
				},
				{
					title: 'Receive the test results',
					text: 'once they are processed by our labs. You’ll be notified when the results are ready for review in roughly 7-14 days.',
					image: '/images/landing/hero-icons/test-result.png',
					stepColor: '#00D1FF',
					shadowColor: '#96D4FD80'
				}
			]
		}
	},
	innovative: {
		preTitle: 'Innovative Technology',
		title: 'Data-driven longevity. No <br class="lg:hidden"/>guesswork.',
		description:
			'Geviti is reshaping the traditional health care system and the worlds relationship with their health by leveraging cutting edge technology and combining it with convenient diagnostics followed by cutting edge care.',
		list: [
			{
				id: 'test-results',
				title: 'Up to date test results',
				description: 'There should never be a reason to bounce around to track down  you lab reports. Geviti compiles your diagnostic results into our platform for users to analyze, track, and understand their markers.',
				groupImages: [
					'/images/landing/compressed/group-test-result-1.webp',
					'/images/landing/compressed/group-test-result-2.webp',
					'/images/landing/compressed/group-test-result-3.webp',
				],
				list: [
					{
						title: 'Endocrine Health',
						date: 'Feb. 22 2024',
						badge: 'Normal'
					},
					{
						title: 'Metabolic Health',
						date: 'Mar. 04 2024',
						badge: 'Warning'
					},
					{
						title: 'Cardiovascular Risk',
						date: 'Mar. 12 2024',
						badge: 'Review'
					}
				]
			},
			{
				id: 'mobile-application',
				title: 'Integrated health tracking mobile application.',
				description: 'Geviti’s applications make managing longevity easy and convenient.',
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
				]
			},
			{
				id: 'bloodwork-dashboard',
				image: '/images/landing/compressed/dashboard-bloodwork.webp'
			},
			{
				id: 'telehealth-dashboard',
				title: 'Easy to use Geviti <br class="sm:hidden"/>telehealth dashboard.',
				description: 'Our technology driven platform compiles your full health context into a centralized hub that is easy to navigate. In doing so, Geviti works with you to promote longevity using your real health data.',
				btnCta: {
					text: '<span class="lg:hidden">Join Now</span><span class="max-lg:hidden">Become A Member</span>',
					href: '/onboarding'
				},
				image: '/images/landing/compressed/dashboard-bloodwork.webp'
			}
		]
	},
	homeKits: {
		carousel: [
			{
				id: 'homekits',
				preTitle: 'Members receive access to',
				title: 'Innovative at-home diagnostics',
				description: 'Geviti offers a wide range of convenient and advanced <br class="max-lg:hidden"/>diagnostics, all from the comfort of your home. From mobile <br class="max-lg:hidden"/>phlebotomy, to at-home testing kits, we make health <br class="max-lg:hidden"/>screening ultra accessible.',
				image: '/images/landing/compressed/homekits.webp',
				imageMobile: '/images/landing/compressed/homekits-mobile.webp'
			},
			{
				id: 'prescription',
				preTitle: 'Members receive access to',
				title: 'Prescription wellness done right',
				description: 'No more over spending on supplements that aren\'t designed <br class="max-lg:hidden"/>exactly for you. Geviti will analyze your biomarkers and create <br class="max-lg:hidden"/>totally custom supplements with everything you need, and <br class="max-lg:hidden"/>nothing that you don’t.',
				image: '/images/landing/compressed/supplements-bottle.webp',
				imageMobile: '/images/landing/compressed/supplements-bottle.webp',
			},
			{
				id: 'therapy',
				preTitle: 'Members receive access to',
				title: 'Tailormade smart supplements',
				description: 'We offer hormone therapy, peptide therapy, and other prescription <br class="max-lg:hidden"/>wellness services under the supervision of medical professionals. <br class="max-lg:hidden"/>Once you receive approval from a provider through the Geviti app, <br class="max-lg:hidden"/>we\'ll deliver your treatment directly to you.',
				image: '/images/landing/compressed/supplements-pouch.webp',
				imageMobile: '/images/landing/compressed/supplements-pouch-mobile.webp'
			}
		],
		btnCta: {
			href: '/products',
			text: 'View All Products'
		},
		mouseCircleText: 'Click To Slide'
	},
	supplements: {
		preTitle: 'Driven by your bloodwork Results',
		title: 'Tailormade smart <br class="sm:hidden"/>supplements',
		description: 'No more over spending on supplements that aren\'t designed exactly for you. Geviti will analyze your biomarkers and create totally custom supplements with everything you need, and nothing that you don’t.'
	},
	textReveal: {
		paragraph: 'Geviti offers enhanced health at every stage of aging with personalized hormone optimization, custom supplements, and tailored wellness plans, aiming to extend your health span and lifespan for more cherished moments with loved ones.'
	},
	membership: {
		priceSection: {
			preTitle: 'Personalized plans that are right for you',
			title: 'Memberships as low as $99<span class="text-xs lg:text-2xl lg:!leading-9">/month</span>',
			description: 'Your Geviti membership will include the following:',
			btnCta: {
				text: 'Learn More',
				href: '/onboarding'
			},
			btnCtaMobile: {
				text: 'Learn More',
				href: '/onboarding'
			},
			list: [
				{
					id: 'top',
					reverse: true,
					list: [
						{
							title: 'Automated Bloodwork',
							description: 'Your membership comes with biannual full panels conducted comfortably at home, with no extra charge.'
						},
						{
							title: 'Platform Access',
							description: 'Your all-in-one center for functional care needs: track health metrics, message your health coach, access telehealth visits, and more, all from one place.'
						},
						{
							title: 'Advanced Diagnostics',
							description: 'We exceed standard screenings by analyzing a broader range of biomarkers, DNA, and more, going beyond what your primary care physician may offer.'
						},
					]
				},
				{
					id: 'middle',
					reverse: false,
					list: [
						{
							title: 'Personal Health Coach',
							description: 'Your personal health coach will guide you towards optimization with essential lifestyle changes, serving as your accountability partner.'
						},
						{
							title: 'Prescription Wellness',
							description: 'Geviti partners with top US compound pharmacies. Our medical team will assess if our advanced therapeutics suit your needs.'
						},
						{
							title: 'Hormone Optimization',
							description: 'Hormone optimization is key to vitality and longevity. Geviti provides nationwide expert care and advanced therapeutics for men and women.'
						},
					],
				},
				{
					id: 'bottom',
					reverse: true,
					list: [
						{
							title: 'In-app Doctors',
							description: 'Our mission is to eliminate barriers in healthcare. There should be no need to leave your home for this level of care.'
						},
						{
							title: 'Wholesale Products',
							description: 'Unlike our competitors, Geviti prioritizes accessibility over maximum profit. We\'re committed to making our supplements and screenings widely available.'
						},
						{
							title: 'Custom Protocols',
							description: 'One Size Fits One! Forget "one size fits all." Our personalized protocols blend tailored supplements and lifestyle changes, going beyond conventional wellness.'
						}
					]
				}
			]
		},
		locationSection: {
			preTitle: 'MEMBERSHIP FEATURES',
			title: 'Care that goes where you go.',
			description: 'Available in 11 states and expanding across all the country: <br/>AZ, CA, CO, UT, WA, TX, FL, GA, KS, OR, NM',
			btnCta: {
				text: 'Learn More',
				href: '/onboarding'
			},
			btnCtaMobile: {
				text: 'Learn More',
				href: '/onboarding'
			},
			image: '/images/landing/compressed/continent_dots.webp'
		}
	},
	features: {
		preTitle: 'membership features',
		title: 'A wellness team in your<br />pocket',
		description: 'Geviti provides our users with a comprehensive care team. Instead of being forced to choose between a healthcare provider and a health coach, we offer a solution where the two work in tandem to craft the ultimate longevity regimen.',
		btnCta: {
			href: '/onboarding',
			text: 'Join Geviti'
		},
		cards: [
			{
				id: 'doctor',
				title: 'Doctor Led Care',
				description: 'Cutting edge therapeutics including <br class="max-lg:hidden"/>hormone therapy, peptide therapy, medical weight loss, and more monitored by board <br class="max-lg:hidden"/>certified providers.'
			},
			{
				id: 'coaching',
				title: 'Health Coaching',
				description: 'Bi-weekly check-ins from your designated <br class="max-lg:hidden"/>health coach to hold you accountable to <br class="max-lg:hidden"/>your goals and ensure you have the <br class="max-lg:hidden"/>necessary tools for success'
			},
			{
				id: 'protocols',
				title: 'Tailored Protocols',
				description: 'The creation of an action plan based off of <br class="max-lg:hidden"/>the users bloodwork results, focusing on <br class="max-lg:hidden"/>lifestyle, nutrition, supplementation, and <br class="max-lg:hidden"/>overall health optimization.'
			},
			{
				id: 'education',
				title: 'Health Education',
				description: 'Regular check-ins to educate and monitor <br class="max-lg:hidden"/>progress over time, observing changes in <br class="max-sm:hidden"/>bloodwork biomarkers, wearable device <br class="max-sm:hidden"/>health metrics, and more.'
			}
		]
	}
};

export default landingData;
