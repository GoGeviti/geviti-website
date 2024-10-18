import React from 'react'

import { Footer, FrequentlyAskedQuestions, RunningLogo } from '@/components'
import Navbar, { navbarDefaultTransition } from '@/components/Navbar/Landing';
import { ViewOtherCategories } from '@/components/Solutions';
import { solutionData } from '@/constant/data';

import Description from './Description';
import Hero from './Hero';
import ProductsSlider from './ProductsSlider';

const ProductCategory = () => {
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
			<Hero/>
			<Description/>
			<ProductsSlider/>
			<div className='mt-[42px] lg:mt-[124px]'>
				<RunningLogo />
			</div>
			<ViewOtherCategories />
			<FrequentlyAskedQuestions data={ solutionData.faq.data } />
			<Footer landingPage />
		</div>
	)
}

export default ProductCategory