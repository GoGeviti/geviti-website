const marketplaceData = {
	hero: {
		preTitle: 'Welcome to the Geviti',
		title: 'Marketplace',
		description: 'Making healthcare frictionless. Our mission is to put YOUR health back in YOUR hands. With more advanced screening options, cutting edge products, and member-only discounts, our marketplace is here for you.',
		search: 'Search Products',
		product: [
			{
				name: 'Sermorelin Injections',
				kind: 'Peptide Therapy',
				price: '$15.99',
				desc: 'Product images are for display purposes; actual packaging from US-based pharmacies may vary.',
				image: '/images/marketplace/sermorelin.webp'
			},
			{
				name: 'NAD+ Injections',
				kind: 'Peptide Therapy',
				price: '$15.99',
				desc: 'Product images are for display purposes; actual packaging from US-based pharmacies may vary.',
				image: '/images/marketplace/nad.webp'
			},
			{
				name: 'Oral Testosterone (Kyzatrex)',
				kind: 'Hormone Therapy',
				price: '$15.99',
				desc: 'Product images are for display purposes; actual packaging from US-based pharmacies may vary.',
				image: '/images/marketplace/oral.webp'
			}
		]
	},
	categories: {
		list: [
			{
				title: 'Blood Tests 🩸',
				desc: 'Choose from a variety of different blood tests. Mobile phlebotomy is optional! '
			},
			{
				title: 'Genetic Tests  🧬',
				desc: 'Choose from a variety of different genetic and epigentic tests for greater insight! '
			},
			{
				title: 'Other Tests  🩺',
				desc: 'Take more control of your health with out at-home gut health check!'
			},
			{
				title: 'Peptide Therapy 🧘',
				desc: 'Choose from a variety of different peptide therapy option. A clinician meeting may be necessary. '
			},
			{
				title: 'Hormone Therapy 💉',
				desc: 'Choose from a variety of different hormone therapy options. Clinician approval will  be necessary. '
			},
			{
				title: 'Supplements 💊',
				desc: 'Choose from a variety of different supplement options. This is offered to you at our wholesale pricing!'
			},
		],
	},
	cta: {
		title: 'Don’t have what you need?',
		subtitle: 'Feel free to reach out! With our extensive pharmacy and practitioner network, we may be able to help!',
		btnCta: {
			title: 'Contact Us',
			href: '/'
		}

	},
};

export default marketplaceData;