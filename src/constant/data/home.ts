const homeData = {
	hero: {
		preTitle: 'Functional Medicine Online',
		title: '<p><span style="font-weight: 600;">Get Started</span> With Geviti</p>',
		description: '<span>Unlock a Healthier You: Personalized Anti-Aging Plans with Telehealth Hormone Therapy, Peptides & More. Feel Younger, Longer.</span>',
		descriptionMobile: '<span>Telehealth Hormone Therapy, Peptide Therapy &<br/>More. Feel Younger, Longer.</span>',
		image: '/images/home/hero_1.webp',
		imageMobile: '/images/home/hero_mobile.webp',
		mainKeys: [
			{
				image: '/images/icons/codepen.svg',
				text: '<p>Select your<br/>bloodwork panel.</p>'
			},
			{
				image: '/images/icons/settings.svg',
				text: '<p>Do at-home <br/>blood test.</p>'
			},
			{
				image: '/images/icons/smile.svg',
				text: '<p>Meet with<br/> your clinician.</p>'
			},
			{
				image: '/images/icons/truck.svg',
				text: '<p>Get treatment in<br/> the mail.</p>'
			},
		]
	},
	features: {
		image: '/images/home/dashboard.webp',
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
		description: 'Begin your personalized healthcare journey with us today.',
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
			price: '$300',
			priceNote: 'one time',
			priceThen: 'then $99',
			priceThenNote: 'monthly',
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
			price: '$475',
			priceNote: 'one time',
			priceThen: 'then $99',
			priceThenNote: 'monthly',
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
			title: 'Ultimate Men’s Bloodwork Panel',
			price: '$605',
			priceNote: 'one time',
			priceThen: 'then $99',
			priceThenNote: 'monthly',
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
		}
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
				image: '/images/products/learnmore-1.jpeg',
				date: 'July 21, 2023',
				title: 'Blog Title Goes Here',
				subtitle: 'For those needing a fundamental at-home blood panel for key health markers.'
			},
			{
				id: 2,
				image: '/images/products/learnmore-2.jpeg',
				date: 'July 21, 2023',
				title: 'Blog Title Goes Here',
				subtitle: 'For those needing a fundamental at-home blood panel for key health markers.'
			},
			{
				id: 3,
				image: '/images/products/learnmore-3.jpeg',
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
			ultimate: true
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
	]
};

export default homeData;