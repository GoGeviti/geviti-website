import React from 'react';

import { landingData } from '@/constant/data';

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
		/>
	);
};

export default BannerLanding;
