const productListData = {
	preTitle: 'GET STARTED WITH GEVITI',
	title: 'Our Products',
	categoriesDescription: {
		'Hormone Therapy':
			'Discover our hormone therapy options with an essential initial consultation, membership, and bloodwork package. Get tailored, personalized recommendations for your needs.',
		Longevity:
			'Dive into our selection of functional medicines. For certain products, bloodwork may be necessary, guaranteeing recommendations that align with your unique needs.',
		'Sexual Function':
			'Discover our sexual function medicine offerings. While an initial consultation and membership are crucial, blood tests might not be. Get recommendations perfectly aligned with your needs.',
	},
	filters: [
		{
			id: 'ingredients',
			name: 'Ingredients',
			options: [
				{ value: 'Hormone Therapy', label: 'Hormone Therapy', checked: false },
				{ value: 'Longevity', label: 'Longevity', checked: false },
				{ value: 'Sexual Function', label: 'Sexual Function', checked: false },
			],
		},
		{
			id: 'bloodTest',
			name: 'Blood test required',
			options: [
				{ value: true, label: 'Yes', checked: false },
				{ value: false, label: 'No', checked: false },
			],
		},
		{
			id: 'benefits',
			name: 'Benefits',
			options: [
				{
					value: 'Hormonal Balance & Enhancement',
					label: 'Hormonal Balance & Enhancement',
					checked: false,
				},
				{
					value: 'Muscle & Physical Performance',
					label: 'Muscle & Physical Performance',
					checked: false,
				},
				{
					value: 'Metabolic & Blood Sugar Management',
					label: 'Metabolic & Blood Sugar Management',
					checked: false,
				},
				{
					value: 'Cellular Health & Detoxification',
					label: 'Cellular Health & Detoxification',
					checked: false,
				},
				{
					value: 'Sexual Health & Performance',
					label: 'Sexual Health & Performance',
					checked: false,
				},
			],
		},
	],
};

export default productListData;
