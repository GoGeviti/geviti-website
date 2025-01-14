'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedLine from '../AnimatedLine';
import ButtonCTA from '../ButtonCTA';
import PathText from '../PathText';
import PointCircle from '../PointCircle';
import SectionAnimate from '../SectionAnimate';

const Treatment = () => {
	const renderWelcomeText = () => {
		return (
			<PathText
				delay={ 2 }
				title='Welcome to the Future of Medicine'
				description='At Geviti, we specialize in combining the most advanced regenerative therapies to help your body heal itself naturally.'
			/>
		);
	};

	return (
		<div className='relative bg-midnight-blue'>
			<div className='grid grid-cols-1 lg:grid-cols-2 container-center w-full'>
				<div className='max-w-[522px] pt-[49px] lg:pt-[287px] lg:pb-[191px]'>
					<motion.div
						initial='hidden'
						whileInView='show'
						viewport={ { amount: 0.5, once: true } }
						exit='exit'
						variants={ {
							show: {
								transition: { staggerChildren: 0.25, delayChildren: 0.55 },
							},
							exit: {
								transition: { staggerChildren: 0.15 },
							},
						} }
						className='lg:pt-[120px]'
					>
						<div className='lg:max-w-[420px]'>
							<SectionAnimate
								by='character'
								animation='slideUp'
								className='font-LibreCaslon text-[8vw]/[1.2] xs3:text-[32px]/[1.2] md:text-4xl lg:text-[64px]/[1.2] -tracking-0.04em text-grey-secondary'
							>
                What Is Stem Cell Treatment?
							</SectionAnimate>
						</div>

						<SectionAnimate
							animation='blurInUp'
							by='section'
							className='mt-6 text-xs/5 text-blue-alice font-Poppins'
						>
              Stem cell treatment is a groundbreaking therapy that leverages the
              body&apos;s own regenerative cells to repair and restore damaged
              tissues. Stem cells release powerful biological signals that
              stimulate healing and reduce inflammation. By combining multiple
              types of stem cells, we can enhance their therapeutic potential
              through complementary signaling pathways.
						</SectionAnimate>

						<SectionAnimate
							animation='blurInUp'
							by='section'
							className='mt-[42px]'
						>
							<ButtonCTA className='max-sm:w-full'>Coming Soon</ButtonCTA>
						</SectionAnimate>
					</motion.div>
				</div>
				<div className='relative bg-midnight-blue max-sm:container-center max-lg:-mx-4 pt-[143px] pb-[125px] lg:pt-[287px] lg:pb-[191px]'>
					<div className='sm:hidden mb-[25px]'>{ renderWelcomeText() }</div>
					<div className='sm:hidden mb-18px'>
						<AnimatedLine
							svgProps={ {
								width: '151',
								height: '35',
								viewBox: '0 0 151 35',
							} }
							pathProps={ {
								d: 'M150.5 34L121.554 5.09376C118.929 2.47237 115.371 0.999997 111.662 0.999997L0 0.999997',
							} }
							delay={ 2 }
						/>
					</div>

					<div className='relative w-full h-full'>
						<div className='absolute top-3 lg:-top-[19px] left-[130px] md:left-[30%] lg:left-[118px]'>
							<motion.div
								initial={ { opacity: 0 } }
								whileInView={ { opacity: 1 } }
								transition={ { ease: 'easeInOut', duration: 0.15, delay: 1.5 } }
								viewport={ { amount: 0.5, once: true } }
								className='relative'
							>
								<PointCircle delay={ 2 } />

								<div className='max-sm:hidden absolute sm:left-[138.92px] sm:bottom-[172.34px]'>
									<div className='relative'>
										<AnimatedLine delay={ 2 } />
										<div className='absolute sm:max-w-[317px] sm:top-[23.15px] sm:left-[76.62px]'>
											{ renderWelcomeText() }
										</div>
									</div>
								</div>
							</motion.div>
						</div>
						<motion.div
							initial={ { opacity: 0 } }
							whileInView={ { opacity: 1 } }
							transition={ { ease: 'easeInOut', duration: 1 } }
							viewport={ { amount: 0.5, once: true } }
						>
							<Image
								src='/images/stem-cells/treatment/stem-cell-treatment.webp'
								alt=''
								width={ 1253.3 }
								height={ 1057.3 }
								className='w-[626.65px] h-auto object-contain'
							/>
						</motion.div>
					</div>

					<div
						style={ {
							fill: 'linear-gradient(183.36deg, #2D2E83 -11.68%, #212261 11.78%, #131337 44.35%, #080819 74.31%, #020206 100.37%, #000000 118.61%)',
							mixBlendMode: 'screen',
							// backgroundBlendMode: 'screen',
						} }
						className='max-lg:hidden absolute -right-[150px] -top-[281px] aspect-[909.41/817] w-[909.41px]'
					>
						<svg
							width='1146'
							height='1187'
							viewBox='0 0 1146 1187'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g
								style={ { mixBlendMode: 'screen' } }
								filter='url(#filter0_f_108_123)'
							>
								<path
									d='M154.248 954.344L992.421 154L364.205 1033.67L154.248 954.344Z'
									fill='url(#paint0_linear_108_123)'
									style={ { mixBlendMode: 'screen' } }
								/>
							</g>
							<defs>
								<filter
									id='filter0_f_108_123'
									x='0.949997'
									y='0.699997'
									width='1144.77'
									height='1186.27'
									filterUnits='userSpaceOnUse'
									colorInterpolationFilters='sRGB'
								>
									<feFlood
										floodOpacity='0'
										result='BackgroundImageFix' />
									<feBlend
										mode='normal'
										in='SourceGraphic'
										in2='BackgroundImageFix'
										result='shape'
									/>
									<feGaussianBlur
										stdDeviation='76.65'
										result='effect1_foregroundBlur_108_123'
									/>
								</filter>
								<linearGradient
									id='paint0_linear_108_123'
									x1='424.053'
									y1='76.4587'
									x2='470.314'
									y2='1200.79'
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='#2D2E83' />
									<stop
										offset='0.18'
										stopColor='#212261' />
									<stop
										offset='0.43'
										stopColor='#131337' />
									<stop
										offset='0.66'
										stopColor='#080819' />
									<stop
										offset='0.86'
										stopColor='#020206' />
									<stop offset='1' />
								</linearGradient>
							</defs>
						</svg>
					</div>

					<div
						className='lg:hidden absolute right-0 top-0'
						style={ {
							mixBlendMode: 'screen',
							fill: 'linear-gradient(183deg, #2D2E83 -11.68%, #212261 11.78%, #131337 44.35%, #080819 74.31%, #020206 100.37%, #000 118.61%)',
						} }
					>
						<svg
							width='375'
							height='665'
							viewBox='0 0 375 665'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g
								style={ { mixBlendMode: 'screen' } }
								filter='url(#filter0_f_15213_46038)'
							>
								<path
									d='M40.6808 534.45L510.328 85.9991L158.324 578.9L40.6808 534.45Z'
									fill='url(#paint0_linear_15213_46038)'
									style={ { mixBlendMode: 'screen' } }
								/>
							</g>
							<defs>
								<filter
									id='filter0_f_15213_46038'
									x='-45.2167'
									y='0.102448'
									width='641.443'
									height='664.695'
									filterUnits='userSpaceOnUse'
									colorInterpolationFilters='sRGB'
								>
									<feFlood
										floodOpacity='0'
										result='BackgroundImageFix' />
									<feBlend
										mode='normal'
										in='SourceGraphic'
										in2='BackgroundImageFix'
										result='shape'
									/>
									<feGaussianBlur
										stdDeviation='42.9488'
										result='effect1_foregroundBlur_15213_46038'
									/>
								</filter>
								<linearGradient
									id='paint0_linear_15213_46038'
									x1='191.858'
									y1='42.5511'
									x2='217.78'
									y2='672.54'
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='#2D2E83' />
									<stop
										offset='0.18'
										stopColor='#212261' />
									<stop
										offset='0.43'
										stopColor='#131337' />
									<stop
										offset='0.66'
										stopColor='#080819' />
									<stop
										offset='0.86'
										stopColor='#020206' />
									<stop offset='1' />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Treatment;
