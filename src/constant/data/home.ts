const homeData = {
	hero: {
		preTitle: 'Functional Medicine Online',
		title: '<p><span style="font-weight: 600;">Get Started</span> With Geviti</p>',
		description: '<span>Your bloodwork panel is the entry-fee to the Geviti online ecosystem where you can receive telehealth hormone therapy, peptides & more.</span>',
		image: '/images/home/compressed/hero_1.webp',
		imageMobile: '/images/home/compressed/hero_mobile.webp',
		mainKeys: [
			{
				image: '/images/icons/codepen.svg',
				text: '<p>Select your<br/> bloodwork panel.</p>'
			},
			{
				image: '/images/icons/blood-drop.svg',
				text: '<p>Do at-home <br/> blood test.</p>'
			},
			{
				image: '/images/icons/smile.svg',
				text: '<p>Video call<br/> your clinician.</p>'
			},
			{
				image: '/images/icons/truck.svg',
				text: '<p>Get treatment in<br/> the mail.</p>'
			},
		]
	},
	features: {
		image: '/images/home/compressed/dashboard.webp',
		preTitle: 'digital health management',
		title: 'Digital Health Management<br />at Your Fingertips',
		description: 'With our intuitive web and mobile app, Geviti provides a seamless digital health ecosystem for you.',
		action: {
			id: 'start-now',
			name: 'Start Now',
			href: '#packages',
			externalLink: false
		},
		list: [
			{
				title: 'Health & Goal Tracking',
				description: 'Keep an eye on your health metrics in real time and track your progress towards wellness goals. Our doctors, nurses, and AI monitor your metrics as well to ensure the best care possible'
			},
			{
				title: 'Direct Access to Experts',
				description: 'Connect with wellness specialists via secure chat or book Telehealth calls for personalized guidance. Receive guidance in our web and mobile application.'
			},
			{
				title: 'Smart Device Integration',
				description: 'Sync with your smart devices for a comprehensive view of your health, powered by AI.',
				icons: [
					'/images/icons/device_1.svg',
					'/images/icons/device_2.svg',
					'/images/icons/device_3.svg'
				]
			},
			{
				title: 'AI-Driven',
				description: 'Enjoy personalized recommendations based on your health patterns, helping you stay on track with your wellness journey.'
			}
		]
	},
	packages: {
		preTitle: 'TAILORED TO YOUR SPECIFIC NEEDS',
		title: 'Choose A Blood Panel',
		description: 'Your bloodwork is your entry-fee into Geviti’s online clinic.',
		titlePackageList: 'Select one of the following options',
		helpText: 'Need Help?'
	},
	products: {
		title: 'Discover Geviti',
		description: 'Browse our wide range of products!',
		viewAll: {
			text: 'View All Products',
			href: '/products'
		}
	},
	bloodPanel: [
		{
			title: 'Essential Bloodwork Panel',
			price: '$299',
			priceNote: '.99 one time',
			priceThen: 'then $75',
			priceThenNote: 'per month',
			isForMale: true,
			isForFemale: true,
			desc: 'For those needing a fundamental at-home blood panel for key health markers.',
			isPopular: false,
			btn: 'Get Started',
			components: [
				{
					name: 'Biomarkers Tested',
					description: '39+'
				},
				{
					name: 'At-home Blood Draw',
					description: true
				},
				{
					name: 'Personal Assigned Clinician',
					description: true
				},
				{
					name: 'Telehealth Consult Included',
					description: true
				},
				{
					name: 'Prescription Therapy Access',
					description: true
				},
				{
					name: 'For Males and Females',
					description: true
				},
				{
					name: 'Custom Treatment Plan',
					description: true
				},
				{
					name: 'Online Patient Dashboard',
					description: true
				},
				{
					name: 'IOS Application Access',
					description: true
				},
				{
					name: 'AI Health Metric Tracking',
					description: true
				},
			]
		},
		{
			title: 'Comprehensive Bloodwork Panel',
			price: '$469',
			priceNote: '.99 one time',
			priceThen: 'then $75',
			priceThenNote: 'per month',
			isForMale: true,
			isForFemale: true,
			desc: 'For those wanting an expanded at-home blood panel for a deeper health view.',
			isPopular: true,
			btn: 'Get Started',
			components: [
				{
					name: 'Biomarkers Tested',
					description: '39+'
				},
				{
					name: 'At-home Blood Draw',
					description: true
				},
				{
					name: 'Personal Assigned Clinician',
					description: true
				},
				{
					name: 'Telehealth Consult Included',
					description: true
				},
				{
					name: 'Prescription Therapy Access',
					description: true
				},
				{
					name: 'For Males and Females',
					description: true
				},
				{
					name: 'Custom Treatment Plan',
					description: true
				},
				{
					name: 'Online Patient Dashboard',
					description: true
				},
				{
					name: 'IOS Application Access',
					description: true
				},
				{
					name: 'AI Health Metric Tracking',
					description: true
				},
			]
		},
		{
			title: 'Ultimate Bloodwork Panel',
			price: '$599',
			priceNote: '.99 one time',
			priceThen: 'then $75',
			isForMale: true,
			isForFemale: false,
			priceThenNote: 'per month',
			desc: 'For men aiming for an exhaustive at-home blood panel for total health scrutiny.',
			isPopular: false,
			btn: 'Get Started',
			components: [
				{
					name: 'Biomarkers Tested',
					description: '39+'
				},
				{
					name: 'At-home Blood Draw',
					description: true
				},
				{
					name: 'Personal Assigned Clinician',
					description: true
				},
				{
					name: 'Telehealth Consult Included',
					description: true
				},
				{
					name: 'Prescription Therapy Access',
					description: true
				},
				{
					name: 'For Males and Females',
					description: false
				},
				{
					name: 'Custom Treatment Plan',
					description: true
				},
				{
					name: 'Online Patient Dashboard',
					description: true
				},
				{
					name: 'IOS Application Access',
					description: true
				},
				{
					name: 'AI Health Metric Tracking',
					description: true
				},
			]
		},
	],
	sliderPackageImages: [
		'Select your package.',
		'Complete your testing.',
		'Receive your medication.',
		'Track your progress.',
	],

	learnMore: {
		preTitle: 'Research',
		title: 'Learn More',
		list: [
			{
				id: 1,
				image: '/images/products/compressed/learnmore-1.webp',
				date: 'July 21, 2023',
				title: 'Blog Title Goes Here',
				subtitle: 'For those needing a fundamental at-home blood panel for key health markers.'
			},
			{
				id: 2,
				image: '/images/products/compressed/learnmore-2.webp',
				date: 'July 21, 2023',
				title: 'Blog Title Goes Here',
				subtitle: 'For those needing a fundamental at-home blood panel for key health markers.'
			},
			{
				id: 3,
				image: '/images/products/compressed/learnmore-3.webp',
				date: 'July 21, 2023',
				title: 'Blog Title Goes Here',
				subtitle: 'For those needing a fundamental at-home blood panel for key health markers.'
			}
		]
	},

	cta: {
		title: 'Already on HRT?',
		subtitle: 'A bloodwork package may or may not be required to switch over to Geviti as your online HRT and peptide therapy provider.',
		btnCta: {
			title: 'Contact Us',
			href: '/'
		}

	},

	tablePackage: [
		{
			title: 'Amount of Biomarkers Tested',
			description: 'A biomarker is a measurable indicator within the blood that can signal the state of health or disease, potentially offering insights into lifespan and aging processes.',
			essential: '39+',
			comprehensive: '50+',
			ultimate: '58+'
		},
		{
			title: 'At-home Blood Draw',
			essential: true,
			comprehensive: true,
			ultimate: true
		},
		{
			title: 'Personal Assigned Clinician',
			essential: true,
			comprehensive: true,
			ultimate: true
		},
		{
			title: 'Telehealth Consult Included',
			essential: true,
			comprehensive: true,
			ultimate: true
		},
		{
			title: 'Prescription Therapy Access',
			description: 'Doctors will determine if you qualify for our line of prescription-only cutting edge therapies.',
			essential: true,
			comprehensive: true,
			ultimate: true
		},
		{
			title: 'For Males and Females',
			essential: true,
			comprehensive: true,
			ultimate: false
		},
		{
			title: 'Custom Treatment Plan',
			description: 'We\'ll take a deep look into your health and build a custom anti-aging regiment with our line or HRT, peptide therapy, and anti-aging products.',
			essential: true,
			comprehensive: true,
			ultimate: true
		},
		{
			title: 'Online Patient Dashboard',
			essential: true,
			comprehensive: true,
			ultimate: true
		},
		{
			title: 'IOS Application Access',
			essential: true,
			comprehensive: true,
			ultimate: true
		},
		{
			title: 'AI Health Metric Tracking',
			essential: true,
			comprehensive: true,
			ultimate: true
		},
	],

	biomarkersTable: [
		{
			title: 'Biomarkers Tested',
			description: 'A biomarker is a measurable indicator within the blood that can signal the state of health or disease, potentially offering insights into lifespan and aging processes.',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Thyroid Cascade',
			description: 'Evaluates thyroid function and disorders with 3-4 biomarkers.',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'LH (Lutheinizing Hormone)',
			description: 'Indicates reproductive health and function.',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Total Testosterone',
			description: 'Measures overall level of male sex hormone.',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Free Testosterone',
			description: 'Assesses biologically active testosterone fraction.',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Comprenhensive Metabolic Panel',
			description: 'Provides a broad overview of metabolism and organ function with 14 biomarkers.',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'HbA1C',
			description: 'Reflects average blood sugar levels over three months.',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Complete Blood Count',
			description: 'Measures different blood cell types for overall health status with 14 biomarkers.',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Lipid Panel',
			description: 'Assesses risk for cardiovascular disease through cholesterol levels with 4 biomarkers.',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'FSH (Follicle Stimulating Hormone)',
			description: 'Integral for reproductive system functioning.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Estradiol',
			description: 'A form of estrogen important for reproductive and sexual health.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'DHEA (Dehydroepiandrosterone)',
			description: 'A hormone that\'s a precursor to sex hormones.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'IGF-1 (Insulin-like Growth Factor 1)',
			description: 'Reflects human growth hormone levels.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Homocysteine',
			description: 'Linked with cardiovascular disease risk.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Magnesium',
			description: 'Vital for muscle, nerve function, and bone health.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Vitamin D, 25-Hydroxy',
			description: 'Assesses vitamin D status related to bone health.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'PSA (Prostate-Specific Antigen)',
			description: 'Screens for prostate health issues.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'C-Reactive Protein',
			description: 'Indicates liver health.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Apo B',
			description: 'Assists in evaluating liver function.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Lipoprotein A',
			description: 'A marker for inflammation in the body.',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'ALT (Alanine Aminotransferase)',
			description: 'Involved in cholesterol metabolism; linked to heart disease',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'AST (Aspartate Aminotransferase)',
			description: 'Genetic marker associated with an increased risk of heart disease.',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Insulin',
			description: 'Monitors insulin production and blood sugar regulation.',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'SHBG',
			description: 'Binds to sex hormones and regulates their effect.',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: false,
		},
		{
			title: 'Cortisol',
			description: 'Measures stress response and adrenal function.',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Growth Hormone',
			description: 'Important for growth, metabolism, and muscle mass.',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: false,
		},
		{
			title: 'Vitamin B12',
			description: 'Essential for nerve function and blood cell production.',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Ferritin',
			description: 'Indicates the amount of stored iron in the body.',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Iron and TIBC',
			description: 'Assesses iron status and transport capacity.',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Free T4',
			essential: false,
			description: 'Directly measures active thyroid hormone levels.',
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Prolactin',
			description: 'Essential for menstrual cycle regulation and pregnancy in females.',
			essential: false,
			comprehensive: false,
			ultimateMale: false,
			ultimateFemale: true,
		},
		{
			title: 'Progesterone',
			description: 'Affects menstrual cycles and milk production.',
			essential: false,
			comprehensive: false,
			ultimateMale: false,
			ultimateFemale: true,
		},
	]
};

export default homeData;