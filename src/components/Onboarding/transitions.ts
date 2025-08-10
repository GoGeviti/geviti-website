import { Variants } from 'framer-motion';

export const slideInCenterToLeftProps = {
	duration: 0.22,
	ease: 'easeIn'
};

export const slideInRightToCenterProps = {
	duration: 0.24,
	ease: 'easeOut'
};

export const notifTransitionProps = {
	scale: {
		duration: .75,
		ease: [.21, 1.04, .58, 1.15]
	},
	opacity: {
		duration: .5,
		ease: [.15, 1.14, .88, .98]
	}
};

export const slideInVariants: Variants = {
	initial: {
		opacity: 0,
		y: 12,
		scale: 0.995,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: slideInRightToCenterProps,
	},
	exit: {
		opacity: 0,
		y: -12,
		scale: 0.995,
		transition: slideInCenterToLeftProps,
	},
};

export const slideInVariantsDelay = (delayMultiplier = 1): Variants => ({
	initial: {
		opacity: 0,
		y: 10,
		scale: 0.995,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			...slideInRightToCenterProps,
			delay: 0.05 * delayMultiplier,
		},
	},
	exit: {
		opacity: 0,
		y: -10,
		scale: 0.995,
		transition: slideInCenterToLeftProps,
	},
});

export const wrapperListVariants: Variants = {
	visible: {
		transition: { staggerChildren: 0.05, delayChildren: 0.05 },
	},
	exit: {
		transition: { staggerChildren: 0.05 },
	},
};