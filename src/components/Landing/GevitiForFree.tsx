/* eslint-disable no-unused-vars */
'use client'
import React, { useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'

import clsxm from '@/helpers/clsxm';

import { CrossRed, GreenCheck } from '../Icons';

type Feature = {
	name: string;
	description: string;
	available: boolean;
}

type FeatureListProps = {
	features: Feature[];
	openFeature: string | null;
	toggleFeature: (featureName: string) => void;
};

const FeatureList: React.FC<FeatureListProps> = ({ features, openFeature, toggleFeature }) => {
	return (
		<div className='flex-1 flex flex-col gap-y-1.5'>
			{ features.map(feature => (
				<div
					key={ feature.name }
					className='mb-1.5'>
					<div
						className='flex items-center justify-between cursor-pointer'
						onClick={ () => toggleFeature(feature.name) }
					>
						<div className='flex items-center gap-2'>
							<div className={ feature.available ? 'text-green-alert' : 'text-red-alert' }>
								{ feature.available ? (
									<GreenCheck className='w-5 h-5' />
								) : (
									<CrossRed className='w-5 h-5' />
								) }
							</div>
							<span className={ clsxm(
								feature.available ? 'text-primary' : 'text-grey-primary',
								'text-sm font-medium'
							) }>
								{ feature.name }
							</span>
						</div>
						<IoChevronDownOutline
							size={ 16 }
							className={ clsxm(
								'text-grey-primary transition-transform',
								openFeature === feature.name ? 'rotate-180' : '',
								feature.available ? 'text-primary' : 'text-grey-primary'
							) }
						/>
					</div>
					<div
						className={ clsxm(
							'ml-8 text-xs text-grey-primary',
							'max-h-[300px] overflow-hidden transition-all duration-300',
							openFeature === feature.name ? 'max-h-[300px] mt-1 opacity-100' : 'max-h-0 opacity-0 mt-0'
						) }
					>
						{ feature.description }
					</div>
				</div>
			)) }
		</div>
	);
};

const MEMBERSHIP_FEATURES: Feature[] = [
	{
		name: 'Mobile application',
		description: 'Access our comprehensive health tracking and wellness services through our intuitive mobile app, available for both iOS and Android devices.',
		available: true
	},
	{
		name: 'Longeviti marketplace access',
		description: 'Browse and purchase from our curated selection of premium health and wellness products at retail prices.',
		available: true
	},
	{
		name: 'Wholesale pricing',
		description: 'Get exclusive access to wholesale prices on all marketplace products, helping you save on every purchase.',
		available: false
	},
	{
		name: 'Free routine labs at-home',
		description: 'Convenient at-home lab testing services with professional analysis and detailed results.',
		available: false
	},
	{
		name: 'Personalized care plans',
		description: 'Receive customized wellness plans tailored to your specific health goals and needs.',
		available: false
	},
	{
		name: 'Custom supplements',
		description: 'Access to personalized supplement recommendations based on your unique health profile.',
		available: false
	},
	{
		name: 'Expert monitored treatments',
		description: 'Get professional medical oversight and guidance for your treatment programs.',
		available: false
	},
	{
		name: 'Specialty testing options',
		description: 'Access to advanced diagnostic testing for comprehensive health insights.',
		available: false
	},
	{
		name: 'Dedicated wellness specialists',
		description: 'One-on-one support from qualified wellness professionals throughout your health journey.',
		available: false
	},
	{
		name: 'AI health companion',
		description: 'Smart AI-powered health insights and recommendations available 24/7.',
		available: false
	}
]

const GevitiForFree = () => {
	const [openFeature, setOpenFeature] = useState<string | null>(null)
	const [isOpen, setIsOpen] = useState(false)

	const toggleFeature = (featureName: string) => {
		setOpenFeature(openFeature === featureName ? null : featureName)
	}

	return (
		<div className='lg:max-w-[1061px] px-3 mx-auto sm:max-w-[392px] mt-6 lg:mt-16'>
			<div className='px-6 py-8 rounded-[14px] border border-grey-50 bg-grey-primary-light'>
				<div
					onClick={ () => setIsOpen(!isOpen) }
					className='flex items-center justify-between cursor-pointer'>
					<h5 className='h6 lg:h5 text-grey-primary'>Or try Geviti for free</h5>
					<div>
						<svg
							width='24'
							height='25'
							viewBox='0 0 24 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M12 23.5156C6.07 23.5156 1.25 18.6956 1.25 12.7656C1.25 6.83563 6.07 2.01562 12 2.01562C17.93 2.01562 22.75 6.83563 22.75 12.7656C22.75 18.6956 17.93 23.5156 12 23.5156ZM12 3.51562C6.9 3.51562 2.75 7.66563 2.75 12.7656C2.75 17.8656 6.9 22.0156 12 22.0156C17.1 22.0156 21.25 17.8656 21.25 12.7656C21.25 7.66563 17.1 3.51562 12 3.51562Z'
								fill='#919B9F'/>
							<path
								d='M16 13.5156H8C7.59 13.5156 7.25 13.1756 7.25 12.7656C7.25 12.3556 7.59 12.0156 8 12.0156H16C16.41 12.0156 16.75 12.3556 16.75 12.7656C16.75 13.1756 16.41 13.5156 16 13.5156Z'
								fill='#919B9F'/>
							<path
								className={ clsxm(
									'transform transition-transform duration-300 origin-center',
									isOpen ? 'rotate-90' : 'rotate-0'
								) }
								d='M12 17.5156C11.59 17.5156 11.25 17.1756 11.25 16.7656V8.76562C11.25 8.35563 11.59 8.01562 12 8.01562C12.41 8.01562 12.75 8.35563 12.75 8.76562V16.7656C12.75 17.1756 12.41 17.5156 12 17.5156Z'
								fill='#919B9F'/>
						</svg>
					</div>
				</div>
				<div className={ clsxm(
					'overflow-hidden transition-all duration-500 lg:duration-300',
					isOpen ? 'max-h-[1200px] lg:max-h-[600px] mt-[10px] opacity-100' : 'max-h-0 opacity-0 mt-0'
				) }>
					<div className='text-center'>
						<h2 className='h5 lg:h2 text-primary'>Limited access at full prices.</h2>
						<div className='max-w-[627px] mx-auto'>
							<p className='body-extra-small text-grey-400 mt-3'>Not ready for the Longeviti Plus membership? No problem. This plan gives you access to doctor-monitored prescriptions, specialty testing, and more—without the commitment.</p>
						</div>
						<button className='underline text-lg font-medium mt-6'>
						Join for free
						</button>
					</div>
					<div className='mt-11 p-6 rounded-2xl bg-white border border-grey-100 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10'>
						<div className='flex flex-col gap-1.5 text-primary'>
							<span className='text-xl font-medium'>Longeviti Lite</span>
							<h2 className='max-lg:leading-none h2'>Free</h2>
							<p className='body-extra-small'>Grants access to our mobile app and marketplace, allowing you to shop at standard retail pricing.</p>
						</div>
						<div className='lg:col-span-2'>
							<p className='body-small text-primary'>Your membership includes access to:</p>
							<div className='mt-3.5 flex flex-col lg:flex-row gap-x-6'>
								<div className='flex-1 flex flex-col gap-y-1.5'>
									<FeatureList
										features={ MEMBERSHIP_FEATURES.slice(0, 5) }
										openFeature={ openFeature }
										toggleFeature={ toggleFeature }
									/>
								</div>
								<div className='flex-1 flex flex-col gap-y-1.5'>
									<FeatureList
										features={ MEMBERSHIP_FEATURES.slice(5, 10) }
										openFeature={ openFeature }
										toggleFeature={ toggleFeature }
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GevitiForFree