/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { Fragment, type JSX } from 'react';
import type { SerializedListItemNode, SerializedListNode } from '@lexical/list';
import type { SerializedHeadingNode } from '@lexical/rich-text';
import type {
	LinkFields,
	SerializedLinkNode,
	SerializedUploadNode,
} from '@payloadcms/richtext-lexical';
import escapeHTML from 'escape-html';
import type {
	SerializedElementNode,
	SerializedLexicalNode,
	SerializedTextNode,
} from 'lexical';
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
	nodes: SerializedLexicalNode[];
	headingRefs?: React.RefObject<{ [key: string]: HTMLElement | null }>;
	blockIndex?: number;
	columnIndex?: number;
}

export function serializeLexical({ nodes, headingRefs, blockIndex, columnIndex }: Props): JSX.Element {
	return (
		<Fragment>
			{ nodes?.map((_node, index): JSX.Element | null => {
				if (_node.type === 'text') {
					const node = _node as SerializedTextNode;
					let text = (
						<span
							dangerouslySetInnerHTML={ { __html: escapeHTML(node.text) } }
							key={ index }
						/>
					);
					if (node.format & IS_BOLD) {
						text = (
							<strong
								className='font-semibold text-grey-800'
								key={ index }>
								{ text }
							</strong>
						);
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
				const serializedChildrenFn = (
					node: SerializedElementNode
				): JSX.Element | null => {
					if (node.children === null) {
						return null;
					} else {
						if (
							node?.type === 'list' &&
							(node as SerializedListNode)?.listType === 'check'
						) {
							for (const item of node.children) {
								if ('checked' in item) {
									if (!item?.checked) {
										item.checked = false;
									}
								}
							}
							return serializeLexical({ nodes: node.children, headingRefs, blockIndex, columnIndex });
						} else {
							return serializeLexical({ nodes: node.children, headingRefs, blockIndex, columnIndex });
						}
					}
				};

				const serializedChildren =
					'children' in _node
						? serializedChildrenFn(_node as SerializedElementNode)
						: '';

				switch (_node.type) {
					case 'linebreak': {
						return <br key={ index } />;
					}
					case 'paragraph': {
						return (
							<p
								className='lg:text-lg font-Poppins text-grey-400'
								key={ index }>
								{ serializedChildren }
							</p>
						);
					}
					case 'heading': {
						const node = _node as SerializedHeadingNode;

						type Heading = Extract<
							keyof JSX.IntrinsicElements,
							'h1' | 'h2' | 'h3' | 'h4' | 'h5'
						>;
						const Tag = node?.tag as Heading;
						const headingId = `heading-${columnIndex}-${index}`;

						return (
							<Tag
								className={ clsxm(
									'font-Poppins text-primary text-lg md:text-[21px] leading-none font-semibold',
									node?.tag === 'h1' &&
									'text-[30px] md:text-[32px] mb-[10px] md:mb-[31px] leading-none',
									node?.tag === 'h2' &&
									'text-[24px] md:text-[26px] mb-[10px] md:mb-[31px]',
									node?.tag === 'h3' && 'text-[20.5px] md:text-[22.5px]'
								) }
								id={ headingId }
								key={ index }
								ref={ el => {
									if (headingRefs?.current) {
										headingRefs.current[headingId] = el;
									}
								} }
							>
								{ serializedChildren }
							</Tag>
						);
					}

					case 'upload': {
						const node = _node as SerializedUploadNode;
						const value = node.value;
						const caption = node?.fields?.caption as {
							root: SerializedHeadingNode;
						};
						const alignment = node?.fields?.alignment as 'left' | 'right';
						const serializedCaption = caption?.root
							? serializedChildrenFn(caption?.root as SerializedElementNode)
							: '';

						// Common image props
						const imageProps = {
							src: (value?.url as string) ?? '/images/ImageError.jpg',
							alt: (value?.alt as string) ?? 'Error loading image',
							fill: true,
							className: 'object-cover rounded-[30px] object-center border border-grey-200',
							onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
								const target = e.target as HTMLImageElement;
								target.src = '/images/ImageError.jpg';
							}
						};

						if (serializedCaption) {
							return (
								<div className={ clsxm(
									'flex flex-col md:flex-row gap-[30px] mt-[30px] items-center',
									alignment === 'right' && 'md:flex-row-reverse'
								) }>
									<div className='w-full md:w-[60%]  h-[280px] relative'>
										<Image { ...imageProps } />
									</div>
									<div className='md:w-[40%] text-primary font-Poppins text-base md:text-xl leading-[30px] md:leading-10 -tracking-[0.64px] md:-tracking-[0.8px]'>
										<p>{ serializedCaption }</p>
									</div>
								</div>
							);
						} else {
							return (
								<div className='w-full h-[350px] md:h-[340px] relative lg:mt-5 lg:mb-[30px] mt-[10px] mb-5'>
									<Image { ...imageProps } />
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

						type List = Extract<keyof JSX.IntrinsicElements, 'ol' | 'ul'>;
						const Tag = node?.tag as List;
						return (
							<Tag
								className={ clsxm(
									'lg:text-lg font-Poppins text-grey-400 list-inside flex flex-col gap-2 mt-2',
									node?.tag === 'ol' && 'list-decimal',
									node?.tag === 'ul' && 'list-disc'
								) }
								key={ index }
							>
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
									className='break-all text-[#A3E0FF] underline'
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
