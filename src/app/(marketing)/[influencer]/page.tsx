import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

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

import { influencerData } from './data';

const paths = [
	'cultureapothecary',
	'wellnessherway',
	'deargabby',
	'thatsthepoint',
	'thebestofyou',
	'raisingboysandgirls',
	'thatsoundsfun',
	'1000hoursoutside',
	'wellnessandwisdom',
	'onward',
	'girlsgonebible',
	'thewellnessprocess',
	'biohack-it',
	'isabelbrown'
]

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
	const hero = influencerData[influencer as keyof typeof influencerData];
  
	return {
		title: hero.title,
		description: hero.description,
		openGraph: mergeOpenGraph({
			title: hero.title,
			description: hero.description,
			image: hero.ogImage,
			...(hero.videoUrl && {
				videos: [{
					url: hero.videoUrl,
					type: 'video/mp4'
				}]
			})
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

	const hero = influencerData[influencer as keyof typeof influencerData];

	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<Script
				id='firstpromoter-tracking'
				strategy='afterInteractive'
			>
				{ '_fprom=window._fprom||[];window._fprom=_fprom;_fprom.push(["url_tracking",true]); if (window.$FPROM){ $FPROM.trackVisitor({url_tracking: true})} else if(window.fpr) fpr("urlTracking");' }
			</Script>
			<Navbar theme='light' />
			<Hero
				title={ hero.title }
				description={ hero.description }
				image={ hero.image }
				imageAlt={ hero.imageAlt }
				videoUrl={ hero.videoUrl || undefined }
				popupReview={ hero.popupReview || undefined }
				thumbnailVideoUrl={ hero.thumbnailVideoUrl || undefined }
				imageTitle={ hero.imageTitle || undefined }
				imageDescription={ hero.imageDescription || undefined }
			/>
			<Solution
				imageUrl={ hero.solutionImage ? hero.solutionImage : undefined }
				popupReview={ hero.solutionReview ? hero.solutionReview : undefined }
				list={ hero.accordionData }
			/>
			<Benefits />
			<Testimonials />
			<Steps
				customStepImages={
					influencer === 'biohack-it' || influencer === 'isabelbrown'
						? {
							step1: '/images/cultureapothecary/step1.jpg',
							step2: '/images/cultureapothecary/step2.jpg',
							step3: '/images/cultureapothecary/step3.jpg',
							step4: '/images/cultureapothecary/step4.jpg'
						}
						: undefined
				}
			/>
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
