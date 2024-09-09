'use client';

import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import clsxm from '@/helpers/clsxm';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ ref }
		className={ clsxm(
			'relative flex w-full touch-none select-none items-center',
			className
		) }
		{ ...props }
	>
		<SliderPrimitive.Track className='relative h-[11px] w-full grow overflow-hidden rounded-[30px] bg-[#F5FAFF]'>
			<SliderPrimitive.Range className='absolute h-full bg-[#3C82F4]' />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className='block h-[22px] w-[22px] rounded-full border-[4px] border-[#3C82F4] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />
	</SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
