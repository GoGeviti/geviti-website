'use client';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

import { Dialog, DialogContent } from '../Dialog';

type VideoButtonProps = {
	videoUrl: string;
};

const VideoButton = ({ videoUrl }: VideoButtonProps) => {

	const [isOpen, setIsOpen] = useState(false);

	const getEmbedUrl = (url: string) => {
		const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
		return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
	};

	const renderDialog = () => {
		return (
			<Dialog
				open={ isOpen }
				modal={ true }
				onOpenChange={ setIsOpen }
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
							src={ getEmbedUrl(videoUrl) }
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</DialogContent>
			</Dialog>
		);
	};

	return <>
		{ /* <div className='absolute w-full z-10 h-full bg-black/20 group-hover:bg-black/50 transition-colors' /> */ }
		<div className='absolute z-10 left-1/2 -translate-x-1/2 border border-white/20 top-1/2 -translate-y-1/2 flex items-center justify-center w-[112px] h-[112px] rounded-full bg-black/40 backdrop-blur-sm'>
			<button
				onClick={ () => setIsOpen(true) }
				className='cursor-pointer'>
				<FaPlay className='text-white text-[40px]' />
			</button>
		</div>
		{ renderDialog() }
	</>;
};

export default VideoButton;