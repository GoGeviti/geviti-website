import React, { CSSProperties } from 'react';

import clsxm from '@/helpers/clsxm';

export interface ButtonCTAProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ButtonCTA = React.forwardRef<HTMLButtonElement, ButtonCTAProps>(
	(
		{
			shimmerColor = '#95DDFF',
			shimmerSize = '0.05em',
			shimmerDuration = '3s',
			borderRadius = '10px',
			background = 'linear-gradient(319deg, rgba(255, 255, 255, 0.80) 8.79%, rgba(255, 255, 255, 0.00) 34.44%, rgba(255, 255, 255, 0.00) 62.3%, #FFF 86.83%), #0B0F26',
			className,
			children,
			...props
		},
		ref
	) => {
		return (
			<button
				style={
          {
          	'--spread': '90deg',
          	'--shimmer-color': shimmerColor,
          	'--radius': borderRadius,
          	'--speed': shimmerDuration,
          	'--cut': shimmerSize,
          	'--bg': background,
          } as CSSProperties
				}
				className={ clsxm(
					'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-[42px] py-18px border-[1.4px] border-[#00A0EA]/10 text-white [background:var(--bg)] bg-blend-soft-light [border-radius:var(--radius)] dark:text-black',
					'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px',
					className
				) }
				ref={ ref }
				{ ...props }
			>
				<div
					className={ clsxm(
						'-z-30 blur-[2px]',
						'absolute inset-0 overflow-visible [container-type:size]'
					) }
				>
					<div className='absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]'>
						<div className='animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]' />
					</div>
				</div>

				<span className='text-sm/5 font-medium font-Poppins text-white'>
					{ children }
				</span>

				<div
					className={ clsxm(
						'absolute -z-20 [background:var(--bg)] bg-blend-soft-light [border-radius:var(--radius)] [inset:var(--cut)]'
					) }
				/>
			</button>
		);
	}
);

ButtonCTA.displayName = 'ButtonCTA';

export default ButtonCTA;
