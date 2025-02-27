import { Suspense } from 'react';
import { NextPage } from 'next';

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

const CultureApothecary: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<Navbar theme='light' />
			<Hero />
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
