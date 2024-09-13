import React from 'react';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';

type BannerProps = {
  preTitle: string;
  title?: string;
  description?: string;
  image: string;
  imageMobile?: string;
  btnCta: {
    href: string;
    text: string;
    externalLink?: boolean;
  };
  overlayClassName?: string;
  children?: React.ReactNode;
};

const Banner: React.FC<BannerProps> = ({
	preTitle,
	title,
	description,
	image,
	imageMobile,
	btnCta,
	overlayClassName,
	children,
}) => {
	return (
		<div className='lg:px-3 overflow-hidden font-Poppins'>
			<div className='bg-grey-secondary h-full w-full rounded-19px relative overflow-hidden'>
				{ children }

				<div className='container-center max-lg:pb-[54px] grid-cols-1 grid lg:grid-cols-2 max-lg:gap-y-7 lg:gap-x-8 lg:relative'>
					<div className='max-lg:h-[811px] lg:pb-[100px] lg:pt-[146px] w-full'>
						<div className='h-full flex flex-col justify-end lg:justify-center relative z-10 max-lg:w-full lg:max-w-2xl mx-auto lg:mx-0'>
							<div className='text-center lg:text-left lg:max-w-2xl max-lg:mx-auto'>
								<p className='mb-3.5 sm:mb-7px text-pretitle text-grey-primary lg:text-white'>
									{ preTitle }
								</p>

								{ title && (
									<h2 className='md:max-w-[494px] max-lg:mx-auto mb-2.5 sm:mb-5 font-Poppins font-normal text-[6.1vw] xs2:text-2xl md:text-[32px] lg:text-4xl !leading-[133%] sm:!leading-[125%] -tracking-0.04em text-grey-secondary'>
										<span dangerouslySetInnerHTML={ { __html: title } } />
									</h2>
								) }

								{ description && (
									<p className='text-grey-primary lg:text-white max-sm:max-w-[330px] max-lg:mx-auto md:max-w-[415px] font-normal text-xs sm:text-sm !leading-5'>
										<span dangerouslySetInnerHTML={ { __html: description } } />
									</p>
								) }

								<div className='flex max-sm:w-full max-lg:justify-center mt-[52px] sm:mt-[60px]'>
									<ButtonCta
										href={ btnCta.href }
										externalLink={ btnCta.externalLink }
										aria-label={ btnCta.text }
										text={ btnCta.text }
										theme='secondary'
										className='max-sm:w-full'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='max-lg:hidden absolute inset-0 w-full h-full'>
					<div className='relative overflow-hidden w-full h-full lg:rounded-19px'>
						<Image
							src={ image }
							alt='investment'
							className='object-cover pointer-events-none'
							quality={ 90 }
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
							fill
						/>
					</div>
				</div>
				<div
					className={ clsxm(
						'absolute bottom-0 inset-x-0 lg:rounded-19px h-full z-[5]',
						overlayClassName ?? 'bg-banner-mobile-landing lg:bg-banner-landing'
					) }
				/>

				<div className='lg:hidden absolute inset-0 w-full h-full'>
					<div className='relative overflow-hidden w-full h-full'>
						<Image
							src={ imageMobile ?? image }
							alt='mission'
							className='object-cover pointer-events-none'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw'
							fill
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
