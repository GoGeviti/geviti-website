import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import PackageContent, { PackageContentProps } from './PackageContent';

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

const OnePackage: React.FC<PackageContentProps & { className?: string }> = ({
	className,
	...props
}) => {
	return (
		<div
			className={ clsxm(
				'relative isolate lg:pt-[70px] lg:pb-[248px] mt-[123px] lg:mt-[128px]',
				className
			) }
		>
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
									alt='Package'
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
						titleClassName='max-w-[343px] sm:max-w-[447px]'
						{ ...props }
					/>
				</div>
			</div>
		</div>
	);
};

export default OnePackage;
