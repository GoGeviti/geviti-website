import React from 'react';

import { Post } from '@/payload/payload-types';

import RichText from '../RichText';

type Props = Extract<Post['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
	const { columns } = props;

	return (
		<div>
			{ columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
          	const { richText } = col;

          	return (
          		<div
          			key={ index }
          			className={ `${index !== 0 ? 'mt-10 lg:mt-[70px]' : ''}` }
          		>
          			<RichText content={ richText } />
          		</div>
          	);
          }) }
		</div>
	);
};
