import { NextPage } from 'next';

import Video from '@/components/AbousUs/Video';
import Hero from '@/components/CoffeeChill/Hero';
import RunningLogoCoffeeChill from '@/components/CoffeeChill/RunningLogo';
import BannerImage from '@/components/CultureApothecary/BannerImage';
import OnePackage from '@/components/CultureApothecary/OnePackage';
import PremiumPackage from '@/components/CultureApothecary/PremiumPackage';
import Steps from '@/components/CultureApothecary/Steps';
import Testimonials from '@/components/CultureApothecary/Testimonials';
import Footer from '@/components/Footer';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import Benefits from '@/components/Landing/Benefits';
import Unique from '@/components/LongevitiBlend/Unique';
import Membership from '@/components/Marketing/Membership';
import Navbar from '@/components/Navbar/Landing';
import coffeeChillData from '@/constant/data/coffeeChill';
import { Slug } from '@/interfaces/marketing';

const CoffeeAndChill: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<Navbar theme='light' />
			<Hero />
			<div className='mb-20 lg:mb-[164px]'>
				<RunningLogoCoffeeChill />
			</div>
			<Membership slug={ Slug.COFFEE_CHILL } />
			<div className='mt-20 lg:-mt-[100px] lg:mb-[60px] w-full container-center'>
				<div className='flex flex-col items-center text-center space-y-3.5'>
					<h2 className='text-primary -tracking-0.04em font-medium h5 lg:h3 max-xs3:text-[6vw]'>
						{ coffeeChillData.steps.title }
					</h2>
					<p className='body-small max-w-[648px] mx-auto'>
						{ coffeeChillData.steps.description }
					</p>
				</div>
				<Steps className='py-20 mb-[128px]' />
			</div>
			<Testimonials testimonials={ coffeeChillData.testimonials } />

			<OnePackage
				title={ coffeeChillData.onePackage.title }
				description={ coffeeChillData.onePackage.description }
				className='lg:mt-[42px] lg:pb-[132px]'
			/>

			<Unique
				type='sample'
				className='lg:my-[186px]' />
			<PremiumPackage className='lg:pt-[97px] lg:pb-[119px]' />
			<div className='lg:mb-[94px]'>
				<Benefits preTitle={ coffeeChillData.benefits.preTitle } />
			</div>
			<div className='pb-[87px] pt-0 lg:pt-[132px] max-lg:-mt-[45px]'>
				<Video />
			</div>
			<div className='w-full lg:py-[124px]'>
				<BannerImage />
			</div>
			<FrequentlyAskedQuestions
				data={ coffeeChillData.faq.data }
				disabledAnimation
				className='max-lg:!pb-[27px] max-lg:!pt-[79px]'
			/>
			<Footer />
		</div>
	);
};

export default CoffeeAndChill;
