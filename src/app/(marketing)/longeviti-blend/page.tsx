import React from 'react';
import { NextPage } from 'next';

import { Footer, FrequentlyAskedQuestions } from '@/components';
import SocialProof from '@/components/Landing/SocialProof';
import LongevitiBlendComponent from '@/components/LongevitiBlend';
import LongevitiPanelComponent from '@/components/LongevitiPanel';
// import { marketingData } from '@/constant/data';
import longevitiBlendData from '@/constant/data/longevitiBlend';
import longevitiPanelData from '@/constant/data/longevitiPanel';

const LongevitiBlendPage: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<LongevitiPanelComponent.Hero
				{ ...longevitiBlendData.hero }
				longeviti_type='blend' />
			{ /* <div className='px-3 font-Poppins mb-6'> */ }
			{ /* 	<div className='bg-white rounded-[19px] pb-16 pt-16 lg:pt-32 overflow-hidden social-proof-container'> */ }
			{ /* 		/!* <div className='px-3 lg:px-16 max-lg:gap-3.5'> *!/ */ }
			{ /* 		/!* 	<h3 className='text-2xl lg:text-4xl font-medium text-primary whitespace-nowrap'> *!/ */ }
			{ /* 		/!* 	Where we source <br/><span className='text-grey-primary'>our ingredients</span> *!/ */ }
			{ /* 		/!* 	</h3> *!/ */ }
			{ /* 		/!* 	<p className='max-w-[500px] body-small mt-3.5'>At Geviti, we work exclusively with the top 100 provider recommended brands in the country. This helps ensure that our members receive only the most researched,  bioavailable, purity-tested formulas from trusted manufacturers. Below are examples of some of the top brands we leverage.</p> *!/ */ }
			{ /* 		/!* 	<div className='mt-14 flex max-lg:flex-wrap items-center gap-5 lg:gap-10'> *!/ */ }
			{ /* 		/!* 		{ [ *!/ */ }
			{ /* 		/!* 			'/images/longeviti_blend/ingredients/xymogen.png', *!/ */ }
			{ /* 		/!* 			'/images/longeviti_blend/ingredients/quicksilver_scientific.png', *!/ */ }
			{ /* 		/!* 			'/images/longeviti_blend/ingredients/infini_well.png', *!/ */ }
			{ /* 		/!* 			'/images/longeviti_blend/ingredients/life_extension.png', *!/ */ }
			{ /* 		/!* 			'/images/longeviti_blend/ingredients/thorne.png' *!/ */ }
			{ /* 		/!* 		].map((item, i) => { *!/ */ }
			{ /* 		/!* 			return ( *!/ */ }
			{ /* 		/!* 				<div *!/ */ }
			{ /* 		/!* 					style={ { *!/ */ }
			{ /* 		/!* 						background: 'linear-gradient(0deg, #F7F7F7 0%, #F7F7F7 100%), #919B9F' *!/ */ }
			{ /* 		/!* 					} } *!/ */ }
			{ /* 		/!* 					className='lg:w-[191px] w-[calc(50%-10px)] flex-shrink-0 h-[191px] flex items-center justify-center' *!/ */ }
			{ /* 		/!* 					key={ i }> *!/ */ }
			{ /* 		/!* 					<Image *!/ */ }
			{ /* 		/!* 						alt='brand' *!/ */ }
			{ /* 		/!* 						quality={ 100 } *!/ */ }
			{ /* 		/!* 						src={ item } *!/ */ }
			{ /* 		/!* 						width={ 191 } *!/ */ }
			{ /* 		/!* 						height={ 191 } *!/ */ }
			{ /* 		/!* 						className='w-full h-full object-contain' *!/ */ }
			{ /* 		/!* 					/> *!/ */ }
			{ /* 		/!* 				</div> *!/ */ }
			{ /* 		/!* 			) *!/ */ }
			{ /* 		/!* 		}) } *!/ */ }
			{ /* 		/!* 	</div> *!/ */ }
			{ /* 		/!* </div> *!/ */ }
			{ /* 	</div> */ }
			{ /* </div> */ }
			<LongevitiBlendComponent.HowItWorks />
			<LongevitiBlendComponent.Unique />
			<LongevitiBlendComponent.TextRevealByWord text={ longevitiBlendData.textRefeal } />
			<SocialProof/>
			<LongevitiBlendComponent.Apps />
			<FrequentlyAskedQuestions
				data={ longevitiPanelData.faq.data }
				disabledAnimation
				className='!pt-0 lg:!pt-0'
			/>
			<Footer />
		</div>
	);
};

export default LongevitiBlendPage;
