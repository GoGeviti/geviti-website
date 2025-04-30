import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

const data = [
	{
		image: '/images/healthexperts/Dr_Brian_Popiel.jpg',
		title: 'Dr. Brian Popiel',
		description: 'Dr. Brian Popiel is a Naturopathic Medical Doctor, licensed as a primary care physician in the State of Arizona. Dr. Popiel has treated patients of all ages and conditions with particular emphasis on Sports Medicine, Pain Management and Hormone Balancing. In 2011, Dr. Popiel was recognized as TOP DOC among his colleagues, and featured in Phoenix Magazine.',
		direction: 'left'
	},
	{
		image: '/images/healthexperts/Dr_Rahul_Mehan.jpg',
		title: 'Dr. Rahul Mehan',
		description: 'Dr. Rahul Mehan is a board-certified urologist and men’s health expert, founder of East Valley Urology Center in Arizona, and a national leader in hormone optimization and minimally invasive surgery. Recognized for his expertise in testosterone therapy and advanced prostate, sexual, and metabolic care, Dr. Mehan uses cutting-edge diagnostics and personalized treatment plans to help men reclaim energy, vitality, and performance. ',
		direction: 'right'
	},
	{
		image: '/images/healthexperts/Dr_Joy_Kong.jpg',
		title: 'Dr. Joy Kong',
		description: 'Dr. Joy Kong is a UCLA-trained, triple board-certified physician specializing in regenerative medicine, with expertise in stem cell and ketamine therapies. Dr. Kong  founded the American Academy of Integrative Cell Therapy and serves as a faculty member for ISSCA, mentoring physicians worldwide. In addition, she has earned national recognition as “Top Doctor of the Year in Stem Cell Therapy” and “Stem Cell Doctor of the Decade.”',
		direction: 'left'
	},
]

const MedicalAdvisors = () => {
	return (
		<div className='lg:px-3 font-Poppins my-16'>
			<div className='lg:container-center'>
				<h2 className='text-[36px] max-lg:px-4 max-lg:leading-none lg:text-[64px] lg:tracking-[-3.2px] text-primary'>Meet our top medical advisors</h2>
				<div className='flex flex-col gap-16 lg:gap-28 mt-10 lg:mt-16'>
					{ data.map((item, index) => (
						<div
							key={ index }
							className={ clsxm(
								'flex flex-col lg:flex-row gap-10 lg:gap-36 items-end',
								item.direction === 'right' && 'lg:flex-row-reverse'
							) }>
							<Image
								src={ item.image }
								alt={ item.title }
								className='lg:w-[519px] h-[519px] object-cover'
								width={ 519 }
								height={ 519 }
							/>
							<div className='max-w-[550px] max-lg:px-4'>
								<h3 className='h4 lg:h3'>{ item.title }</h3>
								<p className='max-lg:body-small lg:h5 mt-3.5 lg:mt-6 lg:text-grey-500'>{ item.description }</p>
							</div>
						</div>
					)) }
				</div>
			</div>
		</div>
	);
};

export default MedicalAdvisors;