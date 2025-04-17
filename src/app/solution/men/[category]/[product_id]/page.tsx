import React from 'react'
import Image from 'next/image';
import { notFound } from 'next/navigation'

import gevitiLogo from '@/assets/precheckout/geviti-logo.svg';
import { Footer, FrequentlyAskedQuestions, Line, RunningLogo } from '@/components'
import LongevitiBlendComponent from '@/components/LongevitiBlend';
import Navbar from '@/components/Navbar/Landing'
import { ViewOtherCategories } from '@/components/Solutions'
import { solutionData } from '@/constant/data'
import { navbarDefaultTransition } from '@/constant/data/navbar';
import { Product } from '@/payload/payload-types'
import { getProductByCategory } from '@/services/products'

// import Description from '../Description'
import { Biomakers } from './Biomakers'
// import Description from './Description'
import Hero from './Hero'
import License from './License'
import Tested from './Tested'
import Why from './Why'

// const biomakersList = [
// 	'Oral Capsule',
// 	'FDA Approved',
// 	'Bioidentical',
// 	'96% Efficacy',
// 	'Twice Daily',
// 	'Flexible Dosing',
// ];
type Params = Promise<{ category: string, product_id:string  }>

const ProductCategorySingle = async(props:{
	params : Params
}) => {
	const params = await props.params;

	const {
		category = '',
		product_id = ''
	} = params;

	let productsData: Product[] = [];
	let productDataSingle: Product;

	try {
		const data = await getProductByCategory(category);
		if (!data.find(e => e.slug === product_id)) {
			return notFound();
		}

		productsData = data.filter(e => e.slug !== product_id);
		productDataSingle = data.find(e => e.slug === product_id) as Product;
		
	} catch (error) {
		return notFound();
	}

	return (
		<div className='flex min-h-screen flex-col w-full font-Poppins'>
			<Navbar
				theme='light'
				animationProps={ {
					transition: {
						...navbarDefaultTransition,
						delay: 1.75,
					},
				} }
			/>
			<Hero data={ productDataSingle } />
			{ /* <div className='pb-[31px]'>
				<Description data={ productDataSingle.stats }/>
			</div> */ }
			<Line className='max-lg:hidden'/>
			<Why data={ productDataSingle.why }/>
			<FrequentlyAskedQuestions data={ solutionData.faq.data } />
			{ /* Compare price */ }
			<div className='lg:px-3 my-16 lg:my-[124px]'>
				<div className='container-center'>
					<div>
						<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'>
							More, for less with Geviti
						</h3>
						<p className='body-small max-w-[600px]'>Lorem ipsum dolor sit amet consectetur. Sed posuere aliquet malesuada gravida velit massa nunc. Nunc at nunc nibh pretium</p>
					</div>
					<div className='mt-10 flex lg:flex-row flex-col items-center gap-5 justify-between' >
						<div>
							<h6 className='h6'>Compare price</h6>
							<h3 className='h3 leading-none'>{ productDataSingle.name }</h3>
						</div>
						<div
							className='bg-white max-lg:w-full flex flex-col items-center justify-center p-9 text-center rounded-[20px] shadow-price-comparison'>
							<Image
								src={ gevitiLogo }
								width={ 85 }
								height={ 20 }
								alt=''
								unoptimized />
							<h6 className='h6 text-green-alert mt-4'>$99.99/mo</h6>
						</div>
						<div className='flex flex-col items-center max-lg:shadow-price-comparison max-lg:w-full p-9 rounded-[20px] justify-center text-center'>
							<h5 className='h5 text-grey-primary'>Blokes</h5>
							<h6 className='h6 text-yellow-alert mt-2.5'>$129.00/mo</h6>
						</div>
						<div className='flex flex-col items-center max-lg:shadow-price-comparison max-lg:w-full p-9 rounded-[20px] justify-center text-center'>
							<h5 className='h5 text-grey-primary'>LifeForce</h5>
							<h6 className='h6 text-yellow-alert mt-2.5'>$129.00/mo</h6>
						</div>
					</div>
				</div>
			</div>
			<LongevitiBlendComponent.HowItWorks />
			<Biomakers
				stats={ productDataSingle.stats }
				items={ productDataSingle.treatmentOptions?.map(e => e.name) ?? [] } />
			<div className='mt-[42px]'>
				<RunningLogo />
			</div>
			<License/>
			<Tested data={ productDataSingle.testing }/>
			<ViewOtherCategories
				baseUrl={ `/men/${category}` }
				isProduct
				data={ productsData } />

			{ /* <MarketingComponent.Testimonials /> */ }
			<Footer landingPage />
		</div>
	)
}

export default ProductCategorySingle