import { HomeIcon } from '@/components/Icons/Landing';
import {
	BloodDropIcon,
	FileIcon,
	GraphWomenIcon,
	MemberIcon,
} from '@/components/Solutions/SolutionIcons';

import landingData from './landing';
import membershipData from './membership';
import productsData from './products';

const biomakersData = [
	{
		key: 'hormone_check_male',
		list: [
			{
				title: 'Thyroid Stimulating Hormone (TSH)',
				description:
          'TSH first then T4 and T3 only when TSH is abnormal. This cascade detects most abnormalities affecting the thyroid or the secretion of TSH by the pituitary gland.',
			},
			{
				title: 'Follicle Stimulating Hormone (FSH)',
				description:
          'Regulates reproductive processes by stimulating ovarian follicles in women and sperm production in men.',
			},
			{ title: 'Estradiol (E2)', description: '' },
			{
				title: 'LH (Lutheinizing Hormone)',
				description:
          'In men, LH causes the Leydig cells of the testes to produce testosterone. In women, LH triggers the creation of steroid hormones from the ovaries.',
			},
			{ title: 'PRL (Prolactin)', description: '' },
			{
				title: 'A1C',
				description:
          'Measures the amount of blood sugar attached to hemoglobin, indicating diabetes control over the past 2-3 months.',
			},
			{
				title: 'PSA (Prostate-specific Antigen)',
				description:
          'Protein produced by the prostate gland; elevated levels can indicate prostate cancer.',
			},
			{
				title: 'Vitamin D',
				description:
          'Measures the level of vitamin D in the blood, important for bone health and immune function.',
			},
			{
				title: 'Total Testosterone',
				description:
          'Measures free testosterone and testosterone that\'s attached to proteins. This helps in assessing overall hormonal balance and detecting hormonal disorders.',
			},
			{
				title: 'DHEA-S',
				description:
          'Testing DHEA levels in men and women provides insights into adrenal function, hormonal balance, aging, and overall health.',
			},
			{
				title: 'SHBG (Sex Hormone Binding Globulin)',
				description:
          'Protein that binds to sex hormones, regulating their availability.',
			},
			{
				title: 'Albumin',
				description:
          'Protein in blood that helps detect inflammation or infection.',
			},
			{
				title: 'Free Testosterone',
				description:
          'Measures only the \'active\' form of testosterone. This is important for evaluating conditions like hypogonadism and other hormonal imbalances.',
			},
			{
				title: 'HCT (Hematocrit)',
				description:
          'Amount of red blood cells in blood; indicates blood volume.',
			},
		],
	},
	{
		key: 'hormone_check_female',
		list: [
			{
				title: 'Thyroid Stimulating Hormone (TSH)',
				description:
          'TSH first then T4 and T3 only when TSH is abnormal. This cascade detects most abnormalities affecting the thyroid or the secretion of TSH by the pituitary gland.',
			},
			{
				title: 'Follicle Stimulating Hormone (FSH)',
				description:
          'Regulates reproductive processes by stimulating ovarian follicles in women and sperm production in men.',
			},
			{ title: 'Estradiol (E2)', description: '' },
			{
				title: 'LH (Lutheinizing Hormone)',
				description:
          'In men, LH causes the Leydig cells of the testes to produce testosterone. In women, LH triggers the creation of steroid hormones from the ovaries.',
			},
			{
				title: 'Vitamin D',
				description:
          'Measures the level of vitamin D in the blood, important for bone health and immune function.',
			},
			{
				title: 'SHBG (Sex Hormone Binding Globulin)',
				description:
          'Protein that binds to sex hormones, regulating their availability.',
			},
			{
				title: 'Progesterone',
				description:
          'Regulates the menstrual cycle and supports pregnancy by preparing the uterus lining and maintaining early pregnancy.',
			},
			{
				title: 'Testosterone',
				description:
          'Measures free testosterone and testosterone that\'s attached to proteins. This helps in assessing overall hormonal balance and detecting hormonal disorders.',
			},
		],
	},
	{
		key: 'cardiovascular_check',
		list: [
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
				title: 'Low-Density Lipoprotein (LDL) Cholesterol',
				description:
          'Bad cholesterol that can build up in arteries, increasing heart disease risk.',
			},
			{
				title: 'Triglycerides',
				description:
          'Type of fat in the blood; high levels increase heart disease risk.',
			},
			{
				title: 'HbA1C (Haemoglobin A1c)',
				description:
          'Measures the amount of blood sugar attached to hemoglobin, indicating diabetes control over the past 2-3 months.',
			},
			{ title: 'Apo-A1 (Apolipoprotein A1)', description: '' },
			{
				title: 'ApoB (Apolipoprotein B)',
				description:
          'Protein involved in lipid metabolism; high levels are associated with cardiovascular disease risk.',
			},
			{
				title: 'hsCRP (High-sensitivity C-reactive Protein)',
				description:
          'Sensitive measure of CRP used to evaluate cardiovascular disease risk.',
			},
			{
				title: 'HCY (Homocysteine)',
				description:
          'Amino acid in blood indicating heart disease risk when elevated.',
			},
			{
				title: 'LP(a) (Lipoprotein(a))',
				description:
          'Lipoprotein associated with increased cardiovascular disease risk.',
			},
			{ title: 'APOB/APOA ratio', description: '' },
		],
	},
	{
		key: 'metabolic_check',
		list: [
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
				title: 'Low-Density Lipoprotein (LDL) Cholesterol',
				description:
          'Bad cholesterol that can build up in arteries, increasing heart disease risk.',
			},
			{
				title: 'Triglycerides',
				description:
          'Type of fat in the blood; high levels increase heart disease risk.',
			},
			{
				title: 'HbA1C (Haemoglobin A1c)',
				description:
          'Measures the amount of blood sugar attached to hemoglobin, indicating diabetes control over the past 2-3 months.',
			},
			{
				title: 'AST (Aspartate Aminotransferase)',
				description: 'Enzyme in blood that detects liver damage.',
			},
			{
				title: 'ALT (Alanine Aminotransferase)',
				description: 'Enzyme in blood that detects liver damage.',
			},
			{
				title: 'Insulin',
				description:
          'Hormone that regulates blood glucose levels; helps diagnose and manage diabetes.',
			},
			{
				title: 'B12',
				description:
          'Essential for red blood cell formation, neurological function, and DNA synthesis.',
			},
			{
				title: 'Glucose',
				description:
          'A type of sugar used by the body for energy. Monitoring glucose levels is essential for managing diabetes and energy metabolism.',
			},
		],
	},
];

