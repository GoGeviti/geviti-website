'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

const StepImage: React.FC<{ src: string; alt?: string }> = ({
	src,
	alt = '',
}) => {
	return (
		<div
			className={ clsxm(
				'w-full max-h-[433px] lg:max-h-[659px] aspect-[343/433] lg:aspect-[522/659] rounded-[13.142px] lg:rounded-20px bg-white p-[6.5px] lg:p-2.5',
				'shadow-[0px_160.987px_45.339px_0px_rgba(0,0,0,0.00),_0px_103.163px_41.397px_0px_rgba(0,0,0,0.01),_0px_57.824px_34.826px_0px_rgba(0,0,0,0.05),_0px_25.626px_25.626px_0px_rgba(0,0,0,0.09),_0px_6.571px_14.456px_0px_rgba(0,0,0,0.10)]',
				'lg:shadow-[0px_245px_69px_0px_rgba(158,158,158,0.00),_0px_157px_63px_0px_rgba(158,158,158,0.01),_0px_88px_53px_0px_rgba(158,158,158,0.05),_0px_39px_39px_0px_rgba(158,158,158,0.09),_0px_10px_22px_0px_rgba(158,158,158,0.10)]'
			) }
		>
			<div className='w-full h-full overflow-hidden relative rounded-md lg:rounded-xl'>
				<Image
					src={ src }
					fill
					className='h-full w-full object-cover'
					alt={ alt }
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw'
				/>
			</div>
		</div>
	);
};

const StepSmallImage: React.FC<{
  className?: string;
  imageClassName?: string;
  src: string;
}> = ({ className, imageClassName, src }) => {
	return (
		<div
			className={ clsxm(
				'absolute max-lg:left-1/2 max-lg:-translate-x-1/2 w-[75%] lg:w-[76%] max-w-[260px] lg:max-w-[397px]',
				className
			) }
		>
			<div
				className={ clsxm(
					'relative overflow-hidden rounded-[16.715px] lg:rounded-[25.44px] border lg:border-[1.5px] border-grey-100',
					'shadow-[0px_58.504px_16.715px_0px_rgba(181,181,181,0.00),_0px_37.23px_15.196px_0px_rgba(181,181,181,0.01),_0px_21.274px_12.916px_0px_rgba(181,181,181,0.05),_0px_9.117px_9.117px_0px_rgba(181,181,181,0.09),_0px_2.279px_5.319px_0px_rgba(181,181,181,0.10)]',
					'lg:shadow-[0px_89.035px_25.438px_0px_rgba(181,181,181,0.00),_0px_56.658px_23.126px_0px_rgba(181,181,181,0.01),_0px_32.376px_19.657px_0px_rgba(181,181,181,0.05),_0px_13.876px_13.876px_0px_rgba(181,181,181,0.09),_0px_3.469px_8.094px_0px_rgba(181,181,181,0.10)]',
					imageClassName
				) }
			>
				<Image
					src={ src }
					fill
					className='w-full h-full object-cover'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					alt=''
				/>
			</div>
		</div>
	);
};

const stepsData = [
	{
		title: 'Step 1: At-Home Labs',
		description:
      'Complete intake forms & bloodwork appointment. We send a mobile phlebotomist to you so you never have to leave the comfort of your home. The blood draw typically takes 10-15 minutes and will provide us a comprehensive picture of your current health status.',
		image: '/images/cultureapothecary/step-1.webp',
		smallImage: '/images/cultureapothecary/step-1-small.webp',
		content: (
			<div className='relative flex'>
				<StepImage
					src='/images/cultureapothecary/step-1.webp'
					alt='At-Home Labs'
				/>
				<StepSmallImage
					src='/images/cultureapothecary/step-1-small.webp'
					className='-bottom-[67px] lg:-bottom-20 lg:-right-[94px]'
					imageClassName='aspect-[397/205]'
				/>
			</div>
		),
	},
	{
		title: 'Step 2: Virtual Consult',
		description:
      'Once results are in, you’ll be prompted to schedule a review with your assigned health coach within the Geviti app. They’ll help demystify your labs, determine if additional testing is needed, and walk you through the recommended protocol to address any areas in need of support.',
		image: '/images/cultureapothecary/step-2.webp',
		smallImage: '/images/cultureapothecary/step-2-small.webp',
		content: (
			<div className='relative flex'>
				<StepImage
					src='/images/cultureapothecary/step-2.webp'
					alt='Virtual Consult'
				/>
				<StepSmallImage
					src='/images/cultureapothecary/step-2-small.webp'
					className='-bottom-11 lg:-bottom-[45.5px] lg:-right-[94px]'
					imageClassName='aspect-[397/123]'
				/>
			</div>
		),
	},
	{
		title: 'Step 3: Protocol Delivery',
		description:
      'Once you and your care team have aligned on the ideal path forward from a solutions standpoint, your personalized protocol (i.e. custom supplements, longevity peptides, any specialty tests etc.) will be delivered to your doorstep.',
		image: '/images/cultureapothecary/step-3.webp',
		smallImage: '/images/cultureapothecary/step-3-small.webp',
		content: (
			<div className='relative flex'>
				<StepImage
					src='/images/cultureapothecary/step-3.webp'
					alt='Protocol Delivery'
				/>
				<StepSmallImage
					src='/images/cultureapothecary/step-3-small.webp'
					className='-bottom-[71px] lg:-bottom-[107px] lg:-right-[94px] lg:!max-w-[445px]'
					imageClassName='aspect-[445/234]'
				/>
			</div>
		),
	},
	{
		title: 'Step 4: Ongoing Optimization',
		description:
      'Track your health score, wearable metrics and goal progress directly within the Geviti app. Message (and visit) with your assigned care team for helpful insights, guidance and accountability. Then, every 6 months, get your full labs redone at no added cost to continue the cycle of optimization.',
		image: '/images/cultureapothecary/step-4.webp',
		smallImage: '/images/cultureapothecary/step-4-small.webp',
		content: (
			<div className='relative flex'>
				<StepImage
					src='/images/cultureapothecary/step-4.webp'
					alt='Protocol Delivery'
				/>
				<StepSmallImage
					src='/images/cultureapothecary/step-4-small.webp'
					className='-bottom-[69px] lg:-bottom-[106px] lg:-right-[94px]'
					imageClassName='aspect-[397/171]'
				/>
			</div>
		),
	},
];

