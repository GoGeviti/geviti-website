import React from 'react';

import pricingData from '@/constant/data/pricing';

import Banner from '../Banner';
import PopupReview from '../PopupReview';

const bannerData = pricingData.banner;

const BannerMember: React.FC = () => {
	const renderPopup = () => {
		return (
			<PopupReview
				motionProps={ {
					variants: {
						initial: { scale: 0, opacity: 0 },
						animate: {
							scale: 1,
							opacity: 1,
						},
						exit: {
							scale: 0,
							opacity: 0,
						},
					},
					transition: { duration: 0.64, ease: 'easeInOut' },
					initial: 'initial',
					whileInView: 'animate',
					exit: 'exit',
					viewport: { once: true },
				} }
				wrapperClassName='lg:w-[343px]'
			/>
		);
	};

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
			>
				<div className='absolute bottom-6 right-6 max-lg:hidden z-30'>
					{ renderPopup() }
				</div>
			</Banner>
		</div>
	);
};

export default BannerMember;
