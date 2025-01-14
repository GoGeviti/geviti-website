import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

const processData = [
	{
		id: 1,
		name: 'Application and Follow up',
		description:
      'Our expert team administers the therapy from the comfort of your home through and IV.\n\nMonitor progress and ensure optimal recovery with our dedicated support team.',
		image: '/images/stem-cells/process/process-2.webp',
		position: 'left',
	},
	{
		id: 2,
		name: 'Consultation & Plan',
		description:
      'Begin with an in-depth evaluation of your health and goals.\n\nReceive a personalized plan combining the most effective stem cell types for your condition.',
		image: '/images/stem-cells/process/process-1.webp',
		position: 'right',
	},
];

const Cards = () => {
	return (
		<>
			<div className='max-lg:hidden w-full flex flex-col items-center'>
				{ processData.map((process, processIdx) => (
					<WrapperCard
						key={ process.id }
						position={ process.position }
						id={ `sc_ip_box_${processIdx + 1}` }
					>
						<CardContent
							process={ process }
							id={ `sc_ip_box_content_d_${processIdx + 1}` }
						/>
					</WrapperCard>
				)) }
			</div>
			<div className='lg:hidden w-full h-full flex flex-col items-center'>
				{ processData.map((process, processIdx) => (
					<WrapperCard
						key={ process.id }
						position={ process.position }
						id={ `sc_ip_box_wrapper_m_${processIdx + 1}` }
					>
						<CardContent
							process={ process }
							id={ `sc_ip_box_content_m_${processIdx + 1}` }
						/>
					</WrapperCard>
				)) }
			</div>
		</>
	);
};

export default Cards;

const CardContent = ({ process, id }: any) => {
	return (
		<div
			id={ id }
			className='flex flex-col'>
			<dt className='text-sm/6 font-semibold text-white tracking-0.11em uppercase'>
				<div className='mb-4 xs2:mb-6 max-h-[19.528vh] aspect-[297/182] w-full relative overflow-hidden rounded-[14px]'>
					<Image
						src={ process.image }
						alt={ process.name }
						fill
						className='object-cover object-top'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
				{ process.name }
			</dt>
			<dd className='mt-2 flex flex-auto flex-col whitespace-pre-line text-xs/5 text-white'>
				{ process.description }
			</dd>
		</div>
	);
};

const WrapperCard = ({ position = 'left', children, id }: any) => {
	return (
		<div
			id={ id }
			className={ clsxm(
				'absolute opacity-0',
				position === 'left' &&
          'max-lg:-bottom-[35px] lg:top-[240px] lg:right-[134px] xl:right-[174px]',
				position === 'right' &&
          'max-lg:-bottom-[35px] lg:top-2.5 lg:left-[134px] xl:left-[174px]'
			) }
		>
			<div
				className={ clsxm(
					'p-[3px] rounded-[20px] w-full lg:w-[345px] bg-blend-screen relative [background:linear-gradient(0deg,#212261,#212261),_radial-gradient(47.54%_47.54%_at_50.14%_0%,#743DF2_0%,_rgba(18,18,53,0)_100%)]',
					position === 'left'
						? 'lg:[background:linear-gradient(0deg,#212261,#212261),_radial-gradient(41.59%_33.23%_at_100%_52.33%,#743DF2_0%,rgba(18, 18, 53, 0)_100%)]'
						: 'lg:[background:linear-gradient(0deg,#212261,#212261),_radial-gradient(53.77%_42.95%_at_0%_54.15%,#6C30F6_0%,rgba(18, 18, 53, 0)_100%)]'
				) }
			>
				<div
					style={ {
						background:
              'radial-gradient(117.12% 161.33% at 50% 23.87%, #2D2E83 0%, #212261 18%, #131337 43%, #0B0F26 66%, #0B0F26 86%, #0B0F26 100%)',
					} }
					className='rounded-[19px] p-4 xs2:p-6 text-white bg-blend-screen mix-blend-normal'
				>
					{ children }
				</div>
			</div>
		</div>
	);
};
