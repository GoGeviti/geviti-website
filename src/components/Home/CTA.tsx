'use client';

import React from 'react';

import { ICTA } from '@/interfaces';

import { ChevronRight } from '../Icons';
import { CustomLink } from '..';

type CTAProps = {
	cta: ICTA.CTA;
};

const CTA: React.FC<CTAProps> = ({ cta }) => {
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<div className='h-full w-full lg:rounded-[19px] relative overflow-hidden bg-grey-background-2'>
				<div className='container-center items-center md:items-start flex flex-col py-[84px] md:py-[102px]'>
					<div className='mx-auto w-full text-center flex flex-col items-center'>
						<p className='mb-[14px] md:mb-4 text-[32px] lg:text-5xl font-Poppins md:leading-[93.75%] -tracking-[1.28px] md:-tracking-[1.92px] text-primary'>{ cta.title }</p>

						{ cta.subtitle && (
							<p className='text-xs lg:text-sm text-grey-cta font-Poppins leading-5 max-w-md'>
								{ cta.subtitle }
							</p>
						) }

						<CustomLink
							href={ cta.btnCta.href }
							className='btn-cta-landing btn-secondary group w-fit mt-9 md:mt-14'
							aria-label={ cta.btnCta.title }
						>
							<span className='text-btn-cta-landing'>
								{ cta.btnCta.title  }
							</span>

							<ChevronRight className='arrow-btn-cta-landing' />
						</CustomLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTA;
