const productListData = {
	preTitle: 'GET STARTED WITH GEVITI',
	title: 'Our Products',
	categoriesDescription: {
		'Hormone Therapy': 'To explore our range of functional medicines, an initial consultation or membership plan is essential. This ensures personalized product recommendations tailored to your requirements.',
		'Longevity': 'To explore our range of functional medicines, an initial consultation or membership plan is essential. This ensures personalized product recommendations tailored to your requirements.',
		'Sexual Function': 'To explore our range of functional medicines, an initial consultation or membership plan is essential. This ensures personalized product recommendations tailored to your requirements.'
	},
	filters: [
		{
			id: 'category',
			name: 'Category',
			options: [
				{ value: 'Hormone Therapy', label: 'Hormone Therapy', checked: true },
				{ value: 'Longevity', label: 'Longevity', checked: true },
				{ value: 'Sexual Function', label: 'Sexual Function', checked: true }
			],
		},
		{
			id: 'ingredients',
			name: 'Ingredients',
			options: [],
		},
		{
			id: 'bloodTest',
			name: 'Blood test required',
			options: [
				{ value: 'yes', label: 'Yes', checked: true },
				{ value: 'no', label: 'No', checked: true },
			],
		},
		{
			id: 'benefits',
			name: 'Benefits',
			options: [],
		},
	]
};

export default productListData;