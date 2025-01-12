import { memo } from 'react';
import Image from 'next/image';

import AnimatedLine from '../AnimatedLine';
import PathText from '../PathText';
import PointCircle from '../PointCircle';

const WhyChoose = memo(({ pointProgress }: { pointProgress?: number }) => (
	<div className='h-full w-full flex items-center justify-center text-white relative'>
		<div className='relative flex items-center justify-center lg:ml-20'>
			<Image
				src='/images/stem-cells/overview/background-2.webp'
				width={ 630.315 * 3 }
				height={ 571.44 * 3 }
				className='h-auto w-full lg:w-[630.315px] object-cover'
				alt='cells'
			/>

			{ pointProgress !== undefined
				? pointProgress >= 0 &&
          pointProgress <= 0.15 && (
					<div className='absolute top-0 lg:-top-[21px] right-[25%] lg:right-[170px]'>
						<div className='relative'>
							<PointCircle
								desktopClassName='max-sm:hidden sm:w-[82.369px]'
								mobileClassName='sm:hidden w-[50px]'
								delay={ 0.15 }
							/>

							<div className='absolute max-lg:right-[70px] lg:left-[75px] -top-5 lg:-top-1'>
								<div className='relative'>
									<AnimatedLine
										svgProps={ {
											width: '323',
											height: '45',
											viewBox: '0 0 323 45',
											className: 'max-lg:scale-x-[-1] max-sm:w-[181px]',
										} }
										pathProps={ {
											d: 'M1 44.7386L40.6381 5.10051C43.2636 2.475 46.8246 1 50.5376 1H322.623',
										} }
										delay={ 0.15 }
									/>

									<div className='absolute top-[23.15px] lg:left-[76.62px] max-w-[245px]'>
										<PathText
											title='At-home administration'
											description='Experience the convenience of expert-guided stem cell therapy in the comfort of your own home, with our concierge medical team.'
											titleClassName='max-sm:text-xs/normal'
											descriptionClassName='max-sm:text-[10px]/normal'
											delay={ 0.15 }
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
				: null }

			{ pointProgress !== undefined
				? pointProgress > 0.15 && (
					<div className='absolute bottom-0 lg:-bottom-[22px] left-[10%] lg:left-[100px]'>
						<div className='relative'>
							<PointCircle
								desktopClassName='max-sm:hidden sm:w-[82.369px]'
								mobileClassName='sm:hidden w-[50px]'
								delay={ 0.15 }
							/>

							<div className='absolute max-lg:left-[50px] lg:right-[75px] -bottom-5 lg:-bottom-1'>
								<AnimatedLine
									svgProps={ {
										width: '322',
										height: '45',
										viewBox: '0 0 322 45',
										className: 'max-lg:scale-x-[-1] max-sm:w-[281px]',
									} }
									pathProps={ {
										d: 'M321.623 0.413734L281.984 40.0518C279.359 42.6773 275.798 44.1523 272.085 44.1523H0',
									} }
									delay={ 0.15 }
								/>

								<div className='absolute bottom-[23.15px] max-lg:left-[50px] lg:right-[76.62px] max-w-[245px]'>
									<PathText
										title='20x more integration'
										description='While standard treatments achieve just 1% tissue integration, our breakthrough technology can activate 20x more healing potential.'
										titleClassName='max-sm:text-xs/normal'
										descriptionClassName='max-sm:text-[10px]/normal'
										delay={ 0.15 }
									/>
								</div>
							</div>
						</div>
					</div>
				)
				: null }
		</div>
	</div>
));

WhyChoose.displayName = 'WhyChoose';

export default WhyChoose;
