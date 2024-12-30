'use client';

import { useRef, useState } from 'react';
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const PathText = dynamic(() => import('./PathText'));
const PointCircle = dynamic(() => import('./PointCircle'));

const slides = [
	{
		id: 1,
		name: 'What are MSCs?',
		content: (
			<div className='relative overflow-hidden w-full h-full flex items-center justify-center bg-midnight-blue'>
				<div
					className='absolute inset-0 mix-blend-color-dodge'
					style={ {
						backgroundImage:
              'url(\'/images/stem-cells/overview/background-1.webp\')',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					} }
				/>
				<div
					className='absolute-center w-[1027.482px] h-[699.19px] sm:w-[2551px] sm:h-[1268px] -rotate-[36.83deg]'
					style={ {
						background:
              'radial-gradient(36.71% 36.71% at 50% 50%, rgba(11, 15, 38, 0.60) 0%, #0B0F26 100%)',
					} }
				/>
				<div
					className='font-PlayFairDisplay mix-blend-screen opacity-[0.81] max-w-[759px] mx-auto max-lg:px-4'
					style={ {
						background:
              'radial-gradient(180.6% 170.29% at 50.02% 50%, #DFDFFF 0%, #D8D9FF 18%, #161645 43%, #080819 66%, #020206 86%, #000 100%)',
						backgroundClip: 'text',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					} }
				>
					<p className='text-center -tracking-0.04em font-medium text-[calc(12px+0.7vw+0.5vh)]/normal xs3:text-2xl/normal sm:text-3xl lg:text-[42px]/normal'>
            Mesenchymal Stem Cells (MSCs) are your body&apos;s master healers,
            unleashing powerful anti-inflammatory and regenerative benefits to
            repair and rejuvenate damaged tissue.
					</p>
				</div>
			</div>
		),
	},
	{
		id: 2,
		name: 'Why choose Geviti?',
		content: (
			<div className='h-full w-full flex items-center justify-center text-white relative'>
				<div className='relative flex items-center justify-center lg:ml-20'>
					<Image
						src='/images/stem-cells/overview/background-2.webp'
						width={ 630.315 * 3 }
						height={ 571.44 * 3 }
						className='h-auto w-full lg:w-[630.315px] object-cover'
						alt='cells'
					/>
					<div className='absolute top-0 lg:-top-[21px] right-[25%] lg:right-[170px]'>
						<div className='relative'>
							<PointCircle
								desktopClassName='max-sm:hidden sm:w-[82.369px]'
								mobileClassName='sm:hidden w-[50px]'
							/>

							<div className='absolute max-lg:right-[70px] lg:left-[75px] -top-5 lg:-top-1'>
								<div className='relative'>
									<svg
										width='323'
										height='45'
										viewBox='0 0 323 45'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='max-lg:scale-x-[-1] max-sm:w-[181px]'
									>
										<path
											d='M1 44.7386L40.6381 5.10051C43.2636 2.475 46.8246 1 50.5376 1H322.623'
											stroke='white'
											strokeWidth='0.717026'
										/>
									</svg>

									<div className='absolute top-[23.15px] lg:left-[76.62px] max-w-[245px]'>
										<PathText
											title='At-home administration'
											description='Experience the convenience of expert-guided stem cell therapy in the comfort of your own home, with our concierge medical team.'
											titleClassName='max-sm:text-xs/normal'
											descriptionClassName='max-sm:text-[10px]/normal'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='absolute bottom-0 lg:-bottom-[22px] left-[10%] lg:left-[100px]'>
						<div className='relative'>
							<PointCircle
								desktopClassName='max-sm:hidden sm:w-[82.369px]'
								mobileClassName='sm:hidden w-[50px]'
							/>

							<div className='absolute max-lg:left-[50px] lg:right-[75px] -bottom-5 lg:-bottom-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='322'
									height='45'
									viewBox='0 0 322 45'
									fill='none'
									className='max-lg:scale-x-[-1] max-sm:w-[281px]'
								>
									<path
										d='M321.623 0.413734L281.984 40.0518C279.359 42.6773 275.798 44.1523 272.085 44.1523H0'
										stroke='white'
										strokeWidth='0.717026'
									/>
								</svg>

								<div className='absolute bottom-[23.15px] max-lg:left-[50px] lg:right-[76.62px] max-w-[245px]'>
									<PathText
										title='20x more integration'
										description='While standard treatments achieve just 1% tissue integration, our breakthrough technology can activate 20x more healing potential.'
										titleClassName='max-sm:text-xs/normal'
										descriptionClassName='max-sm:text-[10px]/normal'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		),
	},
	{
		id: 3,
		name: 'Why Stem Cell Therapy?',
		content: (
			<div className='relative overflow-hidden w-full h-full flex items-center justify-center bg-midnight-blue'>
				<div
					className='absolute inset-0'
					style={ {
						backgroundImage:
              'url(\'/images/stem-cells/overview/background-3.webp\')',
						backgroundSize: 'contain',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					} }
				/>
				<div
					className='font-PlayFairDisplay mix-blend-screen opacity-[0.81] max-w-[645px] mx-auto max-lg:px-4'
					style={ {
						background:
              'radial-gradient(180.6% 170.29% at 50.02% 50%, #DFDFFF 0%, #D8D9FF 18%, #161645 43%, #080819 66%, #020206 86%, #000 100%)',
						backgroundClip: 'text',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					} }
				>
					<p className='text-center -tracking-0.04em font-medium text-[calc(12px+0.7vw+0.5vh)]/normal xs3:text-2xl/normal sm:text-3xl lg:text-[42px]/normal'>
            The world&apos;s most powerful longevity treatment, naturally
            healing and rejuvenating your body at the cellular level.
					</p>
				</div>
			</div>
		),
	},
];

