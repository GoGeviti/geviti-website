import clsxm from '@/helpers/clsxm';

import CustomLink, { CustomLinkProps } from '../CustomLink';
import { ChevronRight } from '../Icons';

type ButtonCtaProps = Omit<CustomLinkProps, 'href' | 'onClick'> & {
  text?: string;
  arrowClassName?: string;
	hideArrow?: boolean;
  theme?: 'primary' | 'secondary' | 'tertiary' | 'blur' | 'outline';
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isLoading?: boolean;
  arrowPosition?: 'left' | 'right';
  size?: 'small' | 'default';
  type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
};

const ButtonCta: React.FC<ButtonCtaProps> = ({
	text,
	className,
	arrowClassName = 'w-[18px] h-[18px]',
	theme = 'primary',
	children,
	href,
	onClick,
	isLoading,
	size = 'default',
	arrowPosition = 'right',
	type = 'button',
	hideArrow = false,
	...props
}) => {
	const resolveBtnWrapperClassName = () => {
		if (theme === 'primary') return 'bg-primary text-white';
		if (theme === 'secondary') return 'bg-white text-primary';
		if (theme === 'outline') return 'bg-transparent border border-grey-primary text-primary';
		if (theme === 'tertiary') return 'bg-blue-primary text-primary';
		if (theme === 'blur')
			return 'bg-white/10 hover:bg-white/20 text-white border border-white/5 backdrop-blur-[25px]';
	};

	const resolveArrowWrapperClassNem = () => {
		if (theme === 'primary') return 'bg-white text-primary';
		if (theme === 'secondary') return 'bg-primary text-blue-primary';
		if (theme === 'outline') return 'bg-primary text-blue-primary';
		if (theme === 'tertiary') return 'bg-blue-alice text-primary';
		if (theme === 'blur') return 'bg-transparent text-white';
	};

	const btnClassName = clsxm(
		'group relative grid flex-row-reverse place-items-center overflow-hidden gap-6 py-1.5 rounded-full font-medium text-lg leading-6 font-Poppins',
		resolveBtnWrapperClassName(),
		arrowPosition === 'right' && 'grid-cols-[auto_46px] pl-[42px] pr-1.5',
		arrowPosition === 'left' && 'grid-cols-[46px_auto] pl-1.5 pr-[42px]',
		hideArrow && 'grid-cols-1 pr-[42px]',
		size === 'small' && 'text-xs block pl-0',

		className
	);

	const renderChildren = () => {
		return (
			<>
				<span
					className={ clsxm(
						'inline-block z-[2]',
						arrowPosition === 'left' && 'order-1'
					) }
				>
					{ text || children }
				</span>
				{
					!hideArrow &&
						(
							<span
								className={ clsxm(
									'rounded-full w-[46px] h-[46px] relative flex justify-center [&>*]:transform [&>*]:transition-all [&>*]:duration-400 [&>*]:h-[46px] [&>*]:flex [&>*]:items-center',
									resolveArrowWrapperClassNem(),
									size === 'small' &&
									'w-[30px] h-[30px] [&>*]:h-[30px] [&>*]:flex [&>*]:items-center [&>*]:justify-center absolute top-[6px] right-[6px]'
								) }
							>
								<span className='opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0'>
									<ChevronRight
										className={ clsxm(
											arrowClassName,
											arrowPosition === 'left' && 'rotate-180',
											'flex-shrink-0'
										) }
									/>
								</span>
								<span className='absolute top-0 opacity-100 group-hover:opacity-0 translate-x-0 group-hover:translate-x-full'>
									<ChevronRight
										className={ clsxm(
											arrowClassName,
											arrowPosition === 'left' && 'rotate-180',
											'flex-shrink-0'
										) }
									/>
								</span>
							</span>
						)
				}
			</>
		);
	};

	if (href) {
		return (
			<CustomLink
				href={ href }
				className={ btnClassName }
				onClick={ onClick }
				{ ...props }
			>
				{ renderChildren() }
			</CustomLink>
		);
	}

	return (
		<button
			type={ type }
			className={ btnClassName }
			onClick={ onClick }
			disabled={ isLoading || props.disabled }
		>
			{ renderChildren() }
		</button>
	);
};

export default ButtonCta;
