import React from 'react';
import Image from 'next/image';

import { homeData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { getAllPost } from '@/services/products';

const learnMore = homeData.learnMore;

type LearnMoreProps = {
	withBg?: boolean;
};

const LearnMore: React.FC<LearnMoreProps> = async({ withBg = false }) => {
	const allPost = await getAllPost(3);

	return (
		<div className='overflow-hidden'>
			<div
				className={ clsxm(
					'h-full w-full lg:rounded-[19px] relative overflow-hidden',
					withBg && 'bg-[#EAEAEA]'
				) }
			>
				<div className='container-center items-center md:items-start flex flex-col py-[70px] lg:py-[95px]'>
					<div className='sm:mx-auto lg:w-full max-lg:text-center'>
						<p className='mb-11px sm:mb-7px text-pretitle text-grey-primary'>
							{ learnMore.preTitle }
						</p>

						{ learnMore.title && (
							<h2 className='text-heading-2 text-primary'>
								<span dangerouslySetInnerHTML={ { __html: learnMore.title } } />
							</h2>
						) }
					</div>

					<div className='md:mx-auto w-full max-md:flex max-md:justify-center'>
						<div className=''>
							<div className='pt-10 md:pt-16 flex md:flex-row flex-col items-start w-full no-scrollbar overflow-y-hidden transition-all select-none transform flex-nowrap overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth max-md:space-y-10  gap-x-18px lg:gap-x-[33px] py-1'>
								{ allPost.docs.map(items => {
									return (
										<div
											key={ `step-${ items.id }` }
											className={ clsxm(
												'w-full flex flex-col max-md:space-x-5 items-center md:transform md:transition-all md:duration-100 md:ease-in'
											) }
										>
											<div>
												<Image
													src={ items.hero?.media?.url ?? '' }
													alt={ items.title ?? '' }
													className='object-cover object-center w-full md:w-[382px] h-[189px] md:h-[233px] rounded-[13px]'
													width={ 100 }
													height={ 100 }
												/>
												<p className='mt-[15px] md:mt-[32px] text-pretitle text-grey-primary tracking-[1.54px] leading-6'>
													{ ' ' }
													{ new Date(
														items.publishedOn as string
													).toLocaleDateString('en-US', {
														month: 'long',
														day: 'numeric',
														year: 'numeric',
													}) }
												</p>
												<p className='text-xl md:text-2xl font-Poppins text-primary leading-[181.25%] -tracking-[0.96px] my-1'>
													{ ' ' }
													{ items.title }
												</p>
												{ /* <p className='text-xs md:text-sm text-grey-primary font-Poppins'> { items. }</p> */ }
											</div>
										</div>
									);
								}) }
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LearnMore;
