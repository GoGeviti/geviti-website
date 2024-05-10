import React from 'react';
import Image from 'next/image';

import Stat from './Stat';

type IWellnessProCardProps = {
	item: {
		preTitle: string;
		title: string;
		description: string;
		image: string;
		imageMobile: string;
		count: number;
		suffix?: string | null;
		imageHeading: string;
		imageSubheading: string;
	};
};

const WellnessProCard: React.FC<IWellnessProCardProps> = ({ item }) => {
	const {
		preTitle,
		title,
		description,
		image,
		imageMobile,
		count,
		suffix,
		imageHeading,
		imageSubheading,
	} = item;

	return (
		<article className='lg:bg-white rounded-19px px-4 lg:px-6 lg:pt-[42px] lg:pb-6 relative overflow-hidden font-Poppins'>
			<div className='lg:pl-18px'>
				<p className='text-grey-primary text-pretitle uppercase'>
					{ preTitle }
				</p>
				<h2 className='text-primary text-2xl md:text-3xl lg:text-4xl !leading-normal font-normal mt-3 mb-4 lg:mt-0 lg:mb-3'>
					<span dangerouslySetInnerHTML={ { __html: title } } />
				</h2>
				<div className='lg:max-w-[446px]'>
					<p className='text-grey-400 text-xs lg:text-sm !leading-5'>
						{ description }
					</p>
				</div>
			</div>
			<div className='mt-[25px] lg:mt-[46px] w-full'>
				<div className='w-full h-[288px] relative overflow-hidden rounded-2xl group'>
					<Image
						alt=''
						src={ image }
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
						className='w-full h-full object-cover object-right max-lg:hidden group-hover:scale-105 transition-transform duration-300'
					/>
					<Image
						alt=''
						src={ imageMobile }
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw'
						className='w-full h-full object-cover lg:hidden'
					/>

					<div className='w-full h-full flex flex-col justify-end px-5 lg:px-6 py-18px text-white relative z-10'>
						<Stat
							num={ count }
							suffix={ suffix }
							suffixClassName={ suffix === 'million' ? 'text-4xl !leading-normal -tracking-0.04em' : '' } />
						<div className='uppercase text-[3.581vw] xs2:text-sm !leading-[171%] tracking-0.11em font-semibold'>
							<p
								dangerouslySetInnerHTML={ { __html: imageHeading } }
								className='text-blue-primary' />
							<p
								dangerouslySetInnerHTML={ { __html: imageSubheading } }
								className='text-white' />
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default WellnessProCard;
