import { Footer, FrequentlyAskedQuestions, RunningLogo, SolutionsComponent } from '@/components';
import { solutionData } from '@/constant/data';

const Solutions = () => {
	// const treatmentmens = {
	// 	sectionsubheading: 'Doctor Led online Treatment',
	// 	sectionmainheading: 'Treatment options for females',
	// 	cards: {
	// 		heading: 'Analyze hormone Therapy options',
	// 		subheading: 'Oral Estradiol',
	// 		paragraph:
	// 			'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many. ',
	// 		features: [
	// 			'FDA Approved',
	// 			'Bioidentical',
	// 			'Convenient',
	// 			'Oral Tablet',
	// 			'Taken Daily',
	// 			'Flexible Dosing',
	// 		],
	// 		cardslist: [
	// 			{
	// 				imageURL: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
	// 			},
	// 			{
	// 				imageURL: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
	// 			},
	// 			{
	// 				imageURL: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
	// 			},
	// 			{
	// 				imageURL: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
	// 			},
	// 		],
	// 	},
	// 	products: [
	// 		{
	// 			id: 1,
	// 			name: 'Oral Estradiol',
	// 			description: 'Product Info',
	// 			price: '$94.99/m*',
	// 			imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
	// 		},
	// 		{
	// 			id: 2,
	// 			name: 'Oral Estradiol',
	// 			description: 'Product Info',
	// 			price: '$94.99/m*',
	// 			imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
	// 		},
	// 		{
	// 			id: 3,
	// 			name: 'Progesterone Topical Cream',
	// 			description: 'Product Info',
	// 			price: '$94.99/m*',
	// 			imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
	// 		},
	// 		{
	// 			id: 4,
	// 			name: 'Progesterone Topical Cream',
	// 			description: 'Product Info',
	// 			price: '$94.99/m*',
	// 			imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
	// 		},
	// 		{
	// 			id: 5,
	// 			name: 'Enclomiphene Citrate',
	// 			description: 'Product Info',
	// 			price: '$94.99/m*',
	// 			imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
	// 		},
	// 		{
	// 			id: 6,
	// 			name: 'Enclomiphene Citrate',
	// 			description: 'Product Info',
	// 			price: '$94.99/m*',
	// 			imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
	// 		},
	// 	],
	// };

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
			<SolutionsComponent.Hero type='women' />
			<div className='py-[42px] lg:py-16'>
				<RunningLogo />
			</div>
			<SolutionsComponent.WellnessPro type='women' />
			<SolutionsComponent.TreatmentOptions type='women' />
			<SolutionsComponent.Steps theme='blue' />
			<SolutionsComponent.Membership />
			<FrequentlyAskedQuestions data={ solutionData.faq.women } />
			<SolutionsComponent.Banner type='women' />
			<Footer landingPage />
		</div>
	);
};

export default Solutions;
