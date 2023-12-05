import { Section } from '@react-email/section';
import React from 'react';

interface DualColumnProps {
  styles?: Omit<
    React.CSSProperties,
    'padding' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingBottom'
  >;
  pX?: number;
  pY?: number;
  columnOneContent: React.ReactNode;
  columnOneStyles?: React.CSSProperties;
  columnTwoContent: React.ReactNode;
  columnTwoStyles?: React.CSSProperties;
}

export const DualColumn: React.FC<DualColumnProps> = ({
	pX = 0,
	pY = 0,
	columnOneContent,
	columnTwoContent,
	columnOneStyles,
	columnTwoStyles,
	styles,
}) => {
	const colMaxWidth = pX ? (600 - 2 * pX) / 2 : 600 / 2;

	return (
		<Section
			style={ { ...twoColumnWrapper, ...styles, padding: `${pY}px ${pX}px` } }
		>
			<Section
				style={ {
					...twoColumnCol,
					maxWidth: colMaxWidth,
					...columnOneStyles,
				} }
			>
				{ columnOneContent }
			</Section>
			<Section
				style={ { ...twoColumnCol, maxWidth: colMaxWidth, ...columnTwoStyles } }
			>
				{ columnTwoContent }
			</Section>
		</Section>
	);
};

const twoColumnWrapper: React.CSSProperties = {
	textAlign: 'center',
	fontSize: 0,
};

const twoColumnCol: React.CSSProperties = {
	display: 'inline-block',
	verticalAlign: 'top',
	fontSize: 16,
	boxSizing: 'border-box',
};