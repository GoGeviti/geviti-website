'use client';

import React, { useRef } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { motion, useInView } from 'framer-motion';

import landingData from '@/constant/data/landing';
import clsxm from '@/helpers/clsxm';

const benefitsData = landingData.benefits;

const Benefits: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.1 });
	
	return (
		<div
			className='lg:px-3 mt-6 font-Poppins'
			ref={ ref }>
			<motion.div
				className='bg-white relative overflow-hidden rounded-19px py-[46px] lg:pt-[79px] lg:pb-[49px]'
				initial={ { opacity: 0, y: 20 } }
				animate={ isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 } }
				transition={ { duration: 0.8, ease: 'easeOut' } }
			>
				<div className='container-center'>
					<p className='font-semibold text-center w-full text-grey-primary text-[10px] tracking-[1.1px] lg:text-sm uppercase lg:tracking-[1.54px]'>{ benefitsData.preTitle }</p>
					<h2 className='mb-3.5 lg:mb-2 text-center text-2xl md:text-3xl lg:text-[64px] !leading-normal text-primary -tracking-0.04em'>
						{ benefitsData.title }
					</h2>
					<p className='text-xs lg:text-sm text-center !leading-5 text-grey-400 max-w-[732px] mx-auto'>
						{ benefitsData.description }
					</p>
					<div className='grid grid-cols-1 lg:grid-cols-2 max-lg:gap-11 w-full max-w-[972px] mx-auto my-6 lg:my-[126px]'>
						{
							benefitsData.list.map((benefit, idx) => (
								<motion.div
									key={ idx }
									initial={ { opacity: 0, y: 10 } }
									animate={ isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 } }
									transition={ { duration: 0.6, delay: 0.4 + idx * 0.1 } }
									className={ clsxm(
										idx === 0 ? 'max-lg:order-2' : 'max-lg:order-1'
									) }
								>
									<h3 className='text-2xl text-primary pb-3 lg:pb-4 lg:border-b border-grey-100'>
										{ benefit.title }
									</h3>
									<ul className='flex flex-col gap-[14px] lg:mt-4'>
										{ benefit.items.map((detail, idxDetail) => (
											<motion.li
												key={ idxDetail }
												className='flex items-center gap-[14px] text-primary text-xs lg:text-base'
												initial={ { opacity: 0, x: -10 } }
												animate={ isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 } }
												transition={ { duration: 0.5, delay: 0.6 + idx * 0.1 + idxDetail * 0.1 } }
											>
												{
													detail.cheked ? (
														<AiOutlineCheckCircle className='h-6 w-6 text-green-alert' />
													) : (
														<AiOutlineCloseCircle className='h-6 w-6 text-red-alert' />
													)
												}
												<span className='uppercase'>{ detail.text }</span>
											</motion.li>
										)) }
									</ul>
								</motion.div>
							))
						}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Benefits;
