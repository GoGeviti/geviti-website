// TODO: this is still a dummy data
const biomarkersList = [
	{
		title: 'Thyroid Cascade',
		description:
      'Evaluates thyroid function and disorders with 3-4 biomarkers.',
	},
	{
		title: 'Luteinizing Hormone (LH)',
		description: 'Indicates reproductive health and function.',
	},
	{
		title: 'Total Testosterone',
		description: 'Measures overall level of male sex hormone.',
	},
	{
		title: 'Free Testosterone',
		description: 'Assesses biologically active testosterone fraction.',
	},
	{ title: 'Chloride', description: '' },
	{ title: 'Globulin, Total', description: '' },
	{ title: 'Calcium', description: '' },
	{ title: 'Alkaline Phosphatase', description: '' },
	{ title: 'A/G Ratio', description: '' },
	{ title: 'Bilirubin', description: '' },
	{ title: 'Blood Urea Nitrogen (BUN)', description: '' },
	{ title: 'Sodium', description: '' },
	{ title: 'Potassium', description: '' },
	{ title: 'Glucose', description: '' },
	{ title: 'Total Protein', description: '' },
	{ title: 'Albumin', description: '' },
	{ title: 'Carbon Dioxide (CO2)', description: '' },
	{ title: 'Alanine Aminotransferase (ALT)', description: '' },
	{ title: 'Aspartate Aminotransferase (AST)', description: '' },
	{ title: 'Creatinine', description: '' },
	{ title: 'BUN/Creatinine Ratio', description: '' },
	{ title: 'Estimated Glomerular Filtration Rate (EGFR)', description: '' },
	{
		title: 'HbA1C',
		description: 'Reflects average blood sugar levels over three months.',
	},
	{ title: 'Red Blood Cell Count (RBC)', description: '' },
	{ title: 'White Blood Cell Count (WBC)', description: '' },
	{ title: 'Hemoglobin (HGB)', description: '' },
	{ title: 'Hematocrit (HCT)', description: '' },
	{ title: 'Mean Corpuscular Volume (MCV)', description: '' },
	{ title: 'Mean Corpuscular Hemoglobin (MCH)', description: '' },
	{
		title: 'Mean Corpuscular Hemoglobin Concentration (MCHC)',
		description: '',
	},
	{ title: 'Red Cell Distribution Width (RDW)', description: '' },
	{ title: 'Platelet Count', description: '' },
	{ title: 'Neutrophils (Absolute and Percent)', description: '' },
	{ title: 'Lymphocytes (Absolute and Percent)', description: '' },
	{ title: 'Monocytes (Absolute and Percent)', description: '' },
	{ title: 'Eosinophils (Absolute and Percent)', description: '' },
	{ title: 'Basophils (Absolute and Percent)', description: '' },
	{ title: 'Immature Granulocytes (Absolute and Percent)', description: '' },
	{ title: 'Immature Cells (Absolute Count)', description: '' },
	{ title: 'Total Cholesterol', description: '' },
	{ title: 'High-Density Lipoprotein (HDL) Cholesterol', description: '' },
	{
		title: 'Low-Density Lipoprotein (LDL) Cholesterol (calculated)',
		description: '',
	},
	{ title: 'Triglycerides', description: '' },
	{ title: 'Sex Hormone Binding Globulin (SHBG)', description: '' },
	{
		title: 'Very Low-Density Lipoprotein (VLDL) Cholesterol (calculated)',
		description: '',
	},
	{ title: 'Prostate-Specific Antigen (PSA)', description: '' },
];

const biomarkersData = [
	{
		key: 'finger_prick',
		list: biomarkersList,
	},
	{
		key: 'phlebotomy',
		list: biomarkersList,
	},
];

