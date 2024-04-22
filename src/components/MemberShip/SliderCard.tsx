'use client';
import { useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

import ButtonCta from '../ButtonCta';
import { BlueArrow } from '../Icons/Landing';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface ISliderCardProps {
	title: string;
	heading: string;
	subheading: string;
	list: any;
	img: string;
	hide: string;
}

interface IProps {
	obj: ISliderCardProps;
	index: number;
	nextSlide: any;
	currentSlide: number;
}

const SliderCard = (props: IProps) => {
	const { title, heading, subheading, list, hide, img } = props.obj;

	const { index, nextSlide, currentSlide } = props;

	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const handleMouseMove = (e: any) => {
		const boundingRect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - boundingRect.left;
		const y = e.clientY - boundingRect.top;
		setCursorPosition({ x, y });
		gsap.to('.custom-cursor-anim', {
			x: x - 78 + 'px',
			y: y - 78 + 'px',
			duration: 0.1,
			ease: 'power1.inOut',
		});
	};

	const handleMouseEnter = () => {
		gsap.to('.custom-cursor-anim', {
			scale: 1,
			duration: 0.1,
		});
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		gsap.to('.custom-cursor-anim', {
			scale: 0,
			duration: 0.1,
		});
		setIsHovering(false);
	};

	console.log(cursorPosition, isHovering);

	return (
		<>
			<div className='!flex lg:flex-row flex-col-reverse '>
				<div className='lg:w-1/2 relative z-10 bg-primary px-4 lg:pl-16 lg:pr-11 pt-6 sm:pt-20 h-full'>
					<p className=' text-grey-primary tracking-[1.1px] leading-[240%] uppercase font-Poppins text-[10px] sm:text-sm font-semibold'>
						{ title }
					</p>
					<h4 className=' text-white !leading-[150%] sm:!leading-[140%] max-w-[338px] tracking-[-0.96px] sm:tracking-[-1.44px] font-Poppins text-[24px] sm:text-4xl font-medium pb-6 pt-2 sm:max-w-[592px]'>
						{ heading }
					</h4>
					<p className=' text-grey-primary !leading-[166%] sm:!leading-[148%] font-Poppins text-[12px] sm:text-sm max-w-[446px]'>
						{ subheading }
					</p>
					<ul className=' flex flex-col list-disc mt-6 mb-10 sm:my-10 pl-4 max-lg:pb-24'>
						{ list.map((data: string, i: number) => (
							<li
								key={ i }
								className='text-white leading-[228.571%] sm:leading-[177%] font-Poppins text-[14px] sm:text-lg'
							>
								{ data }
							</li>
						)) }
					</ul>
					<div className={ `${ hide } ` }>
						<ButtonCta
							href='/'
							text='Join Geviti'
							theme='secondary'
							className='w-fit'
						/>
					</div>
				</div>
				<div
					onMouseMove={ handleMouseMove }
					onMouseEnter={ handleMouseEnter }
					onMouseLeave={ handleMouseLeave }
					onClick={ nextSlide }
					className='lg:w-1/2 max-lg:h-[500px] relative'
				>
					{ currentSlide == index && (
						<div className='absolute w-[156px] custom-cursor-anim cursor-pointer h-[156px] rounded-full flex items-center justify-center gap-2 bg-primary'>
							<p className=' text-sm text-blue-1 font-Poppins font-medium'>
								Click to slide
							</p>
							<BlueArrow />
						</div>
					) }

					<Image
						className=' w-full h-full object-cover'
						src={ img }
						alt='slider1'
						width={ 300 }
						height={ 300 }
						unoptimized
					/>
				</div>
			</div>
		</>
	);
};

export default SliderCard;
