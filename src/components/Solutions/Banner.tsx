import React from 'react';

import { solutionData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import Banner from '../Banner';

const bannerData = solutionData.banner;

const BannerSolution: React.FC<{ type: 'men' | 'women'; }> = ({ type }) => {
	return (
		<div className='pt-6'>
			<Banner
				preTitle={ bannerData.preTitle }
				title={ bannerData.title }
				description={ bannerData.description }
				image={ bannerData.image[type] }
				imageMobile={ bannerData.imageMobile[type] }
				btnCta={ bannerData.btnCta }
				overlayClassName={ clsxm(
					'bg-banner-mobile-solution max-lg:h-[58%] lg:rounded-r-none',
					type === 'men'
						? 'lg:bg-banner-member lg:w-[52%]'
						: 'lg:bg-banner-women lg:w-[40%]'
				) }
			/>
		</div>
	);
};

export default BannerSolution;
