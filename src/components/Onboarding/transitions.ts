import { Variants } from 'framer-motion';

export const slideInCenterToLeftProps = {
	duration: .5,
	ease: 'easeOut'
	// ease: [.15, 1.14, .88, .98]
};

export const slideInRightToCenterProps = {
	duration: .75,
	ease: 'easeInOut'
	// ease: [.21, 1.04, .58, 1.15],
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
		x: '100vw',
	},
	visible: {
		x: 0,
		transition: slideInRightToCenterProps
	},
	exit: {
		x: '-100vw',
		transition: slideInCenterToLeftProps
	}
};

export const slideInVariantsDelay = (delayMultiplier = 1): Variants => ({
	initial: {
		x: '100vw',
	},
	visible: {
		x: 0,
		transition: {
			...slideInRightToCenterProps,
			delay: (0.08 * delayMultiplier)
		}
	},
	exit: {
		x: '-100vw',
		transition: slideInCenterToLeftProps
	}
});

export const wrapperListVariants: Variants = {
	visible: {
		transition: { staggerChildren: 0.08, delayChildren: 0.08 }
	},
	exit: {
		transition: { staggerChildren: 0.08 }
	}
};