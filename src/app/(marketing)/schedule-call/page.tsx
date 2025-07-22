import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Footer, FrequentlyAskedQuestions, MarketingComponent } from '@/components';
import OnePackage from '@/components/CultureApothecary/OnePackage';
import PremiumPackage from '@/components/CultureApothecary/PremiumPackage';
import Steps from '@/components/CultureApothecary/Steps';
import Testimonials from '@/components/CultureApothecary/Testimonials';
import IntroScreen from '@/components/IntroScreen';
import { Benefits } from '@/components/Landing';
import Video from '@/components/ScheduleCall/Video';
import { faqDataDefault } from '@/constant/data/faq';
import { Slug } from '@/interfaces/marketing';
import { getCookie } from '@/services/cookies';
const Hero = dynamic(() => import('@/components/Landing/Hero'));

const ScheduleCall: NextPage = async() => {
	const showIntro = await getCookie('show_intro');
	const showBanner = await getCookie('close_hero_banner');

	return (
		<>
			<IntroScreen
				type='video'
				showIntro={ showIntro }>
				<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
					<div style={ { minHeight: '100vh' } }>
						<Hero
							isLanding={ true }
							showIntro={ showIntro }
							showBanner={ showBanner !== 'true' }
							isScheduleCall={ true }
						/>
					</div>
					<Video/>
					<Benefits isScheduleCall />
					<div className='container-center flex gap-[14px] flex-col items-center justify-center text-center'>
						<h3 className='h3'>How Does it Work?</h3>
						<p className='text-grey-primary text-sm max-w-[648px]'>People go years without getting their levels checked becasue the usual process is a hassle. Geviti streamlines the process with an approach thats quick, easy, and done on your terms.</p>
					</div>
					<Steps className='py-10 pb-20' />
					<MarketingComponent.Membership slug={ Slug.SCHEDULE_CALL } />
					<Testimonials />
					<OnePackage />
					<PremiumPackage />
					<FrequentlyAskedQuestions
						data={ faqDataDefault }
						disabledAnimation
						className='max-lg:!pb-[27px] max-lg:!pt-[79px]'
					/>
					<Footer landingPage />
				</div>
			</IntroScreen>
		</>
	);
};

export default ScheduleCall;
