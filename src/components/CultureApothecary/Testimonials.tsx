'use client';

import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { Dialog, DialogContent } from '../Dialog';
import { ChevronRight } from '../Icons';

const testimonialsData = [
	{
		image: '/images/cultureapothecary/reviews-christa.webp',
		video: 'https://www.youtube.com/embed/LsNk5Rr88BE',
		description:
      'For the first time, I didn’t feel like just a patient. The team took the time to thoroughly explain everything and make sure all my questions were answered.',
		author: 'Christa Treat',
	},
	{
		image: '/images/cultureapothecary/reviews-chris.webp',
		video: 'https://www.youtube.com/embed/43uaBvS-gfM',
		description:
      'I’ve had a phenomenal experience so far and am really looking forward to seeing where this goes. I’m excited to see my next test results and how my biomarkers have changed. I highly recommend it.',
		author: 'Chris Powell',
	},
	{
		image: '/images/cultureapothecary/reviews-melissa.webp',
		imageMobile: '/images/cultureapothecary/reviews-melissa-mobile.webp',
		video: 'https://www.youtube.com/embed/F3zsuSiNUw8',
		description:
      'I had dealt with some hypothyroidism, chronic stress & gut issues, now I’m able to stay on top of my hormones. I’ve loved every aspect of Geviti!',
		author: 'Melissa-Sue Methven',
	},
];

const Testimonials: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [activeIndex, setActiveIndex] = useState<number>(-1);

	const openDialogVideo = (indexToOpen: number) => {
		setIsOpen(true);
		setActiveIndex(indexToOpen);
	};

	const renderDialogVideo = () => {
		if (activeIndex > -1) {
			return (
				<Dialog
					open={ isOpen }
					onOpenChange={ setIsOpen }
					modal>
					<DialogContent
						position='default'
						className='max-w-[800px] rounded-[20px] overflow-hidden p-0 bg-black'
						showClose={ true }
					>
						<div className='aspect-video w-full'>
							<iframe
								title={ testimonialsData[activeIndex]?.author }
								width='100%'
								height='100%'
								src={ testimonialsData[activeIndex]?.video }
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							/>
						</div>
					</DialogContent>
				</Dialog>
			);
		}

		return null;
	};

	return (
		<>
			<div className='container-center w-full lg:py-16'>
				<div className='flex max-lg:flex-col lg:grid lg:grid-cols-[341px_1fr] gap-[100px] lg:gap-20'>
					<div className='flex flex-col gap-6'>
						<h2 className='h5 lg:h3 max-xs3:text-[6vw] -tracking-0.04em'>
              Here from
							<br />
							<span className='text-grey-primary'>our members</span>
						</h2>

						<div className='flex'>
							<CustomLink
								href='/testimonials'
								className='flex items-center gap-2 group font-medium text-sm/6 border-b border-primary text-primary'
							>
								<span className='whitespace-nowrap'>See more testimonials</span>
								<ChevronRight className='transition-transform group-hover:translate-x-1' />
							</CustomLink>
						</div>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-3.5'>
						{ testimonialsData.map((testimonial, index) => (
							<div key={ testimonial.author }>
								<div
									onClick={ () => openDialogVideo(index) }
									className='relative cursor-pointer group overflow-hidden lg:rounded-lg w-full aspect-[343/308] lg:aspect-[281/402]'
								>
									<div className='absolute inset-0 group-hover:bg-black/20 z-10' />

									{ testimonial.imageMobile && (
										<Image
											src={ testimonial.imageMobile }
											fill
											className='w-full h-auto object-cover object-top sm:hidden'
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											alt={ testimonial.author }
											quality={ 100 }
										/>
									) }

									<Image
										src={ testimonial.image }
										fill
										className={ clsxm(
											'w-full h-auto object-cover object-top',
											testimonial.imageMobile && 'max-sm:hidden'
										) }
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										alt={ testimonial.author }
										quality={ 100 }
									/>

									<div className='absolute-center'>
										<div className='w-14 h-14 relative z-20 rounded-full bg-black/20 border border-white/15 backdrop-blur-[2px] flex items-center justify-center'>
											<FaPlay className='text-white text-5 shrink-0' />
										</div>
									</div>
								</div>
								<h6 className='max-lg:font-normal h6 -tracking-0.04em mt-[31px]'>
									{ testimonial.author }
								</h6>
								<p className='body-extra-small leading-5 mt-3.5'>
									{ testimonial.description }
								</p>
							</div>
						)) }
					</div>
				</div>
			</div>

			{ renderDialogVideo() }
		</>
	);
};

export default Testimonials;
