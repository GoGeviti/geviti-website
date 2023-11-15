/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { Fragment } from 'react';
import type { SerializedListItemNode, SerializedListNode } from '@lexical/list';
import type { SerializedHeadingNode } from '@lexical/rich-text';
import type { LinkFields, SerializedLinkNode, SerializedUploadNode } from '@payloadcms/richtext-lexical';
import escapeHTML from 'escape-html';
import type { SerializedElementNode, SerializedLexicalNode, SerializedTextNode } from 'lexical';
import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/helpers/clsxm';

import {
	IS_BOLD,
	IS_CODE,
	IS_ITALIC,
	IS_STRIKETHROUGH,
	IS_SUBSCRIPT,
	IS_SUPERSCRIPT,
	IS_UNDERLINE,
} from './nodeFormat';

interface Props {
  nodes: SerializedLexicalNode[]
}

export function serializeLexical({ nodes }: Props): JSX.Element {
	return (
		<Fragment>
			{ nodes?.map((_node, index): JSX.Element | null => {
				if (_node.type === 'text') {
					const node = _node as SerializedTextNode;
					let text = (
						<span
							dangerouslySetInnerHTML={ { __html: escapeHTML(node.text) } }
							key={ index } />
					);
					if (node.format & IS_BOLD) {
						text = <strong key={ index }>{ text }</strong>;
					}
					if (node.format & IS_ITALIC) {
						text = <em key={ index }>{ text }</em>;
					}
					if (node.format & IS_STRIKETHROUGH) {
						text = (
							<span
								key={ index }
								style={ { textDecoration: 'line-through' } }>
								{ text }
							</span>
						);
					}
					if (node.format & IS_UNDERLINE) {
						text = (
							<span
								key={ index }
								style={ { textDecoration: 'underline' } }>
								{ text }
							</span>
						);
					}
					if (node.format & IS_CODE) {
						text = <code key={ index }>{ text }</code>;
					}
					if (node.format & IS_SUBSCRIPT) {
						text = <sub key={ index }>{ text }</sub>;
					}
					if (node.format & IS_SUPERSCRIPT) {
						text = <sup key={ index }>{ text }</sup>;
					}

					return text;
				}

				if (_node === null) {
					return null;
				}

				// NOTE: Hacky fix for
				// https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
				// which does not return checked: false (only true - i.e. there is no prop for false)
				const serializedChildrenFn = (node: SerializedElementNode): JSX.Element | null => {
					if (node.children === null) {
						return null;
					} else {
						if (node?.type === 'list' && (node as SerializedListNode)?.listType === 'check') {
							for (const item of node.children) {
								if ('checked' in item) {
									if (!item?.checked) {
										item.checked = false;
									}
								}
							}
							return serializeLexical({ nodes: node.children });
						} else {
							return serializeLexical({ nodes: node.children });
						}
					}
				};

				const serializedChildren =
          'children' in _node ? serializedChildrenFn(_node as SerializedElementNode) : '';

				switch (_node.type) {
					case 'linebreak': {
						return <br key={ index } />;
					}
					case 'paragraph': {
						return <p
							className='lg:text-xl font-Poppins text-primary'
							key={ index }>{ serializedChildren }</p>;
					}
					case 'heading': {
						const node = _node as SerializedHeadingNode;

            type Heading = Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5'>
            const Tag = node?.tag as Heading;
            return <Tag
            	className='font-Poppins text-primary text-[26px] leading-[33px] font-semibold lg:mt-[70px] lg:mb-5 mt-10 mb-[10px]'
            	key={ index }>{ serializedChildren }</Tag>;
					}

					case 'upload': {
						const node = _node as SerializedUploadNode;

						const value = node.value;
						const caption = node?.fields?.caption as {
							root : SerializedHeadingNode
						};
						const alignment = node?.fields?.alignment as 'left' | 'right';
						const serializedCaption = caption?.root ? serializedChildrenFn(caption?.root as SerializedElementNode) : '';
						if (serializedCaption) {
							return (
								<div className={
									clsxm(
										'flex flex-col md:flex-row gap-[30px] mt-[30px] items-center',
										alignment === 'right' && 'md:flex-row-reverse',
									)
								}>
									<div className='w-full md:w-[60%] h-[280px] relative'>
										<Image
											src={ value?.url as string ?? '' }
											alt={ value?.alt as string ?? '' }
											fill
											className='object-cover rounded-[30px]'
											objectPosition='center'
										/>
									</div>
									<div
										className='md:w-[40%] text-primary font-Poppins text-base md:text-xl leading-[30px] md:leading-10 -tracking-[0.64px] md:-tracking-[0.8px]'
									>
										<p>{ serializedCaption }</p>
									</div>
								</div>
							);
						} else {
							return (
								<div className='w-full h-[350px] md:h-[340px] relative lg:mt-5 lg:mb-[30px] mt-[10px] mb-5'>
									<Image
										src={ value?.url as string ?? '' }
										alt={ value?.alt as string ?? '' }
										fill
										className='object-cover rounded-[30px]'
										objectPosition='center'
									/>
								</div>
							);
						}
					}

					// case 'label':
					// 	return <Label key={ index }>{ serializedChildren }</Label>;

					// case 'largeBody': {
					// 	return <LargeBody key={ index }>{ serializedChildren }</LargeBody>;
					// }
					case 'list': {
						const node = _node as SerializedListNode;

            type List = Extract<keyof JSX.IntrinsicElements, 'ol' | 'ul'>
            const Tag = node?.tag as List;
            return (
            	<Tag
            		className={ clsxm(
            			'lg:text-xl font-Poppins text-primary list-inside',
            			node?.tag === 'ol' && 'list-decimal',
            			node?.tag === 'ul' && 'list-disc',
            		) }
            		key={ index }>
            		{ serializedChildren }
            	</Tag>
            );
					}
					case 'listitem': {
						const node = _node as SerializedListItemNode;

						return (
							<li
								key={ index }
								value={ node?.value }>
								{ serializedChildren }
							</li>
						);
					}
					case 'quote': {
						// const node = _node a;

						return <blockquote key={ index }>{ serializedChildren }</blockquote>;
					}
					case 'link': {
						const node = _node as SerializedLinkNode;

						const fields: LinkFields = node.fields;

						if (fields.linkType === 'custom') {
							// const rel = fields.newTab ? 'noopener noreferrer' : undefined;

							return (
								<Link
									href={ escapeHTML(fields.url) }
									key={ index }
									{ ...(fields?.newTab
										? {
											rel: 'noopener noreferrer',
											target: '_blank',
										}
										: {}) }
								>
									{ serializedChildren }
								</Link>
							);
						} else {
							return <span key={ index }>Internal link coming soon</span>;
						}
					}

					default:
						return null;
				}
			}) }
		</Fragment>
	);
}
