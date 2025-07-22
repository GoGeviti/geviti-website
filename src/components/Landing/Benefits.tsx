'use client';

import React, { useRef } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { motion, useInView } from 'framer-motion';

import landingData from '@/constant/data/landing';
import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';

type BenefitsProps = {
  preTitle?: string;
	isScheduleCall?: boolean;
};

const Benefits: React.FC<BenefitsProps> = ({ preTitle, isScheduleCall = false }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.1 });
	const benefitsData = isScheduleCall ? landingData.benefitsScheduleCall : landingData.benefits;

	// Mobile layout for schedule call comparison table
	const renderScheduleCallMobile = () => {
		const services = benefitsData.list[0].items;
		const gevitiItems = benefitsData.list[1].items;
		const traditionalItems = benefitsData.list[2].items;

		return (
			<div className='lg:hidden space-y-4'>
				{ services.map((service, idx) => (
					<motion.div
						key={ idx }
						initial={ { opacity: 0, y: 10 } }
						animate={ isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 } }
						transition={ { duration: 0.6, delay: 0.4 + idx * 0.1 } }
						className='bg-grey-50 rounded-lg p-4'
					>
						<h4 className='text-sm font-medium text-primary mb-3 uppercase'>
							{ service.text }
						</h4>
						<div className='space-y-3'>
							{ /* Geviti Row */ }
							<div className='flex items-start gap-3'>
								<div className='flex items-center gap-2 min-w-0 flex-1'>
									<AiOutlineCheckCircle className='h-4 w-4 text-green-alert flex-shrink-0 mt-0.5' />
									<span className='text-xs text-grey-400 font-medium flex-shrink-0'>Geviti</span>
								</div>
								<span className='text-xs text-primary uppercase text-right'>
									{ gevitiItems[idx].text }
								</span>
							</div>
							{ /* Traditional Row */ }
							<div className='flex items-start gap-3'>
								<div className='flex items-center gap-2 min-w-0 flex-1'>
									<AiOutlineCloseCircle className='h-4 w-4 text-red-alert flex-shrink-0 mt-0.5' />
									<span className='text-xs text-grey-400 font-medium flex-shrink-0'>Traditional</span>
								</div>
								<span className='text-xs text-primary uppercase text-right'>
									{ traditionalItems[idx].text }
								</span>
							</div>
						</div>
					</motion.div>
				)) }
			</div>
		);
	};

	return (
		<div
			className='px-3 pb-3.5 lg:pb-6 font-Poppins'
			ref={ ref }>
			<motion.div
				className='bg-white relative overflow-hidden rounded-19px py-[46px] lg:pt-[79px] lg:pb-[49px]'
				initial={ { opacity: 0, y: 20 } }
				animate={ isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 } }
				transition={ { duration: 0.8, ease: 'easeOut' } }
			>
				<div className='container-center'>
					<p className='font-semibold text-center w-full text-grey-primary text-[10px] tracking-[1.1px] lg:text-sm uppercase lg:tracking-[1.54px]'>
						{ preTitle || benefitsData.preTitle }
					</p>
					<h2 className='mb-3.5 lg:mb-2 text-center text-2xl md:text-3xl lg:text-[64px] !leading-normal text-primary -tracking-0.04em'>
						{ benefitsData.title }
					</h2>
					<p className='text-xs lg:text-sm text-center !leading-5 text-grey-400 max-w-[732px] mx-auto'>
						{ benefitsData.description }
					</p>

					{ /* Mobile layout for schedule call */ }
					{ isScheduleCall && (
						<div className='my-6 lg:hidden'>
							{ renderScheduleCallMobile() }
						</div>
					) }

					{ /* Desktop layout and normal benefits layout */ }
					<div className={ clsxm(
						'grid grid-cols-1 lg:grid-cols-2 max-lg:gap-11 w-full max-w-[972px] mx-auto my-6 lg:my-[126px]',
						isScheduleCall && 'lg:grid-cols-3',
						isScheduleCall && 'max-lg:hidden' // Hide on mobile for schedule call
					) }>
						{ benefitsData.list.map((benefit, idx) => (
							<motion.div
								key={ idx }
								initial={ { opacity: 0, y: 10 } }
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
								}
								transition={ { duration: 0.6, delay: 0.4 + idx * 0.1 } }
								className={ clsxm(
									idx === 0 ? 'max-lg:order-2' : 'max-lg:order-1'
								) }
							>
								<h3 className='text-2xl text-primary pb-3 lg:pb-4 lg:border-b border-grey-100'>
									{ benefit.title === '' ? '\u00A0' : benefit.title }
								</h3>
								<ul className='flex flex-col gap-[14px] lg:mt-4'>
									{ benefit.items.map((detail, idxDetail) => (
										<motion.li
											key={ idxDetail }
											className='flex items-center gap-[14px] text-primary text-xs lg:text-base'
											initial={ { opacity: 0, x: -10 } }
											animate={
												isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
											}
											transition={ {
												duration: 0.5,
												delay: 0.6 + idx * 0.1 + idxDetail * 0.1,
											} }
										>
											{ detail.cheked ? (
												<AiOutlineCheckCircle className='h-6 w-6 text-green-alert' />
											) : (
												<AiOutlineCloseCircle className={ clsxm(
													'h-6 w-6 text-red-alert',
													(isScheduleCall && benefit.title === '') && 'hidden'
												) } />
											) }
											<span className='uppercase'>{ detail.text }</span>
										</motion.li>
									)) }
								</ul>
							</motion.div>
						)) }
					</div>
					<div className={
						clsxm(
							'flex items-center justify-center',
							!isScheduleCall ? 'hidden' : 'pb-20 max-lg:pt-10'
						)
					}>
						<ButtonCta
							text='Schedule A Call'
							externalLink={ true }
							href='https://calendly.com/naomitabot-gogeviti/geviti-discovery-call'
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Benefits;