const slidesLength = slides.length;

const OverviewDevinition = () => {
	const [activeCard, setActiveCard] = useState(0);
	const ref = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end 1'],
	});

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		const cardsBreakpoints = slides.map((_, index) => index / slidesLength);
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
		<div
			ref={ ref }
			className='w-full block my-auto mx-0 max-sm:pt-[13px] max-sm:pb-[49px]'
		>
			<div className='relative h-[300svh]'>
				<div className='sticky top-0 left-0 flex h-[100svh] items-center justify-center'>
					<div className='relative lg:container-center flex items-center justify-center h-full w-full'>
						<AnimatePresence mode='wait'>
							{ slides.map(
								(item, index) =>
									activeCard === index && (
										<motion.div
											key={ item.id }
											initial={ { opacity: 0 } }
											animate={ { opacity: 1 } }
											exit={ { opacity: 0 } }
											transition={ { duration: 0.5 } }
											className='w-full h-full'
										>
											{ item.content }
										</motion.div>
									)
							) }
						</AnimatePresence>

						<div className='max-lg:hidden absolute left-0 top-1/2 -translate-y-1/2'>
							{ slides.map((slide, index) => (
								<div
									key={ slide.id }
									className='flex items-center gap-3 h-[23px]'
								>
									<motion.div
										initial={ { background: '#00A0EA', width: 36 } }
										animate={
											activeCard === index
												? { background: '#FFFFFF', width: 58 }
												: { background: '#00A0EA', width: 36 }
										}
										exit={ { background: '#00A0EA', width: 36 } }
										transition={ { duration: 0.5 } }
										className='bg-[#00A0EA] !h-[3px] w-9 flex-shrink-0'
									/>
									<motion.p
										initial={ { opacity: 0 } }
										animate={ { opacity: activeCard === index ? 1 : 0 } }
										exit={ { opacity: 0 } }
										transition={ { duration: 0.5 } }
										className='font-Poppins text-blue-alice text-xs/5 overflow-hidden'
									>
										{ slide.name }
									</motion.p>
								</div>
							)) }
						</div>

						<div className='lg:hidden absolute bottom-0 inset-x-0 pb-[49px] flex justify-center'>
							<div className='flex items-center justify-center gap-[7px]'>
								{ slides.map((_, index) => (
									<div
										key={ index }
										className='flex items-center'>
										<AnimatePresence mode='wait'>
											{ index === activeCard ? (
												<motion.span
													initial={ { opacity: 0 } }
													animate={ { opacity: 1 } }
													exit={ { opacity: 0 } }
													transition={ { duration: 0.5 } }
													className='text-blue-alice text-xs/5 font-Poppins'
												>
													{ slides[activeCard].name }
												</motion.span>
											) : (
												<motion.button
													initial={ { width: 0 } }
													animate={ { width: index === activeCard ? 0 : 23 } }
													exit={ { width: 0 } }
													onClick={ () => setActiveCard(index) }
													className='bg-[#00A0EA] h-0.5'
													transition={ { duration: 0.5 } }
												/>
											) }
										</AnimatePresence>
									</div>
								)) }
							</div>
						</div>
					</div>
					<div className='absolute top-1/3 left-0 h-1/6 w-full' />
				</div>
			</div>
		</div>
	);
};

export default OverviewDevinition;
