import Image from 'next/image';

import PathText from './PathText';
import PointCircle from './PointCircle';

const content1 = {
	title: 'Hematopoietic Stem Cells',
	description:
    'Primarily responsible for forming blood and immune cells, contributing to immune system regulation.',
};

const content2 = {
	title: 'Mobile Stem Cell Therapy',
	description:
    ' The worlds most powerful tool to boost regeneration, reduce inflammation, improve energy, and support anti-aging',
};

const MobileTherapy = () => {
	return (
		<div className='mb-[95px] lg:mb-[149px] xxxl:container-center relative isolate flex flex-col font-Poppins'>
			<Image
				src='/images/stem-cells/mobile-therapy/apps.png'
				alt='apps'
				width={ 1440 * 10 }
				height={ 959 * 10 }
				className='w-[672px] h-[448px] max-lg:object-cover lg:w-screen lg:h-auto'
				quality={ 100 }
			/>
			<div className='lg:hidden container-center w-full'>
				<div
					className='p-[3px] rounded-[20px] bg-blend-screen'
					style={ {
						background:
              'linear-gradient(0deg, #212261, #212261), radial-gradient(47.54% 47.54% at 50.14% 0%, #743DF2 0%, rgba(18, 18, 53, 0) 100%)',
					} }
				>
					<div
						className='p-6 rounded-[19px] bg-blend-screen mix-blend-normal'
						style={ {
							background:
                'radial-gradient(117.12% 161.33% at 50% 23.87%, #2D2E83 0%, #212261 18%, #131337 43%, #0B0F26 66%, #0B0F26 86%, #0B0F26 100%)',
						} }
					>
						<p className='text-sm/6 font-semibold text-white tracking-0.11em uppercase'>
							{ content1.title }
						</p>
						<p className='mt-2 text-xs/5 text-white'>{ content1.description }</p>
					</div>
				</div>
			</div>

			<div className='absolute top-[10%] lg:top-[13%] left-[48.5%]'>
				<div className='relative'>
					<PointCircle />

					<div className='max-lg:hidden absolute left-[138.92px] bottom-[172px]'>
						<div className='relative'>
							<svg
								width='323'
								height='45'
								viewBox='0 0 323 45'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0.918472 44.7386L40.5566 5.10051C43.1821 2.475 46.743 1 50.4561 1H322.541'
									stroke='white'
									strokeWidth='0.717026'
								/>
							</svg>
							<div className='absolute max-w-[317px] top-[23.15px] left-[76.62px]'>
								<PathText { ...content1 } />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='absolute top-[40%] lg:top-[58%] left-[22%] lg:left-[35%]'>
				<div className='relative'>
					<PointCircle />

					<div className='max-lg:hidden absolute right-[138.92px] -bottom-[51px]'>
						<div className='relative'>
							<svg
								width='322'
								height='46'
								viewBox='0 0 322 46'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M321.623 0.999672L281.984 40.6378C279.359 43.2633 275.798 44.7383 272.085 44.7383H-1.52588e-05'
									stroke='white'
									strokeWidth='0.717026'
								/>
							</svg>

							<div className='max-lg:hidden absolute bottom-[23.15px] right-[76.62px]'>
								<PathText { ...content2 } />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileTherapy;
