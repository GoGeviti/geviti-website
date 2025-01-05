'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import SectionTitle from './SectionTitle';

const processData = [
	{
		id: 1,
		name: 'Application and Follow up',
		description:
      'Our expert team administers the therapy from the comfort of your home through and IV.<br /><br />Monitor progress and ensure optimal recovery with our dedicated support team.',
		image: '/images/stem-cells/process/process-2.webp',
		position: 'left',
	},
	{
		id: 2,
		name: 'Consultation & Plan',
		description:
      'Begin with an in-depth evaluation of your health and goals.<br /><br />Receive a personalized plan combining the most effective stem cell types for your condition.',
		image: '/images/stem-cells/process/process-1.webp',
		position: 'right',
	},
];

const InnovativeProcess = () => {
	const renderCircle = (id?: string) => {
		return (
			<svg
				width='46'
				height='58'
				viewBox='0 0 46 58'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g filter='url(#filter0_dddd_15169_41146)'>
					<circle
						cx='19'
						cy='16'
						r='14'
						fill={ `url(#paint0_radial_15169_41146_${id})` }
					/>
					<circle
						cx='19'
						cy='16'
						r='12.7826'
						stroke='white'
						strokeWidth='2.43478'
					/>
				</g>
				<defs>
					<filter
						id='filter0_dddd_15169_41146'
						x='0.73913'
						y='0.782609'
						width='44.4348'
						height='56.6087'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood
							floodOpacity='0'
							result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset dy='1.21739' />
						<feGaussianBlur stdDeviation='1.21739' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.00392157 0 0 0 0 0.627451 0 0 0 0 0.917647 0 0 0 0.19 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_15169_41146'
						/>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset
							dx='1.21739'
							dy='4.86957' />
						<feGaussianBlur stdDeviation='2.43478' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.00392157 0 0 0 0 0.627451 0 0 0 0 0.917647 0 0 0 0.16 0'
						/>
						<feBlend
							mode='normal'
							in2='effect1_dropShadow_15169_41146'
							result='effect2_dropShadow_15169_41146'
						/>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset
							dx='2.43478'
							dy='10.9565' />
						<feGaussianBlur stdDeviation='3.34783' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.00392157 0 0 0 0 0.627451 0 0 0 0 0.917647 0 0 0 0.09 0'
						/>
						<feBlend
							mode='normal'
							in2='effect2_dropShadow_15169_41146'
							result='effect3_dropShadow_15169_41146'
						/>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset
							dx='4.26087'
							dy='19.4783' />
						<feGaussianBlur stdDeviation='3.95652' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.00392157 0 0 0 0 0.627451 0 0 0 0 0.917647 0 0 0 0.03 0'
						/>
						<feBlend
							mode='normal'
							in2='effect3_dropShadow_15169_41146'
							result='effect4_dropShadow_15169_41146'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect4_dropShadow_15169_41146'
							result='shape'
						/>
					</filter>
					<radialGradient
						id={ `paint0_radial_15169_41146_${id}` }
						cx='0'
						cy='0'
						r='1'
						gradientUnits='userSpaceOnUse'
						gradientTransform='translate(12 26) rotate(-33.018) scale(18.3519 31.2701)'
					>
						<stop stopColor='#4749CF' />
						<stop
							offset='1'
							stopColor='#00A0EA' />
					</radialGradient>
				</defs>
			</svg>
		);
	};

	return (
		<div className='pb-[485px] lg:pb-[248px] font-Poppins'>
			<div className='container-center w-full'>
				<motion.div
					initial='hidden'
					whileInView='show'
					viewport={ { amount: 0.5, once: true } }
					exit='exit'
					variants={ {
						show: {
							transition: { staggerChildren: 0.06 },
						},
						exit: {
							transition: { staggerChildren: 0.06, staggerDirection: -1 },
						},
					} }
					className='text-center flex flex-col items-center'
				>
					<SectionTitle>
            Our <span className='font-normal italic'>Innovative</span>
					</SectionTitle>
					<SectionTitle>Process</SectionTitle>
				</motion.div>

				<div className='mt-[34px] w-full relative flex flex-col items-center'>
					<div className='absolute top-0 left-1/2 -translate-x-1/2'>
						<svg
							width='53'
							height='946'
							viewBox='0 0 53 946'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='max-lg:hidden'
						>
							<path
								d='M26.4988 4C26.4988 4 -22.0031 14.5 26.4984 144C75 273.5 26.4987 418.062 26.4987 536L26.4988 942'
								stroke='url(#paint0_linear_15169_39965)'
								strokeOpacity='0.3'
								strokeWidth='8'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<defs>
								<linearGradient
									id='paint0_linear_15169_39965'
									x1='26.4985'
									y1='4'
									x2='26.4985'
									y2='942'
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='#0B0F26' />
									<stop
										offset='1'
										stopColor='#4749CF' />
								</linearGradient>
							</defs>
						</svg>

						<svg
							width='51'
							height='540'
							viewBox='0 0 51 540'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='lg:hidden'
						>
							<path
								d='M25.5002 4C25.5002 4 -22.8751 9.95522 25.4999 83.403C73.875 156.851 25.5002 238.841 25.5002 305.731L25.5002 536'
								stroke='url(#paint0_linear_15213_47143)'
								strokeOpacity='0.3'
								strokeWidth='8'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<defs>
								<linearGradient
									id='paint0_linear_15213_47143'
									x1='25.5'
									y1='4'
									x2='25.5'
									y2='536'
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='#0B0F26' />
									<stop
										offset='1'
										stopColor='#4749CF' />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className='w-full flex flex-col items-center'>
						<svg
							width='221'
							height='946'
							viewBox='0 0 221 946'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='max-lg:hidden'
						>
							<path
								d='M110.499 4C110.499 4 348.499 209.5 110.499 338C-127.502 466.5 110.499 522.062 110.499 640V942'
								stroke='url(#paint0_linear_15169_41139)'
								strokeWidth='8'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<defs>
								<linearGradient
									id='paint0_linear_15169_41139'
									x1='110.499'
									y1='4'
									x2='110.499'
									y2='942'
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='#0B0F26' />
									<stop
										offset='1'
										stopColor='#4749CF' />
								</linearGradient>
							</defs>

							{ renderCircle('1') }
						</svg>

						<svg
							width='117'
							height='540'
							viewBox='0 0 117 540'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='lg:hidden'
						>
							<path
								d='M58.5 4C58.5 4 181.125 99.4674 58.5 193.433C-64.125 287.398 58.5 297.826 58.5 364.716V536'
								stroke='url(#paint0_linear_15213_47144)'
								strokeWidth='8'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<defs>
								<linearGradient
									id='paint0_linear_15213_47144'
									x1='58.5001'
									y1='4'
									x2='58.5001'
									y2='536'
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='#0B0F26' />
									<stop
										offset='1'
										stopColor='#4749CF' />
								</linearGradient>
							</defs>
							{ renderCircle('2') }
						</svg>
					</div>

					<div className='max-lg:-mt-[144px] max-lg:relative w-full flex flex-col items-center'>
						{ processData.map(process => (
							<div
								key={ process.id }
								className={ clsxm(
									'absolute',
									process.position === 'left' &&
                    'lg:top-[240px] lg:left-[134px]',
									process.position === 'right' &&
                    'max-lg:-z-10 top-[40px] max-lg:scale-90 lg:top-0 lg:right-[134px]'
								) }
							>
								<div
									className={ clsxm(
										'p-[3px] rounded-[20px] w-full lg:w-[345px] bg-blend-screen relative [background:linear-gradient(0deg,#212261,#212261),_radial-gradient(47.54%_47.54%_at_50.14%_0%,#743DF2_0%,_rgba(18,18,53,0)_100%)]',
										process.position === 'left'
											? 'lg:[background:linear-gradient(0deg,#212261,#212261),_radial-gradient(41.59%_33.23%_at_100%_52.33%,#743DF2_0%,rgba(18, 18, 53, 0)_100%)]'
											: 'lg:[background:linear-gradient(0deg,#212261,#212261),_radial-gradient(53.77%_42.95%_at_0%_54.15%,#6C30F6_0%,rgba(18, 18, 53, 0)_100%)]'
									) }
								>
									<div
										style={ {
											background:
                        'radial-gradient(117.12% 161.33% at 50% 23.87%, #2D2E83 0%, #212261 18%, #131337 43%, #0B0F26 66%, #0B0F26 86%, #0B0F26 100%)',
										} }
										className='rounded-[19px] p-6 text-white bg-blend-screen mix-blend-normal'
									>
										<div className='flex flex-col'>
											<dt className='text-sm/6 font-semibold text-white tracking-0.11em uppercase'>
												<div className='mb-6 h-[182px] w-full relative overflow-hidden rounded-[14px]'>
													<Image
														src={ process.image }
														alt={ process.name }
														fill
														className='object-cover'
														sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
													/>
												</div>
												{ process.name }
											</dt>
											<dd className='mt-2 flex flex-auto flex-col text-xs/5 text-white'>
												<p
													className='flex-auto'
													dangerouslySetInnerHTML={ {
														__html: process.description,
													} }
												/>
											</dd>
										</div>
									</div>
								</div>
							</div>
						)) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default InnovativeProcess;