const productsData = {
	categories: [
		{
			id: 'men',
			title: 'Mens Products',
			slug: 'male-hormone-optimization',
		},
		{
			id: 'women',
			title: 'Womens Products',
			slug: 'female-hormone-optimization',
		},
	],
	men: {
		tabs: [
			{
				id: 1,
				title: 'Prescriptions',
				preTitle: 'Compare Testosterone optimization options',
				subCategories: [
					{
						id: 1,
						title: 'Testosterone Therapy',
						preTitle: 'Compare Testosterone optimization options',
						biomarkers: null,
					},
					{
						id: 2,
						title: 'Anti-aging Peptides',
						preTitle: 'Explore Anti-aging Peptides',
						biomarkers: null,
					},
					{
						id: 3,
						title: 'Medical Weight Loss',
						preTitle: 'See our medical weight loss options',
						biomarkers: null,
					},
					{
						id: 4,
						title: 'Sexual Health',
						preTitle: 'Explore our sexual health Solutions',
						biomarkers: null,
					},
					{
						id: 5,
						title: 'Thyroid',
						preTitle: 'Explore our Thyroid Solutions',
						biomarkers: null,
					},
				],
			},
			{
				id: 3,
				title: 'Supplements',
				preTitle: 'longeviti blends for long-term wellness',
				subCategories: [],
			},
			{
				id: 2,
				title: 'Testing Options',
				preTitle: 'Lets see how you are actually aging',
				subCategories: [
					{
						id: 1,
						title: 'Full Bloodwork Panels',
						preTitle: 'Compare member Bloodwork options',
						biomarkers: biomarkersData,
					},
					{
						id: 3,
						title: 'Finger Prick Blood Test',
						preTitle: 'At-home finger prick tests',
						biomarkers: biomarkersData,
					},
					{
						id: 2,
						title: 'Biological Age',
						preTitle: 'Lets see how you are actually aging',
						biomarkers: null,
					},
				],
			},
		],
		products: [
			{
				id: 1,
				name: 'Oral Testosterone',
				description:
          'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many.',
				sort_description: 'Oral Gel Capsule',
				price: 99,
				category: { id: 1 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/testosterone-therapy/oral-testosterone.webp',
				list: [
					'FDA Approved',
					'Bioidentical',
					'96% Efficacy',
					'Oral Capsule',
					'Twice Daily',
					'Mimics Natural Production',
				],
			},
			{
				id: 2,
				name: 'T Booster Complex',
				description:
          'The potent mix of Clomiphene, DHEA, 7-Keto-DHEA and Progesterone has been proven to significantly boost male testosterone levels without the need for exogenous testosterone replacement therapy. It\'s both safe and effective.',
				sort_description: 'Oral Tablet',
				price: 40,
				category: { id: 1 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/testosterone-therapy/testosterone-booster.webp',
				list: [
					'TRT Alternative',
					'Safe Profile',
					'Non-Invasive',
					'Oral Tablet',
					'Daily Dosing',
					'Stimulates Natural Production',
				],
			},
			{
				id: 3,
				name: 'Enclomiphene Citrate',
				description:
          'Enclomiphene Citrate stimulates natural testosterone production, offering a standalone solution or a TRT complement. This strategy enhances hormonal health without directly adding external testosterone.',
				sort_description: 'Oral Tablet',
				price: 60,
				category: { id: 1 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/testosterone-therapy/enclomiphene-citrat.webp',
				list: [
					'TRT Alternative',
					'Safe Profile',
					'Non-Invasive',
					'Oral Tablet',
					'Daily Dosing',
					'Can Boost Natural Production',
				],
			},
			{
				id: 4,
				name: 'Testosterone Cream',
				description:
          'Testosterone Cream provides a topical testosterone boost, ensuring steady absorption through the skin for consistent hormonal support. Ideal for those preferring non-injectable options, it offers controlled dosing and ease of use, catering to various treatment needs.',
				sort_description: 'Topical Cream',
				price: 50,
				category: { id: 1 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/testosterone-therapy/testosterone-cream.webp',
				list: [
					'Applied Topically',
					'Controlled Dosing',
					'Convenient Use',
					'Steady Absorption',
					'Non-Injectable',
					'Versatile Treatment',
				],
			},
			{
				id: 5,
				name: 'Testosterone Cypionate',
				description:
          'Testosterone Cypionate, a long-acting injectable testosterone, offers sustained hormone supplementation with fewer doses. Delivered via injection, it supports various treatment goals, from hormone replacement to enhancing muscle growth and vitality.',
				sort_description: '',
				price: 30,
				category: { id: 1 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/testosterone-therapy/testosterone-cypionate.webp',
				list: [
					'Sustained Release',
					'Bioidentical',
					'Versatile Use',
					'Injectable',
					'Highly Effective',
					'Flexible Dosing',
				],
			},
			{
				id: 6,
				name: 'Sermorelin Mini Troche',
				description:
          'Sermorelin Mini Troches dissolve under the tongue for rapid absorption, stimulating natural growth hormone production without the need for injections. They support anti-aging, muscle strength, and vitality.',
				sort_description: 'Sublingual Mini Troche',
				price: 75,
				category: { id: 1 },
				subCategory: { id: [2] },
				image:
          '/images/solution_media/products/anti-aging/sermorelin-mini.webp',
				list: [
					'Quick Absorption',
					'Enhances Vitality',
					'Non-Invasive',
					'Sublingual Troche',
					'Daily Dosing',
					'Stimulates Growth Hormone',
				],
			},
			{
				id: 7,
				name: 'Sermorelin Injections',
				description:
          'Sermorelin Injections stimulate natural growth hormone production through subcutaneous administration, supporting anti-aging, muscle strength, and vitality. They offer targeted, effective hormone optimization for a comprehensive wellness regimen.',
				sort_description: 'Sub-Q Injection',
				price: 105,
				category: { id: 1 },
				subCategory: { id: [2] },
				image:
          '/images/solution_media/products/anti-aging/sermorelin-injections.webp',
				list: [
					'Versatile Dosing',
					'Enhanced Vitality',
					'Anti-Aging',
					'Subcutaneous Administration',
					'Efficient Absorption',
					'Stimulates Growth Hormone',
				],
			},
			{
				id: 8,
				name: 'GHK-Cu Troche',
				description:
          'GHK-Cu Troches offer a convenient, sublingual route for the anti-aging benefits of GHK-Copper peptide, dissolving under the tongue for quick absorption. They promote skin health, wound healing, and collagen production, enhancing daily anti-aging routines with optimal bioavailability.',
				sort_description: 'Sublingual Troche',
				price: 110,
				category: { id: 1 },
				subCategory: { id: [2] },
				image: '/images/solution_media/products/anti-aging/ghk-troche.webp',
				list: [
					'Convenient Use',
					'Keeps Skin Young',
					'Anti-Aging',
					'Sublingual Delivery',
					'Highly Bioavailable',
					'Boosts Collagen Production',
				],
			},
			{
				id: 9,
				name: 'Semaglutide',
				description:
          'Semaglutide Injections mimic the GLP-1 hormone to regulate appetite and aid in significant weight reduction. Administered subcutaneously, they offer an effective solution for enhancing metabolic health and managing weight.',
				sort_description: 'Oral Gel Capsule',
				price: 105,
				category: { id: 1 },
				subCategory: { id: [3] },
				image: '/images/solution_media/products/weight-loss/semaglutide.webp',
				list: [
					'Reduces Hunger',
					'Flexible Dosing',
					'Highly Effective',
					'Subcutaneous Administration',
					'Metabolic Enhancement',
					'Mimics GLP-1',
				],
			},
			{
				id: 10,
				name: 'Tirzepatide',
				description:
          'Tirzepatide Injections offer a dual-action approach to weight management, mimicking GLP-1 and GIP to suppress appetite and promote significant weight loss. Subcutaneous administration.',
				sort_description: 'Oral Tablet',
				price: 165,
				category: { id: 1 },
				subCategory: { id: [3] },
				image: '/images/solution_media/products/weight-loss/tirzepatide.webp',
				list: [
					'Reduces Hunger',
					'Flexible Dosing',
					'Highly Effective',
					'Subcutaneous Administration',
					'Metabolic Enhancement',
					'Mimics GLP-1 and GIP',
				],
			},
			{
				id: 11,
				name: 'Tadalafil',
				description:
          'Tadalafil tablets improve sexual health by enhancing blood flow. They offer lasting effectiveness for erectile dysfunction, promoting reduced stress, better heart health, and higher self-esteem. Better for you, your partner, and your wellness. Tadalafil can be used daily, or on an as needed basis, depending on the individual.',
				sort_description: 'Oral Tablet',
				price: 70,
				category: { id: 1 },
				subCategory: { id: [4] },
				image: '/images/solution_media/products/sexual-health/tadalafil.webp',
				list: [
					'Longer Half Life',
					'Treats ED',
					'30 Tablets',
					'Treats PAH',
					'Improves Sexual Health',
					'Treats BPH symptoms',
				],
			},
			{
				id: 12,
				name: 'Peak Male Mini Troche',
				description:
          'Peak Male Mini Troche combines Oxytocin, PT-141 and Tadalafil. These compounds work together to improve overall emotional, physical and intimate well being. Comes with 10 dissolvable Troches.',
				sort_description: 'Sublingual Mini Troche',
				price: 110,
				category: { id: 1 },
				subCategory: { id: [4] },
				image: '/images/solution_media/products/sexual-health/peak-male.webp',
				list: [
					'Sublingual Troche',
					'Oxytocin',
					'PT-141',
					'Improves Intimacy',
					'Tadalafil',
					'Improves Sexual Health',
				],
			},
			{
				id: 13,
				name: 'Desiccated Thyroid',
				description:
          'Desiccated Thyroid is used to treat hypothyroidism. It supplements the body’s natural thyroid hormones helping to restore the balance of T3 and T4 levels.',
				sort_description: 'Oral Gel Capsule',
				price: 50,
				category: { id: 1 },
				subCategory: { id: [5] },
				image:
          '/images/solution_media/products/thyroid/desiccated-thyroid.webp',
				list: [
					'Enhances Energy',
					'Balances Thyroid',
					'Tablets',
					'Weight Management',
					'Mood Improvement',
					'Improves Metabolism',
				],
			},
			{
				id: 14,
				name: 'Biological Age Test',
				description:
          'A cutting-edge tool to help predict future healthspan and lifespan by comparing your epigenetic age to your chronological age. It also assesses key markers of aging across multiple physiological systems, providing valuable insights into overall health.',
				sort_description: '',
				price: 'As low as $275 per kit',
				category: { id: 2 },
				subCategory: { id: [2] },
				image:
          '/images/solution_media/products/epigenetic-testing/biological-age-test.webp',
				list: [
					'DNA Methylation',
					'Skin Aging',
					'Vascular Aging',
					'Cognitive Aging',
					'Tailored Interventions',
					'Easy Cheek Swab',
				],
			},
			{
				id: 15,
				name: 'Custom Supplements',
				description:
          'All the ingredients you need, none you don’t. Our LonGeviti Blends feature a 100% personalized mix of supplements based on your test results and health coach recommendations, sold at wholesale cost for Longeviti Members. Welcome to the future of wellness.',
				sort_description: '',
				price: 'On average $150 per 30 days',
				category: { id: 3 },
				subCategory: { id: [] },
				image:
          '/images/solution_media/products/supplements/longeviti-blend.webp',
				list: [
					'Daily Supplement Packs',
					'Personalized',
					'Highly Bioavailable',
					'No Fillers',
					'No Additives',
					'Data-driven Blends',
				],
			},
			{
				id: 16,
				name: 'Longeviti Panel',
				description:
          'The Longeviti Panel uncovers hidden risks like high glucose, imbalanced cholesterol, silent inflammation, and hormone imbalances, helping you prevent chronic diseases and take control of your future. A phlebotomist will draw your blood at home, testing 90+ biomarkers. Members receive this service free every 6 months.',
				sort_description: '',
				price:
          'as low as $300. Included in Longeviti Membership at no additional cost.',
				category: { id: 2 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/bloodwork-panels/essentials-panel.webp',
				list: [
					'At-home blood work',
					'Done by licensed phlebotomist',
					'Testing for 90+ biomarkers',
					'Key health indicators',
					'In-app results breakdown',
					'Tailored supplement pack recommendations',
				],
			},
			{
				id: 19,
				name: 'Hormone Check',
				description:
          'Features 11 key biomarkers essential for male reproductive and overall health. This test provides insights into hormone balance and vital health indicators, enabling proactive management of well-being. This test offers a holistic view of male hormonal status. ',
				sort_description: '',
				price: 'As low as $105 per kit',
				category: { id: 2 },
				subCategory: { id: [3] },
				image:
          '/images/solution_media/products/finger-prick/hormone-check-men.webp',
				list: [
					'Fingerprick Test',
					'Clinically Accurate',
					'11 biomarkers',
					'At-home blood work',
					'Easy and Accessible',
					'Less Invasive',
				],
			},
			{
				id: 20,
				name: 'Cardiovascular Check',
				description:
          'Features 8 essential biomarkers crucial for the early detection and management of potential cardiovascular issues, helping you maintain a healthy heart and prevent heart disease.',
				sort_description: '',
				price: 'As low as $90 per kit',
				category: { id: 2 },
				subCategory: { id: [3] },
				image:
          '/images/solution_media/products/finger-prick/cardiovascular-health-panel.webp',
				list: [
					'Fingerprick',
					'Clinically Accurate',
					'8 Biomarkers',
					'At-home blood work',
					'Easy and Accessible',
					'Less Invasive',
				],
			},
			{
				id: 21,
				name: 'Metabolic Check',
				description:
          'Gain insight into your metabolic health. Regular monitoring of these biomarkers is crucial for early detection and management of potential health issues such as cardiovascular disease, diabetes, liver dysfunction, and vitamin deficiencies.',
				sort_description: '',
				price: 'As low as $75 per kit',
				category: { id: 2 },
				subCategory: { id: [3] },
				image:
          '/images/solution_media/products/finger-prick/metabolic-health-panel.webp',
				list: [
					'Finger Prick Test',
					'Clinically Accurate',
					'8 Biomarkers',
					'At-home blood work',
					'Easy and Accessible',
					'Less Invasive',
				],
			},
		],
	},
	women: {
		tabs: [
			{
				id: 1,
				title: 'Prescriptions',
				preTitle: 'Compare Testosterone optimization options',
				subCategories: [
					{
						id: 1,
						title: 'Hormone Therapy',
						preTitle: 'Compare Hormone optimization options',
						biomarkers: null,
					},
					{
						id: 2,
						title: 'Anti-aging Peptides',
						preTitle: 'Explore Anti-aging Peptides',
						biomarkers: null,
					},
					{
						id: 3,
						title: 'Medical Weight Loss',
						preTitle: 'See our medical weight loss options',
						biomarkers: null,
					},
					{
						id: 4,
						title: 'Sexual Health',
						preTitle: 'Explore our sexual health Solutions',
						biomarkers: null,
					},
					{
						id: 5,
						title: 'Thyroid',
						preTitle: 'Explore our Thyroid Solutions',
						biomarkers: null,
					},
				],
			},
			{
				id: 3,
				title: 'Supplements',
				preTitle: 'longeviti blends for long-term wellness',
				subCategories: [],
			},
			{
				id: 2,
				title: 'Testing Options',
				preTitle: 'Lets see how you are actually aging',
				subCategories: [
					{
						id: 1,
						title: 'Full Bloodwork Panels',
						preTitle: 'Compare member Bloodwork options',
						biomarkers: biomarkersData,
					},
					{
						id: 3,
						title: 'Finger Prick Blood Test',
						preTitle: 'At-home finger prick tests',
						biomarkers: biomarkersData,
					},
					{
						id: 2,
						title: 'Biological Age',
						preTitle: 'Lets see how you are actually aging',
						biomarkers: null,
					},
				],
			},
		],
		products: [
			{
				id: 1,
				name: 'Oral Estradiol',
				description:
          'Oral Estradiol replenishes estrogen levels, providing a core treatment for hormonal balance. This approach supports overall hormonal health by naturally augmenting the body\'s estrogen, ideal for managing symptoms associated with estrogen deficiency.',
				sort_description: 'Product Info',
				price: 30,
				category: { id: 1 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/hormone-therapy/oral-estradiol.webp',
				list: [
					'HRT',
					'Bioidentical',
					'Safe Profile',
					'Oral Tablet',
					'Daily Dosing',
					'Enhances Natural Estrogen levels',
				],
			},
			{
				id: 2,
				name: 'Oral Progesterone',
				description:
          'Oral Progesterone enhances natural progesterone levels, offering a fundamental solution for hormonal stability. This method supports reproductive health and mood regulation by naturally boosting the body\'s progesterone supply.',
				sort_description: 'Product Info',
				price: 40,
				category: { id: 1 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/hormone-therapy/oral-progresterone.webp',
				list: [
					'Daily Dosing',
					'Safe Profile',
					'Non-Invasive',
					'Oral Tablet',
					'Regulates Mood and Sleep Cycles',
					'Supports Natural Progesterone',
				],
			},
			{
				id: 3,
				name: 'Progesterone Cream',
				description:
          'Progesterone Cream directly delivers progesterone to the body, providing a targeted approach to hormonal balance. Ideal for skin application, this cream helps stabilize mood and supports overall reproductive health by supplementing natural progesterone levels.',
				sort_description: 'Product Info',
				price: 50,
				category: { id: 1 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/hormone-therapy/progesterone-cream.webp',
				list: [
					'Applied Topically',
					'Non-injectable',
					'Non-Invasive',
					'Convenient Use',
					'Controlled Dosing',
					'Versatile Treatment',
				],
			},
			{
				id: 4,
				name: 'Estradiol Cream',
				description:
          'Estradiol Cream applies bio-identical estradiol directly to the skin. This localized treatment method enhances estrogen levels, providing relief from menopausal symptoms and supporting overall hormonal health.',
				sort_description: 'Product Info',
				price: 70,
				category: { id: 1 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/hormone-therapy/estradiol-cream.webp',
				list: [
					'Applied Topically',
					'Controlled Dosing',
					'Convenient Use',
					'Steady Absorption',
					'Non-injectable',
					'Versatile Treatment',
				],
			},
			{
				id: 5,
				name: 'Testosterone Cream',
				description:
          'Testosterone Cream enhances natural testosterone levels specifically tailored for female physiology, offering a targeted approach to hormonal balance. This topical solution boosts vitality, enhances libido, and supports overall well-being by gently increasing testosterone, crucial for optimal health in women.',
				sort_description: 'Product Info',
				price: 50,
				category: { id: 1 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/hormone-therapy/testosterone-cream.webp',
				list: [
					'Applied Topically',
					'Controlled Dosing',
					'Convenient Use',
					'Steady Absorption',
					'Non-injectable',
					'Versatile Treatment',
				],
			},
			{
				id: 6,
				name: 'Sermorelin Mini Troche',
				description:
          'Sermorelin Mini Troches dissolve under the tongue for rapid absorption, stimulating natural growth hormone production without the need for injections. They support anti-aging, muscle strength, and vitality.',
				sort_description: 'Sublingual Mini Troche',
				price: 75,
				category: { id: 1 },
				subCategory: { id: [2] },
				image:
          '/images/solution_media/products/anti-aging/sermorelin-mini.webp',
				list: [
					'Quick Absorption',
					'Enhances Vitality',
					'Non-Invasive',
					'Sublingual Troche',
					'Daily Dosing',
					'Stimulates Growth Hormone',
				],
			},
			{
				id: 7,
				name: 'Sermorelin Injections',
				description:
          'Sermorelin Injections stimulate natural growth hormone production through subcutaneous administration, supporting anti-aging, muscle strength, and vitality. They offer targeted, effective hormone optimization for a comprehensive wellness regimen.',
				sort_description: 'Sub-Q Injection',
				price: 105,
				category: { id: 1 },
				subCategory: { id: [2] },
				image:
          '/images/solution_media/products/anti-aging/sermorelin-injections.webp',
				list: [
					'Versatile Dosing',
					'Enhanced Vitality',
					'Anti-Aging',
					'Subcutaneous Administration',
					'Efficient Absorption',
					'Stimulates Growth Hormone',
				],
			},
			{
				id: 8,
				name: 'GHK-Cu Troche',
				description:
          'GHK-Cu Troches offer a convenient, sublingual route for the anti-aging benefits of GHK-Copper peptide, dissolving under the tongue for quick absorption. They promote skin health, wound healing, and collagen production, enhancing daily anti-aging routines with optimal bioavailability.',
				sort_description: 'Sublingual Troche',
				price: 110,
				category: { id: 1 },
				subCategory: { id: [2] },
				image: '/images/solution_media/products/anti-aging/ghk-troche.webp',
				list: [
					'Convenient Use',
					'Keeps Skin Young',
					'Anti-Aging',
					'Sublingual Delivery',
					'Highly Bioavailable',
					'Boosts Collagen Production',
				],
			},
			{
				id: 9,
				name: 'Semaglutide',
				description:
          'Semaglutide Injections mimic the GLP-1 hormone to regulate appetite and aid in significant weight reduction. Administered subcutaneously, they offer an effective solution for enhancing metabolic health and managing weight.',
				sort_description: 'Oral Gel Capsule',
				price: 105,
				category: { id: 1 },
				subCategory: { id: [3] },
				image: '/images/solution_media/products/weight-loss/semaglutide.webp',
				list: [
					'Reduces Hunger',
					'Flexible Dosing',
					'Highly Effective',
					'Subcutaneous Administration',
					'Metabolic Enhancement',
					'Mimics GLP-1',
				],
			},
			{
				id: 10,
				name: 'Tirzepatide',
				description:
          'Tirzepatide Injections offer a dual-action approach to weight management, mimicking GLP-1 and GIP to suppress appetite and promote significant weight loss. Subcutaneous administration.',
				sort_description: 'Oral Tablet',
				price: 165,
				category: { id: 1 },
				subCategory: { id: [3] },
				image: '/images/solution_media/products/weight-loss/tirzepatide.webp',
				list: [
					'Reduces Hunger',
					'Flexible Dosing',
					'Highly Effective',
					'Subcutaneous Administration',
					'Metabolic Enhancement',
					'Mimics GLP-1 and GIP',
				],
			},
			{
				id: 12,
				name: 'Peak Female Mini Troche',
				description:
          'Peak Female Mini Troche combines Oxytocin, PT-141 and Tadalafil. These compounds work together to improve overall emotional, physical and intimate well being. Comes with 10 dissolvable Troches.',
				sort_description: 'Sublingual Mini Troche',
				price: 110,
				category: { id: 1 },
				subCategory: { id: [4] },
				image: '/images/solution_media/products/sexual-health/peak-female.webp',
				list: [
					'Sublingual Troche',
					'Oxytocin',
					'PT-141',
					'Improves Intimacy',
					'Tadalafil',
					'Improves Sexual Health',
				],
			},
			{
				id: 13,
				name: 'Desiccated Thyroid',
				description:
          'Desiccated Thyroid is used to treat hypothyroidism. It supplements the body’s natural thyroid hormones helping to restore the balance of T3 and T4 levels.',
				sort_description: 'Oral Gel Capsule',
				price: 50,
				category: { id: 1 },
				subCategory: { id: [5] },
				image:
          '/images/solution_media/products/thyroid/desiccated-thyroid.webp',
				list: [
					'Enhances Energy',
					'Balances Thyroid',
					'Tablets',
					'Weight Management',
					'Mood Improvement',
					'Improves Metabolism',
				],
			},
			{
				id: 14,
				name: 'Biological Age Test',
				description:
          'A cutting-edge tool to help predict future healthspan and lifespan by comparing your epigenetic age to your chronological age. It also assesses key markers of aging across multiple physiological systems, providing valuable insights into overall health.',
				sort_description: '',
				price: 'As low as $275 per kit',
				category: { id: 2 },
				subCategory: { id: [2] },
				image:
          '/images/solution_media/products/epigenetic-testing/biological-age-test.webp',
				list: [
					'DNA Methylation',
					'Skin Aging',
					'Vascular Aging',
					'Cognitive Aging',
					'Tailored Interventions',
					'Easy Cheek Swab',
				],
			},
			{
				id: 15,
				name: 'Custom Supplements',
				description:
          'All the ingredients you need, none you don’t. Our LonGeviti Blends feature a 100% personalized mix of supplements based on your test results and health coach recommendations, sold at wholesale cost for Longeviti Members. Welcome to the future of wellness.',
				sort_description: '',
				price: 'On average $150 per 30 days',
				category: { id: 3 },
				subCategory: { id: [] },
				image:
          '/images/solution_media/products/supplements/longeviti-blend.webp',
				list: [
					'Daily Supplement Packs',
					'Personalized',
					'Highly Bioavailable',
					'No Fillers',
					'No Additives',
					'Data-driven Blends',
				],
			},
			{
				id: 16,
				name: 'Longeviti Panel',
				description:
          'The Longeviti Panel uncovers hidden risks like high glucose, imbalanced cholesterol, silent inflammation, and hormone imbalances, helping you prevent chronic diseases and take control of your future. A phlebotomist will draw your blood at home, testing 90+ biomarkers. Members receive this service free every 6 months.',
				sort_description: '',
				price:
          'as low as $300. Included in Longeviti Membership at no additional cost.',
				category: { id: 2 },
				subCategory: { id: [1] },
				image:
          '/images/solution_media/products/bloodwork-panels/essentials-panel.webp',
				list: [
					'At-home blood work',
					'Done by licensed phlebotomist',
					'Testing for 90+ biomarkers',
					'Key health indicators',
					'In-app results breakdown',
					'Tailored supplement pack recommendations',
				],
			},
			{
				id: 19,
				name: 'Hormone Check',
				description:
          'Features 11 essential biomarkers crucial for female reproductive and overall health. This test offers insights into hormonal balance and other key health indicators like thyroid function and immune health. Provides a holistic view of hormonal status.',
				sort_description: '',
				price: 'As low as $115 per kit',
				category: { id: 2 },
				subCategory: { id: [3] },
				image:
          '/images/solution_media/products/finger-prick/hormone-check-women.webp',
				list: [
					'Finger Prick Test',
					'Clinically Accurate',
					'11 biomarkers',
					'At-home blood work',
					'Easy and Accessible',
					'Less Invasive',
				],
			},
			{
				id: 20,
				name: 'Cardiovascular Check',
				description:
          'Features 8 essential biomarkers crucial for the early detection and management of potential cardiovascular issues, helping you maintain a healthy heart and prevent heart disease.',
				sort_description: '',
				price: 'As low as $90 per kit',
				category: { id: 2 },
				subCategory: { id: [3] },
				image:
          '/images/solution_media/products/finger-prick/cardiovascular-health-panel.webp',
				list: [
					'Finger Prick Test',
					'Clinically Accurate',
					'8 biomarkers',
					'At-home blood work',
					'Easy and Accessible',
					'Less Invasive',
				],
			},
			{
				id: 21,
				name: 'Metabolic Check',
				description:
          'Gain insight into your metabolic health. Regular monitoring of these biomarkers is crucial for early detection and management of potential health issues such as cardiovascular disease, diabetes, liver dysfunction, and vitamin deficiencies.',
				sort_description: '',
				price: 'As low as $75 per kit',
				category: { id: 2 },
				subCategory: { id: [3] },
				image:
          '/images/solution_media/products/finger-prick/metabolic-health-panel.webp',
				list: [
					'Finger Prick Test',
					'Clinically Accurate',
					'8 Biomarkers',
					'At-home blood work',
					'Easy and Accessible',
					'Less Invasive',
				],
			},
		],
	},
};

export default productsData;
