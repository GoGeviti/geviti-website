'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import { CheckCircleIcon, ChevronDown } from '../Icons';

const accordionData = [
	{
		title: 'Chronic Fatigue',
		description:
      'Ongoing sense of exhaustion, low energy, and mental or physical weariness that persists even with adequate rest.',
	},
	{
		title: 'Peri/post menopause',
		description:
      'Physical and emotional changes, such as hot flashes, mood swings, and sleep disturbances, that occur as a woman’s body transitions out of its reproductive years.',
	},
	{
		title: 'Weight Management Issues',
		description:
      'Difficulty achieving or maintaining a healthy weight despite efforts with diet, exercise, or lifestyle changes.',
	},
	{
		title: 'Low Libido',
		description:
      'Persistent lack of sexual desire or interest, often accompanied by reduced arousal or satisfaction, which can stem from hormonal changes, stress, or other health factors.',
	},
	{
		title: 'Cognitive Decline',
		description:
      'Gradual reduction in memory, focus, problem-solving abilities, and overall mental sharpness, often impacting daily functioning and quality of life.',
	},
];

type SolutionProps = {
	imageUrl?: string;
	popupReview?: string;
	list?: {
		title: string;
		description: string;
	}[];
}

const Solution: React.FC<SolutionProps> = ({ imageUrl, popupReview, list }) => {
	const [openIdx, setOpenIdx] = useState<number>(0);

	const toggleAccordion = (idx: number) => {
		if (openIdx === idx) setOpenIdx(-1);
		else setOpenIdx(idx);
	};

	const renderAccordionList = () => {
		const data = list?.length ? list : accordionData;
		return data.map(({ title, description }, index) => {
			const isOpen = index === openIdx;

			return (
				<div
					key={ title }
					onClick={ () => toggleAccordion(index) }
					className='relative overflow-hidden cursor-pointer'
				>
					<div className='relative w-full py-3'>
						<div className='flex items-center justify-between gap-6'>
							<div className='flex items-center gap-3.5'>
								<CheckCircleIcon
									className={ clsxm(
										'w-18px h-18px ease-in-out transition-colors duration-200',
										isOpen ? 'text-[#4AADF6]' : 'text-grey-primary'
									) }
								/>
								<h6
									className={ clsxm(
										'h6 -tracking-0.04em',
										isOpen ? 'text-primary' : 'text-grey-primary'
									) }
								>
									{ title }
								</h6>
							</div>
							<ChevronDown
								className={ clsxm(
									'w-4 h-4 ease-out transform duration-200',
									isOpen ? 'rotate-180 text-primary' : 'text-grey-primary'
								) }
							/>
						</div>
						<AnimatePresence mode='wait'>
							{ isOpen && (
								<motion.div
									key={ `culture-solution-${title}` }
									initial={ { y: -5, opacity: 0, height: 0 } }
									animate={ { y: 0, opacity: 1, height: 'fit-content' } }
									exit={ { y: -5, opacity: 0, height: 0 } }
									transition={ { duration: 0.3, ease: 'easeInOut' } }
								>
									<div className='pt-1 pl-8 text-grey-primary text-sm'>
										{ description }
									</div>
								</motion.div>
							) }
						</AnimatePresence>
					</div>
				</div>
			);
		});
	};

	return (
		<div className='relative overflow-hidden isolate'>
			<div className='flex max-lg:flex-col-reverse w-full lg:container-center pb-16 lg:pb-[175px]'>
				<div className='max-lg:mt-[42px] lg:flex-none lg:absolute lg:right-1/2 lg:left-0 lg:pr-10 xl:pr-[109px] xxxl:left-auto'>
					<div className='relative flex'>
						<div className='lg:flex-none lg:max-w-none relative w-full aspect-square lg:h-[640px] overflow-hidden'>
							<Image
								alt='Alex Clark'
								src={ imageUrl || '/images/cultureapothecary/solution-background.webp' }
								fill
								quality={ 100 }
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw'
								className='w-full object-cover object-top'
							/>
						</div>
						{ popupReview && (
							<div className='absolute z-20 -bottom-[60px] lg:-bottom-[42px] right-1/2 max-lg:-translate-x-1/2 lg:-right-[42px] w-full max-w-[calc(100vw-54px)] xs:max-w-[342px] rounded-xl py-3 px-5 flex flex-col gap-y-3 border border-grey-100 bg-white/50 backdrop-blur-lg'>
								<svg
									width='17'
									height='16'
									viewBox='0 0 17 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.43592 0.863281C1.96492 4.22581 0.337891 7.80528 0.337891 11.0051C0.337891 13.6084 2.29033 15.5066 4.24276 15.5066C5.97826 15.5066 7.38836 14.0965 7.38836 12.361C7.38836 10.1374 5.76132 8.99843 3.37501 8.99843C3.37501 6.34095 4.18853 4.76815 6.73754 2.1649L5.43592 0.863281ZM14.4931 0.863281C11.0221 4.22581 9.39503 7.80528 9.39503 11.0051C9.39503 13.6084 11.3475 15.5066 13.2999 15.5066C15.0354 15.5066 16.4455 14.0965 16.4455 12.361C16.4455 10.1374 14.8185 8.99843 12.4321 8.99843C12.4321 6.34095 13.2457 4.76815 15.7947 2.1649L14.4931 0.863281Z'
										fill='#4AADF6'
									/>
								</svg>
								<p className='italic font-medium -tracking-0.04em text-primary text-base/[21px] max-w-[280px]'>
								Feel like a celebrity with your own personal health concierge service at your fingertips, without the price.
								</p>
								<svg
									width='17'
									height='16'
									viewBox='0 0 17 16'
									fill='none'
									className='self-end transform rotate-180'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.43592 0.863281C1.96492 4.22581 0.337891 7.80528 0.337891 11.0051C0.337891 13.6084 2.29033 15.5066 4.24276 15.5066C5.97826 15.5066 7.38836 14.0965 7.38836 12.361C7.38836 10.1374 5.76132 8.99843 3.37501 8.99843C3.37501 6.34095 4.18853 4.76815 6.73754 2.1649L5.43592 0.863281ZM14.4931 0.863281C11.0221 4.22581 9.39503 7.80528 9.39503 11.0051C9.39503 13.6084 11.3475 15.5066 13.2999 15.5066C15.0354 15.5066 16.4455 14.0965 16.4455 12.361C16.4455 10.1374 14.8185 8.99843 12.4321 8.99843C12.4321 6.34095 13.2457 4.76815 15.7947 2.1649L14.4931 0.863281Z'
										fill='#4AADF6'
									/>
								</svg>
							</div>
						) }
					</div>
				</div>
				<div className='w-full lg:relative lg:left-1/2 flex lg:min-h-[640px]'>
					<div className='lg:max-w-[507px] max-lg:px-4 flex flex-col gap-[42px]'>
						<h2 className='h5 lg:h3 max-xs3:text-[6vw] max-sm:max-w-[337px]'>
							<span className='max-lg:hidden'>
							We assist in total body optimization for a healthier, longer lifespan
							</span>
							<span className='lg:hidden'>
                We assist in total body optimization for a healthier, longer
                lifespan
							</span>
						</h2>
						<ButtonCta
							href='/pricing'
							className='w-full sm:w-fit'>
							<span className='lg:hidden'>Become A Member</span>
							<span className='max-lg:hidden'>Join Geviti</span>
						</ButtonCta>

						<div className='-mt-3'>{ renderAccordionList() }</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solution;
