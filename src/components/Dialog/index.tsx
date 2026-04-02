'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import clsxm from '@/helpers/clsxm';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

// Radix UI Portal wrappers must not pass className props to the underlying Radix Primitive Portal, as it causes build errors.
const DialogPortal = ({
	...props
}: DialogPrimitive.DialogPortalProps) => (
	<DialogPrimitive.Portal
		{ ...props } />
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ ref }
		className={ clsxm(
			'fixed inset-0 z-[51] bg-primary bg-opacity-[0.77] backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		) }
		{ ...props }
	/>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    position?: 'default' | 'bottom-right' | 'bottom-left';
    showClose?: boolean;
    overlayClassName?: string;
  }
>(
	(
		{ className, children, showClose = true, overlayClassName, ...props },
		ref
	) => (
		<DialogPortal>
			<DialogOverlay className={ overlayClassName } />
			<DialogPrimitive.Content
				ref={ ref }
				className={ clsxm(
					'fixed rounded-md shadow-[0px_24px_227px_0px_rgba(24,26,28,0.50)] z-[52] w-[90vw] sm:w-full bg-grey-secondary duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
					props.position === 'default'
						? 'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'
						: '',
					props.position === 'bottom-right' ? 'bottom-6 right-6' : '',
					props.position === 'bottom-left'
						? 'bottom-6 left-6 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-bottom-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-bottom-[48%]'
						: 'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
					className
				) }
				{ ...props }
			>
				{ children }
				{ showClose && (
					<DialogPrimitive.Close className='absolute max-sm:left-1/2 max-sm:-translate-x-1/2 sm:right-0 -top-20 focus:outline-none focus:border-none focus:ring-0 group'>
						<div className='bg-grey-secondary bg-opacity-[0.06] group-hover:bg-opacity-10 rounded-full w-[65px] h-[65px] flex items-center justify-center flex-shrink-0'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='33'
								height='33'
								viewBox='0 0 33 33'
								fill='none'
							>
								<path
									d='M23.2708 9.72916L9.72916 23.2708M9.72916 9.72916L23.2708 23.2708'
									stroke='#FBFBFB'
									strokeWidth='2.70833'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<span className='sr-only'>Close</span>
					</DialogPrimitive.Close>
				) }
			</DialogPrimitive.Content>
		</DialogPortal>
	)
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={ clsxm(
			'flex flex-col space-y-1.5 text-center sm:text-left',
			className
		) }
		{ ...props }
	/>
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={ clsxm(
			'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
			className
		) }
		{ ...props }
	/>
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ ref }
		className={ clsxm(
			'text-lg font-semibold leading-none tracking-tight',
			className
		) }
		{ ...props }
	/>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ ref }
		className={ clsxm(className) }
		{ ...props }
	/>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
};
