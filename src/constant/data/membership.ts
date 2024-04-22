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

const membershipData = {
	hero: {
		preTitle: 'all you need membership',
		title:
			'Longevity made <br class="sm:hidden"/>accessible. Data driven <br class="sm:hidden"/>anti-aging care.',
		titles: ['Optimize your health, transform ', 'your wellness.'],
		description: 'A Geviti membership makes longevity easy and accessible with our wide range of at-home diagnostics, innovative anti-aging therapies, and a dedicated qualified care team.',
		titlesMobile: [
			'Longevity made',
			'accessible. Data driven',
			'anti-aging care.',
		],
		image: '/images/membership/hero.png',
		imageMobile: '/images/membership/compressed/hero_mobile.webp',
		btnCta: {
			text: 'Join Geviti',
			href: '/onboarding',
			externalLink: false,
		},
		btnCta2: {
			href: '/products',
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
	biomakers: {
		data: [
			'Thyroid Cascade',
			'Luteinizing Hormone (LH)',
			'Total Testosterone',
			'Free Testosterone',
			'Chloride',
			'Globulin, Total',
			'Calcium',
			'Alkaline Phosphatase',
			'A/G Ratio',
			'Bilirubin',
			'Blood Urea Nitrogen (BUN)',
			'Sodium',
			'Potassium',
			'Glucose',
			'Total Protein',
			'Carbon Dioxide (CO2)',
			'Alanine Aminotransferase (ALT)',
			'Aspartate Aminotransferase (AST)',
			'Creatinine',
			'BUN/Creatinine Ratio',
			'Estimated Glomerular Filtration Rate (eGFR)',
			'HbA1C',
			'Red Blood Cell Count (RBC)',
			'White Blood Cell Count (WBC)',
			'Hemoglobin (HGB)',
			'Hematocrit (HCT)',
			'Mean Corpuscular Volume (MCV)',
			'Mean Corpuscular Hemoglobin (MCH)',
			'Mean Corpuscular Hemoglobin Concentration (MCHC)',
			'Red Cell Distribution Width (RDW)',
			'Platelet Count',
			'Neutrophils (Absolute and Percent)',
			'Lymphocytes (Absolute and Percent)',
			'Monocytes (Absolute and Percent)',
			'Eosinophils (Absolute and Percent)',
			'Basophils (Absolute and Percent)',
			'Immature Granulocytes (Absolute and Percent)',
			'Immature Cells (Absolute Count)',
			'Total Cholesterol',
			'High-Density Lipoprotein (HDL) Cholesterol',
			'Low-Density Lipoprotein (LDL) Cholesterol (calculated)',
			'Triglycerides',
			'sex hormone binding globulin (SHBG) ',
			'Very Low-Density Lipoprotein (VLDL) Cholesterol (calculated)',
			'Prostate-Specific Antigen (PSA)',
		],
	},
	choosegivity: {
		data: [
			'Because why leave home for better care?',
			'Everything is streamlined and made easy.',
			'Geviti makes cutting edge care available.',
			'Optimizing hormones doesn’t have to be hard!',
		],
	},
	steps: {
		preTitle: 'become a member',
		title: 'Start your health journey <br class="lg:hidden"/>with a full blood panel',
		description: 'Membership journey starts with choosing a “Deep Dive” diagnostic. We’ll draw your blood from the comfort of your home.',
		list: [
			{
				id: 'step-1',
				title:
					'Become a member by <br class="max-lg:hidden" />purchasing a “Deep Dive” <br class="max-lg:hidden" />diagnostic package',
				icon: UserTag,
			},
			{
				id: 'step-2',
				title:
					'Complete your at-home blood <br class="max-lg:hidden" />draw with our mobile <br class="max-lg:hidden" />phlebotomy team',
				icon: DropIcon,
				iconMobile: DropIcon,
			},
			{
				id: 'step-3',
				title:
					'Review results and tailored <br class="max-lg:hidden" />protocol with your designated <br class="max-lg:hidden" />care team',
				icon: FavFolder,
			},
			{
				id: 'step-4',
				title:
					'Receive your tailor-made <br class="max-lg:hidden" />protocols in the mail and <br class="max-lg:hidden" />track your progress',
				icon: Graph,
			},
		],
	},
	slider: {
		data: [
			{
				title: 'Data-driven health and wellness, made simple.',
				heading:
					'The ultimate wellness membership for as low as $99 per month.',
				subheading:
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
				hide: 'hidden',
				img: '/images/membership/men-with-boll.png',
			},
			{
				title: 'Data-driven health and wellness, made simple.',
				heading: 'Doctor  monitored cutting edge care',
				subheading:
					'Geviti offers a comprehensive care team for our clients. Instead of having to choose between a healthcare provider and a health coach, Geviti provides a solution where the two collaborate to create the ultimate longevity regimen.',
				list: [],
				hide: 'flex',
				img: '/images/membership/slider2.png',
			},
			{
				title: 'Data-driven health and wellness, made simple.',
				heading: 'A complete wellness team in your pocket',
				subheading: ' ',
				list: [
					'Hormone Therapy',
					'Anti-aging Peptides',
					'Medical Weight Loss',
					'Sexual Health Medication',
					'Nootropics and Brain Health',
					'And More.',
				],
				hide: 'flex',
				img: '/images/membership/sider3.png',
			},
			{
				title: 'Data-driven health and wellness, made simple.',
				heading: 'Biannual At-Home Full Panels ',
				subheading:
					'Americans may go several years without getting their bloodwork done. This can be the difference between life and death. Geviti makes bloodwork easy with our nationwide team of phlebotomists Every 6 months, we’ll come to you and perform a full panel.',
				list: [],
				hide: 'flex',
				img: '/images/membership/slider4.png',
			},
		],
	},
	pricing: {
		data: [
			{
				name: 'Essentials Diagnostic',
				price: '299',
				biomakers: '45',
				button: 'primary',
				bg: '#F5FBFF',
				text: 'text-primary',
				hide: 'hidden',
			},
			{
				name: 'Essentials Diagnostic',
				price: '469',
				biomakers: '45',
				button: 'secondary',

				bg: '#181A1C',
				text: 'text-white',
				hide: '',
			},
			{
				name: 'Essentials Diagnostic',
				price: '299',
				biomakers: '45',
				button: 'primary',
				bg: '#F5FBFF',
				text: 'text-primary',
				hide: 'hidden',
			},
		],
		features: [
			'At-home phlebotomy blood draw',
			'Full biomarker results report',
			'Smart supplement recommendation',
			'Bloodwork results telehealth review',
			'Month one membership included',
		],
		others: [
			'Free telehealth consults',
			'Designated certified health coach',
			'At-home bloodwork',
			'Free semi-annual bloodwork',
			'Affordable treatments',
			'Included medical supplies',
			'Custom Smart Supplements',
			'Everything direct to your door',
			'Wholesale cost additional testing',
			'Wholesale cost supplements',
			'DNA and bloodwork options',
			'Data-driven tech platform',
			'Integrated mobile app',
		],
	},
	faq: {
		data: [
			{
				title: 'What states is Geviti in?',
				content:
					'As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.',
			},
			{
				title:
					'What “Deep-dive Diagnostic” is included semi-annually with the membership?',
				content: 'Content for Accordion Item 2',
			},
			{
				title: 'What is the membership cancellation and refund policy?',
				content: 'Content for Accordion Item 3',
			},
			{
				title:
					'Are the cost of supplements or prescription included in the membership fee?',
				content: 'Content for Accordion Item 3',
			},
			{
				title:
					'What if I have recently done labs? Do I still need to purchase a diagnostic package?',
				content: 'Content for Accordion Item 3',
			},
			{
				title: 'Does a blood panel guarantee access to specific treatments?',
				content: 'Content for Accordion Item 3',
			},
		]
	},
	products: {
		title: 'Discover Geviti',
		description: 'Browse our wide range of products!'
	},
	banner: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
			'Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.',
		image: '/images/membership/compressed/banner-member.webp',
		imageMobile: '/images/membership/compressed/banner-member-mobile.webp',
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Start Now',
		},
	},
};

export default membershipData;
