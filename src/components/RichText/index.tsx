/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import clsxm from '@/helpers/clsxm';

import { serializeLexical } from './serialize';

// import classes from './index.module.scss';

const RichText: React.FC<{ className?: string; content: any, blockIndex?:number, columnIndex? : number, headingRefs?: React.RefObject<{[key: string]: HTMLElement | null}> }> = ({ className, content,  headingRefs, columnIndex, blockIndex }) => {
	if (!content) {
		return null;
	}

	return (
		<div className={
			clsxm(
				className
			)
		}>
			{ content &&
        !Array.isArray(content) &&
        typeof content === 'object' &&
        'root' in content &&
        serializeLexical({ nodes: content?.root?.children, headingRefs: headingRefs, columnIndex, blockIndex: blockIndex }) }
		</div>
	);
};

export default RichText;
