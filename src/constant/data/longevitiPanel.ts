import { faqDataDefault } from './faq';

const longevitiPanelData = {
	navbar: {
		menu: [
			{
				name: 'Mens Health',
				href: '/solution/men',
				externalLink: false,
			},
			{
				name: 'Womens Health',
				href: '/solution/women',
				externalLink: false,
			},
			{
				name: 'Bloodwork',
				href: '/',
				externalLink: false,
			},
			{
				name: 'Supplements',
				href: '/',
				externalLink: false,
			},
			{
				name: 'Pricing',
				href: '/pricing',
				externalLink: false,
			},
			{
				name: 'Resources',
				href: '#',
				externalLink: false,
				items: [
					{
						name: 'Learn More',
						href: '/membership',
						externalLink: false,
					},
					{
						name: 'Blog',
						href: '/blog',
					},
					{
						name: 'FAQ',
						href: '/faq',
					},
					{
						name: 'Contact Us',
						href: '/contact-us',
					},
				],
			},
		],
	},
	hero: {
		preTitle: 'Unlock the Secrets to Your Health',
		title: 'Comprehensive Longeviti<br />Bloodwork Panel',
		description:
      'Our Longeviti Bloodwork Panel offers an in-depth analysis of 90+ critical biomarkers, giving you a complete picture of your health to guide you toward a longer, healthier life.',
		image: '',
		benefits: {
			title: 'Why Choose Our Panel?',
			description:
        'Geviti is redefining what a “full panel” means. Our comprehensive lab panel helps you stay ahead of disease, maintain optimal health, and live at your best.',
			image: '/images/longeviti_panel/hero.webp',
			imageMobile: '/images/longeviti_panel/hero-mobile.webp',
			cta: {
				text: 'Join Geviti',
				href: '/pricing',
			},
			list: [
				{
					title: 'Comprehensive Analysis:',
					description:
            'Covering all essential aspects of your health, our panel offers insights beyond competitors.',
				},
				{
					title: 'Actionable Insights:',
					description:
            'Get detailed reports to make informed decisions. Review these insights with a wellness professional.',
				},
				{
					title: 'Free for Members:',
					description:
            'Redo your panel for free every 6 months with a Longeviti Membership. Always be in the know. ',
				},
				{
					title: 'Convenient Home Blood Draw:',
					description:
            'Performed by a licensed phlebotomist at your home. Our process couldn’t be more simple.',
				},
			],
		},
	},
	howItWorks: {
		title: 'How it Works?',
		description:
      'People will go years at a time without getting their bloodwork done due to the amount of friction in the traditional process. Geviti removes this friction with our streamlined approach.',
		list: [
			{
				id: 'order',
				title: 'Order Your Test:',
				description:
          'Sign up for your Longeviti Membership, and get your bloodwork done at no added cost.',
			},
			{
				id: 'sample',
				title: 'Collect Your Sample:',
				description:
          'Our licensed phlebotomist comes to your home for a convenient blood draw.',
			},
			{
				id: 'results',
				title: 'Receive Results:',
				description: 'Get your comprehensive report with actionable insights.',
			},
		],
	},
	banner: {
		title: 'Level Up Your Health',
		description:
      'We\'re here to help you unlock the best version of yourself. Don\'t wait to optimize your well-being. Live a healthier, more vibrant life with Geviti today.',
		image: '/images/longeviti_panel/banner.webp',
		imageMobile: '/images/longeviti_panel/banner-mobile.webp',
		cta: {
			text: 'Join Geviti',
			href: '/pricing',
		},
	},
	analyzed: {
		title: 'Categories Analyzed',
		description:
      'Geviti redefines the “full panel.” While most doctors test around 20 biomarkers, offering a limited view of your health, we go further by testing 90+ markers, delivering in-depth insights across key health categories to promote longevity.',
		categories: [
			{
				id: 1,
				title: 'Male Panel',
				data: [
					{
						title: 'Metabolic Health',
						image: '/images/longeviti_panel/icons/metabolic-health.svg',
						list: [
							'Glucose Fasting: Understand blood sugar levels and risk of diabetes.',
							'Hemoglobin A1C: Track long-term blood sugar control.',
							'Fasting Insulin & HOMA2 Indices (B, S, IR): Gain a clearer picture of your metabolic status.',
							'QUICKI: Assess insulin sensitivity.',
							'eAG (Estimated Average Glucose): Monitor average blood sugar levels over time.',
							'HOMA2-IR: Determine insulin resistance levels.',
							'HOMA2-%B: Assess beta-cell function and insulin production.',
							'Calcium: Measure bone health and metabolic function.',
							'Triglyceride-Glucose Index (TyG): Evaluate insulin resistance and metabolic risk.',
						],
					},
					{
						title: 'Kidney and Liver Function',
						image: '/images/longeviti_panel/icons/kidney-and-liver.svg',
						list: [
							'Creatinine: Kidney waste marker; high levels suggest dysfunction.',
							'eGFR: Estimated Glomerular Filtration Rate, measures kidney filtration efficiency.',
							'BUN: Assesses kidney function via blood nitrogen levels.',
							'ALT: Liver enzyme; high levels indicate damage or inflammation.',
							'AST (Aspartate Aminotransferase): Evaluate liver function and damage.',
							'Bilirubin: Bile pigment; elevated levels suggest liver or blood issues.',
							'GGT:Liver enzyme; high levels indicate liver or bile duct problems.',
							'BUN Ratio: Compare BUN and creatinine for kidney function assessment.',
							'Sodium: Monitor electrolyte balance and hydration status.',
							'Chloride: Assess electrolyte and acid-base balance.',
							'Potassium: Evaluate electrolyte levels crucial for heart and muscle function.',
							'CO2 (Carbon Dioxide): Determine acid-base balance in the blood.',
							'Anion Gap: Assess acid-base balance and metabolic conditions.',
							'Sodium Ratio: Check balance critical for cell function and hydration.',
							'Protein - Total: Measure overall protein status in the body.',
							'Albumin: Monitor liver function and nutritional status.',
							'Globulin - Total: Evaluate immune function and liver health.',
							'Uric Acid: Screens metabolic disorders; elevation increases cardiovascular, stroke mortality.',
							'Glutamyl Transferase (GGT): Liver enzyme in glutathione pathway; elevated in liver disease, bile obstruction, oxidative stress.'
						],
					},
					{
						title: 'Cardiovascular Health',
						image: '/images/longeviti_panel/icons/cardiovascular-health.svg',
						list: [
							'Total Cholesterol: Sum of all cholesterol in the blood.',
							'LDL Cholesterol: "Bad" cholesterol; high levels increase heart disease risk.',
							'HDL Cholesterol: "Good" cholesterol; removes excess from the blood.',
							'Non-HDL Cholesterol: Measure total atherogenic particles.',
							'VLDL Cholesterol: Evaluate triglyceride-rich lipoprotein levels.',
							'LDL Ratio: Assess cardiovascular risk through cholesterol balance.',
							'Cholesterol Ratio: Measure overall heart disease risk.',
							'Triglycerides: Monitor fat levels in the blood for cardiovascular risk.',
							'Apolipoprotein B (ApoB): Marker of harmful cholesterol particles; indicates cardiovascular risk.',
							'Apolipoprotein A1: Track HDL levels for protective heart health.',
							'Lipoprotein (a): Genetic risk marker for heart disease.',
							'Homocysteine: Evaluate cardiovascular and metabolic risk.',
							'Platelet Ratio (PLR): Gauge inflammation and cardiovascular risk.',
							'MCH: Determine average hemoglobin content per red blood cell.',
							'Atherogenic Index of Plasma (AIP): Evaluate risk for atherosclerosis.',
							'RDW: Monitor variation in red blood cell size for deficiency detection.',
							'Hematocrit: Measure red blood cell volume for anemia risk.',
							'Hemoglobin: Measure oxygen-carrying capacity and assess anemia.',
						],
					},
					{
						title: 'Hormonal Health',
						image: '/images/longeviti_panel/icons/hormonal-health.svg',
						list: [
							'Cortisol - Total/AM: Measure stress hormone levels for adrenal function.',
							'Estradiol: Key estrogen for reproductive health.',
							'DHEA-S: Precursor to estrogen/testosterone; reflects adrenal function.',
							'Testosterone Total: Assess overall testosterone levels.',
							'Free Testosterone: Unbound testosterone; affects sexual health and muscle.',
							'PSA (Prostate-Specific Antigen): Monitor prostate health in men.',
							'TSH: Regulates thyroid; crucial for metabolism.',
							'Free T4: Measures thyroxine; assesses thyroid function.',
							'Free T3: Active thyroid hormone; controls metabolism and energy.',
							'FSH (Follicle Stimulating Hormone): Track reproductive health and function.',
							'LH (Luteinizing Hormone): Measure reproductive and endocrine health.',
							'Sex Hormone Binding Globulin - Evaluate testosterone/estrogen availability.',
							'Progesterone: Track reproductive health and hormone levels.',
							'IGF-1 (Insulin-like Growth Factor 1): Evaluate growth hormone activity.',
							'% Testosterone Bioavailable: Assess available testosterone percentage.',
							'Testosterone Bioavailable: Measure testosterone readily available for use.',
							'Cortisol : DHEA-S: Evaluate stress response and adrenal health balance.',
							'Thyroid Peroxidase (TPO) Antibodies: Autoantibody to thyroid enzyme, signals autoimmune thyroid disease.'
						],
					},
					{
						title: 'Nutrient Levels',
						image: '/images/longeviti_panel/icons/nutrient-levels.svg',
						list: [
							'Vitamin D (25-OH): Monitor levels essential for bone and immune health.',
							'Vitamin B12: Track levels for red blood cell and nerve health.',
							'Folate: Vital for cell division and DNA synthesis.',
							'Iron - Serum: Measure circulating iron levels for metabolism.',
							'Ferritin: Reflects iron storage levels in the body.',
							'TIBC (Total Iron Binding Capacity): Evaluate blood’s ability to transport iron.',
							'UIBC (Unsaturated Iron Binding Capacity): Monitor available iron-binding capacity.',
							'% Transferrin Saturation: Assess iron transport efficiency in the blood.',
						],
					},
					{
						title: 'Inflammatory and Immune Markers',
						image: '/images/longeviti_panel/icons/immune.svg',
						list: [
							'CRP (C-Reactive Protein): Inflammation marker; rises with acute inflammation.',
							'Hs-CRP (High-Sensitivity C-Reactive Protein): Detects low-level inflammation; linked to cardiovascular risk.',
							'Total WBCs (White Blood Cells): Track immune system activity and health.',
							'Neutrophils - %: Measure the percentage of neutrophils for infection response.',
							'Immature Granulocytes - %: Evaluate new white blood cell production.',
							'Lymphocytes - %: Track percentage of lymphocytes for immune health.',
							'Monocytes - %: Assess immune system response and inflammation.',
							'Eosinophils - %: Measure allergy or parasitic infection response.',
							'Basophils - %: Evaluate immune response markers and inflammation.',
							'Neutrophils - Absolute: Track absolute count of neutrophils in blood.',
							'Immature Granulocytes - Absolute: Monitor production of new white blood cells.',
							'Lymphocytes - Absolute: Measure total lymphocyte count for immune function.',
							'Monocytes - Absolute: Assess total monocyte count for inflammation.',
							'Eosinophils - Absolute: Track eosinophil count for allergy or infection.',
							'Neutrophil Ratio: Evaluate inflammation and immune balance.',
						],
					},
				],
			},
			{
				id: 2,
				title: 'Female Panel',
				data: [
					{
						title: 'Metabolic Health',
						image: '/images/longeviti_panel/icons/metabolic-health.svg',
						list: [
							'Glucose Fasting: Understand blood sugar levels and risk of diabetes.',
							'Hemoglobin A1C: Track long-term blood sugar control.',
							'Fasting Insulin & HOMA2 Indices (B, S, IR): Gain a clearer picture of your metabolic status.',
							'QUICKI: Assess insulin sensitivity.',
							'eAG (Estimated Average Glucose): Monitor average blood sugar levels over time.',
							'HOMA2-IR: Determine insulin resistance levels.',
							'HOMA2-%B: Assess beta-cell function and insulin production.',
							'Calcium: Measure bone health and metabolic function.',
							'Triglyceride-Glucose Index (TyG): Evaluate insulin resistance and metabolic risk.',
						],
					},
					{
						title: 'Kidney and Liver Function',
						image: '/images/longeviti_panel/icons/kidney-and-liver.svg',
						list: [
							'Creatinine: Kidney waste marker; high levels suggest dysfunction.',
							'eGFR: Estimated Glomerular Filtration Rate, measures kidney filtration efficiency.',
							'BUN: Assesses kidney function via blood nitrogen levels.',
							'ALT: Liver enzyme; high levels indicate damage or inflammation.',
							'AST (Aspartate Aminotransferase): Evaluate liver function and damage.',
							'Bilirubin: Bile pigment; elevated levels suggest liver or blood issues.',
							'GGT:Liver enzyme; high levels indicate liver or bile duct problems.',
							'BUN Ratio: Compare BUN and creatinine for kidney function assessment.',
							'Sodium: Monitor electrolyte balance and hydration status.',
							'Chloride: Assess electrolyte and acid-base balance.',
							'Potassium: Evaluate electrolyte levels crucial for heart and muscle function.',
							'CO2 (Carbon Dioxide): Determine acid-base balance in the blood.',
							'Anion Gap: Assess acid-base balance and metabolic conditions.',
							'Sodium Ratio: Check balance critical for cell function and hydration.',
							'Protein - Total: Measure overall protein status in the body.',
							'Albumin: Monitor liver function and nutritional status.',
							'Globulin - Total: Evaluate immune function and liver health.',
							'Uric Acid: Screens metabolic disorders; elevation increases cardiovascular, stroke mortality.',
							'Glutamyl Transferase (GGT): Liver enzyme in glutathione pathway; elevated in liver disease, bile obstruction, oxidative stress.'
						],
					},
					{
						title: 'Cardiovascular Health',
						image: '/images/longeviti_panel/icons/cardiovascular-health.svg',
						list: [
							'Total Cholesterol: Sum of all cholesterol in the blood.',
							'LDL Cholesterol: "Bad" cholesterol; high levels increase heart disease risk.',
							'HDL Cholesterol: "Good" cholesterol; removes excess from the blood.',
							'Non-HDL Cholesterol: Measure total atherogenic particles.',
							'VLDL Cholesterol: Evaluate triglyceride-rich lipoprotein levels.',
							'LDL Ratio: Assess cardiovascular risk through cholesterol balance.',
							'Cholesterol Ratio: Measure overall heart disease risk.',
							'Triglycerides: Monitor fat levels in the blood for cardiovascular risk.',
							'Apolipoprotein B (ApoB): Marker of harmful cholesterol particles; indicates cardiovascular risk.',
							'Apolipoprotein A1: Track HDL levels for protective heart health.',
							'Lipoprotein (a): Genetic risk marker for heart disease.',
							'Homocysteine: Evaluate cardiovascular and metabolic risk.',
							'Platelet Ratio (PLR): Gauge inflammation and cardiovascular risk.',
							'Atherogenic Index of Plasma (AIP): Evaluate risk for atherosclerosis.',
							'Platelets: Assess blood clotting function.',
							'Hematocrit: Measure red blood cell volume for anemia risk.',
							'MCV: Assess average red blood cell size for anemia types.',
							'MCH: Determine average hemoglobin content per red blood cell.',
							'RDW: Monitor variation in red blood cell size for deficiency detection.',
							'Hemoglobin: Measure oxygen-carrying capacity and assess anemia.',
						],
					},
					{
						title: 'Hormonal Health',
						image: '/images/longeviti_panel/icons/hormonal-health.svg',
						list: [
							'Cortisol - Total/AM: Measure stress hormone levels for adrenal function.',
							'Estradiol: Key estrogen for reproductive health.',
							'DHEA-S: Precursor to estrogen/testosterone; reflects adrenal function.',
							'Testosterone Total: Assess overall testosterone levels.',
							'Free Testosterone: Unbound testosterone; affects sexual health and muscle.',
							'TSH: Regulates thyroid; crucial for metabolism.',
							'Free T4: Measures thyroxine; assesses thyroid function.',
							'Free T3: Active thyroid hormone; controls metabolism and energy.',
							'FSH (Follicle Stimulating Hormone): Track reproductive health and function.',
							'LH (Luteinizing Hormone): Measure reproductive and endocrine health.',
							'Sex Hormone Binding Globulin - Evaluate testosterone/estrogen availability.',
							'Progesterone: Track reproductive health and hormone levels.',
							'IGF-1 (Insulin-like Growth Factor 1): Evaluate growth hormone activity.',
							'% Testosterone Bioavailable: Assess available testosterone percentage.',
							'Testosterone Bioavailable: Measure testosterone readily available for use.',
							'Prolactin: Assess reproductive health and potential pituitary or thyroid disorders.',
							'Cortisol : DHEA-S: Evaluate stress response and adrenal health balance.',
							'Thyroid Peroxidase (TPO) Antibodies: Autoantibody to thyroid enzyme, signals autoimmune thyroid disease.'
						],
					},
					{
						title: 'Nutrient Levels',
						image: '/images/longeviti_panel/icons/nutrient-levels.svg',
						list: [
							'Vitamin D (25-OH): Monitor levels essential for bone and immune health.',
							'Vitamin B12: Track levels for red blood cell and nerve health.',
							'Folate: Vital for cell division and DNA synthesis.',
							'Iron - Serum: Measure circulating iron levels for metabolism.',
							'Ferritin: Reflects iron storage levels in the body.',
							'TIBC (Total Iron Binding Capacity): Evaluate blood’s ability to transport iron.',
							'UIBC (Unsaturated Iron Binding Capacity): Monitor available iron-binding capacity.',
							'% Transferrin Saturation: Assess iron transport efficiency in the blood.',
						],
					},
					{
						title: 'Inflammatory and Immune Markers',
						image: '/images/longeviti_panel/icons/immune.svg',
						list: [
							'CRP (C-Reactive Protein): Inflammation marker; rises with acute inflammation.',
							'Hs-CRP (High-Sensitivity C-Reactive Protein): Detects low-level inflammation; linked to cardiovascular risk.',
							'Total WBCs (White Blood Cells): Track immune system activity and health.',
							'Neutrophils - %: Measure the percentage of neutrophils for infection response.',
							'Immature Granulocytes - %: Evaluate new white blood cell production.',
							'Lymphocytes - %: Track percentage of lymphocytes for immune health.',
							'Monocytes - %: Assess immune system response and inflammation.',
							'Eosinophils - %: Measure allergy or parasitic infection response.',
							'Basophils - %: Evaluate immune response markers and inflammation.',
							'Neutrophils - Absolute: Track absolute count of neutrophils in blood.',
							'Immature Granulocytes - Absolute: Monitor production of new white blood cells.',
							'Lymphocytes - Absolute: Measure total lymphocyte count for immune function.',
							'Monocytes - Absolute: Assess total monocyte count for inflammation.',
							'Eosinophils - Absolute: Track eosinophil count for allergy or infection.',
							'Neutrophil Ratio: Evaluate inflammation and immune balance.',
						],
					},
				],
			},
		],
	},
	apps: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Take Control of <br class="sm:hidden"/>Your Health Today!',
		description:
      'Invest in your future with our Longeviti Bloodwork Panel and take the first step toward a healthier, longer life. Order now and unlock the secrets to your longevity.',
		image: '/images/longeviti_panel/vial-phone.webp',
		cta: {
			text: 'Join Geviti',
			href: '/pricing',
		},
	},
	faq: {
		data: faqDataDefault,
	},
};

export default longevitiPanelData;
