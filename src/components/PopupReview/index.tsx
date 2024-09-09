'use client';

import React, { CSSProperties } from 'react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import { ShieldTick } from '../Icons';

type PopupReviewProps = {
  motionProps?: MotionProps;
  className?: string;
  wrapperClassName?: string;
  sizeLargerOnDesktop?: boolean;
  style?: CSSProperties;
  buttonClose?: React.ReactNode;
};

const popup = {
	title: 'HSA/FSA',
	titleSuffix: 'ACCEPTED',
	images: [
		'/images/marketing/review-3.webp',
		'/images/marketing/review-2.webp',
		'/images/marketing/review-1.webp',
	],
};

const PopupReview: React.FC<PopupReviewProps> = ({
	motionProps,
	className,
	wrapperClassName,
	style,
	sizeLargerOnDesktop,
	buttonClose,
}) => {
	const renderPopup = () => {
		return (
			<motion.div
				className={ className }
				{ ...motionProps }>
				<div
					style={ style }
					className={ clsxm(
						'bg-white max-lg:border max-lg:border-grey-50 rounded-[20px] p-3 relative text-primary',
						wrapperClassName
					) }
				>
					{ buttonClose }
					<div className='flex items-center gap-2.5'>
						<div
							className={ clsxm(
								'flex flex-row-reverse items-center w-[94px]',
								sizeLargerOnDesktop && 'lg:w-[130px]'
							) }
						>
							{ popup.images.map((img, imgIdx) => (
								<div
									className={ clsxm(
										'-ml-[23px] relative group',
										sizeLargerOnDesktop && 'lg:-ml-8'
									) }
									key={ `review-${imgIdx}` }
								>
									<Image
										height={ 100 }
										width={ 100 }
										src={ img }
										alt=''
										className={ clsxm(
											'object-cover !m-0 !p-0 object-top rounded-full h-[47px] w-[47px] border-[3px] border-white',
											sizeLargerOnDesktop && 'lg:h-[65px] lg:w-[65px]'
										) }
									/>
								</div>
							)) }
						</div>
						<div>
							<div
								className={ clsxm(
									'flex items-center gap-1 mb-[3px]',
									sizeLargerOnDesktop && 'lg:gap-5px lg:mb-2'
								) }
							>
								<ShieldTick
									className={ clsxm(
										'w-3.5 h-3.5 flex-shrink-0',
										sizeLargerOnDesktop && 'lg:w-5 lg:h-5'
									) }
								/>
								<h4
									className={ clsxm(
										'font-semibold text-sm leading-7',
										sizeLargerOnDesktop && 'lg:text-[20px]'
									) }
								>
									{ popup.title }
									<span
										className={ clsxm(
											'ml-1 text-xs leading-[25px] font-normal',
											sizeLargerOnDesktop && 'lg:ml-1.5 lg:text-[17px]'
										) }
									>
										{ popup.titleSuffix }
									</span>
								</h4>
							</div>
							<div className='flex items-center'>
								{ [...Array(5)].map((_, index) => (
									<div key={ `star-${index}` }>
										<Image
											alt=''
											src='/images/icons/star.svg'
											width={ 30 }
											height={ 34 }
											className='w-6 h-6'
										/>
									</div>
								)) }
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		);
	};

	return renderPopup();
};

export default PopupReview;
