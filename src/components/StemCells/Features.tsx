'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import SectionAnimate from './SectionAnimate';

const FeaturesCarousel = dynamic(() => import('./FeaturesCarousel'));

const features = [
	{
		name: 'Hematopoietic Stem Cells',
		image: '/images/stem-cells/features/hematopoietic-stem-cells.svg',
		description:
      'Primarily responsible for forming blood and immune cells, contributing to immune system regulation.',
	},
	{
		name: 'Mesenchymal Stem Cells',
		image: '/images/stem-cells/features/mesenchymal-stem-cells.svg',
		description:
      'Known for their potent anti-inflammatory, immunomodulatory, and regenerative properties.',
	},
	{
		name: 'Endothelial Progenitor Cells',
		image: '/images/stem-cells/features/endothelial-progenitor-cells.svg',
		description:
      'Essential for vascular repair and angiogenesis, helping improve blood flow and support tissue regeneration.',
	},
	{
		name: 'Isolation and Optimization',
		image: '/images/stem-cells/features/isolation-and-optimization.svg',
		description:
      'MSCs are carefully isolated to ensure their concentration reaches the desired threshold',
	},
	{
		name: 'Combination and Formulation',
		image: '/images/stem-cells/features/combination-and-formulation.svg',
		description:
      'The cells are combined in a specific formulation designed to maximize their therapeutic benefits.',
	},
	{
		name: 'Delivery to Patients',
		image: '/images/stem-cells/features/delivery-to-patients.svg',
		description:
      'The unified stem cell treatment is administered via minimally invasive methods (e.g., IV infusion or localized injection).',
	},
];

type FeatureContentProps = {
  feature: {
    name: string;
    image: string;
    description: string;
  };
  index: number;
};

export const FeatureContent: React.FC<FeatureContentProps> = ({
	feature,
	index,
}) => {
	return (
		<SectionAnimate
			by='section'
			animation='fadeIn'
			className='flex flex-col'>
			<dt className='text-sm/6 uppercase font-semibold text-white tracking-0.11em'>
				<div className='mb-6 flex max-lg:justify-center h-[50px]'>
					<Image
						src={ feature.image }
						alt={ feature.name }
						width={ 100 }
						height={ 100 }
						className='w-[50px] h-[50px] object-contain'
					/>
				</div>
				{ feature.name }
			</dt>
			<dd
				className={ clsxm(
					'mt-2 flex flex-auto flex-col text-xs/5 text-white',
					index === features.length - 1
						? 'lg:max-w-[274px]'
						: 'lg:max-w-[245px]'
				) }
			>
				<p className='flex-auto'>{ feature.description }</p>
			</dd>
		</SectionAnimate>
	);
};

const Features = () => {
	return (
		<>
			<div className='max-lg:hidden font-Poppins py-[90px]'>
				<div className='container-center w-full'>
					<div className='mx-auto max-w-[1093px]'>
						<motion.dl
							initial='hidden'
							whileInView='show'
							viewport={ { amount: 0.5, once: true } }
							exit='exit'
							variants={ {
								show: {
									transition: { staggerChildren: 0.25 },
								},
								exit: {
									transition: { staggerChildren: 0.25, staggerDirection: -1 },
								},
							} }
							className='grid gap-x-8 gap-y-[105px] w-full lg:grid-cols-3'
						>
							{ features.map((feature, featureIdx) => (
								<FeatureContent
									key={ feature.name }
									feature={ feature }
									index={ featureIdx }
								/>
							)) }
						</motion.dl>
					</div>
				</div>
			</div>
			<div className='lg:hidden py-[86px]'>
				<FeaturesCarousel features={ features } />
			</div>
		</>
	);
};

export default Features;
