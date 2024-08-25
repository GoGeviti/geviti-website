import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { marketingData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

const membershipData = marketingData.membership;

const Membership: React.FC = () => {
	return (
		<div className='w-full'>
			<div className='flex max-lg:flex-col gap-y-6 lg:grid lg:grid-cols-12 w-full container-center'>
				<div className='lg:col-span-5'>
					<h2 className='text-primary text-2xl lg:text-4xl !leading-normal lg:font-medium -tracking-0.04em'>
						<span dangerouslySetInnerHTML={ { __html: membershipData.title } } />
					</h2>
				</div>
				<div className='lg:col-span-7 lg:max-w-[519px] lg:ml-auto'>
					<div className='space-y-18px'>
						<p className='text-grey-primary text-sm font-medium !leading-6'>
							{ membershipData.description }
						</p>

						<div className='max-sm:w-full flex'>
							<Link
								href={ membershipData.cta.href }
								className='btn btn-primary flex items-center justify-center max-sm:w-full py-3 px-5 sm:px-16 text-sm font-medium !leading-6'
							>
								{ membershipData.cta.text }
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='relative max-lg:ml-4'>
				<div className='lg:container-center snap-x snap-mandatory pb-[62px] lg:pb-[224px] pt-[40px] lg:pt-[124px] max-lg:last:pr-4 max-lg:first:pl-4 no-scrollbar select-none transform flex lg:grid lg:grid-cols-4 lg:justify-center h-full flex-nowrap overflow-x-auto overflow-y-hidden scrolling-touch scroll-smooth gap-x-3.5 relative'>
					{ membershipData.list.map((item, itemIdx) => (
						<div key={ itemIdx }>
							<div
								className={ clsxm(
									'lg:hover:shadow-card-marketing-membership flex-none snap-start overflow-hidden',
									'h-[425px] lg:h-[453px] w-[calc(100vw-53.32px)] sm:w-[323.676px] lg:w-full',
									'group bg-grey-primary-light rounded-xl pt-3.5 pb-[11px]'
								) }
							>
								<div className='flex flex-col relative w-full h-full'>
									<h6 className='px-3.5 text-2xl lg:text-lg !leading-normal lg:!leading-[141%] -tracking-0.04em font-medium text-primary'>
										<span
											dangerouslySetInnerHTML={ { __html: item.title || '' } }
										/>
									</h6>
									<div
										className={ clsxm(
											'w-full h-full relative overflow-hidden',
											itemIdx === 3 && 'px-[23px] mb-10 lg:mb-8',
											itemIdx === 2 && 'mt-[33px] lg:mt-[60px]',
											itemIdx === 1 && 'mt-[27px] mb-[45px] lg:mt-[52px]'
										) }
									>
										<div className='relative overflow-hidden w-full h-full'>
											<Image
												src={ item.image }
												alt=''
												fill
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
				</div>
			</div>
		</div>
	);
};

export default Membership;
