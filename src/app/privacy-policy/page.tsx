'use client';
import { ScrollArea, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from '@radix-ui/react-scroll-area';
import { NextPage } from 'next';

import { Navbar } from '@/components';
import { privacyPolicyData } from '@/constant/data';
const PrivacyPolicyPage: NextPage = () => {

	return (
		<div className='flex flex-col w-full bg-grey-background'>
			<div className='lg:px-3 overflow-hidden'>
				<Navbar
					theme='light'
					withBgWhite
					className='max-md:!pt-0'/>
				<div className='mt-[60px] md:mt-[166px] container-center text-center sm:mx-auto '>
					<p className='text-start md:text-center text-primary font-Poppins text-4xl -tracking-[1.44px] pt-7 '>{ privacyPolicyData.title }</p>
					<p className='text-start md:text-center text-grey-primary text-sm font-BRSonoma mt-2 mb-[30px]'>{ privacyPolicyData.desc }</p>
					<div className='md:bg-white rounded-xl md:p-[10px]'>
						<ScrollArea className='w-full md:h-[467px] relative'>
							<ScrollAreaViewport className='h-full '>
								<div
									className='text-start text-primary font-Poppins text-sm md:text-base md:m-[30px]'
									dangerouslySetInnerHTML={ { __html: privacyPolicyData.privacy } } />
							</ScrollAreaViewport>
							<ScrollAreaScrollbar
								className='flex select-none touch-none p-0.5 bg-primary/10  rounded-[3px] transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5'
								orientation='vertical'
							>
								<ScrollAreaThumb className="flex-1 bg-primary rounded-[3px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
							</ScrollAreaScrollbar>
						</ScrollArea>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicyPage;
