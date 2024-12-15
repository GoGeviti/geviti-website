import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Footer } from '@/components';
import { getProductMemberhsip } from '@/components/Checkout/api/onboarding';
import IntroScreen from '@/components/IntroScreen';
import {
	FeaturedOn,
	GevitiForFree,
	Marketplace,
	Products,
	Review,
	SocialProof
} from '@/components/Landing';
import { getCookie } from '@/services/cookies';
import { getAllCategories } from '@/services/products';

// Components that need SEO should have SSR enabled
const Hero = dynamic(() => import('@/components/Landing/Hero'));
const Banner = dynamic(() => import('@/components/Landing/Banner'));

// Interactive components that don't need SEO can disable SSR
const FeaturesCarousel = dynamic(() => import('@/components/Landing/FeaturesCarousel'), {
	// ssr: false
});
// Components with important content should have SSR enabled
const Steps = dynamic(() => import('@/components/Landing/Steps'));
const Membership = dynamic(() => import('@/components/Landing/Membership'));
const Benefits = dynamic(() => import('@/components/Landing/Benefits'));
const Innovative = dynamic(() => import('@/components/Landing/Innovative'));

// Pricing components should have SSR for SEO
const HeroPricing = dynamic(() => import('@/components/Pricing/Hero'));

const HomePage: NextPage = async() => {
	const productMembership = await getProductMemberhsip();
	const categories = await getAllCategories();
	const showIntro = await getCookie('show_intro');
	const showBanner = await getCookie('close_hero_banner');
	// const showIntro = 'false';
	// const showBanner = 'false';

	return (
		<>
			<IntroScreen
				type='video'
				showIntro={ showIntro }>
				<div className='flex min-h-screen flex-col w-full bg-grey-background font-Poppins'>
					{ /* Add width and height to prevent layout shifts */ }
					<div style={ { minHeight: '100vh' } }>
						<Hero
							showIntro={ showIntro }
							showBanner={ showBanner === 'false' }
							isLanding={ false }
						/>
					</div>
					<FeaturedOn/>
					<Membership />
					<FeaturesCarousel />
					<Marketplace/>
					{ /* Wrap heavy sections in suspense boundaries */ }
					<React.Suspense fallback={ <div className='min-h-[200px]' /> }>
						<Review/>
						<Benefits />
					</React.Suspense>

					{ productMembership && (
						<div
							id='pricing'
							className='lg:px-3 pb-3.5 lg:pb-6 overflow-hidden'>
							<div className='lg:bg-white lg:rounded-[19px] pb-[42px] lg:pb-16'>
								<HeroPricing
									productMembership={ productMembership }
									isFromHomePage={ true }
									navbar={ false }
									className='!pt-[52px] lg:!pt-[164px]'
								/>
								<GevitiForFree/>
							</div>
						</div>
					) }
					
					<React.Suspense fallback={ <div className='min-h-[200px]' /> }>
						<Steps />
						<Innovative />
					</React.Suspense>
					
					<Products data={ categories.categories } />
					<React.Suspense fallback={ <div className='min-h-[200px]' /> }>
						<SocialProof/>
						<Banner />
					</React.Suspense>
					
					<Footer landingPage />
				</div>
			</IntroScreen>
		</>
	);
};

export default HomePage;