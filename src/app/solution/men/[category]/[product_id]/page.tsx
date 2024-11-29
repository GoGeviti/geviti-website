import React from 'react'
import { notFound } from 'next/navigation'

import {
	Footer, FrequentlyAskedQuestions, Line, MarketingComponent, RunningLogo
} from '@/components'
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
			<License/>
			<Tested/>
			<Biomakers
				stats={ productDataSingle.stats }
				items={ productDataSingle.treatmentOptions?.map(e => e.name) ?? [] } />
			<Why/>
			<ViewOtherCategories
				baseUrl={ `/men/${category}` }
				isProduct
				data={ productsData } />
			<div className='mt-[42px] lg:mt-[87px]'>
				<RunningLogo />
			</div>
			<MarketingComponent.Testimonials />
			<FrequentlyAskedQuestions data={ solutionData.faq.data } />
			<Footer landingPage />
		</div>
	)
}

export default ProductCategorySingle