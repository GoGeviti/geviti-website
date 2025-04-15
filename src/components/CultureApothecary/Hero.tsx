import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import PopupReview from '../PopupReview';

import VideoButton from './VideoButton';

interface HeroProps {
	title: string;
	description: string;
	image: string;
	popupReview?: string;
	imageAlt: string;
	videoUrl?: string;
}

const getYoutubeThumbnail = (url: string) => {
	const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
	return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};

const Hero: React.FC<HeroProps> = ({ title, description, image, imageAlt, popupReview, videoUrl }) => {
	const thumbnailUrl = videoUrl ? getYoutubeThumbnail(videoUrl) : image;
	
	return (
		<div className='relative overflow-hidden isolate pt-[154px] lg:pt-[164px] pb-[124px] lg:pb-[218px]'>
			<div className='lg:flex lg:container-center'>
				<div className='mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8 px-4 lg:px-3 flex flex-col items-center lg:items-start text-center lg:text-left w-full'>
					<div
						style={ {
							boxShadow:
                '0px 96px 27px 0px rgba(184, 184, 184, 0.00), 0px 61px 25px 0px rgba(184, 184, 184, 0.01), 0px 34px 21px 0px rgba(184, 184, 184, 0.05), 0px 15px 15px 0px rgba(184, 184, 184, 0.09), 0px 4px 8px 0px rgba(184, 184, 184, 0.10)',
						} }
						className='w-fit rounded-[20px] overflow-hidden'
					>
						<PopupReview wrapperClassName='border border-grey-50 w-fit' />
					</div>
					<h1 className='mt-[42px] h5 lg:h2 max-xs3:text-[6vw] max-w-[331px] lg:max-w-[640px] w-full'>
						{ title }
					</h1>
					<p className='mt-3.5 lg:mt-6 body-extra-small max-w-[283px] sm:max-w-[475px]'>
						{ description }
					</p>
					<div className='flex max-sm:flex-col items-center sm:items-end gap-[41px]'>
						<ButtonCta
							href='/pricing'
							className='mt-[42px] w-full sm:w-fit'>
              Join Geviti
						</ButtonCta>

						<div className='flex flex-col gap-y-4 pb-1'>
							<p className='body-small text-primary'>
                Questions about our membership?
							</p>
							<Link
								href='https://calendly.com/cole-gogeviti/business-discovery-call'
								target='_blank'
								rel='noreferrer'
								className='text-lg/6 font-medium text-primary underline'
							>
                Schedule A Call
							</Link>
						</div>
					</div>
					{ /* <ButtonCta
						href='/pricing'
						className='mt-[42px] w-full sm:w-fit'>
						<span className='lg:hidden'>Become A Member</span>
						<span className='max-lg:hidden'>Join Geviti</span>
					</ButtonCta> */ }
				</div>
				<div className='max-lg:mt-16 lg:flex-none lg:ml-[69px] lg:absolute lg:left-1/2 lg:right-0 xxxl:right-auto'>
					<div className='relative flex'>
						<div className={ 'flex-none lg:max-w-[708px] relative w-full aspect-[708/550] overflow-hidden lg:h-[550px]' }>
							{ videoUrl && <VideoButton videoUrl={ videoUrl } /> }
							<Image
								alt={ imageAlt }
								src={ thumbnailUrl || image }
								fill
								quality={ 100 }
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw'
								className={ clsxm(
									'w-full',
									videoUrl ? 'object-contain object-center' : 'object-cover object-top'
								) }
								priority
							/>
						</div>
						{ (popupReview && !videoUrl) && (
							<div className='absolute z-20 -bottom-[60px] lg:-bottom-[42px] left-1/2 max-lg:-translate-x-1/2 lg:-left-[42px] w-full max-w-[calc(100vw-54px)] xs:max-w-[342px] rounded-xl py-3 px-5 flex flex-col gap-y-3 border border-grey-100 bg-white/50 backdrop-blur-lg'>
								<svg
									width='17'
									height='16'
									viewBox='0 0 17 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.43592 0.863281C1.96492 4.22581 0.337891 7.80528 0.337891 11.0051C0.337891 13.6084 2.29033 15.5066 4.24276 15.5066C5.97826 15.5066 7.38836 14.0965 7.38836 12.361C7.38836 10.1374 5.76132 8.99843 3.37501 8.99843C3.37501 6.34095 4.18853 4.76815 6.73754 2.1649L5.43592 0.863281ZM14.4931 0.863281C11.0221 4.22581 9.39503 7.80528 9.39503 11.0051C9.39503 13.6084 11.3475 15.5066 13.2999 15.5066C15.0354 15.5066 16.4455 14.0965 16.4455 12.361C16.4455 10.1374 14.8185 8.99843 12.4321 8.99843C12.4321 6.34095 13.2457 4.76815 15.7947 2.1649L14.4931 0.863281Z'
										fill='#4AADF6'
									/>
								</svg>
								<p className='italic font-medium -tracking-0.04em text-primary text-base/[21px] max-w-[280px]'>
									{ popupReview }
								</p>
								<svg
									width='17'
									height='16'
									viewBox='0 0 17 16'
									fill='none'
									className='self-end transform rotate-180'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.43592 0.863281C1.96492 4.22581 0.337891 7.80528 0.337891 11.0051C0.337891 13.6084 2.29033 15.5066 4.24276 15.5066C5.97826 15.5066 7.38836 14.0965 7.38836 12.361C7.38836 10.1374 5.76132 8.99843 3.37501 8.99843C3.37501 6.34095 4.18853 4.76815 6.73754 2.1649L5.43592 0.863281ZM14.4931 0.863281C11.0221 4.22581 9.39503 7.80528 9.39503 11.0051C9.39503 13.6084 11.3475 15.5066 13.2999 15.5066C15.0354 15.5066 16.4455 14.0965 16.4455 12.361C16.4455 10.1374 14.8185 8.99843 12.4321 8.99843C12.4321 6.34095 13.2457 4.76815 15.7947 2.1649L14.4931 0.863281Z'
										fill='#4AADF6'
									/>
								</svg>
							</div>
						) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
