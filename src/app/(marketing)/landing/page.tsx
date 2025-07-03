import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Footer } from '@/components';
// import { getAllProducts } from '@/components/Checkout/api/onboarding';
import IntroScreen from '@/components/IntroScreen';
import { Products } from '@/components/Landing';
import { submitWaitlistWithoutPassword } from '@/services/checkout';
import { getCookie } from '@/services/cookies';
import { getAllCategories } from '@/services/products';

// Components that need SEO should have SSR enabled
const Hero = dynamic(() => import('@/components/Landing/Hero'));
// const TextReveal = dynamic(() => import('@/components/Landing/TextReveal'));
// const Products = dynamic(() => import('@/components/Landing/Products'));
const Banner = dynamic(() => import('@/components/Landing/Banner'));

// Interactive components that don't need SEO can disable SSR
const FeaturesCarousel = dynamic(() => import('@/components/Landing/FeaturesCarousel'), {
	// ssr: false
});
const RunningLogo = dynamic(() => import('@/components/RunningLogo'), {
	// ssr: false
});

// Components with important content should have SSR enabled
const Steps = dynamic(() => import('@/components/Landing/Steps'));
// const Membership = dynamic(() => import('@/components/Landing/Membership'));
const Benefits = dynamic(() => import('@/components/Landing/Benefits'));
const Innovative = dynamic(() => import('@/components/Landing/Innovative'));
// const HomeKits = dynamic(() => import('@/components/Landing/HomeKits'));

// Pricing components should have SSR for SEO
// const HeroPricing = dynamic(() => import('@/components/Pricing/Hero'));
// const PricingBiomarkers = dynamic(() => import('@/components/Pricing/PricingBiomarkers'));

const HomePage: NextPage = async() => {
	await submitWaitlistWithoutPassword();
	const categories = await getAllCategories();
	const showIntro = await getCookie('show_intro');
	const showBanner = await getCookie('close_hero_banner');

	return (
		<>
			<IntroScreen
				type='video'
				showIntro={ showIntro }>
				<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
					{ /* Add width and height to prevent layout shifts */ }
					<div style={ { minHeight: '100vh' } }>
						<Hero
							isLanding={ true }
							showIntro={ showIntro }
							showBanner={ showBanner !== 'true' }
						/>
					</div>
					{ /* Wrap heavy sections in suspense boundaries */ }
					<React.Suspense fallback={ <div className='min-h-[200px]' /> }>
						{ /* <TextReveal /> */ }
						<Steps />
						<div className='my-16'>
							<RunningLogo />
						</div>
					</React.Suspense>
					
					<React.Suspense fallback={ <div className='min-h-[200px]' /> }>
						{ /* <Membership /> */ }
						<FeaturesCarousel />
						<Benefits />
					</React.Suspense>
					
					<React.Suspense fallback={ <div className='min-h-[200px]' /> }>
						<Innovative />
						{ /* <HomeKits /> */ }
					</React.Suspense>

					{ /* { products?.length && (
						<div
							id='pricing'
							className='lg:px-3 lg:py-6 overflow-hidden'>
							<div className='lg:bg-white lg:rounded-[19px] pb-[42px] lg:pb-[64px]'>
								<HeroPricing
									products={ products }
									isFromHomePage={ true }
									navbar={ false }
									className='!pt-[52px] lg:!pt-[164px]'
								/>
								<PricingBiomarkers isFromHomePage={ true } />
							</div>
						</div>
					) } */ }
					
					<Products data={ categories.categories } />
					<React.Suspense fallback={ <div className='min-h-[200px]' /> }>
						<Banner />
					</React.Suspense>
					
					<Footer landingPage />
				</div>
			</IntroScreen>
		</>
	);
};

export default HomePage;
