import React from 'react';

import ButtonCta from '../ButtonCta';

interface IInvestmentProps {
	bgimagedesktop: string;
	bgimagemobile: string;
}

const Investment = (props: IInvestmentProps) => {
	const { bgimagedesktop } = props;

	return (
		<>
			<section className='sm:px-4 mb-10'>
				<div className='rounded-[19px] md:h-full h-[811px] flex flex-col relative overflow-hidden -mt-36 md:mt-0'>
					<div
						style={ {
							backgroundImage: `url(${ bgimagedesktop })`,
						} }
						className={ 'bg-investment flex items-end w-full mx-auto  bg-no-repeat bg-cover bg-center pointer-events-none !h-full z-20 border absolute rounded-[19px]' }
					/>
					<div className='gradient-overlay'> </div>
					<div className='w-full px-4 lg:pl-10 md:pt-[146px] pb-[68px] md:pb-[100px] object-cover flex flex-col h-full justify-end z-20'>
						<h3 className='text-white font-Poppins font-semibold leading-[171.429%] tracking-[1.54px] uppercase sm:text-xs text-[10px] md:text-sm md:text-start text-center w-full'>
							An INVESTMENT IN YOUR FUTURE
						</h3>
						<h4 className='lg:text-4xl md:text-3xl text-2xl font-normal font-Poppins leading-[133.333%] md:leading-[125%] text-grey-secondary -tracking-[0.96px] md:text-start text-center md:-tracking-[1.44px] mb-2.5 md:mb-5 mt-[7px] md:max-w-[494px] w-full'>
							Prioritizing longevity is an investment in your future self.
						</h4>
						<p className='text-grey-primary sm:text-white md:text-sm text-xs md:text-start text-center font-Poppins leading-[142.857%] md:max-w-[423px] w-full flex'>
							Live longer without compromising your lifestyle—our longevity
							solutions are designed to fit seamlessly into your everyday life.
						</p>
						<ButtonCta
							className='md:max-w-[208px] w-full mt-10 md:mt-[60px]'
							text='Start now'
							href='/your-link'
							theme='secondary'
							arrowClassName='your-arrow-class'
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Investment;
