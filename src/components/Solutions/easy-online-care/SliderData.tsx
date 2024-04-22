/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import ButtonCta from '../../ButtonCta';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IProps {
	cardslist: any;
}

const SliderData = (props: IProps) => {
	const { cardslist } = props;

	const sliderRef = useRef<any>(null);
	const [activeSlide, setActiveSlide] = useState(0);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		// autoplay: true,
		slidesToScroll: 1,
		fade: false,
		arrows: false,
		afterChange: (current: React.SetStateAction<number>) =>
			setActiveSlide(current),
	};

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef?.current?.slickNext();
		}
	};

	const prevSlide = () => {
		if (sliderRef.current) {
			sliderRef?.current?.slickPrev();
		}
	};

	return (
		<section className='w-full'>
			<div className=' relative flex justify-between items-center w-full'>
				<button
					onClick={ prevSlide }
					className={ `min-w-[46px] min-h-[46px] rounded-full flex items-center justify-center z-50 relative ${ activeSlide === 0 ? 'bg-[#F5F6F6]' : 'bg-primary'
					}` }
				>
					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.0713 13.1411L6.93129 9.00111L11.0713 4.86111'
							stroke={ activeSlide === 0 ? '#181A1C' : '#99D4FF' }
							strokeWidth='1.38'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>

				<div className='flex w-[calc(100%-110px)] justify-center'>
					<Slider
						ref={ sliderRef }
						{ ...settings }
						className=' relative z-10 h-auto custom-slider'
					>
						{ cardslist.map((obj: any, index: number) => (
							<div
								key={ index }
								className='relative max-w-full !flex items-center justify-center'
							>
								<div
									style={ { backgroundSize: '100% 100%' } }
									className='w-full absolute !-z-50 h-full bg-[url(/images/solution_media/pill-bg.webp)] object-cover appearance-none bg-no-repeat'
								/>
								<img
									src={ obj.imageURL }
									alt={ `Slider Image ${ index + 1 }` }
									className='max-w-[230px] w-full h-full z-20 object-contain'
								/>
								<p className='absolute top-6 !z-50 -left-[88%] px-6 py-3 bg-[#fbfbfb] rounded-[14px] shadow-[0px_4px_24px_0px_rgba_(0_0_0_0.15)] text-lg font-medium leading-[140.947%] text-primary font-Poppins -tracking-[0.72px]'>
									As low as $95/m*
								</p>
							</div>
						)) }
					</Slider>
				</div>
				<button
					onClick={ nextSlide }
					className={ `min-w-[46px] min-h-[46px] rounded-full flex items-center justify-center z-50 relative  ${ activeSlide === cardslist.length - 1 ? 'bg-[#F5F6F6]' : 'bg-primary'
					}` }
				>
					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M6.92871 13.1411L11.0687 9.00111L6.92871 4.86111'
							stroke={
								activeSlide === cardslist.length - 1 ? '#181A1C' : '#99D4FF'
							}
							strokeWidth='1.38'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
			</div>
			<div className='flex justify-between md:hidden z-10 w-full'>
				<ButtonCta
					text='Get Started'
					href='/your-link'
					theme='primary'
					className='w-full mt-[74px]'
				/>
			</div>
		</section>
	);
};

export default SliderData;
