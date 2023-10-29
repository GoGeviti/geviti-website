'use client';
import { NextPage } from 'next';

import { HomeComponent, MarketPlaceComponent } from '@/components';
import { marketplaceData } from '@/constant/data';

const MarkerPlacePage: NextPage = () => {

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<MarketPlaceComponent.Hero />
			<MarketPlaceComponent.Categories/>
			<HomeComponent.CTA cta={ marketplaceData.cta } />
		</div>
	);
};

export default MarkerPlacePage;
