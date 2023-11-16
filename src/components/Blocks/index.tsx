/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Fragment } from 'react';

import clsxm from '@/helpers/clsxm';
import { Post } from '@/payload/payload-types';

import { ContentBlock } from '../Content';
// import { ContentMedia } from '../ContentMedia';
import QuoteBlock from '../QuoteBlock';

const blockComponents = {
	quote: QuoteBlock,
	content: ContentBlock,
	// contentMedia: ContentMedia,
};

export const Blocks: React.FC<{
  blocks: (Post['layout'][0])[]
  disableTopPadding?: boolean
}> = props => {
	const { blocks } = props;

	const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

	if (hasBlocks) {
		return (
			<Fragment>
				{ blocks.map((block, index) => {
					const { blockType } = block;

					if (blockType && blockType in blockComponents) {
						const Block = blockComponents[blockType];
						const paddingTop = 'pt-10 lg:pt-[70px]';
						// if (index !== 0) {
						// 	paddingTop = 'pt-10 lg:pt-[70px]';
						// }
						if (Block) {
							return (
								<div
									className={
										clsxm(
											'container-center mx-auto w-full',
											paddingTop
										)
									}
									key={ index }>
									{ /* @ts-expect-error */ }
									<Block
										{ ...block } />
								</div>
							);
						}
					}
					return null;
				}) }
			</Fragment>
		);
	}

	return null;
};
