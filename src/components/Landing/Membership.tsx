import React from 'react';
import dynamic from 'next/dynamic';

// import Image from 'next/image';
import landingData from '@/constant/data/landing';

import ButtonCta from '../ButtonCta';

const InfiniteMovingFeatures = dynamic(
	() => import('../InfiniteMovingFeatures'),
	{
		// ssr: false,
	}
);

const membershipData = landingData.membership;

const Membership = () => {

	return (
		<div className='px-3 pb-3.5 lg:pb-6 font-Poppins'>
			<div className='bg-white rounded-19px py-[46px] lg:pb-0'>
				<div className='px-2 flex flex-col items-center text-center'>
					<div className='my-2.5 lg:mt-0 lg:mb-3'>
						<h3 className='text-[5.581vw] !leading-8 xs:text-2xl sm:text-3xl lg:text-4xl lg:!leading-normal -tracking-0.04em text-primary'>
							<span dangerouslySetInnerHTML={ { __html: membershipData.priceSection.title } } />
						</h3>
					</div>
					<p className='text-[2.927vw] xs:text-xs sm:text-sm !leading-5 text-grey-400 lg:max-w-[446px] lg:mx-auto'>
						<span dangerouslySetInnerHTML={ { __html: membershipData.priceSection.description } } />
					</p>
				</div>
				<div className='max-lg:hidden mt-[42px] px-2 flex justify-center'>
					<ButtonCta
						href={ membershipData.priceSection.btnCta.href }
						text={ membershipData.priceSection.btnCta.text }
						aria-label={ membershipData.priceSection.btnCta.text }
					/>
				</div>
				<div className='overflow-x-hidden relative pt-5 lg:pt-[117px] pb-[45px] lg:pb-[63px]'>
					<InfiniteMovingFeatures list={ membershipData.priceSection.list } />
				</div>
				<div className='px-4 flex justify-center max-sm:w-full lg:hidden'>
					<ButtonCta
						href={ membershipData.priceSection.btnCtaMobile.href }
						text={ membershipData.priceSection.btnCtaMobile.text }
						className='max-sm:w-full'
					/>
				</div>
			</div>
		</div>
	);
};

export default Membership;
