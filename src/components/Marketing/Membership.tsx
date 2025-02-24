'use client';

import React from 'react';
import Image from 'next/image';

import { marketingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { useCarousel } from '@/hooks/embla/use-carousel';
import { SlugOpt } from '@/interfaces/marketing';

import SectionHeading from './SectionHeading';

const membershipData = marketingData.membership;

type MemberShipProps = {
  slug: SlugOpt;
};

const Membership: React.FC<MemberShipProps> = ({ slug }) => {
	const carousel = useCarousel({
		loop: false,
		duration: 25,
		align: 'start',
	});
	const { mainRef: emblaRef } = carousel;

	const renderMembershipList = () => {
		return (
			<div
				className='overflow-hidden'
				ref={ emblaRef }>
				<div className='lg:container-center flex lg:grid lg:grid-cols-4 lg:justify-center h-full flex-nowrap lg:gap-x-3.5 max-lg:touch-pan-y max-lg:touch-pinch-zoom scrolling-touch scroll-smooth max-lg:first:ml-0.5 max-lg:last:mr-4'>
					<MembershipList slug={ slug } />
				</div>
			</div>
		);
	};

	return (
		<div className='w-full'>
			<div className='w-full container-center'>
				<SectionHeading
					title={ membershipData.title[slug] }
					description={ membershipData.description[slug] }
					cta={ {
						href: membershipData.cta.href[slug],
						text: membershipData.cta.text[slug],
					} }
				/>
			</div>
			<div className='relative w-full'>{ renderMembershipList() }</div>
		</div>
	);
};

export default Membership;

const MembershipList: React.FC<MemberShipProps> = ({ slug }) => {
	return (
		<>
			{ membershipData.list[slug]?.map((item, itemIdx) => (
				<div
					key={ itemIdx }
					className='min-w-0 pb-[62px] lg:pb-[224px] pt-[40px] lg:pt-[124px] flex flex-none max-lg:pl-3.5'
					style={ {
						transform: 'translate3d(0, 0, 0)',
					} }
				>
					<div
						className={ clsxm(
							'select-none lg:hover:shadow-card-marketing-membership transform transition ease-in-out duration-200',
							'h-[425px] lg:h-[453px] w-[calc(100vw-53.32px)] sm:w-[323.676px] lg:w-full',
							'group bg-grey-primary-light rounded-xl pt-3.5 pb-[11px] flex flex-col flex-none'
						) }
					>
						<div className='flex flex-col relative w-full h-full'>
							<h6 className='px-3.5 whitespace-nowrap text-[5.233vw] xs4:text-2xl lg:text-lg !leading-normal lg:!leading-[141%] -tracking-0.04em font-medium text-primary'>
								<span dangerouslySetInnerHTML={ { __html: item.title || '' } } />
							</h6>
							<div
								className={ clsxm(
									'w-full h-full relative overflow-hidden',
									itemIdx === 0 && 'mt-10',
									itemIdx === 3 && 'px-[23px] mt-3 mb-12 lg:mb-8',
									itemIdx === 2 && 'mt-[33px] lg:mt-[60px]',
									itemIdx === 1 && 'mt-[27px] mb-[45px] lg:mt-[52px]'
								) }
							>
								<div className='relative overflow-hidden w-full h-full'>
									<Image
										src={ item.image }
										alt=''
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
										className='w-full h-full object-contain'
									/>
								</div>
							</div>
							<div
								className='pt-10 lg:pt-[45px] absolute bottom-0 inset-x-0 z-10 px-3.5'
								style={ {
									background:
                    'linear-gradient(0deg, #FCFCFC 74.23%, rgba(252, 252, 252, 0.00) 100%)',
								} }
							>
								<div className='max-sm:max-w-[236.424px] lg:max-w-[252px] text-primary'>
									<p className='text-xs !leading-5'>
										<span
											dangerouslySetInnerHTML={ {
												__html: item.description || '',
											} }
										/>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)) }
		</>
	);
};
