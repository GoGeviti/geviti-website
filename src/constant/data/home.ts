const homeData = {
	hero: {
		preTitle: 'GET STARTED WITH GEVITI',
		title: 'Live Long, Feel Good',
		description: '<span class="max-lg:hidden">Join us and become the best version of yourself. Personalized plans to make you look and feel better for longer. Hormones, peptides, supplements, and more. We can give your body what it needs to attack aging. All access in the palm of your hand. Say \'hello to a younger, healthier you.</span><span class="lg:hidden">Join us and become the best version of yourself. Hormones, peptides, supplements, and more. Give your body what it needs to attack aging. All access in the palm of your hand.</span>',
		image: '/images/home/hero.jpeg',
		imageMobile: '/images/home/hero_mobile.png',
		mainKeys: [
			{
				image: '/images/icons/codepen.svg',
				text: 'Comprehensive'
			},
			{
				image: '/images/icons/settings.svg',
				text: 'Personalized'
			},
			{
				image: '/images/icons/helix.svg',
				text: 'Innovative'
			},
			{
				image: '/images/icons/truck.svg',
				text: 'To Your Door'
			},
		]
	},
	features: {
		image: '/images/home/dashboard.png',
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
		title: 'Select Your Package',
		description: 'Begin your personalized healthcare journey with us today. An initial consultation is included at just $139.',
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
	sliderPackageImages: [
		'/images/home/package_1.png',
		'/images/home/package_1.png'
	]
};

export default homeData;