const Steps: React.FC<{
	className?: string;
	customStepImages?: {
		step1: string;
		step2: string;
		step3: string;
		step4: string;
	};
}> = ({ className, customStepImages }) => {
	const [activeCard, setActiveCard] = useState<number>(0);
	const ref = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 0', 'end 0'],
	});
	const cardLength = stepsData.length;

	// Use custom images if provided, otherwise use default images
	const getStepImage = (stepIndex: number) => {
		if (customStepImages) {
			const stepKeys = ['step1', 'step2', 'step3', 'step4'] as const;
			return customStepImages[stepKeys[stepIndex]];
		}
		return stepsData[stepIndex].image;
	};

	// Step positioning configuration
	const stepConfig = [
		{
			className: '-bottom-[67px] lg:-bottom-20 lg:-right-[94px]',
			imageClassName: 'aspect-[397/205]'
		},
		{
			className: '-bottom-11 lg:-bottom-[45.5px] lg:-right-[94px]',
			imageClassName: 'aspect-[397/123]'
		},
		{
			className: '-bottom-[71px] lg:-bottom-[107px] lg:-right-[94px] lg:!max-w-[445px]',
			imageClassName: 'aspect-[445/234]'
		},
		{
			className: '-bottom-[69px] lg:-bottom-[106px] lg:-right-[94px]',
			imageClassName: 'aspect-[397/171]'
		}
	];

	// Create dynamic steps data with custom images if provided
	const dynamicStepsData = stepsData.map((step, index) => ({
		...step,
		image: getStepImage(index),
		content: (
			<div className='relative flex'>
				<StepImage
					src={ getStepImage(index) }
					alt={ step.title }
				/>
				<StepSmallImage
					src={ step.smallImage }
					className={ stepConfig[index].className }
					imageClassName={ stepConfig[index].imageClassName }
				/>
			</div>
		),
	}));

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		const cardsBreakpoints = dynamicStepsData.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce(
			(acc, breakpoint, index) => {
				const distance = Math.abs(latest - breakpoint);

				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
					return index;
				}
				return acc;
			},
			0
		);
		setActiveCard(closestBreakpointIndex);
	});

	return (
		<div className={ clsxm('w-full mb-10 lg:mb-[128px] py-[124px] lg:py-[101px] relative', className) }>
			<div className='lg:min-h-[1840px] relative flex max-lg:flex-col w-full h-full lg:gap-40 xl:gap-[236px] container-center'>
				<div className='hidden lg:block sticky top-20 self-start max-w-[522px] aspect-[522/659] h-[85.93vh]'>
					{ dynamicStepsData[activeCard].content ?? null }
				</div>
				<div className='relative flex'>
					<div
						ref={ ref }
						className='max-w-[522px] max-lg:space-y-[109px] flex flex-col lg:h-fit'>
						{ dynamicStepsData.map((item, index) => (
							<div
								key={ item.title + index }
								className='lg:py-5'>
								<motion.h3
									initial={ {
										color: '#CFD0D2',
									} }
									animate={ {
										color: activeCard === index ? '#181A1C' : '#CFD0D2',
									} }
									className='h5 lg:h3 max-xs3:text-[6vw] -tracking-0.04em'
								>
									{ item.title }
								</motion.h3>
								<motion.p
									initial={ {
										color: '#CFD0D2',
									} }
									animate={ {
										color: activeCard === index ? '#7B7F81' : '#CFD0D2',
									} }
									className='text-sm/7 font-medium mt-6'
								>
									{ item.description }
								</motion.p>

								<div className='lg:hidden mt-[42px]'>
									{ item.content ?? null }
								</div>
							</div>
						)) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default Steps;
