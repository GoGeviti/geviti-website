'use client';

import React from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';

import clsxm from '@/helpers/clsxm';

type AnimationType = 'text' | 'word' | 'character' | 'line' | 'section';
type AnimationVariant =
  | 'fadeIn'
  | 'blurIn'
  | 'blurInUp'
  | 'blurInDown'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scaleUp'
  | 'scaleDown';

interface SectionAnimateProps extends MotionProps {
  children: string | React.ReactNode;
  className?: string;
  segmentClassName?: string;
  segmentStyle?: React.CSSProperties;
  delay?: number;
  duration?: number;
  variants?: Variants;
  by?: AnimationType;
  startOnView?: boolean;
  once?: boolean;
  animation?: AnimationVariant | null;
}

const staggerTimings: Record<AnimationType, number> = {
	text: 0.06,
	word: 0.05,
	character: 0.03,
	line: 0.06,
	section: 0.25,
};

export const defaultContainerVariants = {
	// hidden: { opacity: 1 },
	show: {
		// opacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
	exit: {
		// opacity: 0,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

export const defaultItemVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		opacity: 0,
	},
};

export const defaultItemAnimationVariants: Record<
  AnimationVariant,
  { container: Variants; item: Variants }
> = {
	fadeIn: {
		container: defaultContainerVariants,
		item: {
			hidden: { opacity: 0, y: 10 },
			show: {
				opacity: 1,
				y: 0,
				transition: {
					y: { duration: 0.3 },
					opacity: { duration: 0.4 },
				},
			},
			exit: {
				opacity: 0,
				y: 10,
				transition: {
					y: { duration: 0.3 },
					opacity: { duration: 0.4 },
				},
			},
		},
	},
	blurIn: {
		container: defaultContainerVariants,
		item: {
			hidden: { opacity: 0, filter: 'blur(10px)' },
			show: {
				opacity: 1,
				filter: 'blur(0px)',
				transition: {
					opacity: { duration: 0.4 },
					filter: { duration: 0.3 },
				},
			},
			exit: {
				opacity: 0,
				filter: 'blur(10px)',
				transition: {
					opacity: { duration: 0.4 },
					filter: { duration: 0.3 },
				},
			},
		},
	},
	blurInUp: {
		container: defaultContainerVariants,
		item: {
			hidden: { opacity: 0, filter: 'blur(10px)', y: 10 },
			show: {
				opacity: 1,
				filter: 'blur(0px)',
				y: 0,
				transition: {
					y: { duration: 0.3 },
					opacity: { duration: 0.4 },
					filter: { duration: 0.3 },
				},
			},
			exit: {
				opacity: 0,
				filter: 'blur(10px)',
				y: -10,
				transition: {
					y: { duration: 0.3 },
					opacity: { duration: 0.4 },
					filter: { duration: 0.3 },
				},
			},
		},
	},
	blurInDown: {
		container: defaultContainerVariants,
		item: {
			hidden: { opacity: 0, filter: 'blur(10px)', y: -10 },
			show: {
				opacity: 1,
				filter: 'blur(0px)',
				y: 0,
				transition: {
					y: { duration: 0.3 },
					opacity: { duration: 0.4 },
					filter: { duration: 0.3 },
				},
			},
		},
	},
	slideUp: {
		container: defaultContainerVariants,
		item: {
			hidden: { y: 20, opacity: 0 },
			show: (delay: number) => ({
				y: 0,
				opacity: 1,
				transition: {
					delay,
					duration: 0.3,
				},
			}),
			exit: {
				y: -20,
				opacity: 0,
				transition: {
					duration: 0.3,
				},
			},
		},
	},
	slideDown: {
		container: defaultContainerVariants,
		item: {
			hidden: { y: -20, opacity: 0 },
			show: {
				y: 0,
				opacity: 1,
				transition: { duration: 0.3 },
			},
			exit: {
				y: 20,
				opacity: 0,
				transition: { duration: 0.3 },
			},
		},
	},
	slideLeft: {
		container: defaultContainerVariants,
		item: {
			hidden: { x: 20, opacity: 0 },
			show: {
				x: 0,
				opacity: 1,
				transition: { duration: 0.3 },
			},
			exit: {
				x: -20,
				opacity: 0,
				transition: { duration: 0.3 },
			},
		},
	},
	slideRight: {
		container: defaultContainerVariants,
		item: {
			hidden: { x: -20, opacity: 0 },
			show: {
				x: 0,
				opacity: 1,
				transition: { duration: 0.3 },
			},
			exit: {
				x: 20,
				opacity: 0,
				transition: { duration: 0.3 },
			},
		},
	},
	scaleUp: {
		container: defaultContainerVariants,
		item: {
			hidden: { scale: 0.5, opacity: 0 },
			show: {
				scale: 1,
				opacity: 1,
				transition: {
					duration: 0.3,
					scale: {
						type: 'spring',
						damping: 15,
						stiffness: 300,
					},
				},
			},
			exit: {
				scale: 0.5,
				opacity: 0,
				transition: { duration: 0.3 },
			},
		},
	},
	scaleDown: {
		container: defaultContainerVariants,
		item: {
			hidden: { scale: 1.5, opacity: 0 },
			show: (delay: number) => ({
				scale: 1,
				opacity: 1,
				transition: {
					delay,
					duration: 0.3,
					scale: {
						type: 'spring',
						damping: 15,
						stiffness: 300,
					},
				},
			}),
			exit: {
				scale: 1.5,
				opacity: 0,
				transition: { duration: 0.3 },
			},
		},
	},
};

const SectionAnimate: React.FC<SectionAnimateProps> = ({
	children,
	className,
	segmentClassName,
	segmentStyle,
	startOnView = true,
	by = 'section',
	animation = 'blurInUp',
	...props
}) => {
	const finalVariants = animation
		? {
			container: {
				...defaultItemAnimationVariants[animation].container,
				show: {
					...defaultItemAnimationVariants[animation].container.show,
					transition: {
						staggerChildren: staggerTimings[by],
					},
				},
				exit: {
					...defaultItemAnimationVariants[animation].container.exit,
					transition: {
						...(animation === 'blurInUp' && by === 'line'
							? { staggerChildren: 0.15 }
							: {
								staggerChildren: staggerTimings[by],
								staggerDirection: -1,
							}),
					},
				},
			},
			item: defaultItemAnimationVariants[animation].item,
		}
		: { container: defaultContainerVariants, item: defaultItemVariants };

	if (by === 'section' || typeof children !== 'string') {
		return (
			<motion.div
				variants={ finalVariants.item }
				className={ className || segmentClassName }
				style={ props.style || segmentStyle }
				{ ...props }
			>
				{ children }
			</motion.div>
		);
	}

	let segments: string[] = [];
	switch (by) {
		case 'word':
			segments = children.split(/(\s+)/);
			break;
		case 'character':
			segments = children.split('');
			break;
		case 'line':
			segments = children.split('\n');
			break;
		case 'text':
		default:
			segments = [children];
			break;
	}

	return (
	// <AnimatePresence mode='popLayout'>
		<motion.div
			variants={ finalVariants.container }
			initial='hidden'
			whileInView={ startOnView ? 'show' : undefined }
			animate={ startOnView ? undefined : 'show' }
			exit='exit'
			className={ clsxm('whitespace-pre-wrap', className) }
			viewport={ { once: true, amount: 0.5 } }
			{ ...props }
		>
			{ segments.map((segment, i) => (
				<motion.span
					key={ `${by}-${segment}-${i}` }
					variants={ finalVariants.item }
					custom={ i * staggerTimings[by] }
					className={ clsxm(
						by === 'line' ? 'block' : 'inline-block whitespace-pre',
						segmentClassName
					) }
					style={ segmentStyle }
				>
					<span dangerouslySetInnerHTML={ { __html: segment } } />
				</motion.span>
			)) }
		</motion.div>
	// </AnimatePresence>
	);
};

export default SectionAnimate;
