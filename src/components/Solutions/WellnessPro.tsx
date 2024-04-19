import landingData from '@/constant/data/solution';

import WellnessProCard from './WellnessProCard';

const WellnessPro = () => {

	const wellnessprolist = landingData.wellnessprolist;
	
	return (
		<>
			<section className='bg-[#F2F2F2] md:px-4'>
				<div className='grid lg:grid-cols-2 grid-cols-1 md:gap-[23px] gap-11 w-full mx-auto md:bg-transparent bg-white py-8 md:py-0 rounded-2xl'>
					{ wellnessprolist?.map((obj, index) => (
						<WellnessProCard
							obj={ obj }
							key={ index } />
					)) }
				</div>
			</section>
		</>
	);
};

export default WellnessPro;
