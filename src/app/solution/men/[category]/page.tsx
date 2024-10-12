import React from 'react'

import { Footer, FrequentlyAskedQuestions, RunningLogo } from '@/components'
import { ViewOtherCategories } from '@/components/Solutions';
import { solutionData } from '@/constant/data';
import { Slug } from '@/interfaces/marketing';

const ProductCategory = () => {
	return (
		<div className='flex min-h-screen flex-col w-full font-Poppins'>
			<div className=''>
				<RunningLogo />
			</div>
			<ViewOtherCategories slug={ Slug.MEN_HORMONE_THERAPY } />

			<FrequentlyAskedQuestions data={ solutionData.faq.data } />
			<Footer landingPage />
		</div>
	)
}

export default ProductCategory