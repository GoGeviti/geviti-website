import React from 'react'
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { TickCircle } from '../Icons';

interface ProductCardProps {
  title: string;
  badge: string;
  description: string;
  className?:string
}

const ProductCard = ({ title, badge, description, className }:ProductCardProps)  => {
	return (
		<div className={ clsxm(
			'border bg-white border-grey-100 relative z-10 lg:max-w-[341px] rounded-[14px] py-3.5 px-6 flex flex-col gap-3.5',
			className
		) }>
			<div className='flex items-center justify-between'>
				<h2 className='h6 hyphens-none'>{ title }</h2>
				<div className='py-1 h-7 px-3 bg-[#F6FFFC] rounded-full border border-green-alert text-green-alert flex items-center gap-1'>
					<TickCircle className='w-3 h-3 text-green-alert flex-shrink-0' />
					<span className='text-[10px] whitespace-nowrap'>{ badge }</span>
				</div>
			</div>
			<p className='body-small'>{ description }</p>
		</div>
	);
}

const Unique = () => {
	return (
		<div className='lg:px-3 my-11 lg:my-[124px] max-lg:mb-[130px]'>
			<div className='container-center'>
				<div className='overflow-hidden lg:hidden'>
					<div className='relative max-w-[461px] h-[361px] mx-auto'>
						<Image
							src='/images/longeviti_blend/packs.webp'
							alt='Supplement packets'
							width={ 361 }
							height={ 361 }
							className='object-contain w-[461px] h-[361px] mx-auto'
						/>
					</div>
				</div>
				<div className='max-lg:-mt-16 flex flex-col gap-3.5'>
					<p className='text-center font-semibold uppercase tracking-[1.76px] text-primary'>See Nathan&apos;s Blend</p>
					<h3 className='lg:h3 h5 text-center text-primary font-normal'>Unique blends for your unique needs.</h3>
					<p className='body-small text-grey-primary text-center'>
						Designed to optimize your <span className='h-7 rounded-full bg-[#F6FFFC] border px-3 border-[#DDF7ED] w-fit inline-flex items-center justify-center gap-1'>
							<TickCircle className='w-3 h-3 flex-shrink-0 text-green-alert'/>
							<span className='text-[10px] font-medium text-green-alert'>Biomarkers</span>
						</span> from your <CustomLink
							href='/longeviti-panel'
							className='text-grey-600 hover:text-primary underline'>Longeviti Panel</CustomLink> <br className='max-lg:hidden' />
						ensuring truly data-driven supplementation.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-y-[88px] items-center mt-14 relative'>
					{ /* Center Image */ }
					<div className='absolute max-lg:hidden left-1/2 top-0 -translate-x-1/2'>
						<div className='relative lg:w-[868px] h-[868px]'>
							<Image
								src='/images/longeviti_blend/packs.webp'
								alt='Supplement packets'
								fill
								className='object-contain'
							/>
						</div>
					</div>
					{ /* Top Row */ }
					<div className='md:col-span-3 max-lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6'>
						<ProductCard
							title='CurcuPlex'
							badge='C-Reactive Protein'
							description="Nathan's CRP was high, so Geviti added CurcuPlex, a bioavailable curcumin to support joint health and lower inflammation."
							className='mx-auto max-lg:top-[100px]'
						/>
						<ProductCard
							title='K2&nbsp;&#8209;&nbsp;D3&nbsp;5000'
							badge='Vitamin D (25-OH)'
							description="Calcium wasn't absorbed effectively, so we added K2/D3 to strengthen bones, support Nathan’s heart, and enhance immunity."
							className='mx-auto'
						/>
					</div>
					{ /* Middle Row */ }
					<div className='md:col-span-3 max-lg:hidden gap-5 flex-col lg:flex-row flex items-center justify-between'>
						<ProductCard
							title='NAD+'
							badge='Glucose (Fasting)'
							description='Nathan’s energy levels and mitochondrial function needed a boost, so we included NAD+ to combat age-related decline and enhance cellular repair.'
							className='lg:mr-auto'
						/>

						<ProductCard
							title='NAC'
							badge='ALT, AST, GGT (Liver Enzymes)'
							description='Oxidative stress and toxin buildup called for NAC to replenish glutathione, support detoxification, and boost respiratory health.'
							className='lg:ml-auto'
						/>

					</div>

					{ /* Bottom Row */ }
					<div className='md:col-span-3 max-lg:hidden flex justify-center lg:mt-28'>
						<ProductCard
							title='Magnesium L&#8209;Threonate'
							badge='Cortisol (AM/PM)'
							description='Nathan experienced focus issues and restless sleep, so we added Magnesium L-Threonate to support brain function and improve rest quality.'
							className='mx-auto'
						/>
					</div>
					<div className='flex flex-col  gap-5 lg:hidden'>
						<ProductCard
							title='CurcuPlex'
							badge='C-Reactive Protein'
							description="Nathan's CRP was high, so Geviti added CurcuPlex, a bioavailable curcumin to support joint health and lower inflammation."
							className='mx-auto max-lg:sticky max-lg:-mt-10 max-lg:transform max-lg:translate-y-0 max-lg:top-[100px]'
						/>
						<ProductCard
							title='K2&nbsp;&#8209;&nbsp;D3&nbsp;5000'
							badge='Vitamin D (25-OH)'
							description="Calcium wasn't absorbed effectively, so we added K2/D3 to strengthen bones, support Nathan’s heart, and enhance immunity."
							className='max-lg:sticky max-lg:top-[100px] max-lg:-mt-10 max-lg:transform max-lg:translate-y-[50px] mx-auto'
						/>
						<ProductCard
							title='NAD+'
							badge='Glucose (Fasting)'
							description='Nathan’s energy levels and mitochondrial function needed a boost, so we included NAD+ to combat age-related decline and enhance cellular repair.'
							className='max-lg:sticky max-lg:top-[100px] max-lg:-mt-10 max-lg:transform max-lg:translate-y-[100px] lg:mr-auto'
						/>

						<ProductCard
							title='NAC'
							badge='ALT, AST, GGT (Liver Enzymes)'
							description='Oxidative stress and toxin buildup called for NAC to replenish glutathione, support detoxification, and boost respiratory health.'
							className='max-lg:sticky max-lg:top-[100px] max-lg:-mt-10 max-lg:transform max-lg:translate-y-[150px] lg:ml-auto'
						/>
						<ProductCard
							title='Magnesium L&#8209;Threonate'
							badge='Cortisol (AM/PM)'
							description='Nathan experienced focus issues and restless sleep, so we added Magnesium L-Threonate to support brain function and improve rest quality.'
							className='max-lg:sticky max-lg:top-[100px] max-lg:-mt-10 max-lg:transform max-lg:translate-y-[200px] mx-auto'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Unique