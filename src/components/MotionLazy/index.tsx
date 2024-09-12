'use client';

import { LazyMotion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const loadFeaturesAsync = async() =>
	import('./Features').then(res => res.default);

const MotionLazy: React.FC<Props> = ({ children }) => {
	return (
		<LazyMotion
			strict
			features={ loadFeaturesAsync }>
			{ children }
		</LazyMotion>
	);
};

export default MotionLazy;
