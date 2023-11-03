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
			title: 'Biomarkers Tested',
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
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Thyroid Cascade',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'LH (Lutheinizing Hormone)',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Total Testosterone',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Free Testosterone',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Comprenhensive Metabolic Panel',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'HbA1C',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Complete Blood Count',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Lipid Panel',
			essential: true,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'FSH (Follicle Stimulating Hormone)',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Estradiol',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'DHEA (Dehydroepiandrosterone)',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'IGF-1 (Insulin-like Growth Factor 1)',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Homocysteine',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Magnesium',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Vitamin D, 25-Hydroxy',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'PSA (Prostate-Specific Antigen)',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'C-Reactive Protein',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Apo B',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Lipoprotein A',
			essential: false,
			comprehensive: true,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'ALT (Alanine Aminotransferase)',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'AST (Aspartate Aminotransferase)',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Insulin',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'SHBG',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: false,
		},
		{
			title: 'Cortisol',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Growht Hormone',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: false,
		},
		{
			title: 'Vitamin B12',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Ferritin',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Iron and TIBC',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Free T4',
			essential: false,
			comprehensive: false,
			ultimateMale: true,
			ultimateFemale: true,
		},
		{
			title: 'Prolactin',
			essential: false,
			comprehensive: false,
			ultimateMale: false,
			ultimateFemale: true,
		},
		{
			title: 'Progesterone',
			essential: false,
			comprehensive: false,
			ultimateMale: false,
			ultimateFemale: true,
		},
	]
};

export default homeData;