'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { howItWorksData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import { CheckBlue2, ChevronRight, HelpIcons } from '../Icons';
import WrapperAnimation from '../WrapperAnimation';

const comprehensive = howItWorksData.comprehensive;

const Comprehensive: React.FC = () => {
	const [selectedItem, setselectedItem] = useState(1);
	const renderPopularPackage = () => {
		return (
			<div className='grid grid-cols-1 lg:grid-cols-3 w-full gap-4 lg:gap-5'>
				{ comprehensive.list.map((items, id) => (
					<div
						key={ id }
						onClick={ () => setselectedItem(id) }
						className={ clsxm('flex flex-col justify-end p-6 lg:p-[30px]', selectedItem === id && 'bg-white rounded-lg') }>
						<p className={ clsxm(' px-2 lg:px-[10px] py-[2px] rounded-full w-fit font-Poppins text-[11.353px] lg:text-sm font-medium leading-[16.219px] lg:leading-5 mb-5 lg:mb-6', selectedItem === id ? 'bg-blue-1/30 text-blue-4' : 'bg-primary/[0.06] text-primary') }>{ items.tag }</p>
						<p className='font-Poppins text-base lg:text-xl font-medium leading-[22.706px] lg:leading-7 text-primary'>{ items.title }</p>
						<p className='font-Poppins text-[38.104px] lg:text-5xl font-medium text-primary leading-[127.692%] lg:leading-[125%] -tracking-[0.762px] lg:-tracking-[0.96px;]'>{ items.price }</p>
						<div className='flex justify-between items-center'>
							<p className='text-grey-primary text-sm leading-[19.462px] lg:leading-6 font-medium'>{ items.priceNote }</p>
							<p className='text-grey-primary text-xs lg:text-[13px] -tracking-[0.377px] lg:-tracking-[0.464px] font-Poppins font-medium lg:font-semibold'>{ items.notes } </p>
						</div>
						<div className='flex-col gap-y-2 lg:gap-y-[11px] flex my-[18px] lg:my-[23px]'>
							{ items.list?.map((component, componentIdx) => (
								<div key={ componentIdx }>
									<div className='flex items-center justify-between'>
										<div className='flex items-center gap-1 lg:gap-[6px] text-primary'>
											<HelpIcons/>
											<p className='text-xs lg:text-sm text-primary font-medium font-Poppins -tracking-[0.43px] lg:-tracking-[0.53px]'>{ component }</p>
										</div>
										<CheckBlue2 />
									</div>
								</div>
							)) }
						</div>
						<Link
							prefetch={ false }
							href={ `/orders?selectedProduct=${ id + 1 }` }
							className='btn-cta-landing group btn-primary w-full text-center flex items-center justify-center'
							aria-label={ items.btn }
						>
							<span className='text-btn-cta-landing'>
								{ items.btn }
							</span>
							<ChevronRight className='text-white'/>
						</Link>
					</div>
				)) }
			</div>
		);
	};

	return (
		<>
			<div
				id='packages'
				className='container-center w-full py-[70px] lg:py-[143px] relative flex flex-col'>
				<WrapperAnimation
					className='flex flex-col items-center text-center space-y-[14px]'
				>
					<p className='text-grey-primary font-Poppins text-[10px] lg:text-sm font-semibold leading-6 tracking-[1.1px] lg:tracking-[1.54px] uppercase'>{ comprehensive.preTitle }</p>

					<h2 className='text-primary font-Poppins text-[25px] lg:text-4xl leading-[32.254px] lg:leading-[45px] -tracking-[1px] sm:-tracking-[1.44px]'>
						{ comprehensive.title }
					</h2>
					<div
						className='text-grey-cta font-Poppins text-sm lg:leading-5 lg:block hidden'
						dangerouslySetInnerHTML={ { __html: comprehensive.desc  } } />
					<div
						className='text-grey-cta font-Poppins text-xs lg:leading-5 lg:hidden max-w-sm'
						dangerouslySetInnerHTML={ { __html: comprehensive.descMobile  } } />
				</WrapperAnimation>
				<WrapperAnimation
					className='max-lg:mt-[47px] lg:my-[60px]'
				>
					{ renderPopularPackage() }
				</WrapperAnimation>
				<div className='lg:flex justify-center items-center space-x-[10px] hidden'>
					<p className='text-primary font-Poppins text-sm font-semibold leading-6'>Compare Tested Biomarkers</p>
					<ChevronRight/>
				</div>
			</div>
		</>
	);
};

export default Comprehensive;