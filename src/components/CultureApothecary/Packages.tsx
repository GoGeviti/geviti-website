import React from 'react';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import { CheckCircleIcon } from '../Icons';

const onePackageList = [
	{
		title: 'Precision and Personalization',
		description:
      'Our approach leverages cutting-edge technology and personalized care. Using the results from your intro blood draw, we tailor each supplement pack to address your individual health requirements.',
	},
	{
		title: 'Expertly Crafted',
		description:
      'Every supplement is formulated with the highest quality ingredients, ensuring you receive only the best. Our partnerships with trusted pharmacies guarantee the purity and efficacy of each product.',
	},
	{
		title: 'Convenient Daily Dose Packs',
		description:
      'Say goodbye to the hassle of multiple bottles and complicated routines. Our convenient daily dose packs are easy to take and designed to fit seamlessly into your lifestyle.',
	},
];

const premiumPackageList = [
	{
		title: 'Compounded Medications',
		description:
      'We partner with trusted compound pharmacies to provide highly personalized medications tailored to each member\'s unique needs.',
	},
	{
		title: 'Wholesale costs',
		description:
      'By avoiding the high markups of traditional retail pharmacies, we also deliver significant cost savings, ensuring top-quality care at a more accessible price.',
	},
	{
		title: 'Comprehensive Care',
		description:
      'Prescription therapies are seamlessly integrated with our personalized health plans, providing a holistic approach to optimizing health and longevity.',
	},
];

const Packages: React.FC = () => {
	const renderOnePackage = () => {
		return (
			<div className='relative overflow-hidden isolate lg:pt-[70px] lg:pb-[248px] mt-[123px] lg:mt-[128px]'>
				<div className='flex max-lg:flex-col max-lg:gap-[42px] w-full lg:container-center'>
					<div className='lg:flex-none lg:absolute lg:right-1/2 lg:left-0 xxxl:left-auto'>
						<div className='relative flex'>
							<div className='lg:flex-none lg:max-w-none relative w-full aspect-square lg:h-[707px] overflow-hidden'>
								<Image
									alt='Alex Clark'
									src='/images/cultureapothecary/package-1.webp'
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw'
									className='w-full object-cover'
								/>
							</div>

							<div className='absolute -bottom-4 right-[39px]'>
								<div
									className='w-[50vw] lg:w-[361px] aspect-square relative'
									style={ {
										filter:
                      'drop-shadow(-90px 164px 75px rgba(163, 163, 163, 0.04)) drop-shadow(-51px 92px 63px rgba(163, 163, 163, 0.12)) drop-shadow(-23px 41px 47px rgba(163, 163, 163, 0.2)) drop-shadow(-6px 10px 26px rgba(163, 163, 163, 0.23))',
									} }
								>
									<Image
										alt='Alex Clark'
										src='/images/cultureapothecary/package-2.webp'
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
										className='w-full h-full'
										quality={ 100 }
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='w-full flex lg:justify-end'>
						<PackageContent
							title='One package, everything YOU need'
							description='Every body has a unique set of needs that a one-size-fits-all approach to supplementation can’t address. At Geviti, your Longeviti Blend supplements are available at wholesale cost, and uniquely crafted to help you achieve optimal health.'
							list={ onePackageList }
							className='lg:max-w-[511px]'
							titleClassName='max-sm:max-w-[343px]'
						/>
					</div>
				</div>
			</div>
		);
	};

	const renderPremiumPackage = () => {
		return (
			<div className='relative overflow-hidden max-lg:mt-[123px] lg:pb-[100px]'>
				<div className='flex gap-[42px] max-lg:flex-col-reverse w-full lg:container-center'>
					<div className='flex w-full'>
						<PackageContent
							title='Premium prescription therapy'
							description='We provide premium prescription therapies when clinically necessary, ensuring our members receive the most effective, evidence-based treatments tailored to their unique health goals and needs.'
							list={ premiumPackageList }
							className='lg:max-w-[579px]'
						/>
					</div>
					<div className='flex max-lg:mx-auto lg:justify-end w-[98.4vw] lg:w-full'>
						<div className='w-full scale-[1.15] lg:scale-110 h-auto transform origin-[-20%_0%] aspect-[604/597]'>
							<Image
								src='/images/cultureapothecary/package-3-2.webp'
								alt=''
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
								className='w-full h-auto object-cover'
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			{ renderOnePackage() }

			{ renderPremiumPackage() }
		</>
	);
};

export default Packages;

type PackageContentProps = {
  title: string;
  description: string;
  list: {
    title: string;
    description: string;
  }[];
  className?: string;
  titleClassName?: string;
};
const PackageContent: React.FC<PackageContentProps> = ({
	title,
	description,
	list,
	className,
	titleClassName,
}) => {
	return (
		<div className={ clsxm('max-lg:px-4 flex flex-col gap-[42px]', className) }>
			<div>
				<h2
					className={ clsxm(
						'h5 lg:h3 max-xs3:text-[6vw] -tracking-0.04em',
						titleClassName
					) }
				>
					{ title }
				</h2>

				<p className='mt-3.5 body-small lg:max-w-[434px]'>{ description }</p>
			</div>
			<ButtonCta
				href='/pricing'
				className='w-full sm:w-fit'>
        Join Geviti
			</ButtonCta>

			<div className='space-y-6 lg:max-w-[511px]'>
				{ list.map(item => (
					<div key={ item.title }>
						<div className='flex items-center gap-3.5 -tracking-0.04em font-medium h6'>
							<CheckCircleIcon className='w-18px h-18px text-[#4AADF6] shrink-0' />
							{ item.title }
						</div>

						<div className='pl-8 pt-1 text-sm text-grey-primary'>
							{ item.description }
						</div>
					</div>
				)) }
			</div>
		</div>
	);
};
