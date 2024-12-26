import React from 'react';
import { NextPage } from 'next';

import { Footer } from '@/components';
import { SocialProof } from '@/components/Landing';
import LongevitiPanelComponent from '@/components/LongevitiPanel';
import Navbar from '@/components/Navbar/Landing';
import Hero from '@/components/testimonials/Hero';
import Review from '@/components/testimonials/Review';
import Video from '@/components/testimonials/Video';

const TestimonialsPage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<Navbar theme='light' />
			<Hero/>
			<Video/>
			<Review/>
			<SocialProof />
			<LongevitiPanelComponent.BannerParallax containerClassName='lg:pb-0' />
			<Footer />
		</div>
	);
};

export default TestimonialsPage;
