'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { marketplaceData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import useWindowDimensions from '@/hooks/useWindowDimensions';

import { Circle } from '../Icons';
import Navbar from '../Navbar';

const marketplace = marketplaceData.hero;

const Hero: React.FC = () => {
	const [selectedIdx, setSelectedIdx] = useState<number>(0);

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const onSelectStep = (id: number) => setSelectedIdx(id);

	const onMouseEnter = (id: number) => {
		if (!isMobile) onSelectStep(id);
	};
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<Navbar isWithnavbarData={ false } />
			<div className='bg-primary w-full h-full lg:rounded-[19px] relative pt-11px lg:pt-5 overflow-hidden'>
				<div className='pt-[52px] md:pt-[91px] lg:min-h-[605px] relative overflow-hidden isolate'>
					<div className='container-center w-full flex max-lg:flex-col lg:space-x-5 relative items-end'>
						<div className='mx-auto sm:max-w-[446px] lg:mx-0 lg:flex-auto text-center lg:text-left pt-[33px] lg:pt-[53px] space-y-[14px]'>
							<h2 className='text-grey-secondary font-Poppins font-medium text-[10px] sm:text-sm leading-[150%] sm:leading-6 uppercase tracking-[0.092em] sm:tracking-[1.54px]'>
								<span className='font-Poppins text-[15px] font-bold tracking-[1.65px]'>
									Nate!{ ' ' }
								</span>
								{ marketplace.preTitle }
							</h2>
							{ marketplace.title && (
								<h1 className='font-Poppins text-5xl font-semibold leading-[39.5px] sm:-tracking-[1.92px] text-grey-secondary'>
									<span
										dangerouslySetInnerHTML={ { __html: marketplace.title } }
									/>
								</h1>
							) }
							{ marketplace.description && (
								<p className='font-Poppins text-xs sm:text-sm leading-5 text-grey-primary pb-[108px]'>
									<span
										dangerouslySetInnerHTML={ {
											__html: marketplace.description,
										} }
									/>
								</p>
							) }
							<div className='bg-grey-search px-[22px] py-[14px] rounded-full sm:max-w-[420px]'>
								<input
									type='text'
									name='search'
									id='search'
									autoComplete='off'
									className='block w-full bg-grey-search text-primary placeholder:text-primary font-Poppins text-sm border-none outline-none'
									placeholder='Search Products'
								/>
							</div>
						</div>

						<div className=' grid grid-cols-3 w-full justify-center items-center no-scrollbar overflow-y-hidden transition-all select-none transform overflow-x-auto lg:overflow-hidden scrolling-touch scroll-smooth max-md:space-y-10  gap-x-18px lg:gap-x-5 py-1 -mb-8'>
							{ marketplace.product.map((product, id) => {
								const isSelected = id === selectedIdx;

								return (
									<div
										onClick={ () => onSelectStep(id) }
										onMouseEnter={ () => onMouseEnter(id) }
										key={ id }
										className={ clsxm(
											'flex flex-col items-center md:transform md:transition-all md:duration-100 md:ease-in ',
											isSelected
												? 'w-[250px] h-[320px] '
												: 'w-[200px] h-[256px] '
										) }
									>
										<div
											className={ clsxm(
												'justify-center group cursor-pointer w-full h-full relative flex flex-col overflow-hidden bg-grey-secondary'
											) }
										>
											<div className='relative overflow-hidden bg-[#E7E7E7] group-hover:opacity-75 h-[117px] sm:h-[202px]'>
												{ product.image && (
													<Image
														priority={ true }
														src={ product.image }
														alt={ product.name ?? '' }
														className='object-cover object-center'
														fill
													/>
												) }
											</div>
											<div className='flex flex-1 flex-col space-y-1 py-[13px] sm:py-18px px-[13px] sm:px-[21px]'>
												<h4 className='font-Poppins text-base font-medium text-primary leading-[25.37px] -tracking-[0.64px]'>
													{ product.name }
												</h4>
												<p className='font-Poppins text-sm text-grey-primary leading-5 pb-[19px]'>
													{ product.kind }
												</p>
												<div className='flex justify-start items-center space-x-1 text-primary py-[2px] px-[6px] bg-blue-1 rounded-full w-fit'>
													<Circle />
													{ product.price && (
														<p className='text-xs leading-[152.116%] font-BRSonoma'>
															{ product.price }
														</p>
													) }
												</div>
												<p
													className={ clsxm(
														'text-[10px] pt-2 font-BRSonoma leading-[155%] text-grey-primary md:transform md:transition-all md:duration-100 md:ease-in',
														isSelected ? 'block' : 'hidden'
													) }
												>
													{ product.desc }
												</p>
											</div>
										</div>
										<div
											key={ `indicator-step-${ id }` }
											className={ clsxm(
												'h-1 rounded-full cursor-pointer transform transition-all duration-300 ease-linear mt-7',
												id === selectedIdx
													? 'w-[110px] xxs:w-[122px] bg-blue-1 shadow-[0px_-8px_24px_0px_rgba(251,251,251,0.35)]'
													: 'w-8 xxs:w-[38px] bg-grey-shadow'
											) }
										/>
									</div>
								);
							}) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
