import productsFemale from './productsFemale';
import productsMale from './productsMale';

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
						title: 'Hormone Therapy',
						preTitle: 'Compare Testosterone optimization options',
						biomarkers: null,
					},
					{
						id: 2,
						title: 'Anti-aging Compounds',
						preTitle: 'Explore anti-aging compounds',
						biomarkers: null,
					},
					{
						id: 3,
						title: 'Weight Loss',
						preTitle: 'See our weight loss options',
						biomarkers: null,
					},
					{
						id: 4,
						title: 'Sexual Health',
						preTitle: 'Explore our sexual health solutions',
						biomarkers: null,
					},
					{
						id: 6,
						title: 'Hair Loss',
						preTitle: 'Explore our hair loss solutions',
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
		products: productsMale,
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
						title: 'Anti-aging Compounds',
						preTitle: 'Explore anti-aging compounds',
						biomarkers: null,
					},
					{
						id: 3,
						title: 'Weight Loss',
						preTitle: 'See our weight loss options',
						biomarkers: null,
					},
					{
						id: 4,
						title: 'Sexual Health',
						preTitle: 'Explore our sexual health Solutions',
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
		products: productsFemale,
	},
};

export default productsData;
