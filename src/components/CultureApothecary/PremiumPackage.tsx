import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import PackageContent from './PackageContent';

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

type PremiumPackageProps = {
  className?: string;
}

const PremiumPackage: React.FC<PremiumPackageProps> = ({ className }) => {
	return (
		<div className={ clsxm('relative overflow-hidden max-lg:mt-[123px] lg:pb-[100px]', className) }>
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

export default PremiumPackage;
