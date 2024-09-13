'use client';
import React from 'react';
import {
	ScrollArea,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from '@radix-ui/react-scroll-area';

import RichText from '@/components/RichText';

type PrivacyClientPageProps = {
  content: {
    [k: string]: unknown;
  }[];
};

const PrivacyClientPage: React.FC<PrivacyClientPageProps> = ({ content }) => {
	return (
		<div className='md:bg-white rounded-xl md:p-[10px]'>
			<ScrollArea className='w-full md:h-[467px] relative'>
				<ScrollAreaViewport className='h-full md:overflow-x-hidden md:overflow-y-auto max-md:!overflow-hidden'>
					<div className='text-start text-primary font-Poppins text-sm md:text-base md:m-[30px]'>
						<RichText content={ content } />
					</div>
				</ScrollAreaViewport>
				<ScrollAreaScrollbar
					className='flex select-none touch-none p-0.5 rounded-[3px] transition-colors duration-160 ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5'
					orientation='vertical'
				>
					<ScrollAreaThumb className="flex-1 bg-primary max-md:hidden rounded-[3px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
				</ScrollAreaScrollbar>
			</ScrollArea>
		</div>
	);
};

export default PrivacyClientPage;
