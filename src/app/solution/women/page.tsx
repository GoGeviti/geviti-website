import { Footer } from '@/components';
// import { FAQ } from '@/components/HowItWorks';
import { RunningLogo } from '@/components/Landing';
import FrequentlyAskedQues from '@/components/MemberShip/FrequentlyAskedQues';
// import BloodworkPanel from '@/components/Solutions/BloodworkPanel';
import EasyOnlineCare from '@/components/Solutions/easy-online-care/EasyOnlineCare';
import Hero from '@/components/Solutions/Hero';
import BloodworkPanelWomen from '@/components/Solutions/women/BloodworkPanelWomen';
import WellnessPro from '@/components/Solutions/women/WellnessPro';

import Investment from '../../../components/Solutions/Investment';

const Solutions = () => {
	const treatmentmens = {
		sectionsubheading: 'Doctor Led online Treatment',
		sectionmainheading: 'Treatment options for females',
		cards: {
			heading: 'Analyze hormone Therapy options',
			subheading: 'Oral Estradiol',
			paragraph:
        'The FDA\'s approval of oral testosterone undecanoate offers a breakthrough in TRT, providing an easy-to-use, effective option for managing Low T. This addition enhances the therapy landscape, simplifying the path to hormonal balance for many. ',
			features: [
				'FDA Approved',
				'Bioidentical',
				'Convenient',
				'Oral Tablet',
				'Taken Daily',
				'Flexible Dosing',
			],
			cardslist: [
				{
					imageURL: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
				},
				{
					imageURL: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
				},
				{
					imageURL: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
				},
				{
					imageURL: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
				},
			],
		},
		products: [
			{
				id: 1,
				name: 'Oral Estradiol',
				description: 'Product Info',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
			},
			{
				id: 2,
				name: 'Oral Estradiol',
				description: 'Product Info',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
			},
			{
				id: 3,
				name: 'Progesterone Topical Cream',
				description: 'Product Info',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
			},
			{
				id: 4,
				name: 'Progesterone Topical Cream',
				description: 'Product Info',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
			},
			{
				id: 5,
				name: 'Enclomiphene Citrate',
				description: 'Product Info',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
			},
			{
				id: 6,
				name: 'Enclomiphene Citrate',
				description: 'Product Info',
				price: '$94.99/m*',
				imageSrc: '/images/solution_media/Pill-Bottle-Mockup-Women.webp',
			},
		],
	};

	return (
		<>
			<div className='bg-[#F2F2F2]'>
				<Hero
					image='/images/solution_media/women-desktop.png'
					imageMobile='/images/solution_media/women-desktop.png'
				/>
				<RunningLogo />
				<WellnessPro />
				<EasyOnlineCare treatmentmens={ treatmentmens } />
				<BloodworkPanelWomen />
				<FrequentlyAskedQues />
				<div className='flex flex-col gap-y-3.5'>
					<Investment
						bgimagemobile='/images/solution_media/women-investment.png'
						bgimagedesktop='/images/solution_media/women-investment.png'
					/>
					<Footer landingPage />
				</div>
			</div>
		</>
	);
};

export default Solutions;
