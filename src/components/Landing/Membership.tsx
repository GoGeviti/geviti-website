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

const Membership: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const renderTitleDesc = (item: any) => {
		return (
			<div className='px-2 flex flex-col items-center text-center'>
				{ /* <p className='text-pretitle text-grey-primary'>{ item.preTitle }</p> */ }
				<div className='my-2.5 lg:mt-0 lg:mb-3'>
					<h3 className='text-[5.581vw] !leading-8 xs:text-2xl sm:text-3xl lg:text-4xl lg:!leading-normal -tracking-0.04em text-primary'>
						<span dangerouslySetInnerHTML={ { __html: item.title } } />
					</h3>
				</div>
				<p className='text-[2.927vw] xs:text-xs sm:text-sm !leading-5 text-grey-400 lg:max-w-[446px] lg:mx-auto'>
					<span dangerouslySetInnerHTML={ { __html: item.description } } />
				</p>
			</div>
		);
	};

	const renderBtnCtaMobile = (props: { href: string; text: string }) => {
		return (
			<div className='px-4 flex justify-center max-sm:w-full lg:hidden'>
				<ButtonCta
					href={ props.href }
					text={ props.text }
					className='max-sm:w-full'
				/>
			</div>
		);
	};

	return (
		<div className='lg:px-3 py-6 lg:pt-[13px] lg:pb-[25px] font-Poppins'>
			<div className='bg-white rounded-19px py-[46px] lg:pb-0'>
				{ renderTitleDesc(membershipData.priceSection) }
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
				{ renderBtnCtaMobile(membershipData.priceSection.btnCtaMobile) }
			</div>
			{ /* <div className=''> */ }
			{ /* <div className='bg-white rounded-19px py-[46px] lg:pb-0'>
					{ renderTitleDesc(membershipData.locationSection) }
					<div className='max-lg:hidden mt-[22px] px-2 flex justify-center'>
						<ButtonCta
							href={ membershipData.locationSection.btnCta.href }
							text={ membershipData.locationSection.btnCta.text }
							aria-label={ membershipData.locationSection.btnCta.text }
						/>
					</div>
					<div className='px-3.5 lg:px-[43px] pt-[84px] lg:pt-6 pb-[133px] lg:pb-[27.38px]'>
						<Image
							src={ membershipData.locationSection.image }
							alt='continent'
							width={ 610 }
							height={ 383.62 }
							className='w-full h-full lg:h-[23.976rem] lg:w-auto object-contain'
						/>
					</div>
					{ renderBtnCtaMobile(membershipData.locationSection.btnCtaMobile) }
				</div> */ }
			{ /* </div> */ }
		</div>
	);
};

export default Membership;
