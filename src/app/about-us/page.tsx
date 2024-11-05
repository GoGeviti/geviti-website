import React from 'react'

import { AboutUsComponent, Footer, FrequentlyAskedQuestions, MarketingComponent } from '@/components'
import LongevitiPanelComponent from '@/components/LongevitiPanel';
import { solutionData } from '@/constant/data'
import { Slug } from '@/interfaces/marketing'

const AboutUsPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<MarketingComponent.Hero slug={ Slug.ABOUT_US } />
			<AboutUsComponent.Video />
			<AboutUsComponent.Headshot />
			<AboutUsComponent.Doctor />
			<LongevitiPanelComponent.BannerParallax containerClassName='pb-0 lg:pb-0' />
			<FrequentlyAskedQuestions data={ solutionData.faq.data } />
			<Footer/>
		</div>
	)
}

export default AboutUsPage