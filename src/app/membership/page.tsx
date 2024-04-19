import React from 'react';

import { Footer } from '@/components';
import { Mission, Products, RunningLogo } from '@/components/Landing';
import ChooseGeviti from '@/components/MemberShip/ChooseGeviti';
import FrequentlyAskedQues from '@/components/MemberShip/FrequentlyAskedQues';
import Pricing from '@/components/MemberShip/Pricing';
import SliderCustom from '@/components/MemberShip/SliderCustom';
import StepsSection from '@/components/MemberShip/Steps';

import BioMakersSection from '../../components/MemberShip/BioMakersSection';
import Hero from '../../components/MemberShip/Hero';

const MemberShipPage = () => {
	return (
		<div className='bg-[#F2F2F2]'>
			<Hero />
			<div className='py-7 lg:py-14'>
				<RunningLogo />
			</div>
			<StepsSection />
			<SliderCustom />
			<Pricing />
			<BioMakersSection />
			<ChooseGeviti />
			<Products />
			<FrequentlyAskedQues />
			<div className='flex flex-col gap-y-3.5'>
				<Mission />
				<Footer landingPage />
			</div>
		</div>
	);
};

export default MemberShipPage;
