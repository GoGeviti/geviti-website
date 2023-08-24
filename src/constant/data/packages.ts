const packagesData = [
	{
		id: 1,
		name: 'Tier 1',
		price: 124.99,
		description: 'Includes the following tests',
		value: '$300+',
		components: [
			{
				name: 'TSH',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'LH',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Testosterone, Total',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Testosterone, Free',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Comp. Metabolic Panel (14)',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'HbA1C',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'CBC',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Lipid Panel',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
		]
	},
	{
		id: 2,
		name: 'Tier 2',
		price: 299.99,
		description: 'Includes all tests from Tier 1, plus...',
		value: '$1,000+',
		components: [
			{
				name: 'FSH',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Estradiol',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'DHEA',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'IGF-1',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Homocyst(e)ine',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Magnesium',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Apo B',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Vitamin D, 25-Hydroxy',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'PSA',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'ALT',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'AST',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'C-Reactive Protein',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Lipoprotein A',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
		]
	},
	{
		id: 3,
		name: 'Tier 3 Male',
		price: 429.99,
		description: 'A comprehensive panel specifically designed for men, includes all tests from Tier 2, plus:',
		value: '$1500+',
		components: [
			{
				name: 'Thyroid Cascade',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'SHBG',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Cortisol - AM',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Growth Hormone',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Vitamin B12',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Ferritin',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Iron and TIBC',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Free T4',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}
		]
	},
	{
		id: 4,
		name: 'Tier 3 Female',
		price: 339.99,
		description: 'Designed for women, includes all tests from Tier 2, plus...',
		value: '$1400+',
		components: [
			{
				name: 'Progesterone',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Prolactin',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Cortisol - AM',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Thyroid Cascade',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Vitamin B12',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Ferritin',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Iron and TIBC',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				name: 'Free T4',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}
		]
	},
	{
		id: 5,
		name: 'No Bloodwork Consultation',
		price: 199,
		description: 'For those who are interested in our products that don’t require a bloodwork panel, such as NAD, or Glutathione, simply schedule an initial consultation. It is $199, then $99/month following.',
		value: '$300',
		components: []
	},
	{
		id: 6,
		name: 'Mobile Phlebotomy',
		price: 34.99,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		value: '',
		components: []
	},
	{
		id: 7,
		name: 'Genetic Test',
		price: 199.00,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		value: '',
		components: []
	},
	{
		id: 8,
		name: 'Initial Consultation',
		price: 139.99,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		value: '',
		components: []
	},
	{
		id: 9,
		name: 'Monthly Membership',
		price: 99.00,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		value: '',
		components: []
	}
];

export default packagesData;