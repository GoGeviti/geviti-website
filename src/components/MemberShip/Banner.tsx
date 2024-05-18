import React from 'react';

import { membershipData } from '@/constant/data';

import Banner from '../Banner';

const bannerData = membershipData.banner;

const BannerMember: React.FC = () => {
	return (
		<div className='pt-6'>
			<Banner
				preTitle={ bannerData.preTitle }
				title={ bannerData.title }
				description={ bannerData.description }
				image={ bannerData.image }
				imageMobile={ bannerData.imageMobile }
				btnCta={ bannerData.btnCta }
				overlayClassName='bg-banner-mobile-member lg:bg-banner-member max-lg:h-[64%] lg:rounded-19px'
			/>
		</div>
	);
};

export default BannerMember;
