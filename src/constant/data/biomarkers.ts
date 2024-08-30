const biomarkersData = {
	data: [
		{
			key: 'longeviti_panel_male',
			list: [
				{
					title: 'Glucose Fasting',
					description:
            'Measures the amount of glucose in the blood after fasting. This is crucial for assessing diabetes risk and overall metabolic health.',
				},
				{
					title: 'Hemoglobin A1C',
					description:
            'A measure of average blood sugar levels over the past 2-3 months. It\'s useful for diagnosing and monitoring diabetes management.',
				},
				{
					title: 'eAG (Estimated Average Glucose)',
					description:
            'Calculated from HbA1c, it estimates average glucose levels, providing a more relatable number for patients.',
				},
				{
					title: 'Insulin - Fasting',
					description:
            'Measures the level of insulin in the blood after fasting. High levels can indicate insulin resistance, a precursor to type 2 diabetes.',
				},
				{
					title: 'HOMA2-%B',
					description:
            'Estimates beta cell function (insulin production). It helps assess the pancreas\'s ability to produce insulin.',
				},
				{
					title: 'HOMA2-%S',
					description:
            'Estimates insulin sensitivity. Lower values indicate insulin resistance.',
				},
				{
					title: 'HOMA2-IR',
					description:
            'Estimates insulin resistance. Higher values suggest decreased insulin sensitivity.',
				},
				{
					title: 'QUICKI',
					description:
            'Quantitative Insulin Sensitivity Check Index. Another method to assess insulin sensitivity.',
				},
				{
					title: 'Triglyceride-Glucose Index (TyG)',
					description:
            'A combined index of triglycerides and glucose levels, used to estimate insulin resistance.',
				},
				{
					title: 'BUN (Blood Urea Nitrogen)',
					description:
            'Measures kidney function. Elevated levels can indicate kidney problems.',
				},
				{
					title: 'Creatinine',
					description:
            'Another measure of kidney function. High levels can suggest kidney disease.',
				},
				{
					title: 'BUN:Creatinine Ratio',
					description:
            'This ratio helps differentiate between kidney and non-kidney causes of elevated BUN.',
				},
				{
					title: 'eGFR (Estimated Glomerular Filtration Rate)',
					description:
            'Estimates how well the kidneys are filtering blood. Lower rates indicate decreased kidney function.',
				},
				{
					title: 'PSA (Prostate-Specific Antigen)',
					description:
            'A marker for prostate health. Elevated levels can indicate prostate enlargement, inflammation, or cancer.',
				},
				{
					title: 'Sodium',
					description:
            'Essential for fluid balance and nerve/muscle function. Abnormal levels can indicate dehydration or other health issues.',
				},
				{
					title: 'Potassium',
					description:
            'Crucial for heart, nerve, and muscle function. Imbalances can affect heart rhythm.',
				},
				{
					title: 'Chloride',
					description:
            'Works with sodium and potassium to maintain fluid balance.',
				},
				{
					title: 'CO2 (Carbon Dioxide)',
					description:
            'Measures blood pH and helps evaluate breathing function.',
				},
				{
					title: 'Sodium:Potassium Ratio',
					description: 'Important for assessing overall electrolyte balance.',
				},
				{
					title: 'Anion Gap',
					description:
            'Helps identify certain metabolic conditions and acid-base imbalances.',
				},
				{
					title: 'Protein - Total',
					description:
            'Measures total protein in the blood. Low levels can indicate nutritional deficiencies or liver/kidney problems.',
				},
				{
					title: 'Albumin',
					description:
            'The main protein in blood plasma. Low levels can indicate malnutrition or liver disease.',
				},
				{
					title: 'Globulin - Total',
					description:
            'A group of proteins important for immune function. Abnormal levels can indicate various health issues.',
				},
				{
					title: 'Albumin:Globulin Ratio',
					description:
            'Helps assess overall protein status and can indicate liver or immune system problems.',
				},
				{
					title: 'Calcium',
					description:
            'Essential for bone health, muscle function, and nerve signaling. Abnormal levels can indicate various health issues.',
				},
				{
					title: 'Magnesium - Serum',
					description:
            'Important for numerous bodily functions. Low levels are common and can affect various systems.',
				},
				{
					title: 'Calcium:Albumin Ratio',
					description:
            'Helps assess true calcium status, as calcium levels are affected by albumin levels.',
				},
				{
					title: 'Alk Phos (Alkaline Phosphatase)',
					description:
            'An enzyme found in various tissues. Elevated levels can indicate liver or bone disorders.',
				},
				{
					title: 'AST (Aspartate Aminotransferase)',
					description:
            'An enzyme found in various tissues. Elevated levels can indicate liver damage.',
				},
				{
					title: 'ALT (Alanine Aminotransferase)',
					description:
            'An enzyme primarily found in the liver. Elevated levels suggest liver damage.',
				},
				{
					title: 'Bilirubin - Total',
					description:
            'A breakdown product of red blood cells. Elevated levels can indicate liver problems or blood disorders.',
				},
				{
					title: 'AST:ALT Ratio',
					description:
            'Helps differentiate between different types of liver damage.',
				},
				{
					title: 'Iron - Serum',
					description:
            'Measures iron levels in the blood. Important for assessing anemia and iron overload conditions.',
				},
				{
					title: 'Ferritin',
					description:
            'Reflects iron stores in the body. Low levels indicate iron deficiency, while high levels can suggest inflammation or iron overload.',
				},
				{
					title: 'TIBC (Total Iron Binding Capacity)',
					description:
            'Measures the blood\'s capacity to bind transferrin with iron. Helps diagnose iron deficiency and chronic disease.',
				},
				{
					title: 'UIBC (Unsaturated Iron Binding Capacity)',
					description:
            'The amount of transferrin not bound to iron. Helps in the diagnosis of iron deficiency and overload.',
				},
				{
					title: '% Transferrin saturation',
					description:
            'The percentage of transferrin that is saturated with iron. Useful in diagnosing iron deficiency and overload conditions.',
				},
				{
					title: 'Cholesterol - Total',
					description:
            'Measures total cholesterol in the blood. High levels are a risk factor for heart disease.',
				},
				{
					title: 'Triglycerides',
					description:
            'A type of fat in the blood. High levels increase the risk of heart disease and can indicate metabolic problems.',
				},
				{
					title: 'LDL Cholesterol',
					description:
            '"Bad" cholesterol that can build up in arteries. High levels increase heart disease risk.',
				},
				{
					title: 'HDL Cholesterol',
					description:
            '"Good" cholesterol that helps remove other forms of cholesterol from the bloodstream.',
				},
				{
					title: 'Non-HDL Cholesterol',
					description:
            'All cholesterol that is not HDL. Provides a single number for atherogenic lipid particles.',
				},
				{
					title: 'VLDL Cholesterol',
					description:
            'Very low-density lipoprotein cholesterol, another type of "bad" cholesterol.',
				},
				{
					title: 'LDL:HDL Ratio',
					description:
            'Provides a measure of cardiovascular risk. A lower ratio is generally better.',
				},
				{
					title: 'Triglyceride:HDL Ratio',
					description:
            'Another measure of cardiovascular risk. High ratios can indicate insulin resistance.',
				},
				{
					title: 'Cholesterol:HDL Ratio',
					description:
            'Also known as the cardiac risk ratio. Lower ratios indicate lower cardiovascular risk.',
				},
				{
					title: 'Lipoprotein (a)',
					description:
            'A genetic variant of LDL. High levels are a risk factor for cardiovascular disease.',
				},
				{
					title: 'Apolipoprotein B',
					description:
            'The main protein in LDL particles. High levels indicate an increased risk of heart disease.',
				},
				{
					title: 'Apolipoprotein A1',
					description:
            'The main protein component of HDL cholesterol. Higher levels are generally associated with better cardiovascular health.',
				},
				{
					title: 'Homocysteine',
					description:
            'An amino acid in the blood. High levels are associated with increased risk of heart disease and stroke.',
				},
				{
					title: 'Atherogenic Index of Plasma (AIP)',
					description:
            'Calculated from triglycerides and HDL. Used to predict cardiovascular risk.',
				},
				{
					title: 'TSH (Thyroid Stimulating Hormone)',
					description:
            'Controls thyroid hormone production. Abnormal levels can indicate thyroid disorders.',
				},
				{
					title: 'T4 - Free',
					description:
            'Measures free thyroxine levels. Important for assessing thyroid function.',
				},
				{
					title: 'Hs CRP (High-sensitivity C-Reactive Protein)',
					description:
            'A marker of inflammation. High levels are associated with increased cardiovascular risk.',
				},
				{
					title: 'Platelet:Lymphocyte Ratio (PLR)',
					description:
            'A marker of systemic inflammation and potential cardiovascular risk.',
				},
				{
					title: 'Vitamin D (25-OH)',
					description:
            'Measures vitamin D levels. Important for bone health, immune function, and overall health.',
				},
				{
					title: 'Vitamin B12',
					description:
            'Essential for nerve function and red blood cell formation. Deficiency can cause anemia and neurological problems.',
				},
				{
					title: 'FSH (Follicle Stimulating Hormone)',
					description:
            'Stimulates sperm production in men. Abnormal levels can indicate fertility issues.',
				},
				{
					title: 'LH (Luteinizing Hormone)',
					description:
            'Stimulates testosterone production in men. Abnormal levels can indicate hormonal imbalances.',
				},
				{
					title: 'Testosterone Total',
					description:
            'Measures total testosterone levels. Important for male characteristics, muscle mass, and overall health.',
				},
				{
					title: 'Testosterone Free',
					description:
            'Measures unbound, biologically active testosterone. Often more relevant than total testosterone.',
				},
				{
					title: 'Sex Hormone Binding Globulin - Male',
					description:
            'A protein that binds to testosterone. Affects the amount of free testosterone available.',
				},
				{
					title: 'Estradiol',
					description:
            'A form of estrogen. In men, high levels can indicate certain health issues.',
				},
				{
					title: 'Progesterone',
					description:
            'While primarily a female hormone, men also produce small amounts. Abnormal levels can indicate certain health conditions.',
				},
				{
					title: 'IGF-1 (Insulin-like Growth Factor 1)',
					description:
            'Reflects growth hormone levels. Important for growth and metabolism.',
				},
				{
					title: 'Cortisol - Total/AM',
					description:
            'Measures cortisol levels, typically in the morning. Important for assessing stress response and adrenal function.',
				},
				{
					title: '% Testosterone Bioavailable - Male',
					description:
            'Percentage of testosterone that is biologically active.',
				},
				{
					title: '% Testosterone Free',
					description:
            'Percentage of total testosterone that is unbound and biologically active.',
				},
				{
					title: 'Testosterone Bioavailable',
					description:
            'Amount of testosterone that is biologically active (free testosterone plus weakly bound testosterone).',
				},
				{
					title: 'RBC (Red Blood Cell count)',
					description:
            'Measures the number of red blood cells. Important for assessing anemia and overall health.',
				},
				{
					title: 'Hemoglobin',
					description:
            'The oxygen-carrying protein in red blood cells. Low levels indicate anemia.',
				},
				{
					title: 'Hematocrit',
					description:
            'The percentage of blood volume occupied by red blood cells. Another indicator of anemia or polycythemia.',
				},
				{
					title: 'MCV (Mean Corpuscular Volume)',
					description:
            'Measures the average size of red blood cells. Helps classify types of anemia.',
				},
				{
					title: 'MCH (Mean Corpuscular Hemoglobin)',
					description:
            'The average amount of hemoglobin per red blood cell. Useful in diagnosing anemia.',
				},
				{
					title: 'MCHC (Mean Corpuscular Hemoglobin Concentration)',
					description:
            'The average concentration of hemoglobin in a given volume of red blood cells.',
				},
				{
					title: 'Platelets',
					description:
            'Blood cells involved in clotting. Abnormal levels can indicate bleeding disorders or other health issues.',
				},
				{
					title: 'RDW (Red Cell Distribution Width)',
					description:
            'Measures variation in red blood cell size. Can help diagnose different types of anemia.',
				},
				{
					title: 'Total WBCs (White Blood Cells)',
					description:
            'Measures overall white blood cell count. Important for assessing immune function and infection.',
				},
				{
					title: 'Neutrophils - %',
					description:
            'Percentage of neutrophils, a type of white blood cell that fights bacterial infections.',
				},
				{
					title: 'Immature Granulocytes - %',
					description:
            'Percentage of immature white blood cells. Elevated levels can indicate infection or other conditions.',
				},
				{
					title: 'Lymphocytes - %',
					description:
            'Percentage of lymphocytes, white blood cells crucial for immune function.',
				},
				{
					title: 'Monocytes - %',
					description:
            'Percentage of monocytes, white blood cells that fight certain infections and help other white blood cells remove dead or damaged tissues.',
				},
				{
					title: 'Eosinophils - %',
					description:
            'Percentage of eosinophils, white blood cells involved in allergic responses and fighting parasitic infections.',
				},
				{
					title: 'Basophils - %',
					description:
            'Percentage of basophils, the least common type of white blood cell, involved in inflammatory reactions.',
				},
				{
					title: 'Neutrophils - Absolute',
					description: 'The total number of neutrophils.',
				},
				{
					title: 'Immature Granulocytes - Absolute',
					description: 'The total number of immature granulocytes.',
				},
				{
					title: 'Lymphocytes - Absolute',
					description: 'The total number of lymphocytes.',
				},
				{
					title: 'Monocytes - Absolute',
					description: 'The total number of monocytes.',
				},
				{
					title: 'Eosinophils - Absolute',
					description: 'The total number of eosinophils.',
				},
				{
					title: 'Basophils - Absolute',
					description: 'The total number of basophils.',
				},
				{
					title: 'Neutrophil:Lymphocyte Ratio',
					description:
            'The ratio of neutrophils to lymphocytes. Can be an indicator of systemic inflammation.',
				},
			],
		},
		{
			key: 'longeviti_panel_female',
			list: [
				{
					title: 'Thyroid Cascade',
					description:
            'TSH first then T4 and T3 only when TSH is abnormal. This cascade detects most abnormalities affecting the thyroid or the secretion of TSH by the pituitary gland.',
				},
				{
					title: 'LH (Luteinizing Hormone)',
					description:
            'In men, LH causes the Leydig cells of the testes to produce testosterone. In women, LH triggers the creation of steroid hormones from the ovaries.',
				},
				{
					title: 'Total Testosterone',
					description:
            'Measures free testosterone and testosterone that\'s attached to proteins. This helps in assessing overall hormonal balance and detecting hormonal disorders.',
				},
				{
					title: 'Chloride',
					description:
            'Stimulates stomach acid for digestion, nerve and muscle activation, and oxygen flow within cells.',
				},
				{
					title: 'Globulin, Total',
					description:
            'Protein in blood that helps detect inflammation or infection.',
				},
				{
					title: 'Calcium',
					description:
            'Important for muscle and nerve function, bone health, and neuromuscular function.',
				},
				{
					title: 'Alkaline Phosphatase (ALP)',
					description: 'Enzyme in blood that detects liver damage.',
				},
				{
					title: 'A/G Ratio (Albumin/Globulin Ratio)',
					description:
            'A measure of the relative amounts of albumin and globulin, which can indicate various health conditions.',
				},
				{
					title: 'Bilirubin',
					description:
            'Waste product from red blood cells; helps detect liver damage.',
				},
				{
					title: 'Blood Urea Nitrogen (BUN)',
					description:
            'Waste filtered by kidneys; helps assess kidney function.',
				},
				{
					title: 'Sodium',
					description:
            'Regulates blood pressure and fluid balance; vital for cardiovascular health.',
				},
				{
					title: 'Potassium',
					description:
            'Maintains fluid levels inside cells; important for heart and muscle function.',
				},
				{
					title: 'Glucose',
					description:
            'A type of sugar used by the body for energy. Monitoring glucose levels is essential for managing diabetes and energy metabolism.',
				},
				{
					title: 'Total Protein',
					description:
            'The sum of albumin and globulin; important for diagnosing liver and kidney conditions.',
				},
				{
					title: 'Albumin',
					description:
            'Protein in blood that helps detect inflammation or infection.',
				},
				{
					title: 'Carbon Dioxide (CO2)',
					description:
            'Regulates blood pH and provides information about kidney health.',
				},
				{
					title: 'Alanine Aminotransferase (ALT)',
					description: 'Enzyme in blood that detects liver damage.',
				},
				{
					title: 'Aspartate Aminotransferase (AST)',
					description: 'Enzyme in blood that detects liver damage.',
				},
				{
					title: 'Creatinine',
					description:
            'Waste filtered by kidneys; used to evaluate kidney health.',
				},
				{
					title: 'BUN/Creatinine Ratio',
					description:
            'A measure that helps determine the cause of kidney dysfunction.',
				},
				{
					title: 'Estimated Glomerular Filtration Rate (eGFR)',
					description:
            'Estimates how well the kidneys are filtering; used to assess kidney function.',
				},
				{
					title: 'HbA1C (Glycated Hemoglobin)',
					description:
            'Measures the amount of blood sugar attached to hemoglobin, indicating diabetes control over the past 2-3 months.',
				},
				{
					title: 'Red Blood Cell Count (RBC)',
					description: 'Carry oxygen; crucial for diagnosing anemia.',
				},
				{
					title: 'White Blood Cell Count (WBC)',
					description:
            'Fight infection; important for detecting infections and immune disorders.',
				},
				{
					title: 'Hemoglobin (HGB)',
					description:
            'Oxygen-carrying protein in red blood cells; used to diagnose anemia.',
				},
				{
					title: 'Hematocrit (HCT)',
					description:
            'Amount of red blood cells in blood; indicates blood volume.',
				},
				{
					title: 'Mean Corpuscular Volume (MCV)',
					description:
            'Average size of red blood cells; helps classify types of anemia.',
				},
				{
					title: 'Mean Corpuscular Hemoglobin (MCH)',
					description:
            'Average amount of hemoglobin inside a red blood cell; aids in diagnosing anemia.',
				},
				{
					title: 'Mean Corpuscular Hemoglobin Concentration (MCHC)',
					description:
            'Concentration of hemoglobin in a given volume of packed red blood cells.',
				},
				{
					title: 'Red Cell Distribution Width (RDW)',
					description:
            'A measure of the variation in size of red blood cells; used to diagnose different types of anemia.',
				},
				{
					title: 'Platelet Count',
					description:
            'Help clot blood; essential for assessing bleeding disorders.',
				},
				{
					title: 'Neutrophils (Absolute and Percent)',
					description:
            'A type of white blood cell important for fighting bacterial infections.',
				},
				{
					title: 'Lymphocytes (Absolute and Percent)',
					description:
            'A type of white blood cell that is part of the immune system, helping fight infections.',
				},
				{
					title: 'Monocytes (Absolute and Percent)',
					description:
            'A type of white blood cell that helps break down bacteria.',
				},
				{
					title: 'Eosinophils (Absolute and Percent)',
					description:
            'A type of white blood cell involved in combating multicellular parasites and certain infections.',
				},
				{
					title: 'Basophils (Absolute and Percent)',
					description:
            'A type of white blood cell that participates in allergic reactions and asthma.',
				},
				{
					title: 'Immature Granulocytes (Absolute and Percent)',
					description:
            'Immature white blood cells that can indicate infection or inflammation when present in high numbers.',
				},
				{
					title: 'Immature Cells (Absolute Count)',
					description:
            'Measures the number of immature white blood cells in the blood, which can indicate bone marrow activity.',
				},
				{
					title: 'Total Cholesterol',
					description:
            'Overall cholesterol level indicating risk for cardiovascular disease.',
				},
				{
					title: 'High-Density Lipoprotein (HDL) Cholesterol',
					description:
            'Good cholesterol that helps remove other forms of cholesterol from the bloodstream.',
				},
				{
					title: 'Low-Density Lipoprotein (LDL) Cholesterol (calculated)',
					description:
            'Bad cholesterol that can build up in arteries, increasing heart disease risk.',
				},
				{
					title: 'Triglycerides',
					description:
            'Type of fat in the blood; high levels increase heart disease risk.',
				},
				{
					title: 'Very Low-Density Lipoprotein (VLDL) Cholesterol (calculated)',
					description:
            'A type of lipoprotein that carries triglycerides in the blood; high levels can indicate heart disease risk.',
				},
				{
					title: 'Estradiol',
					description:
            'A form of estrogen, a female sex hormone produced by the ovaries.',
				},
				{
					title: 'SHBG (Sex Hormone Binding Globulin)',
					description:
            'Protein that binds to sex hormones, regulating their availability.',
				},
				{
					title: 'Vitamin D, 25-Hydroxy',
					description:
            'Measures the level of vitamin D in the blood, important for bone health and immune function.',
				},
				{
					title: 'FSH (Follicle Stimulating Hormone)',
					description:
            'Regulates reproductive processes by stimulating ovarian follicles in women and sperm production in men.',
				},
				{
					title: 'Progesterone',
					description:
            'Hormone regulating the menstrual cycle and maintaining pregnancy; measured in men to assess adrenal function.',
				},
			],
		},
	],
};

export default biomarkersData;
