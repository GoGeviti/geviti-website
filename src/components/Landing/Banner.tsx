import React from 'react';

import landingData from '@/constant/data/landing';

import Banner from '../Banner';

const bannerData = landingData.banner;

const BannerLanding: React.FC = () => {
	return (
		<Banner
			preTitle={ bannerData.preTitle }
			title={ bannerData.title }
			description={ bannerData.description }
			image={ bannerData.image }
			imageMobile={ bannerData.imageMobile }
			btnCta={ bannerData.btnCta }
			overlayClassName='max-lg:h-[57%] lg:w-[40%] bg-banner-mobile-landing lg:bg-banner-landing lg:rounded-r-none'
		/>
	);
};

export default BannerLanding;
