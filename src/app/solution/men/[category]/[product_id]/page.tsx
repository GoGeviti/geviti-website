import React from 'react'

import { Footer, FrequentlyAskedQuestions, MarketingComponent, RunningLogo } from '@/components'
import Navbar, { navbarDefaultTransition } from '@/components/Navbar/Landing'
import { ViewOtherCategories } from '@/components/Solutions'
import { solutionData } from '@/constant/data'

import { Biomakers } from './Biomakers'
import Description from './Description'
import Hero from './Hero'

const biomakersList = [
	'Oral Capsule',
	'FDA Approved',
	'Bioidentical',
	'96% Efficacy',
	'Twice Daily',
	'Flexible Dosing',
];

const ProductCategorySingle = () => {
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
			<div className='pb-[31px]'>
				<Description/>
			</div>
			<Biomakers items={ biomakersList } />
			<ViewOtherCategories/>
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