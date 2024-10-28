import React from 'react'
import { notFound } from 'next/navigation'

import { Biomakers } from '@/app/solution/men/[category]/[product_id]/Biomakers'
import Hero from '@/app/solution/men/[category]/[product_id]/Hero'
import Description from '@/app/solution/men/[category]/Description'
import { Footer, FrequentlyAskedQuestions, MarketingComponent, RunningLogo } from '@/components'
import Navbar, { navbarDefaultTransition } from '@/components/Navbar/Landing'
import { ViewOtherCategories } from '@/components/Solutions'
import { solutionData } from '@/constant/data'
import { Product } from '@/payload/payload-types'
import { getProductByCategory } from '@/services/products'

// import { Biomakers } from '../Biomakers'
// import Description from '../Description'
// import Hero from '../Hero'

const biomakersList = [
	'Oral Capsule',
	'FDA Approved',
	'Bioidentical',
	'96% Efficacy',
	'Twice Daily',
	'Flexible Dosing',
];

const ProductCategorySingle = async({ params: { category = '', product_id = '' } }) => {

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
			<div className='pb-[31px]'>
				<Description/>
			</div>
			<Biomakers items={ biomakersList } />
			<ViewOtherCategories data={ productsData } />
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