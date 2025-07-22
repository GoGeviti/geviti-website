'use client'
import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image'

import ButtonCta from '../ButtonCta';
import { Dialog, DialogContent } from '../Dialog'

const Video = () => {
	const [isOpen, setIsOpen] = useState(false);

	const renderDialog = () => {
		return (
			<Dialog
				open={ isOpen }
				modal={ true }
				onOpenChange={ setIsOpen }  // Changed this line - now it will properly handle open/close
			>
				<DialogContent
					position='default'
					className='max-w-[800px] rounded-[20px] overflow-hidden p-0 bg-black'
					showClose={ true }
				>
					<div className='aspect-video w-full'>
						<iframe
							title='Video'
							width='100%'
							height='100%'
							// src='https://www.youtube.com/embed/NwiXo66FZ7M'
							src='https://www.youtube.com/embed/v2A3Z5TW4vg'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</DialogContent>
			</Dialog>
		);
	};

	return (
		<>
			<div className='lg:px-3 max-lg:mt-[56px] pb-[45px] lg:py-[64px]'>
				<div className='container-center flex flex-col items-center justify-center gap-14'>
					<h3 className='font-medium text-primary text-2xl md:text-[32px] lg:text-4xl'>Hear from Founder & CEO, Nate Graville</h3>
					<div className='w-full lg:w-[955px] max-h-[523px] h-full max-lg:aspect-video rounded-[20px] overflow-hidden group relative flex items-center justify-center'>
						<div className='absolute w-full h-full bg-black/40 group-hover:bg-black/50 transition-colors' />
						<div className='absolute w-full h-full flex items-center justify-center'>
							<button
								onClick={ () => setIsOpen(true) }
								className='cursor-pointer'>
								<FaPlay className='text-white text-[50px]' />
							</button>
						</div>
						<Image
							alt='thumbnail'
							src='/images/schedule-call/thumbnail.webp'
							width={ 955 }
							height={ 523 }
							priority
							quality={ 100 }
							className='object-cover w-full h-full object-center'
						/>
					</div>
					<p className='text-[#919B9F] text-sm font-medium max-w-[519px] mx-auto text-center'>Trying to decide if Geviti is the right fit for you? Speak with one of our Membership Advisors to get a better understanding of how Geviti has helped thousands of others take control of their health!</p>
					<ButtonCta
						text='Schedule A Call'
						externalLink={ true }
						href='https://calendly.com/naomitabot-gogeviti/geviti-discovery-call'
					/>
				</div>
			</div>
			{ renderDialog() }
		</>
	)
}

export default Video