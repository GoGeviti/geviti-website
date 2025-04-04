import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Video from '@/components/AbousUs/Video';
import BannerImage from '@/components/CultureApothecary/BannerImage';
import Hero from '@/components/CultureApothecary/Hero';
import OnePackage from '@/components/CultureApothecary/OnePackage';
import PremiumPackage from '@/components/CultureApothecary/PremiumPackage';
import Solution from '@/components/CultureApothecary/Solution';
import Steps from '@/components/CultureApothecary/Steps';
import Testimonials from '@/components/CultureApothecary/Testimonials';
import Footer from '@/components/Footer';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import Benefits from '@/components/Landing/Benefits';
import Analyzed from '@/components/LongevitiPanel/Analyzed';
import Navbar from '@/components/Navbar/Landing';
import RunningLogo from '@/components/RunningLogo';
import { faqDataDefault } from '@/constant/data/faq';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';

const paths = [
	'cultureapothecary',
	'wellnessherway',
	'deargabby',
	'thatsthepoint',
	'thebestofyou',
	'raisingboysandgirls',
	'thatsoundsfun',
	'1000hoursoutside'
]

const heroData = {
	'cultureapothecary': {
		title: 'Welcome to Geviti: Your All-in-One Platform for Personalized Health Optimization',
		description: 'Every body is unique and there is no one-size-fits-all product to heal you. We\'re here to build personalized, longevity-oriented solutions based on the precise needs expressed by your body.',
		image: '/images/cultureapothecary/hero/cultureapothecary.webp',
		ogImage: '/images/cultureapothecary/hero/og/cultureapothecary.jpeg',
		imageAlt: 'Alex Clark',
		popupReview: 'Feel like a celebrity with your own personal health concierge service at your fingertips, without the price.',
	},
	'wellnessherway': {
		title: 'Welcome to Geviti: Personalized Health Optimization, Designed for Her Journey.',
		description: 'Every body is unique and there is no one-size-fits-all product to heal you. We\'re here to build personalized, longevity-oriented solutions based on the precise needs expressed by your body.',
		image: '/images/cultureapothecary/hero/og/wellnessherway.png',
		ogImage: '/images/cultureapothecary/hero/og/wellnessherway.png',
		imageAlt: 'Gracie Norton',
		popupReview: ''
	},
	'deargabby': {
		title: 'Welcome to Geviti, Your Partner in Feeling Younger Every Year.',
		description: 'Every body is unique and there is no one-size-fits-all product to heal you. We\'re here to build personalized, longevity-oriented solutions based on the precise needs expressed by your body.',
		image: '/images/cultureapothecary/hero/deargabby.webp',
		ogImage: '/images/cultureapothecary/hero/og/deargabby.jpeg',
		imageAlt: 'Dear Gabby',
		popupReview: ''
	},
	'thatsthepoint': {
		title: 'Welcome to Geviti: Cutting Through the Health Noise with Data-Driven Precision.',
		description: 'Every body is unique and there is no one-size-fits-all product to heal you. We\'re here to build personalized, longevity-oriented solutions based on the precise needs expressed by your body.',
		image: '/images/cultureapothecary/hero/thatsthepoint.webp',
		ogImage: '/images/cultureapothecary/hero/og/thatsthepoint.jpeg',
		imageAlt: 'That’s the Point',
		popupReview: ''
	},
	'thebestofyou': {
		title: 'Welcome to Geviti, Your Partner in Feeling Younger Every Year.',
		description: 'Every body is unique and there is no one-size-fits-all product to heal you. We\'re here to build personalized, longevity-oriented solutions based on the precise needs expressed by your body.',
		image: '/images/cultureapothecary/hero/thebestofyou.webp',
		ogImage: '/images/cultureapothecary/hero/og/thebestofyou.png',
		imageAlt: 'The Best of You',
		popupReview: 'Taking charge of your health isn’t just about adding years to your life—it’s about adding life to your years. Geviti makes proactive wellness simple, giving you expert support before issues arise!'
	},
	'raisingboysandgirls': {
		title: 'Geviti: Because Your Family Deserves the Healthiest Version of You',
		description: 'Every body is unique and there is no one-size-fits-all product to heal you. We\'re here to build personalized, longevity-oriented solutions based on the precise needs expressed by your body.',
		image: '/images/cultureapothecary/hero/raisingboysandgirls.webp',
		ogImage: '/images/cultureapothecary/hero/og/raisingboysandgirls.jpeg',
		imageAlt: 'Raising boys and girls',
		popupReview: 'Self-care and prioritizing health are important at every age, and we’re grateful to Geviti for making that more accessible to us all!'
	},
	'thatsoundsfun': {
		title: 'Welcome to Geviti, Your Partner in Feeling Younger Every Year.',
		description: 'Every body is unique and there is no one-size-fits-all product to heal you. We\'re here to build personalized, longevity-oriented solutions based on the precise needs expressed by your body.',
		image: '/images/cultureapothecary/hero/thatsoundsfun.webp',
		ogImage: '/images/cultureapothecary/hero/og/thatsoundsfun.jpeg',
		imageAlt: 'That sounds fun',
		popupReview: 'Anything we can do to pursue health and prevent illness is worth our time and efforts- Geviti is a perfect tool and teammate to reaching those goals.'
	},
	'1000hoursoutside': {
		title: 'Welcome to Geviti, Your Partner in Feeling Younger Every Year.',
		description: 'Every body is unique and there is no one-size-fits-all product to heal you. We\'re here to build personalized, longevity-oriented solutions based on the precise needs expressed by your body.',
		image: '/images/cultureapothecary/hero/1000hoursoutside.jpg',
		ogImage: '/images/cultureapothecary/hero/og/1000hoursoutside.jpeg',
		imageAlt: '1000 Hours Outside',
		popupReview: 'The health of the whole person is something we fully believe in; mind, spirit and body. Geviti has us covered when it comes to understanding the health of our body, and we love that!'
	},
}

