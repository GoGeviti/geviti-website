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
					'bg-banner-mobile-solution max-lg:h-[555px]',
					type === 'men'
						? 'lg:bg-banner-landing'
						: 'lg:bg-banner-women'
				) }
			/>
		</div>
	);
};

export default BannerSolution;
