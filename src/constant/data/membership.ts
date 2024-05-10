import {
	CrossRed,
	DollarCircle,
	DoubleDollarCircle,
	FemaleIcon,
	GreenCheck,
	MaleIcon,
	Verify
} from '@/components/Icons';
import {
	DNAIcon,
	DropIcon,
	FavFolder,
	Graph,
	HeartbeatIcon,
	MedicalDocIcon,
	MonitoringIcon,
	PillIcon,
	UserTag,
} from '@/components/Icons/Landing';

const membershipData = {
	hero: {
		preTitle: 'all you need <span class="max-sm:hidden">in one </span>membership',
		title:
			'Unlock premier health with exclusive membership benefits',
		titles: ['Unlock premier health with', 'exclusive membership benefits'],
		description: 'A Geviti membership makes longevity easy and accessible with our wide range of at-home diagnostics, innovative anti-aging therapies, and a dedicated qualified care team.',
		titlesMobile: [
			'Unlock premier health',
			'with exclusive',
			'membership benefits',
		],
		image: '/images/membership/compressed/hero.webp',
		imageMobile: '/images/membership/compressed/hero_mobile.webp',
		btnCta: {
			text: 'Join Geviti',
			href: '/onboarding',
			externalLink: false,
		},
		btnCta2: {
			href: '/products',
			externalLink: false,
			text: '<span class="lg:hidden">Learn More</span><span class="max-lg:hidden">View Packages</span>',
		},
		mainKeys: [
			{
				icon: MonitoringIcon,
				text: 'Hormone optimization<br />Made simple',
			},
			{
				icon: DNAIcon,
				text: 'At-home diagnostics<br />Blood and DNA',
			},
			{
				icon: MedicalDocIcon,
				text: 'Data-driven protocols<br />No guesswork',
			},
			{
				icon: PillIcon,
				text: 'Tailor-made supplements<br />Custom to you',
			},
			{
				icon: HeartbeatIcon,
				text: 'Anti-aging peptides<br />Highly effective',
			},
		],
	},
	biomarkers: {
		title: 'Compare Tested Biomarkers',
		expandText: 'Click to expand',
		tabs: [
			{
				title: 'Essential Health Check',
				key: {
					male: 'essential',
					female: 'essential'
				}
			},
			{
				title: 'Comprehensive Health Dive',
				key: {
					male: 'comprehensive',
					female: 'comprehensive'
				}
			},
			{
				title: 'Ultimate Health Assessment',
				key: {
					male: 'ultimateMale',
					female: 'ultimateFemale'
				}
			}
		],
		genderOptions: [
			{
				title: 'Male Biomarkers',
				shortLabel: 'Male',
				icon: MaleIcon,
				value: 'male'
			},
			{
				title: 'Female Biomarkers',
				shortLabel: 'Female',
				icon: FemaleIcon,
				value: 'female'
			}
		],
		data: [
			{
				key: 'essential',
				list: [
					{ title: 'Thyroid Cascade', description: 'Evaluates thyroid function and disorders with 3-4 biomarkers.' },
					{ title: 'Luteinizing Hormone (LH)', description: 'Indicates reproductive health and function.' },
					{ title: 'Total Testosterone', description: 'Measures overall level of male sex hormone.' },
					{ title: 'Free Testosterone', description: 'Assesses biologically active testosterone fraction.' },
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
					{ title: 'Carbon Dioxide (CO2)', description: '' },
					{ title: 'Alanine Aminotransferase (ALT)', description: '' },
					{ title: 'Aspartate Aminotransferase (AST)', description: '' },
					{ title: 'Creatinine', description: '' },
					{ title: 'BUN/Creatinine Ratio', description: '' },
					{ title: 'Estimated Glomerular Filtration Rate (eGFR)', description: '' },
					{ title: 'HbA1C', description: 'Reflects average blood sugar levels over three months.' },
					{ title: 'Red Blood Cell Count (RBC)', description: '' },
					{ title: 'White Blood Cell Count (WBC)', description: '' },
					{ title: 'Hemoglobin (HGB)', description: '' },
					{ title: 'Hematocrit (HCT)', description: '' },
					{ title: 'Mean Corpuscular Volume (MCV)', description: '' },
					{ title: 'Mean Corpuscular Hemoglobin (MCH)', description: '' },
					{ title: 'Mean Corpuscular Hemoglobin Concentration (MCHC)', description: '' },
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
					{ title: 'Low-Density Lipoprotein (LDL) Cholesterol (calculated)', description: '' },
					{ title: 'Triglycerides', description: '' },
					{ title: 'sex hormone binding globulin (SHBG)', description: '' },
					{ title: 'Very Low-Density Lipoprotein (VLDL) Cholesterol (calculated)', description: '' },
					{ title: 'Prostate-Specific Antigen (PSA)', description: '' },
				]
			},
			{
				key: 'comprehensive',
				list: [
					{
						title: 'Thyroid Cascade',
						description: 'Evaluates thyroid function and disorders with 3-4 biomarkers.'
					},
					{
						title: 'LH (Lutheinizing Hormone)',
						description: 'Indicates reproductive health and function.'
					},
					{
						title: 'Total Testosterone',
						description: 'Measures overall level of male sex hormone.'
					},
					{
						title: 'Free Testosterone',
						description: 'Assesses biologically active testosterone fraction.'
					},
					{
						title: 'Comprehensive Metabolic Panel',
						description: 'Provides a broad overview of metabolism and organ function with 14 biomarkers.'
					},
					{
						title: 'HbA1C',
						description: 'Reflects average blood sugar levels over three months.'
					},
					{
						title: 'Complete Blood Count',
						description: 'Measures different blood cell types for overall health status with 14 biomarkers.'
					},
					{
						title: 'Lipid Panel',
						description: 'Assesses risk for cardiovascular disease through cholesterol levels with 4 biomarkers.'
					},
					{
						title: 'FSH (Follicle Stimulating Hormone)',
						description: 'Integral for reproductive system functioning.'
					},
					{
						title: 'Estradiol',
						description: 'A form of estrogen important for reproductive and sexual health.'
					},
					{
						title: 'DHEA (Dehydroepiandrosterone)',
						description: 'A hormone that\'s a precursor to sex hormones.'
					},
					{
						title: 'IGF-1 (Insulin-like Growth Factor 1)',
						description: 'Reflects human growth hormone levels.'
					},
					{
						title: 'Homocysteine',
						description: 'Linked with cardiovascular disease risk.'
					},
					{
						title: 'Magnesium',
						description: 'Vital for muscle, nerve function, and bone health.'
					},
					{
						title: 'Vitamin D, 25-Hydroxy',
						description: 'Assesses vitamin D status related to bone health.'
					},
					{
						title: 'PSA (Prostate-Specific Antigen)',
						description: 'Screens for prostate health issues.'
					},
					{
						title: 'C-Reactive Protein',
						description: 'Indicates liver health.'
					},
					{
						title: 'Apo B',
						description: 'Assists in evaluating liver function.'
					},
					{
						title: 'Lipoprotein A',
						description: 'A marker for inflammation in the body.'
					},
				]
			},
			{
				key: 'ultimateMale',
				list: [
					{
						title: 'Thyroid Cascade',
						description: 'Evaluates thyroid function and disorders with 3-4 biomarkers.'
					},
					{
						title: 'LH (Lutheinizing Hormone)',
						description: 'Indicates reproductive health and function.'
					},
					{
						title: 'Total Testosterone',
						description: 'Measures overall level of male sex hormone.'
					},
					{
						title: 'Free Testosterone',
						description: 'Assesses biologically active testosterone fraction.'
					},
					{
						title: 'Comprehensive Metabolic Panel',
						description: 'Provides a broad overview of metabolism and organ function with 14 biomarkers.'
					},
					{
						title: 'HbA1C',
						description: 'Reflects average blood sugar levels over three months.'
					},
					{
						title: 'Complete Blood Count',
						description: 'Measures different blood cell types for overall health status with 14 biomarkers.'
					},
					{
						title: 'Lipid Panel',
						description: 'Assesses risk for cardiovascular disease through cholesterol levels with 4 biomarkers.'
					},
					{
						title: 'FSH (Follicle Stimulating Hormone)',
						description: 'Integral for reproductive system functioning.'
					},
					{
						title: 'Estradiol',
						description: 'A form of estrogen important for reproductive and sexual health.'
					},
					{
						title: 'DHEA (Dehydroepiandrosterone)',
						description: 'A hormone that\'s a precursor to sex hormones.'
					},
					{
						title: 'IGF-1 (Insulin-like Growth Factor 1)',
						description: 'Reflects human growth hormone levels.'
					},
					{
						title: 'Homocysteine',
						description: 'Linked with cardiovascular disease risk.'
					},
					{
						title: 'Magnesium',
						description: 'Vital for muscle, nerve function, and bone health.'
					},
					{
						title: 'Vitamin D, 25-Hydroxy',
						description: 'Assesses vitamin D status related to bone health.'
					},
					{
						title: 'PSA (Prostate-Specific Antigen)',
						description: 'Screens for prostate health issues.'
					},
					{
						title: 'C-Reactive Protein',
						description: 'Indicates liver health.'
					},
					{
						title: 'Apo B',
						description: 'Assists in evaluating liver function.'
					},
					{
						title: 'Lipoprotein A',
						description: 'A marker for inflammation in the body.'
					},
					{
						title: 'ALT (Alanine Aminotransferase)',
						description: 'Involved in cholesterol metabolism; linked to heart disease'
					},
					{
						title: 'AST (Aspartate Aminotransferase)',
						description: 'Genetic marker associated with an increased risk of heart disease.'
					},
					{
						title: 'Insulin',
						description: 'Monitors insulin production and blood sugar regulation.'
					},
					{
						title: 'SHBG',
						description: 'Binds to sex hormones and regulates their effect.'
					},
					{
						title: 'Cortisol',
						description: 'Measures stress response and adrenal function.'
					},
					{
						title: 'Growth Hormone',
						description: 'Important for growth, metabolism, and muscle mass.'
					},
					{
						title: 'Vitamin B12',
						description: 'Essential for nerve function and blood cell production.'
					},
					{
						title: 'Ferritin',
						description: 'Indicates the amount of stored iron in the body.'
					},
					{
						title: 'Iron and TIBC',
						description: 'Assesses iron status and transport capacity.'
					},
					{
						title: 'Free T4',
						description: 'Directly measures active thyroid hormone levels.'
					},
				]
			},
			{
				key: 'ultimateFemale',
				list: [
					{
						title: 'Thyroid Cascade',
						description: 'Evaluates thyroid function and disorders with 3-4 biomarkers.'
					},
					{
						title: 'LH (Lutheinizing Hormone)',
						description: 'Indicates reproductive health and function.'
					},
					{
						title: 'Total Testosterone',
						description: 'Measures overall level of male sex hormone.'
					},
					{
						title: 'Free Testosterone',
						description: 'Assesses biologically active testosterone fraction.'
					},
					{
						title: 'Comprehensive Metabolic Panel',
						description: 'Provides a broad overview of metabolism and organ function with 14 biomarkers.'
					},
					{
						title: 'HbA1C',
						description: 'Reflects average blood sugar levels over three months.'
					},
					{
						title: 'Complete Blood Count',
						description: 'Measures different blood cell types for overall health status with 14 biomarkers.'
					},
					{
						title: 'Lipid Panel',
						description: 'Assesses risk for cardiovascular disease through cholesterol levels with 4 biomarkers.'
					},
					{
						title: 'FSH (Follicle Stimulating Hormone)',
						description: 'Integral for reproductive system functioning.'
					},
					{
						title: 'Estradiol',
						description: 'A form of estrogen important for reproductive and sexual health.'
					},
					{
						title: 'DHEA (Dehydroepiandrosterone)',
						description: 'A hormone that\'s a precursor to sex hormones.'
					},
					{
						title: 'IGF-1 (Insulin-like Growth Factor 1)',
						description: 'Reflects human growth hormone levels.'
					},
					{
						title: 'Homocysteine',
						description: 'Linked with cardiovascular disease risk.'
					},
					{
						title: 'Magnesium',
						description: 'Vital for muscle, nerve function, and bone health.'
					},
					{
						title: 'Vitamin D, 25-Hydroxy',
						description: 'Assesses vitamin D status related to bone health.'
					},
					{
						title: 'PSA (Prostate-Specific Antigen)',
						description: 'Screens for prostate health issues.'
					},
					{
						title: 'C-Reactive Protein',
						description: 'Indicates liver health.'
					},
					{
						title: 'Apo B',
						description: 'Assists in evaluating liver function.'
					},
					{
						title: 'Lipoprotein A',
						description: 'A marker for inflammation in the body.'
					},
					{
						title: 'ALT (Alanine Aminotransferase)',
						description: 'Involved in cholesterol metabolism; linked to heart disease'
					},
					{
						title: 'AST (Aspartate Aminotransferase)',
						description: 'Genetic marker associated with an increased risk of heart disease.'
					},
					{
						title: 'Insulin',
						description: 'Monitors insulin production and blood sugar regulation.'
					},
					{
						title: 'Cortisol',
						description: 'Measures stress response and adrenal function.'
					},
					{
						title: 'Vitamin B12',
						description: 'Essential for nerve function and blood cell production.'
					},
					{
						title: 'Ferritin',
						description: 'Indicates the amount of stored iron in the body.'
					},
					{
						title: 'Iron and TIBC',
						description: 'Assesses iron status and transport capacity.'
					},
					{
						title: 'Free T4',
						description: 'Directly measures active thyroid hormone levels.'
					},
					{
						title: 'Prolactin',
						description: 'Essential for menstrual cycle regulation and pregnancy in females.'
					},
					{
						title: 'Progesterone',
						description: 'Affects menstrual cycles and milk production.'
					},
				]
			}
		],
	},
	chooseGevity: {
		preTitle: 'Tailor-made longevity',
		title: 'Why Choose Geviti?',
		image: '/images/membership/compressed/oral.webp',
		btnCta: {
			href: '/onboarding',
			text: 'Get Started'
		},
		btnCta2: {
			href: '/products',
			text: 'See Products'
		},
		list: [
			'Testing and diagnostics from the comfort of your own home.',
			'Cutting edge health care available at your fingertips.',
			'Streamlined processes that eliminate traditional paint points.',
			'Comprehensive health/human optimization made simple.',
		],
	},
	steps: {
		preTitle: 'become a member',
		title: 'Start your health journey <span class="max-lg:hidden"/>with a full blood panel</span>',
		description: 'Membership journey starts with choosing a full bloodwork panel. We’ll draw your blood from the comfort of your home.',
		list: [
			{
				id: 'step-1',
				title:
					'Become a member by <br class="max-lg:hidden" />purchasing an intro bloodwork <br class="max-lg:hidden" />package',
				icon: UserTag,
			},
			{
				id: 'step-2',
				title:
					'Complete your at-home blood <br class="max-lg:hidden" />draw with our mobile <br class="max-lg:hidden" />phlebotomy team',
				icon: DropIcon,
				iconMobile: DropIcon,
			},
			{
				id: 'step-3',
				title:
					'Review results and tailored <br class="max-lg:hidden" />protocol with your designated <br class="max-lg:hidden" />care team',
				icon: FavFolder,
			},
			{
				id: 'step-4',
				title:
					'Receive your tailor-made <br class="max-lg:hidden" />protocols in the mail and <br class="max-lg:hidden" />track your progress',
				icon: Graph,
			},
		],
	},
	slider: {
		list: [
			{
				preTitle: 'Data-driven health and wellness, made simple.',
				title:
					'The ultimate wellness <br class="sm:hidden"/>membership for as low as <br class="sm:hidden"/>$99 per month.',
				description:
					'Geviti transcends the usual health and wellness offerings, providing unparalleled value at a lower cost. Our mission is to make longevity-focused care exceptionally accessible.',
				list: [
					'Geviti Platform Access',
					'Mobile App Integration',
					'Smart Wearables Integration',
					'Biannual At-home Full Panels',
					'Doctor-Monitored Therapeutics',
					'Tailored Smart Supplements',
					'Custom Longevity Protocols',
					'Certified Personal Health Coach',
					'Wholesale At-home Diagnostics',
				],
				image: '/images/membership/compressed/slider-1.webp',
			},
			{
				preTitle: 'Data-driven health and wellness, made simple.',
				title: 'Doctor  monitored cutting edge care',
				description:
					'Geviti offers a comprehensive care team for our clients. Instead of having to choose between a healthcare provider and a health coach, Geviti provides a solution where the two collaborate to create the ultimate longevity regimen.',
				list: [],
				image: '/images/membership/compressed/slider-2.webp',
				btnCta: {
					href: '/onboarding',
					text: 'Join Geviti'
				}
			},
			{
				preTitle: 'Data-driven health and wellness, made simple.',
				title: 'A complete wellness team in your pocket',
				description: ' ',
				list: [
					'Hormone Therapy',
					'Anti-aging Peptides',
					'Medical Weight Loss',
					'Sexual Health Medication',
					'Nootropics and Brain Health',
					'And More.',
				],
				image: '/images/membership/compressed/slider-3.webp',
				btnCta: {
					href: '/onboarding',
					text: 'Join Geviti'
				}
			},
			{
				preTitle: 'Data-driven health and wellness, made simple.',
				title: 'Biannual At-Home Full Panels ',
				description:
					'Americans may go several years without getting their bloodwork done. This can be the difference between life and death. Geviti makes bloodwork easy with our nationwide team of phlebotomists Every 6 months, we’ll come to you and perform a full panel.',
				list: [],
				image: '/images/membership/compressed/slider-4.webp',
				btnCta: {
					href: '/onboarding',
					text: 'Join Geviti'
				}
			},
		]
	},
	pricing: {
		preTitle: 'Care based off of biomarkers',
		title: 'Start by establishing baselines',
		description: 'Every user starts with an at-home full panel establish baselines. This package includes one month for free. Memberships can be billed monthly or quarterly.',
		pricingOptions: [
			{
				title: 'Quarterly',
				value: 'quarterly',
				highlight: '17% off'
			},
			{
				title: 'Monthly',
				value: 'monthly'
			}
		],
		list: [
			{
				name: 'Essentials Diagnostic',
				price: '$299',
				priceNote: 'one time payment',
				biomakers: '45+',
				mostPopular: false,
				monthly: '+ $119 monthly',
				quarterly: '+ ongoing membership fee',
				btnCta: {
					href: '/onboarding',
					text: 'Select Option'
				},
				list: [
					{
						title: 'At-home phlebotomy blood draw',
						description: 'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.'
					},
					{
						title: 'Full biomarker results report',
						description: ''
					},
					{
						title: 'Smart supplement recommendation',
						description: ''
					},
					{
						title: 'Bloodwork results telehealth review',
						description: ''
					},
					{
						title: 'First month of membership included',
						description: ''
					},
				]
			},
			{
				name: 'Comprehensive Diagnostic',
				price: '$469',
				priceNote: 'one time payment',
				biomakers: '57+',
				mostPopular: true,
				monthly: '+ $119 monthly',
				quarterly: '+ ongoing membership fee',
				btnCta: {
					href: '/onboarding',
					text: 'Select Option'
				},
				list: [
					{
						title: 'At-home phlebotomy blood draw',
						description: 'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.'
					},
					{
						title: 'Full biomarker results report',
						description: ''
					},
					{
						title: 'Smart supplement recommendation',
						description: ''
					},
					{
						title: 'Bloodwork results telehealth review',
						description: ''
					},
					{
						title: 'First month of membership included',
						description: ''
					},
				]
			},
			{
				name: 'Ultimate Diagnostic',
				price: '$599',
				priceNote: 'one time payment',
				biomakers: '68+',
				mostPopular: false,
				monthly: '+ $119 monthly',
				quarterly: '+ ongoing membership fee',
				btnCta: {
					href: '/onboarding',
					text: 'Select Option'
				},
				list: [
					{
						title: 'At-home phlebotomy blood draw',
						description: 'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.'
					},
					{
						title: 'Full biomarker results report',
						description: ''
					},
					{
						title: 'Smart supplement recommendation',
						description: ''
					},
					{
						title: 'Bloodwork results telehealth review',
						description: ''
					},
					{
						title: 'First month of membership included',
						description: ''
					},
				]
			},
		],
		features: [
			'At-home phlebotomy blood draw',
			'Full biomarker results report',
			'Smart supplement recommendation',
			'Bloodwork results telehealth review',
			'First month of membership included',
		],
		extended: {
			btn: {
				text: 'Geviti vs. competitors',
				textMobile: 'Geviti vs. our competitors'
			},
			preTitle: 'Care based off of biomarkers',
			title: 'More, for less.',
			list: [
				{
					name: 'Geviti',
					priceTitle: 'Membership cost as low as',
					price: '$99',
					priceNote: 'per month',
					geviti: true,
					list: [
						{
							title: 'Free telehealth consults',
							icon: GreenCheck
						},
						{
							title: 'Designated certified health coach',
							icon: GreenCheck
						},
						{
							title: 'At-home bloodwork',
							icon: GreenCheck
						},
						{
							title: 'Free semi-annual bloodwork',
							icon: GreenCheck
						},
						{
							title: 'Affordable treatments',
							icon: GreenCheck
						},
						{
							title: 'Included medical supplies',
							icon: GreenCheck
						},
						{
							title: 'Custom Smart Supplements',
							icon: GreenCheck
						},
						{
							title: 'Everything direct to your door',
							icon: GreenCheck
						},
						{
							title: 'Wholesale cost additional testing',
							icon: GreenCheck
						},
						{
							title: 'Wholesale cost supplements',
							icon: GreenCheck
						},
						{
							title: 'DNA and bloodwork options',
							icon: GreenCheck
						},
						{
							title: 'Data-driven tech platform',
							icon: GreenCheck
						},
						{
							title: 'Integrated mobile app',
							icon: GreenCheck
						},
					]
				},
				{
					name: 'Others',
					priceTitle: 'Membership cost',
					price: '$130+',
					priceNote: 'per month',
					geviti: false,
					list: [
						{
							title: 'Free telehealth consults',
							icon: DollarCircle
						},
						{
							title: 'Designated certified health coach',
							icon: CrossRed
						},
						{
							title: 'At-home bloodwork',
							icon: CrossRed
						},
						{
							title: 'Free semi-annual bloodwork',
							icon: DollarCircle
						},
						{
							title: 'Affordable treatments',
							icon: DoubleDollarCircle
						},
						{
							title: 'Included medical supplies',
							icon: DollarCircle
						},
						{
							title: 'Custom Smart Supplements',
							icon: CrossRed
						},
						{
							title: 'Everything direct to your door',
							icon: CrossRed
						},
						{
							title: 'Wholesale cost additional testing',
							icon: DoubleDollarCircle
						},
						{
							title: 'Wholesale cost supplements',
							icon: DollarCircle
						},
						{
							title: 'DNA and bloodwork options',
							icon: CrossRed
						},
						{
							title: 'Data-driven tech platform',
							icon: CrossRed
						},
						{
							title: 'Integrated mobile app',
							icon: CrossRed
						},
					]
				}
			]
		},
	},
	pricingComparison: {
		title: 'More, for less with Geviti',
		description: 'Lorem ipsum dolor sit amet consectetur. Sed posuere aliquet malesuada gravida velit massa nunc. Nunc at nunc nibh pretium',
		headers: [
			{
				id: 'geviti',
				title: 'Geviti',
				subtitle: '$99.99/mo',
				geviti: true,
			},
			{
				id: 'competitor_a',
				title: 'Competitor A',
				subtitle: '$129.00/mo',
				geviti: false
			},
			{
				id: 'competitor_b',
				title: 'Competitor B',
				subtitle: '$362.00/mo',
				geviti: false
			},
			{
				id: 'competitor_c',
				title: 'Competitor C',
				subtitle: 'Membership N/A',
				geviti: false
			}
		],
		list: [
			{
				name: 'Health Coaching',
				geviti: true,
				competitor_a: true,
				competitor_b: true,
				competitor_c: true,
			},
			{
				name: 'Frequent Screening',
				geviti: true,
				competitor_a: true,
				competitor_b: true,
				competitor_c: false,
			},
			{
				name: 'Hormones and Peptides',
				geviti: true,
				competitor_a: true,
				competitor_b: false,
				competitor_c: true,
			},
			{
				name: 'Mobile Phlebotomy',
				geviti: true,
				competitor_a: true,
				competitor_b: true,
				competitor_c: false,
			},
			{
				name: 'Member Dashboard',
				geviti: true,
				competitor_a: true,
				competitor_b: false,
				competitor_c: false,
			},
			{
				name: 'Various Diagnostic Options',
				geviti: true,
				competitor_a: false,
				competitor_b: true,
				competitor_c: true,
			},
			{
				name: 'Wholesale Diagnostics',
				geviti: true,
				competitor_a: false,
				competitor_b: false,
				competitor_c: false,
			},
			{
				name: 'Custom Supplements ',
				geviti: true,
				competitor_a: false,
				competitor_b: false,
				competitor_c: true,
			},
			{
				name: 'Epigenetic Testing',
				geviti: true,
				competitor_a: false,
				competitor_b: true,
				competitor_c: false,
			},
			{
				name: 'Health Coaching',
				geviti: true,
				competitor_a: false,
				competitor_b: false,
				competitor_c: false,
			},
		]
	},
	faq: {
		data: [
			{
				title: 'In which states is Geviti available?',
				content:
					'Geviti currently offers services in eleven states: Arizona (AZ), California (CA), Colorado (CO), Utah (UT), Washington (WA), Texas (TX), Florida (FL), Georgia (GA), Kansas (KS), Oregon (OR), and New Mexico (NM). We are actively expanding to include more states across the country.',
			},
			{
				title:
					'What “Deep-dive Diagnostic” is included semi-annually with the membership?',
				content: 'As part of your membership, you receive the "Essentials Diagnostic" twice each year. This foundational evaluation provides key insights into your health metrics. For a more detailed analysis, you have the option to upgrade to our comprehensive or ultimate diagnostic tiers at any time.',
			},
			{
				title: 'What is the membership cancellation and refund policy?',
				content: 'You can easily cancel your Geviti membership at any time through your personal dashboard. Given the personalized nature of our services, refunds are not automatically granted but are considered on a case-by-case basis. If you have specific circumstances or need further assistance, please contact our support team for detailed guidance.',
			},
			{
				title:
					'Are the cost of supplements or prescriptions included in the membership fee?',
				content: 'The membership fee provides access to our range of supplements and prescription services; however, the costs for these items are not included in the fee. Each supplement or prescription is priced separately, allowing you to choose exactly what fits your needs and budget.',
			},
			{
				title:
					'What if I have recently done labs? Do I still need to purchase a diagnostic package?',
				content: 'We require all new members to purchase a diagnostic package as part of our initial assessment process. This ensures that we have the most recent and relevant data to provide personalized care. However, if you have recent lab results, please reach out to our support team. We may be able to adjust your initial requirements based on the specifics of your situation.',
			},
			{
				title: 'Does a blood panel guarantee access to specific treatments?',
				content: 'Purchasing a diagnostic package does not guarantee that you will receive any specific prescription treatment. The determination of appropriate treatments is solely at the discretion of your healthcare provider, based on a comprehensive evaluation of your test results and overall health profile.',
			},
		]
	},
	products: {
		title: 'Discover Geviti',
		description: 'Browse our wide range of products!'
	},
	banner: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
			'Live longer without compromising your lifestyle—our longevity solutions are designed to fit seamlessly into your everyday life.',
		image: '/images/membership/compressed/banner-member.webp',
		imageMobile: '/images/membership/compressed/banner-member-mobile.webp',
		btnCta: {
			href: '/onboarding',
			externalLink: false,
			text: 'Start Now',
		},
	},
	features: [
		{
			id: 1,
			preTitle: 'Data-driven health and wellness, made simple.',
			title: 'The ultimate wellness <br class="sm:hidden"/>membership for as low as <br class="sm:hidden"/>$99 per month.',
			description: 'Geviti transcends the usual health and wellness offerings, providing unparalleled value at a lower cost. Our mission is to make longevity-focused care exceptionally accessible.',
			image: null,
			main: true,
			list: {
				listStyleType: 'none',
				icon: Verify,
				items: [
					'Geviti Dashboard Access',
					'Mobile Application Access',
					'Custom Longevity Protocols',
					'Wholesale At-home Diagnostics',
					'Certified Personal Health Coach',
					'Doctor Monitored Prescriptions',
					'Biannual At-home Full Panels',
					'Smart Wearables Integration',
					'Custom Made Supplements'
				]
			}
		},
		{
			id: 2,
			preTitle: 'Data-driven health and wellness, made simple.',
			title: 'A complete wellness team in <br class="sm:hidden"/>your pocket',
			description: 'Geviti offers a comprehensive care team for our clients. Instead of having to choose between a healthcare provider and a health coach, Geviti provides a solution where the two collaborate to create the ultimate longevity regimen.',
			image: '/images/membership/compressed/features-states.webp',
			main: false,
			list: null
		},
		{
			id: 3,
			preTitle: 'Data-driven health and wellness, made simple.',
			title: 'Doctor  monitored cutting <br class="sm:hidden"/>edge care',
			description: '',
			image: '/images/membership/compressed/features-products.webp',
			main: false,
			list: {
				listStyleType: 'disc',
				icon: null,
				items: [
					'Hormone Therapy',
					'Anti-aging Peptides',
					'Medical Weight Loss',
					'Sexual Health',
					'Nootropics',
					'And More.'
				]
			}
		},
		{
			id: 4,
			preTitle: 'Data-driven health and wellness, made simple.',
			title: 'Biannual At-Home Full Panels',
			description: 'Many Americans neglect essential bloodwork for years, putting their health and wellness at risk. Geviti simplifies this critical process with our nationwide team of phlebotomists, making it convenient for you to stay on top of your health.<br/><br/>Every 6 months, we’ll come to you and perform a full panel at no additional cost.',
			image: '/images/membership/compressed/features-apps.webp',
			main: false,
			list: null
		}
	]
};

export default membershipData;
