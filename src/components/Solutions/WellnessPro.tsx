import solutionData from '@/constant/data/solution';

import WellnessProCard from './WellnessProCard';

const WellnessPro: React.FC<{ type: 'men' | 'women'; }> = ({ type }) => {
	const list = solutionData.wellnessProList[type];

	return (
		<section className='lg:px-3 overflow-hidden'>
			<div className='grid lg:grid-cols-2 grid-cols-1 gap-[42px] lg:gap-[23px] w-full mx-auto lg:bg-transparent bg-white py-[42px] lg:py-0 max-lg:rounded-19px'>
				{ list?.map((item, index) => (
					<WellnessProCard
						item={ item }
						key={ index }
						backdropClassName={ type === 'women'
							? index === 0
								? 'h-[40%] lg:h-[67%]'
								: 'h-[58%] lg:h-[49%]'
							: undefined }
					/>
				)) }
			</div>
		</section>
	);
};

export default WellnessPro;