type Props = {
  params: Promise<{ influencer: string }>
}

export async function generateMetadata(
	{ params }: Props,
): Promise<Metadata> {
	// Read route param
	const { influencer } = await params
  
	// Check if influencer exists in our paths
	if (!paths.includes(influencer)) {
		return {
			title: 'Not Found',
			description: 'The page you are looking for does not exist.'
		}
	}
  
	// Get hero data for this influencer
	const hero = heroData[influencer as keyof typeof heroData];
  
	return {
		title: hero.title,
		description: hero.description,
		openGraph: mergeOpenGraph({
			title: hero.title,
			description: hero.description,
			image: hero.ogImage,
		}),
	}
}

const CultureApothecary = async(props:{
	params : Props['params']
}) => {
	const { influencer } = await props.params

	if (!paths.includes(influencer)) {
		notFound();
	}

	const hero = heroData[influencer as keyof typeof heroData];

	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<Navbar theme='light' />
			<Hero
				title={ hero.title }
				description={ hero.description }
				image={ hero.image }
				imageAlt={ hero.imageAlt }
				popupReview={ hero.popupReview || undefined }
			/>
			<Solution />
			<Benefits />
			<Testimonials />
			<Steps />
			<Suspense fallback={ <div className='min-h-[200px]' /> }>
				<Analyzed />
			</Suspense>
			<OnePackage />
			<PremiumPackage />
			<div className='py-[68px] lg:py-16'>
				<RunningLogo />
			</div>
			<div className='pb-[83px] pt-0 lg:pt-[132px] max-lg:-mt-[45px]'>
				<Video />
			</div>
			<div className='w-full lg:py-16'>
				<BannerImage />
			</div>
			<FrequentlyAskedQuestions
				data={ faqDataDefault }
				disabledAnimation
				className='max-lg:!pb-[27px] max-lg:!pt-[79px]'
			/>
			<Footer />
		</div>
	);
};

export default CultureApothecary;
