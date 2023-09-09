const packagesData = [
	{
		id: 1,
		name: 'Essential Health Check',
		price: 124.99,
		description: 'Includes a foundational set of tests for general health assessment:',
		value: '$300+',
		shopify_variant_id: '46434899755298:1',
		components: [
			{
				name: 'Thyroid Cascade',
				description: 'A series of tests evaluating thyroid function. It starts with TSH and can reflex to Free T4, Free T3, and Anti-TPO based on results.'
			},
			{
				name: 'LH (Luteinizing Hormone)',
				description: 'A hormone regulating the menstrual cycle and ovulation in females and testosterone production in males.'
			},
			{
				name: 'Testosterone, Total',
				description: 'Measures the total amount of testosterone, a male sex hormone also present in females.'
			},
			{
				name: 'Testosterone, Free',
				description: 'Assesses the unbound testosterone in the blood, indicating the active form of the hormone.'
			},
			{
				name: 'Comp. Metabolic Panel (14)',
				description: 'A comprehensive blood test measuring glucose, calcium, and electrolytes, providing insights into heart, kidney, and muscle function.'
			},
			{
				name: 'HbA1C',
				description: 'Indicates average blood sugar levels over the past 2-3 months, used for diagnosing and monitoring diabetes.'
			},
			{
				name: 'CBC (Complete Blood Count)',
				description: 'Evaluates different blood components, offering insights into overall health and potential disorders like anemia.'
			},
			{
				name: 'Lipid Panel',
				description: 'Assesses fats in the blood, including cholesterol and triglycerides, to evaluate heart disease risk.'
			},
		]
	},
	{
		id: 2,
		name: 'Comprehensive Health Dive',
		price: 299.99,
		description: 'Includes all tests from Essential Health Check, plus:',
		value: '$1,000+',
		shopify_variant_id: '46434900541730:1',
		components: [
			{
				name: 'FSH (Follicle Stimulating Hormone)',
				description: 'Regulates reproductive processes, including the menstrual cycle and sperm production.'
			},
			{
				name: 'Estradiol',
				description: 'A form of estrogen, vital for reproductive and sexual function in females.'
			},
			{
				name: 'DHEA (Dehydroepiandrosterone)',
				description: 'A precursor steroid hormone leading to the production of androgens and estrogens.'
			},
			{
				name: 'IGF-1 (Insulin-like Growth Factor 1)',
				description: 'A hormone influencing growth and development and having anabolic effects in adults.'
			},
			{
				name: 'Homocyst(e)ine',
				description: 'An amino acid; elevated levels can indicate a higher risk of heart disease.'
			},
			{
				name: 'Magnesium',
				description: 'An essential mineral crucial for numerous biochemical reactions in the body.'
			},
			{
				name: 'Vitamin D, 25-Hydroxy',
				description: 'Indicates vitamin D status, essential for bone health and immune function.'
			},
			{
				name: 'PSA (Prostate-Specific Antigen)',
				description: 'A marker for prostate health; elevated levels can suggest prostate conditions.'
			},
			{
				name: 'C-Reactive Protein',
				description: 'Indicates inflammation in the body, which can be a marker for disease.'
			},
			{
				name: 'Apo B',
				description: 'A main protein in LDL cholesterol, used to assess heart disease risk.'
			},
			{
				name: 'Lipoprotein A',
				description: 'A cholesterol type; elevated levels can increase heart disease risk.'
			},
		]
	},
	{
		id: 3,
		name: 'Ultimate Men\'s Health Assessment ',
		price: 429.99,
		description: 'A comprehensive panel specifically designed for men, includes all tests from Comprehensive Health Dive, plus:',
		value: '$1,500+',
		shopify_variant_id: '46434905719074:1',
		components: [
			{
				name: 'Insulin',
				description: 'Regulates blood sugar levels, and its assessment can indicate metabolic health.'
			},
			{
				name: 'SHBG (Sex Hormone Binding Globulin)',
				description: 'Binds to sex hormones, affecting their bioavailability.'
			},
			{
				name: 'Cortisol - AM',
				description: 'A stress hormone, with levels peaking in the morning.'
			},
			{
				name: 'Growth Hormone',
				description: 'Stimulates growth, cell reproduction, and regeneration.'
			},
			{
				name: 'Vitamin B12',
				description: 'Essential for nerve health, brain function, and red blood cell formation.'
			},
			{
				name: 'Ferritin',
				description: 'Indicates iron storage in the body, helping diagnose iron-related disorders.'
			},
			{
				name: 'Iron and TIBC',
				description: 'Measures blood iron and the body\'s capacity to bind iron.'
			},
		]
	},
	{
		id: 4,
		name: 'Ultimate Women\'s Health Assessment',
		price: 339.99,
		description: 'A comprehensive panel specifically designed for women, includes all tests from Comprehensive Health Dive, plus:',
		value: '$1,400+',
		shopify_variant_id: '46434916598050:1',
		components: [
			{
				name: 'Progesterone',
				description: 'A female hormone vital for the menstrual cycle and pregnancy.'
			},
			{
				name: 'Prolactin',
				description: 'Influences reproductive functions and milk production.'
			},
			{
				name: 'Insulin',
				description: 'Regulates blood sugar levels, and its assessment can indicate metabolic health.'
			},
			{
				name: 'Cortisol - AM',
				description: 'A stress hormone, with levels peaking in the morning.'
			},
			{
				name: 'Vitamin B12',
				description: 'Essential for nerve health, brain function, and red blood cell formation.'
			},
			{
				name: 'Ferritin',
				description: 'Indicates iron storage in the body, helping diagnose iron-related disorders.'
			},
			{
				name: 'Iron and TIBC',
				description: 'Measures blood iron and the body\'s capacity to bind iron.'
			}
		]
	},
	{
		id: 5,
		name: 'No Bloodwork Consultation',
		price: 169,
		description: 'For those who are interested in our products that don’t require a bloodwork panel, such as NAD, or Glutathione, simply schedule an initial consultation. It is $169, then $99/month following. Medical history must be provided. * ',
		value: '$300',
		components: [],
		shopify_variant_id: '46553675596066:1',
	}
];

export default packagesData;