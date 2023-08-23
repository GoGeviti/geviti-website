const packagesData = [
	{
		state: {
			value: 'arizona-1',
			label: 'Arizona 1'
		},
		list: [
			{
				id: 1,
				name: 'Tier 1',
				newPrice: '$104.99',
				description: 'Includes the following tests',
				oldPrice: '$300',
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
				newPrice: '$256',
				description: 'Includes all tests from Tier 1, plus...',
				oldPrice: '$300',
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
				newPrice: '$409.99',
				description: 'A comprehensive panel specifically designed for men, includes all tests from Tier 2, plus:',
				oldPrice: '$300',
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
				newPrice: '$319.99',
				description: 'Designed for women, includes all tests from Tier 2, plus...',
				oldPrice: '$300',
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
				newPrice: '$199',
				description: 'For those who are interested in our products that don’t require a bloodwork panel, such as NAD, or Glutathione, simply schedule an initial consultation. It is $199, then $99/month following.',
				oldPrice: '$300',
				components: []
			},
		]
	},
	{
		state: {
			value: 'arizona-2',
			label: 'Arizona 2'
		},
		list: [
			{
				id: 1,
				name: 'Tier 1',
				newPrice: '$104.99',
				description: 'Includes the following tests',
				oldPrice: '$300',
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
				newPrice: '$256',
				description: 'Includes all tests from Tier 1, plus...',
				oldPrice: '$300',
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
				newPrice: '$409.99',
				description: 'A comprehensive panel specifically designed for men, includes all tests from Tier 2, plus:',
				oldPrice: '$300',
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
				newPrice: '$319.99',
				description: 'Designed for women, includes all tests from Tier 2, plus...',
				oldPrice: '$300',
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
				newPrice: '$199',
				description: 'For those who are interested in our products that don’t require a bloodwork panel, such as NAD, or Glutathione, simply schedule an initial consultation. It is $199, then $99/month following.',
				oldPrice: '$300',
				components: []
			},
		]
	},
	{
		state: {
			value: 'arizona-3',
			label: 'Arizona 3'
		},
		list: [
			{
				id: 1,
				name: 'Tier 1',
				newPrice: '$104.99',
				description: 'Includes the following tests',
				oldPrice: '$300',
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
				newPrice: '$256',
				description: 'Includes all tests from Tier 1, plus...',
				oldPrice: '$300',
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
				newPrice: '$409.99',
				description: 'A comprehensive panel specifically designed for men, includes all tests from Tier 2, plus:',
				oldPrice: '$300',
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
				newPrice: '$319.99',
				description: 'Designed for women, includes all tests from Tier 2, plus...',
				oldPrice: '$300',
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
				newPrice: '$199',
				description: 'For those who are interested in our products that don’t require a bloodwork panel, such as NAD, or Glutathione, simply schedule an initial consultation. It is $199, then $99/month following.',
				oldPrice: '$300',
				components: []
			},
		]
	}
];

export default packagesData;