const solutionData = {
	hero: {
		men: {
			preTitle: 'mens health and wellness solutions',
			title:
        'Live optimized with <br class="lg:hidden"/><span>Geviti</span><span class="lg:hidden">.</span>',
			titles: ['Live optimized with'],
			titlesMobile: ['Live optimized with'],
			description:
        'Our platform offers men at-home diagnostics and doctor-supervised treatments covering testosterone therapy, anti-aging peptides, medical weight loss, and more, fostering vitality and longevity.',
			image: '/images/solution_media/compressed/hero-men.webp',
			imageMobile: '/images/solution_media/compressed/hero-men-mobile.webp',
			btnCta: {
				text: 'Join Geviti',
				href: '/pricing',
				externalLink: false,
			},
		},
		women: {
			preTitle: 'Womens health and wellness solutions',
			title:
        'Live optimized with <br class="lg:hidden"/><span>Geviti</span><span class="lg:hidden">.</span>',
			titles: ['Live optimized with'],
			titlesMobile: ['Live optimized with'],
			description:
        'Our platform offers women at-home diagnostics and doctor-supervised treatments covering hormone therapy, anti-aging peptides, medical weight loss, and more, fostering vitality and longevity.',
			image: '/images/solution_media/compressed/hero-women.webp',
			imageMobile: '/images/solution_media/compressed/hero-women-mobile.webp',
			btnCta: {
				text: 'Join Geviti',
				href: '/pricing',
				externalLink: false,
			},
		},
	},
	products: {
		title: 'Discover Geviti',
		description: 'Browse our wide range of products!',
		viewAll: {
			text: 'View All Products',
			href: '/products',
		},
		titleMobile: 'Our Products',
	},
	steps: {
		preTitle: 'Geviti offers data-driven wellness solutions',
		title: 'Begin with an at-home <br class="lg:hidden"/>bloodwork panel',
		description:
      'Membership journey starts with choosing a full bloodwork panel. We’ll draw your blood from the comfort of your home.',
		list: [
			{
				id: 'step-1',
				title:
          'Sign up for our <br class="max-lg:hidden"/>Longeviti Membership',
				icon: MemberIcon,
			},
			{
				id: 'step-2',
				title:
          'Complete your at-home blood <br class="max-lg:hidden"/>draw with our mobile <br class="max-lg:hidden"/>phlebotomy team',
				icon: BloodDropIcon,
				iconMobile: HomeIcon,
			},
			{
				id: 'step-3',
				title:
          'Review results and tailored <br class="max-lg:hidden"/>protocol with your designated <br class="max-lg:hidden"/>care team',
				icon: FileIcon,
			},
			{
				id: 'step-4',
				title:
          'Receive your tailor-made <br class="max-lg:hidden"/>protocols in the mail and <br class="max-lg:hidden"/>track your progress',
				icon: GraphWomenIcon,
			},
		],
	},
	wellnessProList: {
		men: [
			{
				preTitle: 'Testosterone deficiencies are common',
				title: '1 in 4 men over age 30 have low T.',
				description:
          'It’s a misconception that your testosterone only drops in your older years. Geviti offers the ultimate solution for health and wellness to help keep your hormones in the optimal range.',
				image: '/images/solution_media/compressed/wellnesspro-men-1.webp',
				imageMobile:
          '/images/solution_media/compressed/wellnesspro-men-1-mobile.webp',
				count: 20,
				suffix: 'million',
				imageHeading: 'Men In the united states',
				imageSubheading: 'from ages 25-75 have low T',
			},
			{
				preTitle: 'Glp-1’s effectively aid in weight loss',
				title: 'We have a weight problem.',
				description:
          'You don’t have to fight obesity alone. Through the advancement of weight loss peptides, like Semaglutide, weight management is becoming more easily achievable.',
				image: '/images/solution_media/compressed/wellnesspro-men-2.webp',
				imageMobile:
          '/images/solution_media/compressed/wellnesspro-men-2-mobile.webp',
				count: 69,
				suffix: '%',
				imageHeading: 'Of Adults in the united states',
				imageSubheading: 'are obese or overweight',
			},
		],
		women: [
			{
				preTitle: 'Maintaining A healthy weight is vital',
				title: 'We have a weight problem.',
				description:
          '4 in every 10 women have a Body Mass Index greater than 30, classifying them as obese. Obesity comes with an increased risk for diabetes, heart disease, and some cancers.',
				image: '/images/solution_media/compressed/wellnesspro-women-1.webp',
				imageMobile:
          '/images/solution_media/compressed/wellnesspro-women-1-mobile.webp',
				count: 40,
				suffix: '%',
				imageHeading: 'Of women in <span class="text-white">America</span>',
				imageSubheading: 'Struggle with obesity',
			},
			{
				preTitle: 'optimized hormonal states can be maintained',
				title: 'Lets optimize your hormones.',
				description:
          '80% of women in America struggle with hormone imbalances. These imbalances can lead to symptoms such as fatigue, weight gain, mood swings, and irregular menstrual cycles.',
				image: '/images/solution_media/compressed/wellnesspro-women-2.webp',
				imageMobile:
          '/images/solution_media/compressed/wellnesspro-women-2-mobile.webp',
				count: 80,
				suffix: '%',
				imageHeading: 'Of women in America',
				imageSubheading: 'struggle with hormone imbalances',
			},
		],
	},
	banner: {
		preTitle: 'An INVESTMENT IN YOUR FUTURE',
		title: 'Prioritizing longevity is an investment in your future self.',
		description:
      'Age better without compromising your lifestyle—our longevity and vitality solutions are designed to fit seamlessly into your everyday life.',
		image: {
			women: '/images/solution_media/compressed/banner-women.webp',
			men: '/images/solution_media/compressed/banner-men.webp',
		},
		imageMobile: {
			women: '/images/solution_media/compressed/banner-women-mobile.webp',
			men: '/images/solution_media/compressed/banner-men-mobile.webp',
		},
		btnCta: {
			href: '/pricing',
			externalLink: false,
			text: 'Start Now',
		},
	},
	faq: {
		data: [
			{
				title: 'In which states is Geviti available?',
				content:
          'Geviti currently offers services in twelve states: Arizona (AZ), California (CA), Colorado (CO), Utah (UT), Washington (WA), Texas (TX), Florida (FL), Georgia (GA), Kansas (KS), Oregon (OR), New Mexico (NM), and Missouri (MO). We are actively expanding to include more states across the country.',
			},
			{
				title: 'How do I get started?',
				content:
          'Click any of the \'Get Started\' buttons to become a Geviti member by selecting your membership frequency. You\'ll be prompted to schedule an at-home bloodwork exam, and from there, we\'ll communicate with you through our mobile application.',
			},
			{
				title:
          'What free at-home bloodwork option is included for me twice a year with my membership?',
				content:
          'As part of your membership, you receive the \'Longeviti Panel\' testing twice a year. This extensive evaluation offers valuable insights into over 90 biomarkers. If you were to pay out of pocket at Labcorp or Quest, this test could cost over $2,000.',
			},
			{
				title: 'What is the membership cancellation and refund policy?',
				content:
          'You can cancel your Geviti membership at any time through your personal dashboard. Please note, if you’re on a monthly plan and cancel within the first 60 days, a $150 cancellation fee will apply. This does not apply to quarterly. Due to the personalized nature of our services, refunds are not automatically provided but may be considered on a case-by-case basis. If you have specific circumstances or require additional assistance, please contact our support team for further guidance.',
			},
			{
				title:
          'Are the cost of supplements or prescriptions included in the membership fee?',
				content:
          'The membership fee provides access to our range of supplements and prescription services; however, the costs for these items are not included in the fee. Each supplement or prescription is priced separately, allowing you to choose exactly what fits your needs and budget.',
			},
			{
				title:
          'What if I have recently done labs? Do I still need to purchase a diagnostic package?',
				content:
          'Every membership includes an at-home blood draw as part of our initial assessment process, ensuring we have the most recent and relevant data to provide personalized care. If you have recent lab results and prefer not to undergo another panel, please reach out to our support team. We may be able to adjust your initial requirements based on your specific situation.',
			},
			{
				title: 'Does a blood panel guarantee access to specific treatments?',
				content:
          'Becoming a Geviti member does not guarantee that you will receive any specific prescription treatment. The decision on appropriate treatments is solely at the discretion of your healthcare provider, based on a thorough evaluation of your test results and overall health profile.',
			},
		],
	},
	membership: {
		preTitle: 'Personalized plans that are right for you',
		title:
      'Memberships as low as <br class="sm:hidden"/>$99<span class="text-xs lg:text-2xl lg:!leading-9">/month</span>',
		description: 'Your Geviti membership will include the following:',
		btnCta: {
			text: 'Become A Member',
			href: '/pricing',
		},
		btnCtaMobile: {
			text: 'Join Geviti',
			href: '/pricing',
		},
		list: landingData.membership.priceSection.list,
	},
	optimizedYourSelf: {
		preTitle: 'You owe it to yourself.',
		title: 'Become the healthiest <br />version of yourself.',
		description:
      'A Geviti membership makes longevity easy and accessible with our wide range of at-home diagnostics, innovative anti-aging therapies, and a dedicated qualified care team.<br /><br />All of this, and more with in-house health coaching, automated at-home bloodwork, and custom smart supplements.',
		image: '/images/solution_media/compressed/optimizedyourself.webp',
		imageMobile:
      '/images/solution_media/compressed/optimizedyourself-mobile.webp',
		btnCta: {
			text: 'Become A Member',
			href: '/pricing',
		},
		imageCaption: {
			mobile: {
				count: 20,
				suffix: 'million',
				subheading1: 'men in the united states',
				subheading2: 'from ages 25-75 have low T',
			},
			desktop: {
				count: '1-2',
				suffix: '%',
				subheading1: 'annual decreases in testosterone after 40',
			},
		},
	},
	biomarkers: {
		title: 'View the full list of biomarkers',
		expandText: 'Click to expand',
		options: [
			{
				title: 'Finger Prick',
				value: 'finger_prick',
				tabs: [
					{
						label: 'Hormone Check',
						value: 'hormone_check',
						gender: 'men',
						list:
              biomakersData.find(el => el.key === 'hormone_check_male')
              	?.list ?? [],
					},
					{
						label: 'Cardiovascular Check',
						value: 'cardiovascular_check',
						gender: 'men',
						list:
              biomakersData.find(el => el.key === 'cardiovascular_check')
              	?.list ?? [],
					},
					{
						label: 'Metabolic Check',
						value: 'metabolic_check',
						gender: 'men',
						list:
              biomakersData.find(el => el.key === 'metabolic_check')?.list ??
              [],
					},
					{
						label: 'Hormone Check',
						value: 'hormone_check',
						gender: 'women',
						list:
              biomakersData.find(el => el.key === 'hormone_check_female')
              	?.list ?? [],
					},
					{
						label: 'Cardiovascular Check',
						value: 'cardiovascular_check',
						gender: 'women',
						list:
              biomakersData.find(el => el.key === 'cardiovascular_check')
              	?.list ?? [],
					},
					{
						label: 'Metabolic Check',
						value: 'metabolic_check',
						gender: 'women',
						list:
              biomakersData.find(el => el.key === 'metabolic_check')?.list ??
              [],
					},
				],
			},
			{
				title: 'Phlebotomy',
				value: 'phlebotomy',
				tabs: [
					{
						label: 'Essential Health Check',
						value: 'essential_health_check',
						gender: 'men',
						list:
              membershipData.biomarkers.data.find(
              	el => el.key === 'essentialMale'
              )?.list ?? [],
					},
					{
						label: 'Essential Health Check',
						value: 'essential_health_check',
						gender: 'women',
						list:
              membershipData.biomarkers.data.find(
              	el => el.key === 'essentialFemale'
              )?.list ?? [],
					},
					{
						label: 'Comprehensive Health Dive',
						value: 'comprehensive_health_dive',
						gender: 'men',
						list:
              membershipData.biomarkers.data.find(
              	el => el.key === 'comprehensiveMale'
              )?.list ?? [],
					},

					{
						label: 'Comprehensive Health Dive',
						value: 'comprehensive_health_dive',
						gender: 'women',
						list:
              membershipData.biomarkers.data.find(
              	el => el.key === 'comprehensiveFemale'
              )?.list ?? [],
					},
					{
						label: 'Ultimate Health Assessment',
						value: 'ultimate_health_assessment',
						gender: 'men',
						list:
              membershipData.biomarkers.data.find(
              	el => el.key === 'ultimateMale'
              )?.list ?? [],
					},
					{
						label: 'Ultimate Health Assessment',
						value: 'ultimate_health_assessment',
						gender: 'women',
						list:
              membershipData.biomarkers.data.find(
              	el => el.key === 'ultimateFemale'
              )?.list ?? [],
					},
				],
			},
		],
	},
	treatmentOptions: {
		men: {
			preTitle: 'Easy online care',
			title: 'Treatment options for male optimization',
			btnCta: {
				href: '/pricing',
				text: 'Get Started',
			},
			...productsData.men,
		},
		women: {
			preTitle: 'Easy online care',
			title: 'Treatment options for female optimization',
			btnCta: {
				href: '/pricing',
				text: 'Get Started',
			},
			...productsData.women,
		},
	},
};

export default solutionData;
